<script>
import { routerPush, localize } from 'utils/imports/core';
import { MaterialChip, MaterialChipText, MaterialIcon } from 'utils/imports/material';
import { svelteTransitionFly, svelteEasingBackOut } from 'utils/imports/svelte';
import { atomTransitionDuration } from 'utils/imports/config';
import { screenWidth } from 'utils/imports/store';
import { getLocalizedRoute } from 'utils/imports/core';
import { homeRoutes } from 'utils/imports/data';

export let colorClass;
</script>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop jdev-d-mobile-none jdev-d-tablet-none"></div>
{#each homeRoutes as item, i}
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-2-phone home-routes {colorClass}" in:svelteTransitionFly="{{
        x: $screenWidth / -2, duration: atomTransitionDuration, delay: i * atomTransitionDuration, easing: svelteEasingBackOut,
    }}">
        <MaterialChip on:click={() => routerPush(getLocalizedRoute(item.route))}><MaterialIcon class="material-icons" leading tabindex="0">{item.icon}</MaterialIcon><MaterialChipText>{$localize(item.textLocaleIdent)}</MaterialChipText></MaterialChip>
    </div>
{/each}
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop jdev-d-mobile-none jdev-d-tablet-none"></div>