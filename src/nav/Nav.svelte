<script>
  import {
    link,
    push,
    pop,
    replace,
    location,
    querystring
  } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
</script>

<style>
  .navigation-links {
    color: red;
  }
</style>

<ul class="navigation-links">
  <li>
    <a href="/" use:link>Home</a>
  </li>
  <li>
    <a href="/articles" use:link>Articles</a>
  </li>
  <li>
    <a href="/projects" use:link>Projects</a>
  </li>
  <li>
    <a href="/contact" use:link>Contact</a>
  </li>
</ul>
