<script>
import { svelteLifecycleOnDestroy } from 'utils/imports/svelte';

import {
  getLocalizedRoute,
  routerPush,
  localize,
} from 'utils/imports/core';
import {
  currentRouteName,
  isMobileBreakpoint,
  currentLocale,
  locales,
  menuMobileState,
  animationsActive,
  projectInitializing,
} from 'utils/imports/store';
import {
  drawerMenuItems,
  drawerMenuProjectItems,
} from 'utils/imports/data';
// material
import Drawer, { Content } from '@smui/drawer';
import List, {
  Item, Text, Separator, Subheader,
} from '@smui/list';
import Switch from '@smui/switch';
import FormField from '@smui/form-field';
import '@smui/drawer/_index.scss';
import '@smui/list/_index.scss';
import '@smui/switch/_index.scss';
import '@smui/form-field/_index.scss';

import 'assets/style/drawer.scss';

export let modal = false;

// set variant based on breakpoint
const drawerVariant = modal ? 'modal' : 'dismissible';
let drawer;

// basic routing functions
function go() {
  projectInitializing.set(true);
  if ($isMobileBreakpoint) menuMobileState.set(false);
  // routerPush(getLocalizedRoute(key));
}

let timeout;
const handleScrollLock = (state) => {
  clearTimeout(timeout);
  if (state) {
    window.scrollTo(0, 0);
    timeout = setTimeout(() => {
      document.querySelector('body').classList.add('jdev-scroll-lock');
    }, 250);
  } else {
    document.querySelector('body').classList.remove('jdev-scroll-lock');
  }
};

// control drawer visibility on desktop, home never shows menu
$: {
  if (drawer && $currentRouteName !== null) {
    if (!modal && $currentRouteName === 'home') {
      drawer.setOpen(false);
      handleScrollLock(false);
    } else {
      drawer.setOpen(true);
      handleScrollLock(true);
    }

    if (modal) {
      drawer.setOpen($menuMobileState);
      handleScrollLock($menuMobileState);
    }
  }
}

// re-route to localized url on lang change
const localeUnsub = currentLocale.subscribe(() => {
  // to prevent re-routing to default routeName store value, check whether a route name has been set already
  // on page load routeName is still null
  if ($currentRouteName !== null) {
    routerPush(getLocalizedRoute($currentRouteName));
  }
});

svelteLifecycleOnDestroy(() => {
  localeUnsub();
});
</script>

<style lang="scss">

@import 'src/assets/style/variables.scss';

:global(.mdc-drawer) {
  @media #{$breakpoint-mobile} {
    width: 100%;
  }
}

:global(.mdc-drawer--modal) {
  /* This is not needed for a page-wide modal. */
  position: absolute;
}

:global(.mdc-drawer-scrim) {
  /* This is not needed for a page-wide modal. */
  position: absolute;
}
</style>

<Drawer variant="{drawerVariant}" bind:this="{drawer}" class="mdc-top-app-bar--fixed-adjust">
  <Content>
    <List>
      {#each drawerMenuItems as item}
        <Item href="#{getLocalizedRoute(item.routeName, $currentLocale)}" on:click={() => go()} activated={$currentRouteName === item.routeName}>
          <span class="material-icons mdc-deprecated-list-item__graphic" aria-hidden="true">
            {@html item.icon}
          </span>
          <Text>{$localize(`navigation.routes.${item.routeName}`)}</Text>
        </Item>
      {/each}

      <Separator nav />

      <Subheader>{$localize('navigation.routes.projects')}</Subheader>
      {#each drawerMenuProjectItems as item}
        <Item href="#{getLocalizedRoute(item.routeName, $currentLocale)}" on:click={() => go()} activated={$currentRouteName === item.routeName}>
          <Text>{$localize(`navigation.routes.projects_${item.localeIdent}`)}</Text>
        </Item>
      {/each}

      <Separator nav />

      <Item on:click={() => animationsActive.set(!$animationsActive)}>
        <FormField class="jdev-animation-toggle">
          <Switch bind:checked={$animationsActive} />
          <span slot="label" class="jdev-cursor-pointer" on:click={() => animationsActive.set(!$animationsActive)}>{$localize('navigation.animationSwitchLabel')}</span>
        </FormField>
      </Item>

      {#if $locales.length > 1}
      <div class="jdev-list-item">
        <!-- <MaterialSelect class="jdev-language-select {$currentLocale}" bind:value={$currentLocale} label="{$localize('locale.headline')}"> -->
          {#each $locales as loc}
          <div class="jdev-language-select {loc === $currentLocale ? 'active' : ''}" on:click={() => currentLocale.set(loc)}>
            <div class="jdev-flag {loc}" />
          </div>
            <!-- <MaterialOption value={loc} selected={loc === $currentLocale}>{$localize(`locale.${loc}`)}</MaterialOption> -->
          {/each}
        <!-- </MaterialSelect> -->
      </div>
      {/if}
      
    </List>
  </Content>
</Drawer>