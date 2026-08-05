# Scelerity — Documento de Diseño

Tipografías, paleta de colores y tokens visuales del sistema de marca digital.

Fuente de verdad en código: `src/app/globals.css` · `src/app/layout.tsx`

---

## Identidad

| Atributo | Valor |
|----------|-------|
| Nombre | **Scelerity** |
| Tagline | Velocidad con precisión |
| Personalidad | Premium, técnico, cinético, limpio |
| Principios | Craft · Velocidad · Precisión |

---

## Tipografía

Tres familias vía `next/font` (Google Fonts), con `font-display: swap`.

### Familias

| Rol | Familia | Pesos | Variable CSS | Uso |
|-----|---------|-------|--------------|-----|
| **Display** | [Syne](https://fonts.google.com/specimen/Syne) | 600, 700, 800 | `--font-display` | Titulares, wordmark, CTAs grandes |
| **Body** | [DM Sans](https://fonts.google.com/specimen/DM+Sans) | 400, 500 | `--font-body` | Párrafos, UI, navegación |
| **Mono** | [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | 400, 500 | `--font-mono` | Eyebrows, índices, labels técnicos |

**Fallback:** `system-ui, sans-serif` (display/body) · `ui-monospace, monospace` (mono)

### Wordmark

```
Scelerity
```

- Familia: Syne
- Peso: **700**
- Letter-spacing: **−0.048em**
- Features: `kern`, `liga`, `calt`
- Nunca en mayúsculas: siempre **Scelerity**

### Escala tipográfica (fluida)

Cada paso escala entre móvil y desktop con `clamp()`.

| Token | Clase / uso | Móvil → Desktop | Line-height | Tracking |
|-------|-------------|-----------------|-------------|----------|
| `--text-hero` | Hero H1 | 44 → 96px | 0.96 | −0.04em |
| `--text-display` | Display | 36 → 72px | 1.00 | −0.04em |
| `--text-h2` | `text-h2` | 30 → 56px | 1.06 | −0.035em |
| `--text-title` | Títulos de card | 28 → 44px | 1.08 | −0.035em |
| `--text-h3` | `text-h3` | 22 → 32px | 1.16 | −0.03em |
| `--text-h4` | `text-h4` | 18 → 24px | 1.25 | −0.025em |
| `--text-sub` | Subtítulos | 20 → 32px | 1.32 | −0.02em |
| `--text-lead` | Lead / intro | 17 → 22px | 1.60 | — |
| `--text-body` | Cuerpo | 16 → 20px | 1.65 | — |
| `--text-small` | Small / nav | 14 → 16px | 1.55 | — |
| `--text-eyebrow` | Labels mono | 11 → 13px | 1.40 | **0.2em** uppercase |
| `--text-micro` | Micro / legal | 10 → 12px | 1.40 | — |

### Jerarquía de uso

| Elemento | Familia | Peso | Token |
|----------|---------|------|-------|
| Hero headline | Syne | 700–800 | `--text-hero` |
| Section H2 | Syne | 600–700 | `--text-h2` |
| Card / list title | Syne | 600 | `--text-h3` / `--text-h4` |
| Body copy | DM Sans | 400 | `--text-body` |
| Nav links | DM Sans | 400–500 | `--text-small` (~13px) |
| Chapter label | JetBrains Mono | 400–500 | `--text-eyebrow` + uppercase |
| Índices (01, 02…) | JetBrains Mono | 400 | `--text-micro` |

### Reglas tipográficas

1. Titulares siempre en **Syne** (`font-display`).
2. Cuerpo y UI siempre en **DM Sans**.
3. Labels técnicos / eyebrows siempre en **JetBrains Mono**, uppercase, tracking amplio.
4. Tracking negativo en display (−2.5% a −4%); positivo en eyebrows (+20%).
5. Formularios: `font-size: 1rem` mínimo (evitar zoom iOS).

---

## Paleta de colores

Sistema dual: **dark** (default) y **light**, conmutado por `html[data-theme]`.

### Dark mode (default)

| Token | Hex / valor | Uso |
|-------|-------------|-----|
| `--bg` | `#09090b` | Fondo de página |
| `--surface` | `#111216` | Superficies elevadas |
| `--card` | `#17191e` | Cards / paneles |
| `--fg` | `#f5f7fa` | Texto primario |
| `--fg-muted` | `#9ba3af` | Texto secundario |
| `--fg-subtle` | `#767e8b` | Labels, meta (WCAG AA ≥4.5:1) |
| `--border` | `rgba(255,255,255,0.06)` | Bordes suaves |
| `--border-strong` | `rgba(255,255,255,0.1)` | Bordes hover / activos |
| `--glass` | `rgba(255,255,255,0.03)` | Glass panel |
| `--glass-border` | `rgba(255,255,255,0.08)` | Borde glass |
| `--danger` | `#f87171` | Errores / alertas |
| `--cursor` | `#f5f7fa` | Cursor custom |
| `--accent-fg` | `#09090b` | Texto sobre acento |

### Light mode

| Token | Hex / valor | Uso |
|-------|-------------|-----|
| `--bg` | `#f3f4f6` | Fondo de página |
| `--surface` | `#ffffff` | Superficies |
| `--card` | `#e8eaef` | Cards |
| `--fg` | `#0c0d10` | Texto primario |
| `--fg-muted` | `#5b6472` | Texto secundario |
| `--fg-subtle` | `#667085` | Labels (WCAG AA) |
| `--border` | `rgba(12,13,16,0.08)` | Bordes |
| `--border-strong` | `rgba(12,13,16,0.14)` | Bordes fuertes |
| `--glass` | `rgba(255,255,255,0.72)` | Glass panel |
| `--glass-border` | `rgba(12,13,16,0.08)` | Borde glass |
| `--danger` | `#c02626` | Errores |
| `--cursor` | `#0c0d10` | Cursor |
| `--accent-fg` | `#f5f7fa` | Texto sobre acento |

### Acentos de marca (iguales en ambos temas)

| Nombre | Hex | Rol |
|--------|-----|-----|
| Violet | `#7c6cff` | Inicio del gradiente primario |
| Blue | `#5c8dff` | Acento principal / selection |
| Cyan | `#45c8ff` | Mid-tone energía |
| Mint | `#67f0c1` | Final / velocidad |
| Mint light | `#b7ffdf` | Aurora highlight |

```
Selection:  --selection-bg: #5c8dff
Glow:       --glow: rgba(92, 141, 255, 0.18)  /* dark */
            --glow: rgba(92, 141, 255, 0.14)  /* light */
```

### Gradientes

```css
/* Primary — CTAs, speed lines, brand energy */
--gradient-primary: linear-gradient(135deg, #7c6cff 0%, #5c8dff 35%, #45c8ff 70%, #67f0c1 100%);

/* Secondary */
--gradient-secondary: linear-gradient(135deg, #5c8dff, #7c6cff);

/* Accent */
--gradient-accent: linear-gradient(135deg, #45c8ff, #67f0c1);

/* Aurora — atmósfera / WebGL palette */
--gradient-aurora: linear-gradient(120deg, #7c6cff, #45c8ff, #67f0c1, #b7ffdf);
```

### Swatches rápidos

**Neutrales dark**

| | | | |
|---|---|---|---|
| `#09090b` bg | `#111216` surface | `#17191e` card | `#f5f7fa` fg |

**Neutrales light**

| | | | |
|---|---|---|---|
| `#f3f4f6` bg | `#ffffff` surface | `#e8eaef` card | `#0c0d10` fg |

**Acentos**

| | | | | |
|---|---|---|---|---|
| `#7c6cff` | `#5c8dff` | `#45c8ff` | `#67f0c1` | `#b7ffdf` |

---

## Radios y forma

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-lg` | 22px | Cards, secciones, paneles |
| `--radius-md` | 18px | Cards medias |
| `--radius-sm` | 14px | Inputs, chips |
| Botones | `rounded-full` | CTAs, pills |
| Header shell | 22px | Barra flotante |

---

## Espaciado

Escala fija + fluid:

| Token | Valor |
|-------|-------|
| `--space-1` … `--space-24` | 4px → 96px |
| `--space-fluid-sm` | clamp 16 → 28px |
| `--space-fluid-md` | clamp 28 → 56px |
| `--space-fluid-lg` | clamp 44 → 96px |
| `--space-fluid-xl` | clamp 64 → 144px |
| `--gutter` | clamp 20 → 96px |
| `--section-y` | clamp 64 → 120px |

---

## Logo

| Variante | Descripción |
|----------|-------------|
| **Lockup** | Isotipo + wordmark «Scelerity» |
| **Mark** | Solo isotipo (rayo / bolt) |
| **Wordmark** | Solo tipografía Syne |

- Color: `currentColor` (adapta a tema)
- Header light sobre hero oscuro: blanco
- Header scrolled / light pages: `--fg` (negro en light, blanco en dark)
- Gap mark ↔ wordmark (header): `0.72em`

---

## Accesibilidad

- Contraste texto: WCAG **AA** mínimo (`--fg-subtle` calibrado)
- Zoom: nunca bloquear `maximum-scale`
- Focus visible en controles interactivos
- `prefers-reduced-motion`: desactiva WebGL, Lenis y timelines GSAP
- Formularios: labels asociados, `aria-invalid`, errores anunciados

---

## Do / Don't

### Do

- Usar tokens CSS (`var(--fg)`, `var(--bg)`…), nunca hex sueltos en componentes
- Titulares en Syne; cuerpo en DM Sans
- Gradiente primario solo en CTAs y acentos cinéticos
- Mantener tracking negativo en display

### Don't

- No usar Inter, Roboto, Arial ni system como tipografía principal
- No escribir **SCELERITY** en mayúsculas
- No introducir púrpuras genéricos fuera de la paleta `#7c6cff → #67f0c1`
- No aplanar el fondo a un único color sólido sin atmósfera (gradientes / glass / ritmo dark-light)

---

## Referencia rápida en código

```tsx
// Tipografía
className="font-display text-h2 font-semibold"
className="text-body text-[var(--fg-muted)]"
className="font-mono text-micro uppercase tracking-[0.14em]"

// Color
className="bg-[var(--bg)] text-[var(--fg)]"
className="border border-[var(--glass-border)] bg-[var(--card)]"

// CTA
className="btn-gradient" // usa --gradient-primary
```

---

*Scelerity Design System — tipografía y color · agosto 2026*
