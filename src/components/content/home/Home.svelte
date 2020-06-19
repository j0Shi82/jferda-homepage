<script>
    import { onMount, onDestroy } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { backOut } from 'svelte/easing';
    import Chip, { Text, Icon } from '@smui/chips';
    import H2 from '@smui/common/H2.svelte';
    import IconButton from '@smui/icon-button';
    import Typed from 'typed.js';
    import { push } from 'svelte-spa-router';

    import satisfactionImage from 'assets/media/images/home-heros/satisfaction.jpg';
    import communityImage from 'assets/media/images/home-heros/community.jpg';
    import artImage from 'assets/media/images/home-heros/art.jpg';
    import knowledgeVueImage from 'assets/media/images/knowledge-logos/vuejs.png';
    import 'assets/style/home.scss';

    import store from 'store/index';
    import config from 'config/index';
    // store values we need
    const { transitionsActive } = store.home;
    const {
      about: menuAboutIcon, resume: menuResumeIcon, skills: menuSkillsIcon,
    } = config.menu.icons;

    const homeRoutes = [
      {
        icon: menuAboutIcon,
        text: 'About',
        route: '/about',
        visible: false,
      },
      {
        icon: menuResumeIcon,
        text: 'Resume',
        route: '/resume',
        visible: false,
      },
      {
        icon: menuSkillsIcon,
        text: 'Skills',
        route: '/skills',
        visible: false,
      },
    ];

    const homeHeros = [
      {
        image: satisfactionImage,
        headline: 'Satisfaction',
        text: 'Coding is a world in which pretty much all problems can be solved. Within an app or project, there\'s not much you won\'t be able to do. It\'s a constant reward system that just keeps on giving.',
      },
      {
        image: communityImage,
        headline: 'Community',
        text: 'Participating in the open-source community is a great way to drive change, stay open-minded, and yield great results.',
      },
      {
        image: artImage,
        headline: 'Art',
        text: 'Nobody would compare coding to classic art. But why? Devs are able to create software out of thin air just using their imagination and creativity.',
      },
    ];

    let knowledgeLogosVisible = false;
    let gridReference;
    let cancelAnimationSnackbar;

    function setAnimationVisbility() {
      knowledgeLogosVisible = true;
      for (let i = 0; i < homeRoutes.length; i += 1) {
        homeRoutes[i].visible = true;
      }
    }

    onMount(() => {
      if ($transitionsActive) {
        cancelAnimationSnackbar.classList.add('mdc-snackbar--open');
        const options = {
          strings: [
            'Hey, my name is <b>Janosch</b>. I\'m a <b>full-stack web developer</b> from Germany with a focus on creating performant and modern <b>Javascript</b> applications. Explore this website to learn more about my <b>philosophy</b> and my <b>work</b>.',
          ],
          typeSpeed: 28,
          showCursor: false,
          onComplete: () => {
            setAnimationVisbility();
            setTimeout(() => {
              cancelAnimationSnackbar.classList.remove('mdc-snackbar--open');
            }, 3000);
          },
          onStringTyped: (arrayPos) => { console.log(arrayPos); },

        };
        const typed = new Typed('.jdev-typedjs', options);
      } else {
        setAnimationVisbility();
      }
    });

    onDestroy(() => {
      transitionsActive.set(false);
    });

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

.jdev-typewriter {
  font-family: 'Source Code Pro', monospace;
  text-align: center;
}
</style>

<div class="jdev-route-home">
    <div class="mdc-layout-grid" bind:this={gridReference}>
        <div class="mdc-layout-grid__inner">
            {#if $transitionsActive}
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 jdev-typewriter jdev-typedjs"></div>
            {:else}
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 jdev-typewriter">
                Hey, my name is <b>Janosch</b>. I'm a <b>full-stack web developer</b> from Germany with a focus on creating performant and modern <b>Javascript</b> applications. Explore this website to learn more about my philosophy and my work.
            </div>
            {/if}
            {#if knowledgeLogosVisible}
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                {#if $transitionsActive}
                <div in:fade="{{ duration: 1500 }}" class="{knowledgeLogosVisible ? 'knowledge-logos visible' : 'knowledge-logos'}">
                    <img alt="Vue.js" src="{knowledgeVueImage}" />
                </div>
                {:else}
                <div class="knowledge-logos visible">
                    <img alt="Vue.js" src="{knowledgeVueImage}" />
                </div>
                {/if}
            </div>
            {/if}
            {#if $transitionsActive}
                {#each homeRoutes as item, i}
                    {#if item.visible}
                    <div class="mdc-layout-grid__cell home-routes" in:fly="{{
                        x: -500, duration: 750, delay: i * 750 + 500, easing: backOut,
                    }}">
                        <Chip on:click={() => push(item.route)}><Icon class="material-icons" leading tabindex="0">{item.icon}</Icon><Text>{item.text}</Text></Chip>
                    </div>
                    {/if}
                {/each}
            {:else}
                {#each homeRoutes as item, i}
                    {#if item.visible}
                    <div class="mdc-layout-grid__cell home-routes">
                        <Chip on:click={() => push(item.route)}><Icon class="material-icons" leading tabindex="0">{item.icon}</Icon><Text>{item.text}</Text></Chip>
                    </div>
                    {/if}
                {/each}
            {/if}
        </div>
        <h2 class="mdc-typography--headline6" style="text-align: center;">Projects</h2>
        <div class="mdc-layout-grid__inner">
            {#each homeHeros as item}
            <div class="mdc-layout-grid__cell home-hero">
                <Chip><div class="image" style="background-image: url({item.image});" tabindex="0"></div><Text>{item.headline}</Text></Chip>
            </div>
            <!-- <div class="mdc-layout-grid__cell home-hero">
                <Card class="mdc-card-jfd">
                    <Media style="background-image: url({item.image});" aspectRatio="16x9">
                    <MediaContent>
                        <div class="jfd-media-content-wrapper" style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
                            <h2 class="mdc-typography--headline6 jfd-shadow" style="margin: 0;">{item.headline}</h2>
                            <h3 class="mdc-typography--subtitle2 jfd-shadow jfd-d-mobile-none jfd-d-tablet-none" style="margin: 0;">{item.text}</h3>
                        </div>
                    </MediaContent>
                    </Media>
                    <Content class="mdc-typography--body2 jfd-d-desktop-none">
                        {item.text}
                    </Content>
                </Card>
            </div> -->
            {/each}
        </div>
    </div>

    <div 
        class="mdc-snackbar" 
        style="cursor: pointer;"
        bind:this={cancelAnimationSnackbar}
        on:click={() => { setAnimationVisbility(); transitionsActive.set(false); cancelAnimationSnackbar.classList.remove('mdc-snackbar--open'); }}
    >
        <div class="mdc-snackbar__surface ">
            <span class="mdc-snackbar__label" role="status" aria-live="polite">Skip animation</span>
            <div class="mdc-snackbar__actions">
                <IconButton class="material-icons jdev-snackbar-dismiss" title="Dismiss">cancel</IconButton>
            </div>
        </div>
    </div>
</div>