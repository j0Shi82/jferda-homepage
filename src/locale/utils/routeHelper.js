import { locale } from 'svelte-i18n';
import routeLocales from 'locale/dict/routes';
import config from 'config/index';

let currentLocale;

locale.subscribe((value) => {
  currentLocale = value;
});

const getLocalizedLink = (routeName) => {
  let routePath = routeLocales[currentLocale][routeName];
  if (currentLocale !== config.app.locale.standardLanguage) {
    routePath = `/${currentLocale}${routePath}`;
  }
  return routePath;
};

export { getLocalizedLink };
