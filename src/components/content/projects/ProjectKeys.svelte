<script>
import { localize } from 'utils/imports/core';
import { FlyingHeadline } from 'utils/imports/components';
import {
  MaterialList, MaterialListItem, MaterialListGraphic, MaterialListText, MaterialListPrimaryText, MaterialListSecondaryText,
} from 'utils/imports/material';
import { isDesktopBreakpoint } from 'utils/imports/store';

export let projectData = {};
export let animationParams = {
  headline: {
    duration: 0,
    delay: 0,
  },
  content: {
    duration: 0,
    delay: 0,
    iterationDelay: 0,
  },
};

// --jdev-highlights-animation-duration is required to pass the animation time to the material component
// see project.scss for corresponding style
// there might be a smarter way to dynamically set a css value on a third-party component, but it'll do for now
</script>

<div 
    class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone"
    style="--jdev-highlights-animation-duration: {animationParams.content.duration}ms;"
>
    <FlyingHeadline 
    localeKey="project.highlights" 
        transitionDirection="{$isDesktopBreakpoint ? ['right', 'right'] : ['left', 'right']}" 
        transitionDuration="{animationParams.headline.duration}" 
        transitionDelay="{animationParams.headline.delay}"
    />
    <MaterialList class="jdev-project-highlights" threeLine nonInteractive>
        {#each projectData.projectPage.keys as key, i}
        <MaterialListItem style="animation-delay: {animationParams.content.delay + animationParams.content.iterationDelay * i}ms;">
            <MaterialListGraphic class="material-icons">star</MaterialListGraphic>
            <MaterialListText>
                <MaterialListPrimaryText>{$localize(key.primaryTextLocaleKey)}</MaterialListPrimaryText>
                <MaterialListSecondaryText>{$localize(key.secondaryTextLocaleKey)}</MaterialListSecondaryText>
                <MaterialListSecondaryText>{$localize(key.secondSecondaryTextLocaleKey)}</MaterialListSecondaryText>
            </MaterialListText>
        </MaterialListItem>
        {/each}
    </MaterialList>
</div>