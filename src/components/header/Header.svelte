<script>
import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
import IconButton from '@smui/icon-button';
import Icon from 'fa-svelte';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import avatarImage from 'assets/media/images/profile/avatar.jpg';

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

</style>

<TopAppBar variant="static" dense color='primary' class="app-bar">
    <Row>
        {#if $isMobile}
        <Section>
            <IconButton class="material-icons jdev-drawer-toggle" on:click="{mobileState.set(!$mobileState)}">{$mobileState ? 'clear' : 'menu'}</IconButton>
        </Section>
        {/if}
        <Section>
          <div class="jdev-avatar">
            <div style="background-image: url({avatarImage});"></div>
          </div>
        </Section>
        {#if !$isMobile}
        <Section>
            <Title class="jdev-title">&gt;_ j0Shi.dev --help</Title>
        </Section>
        {/if}
        <Section align="end" toolbar>
            <a href="https://github.com/j0Shi82" target="_blank">
              <IconButton class="material-icons"><Icon icon={faGithub}></Icon></IconButton>
            </a>
            <IconButton on:click={mailMe} class="material-icons"><Icon icon={faEnvelope}></Icon></IconButton>
        </Section>
    </Row>
</TopAppBar>