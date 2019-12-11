<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 99vh;
  }
  .project-name {
    font-size: 5.5em;
    margin: 0;
  }
  .project-short-desc {
    font-size: 1.1em;
  }
  .tag-container {
    margin: 0;
  }

  .article-container-header {
    font-size: 1.3em;
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
      <p>
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
      <div class="article-container">
        <h3 class="article-container-header">Related articles</h3>
        <div class="article-link">
          <h4>How things were made. A quick study on how things were made.</h4>
          <div class="article-meta">
            <span class="article-meta-read-time">4 min read</span>
            <span class="article-meta-date">Dec 5</span>
          </div>
        </div>
        <div class="article-link">
          <h4>How things were made. A quick study on how things were made.</h4>
          <div class="article-meta">
            <span class="article-meta-read-time">4 min read</span>
            <span class="article-meta-date">Dec 5</span>
          </div>
        </div>
        <div class="article-link">
          <h4>How things were made. A quick study on how things were made.</h4>
          <div class="article-meta">
            <span class="article-meta-read-time">4 min read</span>
            <span class="article-meta-date">Dec 5</span>
          </div>
        </div>
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
