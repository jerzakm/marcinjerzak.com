<style>
  .picture {
    max-width: 100%;
    max-height: 100%;
  }
</style>

<script>
  export let src;

  const fileName = src
    .split(".")
    .slice(0, -1)
    .join(".");

  const ext = src.substring(src.lastIndexOf(".") + 1, src.length) || src;

  console.log(ext);
</script>

<picture>
  <source srcset="{`images/${fileName}_1x.webp`}" type="image/webp" />
  <source
    srcset="{`images/${fileName}_1x.${ext}`}"
    type="image/{ext == 'jpg' ? 'jpeg' : 'png'}"
  />
  <img src="{`images/${src}`}" alt="Alt Text!" class="picture" />
</picture>
