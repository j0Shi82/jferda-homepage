<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFly } from 'utils/imports/svelte';
import { MaterialFab, MaterialFabLabel } from 'utils/imports/material';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// components
import Icon from 'fa-svelte';

export let projectData;
export let animationTotalDuration;
</script>

<style lang="scss">
  .mdc-layout-grid__cell {
    display: flex;
    justify-content: space-evenly;
  }

  :global(button > svg.dark.fa-svelte > path) {
    fill: #000;
}
</style>

{#if projectData.projectPage.links.length}
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" in:svelteTransitionFly="{{ y: -400, duration: animationTotalDuration }}">
    {#each projectData.projectPage.links as link, i}
        {#if link.type === 'web'}
            <MaterialFab style="background-color: {link.bgColor};" on:click="{() => { window.open(link.url); }}" extended><Icon class="{link.colorClass} mdc-fab__icon" icon={faGlobe}></Icon><MaterialFabLabel style="color: {link.color}">{ $localize(link.labelLocaleIdent)}</MaterialFabLabel></MaterialFab>
        {/if}
        {#if link.type === 'github'}
            <MaterialFab style="background-color: {link.bgColor};" on:click="{() => { window.open(link.url); }}" extended><Icon class="{link.colorClass} mdc-fab__icon" icon={faGithub}></Icon><MaterialFabLabel style="color: {link.color}">{ $localize(link.labelLocaleIdent)}</MaterialFabLabel></MaterialFab>
        {/if}
    {/each}
    </div>
{/if}