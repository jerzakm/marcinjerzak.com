<script defer>
  import { onMount } from "svelte";
  import * as THREE from "three";

  const fragmentShader = `
  #include <common>

  uniform vec3 iResolution;
  uniform vec3 iMouse;
  uniform float iTime;


// --- noise functions from https://www.shadertoy.com/view/XslGRr
// Created by inigo quilez - iq/2013
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

const mat3 m = mat3( 0.00,  0.80,  0.60,
           		    -0.80,  0.36, -0.48,
             		-0.60, -0.48,  0.64 );

float hash( float n ) {
    return fract(sin(n)*43758.5453);
}

float noise( in vec3 x ) { // in [0,1]
    vec3 p = floor(x);
    vec3 f = fract(x);

    f = f*f*(3.-2.*f);

    float n = p.x + p.y*57. + 113.*p.z;

    float res = mix(mix(mix( hash(n+  0.), hash(n+  1.),f.x),
                        mix( hash(n+ 57.), hash(n+ 58.),f.x),f.y),
                    mix(mix( hash(n+113.), hash(n+114.),f.x),
                        mix( hash(n+170.), hash(n+171.),f.x),f.y),f.z);
    return res;
}

float fbm( vec3 p ) { // in [0,1]
    float f;
    f  = 0.5000*noise( p ); p = m*p*2.02;
    f += 0.2500*noise( p ); p = m*p*2.03;
    f += 0.1250*noise( p ); p = m*p*2.01;
    f += 0.0725*noise( p );
    return f;
}
// --- End of: Created by inigo quilez --------------------

vec2 sfbm2( vec3 p ) {
    return 2.*vec2(fbm(p),fbm(p-327.67))-1.;
}


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    float t = iTime;
    vec2 mouse = iMouse.xy / iResolution.xy;
    if (iMouse.z<0.)
         mouse = vec2(.9,.5)*vec2(cos(1.*t)+.5*sin(2.2*t),sin(1.1*t)+.5*cos(1.9*t))/1.5;
    else
            mouse = 2.*mouse-1.;
	vec2 uv = 2.*(fragCoord.xy / iResolution.y-vec2(.9,.5));
    float a = .1*iTime, c=cos(a), s=sin(a); mat2 m = mat2(c,-s,s,c);

    vec4 col=vec4(0.);
    //vec3 paint = vec3(.7,.5,.4);
    vec3 paint = vec3(.99,.9,.7);

    for(float z=0.; z<1.; z+= 1./30.) {
        paint = .5+.5*cos(4.*2.*PI*z+vec3(0.,2.*PI/3.,-2.*PI/3.));
        uv *= m;
        vec2 duv = vec2(.8,.5)*sfbm2(vec3(1.2*uv,3.*z+iTime)) - 3.*z*mouse;
    	float d = length(uv+duv)-1.2*(1.-z),
              a = smoothstep(.1,.09,abs(d));
        d = .5*a+.5*smoothstep(.59,.08,abs(d));
        col += (1.-col.a)*vec4(d*paint*exp(-0.*z),a);
        if (col.a>=.9) break;
    }
	fragColor = col;
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
  }
  `;

  import {
    WebGLRenderer,
    OrthographicCamera,
    Vector3,
    Scene,
    PlaneBufferGeometry,
    ShaderMaterial,
    Mesh
  } from "three";

  onMount(() => {
    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: document.getElementById("three-bg")
    });
    renderer.autoClearColor = false;

    const camera = new OrthographicCamera(
      -1, // left
      1, // right
      1, // top
      -1, // bottom
      -1, // near,
      1 // far
    );

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new Vector3() },
      iMouse: { value: new Vector3() }
    };
    const scene = new Scene();
    const plane = new PlaneBufferGeometry(2, 2);
    const material = new ShaderMaterial({
      fragmentShader,
      uniforms
    });
    scene.add(new Mesh(plane, material));

    window.addEventListener("mousemove", e => {
      uniforms.iMouse.value.set(
        (e.screenX / window.screen.width) * 400,
        (e.screenY / window.screen.height) * 400,
        0
      );
    });

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    function render(time) {
      time *= 0.0005; // convert to seconds

      resizeRendererToDisplaySize(renderer);

      const canvas = renderer.domElement;
      uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
      uniforms.iTime.value = time;

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
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
