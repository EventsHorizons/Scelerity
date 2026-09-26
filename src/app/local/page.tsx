import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { LOCAL_PAGES } from "@/lib/seo/local";

export const metadata: Metadata = buildPageMetadata({
  title: "Presencia — Diseño, desarrollo y marketing",
  description:
    "Scelerity trabaja desde Bogotá y también en Orlando, Miami, Tampa, Jacksonville y Kissimmee. Diseño, desarrollo y marketing.",
  path: "/local/",
});

export default function LocalIndexPage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className="page-rhythm">
        <Section cardTone="paper">
          <Container size="content">
            <Breadcrumbs
              items={[
                { name: "Inicio", path: "/" },
                { name: "Presencia", path: "/local/" },
              ]}
              className="mb-16"
            />
            <p className="chapter-label">Cultural & creative marketing</p>
            <h1 className="mt-8 font-display text-h1 font-semibold">Presencia</h1>
            <p className="mt-8 measure text-lead text-[var(--fg-muted)]">
              Diseño, desarrollo y marketing desde Bogotá, y en estas ciudades cuando el proyecto está ahí.
            </p>
          </Container>
        </Section>

        <Section cardTone="light">
          <Container size="content">
            <ul className="rule-grid rule-grid--3">
              {LOCAL_PAGES.map((p) => (
                <li key={p.slug}>
                  <Link href={`/local/${p.slug}/`} className="group block">
                    <h2 className="font-display text-h3 font-semibold group-hover:opacity-70">
                      {p.city}, {p.region}
                    </h2>
                    <p className="mt-[var(--space-4)] text-body text-[var(--fg-muted)]">
                      {p.metaDescription}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
