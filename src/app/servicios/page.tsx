import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { SEO_SERVICES, PILLAR_LABELS, type SeoPillar } from "@/lib/seo/services";

export const metadata: Metadata = buildPageMetadata({
  title: "Servicios — Diseño, Desarrollo y Marketing Digital",
  description:
    "Servicios de Scelerity: diseño web, desarrollo de software, SEO, branding, marketing digital, IA y automatización.",
  path: "/servicios/",
  keywords: ["servicios digitales", "agencia digital", "diseño web", "desarrollo web", "seo"],
});

const PILLAR_ORDER: SeoPillar[] = ["diseno", "desarrollo", "marketing"];

export default function ServiciosIndexPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Section className="pt-[calc(var(--header-h)+var(--space-fluid-lg))]">
          <Container size="content">
            <Breadcrumbs
              items={[
                { name: "Inicio", path: "/" },
                { name: "Servicios", path: "/servicios/" },
              ]}
              className="mb-[var(--space-6)]"
            />
            <h1 className="font-display text-h1 font-bold text-balance">
              Servicios digitales con velocidad y precisión
            </h1>
            <p className="measure mt-[var(--space-6)] text-body-lg text-[var(--fg-muted)]">
              Tres pilares — diseño, desarrollo y marketing — conectados en una sola dirección.
            </p>
          </Container>
        </Section>

        {PILLAR_ORDER.map((pillar, i) => {
          const items = SEO_SERVICES.filter((s) => s.pillar === pillar);
          return (
            <Section key={pillar} cardTone={i % 2 === 0 ? "light" : undefined}>
              <Container size="content" className="section-y">
                <h2 className="font-display text-h2 font-semibold">
                  {PILLAR_LABELS[pillar]}
                </h2>
                <ul className="mt-[var(--space-fluid-md)] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/servicios/${s.slug}/`}
                        className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)] p-[var(--space-6)] transition-[border-color,box-shadow] hover:border-[var(--border-strong)] hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)]"
                      >
                        <h3 className="font-display text-h4 font-semibold">{s.title}</h3>
                        <p className="mt-2 flex-1 text-small text-[var(--fg-muted)]">
                          {s.metaDescription.slice(0, 120)}…
                        </p>
                        <span className="mt-4 text-small text-[var(--fg-subtle)]">
                          Ver servicio →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Container>
            </Section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
