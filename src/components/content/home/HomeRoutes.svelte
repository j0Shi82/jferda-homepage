<script>
  import { atomTransitionDuration } from 'utils/imports/config'
  import { getLocalizedRoute, localize } from 'utils/imports/core'
  import { homeRoutes } from 'utils/imports/data'
  import { currentLocale, screenWidth } from 'utils/imports/store'
  import { svelteEasingBackOut, svelteTransitionFly } from 'utils/imports/svelte'
  // material
  import Fab, { Icon, Label } from '@smui/fab'

  export let colorClass
</script>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop jdev-d-mobile-none jdev-d-tablet-none"></div>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone jdev-home-links">
  {#each homeRoutes as route}
    <div
      class="home-routes {colorClass}"
      in:svelteTransitionFly|global={{
        x: $screenWidth / -2,
        duration: atomTransitionDuration,
        delay: route.transitionDelay,
        easing: svelteEasingBackOut,
      }}
    >
      <a href="#{getLocalizedRoute(route.route, $currentLocale)}">
        <Fab variant="unelevated" class="jdev-button-round" extended>
          <Icon class="material-icons">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html route.icon}
          </Icon>
          <Label>{$localize(route.textLocaleIdent)}</Label>
        </Fab>
      </a>
    </div>
  {/each}
</div>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop jdev-d-mobile-none jdev-d-tablet-none"></div>
