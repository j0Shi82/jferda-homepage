import appStore from 'store/app/index';

const setMobileMenuState = (state) => {
  appStore.menu.open.set(state);
  appStore.menu.mobileState.set(state);
};

const setRouterIsRouting = (state) => {
  appStore.router.isRouting.set(state);
};

export { setMobileMenuState, setRouterIsRouting };
