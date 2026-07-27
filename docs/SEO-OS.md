# SEO Operating System (SEO OS) — Scelerity

Documentación del sistema SEO implementado para [scelerity.vercel.app](https://scelerity.vercel.app/).

---

## Resumen ejecutivo

El SEO OS de Scelerity es un ecosistema escalable que combina:

- **SEO técnico** automatizado (sitemap, robots, schema, canonical, OG)
- **Arquitectura de silos** por servicio y geografía
- **Content clusters** con blog editorial MDX
- **E-E-A-T** (nosotros, contacto, legal)
- **Analítica** configurable (GA4, GTM, Clarity)
- **Escalabilidad** — agregar servicio = un entry en `src/lib/seo/services.ts`

---

## Fase 1 — Auditoría SEO

| ID | Área | Problema | Prioridad | Estado |
|----|------|----------|-----------|--------|
| AUD-001 | Metadatos | Home sin canonical/OG | Alta | ✅ Fixed |
| AUD-002 | Metadatos | /soluciones/ incompleto | Alta | ✅ Fixed |
| AUD-003 | Schema | Sin Organization/WebSite global | Alta | ✅ Fixed |
| AUD-004 | Schema | FAQ sin FAQPage | Media | ✅ Fixed |
| AUD-005 | Arquitectura | Sin landing pages por servicio | Crítica | ✅ Fixed |
| AUD-006 | Arquitectura | Sin SEO local | Alta | ✅ Fixed |
| AUD-007 | E-E-A-T | Sin /nosotros/ ni /contacto/ | Media | ✅ Fixed |
| AUD-008 | Legal | Links legales en # | Media | ✅ Fixed |
| AUD-009 | Analítica | Sin GA4/GTM/Clarity | Alta | ✅ Fixed (env) |
| AUD-010 | i18n | Sin hreflang | Media | 🔲 Roadmap Q2 |
| AUD-011 | Blog | Sin archives por categoría | Media | 🔲 Roadmap |
| AUD-012 | Performance | images.unoptimized | Media | 🔲 Roadmap |

Datos completos: `src/lib/seo/audit.ts`

---

## Fase 2 — Arquitectura SEO

```
/
├── /                          Home + FAQ schema
├── /soluciones/               Planes y paquetes
├── /servicios/                Índice de servicios
│   ├── /diseno-web/
│   ├── /desarrollo-web/
│   ├── /desarrollo-apps/
│   ├── /seo/
│   ├── /branding/
│   ├── /marketing-digital/
│   ├── /inteligencia-artificial/
│   ├── /automatizacion/
│   └── /ecommerce/
├── /local/                    SEO local Florida
│   ├── /orlando/
│   ├── /miami/
│   ├── /tampa/
│   ├── /jacksonville/
│   └── /kissimmee/
├── /blog/                     Editorial MDX
├── /nosotros/                 E-E-A-T
├── /contacto/                 Conversión + LocalBusiness
├── /privacidad/
└── /terminos/
```

**Regla de escalabilidad:** nuevo servicio → añadir objeto en `SEO_SERVICES`. Nueva ciudad → añadir en `LOCAL_PAGES`. Sin tocar routing.

---

## Fase 3 — Keyword Map

Clasificación en `src/lib/seo/keywords.ts`:

- **P1** — Intención comercial (servicios + local)
- **P2** — Consideración / informational de soporte
- **P3** — Awareness / long-tail

Prioridad: intención comercial > volumen bruto.

Ejemplos P1:
- diseño web profesional → `/servicios/diseno-web/`
- agencia seo → `/servicios/seo/`
- agencia digital orlando → `/local/orlando/`

---

## Fase 4 — Content Clusters

| Hub | Spokes |
|-----|--------|
| Diseño Web | Landing pages, UX, Branding, Accesibilidad |
| Desarrollo | Apps, E-commerce, IA, Automatización, CWV |
| Marketing | SEO, Paid, Email, Analítica, Growth |

Definidos en `CONTENT_CLUSTERS` (`src/lib/seo/keywords.ts`).

---

## Fase 5 — Landing Pages SEO

Cada `/servicios/[slug]/` incluye:

- Hero optimizado + H1
- Problema / Solución
- Beneficios + casos de uso
- Tecnologías
- FAQ + FAQ schema
- Service schema
- Breadcrumbs
- Enlaces a servicios relacionados + blog
- CTA → `/contacto/`

Template: `src/components/seo/ServicePageView.tsx`

---

## Fase 6 — Blog Editorial

- 6 artículos publicados (MDX en `content/blog/`)
- Calendario 12 meses: `src/lib/seo/editorial.ts`
- Article schema: `ArticleJsonLd.tsx`
- Related articles por categoría/tags

**Próximo:** archives `/blog/categoria/[slug]/`

---

## Fase 7 — SEO Local

5 ciudades Florida con contenido único:
Orlando, Miami, Tampa, Jacksonville, Kissimmee

Cada página incluye:
- LocalBusiness schema
- Barrios/áreas específicas
- Servicios locales enlazados
- FAQ geo-específico

**Integrar:** Google Business Profile (manual, fuera de código)

---

## Fase 8 — SEO Técnico

| Elemento | Archivo |
|----------|---------|
| Sitemap dinámico | `src/app/sitemap.ts` |
| Robots.txt | `src/app/robots.ts` |
| Canonical | `buildPageMetadata()` |
| OG / Twitter | `buildPageMetadata()` |
| Organization | `SiteJsonLd` + layout |
| WebSite | `SiteJsonLd` |
| Service | Service pages + soluciones |
| FAQPage | Home + service/local pages |
| Article | Blog articles |
| LocalBusiness | Local + contacto |
| BreadcrumbList | Todas las páginas internas |
| RSS | `public/feed.xml` + `<link rel="alternate">` |

---

## Fase 9 — Performance

**Objetivos Lighthouse:**
- Performance ≥ 98
- Accessibility = 100
- Best Practices = 100
- SEO = 100

**Core Web Vitals:** LCP < 2s · CLS < 0.05 · INP < 150ms

**Implementado:**
- Static export (CDN)
- Font display swap
- Dynamic imports below-fold
- Reduced motion support

**Roadmap:**
- Pipeline imágenes locales AVIF
- Self-host blog covers
- Bundle analysis por ruta

---

## Fase 10 — E-E-A-T

| Señal | URL |
|-------|-----|
| Equipo / metodología | `/nosotros/` |
| Contacto completo | `/contacto/` |
| Política privacidad | `/privacidad/` |
| Términos | `/terminos/` |
| Casos / portfolio | `/#work` |
| FAQ | Home |

---

## Fase 11 — Conversión

CTAs por página:
- Home → `#contact` + formulario
- Servicios → `/contacto/`
- Blog → artículos + CTA soluciones
- Local → asesoría geo-específica

Eventos analíticos: `trackEvent()` en `Analytics.tsx`

---

## Fase 12 — Analítica

Variables en `.env`:

```env
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_CLARITY_ID=
```

**Configurar manualmente:**
1. Google Search Console → verificar dominio
2. GA4 → property + web stream
3. GTM → container + triggers (CTA, scroll, forms)
4. Microsoft Clarity → project ID

**KPIs recomendados:**
- Sesiones orgánicas
- Impresiones / CTR (GSC)
- Leads formulario / contacto
- Conversiones por servicio
- Posición media keywords P1

---

## Enlazado interno

Reglas automáticas:
- Cada servicio → 3 servicios relacionados + 2 artículos blog
- Cada local → 4 servicios + contacto
- Footer → soluciones, blog, servicios, legal
- Blog → servicios en CTA final

Nunca dejar orphan pages — todo en sitemap.

---

## Cómo agregar un servicio

1. Añadir entry en `src/lib/seo/services.ts`
2. Build → genera `/servicios/[slug]/` automáticamente
3. Sitemap lo incluye automáticamente
4. Añadir keywords en `keywords.ts`
5. Planificar artículo de soporte en `editorial.ts`

---

## Archivos clave

```
src/lib/seo/           — Core SEO OS
src/components/seo/    — UI + schema components
src/app/servicios/     — Service silo
src/app/local/         — Local SEO
docs/SEO-OS.md         — Esta documentación
```

---

## Roadmap Q2–Q4 2026

1. Rutas `/en/` + hreflang
2. Blog category archives
3. OG images dinámicas (`opengraph-image.tsx`)
4. Review schema + testimonios
5. VideoObject en artículos con video
6. Dashboard KPIs (Looker / GA4)

---

*Generado como parte del SEO Operating System de Scelerity — julio 2026*
