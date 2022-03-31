<script>
  import Loader from 'components/utilities/atoms/Loader.svelte';
</script>

<style lang="scss">
.lds-fullscreen-wrapper {
  position: absolute;
  height: calc(100% - 48px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<div class="lds-fullscreen-wrapper">
  <Loader />
</div>