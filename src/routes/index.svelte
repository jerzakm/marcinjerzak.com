<script context="module">
  export async function preload({ params, query }) {
    const contactRes = await this.fetch(`contact.json`);
    const contactData = await contactRes.json();
    const homeRes = await this.fetch(`home.json`);
    const homeData = await homeRes.json();
    if (contactRes.status === 200 && homeRes.status === 200) {
      return {
        contact: contactData.meta,
        home: homeData.meta
      };
    } else {
      this.error(contactRes.status, contactData.message);
      this.error(homeRes.status, homeData.message);
    }
  }
</script>

<script>
  import SimpleIcon from "../components/SimpleIcon.svelte";
  import ProjectsContainer from "../components/projects/ProjectContainer.svelte";
  export let contact;
  export let home;
  const quote = home.quotes[Math.floor(Math.random() * home.quotes.length)];
</script>

<style lang="scss">
  @import "../styles/theme.scss";

  .home-container {
    min-height: 99vh;
    display: grid;
    grid-template-columns: 35% 65%;
  }

  .initials-logo {
    position: absolute;
    padding: 1.5rem 2.2rem;
    font-size: 2em;
    font-weight: 700;
  }

  .social-container {
    display: flex;
    margin: 2rem;
    fill: $text-color;
  }

  .projects-container {
    min-height: 100vh;
  }

  .home-container-main {
    display: flex;
  }
</style>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<span class="initials-logo">MJ</span>

<section class="home-container">
  <div />
  <div class="home-container-main flex-full-center">
    <div>
      <h3>MARCIN JERZAK</h3>
      <h1>software developer</h1>
      <h3>
        web & cloud solutions * desktop applications * business intelligence
      </h3>
      <!-- <h3>{quote}</h3> -->
    </div>
    <div class="social-container">
      <SimpleIcon icon={'GitHub'} url={contact.GitHub} />
      <SimpleIcon icon={'Twitter'} url={contact.Twitter} />
      <SimpleIcon icon={'dev.to'} url={contact['dev.to']} />
      <SimpleIcon icon={'Itch.io'} url={contact['Itch.io']} />
      <SimpleIcon icon={'LinkedIn'} url={contact.LinkedIn} />
    </div>
  </div>
</section>

<section class="projects-container">
  <ProjectsContainer />
</section>
