import { useEffect, useRef } from 'react';
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Group,
  Mesh,
  TorusGeometry,
  SphereGeometry,
  MeshPhysicalMaterial,
  DirectionalLight,
  AmbientLight,
  PMREMGenerator,
  ACESFilmicToneMapping,
  SRGBColorSpace,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

// Graphite gimbal sculpture with champagne-gold rim light.
// `pointer` is a ref of { x, y } in [-1, 1] written by the parent for parallax.
export default function SculptureScene({ pointer, lite = false, onReady, onFail }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (!supportsWebGL()) {
      onFail?.();
      return;
    }

    let renderer;
    try {
      renderer = new WebGLRenderer({ antialias: !lite, alpha: true, powerPreference: 'low-power' });
    } catch {
      onFail?.();
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, lite ? 1.5 : 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    mount.appendChild(renderer.domElement);

    const scene = new Scene();
    const pmrem = new PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const envMap = pmrem.fromScene(room, 0.04).texture;
    scene.environment = envMap;
    scene.environmentIntensity = 0.32;

    const camera = new PerspectiveCamera(32, 1, 0.1, 50);
    camera.position.set(0, 0, 7.4);

    // Materials: dark graphite metal, restrained champagne gold, muted bronze
    const graphite = new MeshPhysicalMaterial({
      color: 0x2a2c31,
      metalness: 1,
      roughness: 0.3,
      clearcoat: 0.9,
      clearcoatRoughness: 0.2,
    });
    const gold = new MeshPhysicalMaterial({ color: 0xd8b878, metalness: 1, roughness: 0.24 });
    const bronze = new MeshPhysicalMaterial({ color: 0x8d7549, metalness: 1, roughness: 0.38 });

    const seg = lite ? { tube: 20, radial: 96 } : { tube: 48, radial: 220 };
    const geometries = [];
    const geo = (g) => (geometries.push(g), g);

    const sculpture = new Group();
    sculpture.rotation.set(0.38, -0.5, 0.12);
    scene.add(sculpture);

    const outer = new Mesh(geo(new TorusGeometry(1.3, 0.12, seg.tube, seg.radial)), graphite);
    sculpture.add(outer);

    const middle = new Mesh(geo(new TorusGeometry(0.98, 0.05, seg.tube, seg.radial)), gold);
    middle.rotation.x = Math.PI / 2;
    sculpture.add(middle);

    const inner = new Mesh(geo(new TorusGeometry(0.66, 0.085, seg.tube, seg.radial)), graphite);
    inner.rotation.y = Math.PI / 2;
    sculpture.add(inner);

    const core = new Mesh(geo(new SphereGeometry(0.2, lite ? 24 : 48, lite ? 16 : 32)), graphite);
    sculpture.add(core);

    let orbit;
    if (!lite) {
      orbit = new Mesh(geo(new TorusGeometry(1.78, 0.007, 8, 260)), bronze);
      orbit.rotation.set(1.15, 0.25, 0);
      scene.add(orbit);
    }

    // Lighting: warm rim lights from behind, soft neutral fill from the front
    const rimKey = new DirectionalLight(0xe7cf9f, 4.2);
    rimKey.position.set(3.2, 2.6, -2.8);
    const rimFill = new DirectionalLight(0xd8b878, 2.2);
    rimFill.position.set(-3.4, -1.4, -2.2);
    const front = new DirectionalLight(0xf5f3ef, 0.7);
    front.position.set(-1.2, 1.8, 4.5);
    scene.add(rimKey, rimFill, front, new AmbientLight(0xf5f3ef, 0.12));

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();

    const smooth = { x: 0, y: 0 };
    let start = performance.now();
    let elapsed = 1.2;
    let frame = 0;
    let visible = true;
    let readyFired = false;

    const draw = () => {
      const t = elapsed;
      const target = pointer?.current ?? { x: 0, y: 0 };
      smooth.x += (target.x - smooth.x) * 0.04;
      smooth.y += (target.y - smooth.y) * 0.04;

      sculpture.rotation.y = -0.5 + t * 0.16 + smooth.x * 0.22;
      sculpture.rotation.x = 0.38 + Math.sin(t * 0.35) * 0.06 + smooth.y * 0.14;
      sculpture.position.y = Math.sin(t * 0.6) * 0.08;
      middle.rotation.y = t * 0.22;
      inner.rotation.x = t * 0.18;
      if (orbit) orbit.rotation.z = t * 0.05;

      renderer.render(scene, camera);
      if (!readyFired) {
        readyFired = true;
        onReady?.();
      }
    };

    const loop = (now) => {
      elapsed = 1.2 + (now - start) / 1000 * (lite ? 0.75 : 1);
      draw();
      frame = requestAnimationFrame(loop);
    };

    const play = () => {
      if (reducedMotion || frame || !visible || document.hidden) return;
      start = performance.now() - (elapsed - 1.2) * 1000;
      frame = requestAnimationFrame(loop);
    };
    const pause = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const ro = new ResizeObserver(() => {
      resize();
      if (!frame) draw();
    });
    ro.observe(mount);

    // Only animate while the hero is on screen and the tab is visible
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? play() : pause();
    });
    io.observe(mount);
    const onVisibility = () => (document.hidden ? pause() : play());
    document.addEventListener('visibilitychange', onVisibility);

    draw();
    play();

    return () => {
      pause();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      geometries.forEach((g) => g.dispose());
      [graphite, gold, bronze].forEach((m) => m.dispose());
      envMap.dispose();
      pmrem.dispose();
      room.traverse?.((o) => {
        o.geometry?.dispose?.();
        o.material?.dispose?.();
      });
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, [pointer, lite, onReady, onFail]);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
