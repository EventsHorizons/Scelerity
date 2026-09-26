"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, type CardTone } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { KineticCard } from "@/components/motion/KineticCard";

const breadcrumbs = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios/" },
];

type Chapter = {
  slug: string;
  index: string;
  title: string;
  text: string;
  src: string;
  alt: string;
  tone: CardTone;
  layout: "left" | "right" | "stage";
  span: "lg:col-span-6" | "lg:col-span-7" | "lg:col-span-8";
};

const chapters: Chapter[] = [
  {
    slug: "diseno-web",
    index: "01",
    title: "Diseño Web",
    text: "La primera pantalla se entiende sola. En el teléfono y en el escritorio.",
    src: "/projects/northline.jpg",
    alt: "Sitio web en un monitor y un teléfono: navegación, titular y pie de página",
    tone: "paper",
    layout: "left",
    span: "lg:col-span-8",
  },
  {
    slug: "branding",
    index: "02",
    title: "Branding Digital",
    text: "La marca se reconoce antes del nombre. Papelería, símbolo y sistema.",
    src: "/soluciones/diseno.webp",
    alt: "Sistema de identidad visual, papelería y manual de marca",
    tone: "light",
    layout: "right",
    span: "lg:col-span-6",
  },
  {
    slug: "desarrollo-web",
    index: "03",
    title: "Desarrollo Web",
    text: "El sitio aguanta el día en que llega gente. Código, velocidad y una base que puede crecer.",
    src: "/projects/aether.jpg",
    alt: "Producto web en un portátil: paneles, navegación y datos en una interfaz",
    tone: "dark",
    layout: "stage",
    span: "lg:col-span-8",
  },
  {
    slug: "desarrollo-apps",
    index: "04",
    title: "Desarrollo de Aplicaciones",
    text: "Algo que se vuelve a abrir. Flujos, datos y una interfaz en el teléfono.",
    src: "/projects/vespera.jpg",
    alt: "Aplicación móvil en dos teléfonos: catálogo de productos y cuenta de usuario",
    tone: "light",
    layout: "left",
    span: "lg:col-span-7",
  },
  {
    slug: "ecommerce",
    index: "05",
    title: "E-commerce",
    text: "Del deseo al pago sin perder el hilo. Catálogo, ficha y checkout.",
    src: "/soluciones/meridian.webp",
    alt: "Tienda online: ficha de producto y checkout",
    tone: "paper",
    layout: "right",
    span: "lg:col-span-7",
  },
  {
    slug: "seo",
    index: "06",
    title: "SEO",
    text: "Estar cuando alguien ya está buscando. Posiciones, contenido y medición.",
    src: "/soluciones/signal.webp",
    alt: "Panel de SEO: posiciones, contenido y rendimiento",
    tone: "light",
    layout: "left",
    span: "lg:col-span-6",
  },
  {
    slug: "marketing-digital",
    index: "07",
    title: "Marketing Digital",
    text: "La campaña, el sitio y las redes dicen lo mismo.",
    src: "/soluciones/marketing.webp",
    alt: "Dashboard de campañas, analítica y métricas de marketing",
    tone: "paper",
    layout: "right",
    span: "lg:col-span-8",
  },
];

const systems = [
  {
    slug: "inteligencia-artificial",
    index: "08",
    title: "Inteligencia Artificial",
    text: "Más capacidad para el equipo. La decisión sigue siendo de una persona.",
  },
  {
    slug: "automatizacion",
    index: "09",
    title: "Automatización",
    text: "La tarea que se repite sale del día. Las herramientas que ya usan, conectadas.",
  },
];

function ServiceLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      data-cursor="link"
      className="tap-target group/link mt-8 inline-flex items-center gap-2 text-small text-[var(--fg-muted)] transition-colors duration-300 hover:text-[var(--fg)]"
    >
      Ver servicio
      <ArrowUpRight
        size={18}
        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      />
    </Link>
  );
}

function Figure({
  href,
  src,
  alt,
  index,
  priority = false,
}: {
  href: string;
  src: string;
  alt: string;
  index: string;
  priority?: boolean;
}) {
  return (
    <KineticCard
      lean={4}
      className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)]"
    >
      <article data-cursor="media" className="group">
        <Link href={href} className="block">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--surface)]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              priority={priority}
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-black/55 to-transparent p-4 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
              <span className="font-mono text-micro uppercase tracking-[0.18em] text-white/90">
                Ver servicio
              </span>
              <span className="font-mono text-micro text-white/70">{index}</span>
            </div>
          </div>
        </Link>
      </article>
    </KineticCard>
  );
}

function Split({ chapter, priority = false }: { chapter: Chapter; priority?: boolean }) {
  const imageFirst = chapter.layout === "left";
  const imageClass = imageFirst
    ? chapter.span
    : chapter.span === "lg:col-span-8"
      ? "lg:col-span-8 lg:col-start-5 lg:order-2"
      : chapter.span === "lg:col-span-6"
        ? "lg:col-span-6 lg:col-start-7 lg:order-2"
        : "lg:col-span-7 lg:col-start-6 lg:order-2";
  const textClass = imageFirst
    ? chapter.span === "lg:col-span-6"
      ? "lg:col-span-4 lg:col-start-8"
      : "lg:col-span-4 lg:col-start-9"
    : "lg:col-span-4 lg:order-1";

  return (
    <Section id={chapter.index === "01" ? "diseno-web" : undefined} cardTone={chapter.tone}>
      <Container size="content" className="section-y-lg">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-x-16">
          <Reveal className={imageClass}>
            <Figure
              href={`/servicios/${chapter.slug}/`}
              src={chapter.src}
              alt={chapter.alt}
              index={chapter.index}
              priority={priority}
            />
          </Reveal>
          <Reveal delay={0.08} className={textClass}>
            <p className="font-mono text-small text-[var(--fg-subtle)]">{chapter.index}</p>
            <h2 className="mt-8 text-balance font-display text-h2 font-semibold">{chapter.title}</h2>
            <p className="mt-6 max-w-[32ch] text-body text-pretty text-[var(--fg-muted)]">{chapter.text}</p>
            <ServiceLink href={`/servicios/${chapter.slug}/`} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export function ServiceOffer() {
  const stage = chapters.find((chapter) => chapter.layout === "stage");
  const splits = chapters.filter((chapter) => chapter.layout !== "stage");
  const before = splits.filter((chapter) => Number(chapter.index) < 3);
  const after = splits.filter((chapter) => Number(chapter.index) > 3);

  return (
    <>
      <Section cardTone="dark">
        <Container size="content" className="section-y-lg">
          <Breadcrumbs items={breadcrumbs} className="mb-16" />
          <div className="section-head">
            <p className="chapter-label lg:pt-3">Cultural & creative marketing</p>
            <div>
              <h1 className="text-balance font-display text-hero font-semibold">
                Diseño, desarrollo y marketing.
              </h1>
              <p className="mt-12 measure text-lead text-pretty text-[var(--fg-muted)]">
                Nueve oficios. Un criterio: que la idea entre en la cultura.
              </p>
              <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:gap-8">
                <Button href="/contacto/">Hablemos</Button>
                <Button href="#diseno-web" variant="secondary">
                  Ver servicios
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section cardTone="light">
        <Container size="content" className="section-y-lg">
          <div className="section-head">
            <p className="chapter-label lg:pt-3">Oficio</p>
            <div>
              <h2 className="text-balance font-display text-h2 font-semibold">
                Cada servicio es un territorio.
              </h2>
              <div className="mt-12 measure space-y-8">
                <p className="text-lead text-pretty text-[var(--fg-muted)]">
                  No es un menú de entregables. Es la forma en que una idea llega a una pantalla, una marca o una campaña.
                </p>
                <p className="text-lead text-pretty text-[var(--fg-muted)]">
                  Diseño, código y marketing, leídos con el mismo criterio.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {before.map((chapter, index) => (
        <Split key={chapter.slug} chapter={chapter} priority={index === 0} />
      ))}

      {stage ? (
        <Section cardTone="dark">
          <Container size="content" className="section-y-lg">
            <Reveal>
              <Figure
                href={`/servicios/${stage.slug}/`}
                src={stage.src}
                alt={stage.alt}
                index={stage.index}
              />
            </Reveal>
            <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-x-16">
              <p className="font-mono text-small text-[var(--fg-subtle)] lg:col-span-3 lg:pt-3">
                {stage.index}
              </p>
              <div className="lg:col-span-7">
                <h2 className="text-balance font-display text-h1 font-semibold">{stage.title}</h2>
                <p className="mt-8 measure text-lead text-pretty text-[var(--fg-muted)]">{stage.text}</p>
                <ServiceLink href={`/servicios/${stage.slug}/`} />
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {after.map((chapter) => (
        <Split key={chapter.slug} chapter={chapter} />
      ))}

      <Section cardTone="dark">
        <Container size="content" className="section-y-lg">
          <div className="section-head">
            <p className="chapter-label lg:pt-3">08 — 09</p>
            <h2 className="text-balance font-display text-h2 font-semibold">
              La decisión sigue en una persona.
            </h2>
          </div>
          <div className="rule-grid rule-grid--2 mt-20 md:mt-28">
            {systems.map((item) => (
              <article key={item.slug}>
                <p className="font-mono text-small text-[var(--fg-subtle)]">{item.index}</p>
                <h3 className="mt-8 font-display text-h3 font-semibold">
                  <Link href={`/servicios/${item.slug}/`}>{item.title}</Link>
                </h3>
                <p className="mt-[var(--space-6)] max-w-[36ch] text-body text-pretty text-[var(--fg-muted)]">
                  {item.text}
                </p>
                <ServiceLink href={`/servicios/${item.slug}/`} />
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
