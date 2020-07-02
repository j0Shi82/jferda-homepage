<script>
import { MaterialAppContent, MaterialDrawerScrim } from 'utils/imports/material';
import { isMobileBreakpoint } from 'utils/imports/store';
import { RouterComponent, routes, routerOnRouteLoaded } from 'utils/imports/core';
</script>

<style lang="scss">
.main-content {
  overflow-x: hidden;
}
</style>

{#if $isMobileBreakpoint}<MaterialDrawerScrim />{/if}
<MaterialAppContent class="mdc-top-app-bar--dense-fixed-adjust">
    <main class="main-content" id="main-content">
      <RouterComponent {routes} on:routeLoaded="{routerOnRouteLoaded}" />
    </main>
</MaterialAppContent>