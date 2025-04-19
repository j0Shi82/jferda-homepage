import config from 'config/index'
import { describe, expect, test } from 'vitest'

describe('config/index', () => {
  test('standardLanguage is on supportedLanguages', () => {
    expect(config.app.locale.supportedLanguages).toContain(config.app.locale.standardLanguage)
  })
})
