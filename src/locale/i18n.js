import { registerLocaleDict, initLocalization } from 'utils/imports/core';
import { localeSupportedLanguages, localeStandardLanguage } from 'utils/imports/config';

export default () => {
  localeSupportedLanguages.forEach((lang) => {
    registerLocaleDict(lang, () => import(`locale/dict/${lang}.json`))
  })

  initLocalization({
    fallbackLocale: 'en',
    initialLocale: localeStandardLanguage,
  })
}
