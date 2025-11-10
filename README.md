# language-packages

**Download Hunspell dictionaries and Snowball stemmers on demand. Most dictionaries are sourced from [`wooorm/dictionaries`](https://github.com/wooorm/dictionaries) providing coverage for 42+ languages. A notable difference is that `language-packages` exposes the Hunspell dictionaries as file paths rather than buffers. This fits in its goal of not loading more data than necessary.**

[![npm status](http://img.shields.io/npm/v/language-packages.svg)](https://www.npmjs.org/package/language-packages)
[![node](https://img.shields.io/node/v/language-packages.svg)](https://www.npmjs.org/package/language-packages)
![Test](https://github.com/vweevers/language-packages/workflows/Test/badge.svg?branch=main)
[![Standard](https://img.shields.io/badge/standard-informational?logo=javascript\&logoColor=fff)](https://standardjs.com)
[![Common Changelog](https://common-changelog.org/badge.svg)](https://common-changelog.org)

## Usage

To load a Hunspell dictionary and use it with e.g. [`hunspell-native`](https://github.com/vweevers/hunspell-native):

```js
import { loadDictionary } from 'language-packages'
import { Hunspell } from 'hunspell-native'

const dictionary = await loadDictionary('en-US')
const hunspell = new Hunspell(dictionary)

// Check if a word is spelled correctly
console.log(await hunspell.spell('color')) // true
```

Locale codes use the BCP-47 format. Typically that's a language and region (e.g. `en-US` or `de-DE`). You can also provide a pure language code (e.g. `en`) if it has a preferred region. This means `en` loads the same dictionary as `en-US` and `de` loads the same dictionary as `de-DE`. Specific regional variants like `en-CA` (Canada) can only be found by that locale code.

The given locale must match one of the `locales` in [`lib/descriptors.js`](./lib/descriptors.js). If none match then `null` is returned. If you prefer an error to be thrown, set the `strict` option as described below.

On first run, the `loadDictionary` function will download the npm package for the given locale and cache it (in `.language-packages` in your home directory).

Although Hunspell comes with a stemmer, it may be preferable to (also) use a [Snowball stemmer](https://snowballstem.org/) because that doesn't rely on the input word to exist in the dictionary. For this you can use `loadStemmer` which works the same as `loadDictionary`:

```js
import { loadStemmer } from 'language-packages'

const stem = await loadStemmer('en-US')

console.log(stem('books')) // book
```

## Language Support

At the time of writing around 42 languages are included and have dictionaries. Stemmers have less coverage. See [`lib/descriptors.js`](./lib/descriptors.js) for a complete list. Pull requests for additional languages or locales are welcome. To start, a few more dictionaries are available in [`wooorm/dictionaries`](https://github.com/wooorm/dictionaries) and not yet mapped here. Other packages may work if they contain `.aff` and `.dic` files. To add a new language or locale:

1. Find a dictionary package on npm (or create one).
2. Add an entry to [`lib/descriptors.js`](./lib/descriptors.js)
3. Run `node scripts/update.js [--dry-run] [--offline]` to fetch metadata
4. Submit a pull request.

## Security

Though `language-packages` downloads packages on demand - outside of a normal npm flow - it only downloads known versions. The packages are locked by version and integrity hash, which are hardcoded to the same effect as a lock file (like `package-lock.json`). At runtime, if a downloaded package does not match the integrity hash, an error will be thrown.

## API

### `loadDictionary(locale: string, options?: LoadOptions): Promise<Dictionary | null>`

Load a dictionary. Yields a dictionary object with `aff` and `dic` properties which are absolute file paths to a Hunspell affix file and dictionary file. Yields null if the given `locale` has no matching dictionary.

### `LoadOptions`

This is an object with the following optional properties.

#### `strict: boolean`

Instead of returning null when the `locale` doesn't match anything, throw an error. Default is false. Using this option changes the TypeScript return type of `loadDictionary` and `loadStemmer` from e.g. `Dictionary | null` to `Dictionary`.

#### `offline: boolean`

Throw an error if the package wasn't already downloaded (default false). This is useful if you want to disable downloads at runtime and instead predownload packages in some form of build script.

```js
// In your build script:
await loadDictionary('en-US')

// In your application:
const dictionary = await loadDictionary('en-US', { offline: true })
```

#### `beforeDownload: (spec: string) => Promise<void>`

A function to call before a package is downloaded. None by default. Intended for logging.

```js
const dictionary = await loadDictionary('en-US', {
  beforeDownload: async function (spec) {
    console.log('Downloading package %s...', spec)
  }
})
```

### `loadDictionaries(locales: string[], options?: LoadOptions): Promise<Map<string, Dictionary | null>>`

Load multiple dictionaries in parallel. The returned map will have an entry for each given locale, with a value that is either a dictionary (if a match was found) or null.

### `loadStemmer(locale: string, options?: LoadOptions): Promise<Stemmer | null>`

Load a stemmer. Yields a function, or null if the given `locale` has no matching stemmer.

### `loadStemmers(locales: string[], options?: LoadOptions): Promise<Map<string, Stemmer | null>>`

Load multiple stemmers in parallel. The returned map will have an entry for each given locale, with a value that is either a stemmer function (if a match was found) or null.

## Install

With [npm](https://npmjs.org) do:

```
npm install language-packages
```

## License

[MIT](LICENSE)
