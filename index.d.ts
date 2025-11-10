/**
 * Hunspell dictionary.
 */
export interface Dictionary {
  /**
   * Path to the affix file.
   */
  aff: string

  /**
   * Path to the dictionary file.
   */
  dic: string
}

export interface DescriptorOptions {
  /**
   * Locale codes to match on.
   */
  locales: string[]

  /**
   * An npm package that exports Hunspell dictionaries.
   */
  dictionary: DictionaryPackage

  /**
   * An npm package that exports a stemmer function.
   */
  stemmer: StemmerPackage | null

  /**
   * Name of locale.
   */
  name: string
}

export interface Descriptor extends DescriptorOptions {
  isLocale (locale: string): boolean
}

export interface DictionaryPackage {
  name: string
  version: string
  integrity: string
  publishers: string[]
  license: string
  aff: string
  dic: string
}

export interface StemmerPackage {
  name: string
  version: string
  integrity: string
  publishers: string[]
  license: string
  entryPoint: string
  resolved: string
}

/**
 * Stemmer function.
 */
export type Stemmer = {
  /**
   * @param word The input word.
   */
  (word: string): string
}

/**
 * Function to call before a package is downloaded. Intended for logging.
 */
export type BeforeDownload = {
  /**
   * @param spec The package specifier, for example `npm:dictionary-en@1.0.0`.
   */
  (spec: string): Promise<void>
}

/**
 * Options for {@link loadDictionary()} and {@link loadStemmer()}.
 */
export interface LoadOptions {
  /**
   * Instead of returning null when the `locale` doesn't match anything, throw
   * an error.
   *
   * @defaultValue `false`
   */
  strict?: boolean

  /**
   * Throw an error if the package wasn't already downloaded. This is useful if
   * you want to disable downloads at runtime and instead predownload packages
   * in some form of build script.
   *
   * @defaultValue `false`
   */
  offline?: boolean | null

  /**
   * Function to call before a package is downloaded. Intended for logging.
   *
   * @defaultValue `null`
   */
  beforeDownload?: BeforeDownload | null
}

/**
 * Load a dictionary. Yields a dictionary object with `aff` and `dic` properties
 * which are absolute file paths to a Hunspell affix file and dictionary file.
 * Yields null if the given `locale` has no matching dictionary.
 *
 * @param locale Locale code in BCP-47 format (e.g., `en-US`, `en`, `es-ES`).
 * @param options Options.
 */
export function loadDictionary (locale: string, options: LoadOptions & { strict: true }): Promise<Dictionary>
export function loadDictionary (locale: string, options?: LoadOptions) : Promise<Dictionary | null>

/**
 * Load multiple dictionaries in parallel. The returned map will have an entry
 * for each given locale, with a value that is either a dictionary (if a match
 * was found) or null.
 *
 * @param locales Array of locale codes.
 * @param options Options.
 */
export function loadDictionaries (locales: string[], options: LoadOptions & { strict: true }): Promise<Map<string, Dictionary>>
export function loadDictionaries (locales: string[], options?: LoadOptions) : Promise<Map<string, Dictionary | null>>

/**
 * Load a stemmer. Yields a function, or null if the given `locale` has no
 * matching stemmer.
 *
 * @param locale Locale code in BCP-47 format (e.g., `en-US`, `en`, `es-ES`).
 * @param options Options.
 */
export function loadStemmer (locale: string, options: LoadOptions & { strict: true }): Promise<Stemmer>
export function loadStemmer (locale: string, options?: LoadOptions) : Promise<Stemmer | null>

/**
 * Load multiple stemmers in parallel. The returned map will have an entry for
 * each given locale, with a value that is either a stemmer function (if a match
 * was found) or null.
 *
 * @param locales Array of locale codes.
 * @param options Options.
 */
export function loadStemmers (locales: string[], options: LoadOptions & { strict: true }): Promise<Map<string, Stemmer>>
export function loadStemmers (locales: string[], options?: LoadOptions) : Promise<Map<string, Stemmer | null>>
