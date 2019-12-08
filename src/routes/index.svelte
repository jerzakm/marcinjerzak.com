<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`contact.json`);
    const data = await res.json();
    // console.log(data)
    if (res.status === 200) {
      return { contact: data.meta };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import SimpleIcon from "../components/SimpleIcon.svelte";
  export let contact;
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
      tbh, sometimes I'll start to code and I don't even know where it's going.
      I just hope I find it along the way.
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
