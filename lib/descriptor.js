/** @import { DescriptorOptions } from '../index.js' */

import escapeRegex from 'escape-string-regexp'

export class Descriptor {
  #localeRegex

  /**
   * @param {DescriptorOptions} param0
   */
  constructor ({ locales, dictionary, stemmer, name }) {
    this.#localeRegex = new RegExp(
      '^(' + locales.map(escapeRegex).join('|') + ')$',
      'i'
    )

    this.locales = locales
    this.dictionary = dictionary
    this.stemmer = stemmer
    this.name = name
  }

  /**
   * @param {string} locale
   * @returns {boolean}
   */
  isLocale (locale) {
    return this.#localeRegex.test(locale)
  }
}
