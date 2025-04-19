<script>
  import { atomTransitionDuration, headerTransitionDuration, pageTransitionDuration, routingFadeDuration } from 'utils/imports/config'
  import { resumeEducationList, resumeExperienceList, resumeSkillList } from 'utils/imports/data'
  import { svelteTransitionFade } from 'utils/imports/svelte'
  // components
  import ResumeItem from 'components/content/resume/ResumeItem.svelte'
  import FlyingHeadline from 'components/utilities/atoms/FlyingHeadline.svelte'

  import 'assets/style/resume.scss'

  let itemCount = 0
  let transitionDuration = atomTransitionDuration

  $: {
    itemCount = resumeEducationList.length + resumeExperienceList.length + resumeSkillList.length
    transitionDuration = (pageTransitionDuration - headerTransitionDuration) / itemCount
  }

  const data = [
    {
      localeKey: 'resume.education.headline',
      items: resumeEducationList,
    },
    {
      localeKey: 'resume.experience.headline',
      items: resumeExperienceList,
    },
    {
      localeKey: 'resume.skills.headline',
      items: resumeSkillList,
    },
  ]

  const calcDelay = (index) => {
    let delay = 0
    for (let i = 0; i < index; i++) {
      delay += data[i].items.length * transitionDuration
    }
    return delay
  }
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-resume" in:svelteTransitionFade|global={{ duration: routingFadeDuration }}>
  {#each data as { localeKey, items }, i (i)}
    <FlyingHeadline {localeKey} />
    <div class="mdc-layout-grid__inner">
      {#each items as item, j (j)}
        <ResumeItem {item} delay={calcDelay(i) + j * transitionDuration + headerTransitionDuration} {transitionDuration} />
      {/each}
    </div>
  {/each}
</div>
