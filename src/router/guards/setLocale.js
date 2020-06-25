import { locale } from 'svelte-i18n';
import config from 'config/index';

export default (detail) => {
  if (
    detail.userData
    && detail.userData.lang
    && config.app.locale.supportedLanguages.includes(detail.userData.lang)
  ) {
    locale.set(detail.userData.lang);
  }
  return true;
};
