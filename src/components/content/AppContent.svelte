<script>
import { isMobileBreakpoint, screenWidth } from 'utils/imports/store';
import { RouterComponent, routes, routerOnRouteLoaded } from 'utils/imports/core';
import { projectInitializing } from 'utils/imports/store';
// material
import { AppContent, Scrim } from '@smui/drawer/styled';
</script>

{#if $isMobileBreakpoint}<Scrim />{/if}
<AppContent class="mdc-top-app-bar--dense-fixed-adjust">
    <main class:blockOverflowY="{$projectInitializing}" class="main-content" id="main-content" style="--jdev-transition-x-right: {$screenWidth * 2}px; --jdev-transition-x-left: {$screenWidth * (-2)}px;">
      <RouterComponent {routes} on:routeLoaded="{routerOnRouteLoaded}" />
    </main>
</AppContent>