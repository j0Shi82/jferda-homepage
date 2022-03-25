<script>
import { MaterialAppContent, MaterialDrawerScrim } from 'utils/imports/material';
import { isMobileBreakpoint, screenWidth, isRoutingInProgress } from 'utils/imports/store';
import { RouterComponent, routes, routerOnRouteLoaded } from 'utils/imports/core';
import { projectInitializing } from 'utils/imports/store';

isRoutingInProgress.subscribe((value) => {
  console.log(value);
});
</script>

<style lang="scss">
.main-content {
  overflow-x: hidden;
}

// .blockOverflowY {
//   overflow-y: hidden;
// }
</style>

{#if $isMobileBreakpoint}<MaterialDrawerScrim />{/if}
<MaterialAppContent class="mdc-top-app-bar--dense-fixed-adjust">
    <main class:blockOverflowY="{$projectInitializing}" class="main-content" id="main-content" style="--jdev-transition-x-right: {$screenWidth * 2}px; --jdev-transition-x-left: {$screenWidth * (-2)}px;">
      <RouterComponent {routes} on:routeLoaded="{routerOnRouteLoaded}" />
    </main>
</MaterialAppContent>