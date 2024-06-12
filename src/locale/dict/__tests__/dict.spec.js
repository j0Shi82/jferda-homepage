import config from 'config/index'
import { describe, expect, it } from 'vitest'

const supportedLanguages = config.app.locale.supportedLanguages.sort()

describe('locale/dict/dict', async () => {
  const dictionaries = await Promise.all(supportedLanguages.map(lang => import(`locale/dict/${lang}.json`)))

  // count the number of entries in each dictionary by traversing the object
  const entryCounts = dictionaries.map((dict) => {
    let count = 0
    const traverse = (obj) => {
      for (const key in obj) {
        if (typeof obj[key] === 'object') traverse(obj[key])
        else count++
      }
    }
    traverse(dict)
    return count
  })
  console.log(entryCounts)

  it('all language dictionaries have the same amount of entries', () => {
    expect(entryCounts.every(count => count === entryCounts[0])).toBe(true)
  })
})
