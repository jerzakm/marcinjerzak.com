<script>
  import * as simpleIcons from "simple-icons";
  export let icon;
  export let url;
  export let color = "white";
  const iconPath = simpleIcons.default[`${icon}`].path;
</script>

<style>
  svg {
    width: 3em;
    transition: 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .simple-icon {
    margin: 0 0.5rem;
  }
  svg:hover {
    transform: scale(1.8, 1.8);
    z-index: 10;
    /* fill: url(#my-cool-gradient) #44996e; */
    margin: 0 1rem;
  }
</style>

<a href="{url} " class="simple-icon">
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d={iconPath} fill={color} />
  </svg>
</a>

<!-- <svg
  style="width:0;height:0;position:absolute;"
  aria-hidden="true"
  focusable="false">
  <linearGradient id="my-cool-gradient" x2="1" y2="1">
    <stop offset="0%" stop-color="#FF00FF" />
    <stop offset="100%" stop-color="#4FFFBD" />
  </linearGradient>
</svg> -->
