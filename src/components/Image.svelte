<style>
  .picture {
    max-width: 100%;
    max-height: 100%;
  }
</style>

<script>
  export let src;
  import { onMount } from "svelte";

  const fileName = src
    .split(".")
    .slice(0, -1)
    .join(".");

  const ext = src.substring(src.lastIndexOf(".") + 1, src.length) || src;

  let imgElement;

  let loadImage;

  onMount(() => {
    let observerCallback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage = true;
          observer.unobserve(imgElement);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);
    observer.observe(imgElement);

    return () => {
      observer.unobserve(imgElement);
    };
  });
</script>

<picture bind:this="{imgElement}">
  {#if loadImage}
    <source srcset="{`images/${fileName}_1x.webp`}" type="image/webp" />
    <source
      srcset="{`images/${fileName}_1x.${ext}`}"
      type="image/{ext == 'jpg' ? 'jpeg' : 'png'}"
    />
    <img src="{`images/${src}`}" alt="Alt Text!" class="picture" />
  {/if}
</picture>
