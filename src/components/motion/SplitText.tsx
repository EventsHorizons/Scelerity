"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap, registerScrollTrigger } from "@/lib/gsap";
import { useDeviceProfile } from "@/hooks/useDeviceProfile";
import { cn } from "@/lib/cn";

type Props = {
  text: string;
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  delay?: number;
  trigger?: boolean;
  /** External timeline control — skip auto-play */
  paused?: boolean;
  onReady?: (chars: Element[], words: Element[]) => void;
};

/**
 * Typography as precision machinery.
 * Masked word/char reveal with velocity blur, tiny overshoot, perfect alignment.
 * SplitText plugin loads only on desktop fine-pointer devices.
 */
export function SplitText({
  text,
  as: Tag = "h1",
  className,
  delay = 0,
  trigger = false,
  paused = false,
  onReady,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { animate, reduced } = useDeviceProfile();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced || !animate) {
      el.textContent = text;
      onReady?.([], []);
      return;
    }

    let cancelled = false;
    let split: { revert: () => void; chars: Element[]; words: Element[] } | null =
      null;
    let tween: gsap.core.Tween | null = null;
    let ctx: gsap.Context | null = null;

    (async () => {
      const [{ SplitText: GSAPSplitText }, ScrollTrigger] = await Promise.all([
        import("gsap/SplitText"),
        trigger ? registerScrollTrigger() : Promise.resolve(null),
      ]);

      if (cancelled || !ref.current) return;

      registerGsap();
      gsap.registerPlugin(GSAPSplitText);
      if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        split = new GSAPSplitText(el, {
          type: "chars,words",
          mask: "words",
          charsClass: "split-char",
          wordsClass: "split-word",
        });

        onReady?.(split.chars, split.words);

        if (paused) {
          gsap.set(split.chars, {
            yPercent: 115,
            autoAlpha: 0,
            filter: "blur(8px)",
          });
          return;
        }

        tween = gsap.from(split.chars, {
          yPercent: 115,
          autoAlpha: 0,
          filter: "blur(8px)",
          duration: 0.85,
          ease: "type",
          stagger: {
            each: 0.022,
            from: "start",
          },
          delay,
          ...(trigger
            ? {
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  once: true,
                },
              }
            : {}),
        });
      }, el);
    })();

    return () => {
      cancelled = true;
      tween?.kill();
      split?.revert();
      ctx?.revert();
    };
  }, [animate, delay, onReady, paused, reduced, text, trigger]);

  return (
    <Tag ref={ref as never} className={cn(className)}>
      {text}
    </Tag>
  );
}
