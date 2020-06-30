// store stuff
import store from 'store/index';
import { setMobileMenuState, setRouterIsRouting } from 'store/app/setter';

import { locale, locales } from 'svelte-i18n';

const { mobileState } = store.app.menu;
const { routeName, isRouting } = store.app.router;
const { isMobile } = store.app.breakpoints;

export {
  setMobileMenuState as storeSetMobileMenuState,
  setRouterIsRouting as storeSetRouterIsRouting,
  mobileState as menuMobileState,
  routeName as currentRouteName,
  isRouting as isRoutingInProgress,
  isMobile as isMobileBreakpoint,
  locale as currentLocale,
  locales,
};
