<style lang="scss">
  @import "../../styles/theme.scss";
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 99vh;
  }
  .project-name {
    font-size: 3.5em;
    line-height: 0.95;
    text-align: left;
    padding: 0;
    display: inline-block;
    width: 100%;
    @media screen and (min-width: 1200px) {
      font-size: 4.8em;
    }
  }
  .project-short-desc {
    font-size: 1.1em;
    padding: 0;
    display: inline-block;
  }

  .content-container {
    display: flex;
    flex-wrap: wrap;
  }
  .text-content {
    flex-basis: 400px;
    flex-grow: 6;
    margin: 0 5vw;
    p {
      text-align: justify;
      font-size: 0.87em;
    }
  }

  .tags {
    margin: 0;
    padding: 0;
  }

  .link-container {
    display: flex;
    justify-content: space-around;
    margin: 1rem 5vw;
  }

  .link {
    font-weight: 700;
    font-size: 1.4em;
    display: flex;
    align-items: center;
    justify-items: center;
  }

  .link-text {
    color: $text-color;
  }

  .link-icon {
    display: flex;
    margin: 5px;
  }

  .online-link {
    max-width: 1.6em;
  }

  .source-link {
    max-width: 2em;
  }

  .preview-content {
    flex-grow: 5;
    flex-basis: 400px;
  }
  .preview-img {
    max-width: 100%;
    max-height: 100%;
  }
</style>

<script>
  import MdDesktopWindows from "svelte-icons/md/MdDesktopWindows.svelte";
  import MdCode from "svelte-icons/md/MdCode.svelte";

  export let project;

  console.log(project);
</script>

<div class="container">
  <div class="content-container">
    <div class="text-content">
      <h1 class="project-name">{project.name}</h1>
      <h2 class="project-short-desc">{project.short}</h2>
      <p class="project-desc">
        {@html project.content}
      </p>
      <div class="tags">
        {#each project.tags as tag}
          <span class="tag">{`#${tag}`}</span>
        {/each}
      </div>
      <div class="link-container">
        {#if project.source}
          <a class="link" href="{project.source}" target="_blank">
            <span class="link-icon source-link">
              <MdCode />
            </span>
            <span class="link-text ">source</span>
          </a>
        {/if}
        {#if project.live}
          <a class="link" href="{project.live}" target="_blank">
            <span class="link-icon online-link">
              <MdDesktopWindows />
            </span>
            <span class="link-text">live</span>
          </a>
        {/if}
      </div>
    </div>
    <div class="preview-content">
      {#if project.preview && project.preview.length > 0}
        <img src="{project.preview[0]}" alt="preview" class="preview-img" />
      {/if}
    </div>
  </div>
</div>
