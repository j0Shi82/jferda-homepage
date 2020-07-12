<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFly } from 'utils/imports/svelte';
import { FlyingHeadline } from 'utils/imports/components';
import { isDesktopBreakpoint, screenWidth } from 'utils/imports/store';

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
</script>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
    <FlyingHeadline 
        localeKey="project.desc" 
        transitionDirection="{$isDesktopBreakpoint ? ['left', 'left'] : ['left', 'right']}" 
        transitionDuration="{animationParams.headline.duration}" 
        transitionDelay="{animationParams.headline.delay}"
    />
    <p in:svelteTransitionFly="{{
        x: $screenWidth / (-2),
        duration: animationParams.content.duration,
        delay: animationParams.content.delay + animationParams.content.iterationDelay * 0,
    }}">
        {@html $localize(projectData.projectPage.descLocaleKey)}
    </p>
</div>