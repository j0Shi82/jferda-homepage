<script>
    import { onMount, onDestroy } from 'svelte';
    import h2 from '@smui/common/H2.svelte';
    import HomeCancelAnimationSnackbar from 'components/content/home/HomeCancelAnimationSnackbar.svelte';
    import HomeTypewriterIntro from 'components/content/home/HomeTypewriterIntro.svelte';
    import HomeKnowledgeLogos from 'components/content/home/HomeKnowledgeLogos.svelte';
    import HomeRoutes from 'components/content/home/HomeRoutes.svelte';
    import HomeProjectLinks from 'components/content/home/HomeProjectLinks.svelte';

    import 'assets/style/home.scss';

    import store from 'store/index';
    // store values we need
    const { transitionsActive } = store.home;

    let knowledgeLogosVisible = false;
    let homeRouteVisible = false;
    let homeProjectsVisible = false;
    let cancelAnimationSnackbarOpen = false;

    function setAnimationVisbility() {
      knowledgeLogosVisible = true;
      homeRouteVisible = true;
      homeProjectsVisible = true;
    }

    function onTypewriterFinished() {
      setAnimationVisbility();
      setTimeout(() => {
        cancelAnimationSnackbarOpen = false;
      }, 2700);
    }

    onMount(() => {
      if ($transitionsActive) {
        cancelAnimationSnackbarOpen = true;
      } else {
        setAnimationVisbility();
      }
    });

    onDestroy(() => {
      transitionsActive.set(false);
    });
</script>

<div class="jdev-route-home">
    <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
            <HomeTypewriterIntro on:typewriter:done="{onTypewriterFinished}" />
            <HomeKnowledgeLogos logosVisible={knowledgeLogosVisible} />
            <HomeRoutes routeVisibility={homeRouteVisible} />
            <HomeProjectLinks visible="{homeProjectsVisible}" />
        </div>
    </div>

    <HomeCancelAnimationSnackbar 
        open={cancelAnimationSnackbarOpen} 
        on:click={() => { cancelAnimationSnackbarOpen = false; transitionsActive.set(false); setAnimationVisbility(); }}
    />
</div>