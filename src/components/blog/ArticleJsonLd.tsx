import type { BlogPostMeta } from "@/lib/blog/format";
import { getSiteUrl } from "@/lib/site";

type ArticleJsonLdProps = {
  post: BlogPostMeta;
  url: string;
};

export function ArticleJsonLd({ post, url }: ArticleJsonLdProps) {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "Scelerity",
        url: base,
        logo: `${base}/favicon.svg`,
      },
      {
        "@type": "Person",
        "@id": `${base}/#author-${encodeURIComponent(post.author)}`,
        name: post.author,
        jobTitle: post.authorRole,
        worksFor: { "@id": `${base}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${base}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${base}/blog/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        image: [post.cover],
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: { "@id": `${base}/#author-${encodeURIComponent(post.author)}` },
        publisher: { "@id": `${base}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        articleSection: post.category,
        keywords: post.tags.join(", "),
        wordCount: undefined,
        timeRequired: `PT${post.readingMinutes}M`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
