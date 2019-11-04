<script>
  import Icon from "fa-svelte";
  import {
    faGithub,
    faLinkedin,
    faItchIo,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";
  import Ripple from "@smui/ripple";
  import ProjectCard from "../components/ProjectCard.svelte";
  import RecentArticles from "../components/RecentArticles.svelte";
  import { test } from "../f";
  const g = test();
  console.log(g);
</script>

<style>
  * :global(.demo-list) {
    max-width: 600px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.7em;
    padding: 0 10%;
  }
  .bigger {
    font-size: 4.2em;
    margin: 0.1em 0 0.1em 0;
    font-weight: 600;
  }
  .big {
    font-size: 2.2em;
    font-weight: 600;
  }
  .small {
    color: #dddddd69;
  }
  .green {
    color: #02ff92;
  }
  .home-container {
    /* max-width: 1000px; */
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  .home-text {
    flex-grow: 0.2;
    flex-basis: 50vw;
    min-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home-social {
    display: flex;
    align-items: center;
    font-size: 5em;
  }

  .unbounded {
    display: inline-flex;
    width: 1.25em;
    height: 1.25em;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.9em;
    margin: 0.15em;
  }

  .home-projects {
    /* width: 100%; */
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    margin: 0 5vw 0 5vw;
  }

  .home-projects-card-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .home-projects-card-container :global(.mdc-card) {
    flex: 1 1 calc(100% * (1 / 3) - 10px - 1px);
  }

  .flex-center {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
</style>

<section class="home-container">
  <div class="home-text">
    <p class="bigger">
      My name is Marcin and I'm a
      <span class="green">software developer.</span>
    </p>
    <p class="big">
      I find coding to be a great outlet to
      <span class="green">express</span>
      my insatiable
      <span class="green">curiosity,</span>
      <span class="green">creativity</span>
      and
      <span class="green">love of numbers and data.</span>
    </p>
    <div class="home-social">
      <span
        use:Ripple={[true, { unbounded: true, color: 'surface' }]}
        tabindex="0"
        class="unbounded"
        on:click={console.log}>
        <Icon icon={faGithub} />
      </span>
      <span
        use:Ripple={[true, { unbounded: true, color: 'surface' }]}
        tabindex="0"
        class="unbounded"
        on:click={console.log}>
        <Icon icon={faLinkedin} />
      </span>
      <span
        use:Ripple={[true, { unbounded: true, color: 'surface' }]}
        tabindex="0"
        class="unbounded"
        on:click={console.log}>
        <Icon icon={faItchIo} />
      </span>
      <span
        use:Ripple={[true, { unbounded: true, color: 'surface' }]}
        tabindex="0"
        class="unbounded"
        on:click={console.log}>
        <Icon icon={faTwitter} />
      </span>
    </div>
  </div>
</section>
<section class="home-projects">
  <div class="flex-c-cl-w">
    <h1 class="big fw">Featured projects</h1>
    <div class="home-projects-card-container">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>

  </div>
  <div class="flex-center">
    <h1 class="big fw">Recent articles</h1>
    <RecentArticles />
  </div>
</section>
