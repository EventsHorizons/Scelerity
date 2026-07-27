# Auditoría de Seguridad y Rendimiento — Scelerity

Auditoría y hardening aplicado **sin modificar diseño, UX ni arquitectura** (Next.js 15 static export).

---

## Resumen ejecutivo

| Área | Antes | Después |
|------|-------|---------|
| Headers HTTP | 4 headers básicos | HSTS, CSP, COOP, CORP + cache |
| Formulario | Validación regex cliente | Zod + honeypot + sanitize + rate limit |
| Env vars | Sin validación | Schema Zod en `lib/env.ts` |
| Theme init | Inline script | `public/theme-init.js` (CSP-friendly) |
| Dispositivos low-end | Solo media queries | `hardwareConcurrency` + `deviceMemory` |
| Lenis | Config fija | Tuning interno en hardware débil |
| Monitoreo | GA4/GTM/Clarity opcional | + Sentry CDN opcional |
| WebGL | IO + visibility | Ya implementado ✓ |

---

## Problemas encontrados y estado

### 🔴 Alta criticidad

| # | Problema | Impacto | Solución | Estado |
|---|----------|---------|----------|--------|
| S-01 | Sin CSP ni HSTS | XSS, downgrade HTTPS | `vercel.json` headers completos | ✅ |
| S-02 | Formulario sin sanitización server-side | XSS/injection al conectar API | Zod + sanitize + honeypot | ✅ cliente |
| S-03 | Sin rate limiting en formulario | Spam / abuse | sessionStorage 60s throttle | ✅ cliente |
| S-04 | Inline script en layout | CSP estricta imposible | `theme-init.js` externo | ✅ |
| P-01 | Lenis full power en hardware débil | CPU alta, jank | Detección cores/RAM | ✅ |

### 🟡 Media criticidad

| # | Problema | Impacto | Solución | Estado |
|---|----------|---------|----------|--------|
| S-05 | Env vars sin validar | Config inválida silenciosa | `getPublicEnv()` | ✅ |
| S-06 | npm audit 12 high (dev deps) | Riesgo en toolchain | Documentado — no fix force | 📋 |
| S-07 | Sin CSRF (static export) | Requiere API serverless | Roadmap Formspree+Turnstile | 📋 |
| S-08 | Sin cookies HttpOnly | N/A — usa localStorage | Documentado | ℹ️ |
| P-02 | `images.unoptimized: true` | CWV en blog Unsplash | Roadmap AVIF local | 📋 |
| P-03 | Sin Sentry | Errores JS no rastreados | CDN opcional vía env | ✅ |

### 🟢 Baja criticidad

| # | Problema | Impacto | Solución | Estado |
|---|----------|---------|----------|--------|
| S-09 | COEP no aplicado | Aislamiento cross-origin | Omitido — rompe Unsplash/analytics | ℹ️ |
| P-04 | JetBrains Mono sin preload | FOUT menor en mono | preload: false intencional | ✅ |
| P-05 | reCAPTCHA simulado | Bots sofisticados | UI intacta; Turnstile en roadmap | 📋 |

---

## Seguridad — Detalle

### Headers (`vercel.json`)

- **HSTS** — 2 años, preload
- **CSP** — self + analytics + Unsplash + Sentry; `unsafe-inline` solo en script/style (requerido por Next/React/Framer)
- **COOP** — `same-origin-allow-popups` (compatible con GA)
- **CORP** — `same-site`
- **Permissions-Policy** — cámara, mic, geo deshabilitados

### Formulario (`ContactForm.tsx`)

- Validación **Zod** (`lib/security/contact-schema.ts`)
- **Honeypot** campo `website` oculto
- **Sanitize** strip HTML, límites de longitud
- **Rate limit** 1 envío / 60s (sessionStorage)
- **XSS** — sin `dangerouslySetInnerHTML` en inputs

> **Nota:** Static export no tiene API routes. CSRF, rate limit server-side y Turnstile requieren backend (Formspree, Vercel Function, etc.) — arquitectura intacta, listo para conectar `parsed.data`.

### Variables de entorno

Solo `NEXT_PUBLIC_*` en cliente. Secretos nunca en bundle.

```typescript
// src/lib/env.ts
getPublicEnv() // valida GA4, GTM, Clarity, Sentry, GSC
```

### Cookies

Theme/locale en **localStorage** — no cookies de sesión. Sin datos sensibles en browser storage.

### Dependencias

```
npm audit → 12 high (eslint/minimatch/postcss/sharp en dev/build chain)
```

No se aplicó `npm audit fix --force` — rompería Next 15. Monitorear updates de Next.js.

---

## Rendimiento — Detalle

### Ya optimizado (sin cambios visuales)

- **Mobile** — sin Lenis, sin cursor custom, sin WebGL (`useDeviceProfile`)
- **WebGL** — `frameloop="never"` fuera de viewport + Page Visibility API
- **GSAP** — `gsap.context()` + cleanup en Hero/SplitText
- **Code splitting** — dynamic imports en secciones below-fold
- **Fuentes** — `next/font`, `display: swap`, mono sin preload

### Mejoras aplicadas

- **Low-power detection** — ≤4 cores o ≤4 GB RAM → menos animaciones/WebGL/Lenis tuning
- **Lenis** — `lerp`, `wheelMultiplier` reducidos en hardware débil (misma sensación, menos CPU)
- **Preconnect** — `images.unsplash.com` en layout
- **Cache** — assets immutable 1 año; feed.xml 1h

### Roadmap (sin cambiar UX)

| Item | Beneficio estimado |
|------|-------------------|
| Imágenes AVIF locales | LCP −200–400ms |
| OG images estáticas | Social + SEO |
| Bundle analyzer | −10–20 KB JS |
| Turnstile en form | Anti-spam real |

---

## Accesibilidad

Ya cumple (sin regresiones):

- Skip link, ARIA en FAQ/form/nav
- `prefers-reduced-motion` → desactiva animaciones/WebGL/Lenis
- Contraste `--fg-subtle` ajustado WCAG AA
- Zoom no bloqueado en viewport

---

## Monitoreo

| Herramienta | Activación |
|-------------|------------|
| GA4 | `NEXT_PUBLIC_GA4_ID` |
| GTM | `NEXT_PUBLIC_GTM_ID` |
| Clarity | `NEXT_PUBLIC_CLARITY_ID` |
| Sentry | `NEXT_PUBLIC_SENTRY_DSN` |
| Search Console | `NEXT_PUBLIC_GSC_VERIFICATION` |

Eventos custom: `trackEvent()` · Errores: `captureError()`

---

## Objetivos Lighthouse

| Métrica | Objetivo | Notas |
|---------|----------|-------|
| Performance | ≥98 | Limitado por WebGL hero + Framer en desktop |
| Accessibility | 100 | Mantener |
| Best Practices | 100 | Headers mejorados |
| SEO | 100 | SEO OS ya implementado |
| LCP | <2s | Preconnect + static export ayudan |
| CLS | <0.05 | Fonts swap, sin layout shift hero |
| INP | <150ms | Lenis solo desktop |

---

## Archivos modificados

```
vercel.json                    — security headers
public/theme-init.js           — CSP-friendly boot
src/lib/env.ts                 — env validation
src/lib/security/*             — sanitize, zod, rate limit
src/components/ui/ContactForm  — hardening
src/hooks/useDeviceProfile.ts  — low-power detection
src/components/motion/SmoothScroll.tsx — Lenis tuning
src/components/seo/Analytics.tsx — Sentry
src/app/layout.tsx             — preconnect, external script, GSC
.env.example                   — Sentry DSN
```

---

## Validación

```bash
npm run build   # debe pasar
npm run lint    # sin errores nuevos
```

Probar localmente:
- Formulario honeypot (rellenar `website` vía devtools → no envía)
- Rate limit (doble submit <60s)
- Theme flash (recarga → sin FOUC)
- Reduced motion (OS setting → sin WebGL)

---

*Scelerity Security & Performance Audit — julio 2026*
