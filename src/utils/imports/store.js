// store stuff
import store from 'store/index';
import setRouterIsRouting from 'store/app/setter';
import { location, querystring } from 'svelte-spa-router';

import { locale, locales } from 'svelte-i18n';

const { mobileState } = store.app.menu;
const { screenWidth, isTouchDevice } = store.app.data;
const { routeName, isRouting } = store.app.router;
const { isLoading, hasError } = store.app.i18n;
const { isMobile, isTablet, isDesktop } = store.app.breakpoints;
const { active } = store.app.animations;

const { currentProject, projectInitializing } = store.projects;

export {
  setRouterIsRouting as storeSetRouterIsRouting,
  mobileState as menuMobileState,
  screenWidth,
  isTouchDevice,
  routeName as currentRouteName,
  location as currentRouteLocation,
  querystring as currentRouteQuerystring,
  isRouting as isRoutingInProgress,
  isMobile as isMobileBreakpoint,
  isTablet as isTabletBreakpoint,
  isDesktop as isDesktopBreakpoint,
  locale as currentLocale,
  locales,
  currentProject,
  projectInitializing,
  active as animationsActive,
  isLoading as isLocalizationLoading,
  hasError as hasLocalizationError,
};
