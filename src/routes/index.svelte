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
  const quote = home.quotes[Math.floor(Math.random()*home.quotes.length)]
</script>

<style lang="scss">
  h1,
  h2,
  h3 {
    margin: 0;
    text-align: center;
  }
  h1 {
    text-transform: uppercase;
  }
  h2 {
    font-size: 2.5em;
  }
  h3 {
    font-size: 1em;
  }

  .home-container {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }
</style>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<span class="initials-logo">MJ</span>

<section class="home-container">
  <div>
    <h2 class="primary-c">software developer</h2>
    <h3>with a</h3>
    <h1 class="text-focus-in">Profound mission statement.</h1>
    <h3 class="primary-c">
      {quote}
    </h3>
  </div>
  <div class="social-container bounce">
    <SimpleIcon icon={'GitHub'} url={contact.GitHub} />
    <SimpleIcon icon={'Twitter'} url={contact.Twitter} />
    <SimpleIcon icon={'dev.to'} url={contact['dev.to']} />
    <SimpleIcon icon={'Itch.io'} url={contact['Itch.io']} />
    <SimpleIcon icon={'LinkedIn'} url={contact.LinkedIn} />
  </div>
</section>
