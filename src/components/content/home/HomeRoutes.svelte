<script>
import { routerPush, localize } from 'utils/imports/core';
import {
  MaterialChip, MaterialChipText, MaterialIcon, MaterialChipSet,
} from 'utils/imports/material';
import { svelteTransitionFly, svelteEasingBackOut } from 'utils/imports/svelte';
import { atomTransitionDuration } from 'utils/imports/config';
import { screenWidth } from 'utils/imports/store';
import { getLocalizedRoute } from 'utils/imports/core';
import { homeRoutes } from 'utils/imports/data';

export let colorClass;
let i = 0;
i = 0;
</script>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop jdev-d-mobile-none jdev-d-tablet-none"></div>
    <MaterialChipSet chips={homeRoutes} let:chip class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
        <div class="home-routes {colorClass}" in:svelteTransitionFly="{{
            x: $screenWidth / -2, duration: atomTransitionDuration, delay: atomTransitionDuration * i++, easing: svelteEasingBackOut,
        }}">
            <MaterialChip {chip} on:click={() => routerPush(getLocalizedRoute(chip.route))}>
                <MaterialIcon class="material-icons" tabindex="0">{chip.icon}</MaterialIcon>
                <MaterialChipText>{$localize(chip.textLocaleIdent)}</MaterialChipText>
            </MaterialChip>
        </div>
    </MaterialChipSet>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop jdev-d-mobile-none jdev-d-tablet-none"></div>