"use client";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

let registered = false;

/**
 * SCELERITY Motion System v2 — controlled kinetic energy.
 * ScrollTrigger is registered lazily by SmoothScroll when Lenis is active.
 */
export function registerGsap() {
  if (registered || typeof window === "undefined") return;

  gsap.registerPlugin(CustomEase);

  CustomEase.create("craft", "M0,0 C0.16,1 0.3,1.02 1,1");
  CustomEase.create("scene", "M0,0 C0.7,0 0.2,1 1,1");
  CustomEase.create("type", "M0,0 C0.22,1.15 0.28,1 1,1");
  CustomEase.create("snap", "M0,0 C0.2,1 0.25,1 1,1");
  CustomEase.create("bolt", "M0,0 C0.16,1 0.3,1.02 1,1");
  CustomEase.create("bolt-inout", "M0,0 C0.7,0 0.2,1 1,1");
  CustomEase.create("charge", "M0,0 C0.4,-0.08 0.05,1 1,1");

  gsap.defaults({ ease: "craft", duration: 0.85 });
  registered = true;
}

/** Lenis-only — avoids loading ScrollTrigger on mobile. */
export async function registerScrollTrigger() {
  registerGsap();
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  return ScrollTrigger;
}

export { gsap, CustomEase };
