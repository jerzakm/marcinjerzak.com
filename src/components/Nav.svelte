<style lang="scss">
  @import "../styles/theme.scss";
  nav {
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    z-index: 2;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: $primary-color;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  .initials-logo {
    // position: absolute;
    padding: 1.5rem 2.2rem;
    font-size: 2em;
    font-weight: 700;
  }
</style>

<script>
  export let segment;
</script>

<nav>
  <span class="initials-logo">MJ</span>
  <div>
    <ul>
      <li>
        <a class:selected="{segment === undefined}" href=".">home</a>
      </li>
      <li>
        <a class:selected="{segment === 'projects'}" href="projects">work</a>
      </li>

      <li>
        <a class:selected="{segment === 'services'}" href="services">
          services
        </a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a rel="prefetch" class:selected="{segment === 'blog'}" href="blog">
          blog
        </a>
      </li>

      <li>
        <a class:selected="{segment === 'contact'}" href="contact">contact</a>
      </li>
    </ul>
  </div>
</nav>
