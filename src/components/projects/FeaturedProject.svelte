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
    margin: 0 0 -1rem 0;
    padding: 0;
    display: inline-block;
  }
  .project-short-desc {
    font-size: 1.1em;
    margin: 0;
    padding: 0;
    display: inline-block;
  }

  .project-desc {
    text-align: justify;
    margin-right: 3vw;
    font-size: 0.88em;
  }

  .tag-container {
    margin: 0;
  }
  .tag {
    background-color: $primary-color;
    font-weight: 700;
    padding: 0.3rem 0.2em;
    margin: 0.1em 0;
  }
  .content-container {
    display: flex;
    flex-wrap: wrap;
  }

  .text-content {
    flex-basis: 400px;
    flex-grow: 6;
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
      <h1 class="project-name">Hexed realms</h1>
      <h2 class="project-short-desc">Webapp for fantasy hex map makers</h2>
      <p class="project-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores odio
        nihil est sequi modi in mollitia, dolor debitis, atque voluptatem
        doloribus accusantium inventore perspiciatis nobis maiores repellat,
        architecto laboriosam! Doloribus dignissimos in fugiat tempora! Totam
        similique, odit aperiam sunt molestiae expedita, aliquam esse asperiores
        consectetur, doloremque consequatur tenetur inventore harum quasi
        reprehenderit earum ea veniam ex neque quae qui. Aliquid?
      </p>
      <div class="tag-container">
        <span class="tag">#typescript</span>
        <span class="tag">#pixi.js</span>
        <span class="tag">#webgl</span>
      </div>
      <div class="link-container">
        <span>source</span>
        <span>online</span>
      </div>
    </div>
    <div class="preview-content">
      <img src="test_preview.jpg" alt="preview" class="preview-img" />
    </div>
  </div>
</div>
