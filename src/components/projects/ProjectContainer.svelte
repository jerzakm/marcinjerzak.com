<style lang="scss">
  @import "../../styles/theme.scss";
  $headerTextSize: 5em;
  .header-container {
    display: flex;
    flex-direction: column;
    max-width: $headerTextSize * 3;
    margin: 0 $headerTextSize * 0.4;
  }

  .header-text {
    z-index: 2;
    font-size: $headerTextSize;
    font-weight: 700;
    color: rgba($color: #000000, $alpha: 0);
    text-shadow: none;
    -webkit-text-stroke: 2px #121212;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .projects {
    flex-basis: 500px;
    flex-grow: 4;
  }
  .filler {
    flex-grow: 1;
  }
</style>

<script>
  import FeaturedProject from "./FeaturedProject.svelte";

  export let projects;
</script>

<div class="container">
  <div>
    <div class="header-container flex-full-center">
      <span class="header-text">work</span>
    </div>
  </div>
  <div class="projects">
    {#each projects as project}
      <div class="project">
        <FeaturedProject {project} />
      </div>
    {/each}
  </div>
  <div class="filler"></div>
  <div></div>
</div>
