<script>
import { svelteLifecycleOnDestroy } from 'utils/imports/svelte';

import {
  MaterialDrawer,
  MaterialContent,
  MaterialList,
  MaterialListGraphic,
  MaterialListItem,
  MaterialListText,
  MaterialListSeparator,
  MaterialSubheader,
  MaterialSelect,
  MaterialOption,
  MaterialFormField,
  MaterialSwitch,
} from 'utils/imports/material';

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

import 'assets/style/drawer.scss';

export let modal = false;

// set variant based on breakpoint
const drawerVariant = modal ? 'modal' : 'dismissible';
let drawer;

// basic routing functions
function go(key) {
  projectInitializing.set(true);
  if ($isMobileBreakpoint) menuMobileState.set(false);
  routerPush(getLocalizedRoute(key));
}

// control drawer visibility on desktop, home never shows menu
$: {
  if (drawer && $currentRouteName !== null) {
    if (!modal && $currentRouteName === 'home') {
      drawer.setOpen(false);
    } else {
      drawer.setOpen(true);
    }

    if (modal) {
      drawer.setOpen($menuMobileState);
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

<MaterialDrawer variant="{drawerVariant}" bind:this="{drawer}" class="mdc-top-app-bar--fixed-adjust">
  <MaterialContent>
    <MaterialList>
      {#each drawerMenuItems as item}
        <MaterialListItem href="javascript:void(0)" on:click={() => go(item.routeName)} activated={$currentRouteName === item.routeName}>
          <MaterialListGraphic class="material-icons" aria-hidden="true">{item.icon}</MaterialListGraphic>
          <MaterialListText>{$localize(`navigation.${item.routeName}`)}</MaterialListText>
        </MaterialListItem>
      {/each}

      <MaterialListSeparator nav />

      <MaterialSubheader>{$localize('navigation.projects.headline')}</MaterialSubheader>
      {#each drawerMenuProjectItems as item}
        <MaterialListItem href="javascript:void(0)" on:click={() => go(item.routeName)} activated={$currentRouteName === item.routeName}>
          <MaterialListText>{$localize(`navigation.projects.${item.localeIdent}`)}</MaterialListText>
        </MaterialListItem>
      {/each}

      <MaterialListSeparator nav />

      {#if $locales.length > 1}
      <MaterialListItem>
        <MaterialSelect class="jdev-language-select {$currentLocale}" bind:value={$currentLocale} label="{$localize('locale.headline')}">
          {#each $locales as loc}
            <MaterialOption value={loc} selected={loc === $currentLocale}>{$localize(`locale.${loc}`)}</MaterialOption>
          {/each}
        </MaterialSelect>
      </MaterialListItem>
      {/if}

      <MaterialListItem>
        <MaterialFormField class="jdev-animation-toggle">
          <MaterialSwitch bind:checked={$animationsActive} />
          <span slot="label">{$localize('navigation.animationSwitchLabel')}</span>
        </MaterialFormField>
      </MaterialListItem>
    </MaterialList>
  </MaterialContent>
</MaterialDrawer>