<script>
import Chip, { Text, Icon } from '@smui/chips';
import { push } from 'svelte-spa-router';
import { fly } from 'svelte/transition';
import { backOut } from 'svelte/easing';

import store from 'store/index';
import config from 'config/index';
// store values we need
const { transitionsActive } = store.home;
const {
  about: menuAboutIcon, resume: menuResumeIcon, skills: menuSkillsIcon,
} = config.app.menu.icons;

export let routeVisibility = false;

const homeRoutes = [
  {
    icon: menuAboutIcon,
    text: 'About',
    route: '/about',
  },
  {
    icon: menuResumeIcon,
    text: 'Resume',
    route: '/resume',
  },
  {
    icon: menuSkillsIcon,
    text: 'Skills',
    route: '/skills',
  },
];
</script>

{#if $transitionsActive}
    {#each homeRoutes as item, i}
        {#if routeVisibility}
        <div class="mdc-layout-grid__cell home-routes" in:fly="{{
            x: -500, duration: 350, delay: i * 350 + 500, easing: backOut,
        }}">
            <Chip on:click={() => push(item.route)}><Icon class="material-icons" leading tabindex="0">{item.icon}</Icon><Text>{item.text}</Text></Chip>
        </div>
        {/if}
    {/each}
{:else}
    {#each homeRoutes as item, i}
        {#if routeVisibility}
        <div class="mdc-layout-grid__cell home-routes">
            <Chip on:click={() => push(item.route)}><Icon class="material-icons" leading tabindex="0">{item.icon}</Icon><Text>{item.text}</Text></Chip>
        </div>
        {/if}
    {/each}
{/if}