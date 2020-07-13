import { storeTypeWritable } from 'utils/imports/svelte';
import { mobileBreakpointQueryString, tabletBreakpointQueryString, desktopBreakpointQueryString } from 'utils/imports/config';

let isMobile = storeTypeWritable(false);
let isTablet = storeTypeWritable(false);
let isDesktop = storeTypeWritable(false);

/**
 * set up media queries that update store values
 */
if ('matchMedia' in window) {
  const mqlMobile = window.matchMedia(mobileBreakpointQueryString);
  // when switching to mobile state the menu should reappear based on user interaction
  const mqlMobileListener = (v) => { isMobile.set(v.matches); };
  mqlMobile.addListener(mqlMobileListener);
  isMobile = storeTypeWritable(mqlMobile.matches);

  // isMenuOpen.set(true) because menu is alwys visible on table and desktop
  const mqlTablet = window.matchMedia(tabletBreakpointQueryString);
  const mqlTabletListener = (v) => { isTablet.set(v.matches); };
  mqlTablet.addListener(mqlTabletListener);
  isTablet = storeTypeWritable(mqlTablet.matches);

  const mqlDesktop = window.matchMedia(desktopBreakpointQueryString);
  const mqlDesktopListener = (v) => { isDesktop.set(v.matches); };
  mqlDesktop.addListener(mqlDesktopListener);
  isDesktop = storeTypeWritable(mqlDesktop.matches);
}

const store = {
  menu: {
    mobileState: storeTypeWritable(false), // mobile menu state (menu is collapsible on mobile)
  },
  breakpoints: {
    isMobile, // mobile breakpoint
    isTablet, // tablet breakpoint
    isDesktop, // desktop breakpoint
  },
  router: {
    isRouting: storeTypeWritable(false), // ongoing route change
    routeName: storeTypeWritable(null), // current route name because spa router only offers path
  },
  data: {
    screenWidth: storeTypeWritable(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
  },
  animations: {
    active: storeTypeWritable(true),
  },
};

window.addEventListener('resize', () => {
  store.data.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
});

export default store;
