"use client";

import { useRef } from "react";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { cn } from "@/lib/cn";
import { EDITION_PLATES } from "./plates";
import styles from "./edition.module.css";
import { useEditionMotion } from "./useEditionMotion";

const micro = "font-mono text-[10px] uppercase tracking-widest text-zinc-500";

function plain(text: string) {
  return text.replace(/\s*[→↓↗]\s*$/u, "");
}

function Mark({ text }: { text: string }) {
  const words = text.split(" ");
  if (words.length < 2) return <>{text}</>;
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <em className="font-serif font-normal italic">{last}</em>
    </>
  );
}

function EditionLink({ href, children }: { href: string; children: string }) {
  const className =
    "group inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.18em] text-[#F4F4F5]";
  const label = (
    <span className="bg-[linear-gradient(#FD3DB5,#FD3DB5)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
      {children}
    </span>
  );
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function ServicesEdition() {
  const rootRef = useRef<HTMLElement>(null);
  const { locale, t } = useLocale();
  const s = t.solutions;
  useEditionMotion(rootRef);

  const nav =
    locale === "es"
      ? [
          { href: "#capacidades", label: "Capabilities" },
          { href: "#proceso", label: "Process" },
          { href: "#manifiesto", label: "Manifiesto" },
          { href: "/contacto/", label: "Hablemos" },
        ]
      : [
          { href: "#capacidades", label: "Capabilities" },
          { href: "#proceso", label: "Process" },
          { href: "#manifiesto", label: "Manifesto" },
          { href: "/contacto/", label: "Let's talk" },
        ];

  const hero = EDITION_PLATES.hero;

  return (
    <section ref={rootRef} className="services-edition relative">
      <div className={cn(styles.grain, "pointer-events-none absolute inset-0")} aria-hidden />

      <div data-edition="hero" className="relative isolate h-[100svh] min-h-[640px] overflow-hidden">
        <img
          src={hero.src}
          alt={hero.alt[locale]}
          width={hero.width}
          height={hero.height}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className={styles.plate}
          style={{ objectPosition: hero.objectPosition }}
        />
        <div data-edition="lens" className={styles.lens} aria-hidden>
          <img
            src={hero.src}
            alt=""
            width={hero.width}
            height={hero.height}
            decoding="async"
            className={styles.lensPlate}
            style={{ objectPosition: hero.objectPosition }}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#09090b_0%,transparent_42%)]"
          aria-hidden
        />

        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-8 px-5 pt-[calc(var(--header-h)+0.75rem)] lg:px-10">
          <p className={micro}>{s.hero.label}</p>
          <nav aria-label={locale === "es" ? "En esta página" : "On this page"}>
            <ul className="flex flex-wrap justify-end gap-x-5 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <EditionLink href={item.href}>{item.label}</EditionLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-12 px-5 pb-8 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:pb-12">
          <h1 className="max-w-[11ch] font-display text-[clamp(3.2rem,7.4vw,7.2rem)] font-bold leading-[0.84] tracking-tighter text-[#F4F4F5] mix-blend-difference">
            <Mark text={s.hero.headline} />
          </h1>
          <div className="max-w-md lg:pb-2">
            <h2 className="text-pretty text-lg leading-relaxed text-zinc-300">{s.hero.sub}</h2>
            <div className="mt-4 space-y-3">
              {s.hero.body.map((line) => (
                <p key={line} className="text-pretty leading-relaxed text-zinc-400">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-start gap-1">
              <EditionLink href="/contacto/">{`${plain(s.hero.ctaPrimary)} ↗`}</EditionLink>
              <EditionLink href="#capacidades">{s.hero.ctaSecondary}</EditionLink>
            </div>
          </div>
        </div>
      </div>

      <section id="manifiesto" className="scroll-mt-28 px-5 py-[20vh] lg:px-10 lg:py-[24vh]">
        <div className="max-w-3xl lg:ml-[16vw]">
          <p className={micro}>{s.manifesto.label}</p>
          <p className="mt-10 text-pretty font-display text-[clamp(1.7rem,3.2vw,2.8rem)] font-medium leading-[1.28] tracking-tight text-[#F4F4F5]">
            {s.manifesto.headline} {s.manifesto.lead} {s.manifesto.body}
          </p>
          <p className="mt-16 max-w-[18ch] font-serif text-[clamp(2rem,4vw,3.5rem)] italic leading-[1.05] text-[#F4F4F5]">
            {s.manifesto.creed}
          </p>
        </div>
      </section>

      <section id="capacidades" className="scroll-mt-28 px-5 pb-24 lg:px-10 lg:pb-36">
        <div className="max-w-xl lg:ml-[28%]">
          <p className={micro}>{s.capabilities.label}</p>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.4rem)] font-bold leading-[0.9] tracking-tighter">
            <Mark text={s.capabilities.headline} />
          </h2>
          <p className="mt-8 text-lg text-zinc-300">{s.capabilities.lead}</p>
          <p className="mt-3 text-pretty text-lg text-zinc-400">{s.capabilities.emphasis}</p>
        </div>

        <div className="mt-24 lg:mt-32 lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-[calc(var(--header-h)+1.5rem)] flex flex-col gap-8">
              {s.capabilities.items.map((item, index) => (
                <p
                  key={item.name}
                  data-cap-nav={index}
                  className={cn(styles.index, "font-display text-5xl font-bold tracking-tighter", index === 0 && "is-current")}
                >
                  <span className={styles.mark} aria-hidden />
                  {item.index}
                  <span className="mt-2 block font-mono text-[10px] font-normal uppercase tracking-widest">
                    {item.name}
                  </span>
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[18vh] lg:col-span-9">
            {s.capabilities.items.map((item, index) => {
              const plate = EDITION_PLATES.capabilities[index];
              return (
                <article
                  key={item.name}
                  data-cap={index}
                  className={cn(styles.block, "grid items-end gap-10 lg:grid-cols-12 lg:gap-12")}
                >
                  <figure
                    className={cn(
                      "overflow-hidden lg:col-span-7",
                      index === 0 && "h-[70vh]",
                      index === 1 && "h-[56vh] lg:col-start-6 lg:row-start-1",
                      index === 2 && "h-[64vh] lg:col-span-10 lg:row-start-1",
                    )}
                  >
                    <div data-cap-photo className="h-full w-full">
                      <img
                        src={plate.src}
                        alt={plate.alt[locale]}
                        className={styles.shot}
                        style={{ objectPosition: plate.objectPosition }}
                      />
                    </div>
                  </figure>

                  <div
                    className={cn(
                      "lg:col-span-5",
                      index === 1 && "lg:col-start-1 lg:row-start-1",
                      index === 2 && "lg:col-start-6 lg:row-start-2",
                    )}
                  >
                    <p className={cn(micro, "lg:hidden")}>
                      {item.index} / {item.name}
                    </p>
                    <h3 className="mt-3 max-w-[14ch] font-display text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[0.9] tracking-tighter lg:mt-0">
                      <Mark text={item.headline} />
                    </h3>
                    <p className="mt-6 max-w-[36ch] text-pretty text-lg leading-relaxed text-zinc-300">{item.lead}</p>
                    <p className="mt-4 max-w-[38ch] text-pretty leading-relaxed text-zinc-400">{item.body}</p>
                    <p className={cn(micro, "mt-10 text-zinc-500")}>{s.capabilities.includesLabel}</p>
                    <ul className="mt-4 space-y-2">
                      {item.includes.map((include) => (
                        <li key={include} className="text-[15px] leading-relaxed text-zinc-300">
                          {include}
                        </li>
                      ))}
                    </ul>
                    <p className={cn(micro, "mt-10 text-zinc-500")}>{s.capabilities.stackLabel}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.stack.split(" · ").map((name) => (
                        <li
                          key={name}
                          className="border border-zinc-800 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-400"
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-8 font-serif text-sm italic text-zinc-500">{item.microcopy}</p>
                    <div className="mt-6">
                      <EditionLink href={item.href}>{`${plain(item.cta)} ↗`}</EditionLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sistema" className="scroll-mt-28 px-5 py-28 lg:px-10 lg:py-40">
        <p className={micro}>{s.system.label}</p>
        <h2 className="mt-6 max-w-[12ch] font-display text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.88] tracking-tighter">
          <Mark text={s.system.headline} />
        </h2>
        <div className="mt-12 max-w-xl space-y-2 text-lg text-zinc-400 lg:ml-[18vw]">
          {s.system.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="pt-2 text-[#F4F4F5]">{s.system.closer}</p>
        </div>
        <ul className="mt-20 flex flex-col gap-12">
          {s.system.layers.map((layer, index) => (
            <li key={layer.title} className="max-w-5xl" style={{ marginLeft: `${index * 7}vw` }}>
              <p className={micro}>{layer.title}</p>
              <p className="mt-3 font-display text-[clamp(1.8rem,4.2vw,3.8rem)] font-bold leading-[0.92] tracking-tighter">
                {layer.text}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-20 max-w-[16ch] font-serif text-[clamp(1.8rem,3vw,2.8rem)] italic leading-tight lg:ml-[22vw]">
          {s.system.statement}
        </p>
      </section>

      <section id="adelante" className="scroll-mt-28 bg-[#0F0F13] px-5 py-28 lg:px-10 lg:py-40">
        <p className={micro}>{s.forward.label}</p>
        <h2 className="mt-8 w-full max-w-[80%] font-display text-[clamp(2.4rem,5vw,4.8rem)] font-bold leading-[0.9] tracking-tighter">
          <Mark text={s.forward.headline} />
        </h2>
        <div className="mt-10 max-w-2xl space-y-4 text-lg leading-relaxed text-zinc-400">
          {s.forward.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-10 space-y-1 font-serif text-2xl italic text-[#F4F4F5]">
          {s.forward.emphasis.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section id="proceso" data-edition="process" className={cn(styles.process, "scroll-mt-28 bg-[#09090B]")}>
        <div className="flex h-auto flex-col px-5 py-24 lg:h-full lg:flex-row lg:items-end lg:px-0 lg:py-0">
          <div data-edition="process-title" className="shrink-0 lg:w-[34vw] lg:px-10 lg:pb-16">
            <p className={micro}>{s.process.label}</p>
            <h2 className="mt-6 max-w-[11ch] font-display text-[clamp(2.6rem,4.5vw,4.4rem)] font-bold leading-[0.88] tracking-tighter">
              <Mark text={s.process.headline} />
            </h2>
          </div>
          <ol data-edition="track" className={cn(styles.track, "mt-16 lg:mt-0 lg:pb-16")}>
            {s.process.steps.map((step) => (
              <li key={step.number} className={cn(styles.slide, "border-t border-white/10 pt-8")}>
                <p className={micro}>
                  {step.number}
                  <span className="mx-3 text-zinc-700">—</span>
                  {step.title}
                </p>
                <h3 className="mt-6 max-w-[16ch] font-display text-[clamp(2rem,3vw,3.2rem)] font-bold leading-[0.92] tracking-tighter">
                  {step.lead}
                </h3>
                <div className="mt-6 max-w-md space-y-3 text-zinc-400">
                  {step.text.map((line) => (
                    <p key={line} className="text-pretty leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="principio" className="scroll-mt-28 px-5 py-[22vh] lg:px-10">
        <div className="max-w-3xl lg:ml-[10vw]">
          <p className={micro}>{s.principle.label}</p>
          <h2 className="mt-8 font-display text-[clamp(2.2rem,4.4vw,4rem)] font-bold leading-[1.02] tracking-tighter">
            <Mark text={s.principle.headline} />
          </h2>
          <p className="mt-10 text-zinc-400">{s.principle.intro}</p>
          <ul className="mt-8 space-y-3 font-serif text-[clamp(1.7rem,3vw,2.5rem)] italic leading-tight text-[#F4F4F5]">
            {s.principle.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
          <p className="mt-10 text-zinc-500">{s.principle.close}</p>
        </div>
      </section>

      <section id="cierre" className="scroll-mt-28 px-5 py-28 lg:px-10 lg:py-40">
        <h2 className="max-w-[13ch] font-display text-[clamp(3rem,7vw,6.4rem)] font-bold leading-[0.86] tracking-tighter">
          <Mark text={s.close.headline} />
        </h2>
        <div className="mt-10 max-w-xl space-y-2 text-lg text-zinc-400">
          {s.close.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-8 font-serif text-[clamp(1.5rem,2.4vw,2rem)] italic text-[#F4F4F5]">{s.close.emphasis}</p>
        <div className="mt-16 flex flex-col items-start gap-5">
          <Link
            href="/contacto/"
            className="font-display text-[clamp(2rem,4.5vw,4rem)] font-bold leading-none tracking-tighter text-[#F4F4F5] transition-colors duration-300 hover:text-[#FD3DB5]"
          >
            {plain(s.close.ctaPrimary)} ↗
          </Link>
          <Link
            href="/#trabajo"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 transition-colors duration-300 hover:text-[#F4F4F5]"
          >
            {s.close.ctaSecondary}
          </Link>
        </div>
      </section>

      <div className="grid gap-10 border-t border-white/10 px-5 py-14 font-mono text-[10px] uppercase tracking-widest text-zinc-500 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-zinc-300">{s.statement.brand}</p>
          <p className="mt-4 max-w-[28ch] normal-case tracking-[0.08em]">{s.statement.tagline}</p>
          <p className="mt-4">{s.statement.layers}</p>
        </div>
        <div className="lg:text-right">
          <p className="text-zinc-300">{s.statement.year}</p>
          <p className="mt-4">{s.statement.line}</p>
        </div>
      </div>
    </section>
  );
}
