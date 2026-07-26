"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap } from "@/lib/gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useReducedMotion } from "@/hooks/useReducedMotion";
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
 * No bounce. No random rotation.
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
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      el.textContent = text;
      return;
    }

    registerGsap();
    gsap.registerPlugin(GSAPSplitText);

    let split: InstanceType<typeof GSAPSplitText> | null = null;
    let tween: gsap.core.Tween | null = null;

    const ctx = gsap.context(() => {
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

      // Word-level timing variation: each word gets its own slight delay offset.
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

    return () => {
      tween?.kill();
      split?.revert();
      ctx.revert();
    };
  }, [delay, onReady, paused, reduced, text, trigger]);

  return (
    <Tag ref={ref as never} className={cn(className)}>
      {text}
    </Tag>
  );
}
