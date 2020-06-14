<script>
  // import WaterBg from "./../components/WaterBg.svelte";
  // import Nav from "../components/Nav.svelte";

  // export let segment;
</script>

<style lang="scss" global>
  @import "../styles/global.scss";

  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<!-- <Nav {segment} /> -->
<!-- <WaterBg /> -->
<main>
  <slot />
</main>
