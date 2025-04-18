<script>
  import { localize } from 'utils/imports/core'
  import { svelteTransitionFade, svelteLifecycleOnMount } from 'utils/imports/svelte'
  import { homeKnowledgeLogoItems } from 'utils/imports/data'
  import { routingFadeDuration } from 'utils/imports/config'
  import { isMobileBreakpoint, isDesktopBreakpoint, isTabletBreakpoint } from 'utils/imports/store'
  import { preloadImages } from 'utils/imports/helpers'
  // compopnents
  import HomeRoutes from 'components/content/home/HomeRoutes.svelte'
  import Loader from 'components/utilities/atoms/Loader.svelte'

  import 'assets/style/home.scss'

  const knowledgeLogoSet = homeKnowledgeLogoItems.map((item) => item.ident)
  let [currentLogoItem] = homeKnowledgeLogoItems
  let typographyTextClass
  let interval
  $: {
    if ($isMobileBreakpoint) typographyTextClass = 'mdc-typography--headline6'
    if ($isTabletBreakpoint) typographyTextClass = 'mdc-typography--headline5'
    if ($isDesktopBreakpoint) typographyTextClass = 'mdc-typography--headline4'
  }
  // logo animation logic
  // css animates, but javascript has to change background image
  let showLogoAnimation = false
  // let logoGrid;
  function changeLogo() {
    const currentIndex = homeKnowledgeLogoItems.map((el) => el.ident).indexOf(currentLogoItem.ident)
    if (knowledgeLogoSet[currentIndex + 1]) currentLogoItem = homeKnowledgeLogoItems[currentIndex + 1]
    else [currentLogoItem] = homeKnowledgeLogoItems
  }

  svelteLifecycleOnMount(() => {
    preloadImages(homeKnowledgeLogoItems.map((el) => el.logo)).finally(() => {
      showLogoAnimation = true
      interval = setInterval(() => {
        changeLogo()
      }, 4000)
    })

    return () => {
      clearInterval(interval)
    }
  })
</script>

<div class="jdev-route-home" in:svelteTransitionFade={{ duration: routingFadeDuration }}>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      {#each homeKnowledgeLogoItems as logoItem (logoItem.ident)}
        {#if logoItem.ident === currentLogoItem.ident}
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 jdev-knowledge-logo {logoItem.ident}">
            {#if showLogoAnimation}
              <div class="logo" class:animation-active={showLogoAnimation}></div>
            {:else}
              <Loader />
            {/if}
          </div>
        {/if}
      {/each}
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 {typographyTextClass} jdev-intro-text {currentLogoItem.ident}">
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html $localize('home.maintext')}
      </div>
      <HomeRoutes colorClass={currentLogoItem.ident} />
    </div>
  </div>
</div>
