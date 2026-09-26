"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";
import type { FieldKind, FieldTone } from "./content";
import styles from "./services.module.css";

type Props = {
  kind: FieldKind;
  tone: FieldTone;
  className?: string;
};

/** Mounts the shared field only while the piece is near the viewport. */
export function ServiceField({ kind, tone, className }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    let dispose: (() => void) | undefined;
    let cancelled = false;
    let visible = false;

    const mount = () => {
      if (!visible || dispose || cancelled) return;
      void import("./fieldEngine")
        .then(({ mountField }) => {
          if (cancelled || !visible || !canvasRef.current) return;
          dispose = mountField(canvasRef.current, kind, tone, reduced);
          wrap.dataset.ready = "true";
        })
        .catch(() => {
          /* The quiet fallback stays in place when WebGL cannot start. */
        });
    };

    const unmount = () => {
      dispose?.();
      dispose = undefined;
      delete wrap.dataset.ready;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) mount();
        else unmount();
      },
      { rootMargin: "120px 0px" },
    );
    observer.observe(wrap);

    return () => {
      cancelled = true;
      observer.disconnect();
      unmount();
    };
  }, [kind, tone, reduced]);

  return (
    <div ref={wrapRef} className={cn(styles.field, className)} data-kind={kind} aria-hidden>
      <div className={styles.fieldFallback} />
      <canvas ref={canvasRef} />
    </div>
  );
}
