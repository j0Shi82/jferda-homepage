<script>
import Header from './components/header/Header.svelte';
import Drawer from './components/drawer/Drawer.svelte';
import AppContent from './components/content/AppContent.svelte';

// global SCSS
import './assets/style/global.scss';

import store from 'store/index';

const { open: isMenuOpen } = store.app.menu;
const { isMobile } = store.app.breakpoints;

</script>

<style lang="scss">
</style>

<Header />
<Drawer />
{#if !$isMobile || !$isMenuOpen}
<AppContent  />
{/if}