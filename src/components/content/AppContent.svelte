<script>
import { RouterComponent, routerOnRouteLoaded, routes } from 'utils/imports/core'
import { isMobileBreakpoint, projectInitializing, screenWidth } from 'utils/imports/store'
// material
import { AppContent, Scrim } from '@smui/drawer'
// import '@smui/drawer/_index.scss';
</script>

{#if $isMobileBreakpoint}<Scrim />{/if}
<AppContent class="mdc-top-app-bar--dense-fixed-adjust">
    <main class:blockOverflowY="{$projectInitializing}" class="main-content" id="main-content" style="--jdev-transition-x-right: {$screenWidth * 2}px; --jdev-transition-x-left: {$screenWidth * (-2)}px;">
      <RouterComponent {routes} on:routeLoaded="{routerOnRouteLoaded}" />
    </main>
</AppContent>