<script>
  import Nav from "./components/Nav.svelte";
  import Chat from "./components/Chat.svelte";
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
<Chat />
<Router {routes} />
