<script>
  import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
  import ukraineHeartIcon from 'assets/media/images/flags/ukraine-heart.svg'
  import { getLocalizedRoute, localize, routerPush } from 'utils/imports/core'

  import avatarImage from 'assets/media/images/profile/avatar-100.jpg'

  import { currentLocale, currentRouteName, isMobileBreakpoint, menuMobileState } from 'utils/imports/store'
  // material
  import IconButton from '@smui/icon-button'
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar'
  // components
  import Icon from 'fa-svelte'

  let pageTitle
  let canonical
  let isHomeRoute = false

  function setMetaData() {
    pageTitle = $currentRouteName === 'home' || $currentRouteName === null ? '>_ j0Shi.dev --help' : `>_ j0Shi.dev --help --${$localize(`navigation.routes.${$currentRouteName}`).toLowerCase()}`
    canonical = $currentRouteName === 'home' || $currentRouteName === null ? process.env.BASEURL : `${process.env.BASEURL}/#${getLocalizedRoute($currentRouteName)}`
  }

  currentLocale.subscribe(() => {
    setMetaData()
  })

  currentRouteName.subscribe((value) => {
    isHomeRoute = value === 'home'
    if (value !== null) {
      const skeletonLoaderWrapper = document.querySelector('.jdev-skeleton-loader-wrapper')
      if (isHomeRoute) {
        skeletonLoaderWrapper.classList.add('jdev-skeleton-loader-wrapper-home')
        skeletonLoaderWrapper.classList.remove('jdev-skeleton-loader-wrapper-nothome')
      }
      else {
        skeletonLoaderWrapper.classList.add('jdev-skeleton-loader-wrapper-nothome')
        skeletonLoaderWrapper.classList.remove('jdev-skeleton-loader-wrapper-home')
      }
    }
    setMetaData()
  })
</script>

<svelte:head>
  <title>{pageTitle}</title>
  {#if $currentRouteName !== null}
    <link rel="canonical" href={canonical} />
  {/if}
</svelte:head>

<TopAppBar variant="fixed" dense color="primary" class="app-bar">
  <Row>
    {#if $isMobileBreakpoint}
      <Section>
        {#if !isHomeRoute}
          <IconButton
            class="material-icons jdev-drawer-toggle"
            aria-label={$localize(!$menuMobileState ? 'header.label.menu_open' : 'header.label.menu_close')}
            on:click={menuMobileState.set(!$menuMobileState)}
            on:keypress={menuMobileState.set(!$menuMobileState)}
          >
            {#if !$menuMobileState}
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"
                ><path d="M0 0h24v24H0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg
              >
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"
                ><path d="M0 0h24v24H0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg
              >
            {/if}
          </IconButton>
        {/if}
        <div class="jdev-ukraine-heart-icon" style="height: 48px; width: 48px; background-size: 48px; background-image: url({ukraineHeartIcon});"></div>
      </Section>
    {/if}
    <Section>
      <div class="jdev-avatar">
        <div
          style="background-image: url({avatarImage});"
          on:click={() => {
            routerPush(getLocalizedRoute('home'))
          }}
          on:keypress={() => {
            routerPush(getLocalizedRoute('home'))
          }}
          role="button"
          tabindex=""
        ></div>
      </div>
    </Section>
    {#if !$isMobileBreakpoint}
      <Section>
        <Title class="jdev-title">&gt;_ j0Shi.dev --help</Title>
      </Section>
    {/if}
    <Section align="end" toolbar>
      <a href="https://github.com/j0Shi82" target="_blank" rel="noreferrer">
        <IconButton class="material-icons" aria-label={$localize('header.label.github')}><Icon icon={faGithub}></Icon></IconButton>
      </a>
      <a href="&#77;&#97;&#73;&#76;&#116;&#111;&#58;&#106;&#48;&#115;&#104;&#105;&#46;&#119;&#101;&#98;&#100;&#101;&#118;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
        <IconButton class="material-icons" aria-label={$localize('header.label.mail')}><Icon icon={faEnvelope}></Icon></IconButton>
      </a>
      {#if !$isMobileBreakpoint}<div class="jdev-ukraine-heart-icon" style="background-image: url({ukraineHeartIcon});"></div>{/if}
    </Section>
  </Row>
</TopAppBar>

<style lang="scss" global>
  .mdc-top-app-bar {
    z-index: 7;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.75);

    .jdev-title {
      padding-left: 0;
      width: 100%;
      text-align: center;
    }
  }

  @import 'src/assets/style/variables.scss';

  .mdc-top-app-bar .jdev-drawer-toggle {
    display: none;

    @media #{$breakpoint-mobile} {
      display: block;
    }

    @media #{$breakpoint-tablet} {
      display: block;
    }
  }
</style>
