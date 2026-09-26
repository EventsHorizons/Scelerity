import * as THREE from "three";
import type { FieldKind, FieldTone } from "./content";

type Pointer = { x: number; y: number };
type Step = (time: number, dt: number, pointer: Pointer) => void;

/**
 * Each visible piece owns a short-lived context. Offscreen pieces dispose it.
 * Material, key light, and spring are shared rules; the structure is not.
 */

function material(tone: FieldTone, opacity = 1) {
  const onDark = tone === "chalk";
  return new THREE.MeshStandardMaterial({
    color: onDark ? 0xd9d3c8 : 0x1c1a18,
    metalness: onDark ? 0.48 : 0.58,
    roughness: 0.46,
    transparent: opacity < 1,
    opacity,
    depthWrite: opacity > 0.85,
  });
}

function lineMaterial(tone: FieldTone) {
  return new THREE.LineBasicMaterial({
    color: tone === "chalk" ? 0xe7e1d6 : 0x1c1a18,
  });
}

function damp(current: number, target: number, dt: number, rate: number) {
  return current + (target - current) * (1 - Math.exp(-dt * rate));
}

function buildAperture(tone: FieldTone, compact: boolean) {
  const group = new THREE.Group();
  const mat = material(tone, 0.92);
  const count = compact ? 5 : 8;
  const geo = new THREE.BoxGeometry(0.07, 2.6, 0.28);
  const planes: THREE.Mesh[] = [];
  for (let i = 0; i < count; i++) {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.x = (i - (count - 1) / 2) * 0.46;
    planes.push(mesh);
    group.add(mesh);
  }
  const step: Step = (time, dt, p) => {
    planes.forEach((mesh, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      const target = p.x * dir * 0.42;
      mesh.rotation.y = damp(mesh.rotation.y, target, dt, 3.4);
      mesh.position.z = damp(mesh.position.z, Math.abs(p.x) * 0.18 * dir, dt, 2.4);
      mesh.position.y = Math.sin(time * 0.45 + i * 0.4) * 0.03;
    });
    group.rotation.y = damp(group.rotation.y, p.x * 0.12, dt, 2);
  };
  return { object: group, step };
}

function buildLattice(tone: FieldTone, compact: boolean) {
  const group = new THREE.Group();
  const mat = material(tone);
  const geo = new THREE.BoxGeometry(0.38, 0.018, 0.38);
  const n = compact ? 5 : 7;
  const cells: THREE.Mesh[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set((i - (n - 1) / 2) * 0.5, 0, (j - (n - 1) / 2) * 0.5);
      mesh.userData.ix = i;
      mesh.userData.iz = j;
      cells.push(mesh);
      group.add(mesh);
    }
  }
  group.rotation.x = -0.72;
  const step: Step = (time, dt, p) => {
    cells.forEach((mesh) => {
      const i = mesh.userData.ix as number;
      const j = mesh.userData.iz as number;
      const dx = i / (n - 1) - (p.x * 0.5 + 0.5);
      const dz = j / (n - 1) - (p.y * 0.5 + 0.5);
      const dist = Math.hypot(dx, dz);
      const lift = Math.exp(-dist * 3.2) * 0.42;
      mesh.position.y = damp(mesh.position.y, lift + Math.sin(time * 0.7 + i * 0.4 + j) * 0.012, dt, 5);
    });
    group.rotation.z = damp(group.rotation.z, p.x * 0.08, dt, 2);
  };
  return { object: group, step };
}

function chevron(mat: THREE.Material) {
  const group = new THREE.Group();
  const geo = new THREE.BoxGeometry(1.35, 0.07, 0.16);
  const a = new THREE.Mesh(geo, mat);
  const b = new THREE.Mesh(geo, mat);
  a.rotation.z = 0.62;
  b.rotation.z = -0.62;
  a.position.x = -0.38;
  b.position.x = 0.38;
  group.add(a, b);
  return group;
}

function buildGlyph(tone: FieldTone) {
  const group = new THREE.Group();
  const mat = material(tone);
  const marks = [0, 1, 2].map((k) => {
    const mark = chevron(mat);
    mark.position.z = (k - 1) * 0.42;
    group.add(mark);
    return mark;
  });
  const step: Step = (time, dt, p) => {
    marks.forEach((mark, k) => {
      const spread = (k - 1) * (0.15 + Math.abs(p.x) * 0.55);
      mark.position.x = damp(mark.position.x, spread, dt, 3.2);
      mark.rotation.y = damp(mark.rotation.y, p.x * 0.35 + (k - 1) * 0.2, dt, 2.6);
      mark.position.y = Math.sin(time * 0.5 + k) * 0.04;
    });
  };
  return { object: group, step };
}

function buildTruss(tone: FieldTone) {
  const group = new THREE.Group();
  const mat = material(tone);
  const jointGeo = new THREE.SphereGeometry(0.055, 12, 12);
  const base = [
    new THREE.Vector3(-1.1, -0.55, 0.2),
    new THREE.Vector3(-0.35, 0.15, -0.25),
    new THREE.Vector3(0.4, -0.35, 0.15),
    new THREE.Vector3(1.15, 0.25, -0.1),
    new THREE.Vector3(-0.2, 0.7, 0.3),
    new THREE.Vector3(0.55, 0.85, -0.2),
    new THREE.Vector3(-0.85, 0.35, -0.35),
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 4],
    [4, 5],
    [2, 5],
    [0, 6],
    [6, 4],
    [6, 1],
    [5, 3],
  ];
  const current = base.map((v) => v.clone());
  const joints = current.map((v) => {
    const mesh = new THREE.Mesh(jointGeo, mat);
    mesh.position.copy(v);
    group.add(mesh);
    return mesh;
  });
  const positions = new Float32Array(edges.length * 2 * 3);
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  group.add(new THREE.LineSegments(lineGeo, lineMaterial(tone)));
  const scratch = new THREE.Vector3();
  const step: Step = (_time, dt, p) => {
    const pull = scratch.set(p.x * 0.85, p.y * 0.55, 0);
    current.forEach((point, i) => {
      const home = base[i];
      const influence = 1 / (1.2 + home.distanceTo(pull));
      point.x = damp(point.x, home.x + pull.x * influence, dt, 4.5);
      point.y = damp(point.y, home.y + pull.y * influence, dt, 4.5);
      point.z = damp(point.z, home.z, dt, 4.5);
      joints[i].position.copy(point);
    });
    let k = 0;
    edges.forEach(([a, b]) => {
      positions[k++] = current[a].x;
      positions[k++] = current[a].y;
      positions[k++] = current[a].z;
      positions[k++] = current[b].x;
      positions[k++] = current[b].y;
      positions[k++] = current[b].z;
    });
    lineGeo.attributes.position.needsUpdate = true;
    group.rotation.y = damp(group.rotation.y, p.x * 0.15, dt, 2);
  };
  return { object: group, step };
}

function buildShell(tone: FieldTone) {
  const group = new THREE.Group();
  const geo = new THREE.BoxGeometry(1.7, 1.05, 0.04);
  const layers: THREE.Mesh[] = [];
  for (let i = 0; i < 4; i++) {
    const mesh = new THREE.Mesh(geo, material(tone, 0.28 + i * 0.08));
    mesh.scale.setScalar(1 - i * 0.14);
    mesh.position.z = i * 0.22;
    layers.push(mesh);
    group.add(mesh);
  }
  const step: Step = (time, dt, p) => {
    layers.forEach((mesh, i) => {
      const fan = (i - 1.5) * p.x * 0.28;
      mesh.rotation.y = damp(mesh.rotation.y, fan, dt, 3);
      mesh.position.x = damp(mesh.position.x, fan * 0.8, dt, 3);
      mesh.position.z = i * (0.18 + Math.abs(p.y) * 0.12);
      mesh.position.y = Math.sin(time * 0.4 + i) * 0.02;
    });
  };
  return { object: group, step };
}

function buildCurrent(tone: FieldTone) {
  const group = new THREE.Group();
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1.5, 0.35, 0),
    new THREE.Vector3(-0.6, -0.25, 0.2),
    new THREE.Vector3(0.15, 0.15, -0.15),
    new THREE.Vector3(0.9, -0.05, 0.1),
    new THREE.Vector3(1.55, 0.2, 0),
  ]);
  const count = 140;
  const positions = new Float32Array(count * 3);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const points = new THREE.Points(
    geo,
    new THREE.PointsMaterial({
      color: tone === "chalk" ? 0xf4f0e8 : 0x1c1a18,
      size: 0.035,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
    }),
  );
  group.add(points);
  const sink = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), material(tone));
  group.add(sink);
  const tmp = new THREE.Vector3();
  let phase = 0;
  const step: Step = (_time, dt, p) => {
    phase = (phase + dt * 0.16) % 1;
    curve.points[2].y = 0.15 + p.y * 0.35;
    curve.points[2].x = 0.15 + p.x * 0.25;
    for (let i = 0; i < count; i++) {
      const t = (i / count + phase) % 1;
      curve.getPoint(t, tmp);
      const fade = i / count;
      positions[i * 3] = tmp.x;
      positions[i * 3 + 1] = tmp.y + Math.sin(t * 12) * 0.02 * (1 - fade);
      positions[i * 3 + 2] = tmp.z;
    }
    geo.attributes.position.needsUpdate = true;
    curve.getPoint(1, sink.position);
  };
  return { object: group, step };
}

function buildSignal(tone: FieldTone, compact: boolean) {
  const group = new THREE.Group();
  const count = compact ? 70 : 110;
  const positions = new Float32Array(count * 3);
  const home = new Float32Array(count * 3);
  const grid = new Float32Array(count * 3);
  const cols = compact ? 7 : 10;
  for (let i = 0; i < count; i++) {
    home[i * 3] = (Math.random() - 0.5) * 2.6;
    home[i * 3 + 1] = (Math.random() - 0.5) * 1.8;
    home[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
    const c = i % cols;
    const r = Math.floor(i / cols);
    grid[i * 3] = (c - (cols - 1) / 2) * 0.24;
    grid[i * 3 + 1] = (r - 5) * 0.18;
    grid[i * 3 + 2] = 0;
    positions[i * 3] = home[i * 3];
    positions[i * 3 + 1] = home[i * 3 + 1];
    positions[i * 3 + 2] = home[i * 3 + 2];
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  group.add(
    new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        color: tone === "chalk" ? 0xf4f0e8 : 0x1c1a18,
        size: 0.03,
        sizeAttenuation: true,
      }),
    ),
  );
  const step: Step = (_time, dt, p) => {
    const focusX = p.x * 1.1;
    const focusY = p.y * 0.7;
    const rate = 1 - Math.exp(-dt * 2.2);
    for (let i = 0; i < count; i++) {
      const hx = home[i * 3];
      const hy = home[i * 3 + 1];
      const dist = Math.hypot(hx - focusX, hy - focusY);
      const align = Math.exp(-dist * 0.85);
      const tx = home[i * 3] + (grid[i * 3] - home[i * 3]) * align;
      const ty = home[i * 3 + 1] + (grid[i * 3 + 1] - home[i * 3 + 1]) * align;
      const tz = home[i * 3 + 2] * (1 - align);
      positions[i * 3] += (tx - positions[i * 3]) * rate;
      positions[i * 3 + 1] += (ty - positions[i * 3 + 1]) * rate;
      positions[i * 3 + 2] += (tz - positions[i * 3 + 2]) * rate;
    }
    geo.attributes.position.needsUpdate = true;
  };
  return { object: group, step };
}

function buildFront(tone: FieldTone) {
  const group = new THREE.Group();
  const mat = material(tone, 0.8);
  const rings: THREE.Mesh[] = [];
  for (let i = 0; i < 6; i++) {
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(0.28 + i * 0.26, 0.011, 8, 72), mat);
    mesh.rotation.x = Math.PI / 2.4;
    rings.push(mesh);
    group.add(mesh);
  }
  const step: Step = (time, dt, p) => {
    rings.forEach((mesh, i) => {
      const pulse = 1 + Math.sin(time * 1.1 - i * 0.45) * 0.035;
      mesh.scale.setScalar(damp(mesh.scale.x, pulse, dt, 4));
    });
    group.rotation.x = damp(group.rotation.x, -0.2 + p.y * 0.25, dt, 2.2);
    group.rotation.z = damp(group.rotation.z, p.x * 0.2, dt, 2.2);
  };
  return { object: group, step };
}

function buildGather(tone: FieldTone, compact: boolean) {
  const group = new THREE.Group();
  const count = compact ? 160 : 260;
  const positions = new Float32Array(count * 3);
  const velocity = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 2.4;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 1.6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  group.add(
    new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        color: tone === "chalk" ? 0xe7e1d6 : 0x2a2622,
        size: 0.022,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.8,
      }),
    ),
  );
  const step: Step = (time, dt, p) => {
    const wellX = Math.sin(time * 0.15) * 0.25 + p.x * 0.45;
    const wellY = Math.cos(time * 0.12) * 0.12 + p.y * 0.3;
    for (let i = 0; i < count; i++) {
      const x = positions[i * 3];
      const y = positions[i * 3 + 1];
      const z = positions[i * 3 + 2];
      const dx = wellX - x;
      const dy = wellY - y;
      velocity[i * 3] += dx * 0.35 * dt;
      velocity[i * 3 + 1] += dy * 0.35 * dt;
      velocity[i * 3 + 2] += -z * 0.2 * dt;
      const drag = Math.exp(-dt * 1.4);
      velocity[i * 3] *= drag;
      velocity[i * 3 + 1] *= drag;
      velocity[i * 3 + 2] *= drag;
      positions[i * 3] += velocity[i * 3];
      positions[i * 3 + 1] += velocity[i * 3 + 1];
      positions[i * 3 + 2] += velocity[i * 3 + 2];
    }
    geo.attributes.position.needsUpdate = true;
  };
  return { object: group, step };
}

function buildCircuit(tone: FieldTone) {
  const group = new THREE.Group();
  const path: THREE.Vector3[] = [];
  const steps = 80;
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const x = Math.cos(t) * 1.25;
    const y = Math.sin(t) * 0.62;
    path.push(new THREE.Vector3(x, y, Math.sin(t * 2) * 0.08));
  }
  const positions = new Float32Array(steps * 3);
  path.forEach((v, i) => {
    positions[i * 3] = v.x;
    positions[i * 3 + 1] = v.y;
    positions[i * 3 + 2] = v.z;
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  group.add(new THREE.LineLoop(geo, lineMaterial(tone)));
  const pulse = new THREE.Mesh(new THREE.SphereGeometry(0.055, 14, 14), material(tone));
  const lag = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 12), material(tone, 0.55));
  group.add(pulse, lag);
  let head = 0;
  const step: Step = (_time, dt, p) => {
    head = (head + dt * (0.35 + Math.abs(p.x) * 0.2)) % 1;
    const i = Math.floor(head * (steps - 1));
    const lagT = (head - 0.08 + 1) % 1;
    const j = Math.floor(lagT * (steps - 1));
    pulse.position.copy(path[i]);
    lag.position.copy(path[j]);
    lag.position.y += 0.16;
    group.rotation.z = damp(group.rotation.z, p.x * 0.08, dt, 2);
    group.rotation.x = damp(group.rotation.x, p.y * 0.12, dt, 2);
  };
  return { object: group, step };
}

function build(kind: FieldKind, tone: FieldTone, compact: boolean) {
  switch (kind) {
    case "aperture":
      return buildAperture(tone, compact);
    case "lattice":
      return buildLattice(tone, compact);
    case "glyph":
      return buildGlyph(tone);
    case "truss":
      return buildTruss(tone);
    case "shell":
      return buildShell(tone);
    case "current":
      return buildCurrent(tone);
    case "signal":
      return buildSignal(tone, compact);
    case "front":
      return buildFront(tone);
    case "gather":
      return buildGather(tone, compact);
    case "circuit":
      return buildCircuit(tone);
  }
}

export function mountField(
  canvas: HTMLCanvasElement,
  kind: FieldKind,
  tone: FieldTone,
  reduced: boolean,
) {
  const compact = window.matchMedia("(max-width: 767px)").matches;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: !compact,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 30);
  camera.position.set(0, 0.05, 5.1);

  const key = new THREE.DirectionalLight(0xf4f0e8, 2.4);
  key.position.set(-1.6, 2.1, 2.4);
  const fill = new THREE.DirectionalLight(0xc4b8a4, 0.38);
  fill.position.set(2.2, -0.6, 1.2);
  scene.add(new THREE.AmbientLight(tone === "chalk" ? 0x8a847c : 0xb7afa4, 0.55), key, fill);

  const { object, step } = build(kind, tone, compact);
  scene.add(object);

  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const clock = new THREE.Clock();
  let raf = 0;
  let dead = false;

  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w < 2 || h < 2) return;
    const dpr = Math.min(window.devicePixelRatio || 1, compact ? 1.15 : 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);

  const onPointer = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inside) {
      pointer.tx = 0;
      pointer.ty = 0;
      return;
    }
    pointer.tx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.ty = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
  };
  window.addEventListener("pointermove", onPointer, { passive: true });

  const render = (time: number, dt: number) => {
    pointer.x = damp(pointer.x, pointer.tx, dt, reduced ? 0 : 4.2);
    pointer.y = damp(pointer.y, pointer.ty, dt, reduced ? 0 : 4.2);
    step(time, dt, pointer);
    const parallax = reduced ? 0 : 1;
    camera.position.x = damp(camera.position.x, pointer.x * 0.18 * parallax, dt, 2);
    camera.position.y = damp(camera.position.y, 0.05 + pointer.y * 0.1 * parallax, dt, 2);
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  };

  if (reduced) {
    render(0.6, 0.016);
  } else {
    const loop = () => {
      if (dead) return;
      raf = requestAnimationFrame(loop);
      if (document.hidden) return;
      render(clock.elapsedTime, Math.min(0.033, clock.getDelta()));
    };
    loop();
  }

  const dispose = () => {
    if (dead) return;
    dead = true;
    cancelAnimationFrame(raf);
    window.removeEventListener("pointermove", onPointer);
    observer.disconnect();
    scene.traverse((node) => {
      const mesh = node as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      const mat = mesh.material;
      if (Array.isArray(mat)) mat.forEach((item) => item.dispose());
      else if (mat) mat.dispose();
    });
    renderer.dispose();
  };
  return dispose;
}
