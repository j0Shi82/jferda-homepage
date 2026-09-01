import { localeStandardLanguage, localeSupportedLanguages } from 'utils/imports/config.js'
import { addLocalizationFile, initLocalization } from 'utils/imports/core.js'
import { hasLocalizationError, isLocalizationLoading } from 'utils/imports/store.js'

const languageCount = localeSupportedLanguages.length
let loadedCount = 0

export default () => {
  localeSupportedLanguages.forEach((lang) => {
    // Relative + template literal so Vite/Rollup can statically glob the dicts.
    import(`./dict/${lang}.json`)
      .then((module) => {
        addLocalizationFile(lang, module.default)
      })
      .catch(() => {
        hasLocalizationError.set(true)
      })
      .finally(() => {
        loadedCount += 1
        if (languageCount === loadedCount) {
          isLocalizationLoading.set(false)
        }
      })
  })

  initLocalization({
    fallbackLocale: 'en',
    initialLocale: localeStandardLanguage,
  })
}
