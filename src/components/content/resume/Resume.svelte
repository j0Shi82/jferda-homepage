<script>
import { svelteTransitionFade } from 'utils/imports/svelte';
import { routingFadeDuration, atomTransitionDuration, headerTransitionDuration } from 'utils/imports/config';
import { resumeEducationList, resumeExperienceList, resumeSkillList } from 'utils/imports/data';
// components
import ResumeItem from 'components/content/resume/ResumeItem.svelte';
import FlyingHeadline from 'components/utilities/atoms/FlyingHeadline.svelte';

import 'assets/style/resume.scss';
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-resume" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
    <FlyingHeadline localeKey="resume.education.headline" />
    <div class="mdc-layout-grid__inner">
        {#each resumeEducationList as item, i}
        <ResumeItem item="{item}" delay="{(i * atomTransitionDuration) + (headerTransitionDuration)}" transitionDuration="{atomTransitionDuration}" />
        {/each}
    </div>
    <FlyingHeadline localeKey="resume.experience.headline" />
    <div class="mdc-layout-grid__inner">
        {#each resumeExperienceList as item, i}
        <ResumeItem item="{item}" delay="{(i * atomTransitionDuration) + (headerTransitionDuration)}" transitionDuration="{atomTransitionDuration}" />
        {/each}
    </div>
    <FlyingHeadline localeKey="resume.skills.headline" />
    <div class="mdc-layout-grid__inner">
        {#each resumeSkillList as item, i}
        <ResumeItem item="{item}" delay="{(i * atomTransitionDuration) + (headerTransitionDuration)}" transitionDuration="{atomTransitionDuration}" />
        {/each}
    </div>
</div>