<script defer>
  import { onMount } from "svelte";
  import * as THREE from "three";

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: document.getElementById("three-bg")
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshBasicMaterial({ color: 0x222222 });
    material.wireframe = true;
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.z = -5;
    cube.rotation.x = 10;
    cube.rotation.y = 5;
    renderer.render(scene, camera);
    const animate = function() {
      cube.rotation.x += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  });
</script>

<style>
  #three-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
</style>

<canvas id="three-bg" />
