<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFly, svelteEasingBackOut } from 'utils/imports/svelte';
import { atomTransitionDuration } from 'utils/imports/config';
import { screenWidth } from 'utils/imports/store';
import { getLocalizedRoute } from 'utils/imports/core';
import { homeRoutes } from 'utils/imports/data';
// material
import Fab, { Label, Icon } from '@smui/fab/styled';

export let colorClass;
</script>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop jdev-d-mobile-none jdev-d-tablet-none"></div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone jdev-home-links">
        {#each homeRoutes as route}
        <div class="home-routes {colorClass}" in:svelteTransitionFly="{{
            // eslint-disable-next-line no-plusplus
            x: $screenWidth / -2, duration: atomTransitionDuration, delay: route.transitionDelay, easing: svelteEasingBackOut,
        }}">

            <a href="#{getLocalizedRoute(route.route)}">
                <Fab variant="unelevated" class="jdev-button-round" extended>
                    <Icon class="material-icons">
                        {@html route.icon}
                    </Icon>
                    <Label>{$localize(route.textLocaleIdent)}</Label>
                </Fab>
            </a>
        </div>
        {/each}
    </div>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop jdev-d-mobile-none jdev-d-tablet-none"></div>