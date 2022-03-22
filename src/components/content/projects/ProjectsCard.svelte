<script>
import { localize, getLocalizedRoute, routerPush } from 'utils/imports/core';
import { svelteTransitionScale } from 'utils/imports/svelte';
import { headerTransitionDuration, atomTransitionDurationShort, atomTransitionDuration } from 'utils/imports/config';
import {
  MaterialCard, MaterialCardMedia, MaterialCardContent, MaterialIcon,
} from 'utils/imports/material';
import { animationsActive } from 'utils/imports/store';
import { TechLogo } from 'utils/imports/components';

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
        <MaterialCard variant="outlined" on:mouseenter={() => { hover = true; }} on:mouseleave={() => { hover = false; }}>
            {#if hover}
            <MaterialCardContent class="jdev-project-hover-content">
                <span>{$localize(project.descLocaleKey)}</span>
                <MaterialIcon class="material-icons" style="margin: 5px 0;">star</MaterialIcon>
                <span class="link" on:click="{() => routerPush(getLocalizedRoute(project.routeName))}">{$localize('projects.learnmore')}</span>
            </MaterialCardContent>
            {/if}
            <MaterialCardMedia class="card-media-16x9 {project.ident}" aspectRatio="16x9">
            </MaterialCardMedia>
            <MaterialCardContent>
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
            </MaterialCardContent>
        </MaterialCard>
    </div>
</div>