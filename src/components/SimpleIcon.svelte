<script>
  import * as simpleIcons from "simple-icons";
  export let icon;
  export let url;
  const iconPath = simpleIcons.default[`${icon}`].path;
</script>

<style>
  svg {
    width: 3em;
  }
  .simple-icon {
    margin: 0 0.5rem;
  }
</style>

<a href="{url} " class="simple-icon">
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d={iconPath} />
  </svg>
</a>
