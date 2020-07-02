<script>
import initLocale from 'locale/i18n';
import { isLoading } from 'svelte-i18n';
import store from 'store/index';
import Header from './components/header/Header.svelte';
import Drawer from './components/drawer/Drawer.svelte';
import AppContent from './components/content/AppContent.svelte';

// global SCSS
import './assets/style/global.scss';

const { open: isMenuOpen } = store.app.menu;
const { isMobile } = store.app.breakpoints;

initLocale();
</script>

<svelte:head>
	<title>>_ j0Shi.dev --help</title>
</svelte:head>

{#if !$isLoading}
<Header />
<Drawer modal="{$isMobile}" />
{#if !$isMobile || !$isMenuOpen}
<AppContent  />
{/if}
{/if}