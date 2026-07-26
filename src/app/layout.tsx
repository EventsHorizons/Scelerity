import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Scelerity — Velocidad con precisión",
  description:
    "Diseño y producto digital de alto rendimiento. Craft, velocidad y precisión.",
  openGraph: {
    title: "Scelerity",
    description: "Velocidad con precisión.",
    type: "website",
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
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
