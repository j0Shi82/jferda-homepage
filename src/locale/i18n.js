import { registerLocaleDict, initLocalization } from 'utils/imports/core';
import { localeSupportedLanguages, localeStandardLanguage } from 'utils/imports/config';

export default () => {
  localeSupportedLanguages.forEach((lang) => {
    const file = `locale/dict/${lang}.json`;
    registerLocaleDict(lang, () => import(file));
  });

  initLocalization({
    fallbackLocale: 'en',
    initialLocale: localeStandardLanguage,
  });
};
