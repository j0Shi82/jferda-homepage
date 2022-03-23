<script>
import {
  MaterialTopAppBar,
  MaterialTopAppBarRow,
  MaterialTopAppBarSection,
  MaterialTopAppBarTitle,
  MaterialIconButton,
} from 'utils/imports/material';
import { FontAwesomeIcon } from 'utils/imports/components';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import ukraineHeartIcon from 'assets/media/images/flags/ukraine-heart.svg';

import avatarImage from 'assets/media/images/profile/avatar-100.jpg';

import { menuMobileState, isMobileBreakpoint, currentRouteName } from 'utils/imports/store';

function mailMe() {
  window.location.href = 'mailto:janosch.ferda@e-domizil.de';
}

let isHomeRoute;

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

<MaterialTopAppBar variant="static" dense color='primary' class="app-bar">
    <MaterialTopAppBarRow>
        {#if $isMobileBreakpoint}
        <MaterialTopAppBarSection>
            {#if !isHomeRoute}
              <MaterialIconButton class="material-icons jdev-drawer-toggle" on:click="{menuMobileState.set(!$menuMobileState)}">{$menuMobileState ? 'clear' : 'menu'}</MaterialIconButton>
            {/if}
            <div class="jdev-ukraine-heart-icon" style="background-image: url({ukraineHeartIcon});"></div>
        </MaterialTopAppBarSection>
        {/if}
        <MaterialTopAppBarSection>
          <div class="jdev-avatar">
            <div style="background-image: url({avatarImage});"></div>
          </div>
        </MaterialTopAppBarSection>
        {#if !$isMobileBreakpoint}
        <MaterialTopAppBarSection>
            <MaterialTopAppBarTitle class="jdev-title">&gt;_ j0Shi.dev --help</MaterialTopAppBarTitle>
        </MaterialTopAppBarSection>
        {/if}
        <MaterialTopAppBarSection align="end" toolbar>
          <a href="https://github.com/j0Shi82" target="_blank">
            <MaterialIconButton class="material-icons"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></MaterialIconButton>
          </a>
          <MaterialIconButton on:click={mailMe} class="material-icons"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></MaterialIconButton>
          {#if !$isMobileBreakpoint}<div class="jdev-ukraine-heart-icon" style="background-image: url({ukraineHeartIcon});"></div>{/if}
        </MaterialTopAppBarSection>
    </MaterialTopAppBarRow>
</MaterialTopAppBar>