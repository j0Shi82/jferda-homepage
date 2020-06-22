<script>
import Card, {
  Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons,
} from '@smui/card';
import h2 from '@smui/common/H2.svelte';
import h3 from '@smui/common/H3.svelte';
import { push } from 'svelte-spa-router';
import { slide } from 'svelte/transition';

import moneyballLogo from 'assets/media/images/home/projects/moneyball.png';
import edomLogo from 'assets/media/images/home/projects/e-domizil.png';
import lwLogo from 'assets/media/images/home/projects/lastwar.png';
import unLogo from 'assets/media/images/home/projects/logo-un.png';

import store from 'store/index';
// store values we need
const { transitionsActive } = store.home;

export let visible = false;

const projects = [
  {
    image: moneyballLogo,
    headline: 'MavsMoneyball',
    subtitle: 'PHP, Content Creation, SQL',
    text: 'Between 2010 and 2012 I was a blogger for the SBNation blog MavsMoneyball, which covers the NBA team Dallas Mavericks. To create statistical blog content I developed a analytical database based on PHP and SQL that helped me analyze games.',
    route: '/projects-mmb',
  },
  {
    image: unLogo,
    headline: 'Neverwinter Uncensored',
    subtitle: 'Wordpress, Community Management, Web Development, C#, Photoshop',
    text: 'Neverwinter Uncensord is by far my biggest personal project to date. From 2015 - 2019 I ran what would eventually turn our to become the biggest fansite of the MMO Neverwinter, serving over 100,000 players per month. Next to daily blog content the site also hosted many unique online tools for the game.',
    route: '/projects-nwoun',
  },
  {
    image: lwLogo,
    headline: 'LastWar Manager',
    subtitle: 'Javascript, HTML, CSS',
    text: 'Last War Manager (LWM) is a Tampermonkey script for the Last War Browsergame written and maintained from 2019 - 2020. It features both visual and functional upgrades to the user interface.',
    route: '/projects-lastwar',
  },
  {
    image: edomLogo,
    headline: 'e-domizil.de',
    subtitle: 'Node.js, Vue.js, SEO, Performance, Lumen, Docker',
    text: 'e-domizil.de is a commercial project based on Vue.js with SSR running on a Node server. I designed or integrated most of the essential features and Vue.js infrastructure like routing logic, api logic, server-side rendering, internalization, testing environment, and white-label capability.',
    route: '/projects-to',
  },
];
</script>

{#if visible}
    {#each projects as item, i}
    {#if $transitionsActive}
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-mobile home-hero" in:slide="{{ delay: i * 250 + 1550, duration: 250 }}">
        <div class="card-container">
            <Card variant="outlined">
                <div style="padding: 1rem;">
                    <h2 class="mdc-typography--headline6" style="margin: 0;">{item.headline}</h2>
                    {#if item.subtitle !== false}<h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">{item.subtitle}</h3>{/if}
                </div>
                <PrimaryAction on:click={() => push(item.route) }>
                    <Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({item.image});"></Media>
                    <Content class="mdc-typography--body2">{item.text}</Content>
                </PrimaryAction>
            </Card>
        </div>
    </div>
    {:else}
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-mobile home-hero">
        <div class="card-container">
            <Card variant="outlined">
                <div style="padding: 1rem;">
                    <h2 class="mdc-typography--headline6" style="margin: 0;">{item.headline}</h2>
                    {#if item.subtitle !== false}<h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">{item.subtitle}</h3>{/if}
                </div>
                <PrimaryAction on:click={() => push(item.route) }>
                    <Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({item.image});"></Media>
                    <Content class="mdc-typography--body2">{item.text}</Content>
                </PrimaryAction>
            </Card>
        </div>
    </div>
    {/if}
    {/each}
{/if}