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
  export let contact;
  export let home;
  const quote = home.quotes[Math.floor(Math.random() * home.quotes.length)];
</script>

<style lang="scss">
  @import "../styles/theme.scss";

  .home-container {
    min-height: 99vh;
    display: flex;
    flex-direction: column;
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

  $headerTextSize: 5em;
  .header-container {
    display: flex;
    flex-direction: column;
    max-width: $headerTextSize * 3;
  }

  .header-text {
    z-index: 2;
    font-size: $headerTextSize;
    font-weight: 700;
  }

  .header-squiggle {
    fill: none;
    stroke: $primary-color;
    stroke-width: 20;
    max-width: $headerTextSize * 3;
    position: absolute;
    z-index: 1;
  }
</style>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<span class="initials-logo">MJ</span>

<section class="home-container flex-full-center">
  <div>
    <h3>Hi!</h3>
    <h3>My name is Marcin Jerzak. I'm a</h3>
    <h2>software developer</h2>
    <h3>with a</h3>
    <h1 class="uppercase">Profound mission statement.</h1>
    <h3>{quote}</h3>
  </div>
  <div class="social-container bounce">
    <SimpleIcon icon={'GitHub'} url={contact.GitHub} />
    <SimpleIcon icon={'Twitter'} url={contact.Twitter} />
    <SimpleIcon icon={'dev.to'} url={contact['dev.to']} />
    <SimpleIcon icon={'Itch.io'} url={contact['Itch.io']} />
    <SimpleIcon icon={'LinkedIn'} url={contact.LinkedIn} />
  </div>
</section>

<section class="projects-container">
  <div class="header-container flex-full-center">
    <span class="header-text">work</span>
    <svg viewBox="0 0 216 52" class="header-squiggle">
      <path d="M5.5,40c7.1-4.1,50.4-38,113.4-5c34.7,18.2,79.5-18.2,91.3-24.9" />
    </svg>
  </div>

</section>
