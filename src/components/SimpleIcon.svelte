<style lang="scss">
  svg {
    width: 3em;
    transition: 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    // path {
    //   transition: 0.5s;
    // }
  }
  .simple-icon {
    margin: 0 0.5rem;
  }
  svg:hover {
    transform: scale(1.5, 1.5);
    z-index: 10;
    /* fill: url(#my-cool-gradient) #44996e; */
    margin: 0 1rem;
    // path {
    //   fill: #00acee;
    // }
  }
</style>

<script>
  import * as simpleIcons from "simple-icons";
  export let icon;
  export let url;
  export let color = "white";
  const iconPath = simpleIcons.default[`${icon}`].path;
</script>

<a href="{url} " class="simple-icon">
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="{iconPath}" fill="{color}"></path>
  </svg>
</a>
