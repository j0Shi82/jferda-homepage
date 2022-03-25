<script>
import { getLocalizedRoute, routerPush } from 'utils/imports/core';
import { localize } from 'utils/imports/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import ukraineHeartIcon from 'assets/media/images/flags/ukraine-heart.svg';

import avatarImage from 'assets/media/images/profile/avatar-100.jpg';

import { menuMobileState, isMobileBreakpoint, currentRouteName } from 'utils/imports/store';
// material
import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar/styled';
import IconButton from '@smui/icon-button/styled';
// components
import Icon from 'fa-svelte';

function mailMe() {
  window.location.href = 'mailto:janosch.ferda@e-domizil.de';
}

let isHomeRoute = false;
$: pageTitle = $currentRouteName === 'home' ? '>_ j0Shi.dev --help' : `>_ j0Shi.dev --help --${$localize(`navigation.routes.${$currentRouteName}`).toLowerCase()}`;

currentRouteName.subscribe((value) => {
  isHomeRoute = value === 'home';
});
</script>

<style lang="scss">
:global(.mdc-top-app-bar) {
  z-index: 7;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.75);

  :global(.jdev-title) {
    padding-left: 0;
    width: 100%;
    text-align: center;
  }
}

:global(.app-bar) {
  position: absolute;
}

@import 'src/assets/style/variables.scss';

:global(.mdc-top-app-bar .jdev-drawer-toggle) {
  display: none;

  @media #{$breakpoint-mobile} {
    display: block;
  }

  @media #{$breakpoint-tablet} {
    display: block;
  }
}

.jdev-ukraine-heart-icon {
  height: 48px;
  width: 48px;
  background-size: 48px;
}
</style>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<TopAppBar variant="static" dense color='primary' class="app-bar">
    <Row>
        {#if $isMobileBreakpoint}
        <Section>
            {#if !isHomeRoute}
              <IconButton class="material-icons jdev-drawer-toggle" on:click="{menuMobileState.set(!$menuMobileState)}">{$menuMobileState ? 'clear' : 'menu'}</IconButton>
            {/if}
            <div class="jdev-ukraine-heart-icon" style="background-image: url({ukraineHeartIcon});"></div>
        </Section>
        {/if}
        <Section>
          <div class="jdev-avatar">
            <div style="background-image: url({avatarImage});" on:click="{() => { routerPush(getLocalizedRoute('home')); }}"></div>
          </div>
        </Section>
        {#if !$isMobileBreakpoint}
        <Section>
            <Title class="jdev-title">&gt;_ j0Shi.dev --help</Title>
        </Section>
        {/if}
        <Section align="end" toolbar>
          <a href="https://github.com/j0Shi82" target="_blank">
            <IconButton class="material-icons"><Icon icon={faGithub}></Icon></IconButton>
          </a>
          <IconButton on:click={mailMe} class="material-icons"><Icon icon={faEnvelope}></Icon></IconButton>
          {#if !$isMobileBreakpoint}<div class="jdev-ukraine-heart-icon" style="background-image: url({ukraineHeartIcon});"></div>{/if}
        </Section>
    </Row>
</TopAppBar>