<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFly, svelteTransitionScale } from 'utils/imports/svelte';
import { routingFadeDuration } from 'utils/imports/config';
import {
  MaterialCard, MaterialCardMedia, MaterialCardContent, CardPrimaryAction, MaterialIcon
} from 'utils/imports/material';

import 'assets/style/projects.scss';

const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const headerTransitionDuration = routingFadeDuration * 5;

let hover = false;
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-projects">
    <h2 class="mdc-typography--headline6" in:svelteTransitionFly="{{ x: screenWidth / -2, duration: headerTransitionDuration }}">{$localize('navigation.projects.headline')}</h2>
    <div class="jdev-headline-underline" in:svelteTransitionFly="{{ x: screenWidth / 2, duration: headerTransitionDuration }}"></div>
    <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
            <div 
                class="card-container" 
                in:svelteTransitionScale="{{ delay: headerTransitionDuration, duration: 500 }}"
            >
                <MaterialCard variant="outlined" on:mouseenter={() => { hover = true; }} on:mouseleave={() => { hover = false; }}>
                  <CardPrimaryAction>
                    {#if hover}
                    <MaterialCardContent class="jdev-project-hover-content">
                      <span>NWO:UN has been my biggest personal project to date. We served the game's community for nearly five years and delivered content and tools to over 100,000 players per month.</span>
                      <MaterialIcon class="material-icons" style="margin: 5px 0">star</MaterialIcon>
                      <a href="javascript:void(0)">Learn more</a>
                    </MaterialCardContent>
                    {/if}
                    <MaterialCardMedia class="card-media-16x9 nwoun" aspectRatio="16x9">
                    </MaterialCardMedia>
                    <MaterialCardContent>
                      <h2 class="mdc-typography--headline6" style="margin: 0; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">Neverwinter Uncensored</h2>
                      <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #689f38; text-align: center; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">PHP, JavaScript, Wordpress, SQL</h3>
                    </MaterialCardContent>
                  </CardPrimaryAction>
                </MaterialCard>
              </div>
        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
            <div 
                class="card-container" 
                in:svelteTransitionScale="{{ delay: headerTransitionDuration + 100, duration: 500 }}"
            >
                <MaterialCard variant="outlined">
                  <MaterialCardMedia class="card-media-square" aspectRatio="square">
                    <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
                        <h2 class="mdc-typography--headline6" style="margin: 0;">A card with square media.</h2>
                        <h3 class="mdc-typography--subtitle2" style="margin: 0;">And a subtitle.</h3>
                    </div>
                  </MaterialCardMedia>
                </MaterialCard>
              </div>
        </div>
    </div>
</div>