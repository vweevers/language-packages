import pacote from 'pacote'
import semver from 'semver'
import prettier from 'prettier'
import { resolve } from 'resolve.exports'
import { readFile, writeFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { getStoragePath } from '../lib/paths.js'
import { descriptors } from '../lib/descriptors.js'

const storagePath = getStoragePath()
const manifestCache = new Map()
const argv = process.argv.slice(2)
const offline = argv.includes('--offline')
const dryRun = argv.includes('--dry-run')
const results = []

for (const descriptor of descriptors) {
  console.error(`Updating ${descriptor.name}...`)

  if (descriptor.dictionary) {
    if (!offline) {
      await updateDictionary(descriptor.dictionary)
    }

    // Sort and cleanup properties
    descriptor.dictionary = {
      name: descriptor.dictionary.name,
      version: descriptor.dictionary.version,
      license: descriptor.dictionary.license,
      integrity: descriptor.dictionary.integrity,
      publishers: descriptor.dictionary.publishers,
      aff: descriptor.dictionary.aff,
      dic: descriptor.dictionary.dic
    }
  }

  if (descriptor.stemmer) {
    if (!offline) {
      await updateStemmer(descriptor.stemmer)
    }

    // Sort and cleanup properties
    descriptor.stemmer = {
      name: descriptor.stemmer.name,
      version: descriptor.stemmer.version,
      license: descriptor.stemmer.license,
      integrity: descriptor.stemmer.integrity,
      publishers: descriptor.stemmer.publishers,
      entryPoint: descriptor.stemmer.entryPoint,
      resolved: descriptor.stemmer.resolved
    }
  }

  results.push({
    name: descriptor.name,
    locales: descriptor.locales,
    dictionary: descriptor.dictionary || null,
    stemmer: descriptor.stemmer || null
  })
}

const json = JSON.stringify(results, null, 2)
const importCode = 'import { Descriptor } from \'./descriptor.js\''
const exportCode = `export const descriptors = ${json}.map(x => new Descriptor(x))`
const code = importCode + '\n\n' + exportCode

const formatted = await prettier.format(code, {
  parser: 'babel',
  semi: false,
  singleQuote: true,
  trailingComma: 'none',

  // For long integrity strings
  printWidth: 120
})

if (dryRun) {
  console.log(formatted)
} else {
  await writeFile('lib/descriptors.js', formatted)
  console.log('Done')
}

async function updateDictionary (dictionary) {
  const packageName = dictionary.name
  const packagePath = path.join(storagePath, packageName)
  const latest = await getLatest(packageName, dictionary.publishers)

  if (latest) {
    if (latest.version !== dictionary.version) {
      dictionary.integrity = null
    }

    dictionary.version = latest.version
    dictionary.license = latest.license
  }

  // Sanity check
  if (!semver.valid(dictionary.version)) {
    throw new Error('Invalid version: ' + dictionary.version)
  }

  if (!dictionary.integrity || !dictionary.aff || !dictionary.dic) {
    const spec = `npm:${packageName}@${dictionary.version}`
    const versionPath = path.join(packagePath, dictionary.version)

    console.error(`Downloading dictionary ${spec}...`)

    const fetchResult = await pacote.extract(spec, versionPath)
    dictionary.integrity = fetchResult.integrity

    // Set the affix file and dictionary file. The packages currently don't
    // export the file paths (only buffers) so we have to guess the paths.
    dictionary.aff ??= 'index.aff'
    dictionary.dic ??= 'index.dic'

    const aff = path.join(versionPath, dictionary.aff)
    const dic = path.join(versionPath, dictionary.dic)

    // Check that the files exist
    return Promise.all([stat(aff), stat(dic)])
  }
}

async function updateStemmer (stemmer) {
  const packageName = stemmer.name
  const packagePath = path.join(storagePath, packageName)
  const latest = await getLatest(packageName, stemmer.publishers)

  if (latest) {
    if (latest.version !== stemmer.version) {
      stemmer.integrity = null
    }

    stemmer.version = latest.version
    stemmer.license = latest.license
  }

  // Sanity check
  if (!semver.valid(stemmer.version)) {
    throw new Error('Invalid version: ' + stemmer.version)
  }

  if (!stemmer.integrity || !stemmer.entryPoint || !stemmer.resolved) {
    const spec = `npm:${packageName}@${stemmer.version}`
    const versionPath = path.join(packagePath, stemmer.version)

    console.error(`Downloading stemmer ${spec}...`)

    const fetchResult = await pacote.extract(spec, versionPath)
    stemmer.integrity = fetchResult.integrity

    // Resolve exports
    const packageJsonPath = path.join(versionPath, 'package.json')
    const pkg = JSON.parse(await readFile(packageJsonPath, 'utf8'))
    const entryPoint = normalizeEntryPoint(stemmer.entryPoint)
    const resolved = resolve(pkg, entryPoint)

    if (resolved?.length !== 1 || !resolved[0]) {
      throw new Error('Stemmer export not found')
    }

    stemmer.entryPoint = entryPoint
    stemmer.resolved = resolved[0]

    // Check that the module exists
    return stat(path.join(versionPath, stemmer.resolved))
  }
}

function normalizeEntryPoint (entryPoint) {
  if (!entryPoint || entryPoint === '.') {
    entryPoint = './'
  } else if (!entryPoint.startsWith('./')) {
    entryPoint = './' + entryPoint
  }

  if (!/^\.\/([a-z0-9-_]+(\.[a-z]{2,3})?)?$/i.test(entryPoint)) {
    throw new Error('Invalid entry point')
  }

  return entryPoint
}

async function getLatest (packageName, publishers) {
  if (manifestCache.has(packageName)) {
    return manifestCache.get(packageName)
  } else {
    const latestSpec = `npm:${packageName}@latest`
    console.error(`Fetching manifest ${latestSpec}...`)

    // Fetch with full metadata to get _npmUser and _time
    let manifest = await pacote.manifest(latestSpec, {
      fullMetadata: true
    })

    // Doesn't exist in types; might be an undocumented property. Let's keep
    // checking that it's present.
    const _time = /** @type {number} */ (manifest['_time'])

    if (!_time) {
      throw new Error('Expected manifest to have a _time property')
    }

    const publisher = manifest._npmUser.name
    const time = new Date(_time).valueOf()
    const ageInDays = (Date.now() - time) / 1e3 / 60 / 60 / 24

    // Verify ownership changes
    if (!publishers.includes(publisher)) {
      throw new Error(`Not a known publisher: ${publisher}`)
    }

    // Apply a delay before auto-updating
    if (ageInDays < 7) {
      // @ts-expect-error
      manifest = null
    }

    manifestCache.set(packageName, manifest)
    return manifest
  }
}
