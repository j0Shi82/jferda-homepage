<script>
import { getLocalizedRoute, routerPush } from 'utils/imports/core';
import { localize } from 'utils/imports/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import ukraineHeartIcon from 'assets/media/images/flags/ukraine-heart.svg';

import avatarImage from 'assets/media/images/profile/avatar-100.jpg';

import {
  menuMobileState, isMobileBreakpoint, currentRouteName, currentLocale,
} from 'utils/imports/store';
// material
import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar/styled';
import IconButton from '@smui/icon-button/styled';
// components
import Icon from 'fa-svelte';

let pageTitle;
let canonical;
let isHomeRoute = false;

function mailMe() {
  window.location.href = 'mailto:janosch.ferda@e-domizil.de';
}

function setMetaData() {
  pageTitle = $currentRouteName === 'home' || $currentRouteName === null ? '>_ j0Shi.dev --help' : `>_ j0Shi.dev --help --${$localize(`navigation.routes.${$currentRouteName}`).toLowerCase()}`;
  canonical = $currentRouteName === 'home' || $currentRouteName === null ? process.env.BASEURL : `${process.env.BASEURL}/#${getLocalizedRoute($currentRouteName)}`;
}

currentLocale.subscribe(() => {
  setMetaData();
});

currentRouteName.subscribe((value) => {
  isHomeRoute = value === 'home';
  setMetaData();
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
  {#if $currentRouteName !== null}
    <link rel="canonical" href="{canonical}" />
  {/if}
</svelte:head>

<TopAppBar variant="static" dense color='primary' class="app-bar">
    <Row>
        {#if $isMobileBreakpoint}
        <Section>
            {#if !isHomeRoute}
              <IconButton class="material-icons jdev-drawer-toggle" aria-label="{$localize(!$menuMobileState ? 'header.label.menu_open' : 'header.label.menu_close')}" on:click="{menuMobileState.set(!$menuMobileState)}">
              {#if !$menuMobileState}
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
              {:else}
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></svg>
              {/if}
              </IconButton>
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
            <IconButton class="material-icons" aria-label="{$localize('header.label.github')}"><Icon icon={faGithub}></Icon></IconButton>
          </a>
          <IconButton on:click={mailMe} class="material-icons" aria-label="{$localize('header.label.mail')}"><Icon icon={faEnvelope}></Icon></IconButton>
          {#if !$isMobileBreakpoint}<div class="jdev-ukraine-heart-icon" style="background-image: url({ukraineHeartIcon});"></div>{/if}
        </Section>
    </Row>
</TopAppBar>