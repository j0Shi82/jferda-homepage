<script>
import { localize, getLocalizedRoute } from 'utils/imports/core';
import { svelteTransitionScale } from 'utils/imports/svelte';
import { headerTransitionDuration, atomTransitionDurationShort, atomTransitionDuration } from 'utils/imports/config';
import { animationsActive } from 'utils/imports/store';
// material
import Card, {
  Content as CardContent, Media as CardMedia,
} from '@smui/card';
import { LeadingIcon } from '@smui/chips';
import '@smui/card/_index.scss';
import '@smui/chips/_index.scss';
// components
import TechLogo from 'components/utilities/atoms/TechLogo.svelte';

let hover = false;
export let i;
export let project;
</script>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
    <div 
        class="card-container" 
        in:svelteTransitionScale="{{
            delay: $animationsActive ? headerTransitionDuration + i * atomTransitionDurationShort : 0,
            duration: $animationsActive ? atomTransitionDuration : 0,
        }}"
    >
        <Card variant="outlined">
            {#if hover || !project.live}
            <CardContent class="jdev-project-hover-content">
                <span>{$localize(project.descLocaleKey)}</span>
                {#if project.live}
                <LeadingIcon class="material-icons" style="margin: 5px 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </LeadingIcon>
                <a href="#{getLocalizedRoute(project.routeName)}">{$localize('projects.learnmore')}</a>
                {/if}
            </CardContent>
            {/if}
            <CardMedia class="card-media-16x9 {project.ident} {!project.live ? 'jdev-projects-upcoming' : ''}" aspectRatio="16x9">
            </CardMedia>
            <CardContent>
                {#if project.live}
                <div class="jdev-project-hover-toggle" on:click={() => { hover = !hover; }}>
                    {#if hover}
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    {/if}
                </div>
                {:else}
                <div class="jdev-project-upcoming-band"></div>
                {/if}
                <h2 class="jdev-card-headline mdc-typography--headline6">
                   {$localize(project.titleLocaleKey)}
                </h2>
                <h3 class="jdev-card-subtitle mdc-typography--subtitle2">
                    <div>
                        {#each project.skillsLocaleKeys.map((skillLocaleKey) => skillLocaleKey.replace('skills.', '')).sort((a, b) => {
                            const x = a.toLowerCase();
                            const y = b.toLowerCase();
                            // eslint-disable-next-line no-nested-ternary
                            return x < y ? -1 : x > y ? 1 : 0;
                        }) as skill}
                        <TechLogo ident="{skill}" height="16" />
                        {/each}
                    </div>
                    <!-- {project.skillsLocaleKeys.map((skillLocaleKey) => $localize(skillLocaleKey)).sort((a, b) => {
                        const x = a.toLowerCase();
                        const y = b.toLowerCase();
                        // eslint-disable-next-line no-nested-ternary
                        return x < y ? -1 : x > y ? 1 : 0;
                    }).join($localize('projects.skillsep'))} -->
                </h3>
            </CardContent>
        </Card>
    </div>
</div>