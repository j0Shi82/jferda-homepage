<script>
import { localize } from 'utils/imports/core';
import { isDesktopBreakpoint } from 'utils/imports/store';
// material
import List, {
  Item, Text, PrimaryText, SecondaryText,
} from '@smui/list/styled';
// components
import FlyingHeadline from 'components/utilities/atoms/FlyingHeadline.svelte';
// icons
import starIcon from 'assets/media/material-icons/star.svg';

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
    <List class="jdev-project-highlights" threeLine nonInteractive>
        {#each projectData.projectPage.keys as key, i}
        <Item style="animation-delay: {animationParams.content.delay + animationParams.content.iterationDelay * i}ms;">
          <span class="material-icons mdc-deprecated-list-item__graphic" style="-webkit-mask-image: url({starIcon});mask-image: url({starIcon});"></span>
            <Text>
                <PrimaryText>{$localize(key.primaryTextLocaleKey)}</PrimaryText>
                <SecondaryText>{$localize(key.secondaryTextLocaleKey)}</SecondaryText>
                <SecondaryText>{$localize(key.secondSecondaryTextLocaleKey)}</SecondaryText>
            </Text>
        </Item>
        {/each}
    </List>
</div>