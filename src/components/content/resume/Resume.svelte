<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFade, svelteTransitionFly } from 'utils/imports/svelte';
import { routingFadeDuration, atomTransitionDuration, headerTransitionDuration } from 'utils/imports/config';
import { screenWidth } from 'utils/imports/store';
import { resumeEducationList, resumeExperienceList } from 'utils/imports/data';
import { ResumeItem } from 'utils/imports/components';

import 'assets/style/resume.scss';
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-resume" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
    <h2 class="mdc-typography--headline6" in:svelteTransitionFly="{{ x: $screenWidth / -2, duration: headerTransitionDuration }}">{$localize('resume.education.headline')}</h2>
    <div class="jdev-headline-underline" in:svelteTransitionFly="{{ x: $screenWidth / 2, duration: headerTransitionDuration }}"></div>
    <div class="mdc-layout-grid__inner">
        {#each resumeEducationList as item, i}
        <ResumeItem item="{item}" delay="{(i * atomTransitionDuration) + (headerTransitionDuration)}" transitionDuration="{atomTransitionDuration}" />
        {/each}
    </div>
    <h2 class="mdc-typography--headline6" in:svelteTransitionFly="{{ x: $screenWidth / -2, duration: headerTransitionDuration }}">{$localize('resume.experience.headline')}</h2>
    <div class="jdev-headline-underline" in:svelteTransitionFly="{{ x: $screenWidth / 2, duration: headerTransitionDuration }}"></div>
    <div class="mdc-layout-grid__inner">
        {#each resumeExperienceList as item, i}
        <ResumeItem item="{item}" delay="{(i * atomTransitionDuration) + (headerTransitionDuration)}" transitionDuration="{atomTransitionDuration}" />
        {/each}
    </div>
</div>