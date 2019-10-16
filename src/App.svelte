<script>
  import Nav from "./nav/Nav.svelte";
  import Router from "svelte-spa-router";
  import {
    link,
    push,
    pop,
    replace,
    location,
    querystring
  } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import routes from "./routes";
</script>

<Nav />

<Router {routes} />
