<style lang="scss" global>
  @import "../styles/global.scss";

  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<script>
  import WaterBg from "./../components/WaterBg.svelte";
  import Nav from "../components/Nav.svelte";
  import { onMount } from "svelte";

  let mounted;

  export let segment;
  `${segment}`;
</script>

<Nav segment="segment" />
<WaterBg />
<main>
  <slot />
</main>
