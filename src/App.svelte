<script>
  import AppContent from 'components/content/AppContent.svelte'
  import Drawer from 'components/drawer/Drawer.svelte'
  import Header from 'components/header/Header.svelte'
  import { setupLocalization } from 'utils/imports/core'
  import { isLocalizationLoading, isMobileBreakpoint } from 'utils/imports/store'
// global SCSS
  import 'assets/style/global.scss'

  setupLocalization()
</script>

{#if !$isLocalizationLoading}
  <Header />
  <Drawer modal={$isMobileBreakpoint} />
  <AppContent />
{/if}
