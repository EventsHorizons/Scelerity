import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { Analytics } from "@/components/seo/Analytics";
import { getSiteUrl } from "@/lib/site";
import { HOME_METADATA } from "@/lib/seo/metadata";
import "./globals.css";

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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
};

const themeInit = `
(function(){
  try {
    var stored = localStorage.getItem('scelerity-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.dataset.theme = theme;
    var locale = localStorage.getItem('scelerity-locale');
    if (locale === 'es' || locale === 'en') document.documentElement.lang = locale;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
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
