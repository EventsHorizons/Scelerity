"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

/**
 * Cinematic product reel for Featured — Apple / Stripe / Linear style.
 * Real UI scroll loop on dark studio background. Not an AI GIF.
 */
export function FeaturedProductReel({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "80px", threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const animate = !reduced && active;

  return (
    <div
      ref={rootRef}
      className={cn("featured-reel", className)}
      data-animate={animate ? "true" : "false"}
      aria-label="Aether — product showcase"
    >
      <div className="featured-reel__stage">
        <div className="featured-reel__browser">
          <div className="featured-reel__chrome" aria-hidden>
            <span className="featured-reel__dot featured-reel__dot--r" />
            <span className="featured-reel__dot featured-reel__dot--y" />
            <span className="featured-reel__dot featured-reel__dot--g" />
            <div className="featured-reel__url">
              <span>aether.app</span>
            </div>
          </div>

          <div className="featured-reel__viewport">
            <div
              className={cn(
                "featured-reel__scroll",
                animate && "featured-reel__scroll--run",
              )}
            >
              <AetherSite />
              {/* Duplicate for seamless loop feel when CSS resets */}
              <AetherSite ariaHidden />
            </div>

            {animate ? (
              <div className="featured-reel__cursor" aria-hidden />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function AetherSite({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="aether-site" aria-hidden={ariaHidden || undefined}>
      <header className="aether-site__nav">
        <span className="aether-site__logo">Aether</span>
        <nav className="aether-site__links">
          <span>Product</span>
          <span>Analytics</span>
          <span>Pricing</span>
        </nav>
        <span className="aether-site__cta">Get started</span>
      </header>

      <section className="aether-site__hero">
        <p className="aether-site__eyebrow">Platform</p>
        <h3 className="aether-site__title">Clarity at the speed of decisions.</h3>
        <p className="aether-site__sub">
          One workspace for metrics, workflows, and teams that move fast.
        </p>
        <div className="aether-site__actions">
          <span className="aether-site__btn aether-site__btn--primary">
            Start free
          </span>
          <span className="aether-site__btn aether-site__btn--ghost">
            Book a demo
          </span>
        </div>
      </section>

      <section className="aether-site__dash">
        <div className="aether-site__sidebar">
          <span className="is-active">Overview</span>
          <span>Revenue</span>
          <span>Users</span>
          <span>Reports</span>
        </div>
        <div className="aether-site__main">
          <div className="aether-site__kpis">
            <article className="aether-site__kpi aether-site__kpi--hover">
              <p>Conversion</p>
              <strong>+42%</strong>
            </article>
            <article className="aether-site__kpi">
              <p>Task time</p>
              <strong>−51%</strong>
            </article>
            <article className="aether-site__kpi">
              <p>To launch</p>
              <strong>8 wks</strong>
            </article>
          </div>
          <div className="aether-site__chart">
            <div className="aether-site__bars">
              <i style={{ height: "42%" }} />
              <i style={{ height: "58%" }} />
              <i style={{ height: "51%" }} />
              <i style={{ height: "72%" }} />
              <i style={{ height: "64%" }} />
              <i style={{ height: "88%" }} />
              <i style={{ height: "76%" }} />
              <i style={{ height: "94%" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="aether-site__features">
        <article>
          <h4>Realtime insights</h4>
          <p>Signals that surface before the week ends.</p>
        </article>
        <article>
          <h4>Trusted workflows</h4>
          <p>Fewer steps. More confidence in every click.</p>
        </article>
        <article>
          <h4>Built to scale</h4>
          <p>Architecture that grows without a rewrite.</p>
        </article>
      </section>
    </div>
  );
}
