<script>
  import { skillList } from 'utils/imports/data'
  import { svelteLifecycleOnMount } from 'utils/imports/svelte'
  // components
  import SkillsProgressCat from 'components/content/skills/SkillsProgressCat.svelte'
  import FlyingHeadline from 'components/utilities/atoms/FlyingHeadline.svelte'

  export let projectData = {}
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
  }

  const projectSkills = skillList.filter(el => el.cat === projectData.ident)

  // need this fake grid to properly calculate the windows height
  // skills cat slowly unfolds which skews page height so we need a placeholder that immediately disappears
  let fakeGrid = true
  svelteLifecycleOnMount(() => {
    fakeGrid = false
  })
</script>

{#if projectSkills.length}
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" style="--jdev-skills-progress-duration: {animationParams.content.duration}ms;">
    <FlyingHeadline localeKey="project.skills" transitionDuration={animationParams.headline.duration} transitionDelay={animationParams.headline.delay} />
    {#if fakeGrid}
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <div class="mdc-layout-grid__inner">
          {#each projectSkills as skill (skill)}
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" data-skill={skill} style="height: 32px;"></div>
          {/each}
        </div>
      </div>
    {/if}
    <SkillsProgressCat
      catIdent={projectData.ident}
      catOpen={true}
      slideDelay={animationParams.content.delay}
      slideDuration={animationParams.content.duration}
      rowIterationDelay={animationParams.content.iterationDelay}
    />
  </div>
{/if}
