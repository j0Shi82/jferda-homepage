import projectList from 'config/data/projects'
import routeLocales from 'locale/dict/routes'
import baseRoutes from 'router/baseRoutes'
import { describe, expect, it } from 'vitest'

const projectRoutes = projectList.filter(project => project.live).map(project => project.routeName)

describe('config/data/projects', () => {
  it('all live projects in data have a corresponding definition in route locales', () => {
    projectRoutes.forEach((routeName) => {
      expect(
        Object.keys(routeLocales)
          .map(loc => Object.keys(routeLocales[loc]).includes(routeName))
          .filter(el => !el).length,
      ).toEqual(0)
    })
  })

  it('all live projects in data have base route definition', () => {
    projectRoutes.forEach((routeName) => {
      expect(baseRoutes.map(route => route.name).includes(routeName)).toEqual(true)
    })
  })

  it('all projects have different idents', () => {
    const projectIdents = projectList.map(project => project.ident)
    const uniqueProjectIdents = [...new Set(projectIdents)]
    expect(uniqueProjectIdents.length).toEqual(projectIdents.length)
  })

  it('all projects have different routeNames', () => {
    const projectRouteNames = projectList.map(project => project.routeName)
    const uniqueProjectRouteNames = [...new Set(projectRouteNames)]
    expect(uniqueProjectRouteNames.length).toEqual(projectRouteNames.length)
  })
})
