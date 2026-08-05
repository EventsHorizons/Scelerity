# Mockups de Producto — Portafolio Scelerity

Fotografía de estudio hiperrealista. Sin arte conceptual.

Assets: `public/projects/`

---

## Principio

Cada imagen debe parecer una **foto real** de un proyecto en Behance / Apple Keynote / Stripe.

Si alguien la ve, debe pensar: *“Este proyecto existe.”*

---

## Serie

| # | Proyecto | Archivo | Escena | UI / color (solo en pantalla) |
|---|----------|---------|--------|-------------------------------|
| 01 | **Aether** | `aether.jpg` | MacBook en escritorio oak, pared concreto, luz lateral | SaaS dashboard — navy, violeta, cian |
| 02 | **Northline** | `northline.jpg` | Monitor + iPhone en mesa madera, pared gris cálido | Brand site — charcoal, arena, ámbar |
| 03 | **Vespera** | `vespera.jpg` | Dual iPhone en piedra/mármol, fondo cream | App — cream, wine, champagne |

Fondos siempre sobrios. El color vive en la interfaz.

---

## Reglas de dirección

**Incluir**
- Laptop / monitor / phone reales
- Mesa minimalista, luz natural de estudio
- UI legible, alineada, funcional
- Materiales: aluminio, vidrio, OLED, sombras reales

**Prohibido**
- Objetos flotantes, partículas, neón
- Fondos abstractos o surrealistas
- Composiciones imposibles / estilo Midjourney
- Ilustraciones o edificios flotantes

---

## Uso en web

- `#work` — grid 3 cards (fotos de producto)
- `#featured` — **FeaturedProductReel**: showcase en vivo (navegador + scroll UI Aether, loop ~9s, fondo `#09090b`). No es un GIF de IA: es motion real CSS/React estilo Apple / Stripe / Linear.

```ts
cover: "/projects/aether.jpg"
coverAlt: "…"
```

---

*Scelerity — Product Photography Covers · agosto 2026*
