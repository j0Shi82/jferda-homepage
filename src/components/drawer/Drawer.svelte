<script>
import Drawer, { Content } from '@smui/drawer';
import List, {
  Graphic, Item, Text, Separator, Subheader,
} from '@smui/list';
import H6 from '@smui/common/H6.svelte';
import store from 'store/index';
import config from 'config/index';
import { setMobileMenuState } from 'store/app/setter';
import { push, location } from 'svelte-spa-router';
import { _ } from 'svelte-i18n';

// store and config values we need
const { open: isMenuOpen } = store.app.menu;
const { isMobile } = store.app.breakpoints;
const {
  home: menuHomeIcon, about: menuAboutIcon, resume: menuResumeIcon, skills: menuSkillsIcon,
} = config.app.menu.icons;

function go(key) {
  if ($isMobile) setMobileMenuState(false);
  push(`${key}`);
}

// control drawer visibility on desktop, home never shows menu
$: if (!$isMobile) {
  if ($location === '/') isMenuOpen.set(false);
  else isMenuOpen.set(true);
}
</script>

<style lang="scss">

@import 'src/assets/style/variables.scss';

:global(.mdc-drawer) {
  @media #{$breakpoint-mobile} {
    width: 100%;
  }
}
</style>

<Drawer variant="dismissible" bind:open={$isMenuOpen} class="mdc-top-app-bar--fixed-adjust">
  <Content>
    <List>
      <Item href="javascript:void(0)" on:click={() => go('/')} activated={$location === '/'}>
        <Graphic class="material-icons" aria-hidden="true">{menuHomeIcon}</Graphic>
        <Text>{$_('navigation.home')}</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('/about')} activated={$location === '/about'}>
        <Graphic class="material-icons" aria-hidden="true">{menuAboutIcon}</Graphic>
        <Text>{$_('navigation.about')}</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('/resume')} activated={$location === '/resume'}>
        <Graphic class="material-icons" aria-hidden="true">{menuResumeIcon}</Graphic>
        <Text>{$_('navigation.resume')}</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('/skills')} activated={$location === '/skills'}>
        <Graphic class="material-icons" aria-hidden="true">{menuSkillsIcon}</Graphic>
        <Text>{$_('navigation.skills')}</Text>
      </Item>

      <Separator nav />
      <Subheader component={H6}>Projects</Subheader>
      <Item href="javascript:void(0)" on:click={() => go('/projects-mmb')} activated={$location === '/projects-mmb'}>
        <Text>MavsMoneyball</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('/projects-nwoun')} activated={$location === '/projects-nwoun'}>
        <Text>Neverwinter Uncensored</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('/projects-lastwar')} activated={$location === '/projects-lastwar'}>
        <Text>Last War</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('/projects-to')} activated={$location === '/projects-to'}>
        <Text>E-Domizil</Text>
      </Item>
    </List>
  </Content>
</Drawer>