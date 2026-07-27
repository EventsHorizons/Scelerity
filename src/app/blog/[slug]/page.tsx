import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { ArticleShare } from "@/components/blog/ArticleShare";
import { ArticleNav } from "@/components/blog/ArticleNav";
import { ArticleJsonLd } from "@/components/blog/ArticleJsonLd";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { Button } from "@/components/ui/Button";
import {
  categoryLabel,
  formatPostDate,
  getAdjacentPosts,
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo — Scelerity" };

  const url = `${getSiteUrl()}/blog/${post.slug}/`;

  return {
    title: `${post.title} — Scelerity`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);
  const { prev, next } = getAdjacentPosts(post.slug);
  const url = `${getSiteUrl()}/blog/${post.slug}/`;

  return (
    <>
      <SkipLink />
      <Header />
      <ArticleJsonLd post={post} url={url} />
      <main id="main">
        <Section className="pt-[calc(var(--header-h)+var(--space-fluid-lg))]">
          <Container size="content">
            <p className="chapter-label">
              {categoryLabel(post.category)} · {post.readingTime} de lectura
            </p>

            <h1 className="mt-[var(--space-6)] max-w-[18ch] text-balance font-display text-hero font-semibold">
              {post.title}
            </h1>

            <div className="mt-[var(--space-6)] flex flex-wrap items-center gap-x-4 gap-y-2 text-small text-[var(--fg-muted)]">
              <span>
                {post.author}
                <span className="text-[var(--fg-subtle)]">
                  {" "}
                  · {post.authorRole}
                </span>
              </span>
              <time dateTime={post.publishedAt}>
                {formatPostDate(post.publishedAt)}
              </time>
            </div>

            <ArticleShare
              url={url}
              title={post.title}
              className="mt-[var(--space-8)]"
            />

            <div className="relative mt-[var(--space-fluid-lg)] aspect-[21/9] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] sm:aspect-[2.2/1]">
              <Image
                src={post.cover}
                alt={post.coverAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
          </Container>
        </Section>

        <Section>
          <Container size="content" className="section-y-lg pt-[var(--space-fluid-md)]">
            <ArticleBody source={post.content} />

            <div className="mx-auto mt-[var(--space-fluid-lg)] max-w-[42rem] border-t border-[var(--border)] pt-[var(--space-fluid-md)]">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-h4 font-semibold">
                    {post.author}
                  </p>
                  <p className="mt-1 text-small text-[var(--fg-muted)]">
                    {post.authorRole}
                  </p>
                </div>
                <ArticleShare url={url} title={post.title} />
              </div>
            </div>

            <ArticleNav prev={prev} next={next} />

            <RelatedArticles
              posts={related}
              title="Artículos relacionados"
              readLabel="Leer artículo"
            />

            <div className="mt-[var(--space-fluid-xl)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--card)] px-[var(--space-6)] py-[var(--space-fluid-lg)] text-center sm:px-[var(--space-10)]">
              <h2 className="font-display text-h2 font-semibold text-balance">
                ¿Listo para aplicar esto a tu marca?
              </h2>
              <p className="mx-auto mt-[var(--space-4)] max-w-[40ch] text-body text-pretty text-[var(--fg-muted)]">
                Diseñamos, desarrollamos y activamos sistemas digitales con
                claridad y velocidad.
              </p>
              <div className="mt-[var(--space-8)] flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Button href="/soluciones/" size="lg">
                  Ver soluciones
                </Button>
                <Button href="/#contact" variant="secondary" size="lg">
                  Hablar con el equipo
                </Button>
              </div>
            </div>

            <BlogNewsletter
              title="Recibe lo esencial del Journal"
              body="Una entrega ocasional con ideas de producto, SEO y marketing."
              placeholder="tu@email.com"
              submit="Suscribirse"
              success="Gracias. Te avisaremos cuando publiquemos algo útil."
            />
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
