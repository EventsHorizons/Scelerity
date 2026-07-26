"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

/**
 * Electromagnetic Energy Core — living cluster of fine electrical filaments
 * contained in an organic plasma mass. Ridged FBM + curl flow fields produce
 * arcs that connect, break and reconnect. SCELERITY palette only.
 */
const fragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uAspect;
  uniform float uOpacity;
  uniform vec2 uCenter;
  uniform float uClear;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform vec3 uColorD;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 m = mat2(0.8, -0.6, 0.6, 0.8);
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = m * p * 2.02 + vec2(14.1, 6.7);
      a *= 0.5;
    }
    return v;
  }

  // Ridged FBM — thin electrical filament ridges.
  float ridged(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 m = mat2(0.8, -0.6, 0.6, 0.8);
    for (int i = 0; i < 4; i++) {
      float n = 1.0 - abs(noise(p) * 2.0 - 1.0);
      n = n * n;
      v += a * n;
      p = m * p * 2.15 + vec2(9.3, 3.8);
      a *= 0.48;
    }
    return v;
  }

  vec2 curl(vec2 p) {
    float e = 0.001;
    float n1 = fbm(p + vec2(0.0, e));
    float n2 = fbm(p - vec2(0.0, e));
    float n3 = fbm(p + vec2(e, 0.0));
    float n4 = fbm(p - vec2(e, 0.0));
    return normalize(vec2(n1 - n2, n4 - n3) + 1e-5);
  }

  vec3 palette(float t) {
    t = clamp(t, 0.0, 1.0);
    vec3 c = mix(uColorA, uColorB, smoothstep(0.0, 0.32, t));
    c = mix(c, uColorC, smoothstep(0.32, 0.68, t));
    c = mix(c, uColorD, smoothstep(0.68, 1.0, t));
    return c;
  }

  // Organic SDF mass — never a perfect circle; breathes slowly.
  float energyMass(vec2 p, float t) {
    float breathe = 1.0 + 0.045 * sin(t * 0.22) + 0.025 * sin(t * 0.13 + 1.7);
    float angle = atan(p.y, p.x);
    float deform =
      fbm(vec2(angle * 1.4, t * 0.035)) * 0.09 +
      fbm(vec2(angle * 2.8 + 3.1, t * 0.022)) * 0.045;
    float r = length(p) * breathe;
    float radius = 0.38 + deform;
    float d = r - radius;
    // Soft dissolve — no hard silhouette.
    return 1.0 - smoothstep(-0.08, 0.22, d);
  }

  void main() {
    vec2 uv = vUv;
    // Offset right on desktop, centred on compact viewports.
    vec2 p = (uv - uCenter) * vec2(uAspect, 1.0);

    float t = uTime;

    float mass = energyMass(p, t);
    if (mass < 0.004) {
      gl_FragColor = vec4(0.0);
      return;
    }

    // Flow field — arcs travel independently along curl streams.
    vec2 flowP = p * 2.4 + vec2(t * 0.08, t * 0.05);
    vec2 flow = curl(flowP);
    vec2 warped = p + flow * 0.055;
    warped += (fbm(warped * 1.8 + t * 0.04) - 0.5) * 0.07;

    // Multi-scale filament network — connect / break / reconnect via domain warp.
    float arcs = 0.0;

    // Primary dense network
    float r1 = ridged(warped * 5.5 + flow * 0.8 + vec2(t * 0.12, 0.0));
    arcs += pow(r1, 3.8) * 1.15;

    // Secondary finer arcs
    float r2 = ridged(warped * 9.2 - flow * 1.2 + vec2(0.0, t * 0.09));
    arcs += pow(r2, 5.2) * 0.7;

    // Tertiary micro-filaments (split / merge)
    float r3 = ridged(warped * 14.0 + vec2(t * 0.07, t * 0.11) + flow * 0.5);
    arcs += pow(r3, 7.0) * 0.4;

    // Occasional thicker core veins
    float veins = ridged(warped * 2.8 + vec2(t * 0.04, t * 0.03));
    arcs += pow(veins, 2.6) * 0.35;

    arcs = clamp(arcs, 0.0, 2.0);

    // Contain arcs inside the mass; denser toward center.
    float containment = mass * mass;
    float coreFocus = 1.0 - smoothstep(0.0, 0.42, length(p));
    float filament = arcs * containment * (0.55 + coreFocus * 0.55);

    // Soft ambient plasma body (not smoke — subtle fill under arcs).
    float body = mass * (0.12 + fbm(p * 1.6 + t * 0.02) * 0.08);
    float glow = pow(mass, 2.2) * 0.28;

    float energy = filament * 0.85 + body + glow;

    // Brand palette driven by position + filament intensity.
    float gradT =
      length(p) * 0.9 +
      filament * 0.25 +
      p.x * 0.15 +
      0.25;
    vec3 color = palette(gradT);
    // Hotter filaments lean toward cyan/mint.
    color = mix(color, uColorD, smoothstep(0.4, 1.4, filament) * 0.35);

    // Soft luminosity — no neon bloom, no flash.
    float lum = energy * (0.7 + filament * 0.45);
    lum = pow(clamp(lum, 0.0, 1.5), 1.1);

    // Protect the headline on desktop; dissolve symmetrically when centred.
    float textClear = mix(1.0, smoothstep(0.06, 0.38, vUv.x), uClear);
    float edge =
      smoothstep(0.0, 0.1, vUv.y) *
      smoothstep(1.0, 0.9, vUv.y) *
      smoothstep(1.0, 0.86, vUv.x) *
      mix(smoothstep(0.0, 0.14, vUv.x), 1.0, uClear);

    float alpha = lum * textClear * edge * uOpacity;
    gl_FragColor = vec4(color * lum, clamp(alpha, 0.0, 1.0));
  }
`;

function CorePlane({
  opacity,
  compact,
}: {
  opacity: number;
  compact: boolean;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();
  const reduced = useReducedMotion();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAspect: { value: 1 },
      uOpacity: { value: 0 },
      uCenter: { value: new THREE.Vector2(0.5, 0.5) },
      uClear: { value: 1 },
      uColorA: { value: new THREE.Color("#7c6cff") },
      uColorB: { value: new THREE.Color("#5c8dff") },
      uColorC: { value: new THREE.Color("#45c8ff") },
      uColorD: { value: new THREE.Color("#67f0c1") },
    }),
    // Uniform objects are created once; values are pushed in useFrame.
    [],
  );

  useFrame((_, delta) => {
    const mat = material.current;
    if (!mat) return;
    mat.uniforms.uAspect.value = size.width / size.height;
    mat.uniforms.uOpacity.value = opacity;
    mat.uniforms.uClear.value = compact ? 0 : 1;
    mat.uniforms.uCenter.value.set(compact ? 0.5 : 0.62, compact ? 0.5 : 0.48);
    if (!reduced) {
      mat.uniforms.uTime.value += Math.min(delta, 0.05);
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </mesh>
  );
}

export function EnergyField() {
  const { theme } = useTheme();
  const desktop = useMediaQuery("(min-width: 64rem)");
  const compact = !desktop;
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  // Never burn GPU cycles on a canvas that has scrolled away.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "120px" },
    );
    io.observe(el);

    const onVisibility = () => setActive(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const light = theme === "light";
  const opacity = compact
    ? light
      ? 0.32
      : 0.62
    : light
      ? 0.45
      : 0.85;

  return (
    <div ref={ref} className="absolute inset-0">
      <Canvas
        frameloop={active ? "always" : "never"}
        dpr={compact ? [1, 1.25] : [1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        className="!absolute inset-0"
        camera={{ position: [0, 0, 1] }}
      >
        <CorePlane opacity={opacity} compact={compact} />
      </Canvas>
    </div>
  );
}
