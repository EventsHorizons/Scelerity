import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { BlogIndexClient } from "@/components/blog/BlogIndexClient";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { getAllPosts } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal — Scelerity",
  description:
    "Ideas sobre diseño, desarrollo, marketing digital e inteligencia artificial. El journal editorial de Scelerity.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Journal — Scelerity",
    description:
      "Ideas sobre diseño, desarrollo, marketing digital e inteligencia artificial.",
    type: "website",
    url: `${getSiteUrl()}/blog/`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Section id="journal-hero" className="pt-[calc(var(--header-h)+var(--space-fluid-lg))]">
          <Container size="content" className="pb-[var(--space-fluid-lg)]">
            <p className="chapter-label">Journal</p>
            <div className="mt-[var(--space-6)] grid items-end gap-[var(--space-fluid-lg)] lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h1 className="text-balance font-display text-hero font-semibold">
                  Ideas que construyen marcas más claras.
                </h1>
                <p className="mt-[var(--space-6)] max-w-[40ch] text-sub text-pretty text-[var(--fg-muted)]">
                  Estrategia, producto y marketing — escritos como los usamos
                  en proyectos reales.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] lg:col-span-5">
                <Image
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80"
                  alt="Escritorio editorial con portátil y café"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container size="content" className="section-y-lg pt-0">
            <BlogIndexClient
              posts={posts}
              labels={{
                searchPlaceholder: "Buscar artículos…",
                all: "Todos",
                sortNewest: "Más recientes",
                sortOldest: "Más antiguos",
                empty: "No encontramos artículos con esos filtros.",
                readLabel: "Leer artículo",
                results: "{n} artículos",
              }}
            />

            <BlogNewsletter
              title="Recibe lo esencial del Journal"
              body="Una entrega ocasional con ideas de producto, SEO y marketing. Sin ruido."
              placeholder="tu@email.com"
              submit="Suscribirse"
              success="Gracias. Te avisaremos cuando publiquemos algo útil."
            />

            <p className="mt-[var(--space-10)] text-center text-small text-[var(--fg-subtle)]">
              ¿Quieres aplicar esto a tu marca?{" "}
              <Link
                href="/#contact"
                className="text-[var(--fg)] underline underline-offset-4"
              >
                Hablemos
              </Link>
              .
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
