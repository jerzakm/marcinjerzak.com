<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`services.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { content: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>

</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1>Stuff I do</h1>

<p>stuf - stuff - stuff - better stuff</p>
