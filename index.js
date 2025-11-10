/** @import { Dictionary, Stemmer, LoadOptions } from './index.js' */

import pacote from 'pacote'
import { getLock } from 'p-lock'
import { pathToFileURL } from 'node:url'
import path from 'node:path'
import { stat } from 'node:fs/promises'
import { getStoragePath } from './lib/paths.js'
import { descriptors } from './lib/descriptors.js'

const lockStorage = getLock()

export async function loadDictionary (locale, options = null) {
  const storagePath = getStoragePath()
  const descriptor = descriptors.find(x => x.isLocale(locale))
  const dictionary = descriptor?.dictionary

  if (!dictionary) {
    // @ts-expect-error
    if (options?.strict) {
      throw new Error(`No dictionary available for ${locale}`)
    }

    return null
  }

  const { name, version, integrity } = dictionary
  const packagePath = path.join(storagePath, name, version)
  const spec = `npm:${name}@${version}`

  await downloadIfMissing(spec, packagePath, integrity, options)

  const aff = path.join(packagePath, dictionary.aff)
  const dic = path.join(packagePath, dictionary.dic)

  return { aff, dic }
}

export async function loadDictionaries (locales, options = null) {
  /**
   * @type {Map<string, Dictionary | null>}
   */
  const dictionaries = new Map()

  await Promise.all(locales.map(async (locale) => {
    dictionaries.set(
      locale,
      await loadDictionary(locale, options)
    )
  }))

  return dictionaries
}

export async function loadStemmer (locale, options = null) {
  const storagePath = getStoragePath()
  const descriptor = descriptors.find(x => x.isLocale(locale))
  const stemmer = descriptor?.stemmer

  if (!stemmer) {
    // @ts-expect-error
    if (options?.strict) {
      throw new Error(`No stemmer available for ${locale}`)
    }

    return null
  }

  const { name, version, integrity } = stemmer
  const packagePath = path.join(storagePath, name, version)
  const spec = `npm:${name}@${version}`

  await downloadIfMissing(spec, packagePath, integrity, options)

  const modulePath = path.join(packagePath, stemmer.resolved)
  const wrapped = await import(pathToFileURL(modulePath).href)
  const mod = wrapped.default ?? wrapped

  return mod.stemmer ?? mod
}

export async function loadStemmers (locales, options = null) {
  /**
   * @type {Map<string, Stemmer>}
   */
  const stemmers = new Map()

  await Promise.all(locales.map(async (locale) => {
    stemmers.set(
      locale,
      await loadStemmer(locale, options)
    )
  }))

  return stemmers
}

/**
 * Download an npm package if it doesn't already exist on disk. Safe to be
 * called in parallel.
 *
 * @param {string} spec Package specifier
 * @param {string} packagePath Where to store package.
 * @param {string} integrity Integrity hash to match.
 * @param {LoadOptions | null} options Options.
 */
async function downloadIfMissing (spec, packagePath, integrity, options) {
  // Sanity check
  if (!integrity) {
    throw new Error('Integrity hash is required')
  }

  const release = await lockStorage(packagePath)

  try {
    if (!(await hasPackageJson(packagePath))) {
      if (options?.offline) {
        throw new Error(`Language package is missing: ${spec}`)
      }

      if (options?.beforeDownload) {
        await options?.beforeDownload(spec)
      }

      await pacote.extract(spec, packagePath, {
        integrity
      })
    }
  } finally {
    release()
  }
}

/**
 * @param {string} dir
 * @returns {Promise<boolean>}
 */
export async function hasPackageJson (dir) {
  try {
    await stat(path.join(dir, 'package.json'))
    return true
  } catch (err) {
    // @ts-expect-error
    if (err.code === 'ENOENT') return false
    throw err
  }
}
