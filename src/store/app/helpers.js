import appStore from 'store/app/index';

const setMobileMenuState = (state) => {
  appStore.menu.open.set(state);
  appStore.menu.mobileState.set(state);
};

export { setMobileMenuState };
