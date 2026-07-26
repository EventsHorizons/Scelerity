"use client";

import { useEffect } from "react";
import { getLenisInstance } from "@/lib/lenis";

/**
 * Locks the page behind an overlay. Uses position: fixed so iOS Safari cannot
 * rubber-band the body, and compensates for the scrollbar so nothing shifts
 * horizontally when the lock engages on desktop.
 */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const { body, documentElement } = document;
    const scrollY = window.scrollY;
    const scrollbar = window.innerWidth - documentElement.clientWidth;

    const previous = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    };

    getLenisInstance()?.stop();
    body.classList.add("nav-locked");
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      body.classList.remove("nav-locked");
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      body.style.paddingRight = previous.paddingRight;
      window.scrollTo({ top: scrollY, behavior: "instant" as ScrollBehavior });
      const lenis = getLenisInstance();
      lenis?.scrollTo(scrollY, { immediate: true });
      lenis?.start();
    };
  }, [locked]);
}
