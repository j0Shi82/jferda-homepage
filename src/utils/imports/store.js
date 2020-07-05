// store stuff
import store from 'store/index';
import { setRouterIsRouting } from 'store/app/setter';

import { locale, locales } from 'svelte-i18n';

const { mobileState } = store.app.menu;
const { screenWidth } = store.app.data;
const { routeName, isRouting } = store.app.router;
const { isMobile, isTablet, isDesktop } = store.app.breakpoints;

export {
  setRouterIsRouting as storeSetRouterIsRouting,
  mobileState as menuMobileState,
  screenWidth,
  routeName as currentRouteName,
  isRouting as isRoutingInProgress,
  isMobile as isMobileBreakpoint,
  isTablet as isTabletBreakpoint,
  isDesktop as isDesktopBreakpoint,
  locale as currentLocale,
  locales,
};
