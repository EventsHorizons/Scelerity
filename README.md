# SCELERITY

Landing page premium para SCELERITY — agencia de diseño, desarrollo, branding e IA.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS 4
- Framer Motion · GSAP + ScrollTrigger · Lenis
- Three.js · React Three Fiber
- Lucide Icons

## Features

- Modo claro / oscuro
- Idioma ES / EN
- Smooth scroll (Lenis + GSAP)
- Cursor personalizado (desktop)
- Hero 3D ligero
- Secciones: servicios, portafolio, proceso, FAQ, CTA
- Arquitectura modular lista para producción

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Estructura

```
src/
  app/                 # App Router
  components/
    canvas/            # WebGL / R3F
    layout/            # Header, Footer, Providers
    motion/            # Cursor, Lenis, Reveal, SplitText
    sections/          # Secciones de la landing
    ui/                # Primitivos UI
  context/             # Theme + Locale
  data/                # Copy bilingüe
  hooks/
  lib/
```
