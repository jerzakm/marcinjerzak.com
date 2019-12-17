<script>
  import FeaturedProject from "./FeaturedProject.svelte";
</script>

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
  }

  .header-squiggle {
    fill: none;
    stroke: $primary-color;
    stroke-width: 20;
    max-width: $headerTextSize * 3;
    position: absolute;
    z-index: 1;
  }

  .container {
    // display: grid;
    // grid-template-columns: $headerTextSize * 3 1fr $headerTextSize * 3;
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

<div class="container">
  <div>
    <div class="header-container flex-full-center">
      <span class="header-text">work</span>
      <svg viewBox="0 0 216 52" class="header-squiggle">
        <path
          d="M5.5,40c7.1-4.1,50.4-38,113.4-5c34.7,18.2,79.5-18.2,91.3-24.9" />
      </svg>
    </div>
  </div>
  <div class="projects">
    <div class="project">
      <FeaturedProject />
    </div>
    <div class="project">
      <FeaturedProject />
    </div>
    <div class="project">
      <FeaturedProject />
    </div>
    <div class="project">
      <FeaturedProject />
    </div>
    <div class="project">
      <FeaturedProject />
    </div>
  </div>
  <div class="filler" />
  <div />
</div>
