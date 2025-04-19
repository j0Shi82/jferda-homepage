import appStore from 'store/app/index.js'

const setRouterIsRouting = (state) => {
  appStore.router.isRouting.set(state)
}

export default setRouterIsRouting
