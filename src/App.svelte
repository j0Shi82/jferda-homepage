<script>
import { setupLocalization } from 'utils/imports/core';
import { isMobileBreakpoint, isLocalizationLoading } from 'utils/imports/store';
import { MainHeader, MainDrawer, AppContent } from 'utils/imports/components';

isLocalizationLoading.subscribe(console.log);

// global SCSS
import 'assets/style/global.scss';

setupLocalization();
</script>

{#if !$isLocalizationLoading}
<MainHeader />
<MainDrawer modal="{$isMobileBreakpoint}" />
<AppContent />
{/if}