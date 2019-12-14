<script>
  import MdDesktopWindows from "svelte-icons/md/MdDesktopWindows.svelte";
  import MdCode from "svelte-icons/md/MdCode.svelte";
</script>

<style lang="scss">
  @import "../../styles/theme.scss";
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 99vh;
  }
  .project-name {
    font-size: 4.8em;
    line-height: 0.95;
    text-align: left;
    padding: 0;
    display: inline-block;
    width: 100%;
    // background: $primary-color;
    // background: radial-gradient(
    //   circle,
    //   $primary-color 48%,
    //   $secondary-color 100%
    // );
    // background-clip: text;
    // -webkit-text-fill-color: transparent;
  }
  .project-short-desc {
    font-size: 1.1em;
    margin: 1rem 0 0 0;
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
  }

  .project-desc {
    text-align: justify;
    // margin-right: 3vw;
    font-size: 0.87em;
  }
  .tags {
    margin: 0;
    padding: 0;
  }
  .tag {
    background-color: $primary-color;
    font-weight: 700;
    padding: 0.3rem 0.2em;
    margin: 0.1em 0;
  }

  .link-container {
    display: flex;
    justify-content: space-around;
    margin: 1rem 5vw;
    // padding: 3rem 4rem;
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

<div class="container">
  <div class="content-container">
    <div class="text-content">
      <h1 class="project-name">Generic app</h1>
      <h2 class="project-short-desc">Lorem ipsum dolor sit amet.</h2>
      <p class="project-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio
        nihil est sequi modi in mollitia, dolor debitis, atque voluptatem
        doloribus accusantium inventore perspiciatis nobis maiores repellat,
        architecto laboriosam! Doloribus dignissimos in fugiat tempora! Totam
        similique, odit aperiam sunt molestiae expedita, aliquam esse asperiores
        consectetur, doloremque consequatur tenetur inventore harum quasi
        reprehenderit earum ea veniam ex neque quae qui. Aliquid?
      </p>
      <div class="tags">
        <span class="tag">#typescript</span>
        <span class="tag">#pixi.js</span>
        <span class="tag">#webgl</span>
      </div>
      <div class="link-container">
        <span class="link">
          <span class="link-icon source-link">
            <MdCode />
          </span>
          <span class="link-text ">source</span>
        </span>
        <span class="link">
          <span class="link-icon online-link">
            <MdDesktopWindows />
          </span>
          <span class="link-text">online</span>
        </span>
      </div>
    </div>
    <div class="preview-content">
      <img src="test_preview.png" alt="preview" class="preview-img" />
    </div>
  </div>
</div>
