"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * One standing-wave field on a thin plate.
 * Frequency drifts on a closed, slow curve. Grains have inertia and
 * only move toward wherever that field is quiet. The figure is the
 * density that gathers there. Nothing is swapped or crossfaded.
 */

const PERIOD = 96;

function field(x: number, y: number, n: number, s: number) {
  const r = Math.hypot(x, y);
  const th = Math.atan2(y, x);
  const polar = Math.sin(Math.PI * s * r) * Math.cos(n * th);
  const px = x * Math.PI;
  const py = y * Math.PI;
  const plate =
    Math.cos(n * px) * Math.cos(s * py) - Math.cos(s * px) * Math.cos(n * py);
  const grain = 1 + 0.028 * Math.sin(x * 21.7 + y * 16.3);
  return (polar * 0.62 + plate * 0.9) * grain;
}

function modesAt(time: number) {
  const u = ((time % PERIOD) + PERIOD) / PERIOD;
  const breathe = (1 - Math.cos(u * Math.PI * 2)) * 0.5;
  const drift = Math.sin(u * Math.PI * 2);
  const n = 0.4 + breathe * 6.4;
  const s = 1.1 + breathe * 3.1 + drift * 0.72;
  return { n, s, breathe };
}

const plateVertex = /* glsl */ `
  varying vec3 vN;
  varying vec3 vWorld;
  varying vec2 vP;
  uniform float uN;
  uniform float uS;
  uniform float uDisp;
  uniform float uWave;
  float field(vec2 p) {
    float r = length(p);
    float th = atan(p.y, p.x);
    float polar = sin(3.14159265 * uS * r) * cos(uN * th);
    vec2 w = p * 3.14159265;
    float plate = cos(uN * w.x) * cos(uS * w.y) - cos(uS * w.x) * cos(uN * w.y);
    float grain = 1.0 + 0.028 * sin(p.x * 21.7 + p.y * 16.3);
    return (polar * 0.62 + plate * 0.9) * grain;
  }
  void main() {
    vec2 p = position.xy;
    vP = p;
    float e = 0.016;
    float a = field(p);
    float ax = field(p + vec2(e, 0.0));
    float ay = field(p + vec2(0.0, e));
    vec3 pos = position;
    pos.z += a * uDisp * uWave;
    vec3 n = normalize(vec3(a - ax, a - ay, e * 1.6));
    vec4 world = modelMatrix * vec4(pos, 1.0);
    vWorld = world.xyz;
    vN = normalize(mat3(modelMatrix) * n);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const plateFragment = /* glsl */ `
  precision highp float;
  varying vec3 vN;
  varying vec3 vWorld;
  varying vec2 vP;
  void main() {
    float r = length(vP);
    float disc = smoothstep(1.02, 0.72, r);
    vec3 N = normalize(vN);
    vec3 L = normalize(vec3(-0.22, 0.64, 0.82));
    vec3 V = normalize(cameraPosition - vWorld);
    vec3 H = normalize(L + V);
    float ndl = clamp(dot(N, L), 0.0, 1.0);
    float spec = pow(clamp(dot(N, H), 0.0, 1.0), 42.0);
    vec3 base = vec3(0.055, 0.055, 0.058);
    vec3 col = base * (0.5 + 0.5 * ndl) + spec * vec3(0.72, 0.71, 0.68) * 0.16;
    float rim = smoothstep(0.9, 0.99, r) * disc;
    col += rim * 0.045;
    gl_FragColor = vec4(col, 0.28 * disc);
  }
`;

const grainVertex = /* glsl */ `
  attribute float aSettle;
  varying float vSettle;
  uniform float uSize;
  void main() {
    vSettle = aSettle;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = uSize * (0.85 + aSettle * 0.35) * (210.0 / max(1.0, -mv.z));
    gl_Position = projectionMatrix * mv;
  }
`;

const grainFragment = /* glsl */ `
  precision highp float;
  varying float vSettle;
  uniform float uOpacity;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float grain = smoothstep(0.5, 0.12, d);
    float alpha = grain * uOpacity * (0.22 + vSettle * 0.78);
    vec3 dust = mix(vec3(0.55, 0.54, 0.52), vec3(0.9, 0.89, 0.86), vSettle);
    gl_FragColor = vec4(dust, alpha);
  }
`;

function integrate(
  xy: Float32Array,
  positions: Float32Array,
  vel: Float32Array,
  settle: Float32Array,
  count: number,
  dt: number,
  time: number,
  seek: number,
) {
  const { n, s } = modesAt(time);
  const step = Math.min(2, dt * 60);
  const eps = 0.018;
  for (let i = 0; i < count; i++) {
    let x = xy[i * 2];
    let y = xy[i * 2 + 1];
    const a = field(x, y, n, s);
    const ax = field(x + eps, y, n, s);
    const ay = field(x, y + eps, n, s);
    const gx = ax * ax - a * a;
    const gy = ay * ay - a * a;
    const mag = Math.hypot(gx, gy) + 1e-6;
    const push = 0.00018 * seek * step * (0.3 + Math.min(1, Math.abs(a)));
    let vx = vel[i * 2];
    let vy = vel[i * 2 + 1];
    vx += (-gx / mag) * push;
    vy += (-gy / mag) * push;
    const h = ((i * 13) % 11) / 11 - 0.5;
    vx += h * 0.000045 * step * Math.min(1, Math.abs(a));
    vy += (((i * 19) % 9) / 9 - 0.5) * 0.000045 * step * Math.min(1, Math.abs(a));
    vx *= Math.exp(-dt * 2.4);
    vy *= Math.exp(-dt * 2.4);
    const speed = Math.hypot(vx, vy);
    const limit = 0.0065 * step;
    if (speed > limit) {
      vx = (vx / speed) * limit;
      vy = (vy / speed) * limit;
    }
    x += vx;
    y += vy;
    const rad = Math.hypot(x, y);
    if (rad > 0.9) {
      const pull = (rad - 0.9) * 0.06 * step;
      x -= (x / rad) * pull;
      y -= (y / rad) * pull;
      vx *= 0.94;
      vy *= 0.94;
    }
    const nodal = 1 - Math.min(1, Math.abs(a) * 1.35);
    settle[i] += (nodal - settle[i]) * (1 - Math.exp(-dt * 1.6));
    xy[i * 2] = x;
    xy[i * 2 + 1] = y;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = nodal * 0.008;
    vel[i * 2] = vx;
    vel[i * 2 + 1] = vy;
  }
}

function Rig({ reduced }: { reduced: boolean }) {
  const { camera } = useThree();
  useFrame(({ clock }) => {
    const t = reduced ? 1.2 : clock.elapsedTime;
    camera.position.set(
      0.18 + Math.sin(t * 0.07) * 0.055,
      0.4 + Math.cos(t * 0.05) * 0.028,
      3.58 + Math.sin(t * 0.04) * 0.035,
    );
    camera.lookAt(0.2, -0.02, 0);
  });
  return null;
}

function Plate({
  segments,
  reduced,
  offset,
  count,
}: {
  segments: number;
  reduced: boolean;
  offset: [number, number, number];
  count: number;
}) {
  const plate = useRef<THREE.ShaderMaterial>(null);
  const points = useRef<THREE.Points>(null);

  const sim = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const xy = new Float32Array(count * 2);
    const vel = new Float32Array(count * 2);
    const settle = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const rad = Math.sqrt(Math.random()) * 0.88;
      const x = Math.cos(a) * rad;
      const y = Math.sin(a) * rad;
      xy[i * 2] = x;
      xy[i * 2 + 1] = y;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      settle[i] = 0.12;
    }
    const held = PERIOD * 0.18;
    if (reduced) {
      for (let s = 0; s < 220; s++) {
        integrate(xy, positions, vel, settle, count, 1 / 60, held, 1);
      }
    }
    return { positions, xy, vel, settle, time: reduced ? held : 0 };
  }, [count, reduced]);

  const plateUniforms = useMemo(
    () => ({
      uN: { value: 0.4 },
      uS: { value: 1.1 },
      uDisp: { value: 0.026 },
      uWave: { value: 0 },
    }),
    [],
  );

  const grainUniforms = useMemo(
    () => ({
      uSize: { value: count > 5000 ? 1.35 : 1.65 },
      uOpacity: { value: 0.72 },
    }),
    [count],
  );

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.033);
    if (!reduced) sim.time += dt;
    const { n, s } = modesAt(sim.time);
    const intro = reduced ? 1 : Math.min(1, sim.time / 7.5);
    const seek = 0.22 + 0.78 * intro;
    integrate(sim.xy, sim.positions, sim.vel, sim.settle, count, reduced ? 0 : dt, sim.time, reduced ? 1 : seek);

    const geometry = points.current?.geometry;
    const positionAttr = geometry?.getAttribute("position");
    const settleAttr = geometry?.getAttribute("aSettle");
    if (positionAttr) positionAttr.needsUpdate = true;
    if (settleAttr) settleAttr.needsUpdate = true;

    if (plate.current) {
      plate.current.uniforms.uN.value = n;
      plate.current.uniforms.uS.value = s;
      plate.current.uniforms.uDisp.value = 0;
      plate.current.uniforms.uWave.value = 0;
    }
  });

  return (
    <group position={offset} rotation={[-0.4, 0.12, 0.015]}>
      <mesh>
        <circleGeometry args={[1, segments]} />
        <shaderMaterial
          ref={plate}
          vertexShader={plateVertex}
          fragmentShader={plateFragment}
          uniforms={plateUniforms}
          transparent
          depthWrite={false}
        />
      </mesh>
      <points ref={points} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[sim.positions, 3]} />
          <bufferAttribute attach="attributes-aSettle" args={[sim.settle, 1]} />
        </bufferGeometry>
        <shaderMaterial
          vertexShader={grainVertex}
          fragmentShader={grainFragment}
          uniforms={grainUniforms}
          transparent
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export function EnergyField() {
  const reduced = useReducedMotion();
  const desktop = typeof window !== "undefined" ? window.matchMedia("(min-width: 64rem)").matches : true;
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  const [wide, setWide] = useState(desktop);

  useEffect(() => {
    const el = ref.current;
    const mq = window.matchMedia("(min-width: 64rem)");
    const onMq = () => setWide(mq.matches);
    onMq();
    mq.addEventListener("change", onMq);

    let io: IntersectionObserver | undefined;
    if (el && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        ([entry]) => setActive(entry.isIntersecting && !document.hidden),
        { rootMargin: "120px" },
      );
      io.observe(el);
    }
    const onVisibility = () => {
      if (document.hidden) setActive(false);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      io?.disconnect();
      mq.removeEventListener("change", onMq);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const count = wide ? 9600 : 3000;
  const segments = wide ? 80 : 40;

  return (
    <div ref={ref} className="hero-energy__canvas">
      <Canvas
        frameloop={!active || reduced ? "demand" : "always"}
        dpr={wide ? [1, 1.25] : [1, 1.05]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        className="hero-energy__gl"
        camera={{ position: [0.18, 0.4, 3.58], fov: 28 }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Rig reduced={reduced} />
        <Plate
          key={count}
          count={count}
          segments={segments}
          reduced={reduced}
          offset={wide ? [0.42, -0.12, 0] : [0, -0.05, 0]}
        />
      </Canvas>
    </div>
  );
}
