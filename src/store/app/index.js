import { writable } from 'svelte/store';

let isMobile; let isTablet; let isDesktop;
const isMenuOpen = writable(true);
let isMobileOpen = false;

/**
 * set up media queries that update store values
 */
const mqlMobile = window.matchMedia('(max-width: 599px)');
// when switching to mobile state the menu should reappear based on user interaction
const mqlMobileListener = (v) => { isMobile.set(v.matches); if (v.matches) isMenuOpen.set(isMobileOpen); };
mqlMobile.addListener(mqlMobileListener);
isMobile = writable(mqlMobile.matches);

// isMenuOpen.set(true) because menu is alwys visible on table and desktop
const mqlTablet = window.matchMedia('(min-width: 600px) and (max-width: 839px)');
const mqlTabletListener = (v) => { isTablet.set(v.matches); if (v.matches) isMenuOpen.set(true); };
mqlTablet.addListener(mqlTabletListener);
isTablet = writable(mqlTablet.matches);

const mqlDesktop = window.matchMedia('(min-width: 840px)');
const mqlDesktopListener = (v) => { isDesktop.set(v.matches); if (v.matches) isMenuOpen.set(true); };
mqlDesktop.addListener(mqlDesktopListener);
isDesktop = writable(mqlDesktop.matches);

// on mobile devices set menu to invisible on page load
if (mqlMobile.matches) isMenuOpen.set(false);

const store = {
  menu: {
    open: isMenuOpen,
    mobileState: writable(false),
  },
  breakpoints: {
    isMobile,
    isTablet,
    isDesktop,
  },
};

// save mobile state into variable that we use to set isMenuOpen on mobile devices
store.menu.mobileState.subscribe((value) => {
  isMobileOpen = value;
});

export default store;
