import { writable } from 'svelte/store';
import config from 'config/index';

let isMobile; let isTablet; let isDesktop;
const isMenuOpen = writable(true);
let isMobileOpen = false;

/**
 * set up media queries that update store values
 */
const mqlMobile = window.matchMedia(config.app.breakpoints.mobile);
// when switching to mobile state the menu should reappear based on user interaction
const mqlMobileListener = (v) => { isMobile.set(v.matches); if (v.matches) isMenuOpen.set(isMobileOpen); };
mqlMobile.addListener(mqlMobileListener);
isMobile = writable(mqlMobile.matches);

// isMenuOpen.set(true) because menu is alwys visible on table and desktop
const mqlTablet = window.matchMedia(config.app.breakpoints.mobile);
const mqlTabletListener = (v) => { isTablet.set(v.matches); if (v.matches) isMenuOpen.set(true); };
mqlTablet.addListener(mqlTabletListener);
isTablet = writable(mqlTablet.matches);

const mqlDesktop = window.matchMedia(config.app.breakpoints.mobile);
const mqlDesktopListener = (v) => { isDesktop.set(v.matches); if (v.matches) isMenuOpen.set(true); };
mqlDesktop.addListener(mqlDesktopListener);
isDesktop = writable(mqlDesktop.matches);

// on mobile devices set menu to invisible on page load
if (mqlMobile.matches) isMenuOpen.set(false);

const store = {
  menu: {
    open: isMenuOpen, // menu state
    mobileState: writable(false), // mobile menu state (menu is collapsible on mobile)
  },
  breakpoints: {
    isMobile, // mobile breakpoint
    isTablet, // tablet breakpoint
    isDesktop, // desktop breakpoint
  },
  router: {
    isRouting: writable(false), // ongoing route change
  },
};

// save mobile state into variable that we use to set isMenuOpen on mobile devices
store.menu.mobileState.subscribe((value) => {
  isMobileOpen = value;
});

export default store;
