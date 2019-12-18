<script>
  // import Nav from "../components/Nav.svelte";
  // import Background from "../components/Background.svelte";
  import BackgroundGl from "../components/BackgroundGl.svelte";

  // export let segment;
</script>

<style lang="scss" global>
  @import "../styles/global.scss";

  main {
    position: relative;
    // max-width: 56em;
    // background-color: white;
    // padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<!-- <Nav {segment} /> -->
<!-- <Background /> -->
<BackgroundGl />
<main>
  <slot />
</main>
