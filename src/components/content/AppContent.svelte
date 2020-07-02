<script>
import { AppContent, Scrim } from '@smui/drawer';
import Router from 'svelte-spa-router';
import routes from 'router/index';
import { isMobileBreakpoint } from 'utils/imports/store';

import routeLoaded from 'router/routeLoaded';
</script>

<style lang="scss">
.main-content {
  overflow-x: hidden;
}
</style>

{#if $isMobileBreakpoint}<Scrim />{/if}
<AppContent class="mdc-top-app-bar--dense-fixed-adjust">
    <main class="main-content" id="main-content">
      <Router {routes} on:routeLoaded="{routeLoaded}" />
    </main>
</AppContent>