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
  import Tab, { Icon, Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import Button from "@smui/button";

  const routes = [
    { name: "Home", path: "/", exact: true },
    { name: "Articles", path: "/articles", exact: false },
    { name: "Projects", path: "/projects", exact: false },
    { name: "Contact", path: "/contact", exact: true }
  ];

  const selectActiveTab = () => {
    let name = "";
    routes.map(route => {
      if (route.exact) {
        $location === route.path ? (name = route.name) : false;
      } else {
        let l =
          $location.length >= route.path.length
            ? $location.substring(0, route.path.length)
            : "";
        l === route.path ? (name = route.name) : false;
      }
    });
    return name;
  };

  const tabClicked = tab => {
    let goto = routes.find(r => {
      return r.name == tab;
    });
    push(goto.path);
  };

  let activeTab = selectActiveTab();
  window.onhashchange = () => {
    activeTab = selectActiveTab();
  };
</script>

<style>

</style>

<div>
  <TabBar
    tabs={['Home', 'Articles', 'Projects', 'Contact']}
    let:tab
    bind:active={activeTab}>
    <!-- Notice that the `tab` property is required! -->
    <Tab {tab} on:click={() => tabClicked(tab)}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>
  <p>The current page is: {$location}</p>
</div>
