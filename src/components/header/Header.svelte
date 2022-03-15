<script>
import {
  MaterialTopAppBar,
  MaterialTopAppBarRow,
  MaterialTopAppBarSection,
  MaterialTopAppBarTitle,
  MaterialIconButton,
} from 'utils/imports/material';
import Icon from 'fa-svelte';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import ukraineHeartIcon from 'assets/media/images/flags/ukraine-heart.svg';

import avatarImage from 'assets/media/images/profile/avatar-100.jpg';

import store from 'store/index';

// store values we need
const { mobileState } = store.app.menu;
const { isMobile } = store.app.breakpoints;

function mailMe() {
  window.location.href = 'mailto:janosch.ferda@e-domizil.de';
}
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

<MaterialTopAppBar variant="static" dense color='primary' class="app-bar">
    <MaterialTopAppBarRow>
        {#if $isMobile}
        <MaterialTopAppBarSection>
            <MaterialIconButton class="material-icons jdev-drawer-toggle" on:click="{mobileState.set(!$mobileState)}">{$mobileState ? 'clear' : 'menu'}</MaterialIconButton>
            {#if $isMobile}<div class="jdev-ukraine-heart-icon" style="background-image: url({ukraineHeartIcon});"></div>{/if}
        </MaterialTopAppBarSection>
        {/if}
        <MaterialTopAppBarSection>
          <div class="jdev-avatar">
            <div style="background-image: url({avatarImage});"></div>
          </div>
        </MaterialTopAppBarSection>
        {#if !$isMobile}
        <MaterialTopAppBarSection>
            <MaterialTopAppBarTitle class="jdev-title">&gt;_ j0Shi.dev --help</MaterialTopAppBarTitle>
        </MaterialTopAppBarSection>
        {/if}
        <MaterialTopAppBarSection align="end" toolbar>
          <a href="https://github.com/j0Shi82" target="_blank">
            <MaterialIconButton class="material-icons"><Icon icon={faGithub}></Icon></MaterialIconButton>
          </a>
          <MaterialIconButton on:click={mailMe} class="material-icons"><Icon icon={faEnvelope}></Icon></MaterialIconButton>
          {#if !$isMobile}<div class="jdev-ukraine-heart-icon" style="background-image: url({ukraineHeartIcon});"></div>{/if}
        </MaterialTopAppBarSection>
    </MaterialTopAppBarRow>
</MaterialTopAppBar>