<script>
import { AppContent } from '@smui/drawer';
import Router from 'svelte-spa-router';
import routes from 'router/index';
</script>

<style lang="scss">
</style>

<AppContent class="mdc-top-app-bar--dense-fixed-adjust">
    <main class="main-content" id="main-content">
      <Router {routes}/>
    </main>
</AppContent>