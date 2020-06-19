<script>
    import { onMount } from 'svelte';

    export let query;

    let mql;
    let mqlListener;
    let wasMounted = false;
    let matches = false;

    function addNewListener(q) {
      mql = window.matchMedia(q);
      mqlListener = (v) => {
        matches = v.matches;
      };
      mql.addListener(mqlListener);
      matches = mql.matches;
    }

    function removeActiveListener() {
      if (mql && mqlListener) {
        mql.removeListener(mqlListener);
      }
    }

    onMount(() => {
      wasMounted = true;
      return () => {
        removeActiveListener();
      };
    });

    $: {
      if (wasMounted) {
        removeActiveListener();
        addNewListener(query);
      }
    }
</script>

<slot {matches} />