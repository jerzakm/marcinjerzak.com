<script>
  import Icon from "fa-svelte";
  import {
    faGithub,
    faLinkedin,
    faItchIo,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";
  import Ripple from "@smui/ripple";
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
    <!-- <p class="small">
      Before learning how to make my first hello world program, I've spent tens
      of hours making efficient production lines in games like Factorio,
      obsessing over best possible build for my rpg characters or loosing sleep
      over what I'm going to do next in one of Paradox's grand strategy games.
    </p>
    <p class="small">
      It took me longer than I care to admit, but eventually I figured out that
      I just enjoy making things that do my work for me and solving problems. As
      it turns out, there's use for such contraptions in the modern world. How
      fortuitous!
    </p> -->
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
