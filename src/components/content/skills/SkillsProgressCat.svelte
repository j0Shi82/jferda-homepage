<script>
  import { atomTransitionDuration, headerTransitionDuration, pageTransitionDuration } from 'utils/imports/config'
  import { skillList } from 'utils/imports/data'
  import { animationsActive, screenWidth } from 'utils/imports/store'
  import { svelteTransitionFly, svelteTransitionSlide } from 'utils/imports/svelte'
  // components
  import SkillsListRow from 'components/content/skills/SkillsListRow.svelte'
  import SkillsProgressRow from 'components/content/skills/SkillsProgressRow.svelte'
  // smui
  import Paper, { Content } from '@smui/paper'

  import 'assets/style/skillsprogress.scss'

  let subcats = []
  let subcatOrder = ['javascript', 'php', 'css', 'ai', 'cloud', 'seo', 'runtime', 'database', 'pm', 'bundler', 'testing', 'linting']

  function getSortedSkillProgressList(subcat = null) {
    return skillList
      .filter(el => el.cat === catIdent)
      .filter(el => el.subcat === subcat || subcat === null)
      .sort((a, b) => {
        // sort by defined order of javascript -> php -> css
        // then by name
        if (a.subcat === b.subcat) {
          if (a.name.toUpperCase() < b.name.toUpperCase()) return -1
          if (a.name.toUpperCase() > b.name.toUpperCase()) return 1
          return 0
        }

        return subcatOrder.indexOf(a.subcat) - subcatOrder.indexOf(b.subcat)
      })
  }

  export let catIdent
  export let catOpen = false
  export let slideDelay = 0
  export let slideDuration = atomTransitionDuration
  export let rowIterationDelay = (pageTransitionDuration - slideDelay) / (skillList.filter(el => el.cat === catIdent).length + 1)

  $: {
    subcats = skillList
      .filter(el => el.cat === catIdent)
      .map(el => el.subcat)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((a, b) => {
        // sort by defined order of javascript -> php -> css
        return subcatOrder.indexOf(a) - subcatOrder.indexOf(b)
      })
  }

  $: {
    slideDuration = $animationsActive ? slideDuration : 0
    slideDelay = $animationsActive ? slideDelay : 0
  }
</script>

{#if catOpen}
  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 jdev-skills-progress-cat" class:no-animation={!$animationsActive}>
    <div class="mdc-layout-grid__inner" in:svelteTransitionSlide|global={{ duration: slideDuration, delay: slideDelay }}>
      {#each subcats as cat (cat)}
        {#if subcats.length > 1}
          <div
            in:svelteTransitionFly|global={{
              x: $screenWidth * 2,
              duration: $animationsActive ? headerTransitionDuration : 0,
              delay: 0,
            }}
            class="mdc-layout-grid__cell--span-2-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-1-phone"
            style="display: grid;"
          >
            <Paper color="default" class="jdev-skills-progress-subcat-header">
              <Content style="background-image: url({skillList.filter(el => el.class === cat)[0].logo});"></Content>
            </Paper>
          </div>
          <Paper
            color="default"
            class="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-6-tablet mdc-layout-grid__cell--span-3-phone jdev-skills-progress-subcat-content"
            style="display: flex; align-items: center;"
          >
            <Content class="mdc-layout-grid__inner" style="flex: 1;">
              {#each getSortedSkillProgressList(cat) as skill (skill.name)}
                {#if skill.progress === 0 || skill.progress >= 0.5}
                  <SkillsProgressRow
                    themeClass={skill.class}
                    logoSrc={skill.logo}
                    logoAlt={skill.name}
                    progress={skill.progress}
                    delay={slideDelay + rowIterationDelay * getSortedSkillProgressList().findIndex(el => el.name === skill.name)}
                    duration={pageTransitionDuration - (slideDelay + rowIterationDelay * getSortedSkillProgressList().findIndex(el => el.name === skill.name))}
                    style="--jdev-skills-progress-duration: {pageTransitionDuration - (slideDelay + rowIterationDelay * getSortedSkillProgressList().findIndex(el => el.name === skill.name))}ms"
                  />
                {/if}
              {/each}
              {#each getSortedSkillProgressList(cat) as skill (skill.name)}
                {#if skill.progress > 0 && skill.progress < 0.5}
                  <SkillsListRow
                    themeClass={skill.class}
                    logoSrc={skill.logo}
                    logoAlt={skill.name}
                    delay={slideDelay + rowIterationDelay * getSortedSkillProgressList().findIndex(el => el.name === skill.name)}
                    style="--jdev-skills-progress-duration: {pageTransitionDuration - (slideDelay + rowIterationDelay * getSortedSkillProgressList().findIndex(el => el.name === skill.name))}ms"
                  />
                {/if}
              {/each}
            </Content>
          </Paper>
        {:else}
          {#each getSortedSkillProgressList(cat) as skill, i (skill.name)}
            <SkillsProgressRow
              themeClass={skill.class}
              logoSrc={skill.logo}
              logoAlt={skill.name}
              progress={skill.progress}
              delay={slideDelay + rowIterationDelay * i}
              style="--jdev-skills-progress-duration: {pageTransitionDuration - (slideDelay + rowIterationDelay * i)}ms"
            />
          {/each}
        {/if}
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  .jdev-skills-progress-cat {
    :global(h2) {
      margin-top: 0;
      //   border-top: 1px solid #000;
    }

    :global(.jdev-headline-underline) {
      //   display: none;
      margin-bottom: 0;
    }

    :global(.jdev-skills-progress-subcat-header) {
      background-color: var(--mdc-theme-surface);
    }
  }
</style>
