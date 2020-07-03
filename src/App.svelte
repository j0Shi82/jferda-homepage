<script>
import { isLocalizationLoading, setupLocalization } from 'utils/imports/core';
import { isMobileBreakpoint } from 'utils/imports/store';
import { MainHeader, MainDrawer, AppContent } from 'utils/imports/components';

// global SCSS
import 'assets/style/global.scss';

setupLocalization();
</script>

<svelte:head>
	<title>&gt;_ j0Shi.dev --help</title>
</svelte:head>

{#if !$isLocalizationLoading}
<MainHeader />
<div style="width: 100%; max-width: 1240px; margin: 0 auto;">
	<MainDrawer modal="{$isMobileBreakpoint}" />
	<AppContent  />
</div>
{/if}