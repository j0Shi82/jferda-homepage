<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFly } from 'utils/imports/svelte';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// material
import Fab, { Label } from '@smui/fab';
// components
import Icon from 'fa-svelte';

export let projectData;
export let animationTotalDuration;
</script>

<style lang="scss" global>
button > svg.dark.fa-svelte > path {
    fill: #000;
}
</style>

{#if projectData.projectPage.links.length}
    <div style="display: flex; justify-content: space-evenly;" class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" in:svelteTransitionFly="{{ y: -400, duration: animationTotalDuration }}">
    {#each projectData.projectPage.links as link, i}
        {#if link.type === 'web'}
            <Fab style="background-color: {link.bgColor};" on:click="{() => { window.open(link.url); }}" extended><Icon class="{link.colorClass} mdc-fab__icon" icon={faGlobe}></Icon><Label style="color: {link.color}">{ $localize(link.labelLocaleIdent)}</Label></Fab>
        {/if}
        {#if link.type === 'github'}
            <Fab style="background-color: {link.bgColor};" on:click="{() => { window.open(link.url); }}" extended><Icon class="{link.colorClass} mdc-fab__icon" icon={faGithub}></Icon><Label style="color: {link.color}">{ $localize(link.labelLocaleIdent)}</Label></Fab>
        {/if}
    {/each}
    </div>
{/if}