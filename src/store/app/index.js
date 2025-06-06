import { desktopBreakpointQueryString, mobileBreakpointQueryString, tabletBreakpointQueryString } from 'utils/imports/config.js'
import { storeTypeWritable } from 'utils/imports/svelte.js'

let isMobile = storeTypeWritable(false)
let isTablet = storeTypeWritable(false)
let isDesktop = storeTypeWritable(false)

let animationsActive
if ('localStorage' in window) {
  animationsActive = storeTypeWritable(window.localStorage.getItem('jdev-animations') !== 'false')
  animationsActive.subscribe((value) => {
    window.localStorage.setItem('jdev-animations', value)
  })
}
else {
  animationsActive = storeTypeWritable(true)
}

/**
 * set up media queries that update store values
 */
if ('matchMedia' in window && process.env.NODE_ENV !== 'test') {
  const mqlMobile = window.matchMedia(mobileBreakpointQueryString)
  // when switching to mobile state the menu should reappear based on user interaction
  const mqlMobileListener = (v) => {
    isMobile.set(v.matches)
  }
  if ('addEventListener' in mqlMobile) {
    mqlMobile.addEventListener('change', mqlMobileListener)
  }
  else {
    mqlMobile.addListener(mqlMobileListener)
  }
  isMobile = storeTypeWritable(mqlMobile.matches)

  // isMenuOpen.set(true) because menu is alwys visible on table and desktop
  const mqlTablet = window.matchMedia(tabletBreakpointQueryString)
  const mqlTabletListener = (v) => {
    isTablet.set(v.matches)
  }
  if ('addEventListener' in mqlMobile) {
    mqlTablet.addEventListener('change', mqlTabletListener)
  }
  else {
    mqlTablet.addListener(mqlTabletListener)
  }
  isTablet = storeTypeWritable(mqlTablet.matches)

  const mqlDesktop = window.matchMedia(desktopBreakpointQueryString)
  const mqlDesktopListener = (v) => {
    isDesktop.set(v.matches)
  }
  if ('addEventListener' in mqlMobile) {
    mqlDesktop.addEventListener('change', mqlDesktopListener)
  }
  else {
    mqlDesktop.addListener(mqlDesktopListener)
  }
  isDesktop = storeTypeWritable(mqlDesktop.matches)
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
  i18n: {
    isLoading: storeTypeWritable(true),
    hasError: storeTypeWritable(false),
  },
  data: {
    screenWidth: storeTypeWritable(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
    isTouchDevice: storeTypeWritable('ontouchstart' in document.documentElement),
  },
  animations: {
    active: animationsActive,
  },
}

window.addEventListener('resize', () => {
  store.data.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
})

export default store
