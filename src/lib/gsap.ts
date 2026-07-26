"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { Flip } from "gsap/Flip";
import { CustomEase } from "gsap/CustomEase";

let registered = false;

/**
 * SCELERITY Motion System v2 — controlled kinetic energy.
 * Acceleration with engineered settling. Craft over flash.
 */
export function registerGsap() {
  if (registered || typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger, Observer, Flip, CustomEase);

  // Precision arrival — launches hard, locks with a whisper of overshoot.
  CustomEase.create("craft", "M0,0 C0.16,1 0.3,1.02 1,1");
  // Scene change — architectural wipe through the middle.
  CustomEase.create("scene", "M0,0 C0.7,0 0.2,1 1,1");
  // Type machinery — slight load, then perfect alignment.
  CustomEase.create("type", "M0,0 C0.22,1.15 0.28,1 1,1");
  // Mechanical snap for presses.
  CustomEase.create("snap", "M0,0 C0.2,1 0.25,1 1,1");
  // Legacy aliases used across the codebase.
  CustomEase.create("bolt", "M0,0 C0.16,1 0.3,1.02 1,1");
  CustomEase.create("bolt-inout", "M0,0 C0.7,0 0.2,1 1,1");
  CustomEase.create("charge", "M0,0 C0.4,-0.08 0.05,1 1,1");

  gsap.defaults({ ease: "craft", duration: 0.85 });
  registered = true;
}

export { gsap, ScrollTrigger, Observer, Flip, CustomEase };
