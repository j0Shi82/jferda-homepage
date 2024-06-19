<script>
  import { svelteLifecycleOnDestroy } from 'utils/imports/svelte'

  import { getLocalizedRoute, localize, routerPush } from 'utils/imports/core'
  import { drawerMenuItems, drawerMenuProjectItems } from 'utils/imports/data'
  import { animationsActive, currentLocale, currentRouteName, isMobileBreakpoint, locales, menuMobileState, projectInitializing } from 'utils/imports/store'
  // material
  import Drawer, { Content } from '@smui/drawer'
  import FormField from '@smui/form-field'
  import List, { Item, Separator, Subheader, Text } from '@smui/list'
  import Switch from '@smui/switch'

  import 'assets/style/drawer.scss'

  export let modal = false

  // set variant based on breakpoint
  const drawerVariant = modal ? 'modal' : 'dismissible'
  let drawer

  // basic routing functions
  function go() {
    projectInitializing.set(true)
    if ($isMobileBreakpoint) menuMobileState.set(false)
    // routerPush(getLocalizedRoute(key));
  }

  let timeout
  const handleScrollLock = (state) => {
    clearTimeout(timeout)
    if (state && $isMobileBreakpoint) {
      window.scrollTo(0, 0)
      timeout = setTimeout(() => {
        document.querySelector('body').classList.add('jdev-scroll-lock')
      }, 250)
    }
    else {
      document.querySelector('body').classList.remove('jdev-scroll-lock')
    }
  }

  // control drawer visibility on desktop, home never shows menu
  $: {
    if (drawer && $currentRouteName !== null) {
      if (!modal && $currentRouteName === 'home') {
        drawer.setOpen(false)
        handleScrollLock(false)
      }
      else {
        drawer.setOpen(true)
        handleScrollLock(true)
      }

      if (modal) {
        drawer.setOpen($menuMobileState)
        handleScrollLock($menuMobileState)
      }
    }
  }

  // re-route to localized url on lang change
  const localeUnsub = currentLocale.subscribe(() => {
    // to prevent re-routing to default routeName store value, check whether a route name has been set already
    // on page load routeName is still null
    if ($currentRouteName !== null) {
      routerPush(getLocalizedRoute($currentRouteName))
    }
  })

  svelteLifecycleOnDestroy(() => {
    localeUnsub()
  })
</script>

<Drawer variant={drawerVariant} bind:this={drawer} class="mdc-top-app-bar--fixed-adjust">
  <Content>
    <List>
      {#each drawerMenuItems as item}
        <Item href="#{getLocalizedRoute(item.routeName, $currentLocale)}" on:click={() => go()} activated={$currentRouteName === item.routeName} on:keypress={() => go()}>
          <span class="material-icons mdc-deprecated-list-item__graphic" aria-hidden="true">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html item.icon}
          </span>
          <Text>{$localize(`navigation.routes.${item.routeName}`)}</Text>
        </Item>
      {/each}

      <Separator nav />

      <Subheader>{$localize('navigation.routes.projects')}</Subheader>
      {#each drawerMenuProjectItems as item}
        <Item href="#{getLocalizedRoute(item.routeName, $currentLocale)}" on:click={() => go()} on:keypress={() => go()} activated={$currentRouteName === item.routeName}>
          <Text>{$localize(`navigation.routes.projects_${item.localeIdent}`)}</Text>
        </Item>
      {/each}

      <Separator nav />

      <Item>
        <FormField class="jdev-animation-toggle" style="user-select: none;">
          <Switch bind:checked={$animationsActive} />
          <span slot="label" class="jdev-cursor-pointer">{$localize('navigation.animationSwitchLabel')}</span>
        </FormField>
      </Item>

      {#if $locales.length > 1}
        <div class="jdev-list-item">
          <!-- <MaterialSelect class="jdev-language-select {$currentLocale}" bind:value={$currentLocale} label="{$localize('locale.headline')}"> -->
          {#each $locales as loc}
            <div role="button" tabindex="" class="jdev-language-select {loc === $currentLocale ? 'active' : ''}" on:click={() => currentLocale.set(loc)} on:keypress={() => currentLocale.set(loc)}>
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

<style lang="scss" global>
  @import 'src/assets/style/variables.scss';

  .mdc-drawer {
    @media #{$breakpoint-mobile} {
      width: 100%;
    }
  }

  .mdc-drawer--modal {
    /* This is not needed for a page-wide modal. */
    position: absolute;
  }

  .mdc-drawer-scrim {
    /* This is not needed for a page-wide modal. */
    position: absolute;
  }
</style>
