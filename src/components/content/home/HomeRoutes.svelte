<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFly, svelteEasingBackOut } from 'utils/imports/svelte';
import { atomTransitionDuration } from 'utils/imports/config';
import { screenWidth } from 'utils/imports/store';
import { getLocalizedRoute } from 'utils/imports/core';
import { homeRoutes } from 'utils/imports/data';
// material
import Chip, { Text as ChipText, Set as ChipSet } from '@smui/chips/styled';

export let colorClass;
</script>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop jdev-d-mobile-none jdev-d-tablet-none"></div>
    <ChipSet chips={homeRoutes} let:chip class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
        <div class="home-routes {colorClass}" in:svelteTransitionFly="{{
            // eslint-disable-next-line no-plusplus
            x: $screenWidth / -2, duration: atomTransitionDuration, delay: chip.transitionDelay, easing: svelteEasingBackOut,
        }}">

            <a href="#{getLocalizedRoute(chip.route)}">
                <Chip {chip}>
                    <i class="material-icons mdc-chip__icon mdc-chip__icon--leading" tabindex="0">
                        {@html chip.icon}
                    </i>
                    <ChipText>{$localize(chip.textLocaleIdent)}</ChipText>
                </Chip>
            </a>
        </div>
    </ChipSet>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop jdev-d-mobile-none jdev-d-tablet-none"></div>