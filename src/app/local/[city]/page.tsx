import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalPageView } from "@/components/seo/LocalPageView";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getAllLocalSlugs, getLocalBySlug } from "@/lib/seo/local";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return getAllLocalSlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const page = getLocalBySlug(city);
  if (!page) return { title: "Local — Scelerity" };

  return buildPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/local/${page.slug}/`,
    keywords: [`agencia digital ${page.city}`, `diseño web ${page.city}`, `seo ${page.city}`],
  });
}

export default async function LocalCityPage({ params }: Props) {
  const { city } = await params;
  const page = getLocalBySlug(city);
  if (!page) notFound();

  return <LocalPageView page={page} />;
}
