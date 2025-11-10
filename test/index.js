import assert from 'node:assert'
import test from 'node:test'
import { loadDictionary, loadDictionaries, loadStemmer, loadStemmers } from '../index.js'
import { descriptors } from '../lib/descriptors.js'

test('download one', async function () {
  const dictionary = await loadDictionary('en', { strict: true })
  const stem = await loadStemmer('en', { strict: true })

  assert.equal(typeof dictionary?.dic, 'string')
  assert.equal(typeof dictionary?.aff, 'string')
  assert.equal(typeof stem, 'function')
  assert.equal(stem('books'), 'book')
})

process.env['CI'] || test('download all', async function () {
  const locales = /** @type {string[]} */ (descriptors.map(x => x.locales[0]))
  const beforeDownload = async (spec) => { console.log('Downloading', spec) }
  const dictionaries = await loadDictionaries(locales, { beforeDownload })
  const stemmers = await loadStemmers(locales, { beforeDownload })

  for (const descriptor of descriptors) {
    if (!descriptor.locales[0]) assert.fail()
    const locale = descriptor.locales[0]

    assert.equal(dictionaries.get(locale) != null, descriptor.dictionary != null)
    assert.equal(stemmers.get(locale) != null, descriptor.stemmer != null)
  }
})
