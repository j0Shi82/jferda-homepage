// routing
import getLocalizedRoute from 'locale/utils/routeHelper';
import getGuards from 'router/utils/getGuards';
import Router, { push } from 'svelte-spa-router';
import wrap from 'svelte-spa-router/wrap';
import routes from 'router/index';
import routeLoaded from 'router/routeLoaded';

// locale
import {
  _, register, init, date, addMessages,
} from 'svelte-i18n';
import setupLocalization from 'locale/i18n';

export {
  getLocalizedRoute,
  getGuards as getRouteGuards,
  Router as RouterComponent,
  routes,
  routeLoaded as routerOnRouteLoaded,
  push as routerPush,
  wrap as routeWrapper,
  _ as localize,
  date as formatDate,
  register as registerLocaleDict,
  init as initLocalization,
  addMessages as addLocalizationFile,
  setupLocalization,
};
