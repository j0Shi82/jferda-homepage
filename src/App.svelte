<script>
import { isLocalizationLoading, setupLocalization } from 'utils/imports/core';
import { isMobileBreakpoint } from 'utils/imports/store';
import { MainHeader, MainDrawer, AppContent } from 'utils/imports/components';

// global SCSS
import 'assets/style/global.scss';

setupLocalization();
</script>

{#if !$isLocalizationLoading}
<MainHeader />
<MainDrawer modal="{$isMobileBreakpoint}" />
<AppContent />
{/if}