<script>
  // Renders a Font Awesome icon object as inline SVG. Replaces the unmaintained
  // `fa-svelte` package; the `fa-svelte` class name is kept for style compatibility.
  export let icon

  $: viewBox = `0 0 ${icon.icon[0]} ${icon.icon[1]}`
  $: path = icon.icon[4]
  $: classes = `fa-svelte ${$$props.class ?? ''}`
</script>

<svg aria-hidden="true" class={classes} role="img" xmlns="http://www.w3.org/2000/svg" {viewBox}>
  <path fill="currentColor" d={path} />
</svg>

<style>
  .fa-svelte {
    width: 1em;
    height: 1em;
    overflow: visible;
    display: inline-block;
  }
</style>
