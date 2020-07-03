<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFly, svelteTransitionScale } from 'utils/imports/svelte';
import { routingFadeDuration } from 'utils/imports/config';
import {
  MaterialCard, MaterialCardMedia,
} from 'utils/imports/material';

import 'assets/style/projects.scss';

const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const headerTransitionDuration = routingFadeDuration * 5;
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-projects">
    <h2 class="mdc-typography--headline6" in:svelteTransitionFly="{{ x: screenWidth / -2, duration: headerTransitionDuration }}">{$localize('navigation.projects.headline')}</h2>
    <div class="jdev-headline-underline" in:svelteTransitionFly="{{ x: screenWidth / 2, duration: headerTransitionDuration }}"></div>
    <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-4-phone">
            <div 
                class="card-container" 
                in:svelteTransitionScale="{{ delay: headerTransitionDuration, duration: 500 }}"
            >
                <MaterialCard variant="outlined">
                  <MaterialCardMedia class="card-media-square nwoun" aspectRatio="square">
                    <div style="color: #000; position: absolute; bottom: 0; left: 0; background: linear-gradient(0deg, rgba(245, 245, 245, 1) 20%, rgba(245, 245, 245, 0) 100%); width: 100%;">
                        <h2 class="mdc-typography--headline5" style="margin: 25px 0 0 0; padding: 0 10px;">Neverwinter Uncensored</h2>
                        <h3 class="mdc-typography--subtitle2" style="color: #689f38; margin: 0; padding: 0 10px; text-align: center;">PHP, JavaScript, Wordpress, SQL</h3>
                    </div>
                  </MaterialCardMedia>
                </MaterialCard>
              </div>
        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-4-phone">
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