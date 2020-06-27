<style lang="scss" global>
  @import "../styles/global.scss";

  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<script context="module">
  export async function preload({ params, query }) {
    const imgRes = await this.fetch("imgList.json");
    const imgData = await imgRes.json();

    if (imgRes.status === 200) {
      return {
        imgList: imgData
      };
    } else {
      this.error(imgData.status, imgData.message);
    }
  }
</script>

<script>
  // import WaterBg from "./../components/WaterBg.svelte";
  import Nav from "../components/Nav.svelte";
  import { onMount } from "svelte";
  export let imgList;
  // window.imgList = imgList;

  let mounted;

  onMount(() => {
    mounted = true;
    window.imgList = imgList;
  });

  export let segment;
  `${segment}`;
</script>

<Nav segment="segment" />
<!-- <WaterBg /> -->

{#if mounted}
  <main>
    <slot />
  </main>
{/if}
