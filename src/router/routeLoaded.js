import setIsLoadingFalse from 'router/events/setIsLoadingFalse';
import appStore from 'store/app/index';

export default (event) => {
  appStore.router.routeName.set(event.detail.userData.routeName);
  setIsLoadingFalse();
};
