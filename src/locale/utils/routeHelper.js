import { localeStandardLanguage } from 'utils/imports/config.js'
import { routeLocaleDict } from 'utils/imports/data.js'
import { currentLocale } from 'utils/imports/store.js'

let localeStoreValue

currentLocale.subscribe((value) => {
  localeStoreValue = value
})

const getLocalizedRoute = (routeName, lang = localeStoreValue) => {
  let routePath = routeLocaleDict[lang][routeName]
  if (lang !== localeStandardLanguage) {
    routePath = `/${lang}${routePath}`
  }
  return routePath
}

export default getLocalizedRoute
