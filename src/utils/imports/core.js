// routing
import getLocalizedRoute from 'locale/utils/routeHelper.js'
import routes from 'router/index.js'
import routeLoaded from 'router/routeLoaded.js'
import Router, { push } from 'svelte-spa-router'

// locale
import setupLocalization from 'locale/i18n.js'
import { _, addMessages, date, init, register } from 'svelte-i18n'

export {
  Router as RouterComponent,
  addMessages as addLocalizationFile,
  date as formatDate,
  getLocalizedRoute,
  init as initLocalization,
  _ as localize,
  register as registerLocaleDict,
  routeLoaded as routerOnRouteLoaded,
  push as routerPush,
  routes,
  setupLocalization,
}
