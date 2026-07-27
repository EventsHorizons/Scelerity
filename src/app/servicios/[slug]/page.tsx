import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/seo/ServicePageView";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/seo/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Servicio — Scelerity" };

  return buildPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/servicios/${service.slug}/`,
    keywords: service.keywords,
  });
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServicePageView service={service} />;
}
