import setIsLoadingFalse from 'router/events/setIsLoadingFalse.js'
import { currentRouteName } from 'utils/imports/store.js'

export default (event) => {
  currentRouteName.set(event.detail.userData.routeName)
  setIsLoadingFalse()
}
