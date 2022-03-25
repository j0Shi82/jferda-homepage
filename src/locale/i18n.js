import { initLocalization, addLocalizationFile } from 'utils/imports/core';
import { localeSupportedLanguages, localeStandardLanguage } from 'utils/imports/config';
import { hasLocalizationError, isLocalizationLoading } from 'utils/imports/store';

const languageCount = localeSupportedLanguages.length;
let loadedCount = 0;

export default () => {
  localeSupportedLanguages.forEach((lang) => {
    // need to disable prefer-template here because of a bug in babel
    // https://github.com/babel/babel/issues/11844
    // eslint-disable-next-line prefer-template
    import('locale/dict/' + lang + '.json').then((module) => {
      addLocalizationFile(lang, module.default);
    }).catch(() => {
      hasLocalizationError.set(true);
    }).finally(() => {
      loadedCount += 1;
      if (languageCount === loadedCount) {
        isLocalizationLoading.set(false);
      }
    });
  });

  initLocalization({
    fallbackLocale: 'en',
    initialLocale: localeStandardLanguage,
  });
};
