<script>
import { setupLocalization } from 'utils/imports/core';
import { isMobileBreakpoint, isLocalizationLoading } from 'utils/imports/store';
import Header from 'components/header/Header.svelte';
import Drawer from 'components/drawer/Drawer.svelte';
import AppContent from 'components/content/AppContent.svelte';

// global SCSS
import 'assets/style/global.scss';

setupLocalization();
</script>

{#if !$isLocalizationLoading}
    <Header />
    <Drawer modal="{$isMobileBreakpoint}" />
    <AppContent />
{/if}