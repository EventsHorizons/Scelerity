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
  title: "Agencia Digital Local — Florida y Worldwide",
  description:
    "Scelerity atiende Orlando, Miami, Tampa, Jacksonville, Kissimmee y clientes worldwide. Diseño, desarrollo y marketing digital.",
  path: "/local/",
});

export default function LocalIndexPage() {
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
                { name: "Local", path: "/local/" },
              ]}
              className="mb-[var(--space-6)]"
            />
            <h1 className="font-display text-h1 font-bold text-balance">
              Presencia local, alcance global
            </h1>
            <p className="measure mt-[var(--space-6)] text-body-lg text-[var(--fg-muted)]">
              Operamos remoto con enfoque local en Florida. Cada ciudad tiene contenido único — nunca duplicado.
            </p>
          </Container>
        </Section>

        <Section cardTone="light">
          <Container size="content" className="section-y">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {LOCAL_PAGES.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/local/${p.slug}/`}
                    className="block rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)] p-[var(--space-6)] transition-colors hover:border-[var(--border-strong)]"
                  >
                    <h2 className="font-display text-h4 font-semibold">
                      {p.city}, {p.region}
                    </h2>
                    <p className="mt-2 text-small text-[var(--fg-muted)]">
                      {p.metaDescription.slice(0, 100)}…
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
