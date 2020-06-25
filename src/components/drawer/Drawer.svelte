<script>
import Drawer, { Content } from '@smui/drawer';
import List, {
  Graphic, Item, Text, Separator, Subheader,
} from '@smui/list';
import H6 from '@smui/common/H6.svelte';
import store from 'store/index';
import config from 'config/index';
import { setMobileMenuState } from 'store/app/setter';
import { getLocalizedLink } from 'locale/utils/routeHelper';
import { push } from 'svelte-spa-router';
import { _ } from 'svelte-i18n';

// store and config values we need
const { open: isMenuOpen } = store.app.menu;
const { routeName } = store.app.router;
const { isMobile } = store.app.breakpoints;
const {
  home: menuHomeIcon, about: menuAboutIcon, resume: menuResumeIcon, skills: menuSkillsIcon,
} = config.app.menu.icons;

function go(key) {
  if ($isMobile) setMobileMenuState(false);
  push(getLocalizedLink(key));
}

// control drawer visibility on desktop, home never shows menu
$: if (!$isMobile) {
  if ($routeName === 'home') isMenuOpen.set(false);
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
      <Item href="javascript:void(0)" on:click={() => go('home')} activated={$routeName === 'home'}>
        <Graphic class="material-icons" aria-hidden="true">{menuHomeIcon}</Graphic>
        <Text>{$_('navigation.home')}</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('about')} activated={$routeName === 'about'}>
        <Graphic class="material-icons" aria-hidden="true">{menuAboutIcon}</Graphic>
        <Text>{$_('navigation.about')}</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('resume')} activated={$routeName === 'resume'}>
        <Graphic class="material-icons" aria-hidden="true">{menuResumeIcon}</Graphic>
        <Text>{$_('navigation.resume')}</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('skills')} activated={$routeName === 'skills'}>
        <Graphic class="material-icons" aria-hidden="true">{menuSkillsIcon}</Graphic>
        <Text>{$_('navigation.skills')}</Text>
      </Item>

      <Separator nav />
      <Subheader component={H6}>Projects</Subheader>
      <Item href="javascript:void(0)" on:click={() => go('projects-mmb')} activated={$routeName === 'projects-mmb'}>
        <Text>MavsMoneyball</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('projects-nwoun')} activated={$routeName === 'projects-nwoun'}>
        <Text>Neverwinter Uncensored</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('projects-lastwar')} activated={$routeName === 'projects-lastwar'}>
        <Text>Last War</Text>
      </Item>
      <Item href="javascript:void(0)" on:click={() => go('projects-to')} activated={$routeName === 'projects-to'}>
        <Text>E-Domizil</Text>
      </Item>
    </List>
  </Content>
</Drawer>