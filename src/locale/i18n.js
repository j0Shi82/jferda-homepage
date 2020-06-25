import { register, init } from 'svelte-i18n';
import config from 'config/index';

export default () => {
  config.app.locale.supportedLanguages.forEach((lang) => {
    register(lang, () => import(`locale/dict/${lang}.json`));
  });

  init({
    fallbackLocale: 'en',
    initialLocale: config.app.locale.standardLanguage,
  });
};
