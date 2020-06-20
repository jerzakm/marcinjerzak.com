<style lang="scss">
  @import "../styles/theme.scss";

  .home-container {
    opacity: 0.92;
    min-height: 99vh;
    display: grid;
    grid-template-columns: 0% 100%;
    animation: text-focus-in 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

    @media screen and (min-width: 1000px) {
      // margin-top: -2.5rem;
      grid-template-columns: 35% 65%;
    }
  }

  .social-container {
    display: flex;
    margin: 2rem;
    fill: $text-color;
  }

  .projects-container {
    min-height: 100vh;
    opacity: 0.92;
  }

  .home-container-main {
    display: flex;
  }

  .home-image-container {
    position: absolute;
    display: flex;
    overflow: hidden;
    max-width: 95vw;
    height: 100vh;
  }

  .home-image {
    align-self: baseline;

    // object-fit: cover;
    // position: absolute;
    // top: 2vh;
    // left: 2vw;
    // filter: invert(1);
    // max-width: 100vw;
    max-height: 90vh;
    margin-left: -3rem;
    opacity: 0.3;
    @media screen and (min-width: 1200px) {
      // margin-top: -2.5rem;
      max-width: 60vw;
      max-height: 85vh;
      opacity: 0.93;
      margin-left: 1rem;
    }

    @media screen and (min-width: 1600px) {
      max-width: 70vw;
      max-height: 85vh;
      margin-left: 2rem;
    }
  }
</style>

<script context="module">
  export async function preload({ params, query }) {
    const contactRes = await this.fetch(`contact.json`);
    const contactData = await contactRes.json();

    const homeRes = await this.fetch(`home.json`);
    const homeData = await homeRes.json();

    const workRes = await this.fetch("work.json");
    const workData = await workRes.json();

    if (
      contactRes.status === 200 &&
      homeRes.status === 200 &&
      workRes.status === 200
    ) {
      return {
        contact: contactData.meta,
        home: homeData.meta,
        work: workData
      };
    } else {
      this.error(contactRes.status, contactData.message);
      this.error(homeRes.status, homeData.message);
      this.error(workData.status, workData.message);
    }
  }
</script>

<script>
  import SimpleIcon from "../components/SimpleIcon.svelte";
  import ProjectsContainer from "../components/projects/ProjectContainer.svelte";
  export let contact;
  export let work;
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<div class="home-image-container">
  <img src="home_abstract.png" alt="preview" class="home-image" />
</div>

<section class="home-container">
  <div></div>
  <div class="home-container-main flex-full-center">
    <div>
      <h3>MARCIN JERZAK</h3>
      <h1>software developer</h1>
      <h3>
        web & cloud solutions • desktop applications • business intelligence
      </h3>
      <!-- <h3>{quote}</h3> -->
    </div>
    <div class="social-container">
      <SimpleIcon
        icon="{'GitHub'}"
        url="{contact.GitHub}"
        color="{`#121212`}"
      />
      <SimpleIcon
        icon="{'Twitter'}"
        url="{contact.Twitter}"
        color="{`#121212`}"
      />
      <SimpleIcon
        icon="{'dev.to'}"
        url="{contact['dev.to']}"
        color="{`#121212`}"
      />
      <SimpleIcon
        icon="{'Itch.io'}"
        url="{contact['Itch.io']}"
        color="{`#121212`}"
      />
      <SimpleIcon
        icon="{'LinkedIn'}"
        url="{contact.LinkedIn}"
        color="{`#121212`}"
      />
    </div>
  </div>
</section>

<section class="projects-container">
  <ProjectsContainer projects="{work}" />
</section>
