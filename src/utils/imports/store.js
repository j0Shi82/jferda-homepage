// store stuff
import setRouterIsRouting from 'store/app/setter.js'
import store from 'store/index.js'
import { location, querystring } from 'svelte-spa-router'

import { locale, locales } from 'svelte-i18n'

const { mobileState } = store.app.menu
const { screenWidth, isTouchDevice } = store.app.data
const { routeName, isRouting } = store.app.router
const { isLoading, hasError } = store.app.i18n
const { isMobile, isTablet, isDesktop } = store.app.breakpoints
const { active } = store.app.animations

const { currentProject, projectInitializing } = store.projects

export {
	active as animationsActive,
	locale as currentLocale,
	currentProject,
	location as currentRouteLocation,
	routeName as currentRouteName,
	querystring as currentRouteQuerystring,
	hasError as hasLocalizationError,
	isDesktop as isDesktopBreakpoint,
	isLoading as isLocalizationLoading,
	isMobile as isMobileBreakpoint,
	isRouting as isRoutingInProgress,
	isTablet as isTabletBreakpoint,
	isTouchDevice,
	locales,
	mobileState as menuMobileState,
	projectInitializing,
	screenWidth,
	setRouterIsRouting as storeSetRouterIsRouting,
}
