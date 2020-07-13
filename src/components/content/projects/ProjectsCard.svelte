<script>
import { localize, getLocalizedRoute, routerPush } from 'utils/imports/core';
import { svelteTransitionScale } from 'utils/imports/svelte';
import { headerTransitionDuration, atomTransitionDurationShort, atomTransitionDuration } from 'utils/imports/config';
import {
  MaterialCard, MaterialCardMedia, MaterialCardContent, MaterialIcon,
} from 'utils/imports/material';
import { animationsActive } from 'utils/imports/store';

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
                <a href="javascript:void(0)" on:click="{() => routerPush(getLocalizedRoute(project.routeName))}">{$localize('projects.learnmore')}</a>
            </MaterialCardContent>
            {/if}
            <MaterialCardMedia class="card-media-16x9 {project.ident}" aspectRatio="16x9">
            </MaterialCardMedia>
            <MaterialCardContent>
                <h2 class="jdev-card-headline mdc-typography--headline6">{$localize(project.titleLocaleKey)}</h2>
                <h3 class="jdev-card-subtitle mdc-typography--subtitle2">
                    {project.skillsLocaleKeys.map((skillLocaleKey) => $localize(skillLocaleKey)).join($localize('projects.skillsep'))}
                </h3>
            </MaterialCardContent>
        </MaterialCard>
    </div>
</div>