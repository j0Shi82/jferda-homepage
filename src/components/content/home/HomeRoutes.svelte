<script>
import { MaterialChip, MaterialChipText, MaterialIcon } from 'utils/imports/material';
import { push } from 'svelte-spa-router';
import { fly } from 'svelte/transition';
import { backOut } from 'svelte/easing';

import config from 'config/index';
import { getLocalizedRoute } from 'locale/utils/routeHelper';
import { _ } from 'svelte-i18n';
// store values we need
const {
  about: menuAboutIcon, skills: menuSkillsIcon,
} = config.app.menu.icons;

const homeRoutes = [
  {
    icon: menuAboutIcon,
    text: $_('navigation.about'),
    route: getLocalizedRoute('about'),
  },
  {
    icon: menuSkillsIcon,
    text: $_('navigation.projects'),
    route: getLocalizedRoute('projects'),
  },
];

export let colorClass;
</script>

{#each homeRoutes as item, i}
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-4-phone home-routes {colorClass}" in:fly="{{
        x: -500, duration: 350, delay: i * 350, easing: backOut,
    }}">
        <MaterialChip on:click={() => push(item.route)}><MaterialIcon class="material-icons" leading tabindex="0">{item.icon}</MaterialIcon><MaterialChipText>{item.text}</MaterialChipText></MaterialChip>
    </div>
{/each}