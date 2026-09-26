"use client";

import { useRef, type PointerEvent, type RefObject } from "react";
import { useLocale } from "@/context/LocaleContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";
import {
  SERVICE_SCENES,
  SERVICES_INTRO,
  TONE,
  type ServiceScene,
} from "./data";
import styles from "./services.module.css";
import { useServiceMotion } from "./useServiceMotion";

function DecisionMark({ locale }: { locale: "es" | "en" }) {
  const person = locale === "es" ? "Persona" : "Person";
  const system = locale === "es" ? "Sistema" : "System";
  return (
    <div className="mt-10 w-full max-w-xl" aria-hidden>
      <svg viewBox="0 0 520 72" className="h-16 w-full text-current">
        <line className={styles.connector} x1="108" y1="28" x2="250" y2="28" />
        <line className={styles.connector} x1="270" y1="28" x2="400" y2="28" />
        <circle className={cn(styles.node, styles.nodeLive)} cx="96" cy="28" r="5" />
        <circle className={styles.node} cx="260" cy="28" r="5" />
        <circle className={styles.node} cx="412" cy="28" r="5" />
      </svg>
      <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.16em]">
        <span>{person}</span>
        <span className="opacity-60">{system}</span>
      </div>
    </div>
  );
}

function FlowMark({ locale }: { locale: "es" | "en" }) {
  const steps =
    locale === "es"
      ? ["Repetición", "Proceso", "Control"]
      : ["Repetition", "Process", "Control"];
  return (
    <div className="mt-10 w-full max-w-2xl" aria-hidden>
      <svg viewBox="0 0 640 48" className="h-10 w-full text-current">
        <line className={styles.connector} x1="28" y1="16" x2="300" y2="16" />
        <line className={styles.connector} x1="340" y1="16" x2="600" y2="16" />
        <circle className={styles.node} cx="16" cy="16" r="4" />
        <circle className={cn(styles.node, styles.nodeLive)} cx="320" cy="16" r="4" />
        <circle className={styles.node} cx="612" cy="16" r="4" />
      </svg>
      <div className="mt-2 grid grid-cols-3 font-mono text-[11px] uppercase tracking-[0.16em]">
        {steps.map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    </div>
  );
}

function SceneMedia({
  scene,
  locale,
  mediaRef,
}: {
  scene: ServiceScene;
  locale: "es" | "en";
  mediaRef: RefObject<HTMLImageElement | null>;
}) {
  if (!scene.image) return null;
  return (
    <div
      data-photo
      className={cn(scene.image.wake && styles.wake, "relative z-[1] h-full w-full")}
    >
      <div data-reveal className={styles.frame}>
        <img
          ref={mediaRef}
          src={scene.image.src}
          alt={scene.image.alt[locale]}
          width={scene.image.width}
          height={scene.image.height}
          loading={scene.index === "01" ? "eager" : "lazy"}
          decoding="async"
          className={styles.media}
          style={{ objectPosition: scene.image.objectPosition }}
        />
      </div>
    </div>
  );
}

function Scene({ scene, locale }: { scene: ServiceScene; locale: "es" | "en" }) {
  const mediaRef = useRef<HTMLImageElement>(null);
  const reduced = useReducedMotion();
  const tone = TONE[scene.tone];
  const title = scene.title[locale];

  const onMove = (event: PointerEvent<HTMLElement>) => {
    if (reduced || !mediaRef.current || scene.motion === "system") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * (scene.motion === "interface" ? 8 : 16);
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
    mediaRef.current.style.transform = `translate3d(${x}px, calc(-4% + ${y}px), 0)`;
  };

  const onLeave = () => {
    if (mediaRef.current) mediaRef.current.style.transform = "";
  };

  const copy = (
    <div className="relative z-10 max-w-[34rem]">
      <p className={cn(styles.index, "font-mono text-[11px] uppercase tracking-[0.18em]")} style={{ color: tone.muted }}>
        {scene.index}
        <span className="mx-3 opacity-40">/</span>
        {scene.pillar[locale]}
      </p>
      <h2
        data-title
        className="mt-4 text-balance font-display font-bold leading-[0.88] tracking-[-0.045em]"
        style={{
          color: tone.fg,
          fontSize:
            scene.layout === "mark" || scene.layout === "campaign"
              ? "clamp(3.4rem, 8vw, 7.5rem)"
              : "clamp(2.8rem, 5.5vw, 5.25rem)",
        }}
      >
        {title}
      </h2>
      <p data-copy className="mt-6 max-w-[32ch] text-lg leading-snug" style={{ color: tone.fg }}>
        {scene.line[locale]}
      </p>
      <p data-copy className="mt-4 max-w-[38ch] text-sm leading-relaxed" style={{ color: tone.muted }}>
        {scene.detail[locale]}
      </p>
      {scene.layout === "decision" ? <DecisionMark locale={locale} /> : null}
      {scene.layout === "flow" ? <FlowMark locale={locale} /> : null}
      <a
        href={`/servicios/${scene.slug}/`}
        className="group mt-8 inline-flex min-h-11 items-center gap-3 font-mono text-[12px] uppercase tracking-[0.16em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FD3DB5]"
        style={{ color: tone.fg }}
      >
        <span className="border-b border-current pb-1 transition-colors duration-300 group-hover:border-[#FD3DB5] group-hover:text-[#FD3DB5]">
          {locale === "es" ? `Ver ${title}` : `View ${title}`}
        </span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
          →
        </span>
      </a>
    </div>
  );

  const media = <SceneMedia scene={scene} locale={locale} mediaRef={mediaRef} />;

  return (
    <article
      data-scene
      data-motion={scene.motion}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn(styles.scene, "relative px-5 py-16 lg:px-[6vw] lg:py-24")}
      style={{ backgroundColor: tone.bg, color: tone.fg }}
    >
      {scene.layout === "screen" ? (
        <div className="lg:grid lg:min-h-[72svh] lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.7fr)] lg:items-end lg:gap-12">
          <div className="aspect-[16/10]">{media}</div>
          {copy}
        </div>
      ) : null}

      {scene.layout === "mark" ? (
        <div className="lg:grid lg:min-h-[64svh] lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.7fr)] lg:items-end lg:gap-16">
          {copy}
          <div className="mt-10 aspect-[4/5] lg:mt-0 lg:max-h-[68svh]">{media}</div>
        </div>
      ) : null}

      {scene.layout === "build" ? (
        <div className="lg:min-h-[78svh]">
          {copy}
          <div className="mt-10 aspect-[16/10] lg:mt-14 lg:w-[92%]">{media}</div>
        </div>
      ) : null}

      {scene.layout === "device" ? (
        <div className="lg:grid lg:min-h-[88svh] lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
          {copy}
          <div className="mt-10 aspect-[4/5] lg:mt-0">{media}</div>
        </div>
      ) : null}

      {scene.layout === "store" ? (
        <div className="lg:grid lg:min-h-[74svh] lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.15fr)] lg:items-center lg:gap-8">
          <div className="lg:order-2 lg:-mr-[6vw] aspect-[4/5] lg:aspect-[5/4]">{media}</div>
          <div className="mt-10 lg:order-1 lg:mt-0">{copy}</div>
        </div>
      ) : null}

      {scene.layout === "search" ? (
        <div className="lg:min-h-[58svh] lg:max-w-[72rem]">
          {copy}
          <div className="mt-10 aspect-[16/8]">{media}</div>
        </div>
      ) : null}

      {scene.layout === "campaign" ? (
        <div className="lg:min-h-[96svh]">
          <div className="aspect-[16/10] lg:absolute lg:right-0 lg:top-[12%] lg:aspect-auto lg:h-[76%] lg:w-[58%]">
            {media}
          </div>
          <div className="relative z-10 mt-10 lg:mt-0 lg:w-[42%] lg:pt-[18vh]">{copy}</div>
        </div>
      ) : null}

      {scene.layout === "decision" || scene.layout === "flow" ? (
        <div className="lg:flex lg:min-h-[70svh] lg:items-center">{copy}</div>
      ) : null}
    </article>
  );
}

export function ServicesExperience() {
  const rootRef = useRef<HTMLElement>(null);
  const { locale } = useLocale();
  const intro = SERVICES_INTRO[locale];
  useServiceMotion(rootRef);

  return (
    <section ref={rootRef} className="services-world" aria-label={locale === "es" ? "Servicios" : "Services"}>
      <div className="px-5 pb-4 pt-24 lg:px-[6vw] lg:pt-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5e5952]">{intro.kicker}</p>
        <h2 className="mt-6 max-w-[16ch] font-display text-[clamp(2.6rem,6vw,5.2rem)] font-bold leading-[0.9] tracking-[-0.045em] text-[#1c1c1e]">
          {intro.headline}
        </h2>
        <p className="mt-6 max-w-[36ch] text-lg text-[#5e5952]">{intro.sub}</p>
      </div>
      {SERVICE_SCENES.map((scene) => (
        <Scene key={scene.slug} scene={scene} locale={locale} />
      ))}
    </section>
  );
}
