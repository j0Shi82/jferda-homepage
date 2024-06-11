import { isRoutingInProgress, storeSetRouterIsRouting } from 'utils/imports/store'
import { describe, expect, it } from 'vitest'

// set routing to false initially
isRoutingInProgress.set(false)
let isRouting = false
isRoutingInProgress.subscribe((value) => {
  isRouting = value
})

describe('store/app/setter', () => {
  it('storeSetRouterIsRouting is setting the store value correctly', () => {
    storeSetRouterIsRouting(true)
    expect(isRouting).toBe(true)

    storeSetRouterIsRouting(false)
    expect(isRouting).not.toBe(true)
  })
})
