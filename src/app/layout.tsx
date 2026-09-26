import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { DM_Mono, Inter } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { Analytics } from "@/components/seo/Analytics";
import { getSiteUrl } from "@/lib/site";
import { HOME_METADATA } from "@/lib/seo/metadata";
import "./globals.css";

const assetPrefix = process.env.GITHUB_PAGES === "true" ? "/Scelerity" : "";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
  variable: "--font-aspekta",
  weight: "100 900",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Users must always be able to zoom — never lock maximum-scale.
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#121214" },
    { media: "(prefers-color-scheme: light)", color: "#F7F6F3" },
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
    <html
      lang="es"
      suppressHydrationWarning
      data-theme="dark"
      className={`${inter.variable} ${aspekta.variable} ${dmMono.variable}`}
    >
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,300,0,-25&display=swap"
        />
        {/* beforeInteractive — prevents theme flash without blocking parser long */}
        <Script src={`${assetPrefix}/theme-init.js`} strategy="beforeInteractive" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Scelerity Blog RSS"
          href={`${getSiteUrl()}/feed.xml`}
        />
      </head>
      <body className="antialiased">
        <div className="page-bed" aria-hidden="true" />
        <div className="page-grain" aria-hidden="true" />
        <div className="relative z-[2] min-h-dvh">
          <SiteJsonLd />
          <Analytics />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
