import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { Analytics } from "@/components/seo/Analytics";
import { getSiteUrl } from "@/lib/site";
import { HOME_METADATA } from "@/lib/seo/metadata";
import "./globals.css";

const assetPrefix = process.env.GITHUB_PAGES === "true" ? "/Scelerity" : "";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  preload: true,
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: true,
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Users must always be able to zoom — never lock maximum-scale.
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  ...HOME_METADATA,
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning data-theme="dark">
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        {/* beforeInteractive — prevents theme flash without blocking parser long */}
        <Script src={`${assetPrefix}/theme-init.js`} strategy="beforeInteractive" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Scelerity Blog RSS"
          href={`${getSiteUrl()}/feed.xml`}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
      >
        <SiteJsonLd />
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
