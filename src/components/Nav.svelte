<style lang="scss">
  @import "../styles/theme.scss";
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    z-index: 2;
    background-color: $text-color;
    opacity: 0.65;
    width: 100%;
    transition: 0.3s;
    @media screen and (min-width: 1000px) {
      font-weight: 300;
      opacity: 1;
      padding: 0 1em;
      bottom: unset;
      position: absolute;
      background-color: unset;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    display: flex;
  }

  // ul::after {
  //   content: "";
  //   display: block;
  //   clear: both;
  // }

  li {
    display: block;
    float: left;
    white-space: nowrap;
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
    padding: 0.2em 0.15em;
    display: block;
    color: $background-color;
    font-size: 1.05em;
    opacity: 1 !important;
    transition: 0.3s;
    @media screen and (min-width: 350px) {
      font-size: 1.2em;
    }
    @media screen and (min-width: 450px) {
      padding: 0.2em 0.5em;
    }
    @media screen and (min-width: 600px) {
      font-size: 1.4em;
    }
    @media screen and (min-width: 1000px) {
      color: $text-color;
      font-size: 1.1em;
    }
  }

  .initials-logo {
    transition: 0.3s;
    @media screen and (min-width: 1000px) {
      visibility: visible;
      max-width: unset;
      padding: 1.5rem 2.2rem;
    }
    max-width: 0px;
    visibility: hidden;

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
