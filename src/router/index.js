import baseRoutes from 'router/baseRoutes.js'
import getGuards from 'router/utils/getGuards.js'
// import wrap from 'utils/helpers/wrap.js'
import { wrap } from 'svelte-spa-router/wrap'
import { localeStandardLanguage, localeSupportedLanguages } from 'utils/imports/config.js'
import { getLocalizedRoute } from 'utils/imports/core.js'

const routes = {}

// add routes with lang param
localeSupportedLanguages
  .filter((lang) => lang !== localeStandardLanguage)
  .forEach((lang) => {
    Object.assign(
      routes,
      baseRoutes.reduce((prev, cur) => {
        const p = prev
        p[getLocalizedRoute(cur.name, lang)] = wrap({
          asyncComponent: cur.component,
          userData: { lang, routeName: cur.name, ...cur.data },
          conditions: [...getGuards(cur.name)],
        })
        return p
      }, {}),
    )
  })

Object.assign(
  routes,
  baseRoutes.reduce((prev, cur) => {
    const p = prev
    p[getLocalizedRoute(cur.name, localeStandardLanguage)] = wrap({
      asyncComponent: cur.component,
      userData: { lang: localeStandardLanguage, routeName: cur.name, ...cur.data },
      conditions: [...getGuards(cur.name)],
    })
    return p
  }, {}),
)

export default routes
