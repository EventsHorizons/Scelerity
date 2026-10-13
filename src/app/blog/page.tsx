import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { BlogIndexClient } from "@/components/blog/BlogIndexClient";
import { getAllPosts } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Scelerity",
  description: "Textos sobre sitios, marcas, interfaces y marketing.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog — Scelerity",
    description: "Textos sobre sitios, marcas, interfaces y marketing.",
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
      <main id="main" className="page-rhythm">
        <Section id="blog-hero" cardTone="paper">
          <Container size="content">
            <p className="chapter-label">Notas</p>
            <h1 className="mt-8 font-display text-h1 font-semibold">Blog</h1>
            <p className="mt-8 max-w-[42ch] text-lead text-[var(--fg-muted)]">
              Textos sobre sitios, marcas, interfaces y marketing.
            </p>
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
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
