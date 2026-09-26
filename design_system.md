# Sistema de diseño para página web

Este documento es el sistema completo para vestir una página web con esta identidad. Primero está la visión y la forma de componer la página. Después están todos los valores, los componentes y el CSS listo para pegar.

---

## 1. Visión

La página es una cama de un solo color, con grano casi invisible, y tipo en un solo tiza. La profundidad no sale de líneas ni de sombras fuertes: sale de un relleno un poco más claro que el fondo, y del espacio entre bloques.

El acento es la tinta. En oscuro, el botón principal es tiza `#F2F2F7` sobre void `#121214`. En claro, el botón principal es ink `#1C1C1E` sobre papel `#F7F6F3`. No hay un color de marca aparte del par void/tiza.

Los controles son píldoras. Los bloques de contenido son rectángulos de 16px. Los paneles flotantes son de 20px. El texto de interfaz es Inter, sólido, sin degradado y sin brillo.

El movimiento es corto y se asienta. Un press baja a escala `0.96` y opacidad `0.85`. Una pantalla entra 6px desde abajo en 380ms y termina sin transform. Si el usuario pide menos movimiento, las duraciones pasan a 0.

Una página web con este sistema se lee así, de fuera hacia dentro:

1. El viewport es el void, de borde a borde.
2. Encima, un grano al 3% en `mix-blend-mode: overlay`.
3. El contenido vive en una columna de `80rem` como máximo, con aire lateral de 16px en móvil, 24px desde 768px y 32px desde 1024px.
4. La cabecera es transparente y va en el flujo de la página. El ítem activo es una píldora con relleno al 6%.
5. El titular es Display, 24–36px, peso 600, tracking `-0.03em`.
6. El párrafo de apoyo es body, 17px, peso 400, line-height 1.5, color secundario `#AEAEB2`, ancho máximo 36rem.
7. La acción principal es una píldora tiza. La secundaria es un relleno al 10%, sin borde.
8. Las secciones se separan 32px. Una tarjeta es fondo al 6% y radio 16px. Entre tarjetas no hay línea.
9. Un panel que flota (menú, diálogo) es una lámina de 20px de radio, ancho máximo 32rem, scrim `rgba(8, 8, 10, 0.55)`.

---

## 2. Cómo se arma una página

### 2.1 Capas

| Capa | z-index | Qué es |
| --- | --- | --- |
| Fondo | 0 | `#121214` a pantalla completa, `position: fixed; inset: 0` |
| Grano | 1 | ruido 180×180, opacidad 0.03, `mix-blend-mode: overlay`, no recibe clics |
| Página | 2 | columna, `min-height: 100dvh` |
| Cabecera | 20 | transparente, en el flujo |
| Menú flotante | 25 | píldora o lámina |
| Scrim | 28 | `rgba(8, 8, 10, 0.55)` |
| Diálogo | 30 | radio 20px, sombra `0 16px 48px rgba(0, 0, 0, 0.35)` |
| Aviso | 60 | — |

```css
.page-bed {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: #121214;
  pointer-events: none;
}
.page-grain {
  position: fixed;
  inset: 0;
  z-index: 1;
  opacity: 0.03;
  mix-blend-mode: overlay;
  background-size: 180px 180px;
  pointer-events: none;
}
.page {
  position: relative;
  z-index: 2;
  max-width: 80rem;
  margin-inline: auto;
  padding: 16px;
  color: #f2f2f7;
  font-family: Inter, system-ui, sans-serif;
  font-size: 17px;
  line-height: 1.5;
  letter-spacing: -0.01em;
}
@media (min-width: 768px) { .page { padding-inline: 24px; } }
@media (min-width: 1024px) { .page { padding-inline: 32px; } }
```

### 2.2 Cabecera web

Transparente. Sin borde inferior. No se pega al scroll.

| Pieza | Valor |
| --- | --- |
| Alto mínimo del ítem | 44px |
| Padding del ítem | 8px 12px |
| Gap icono–texto | 8px |
| Gap entre ítems | 4px |
| Tipo | 14px, peso 400, color inactivo `rgba(242, 242, 247, 0.72)` |
| Activo | color `#F2F2F7`, fondo `rgba(242, 242, 247, 0.06)`, radio 9999px |
| Hover | color `#F2F2F7` |
| Marca | 14px, peso 600, tracking `0.18em`, mayúsculas, line-height 1 |
| Padding superior | `env(safe-area-inset-top) + 12px` |
| Padding inferior | 12px en desktop, 8px en la marca móvil |

En una web ancha, la navegación es una fila horizontal dentro de los 80rem. Por debajo de 1024px puede convertirse en una píldora fija abajo: blur 24px, fondo al 92% de `#1C1C1E`, ítems de 48px, separación inferior 24px + safe area.

### 2.3 Bloque de apertura

| Pieza | Valor |
| --- | --- |
| Kicker | 11px, peso 500, tracking `0.06em`, mayúsculas, color `#8E8E93` |
| Titular | `clamp(24px, 1.25rem + 1.5vw, 36px)`, peso 600, line-height 1.15, tracking `-0.03em`, color `#F2F2F7` |
| Apoyo | 17px, peso 400, line-height 1.45, color `#AEAEB2`, `max-width: 36rem` |
| Gap kicker–título–apoyo | 12px |
| Gap hacia los botones | 16px |
| Gap entre botones | 8px |

### 2.4 Sección

| Pieza | Valor |
| --- | --- |
| Separación entre secciones | 32px |
| Título de sección | 18–22px, peso 600, line-height 1.25, tracking `-0.01em` |
| Gap título–contenido | 12px |
| Tarjeta | fondo `rgba(242, 242, 247, 0.06)`, radio 16px, padding 12px 16px |
| Gap entre tarjetas | 4px si es lista apretada, 12px si es grupo |
| Hover de tarjeta | fondo `rgba(242, 242, 247, 0.10)` |
| Tarjeta seleccionada | fondo `rgba(242, 242, 247, 0.12)` |
| Ancho de lectura | 40rem, 48rem o 64rem según la sección. El máximo de la página es 80rem |

### 2.5 Formulario en la página

El campo mide 44px de alto, padding horizontal 16px, radio 12px, fondo `#2C2C2E`, borde 0. El placeholder es `#8E8E93`. El foco es un outline de 2px en `#F2F2F7` con offset de 2px. La etiqueta es 13px, peso 500, tracking `0.01em`, y queda 8px encima del campo. El botón de envío es la píldora primaria, alto 40px, o 48px si es la acción única del bloque.

### 2.6 Diálogo

Centrado o anclado al borde inferior. Ancho `min(32rem, 100% - 16px)`. Radio 20px. Padding `12px 16px 16px`. Gap interno 16px. Fondo `#121214` o `#2C2C2E`. Sombra `0 16px 48px rgba(0, 0, 0, 0.35)`. El cierre es un círculo de 44px con fondo al 6%.

---

## 3. Color

### 3.1 Oscuro

| Rol en la página | HEX | RGB |
| --- | --- | --- |
| Fondo de viewport | `#121214` | 18, 18, 20 |
| Superficie | `#1C1C1E` | 28, 28, 30 |
| Superficie secundaria | `#242426` | 36, 36, 38 |
| Campo y lámina elevada | `#2C2C2E` | 44, 44, 46 |
| Hover de superficie | `#323234` | 50, 50, 52 |
| Active de superficie | `#3A3A3C` | 58, 58, 60 |
| Texto y botón primario | `#F2F2F7` | 242, 242, 247 |
| Hover del tiza | `#FAFAFA` | 250, 250, 250 |
| Active del tiza | `#D1D1D6` | 209, 209, 214 |
| Texto secundario | `#AEAEB2` | 174, 174, 178 |
| Texto terciario, placeholder, deshabilitado | `#8E8E93` | 142, 142, 147 |
| Texto sobre botón primario | `#1C1C1E` | 28, 28, 30 |

| Relleno | Valor |
| --- | --- |
| Suave | `rgba(242, 242, 247, 0.06)` |
| Fuerte | `rgba(242, 242, 247, 0.10)` |
| Seleccionado | `rgba(242, 242, 247, 0.12)` |
| Texto inactivo | `rgba(242, 242, 247, 0.72)` |
| Scrim de página | `rgba(18, 18, 20, 0.55)` |
| Scrim de diálogo | `rgba(8, 8, 10, 0.55)` |
| Fondo de control deshabilitado | `rgba(242, 242, 247, 0.08)` |
| Dock | `rgba(18, 18, 20, 0.82)` o superficie al 92% con blur 24px |
| Handle | `rgba(242, 242, 247, 0.28)` |

| Estado | HEX | RGB |
| --- | --- | --- |
| Éxito | `#7C8A7A` | 124, 138, 122 |
| Advertencia | `#C4A574` | 196, 165, 116 |
| Error | `#C45C4A` | 196, 92, 74 |
| Info | `#8A9AAA` | 138, 154, 170 |

Opacidades: deshabilitado `0.4`, muted `0.72`, sutil `0.85`, overlay `0.5`, grano `0.03`.

### 3.2 Claro

| Rol | HEX | RGB |
| --- | --- | --- |
| Fondo | `#F7F6F3` | 247, 246, 243 |
| Superficie y lámina | `#FFFFFF` | 255, 255, 255 |
| Superficie secundaria | `#F0EFEB` | 240, 239, 235 |
| Hover | `#EAE9E4` | 234, 233, 228 |
| Active | `#E2E1DB` | 226, 225, 219 |
| Texto y botón primario | `#1C1C1E` | 28, 28, 30 |
| Hover del ink | `#0A0A0C` | 10, 10, 12 |
| Texto secundario | `#3A3A3C` | 58, 58, 60 |
| Texto terciario | `#636366` | 99, 99, 102 |
| Placeholder | `#8E8E93` | 142, 142, 147 |
| Texto sobre botón primario | `#F2F2F7` | 242, 242, 247 |
| Éxito | `#5F6D5E` | 95, 109, 94 |
| Advertencia | `#9A7D4F` | 154, 125, 79 |
| Error | `#A34A3C` | 163, 74, 60 |
| Info | `#5F6D7A` | 95, 109, 122 |

Rellenos claros: suave `rgba(28, 28, 30, 0.04)`, fuerte `0.07`, seleccionado `0.10`. Grano `0.02`. Dock `rgba(255, 255, 255, 0.92)`.

Si una zona de la web es un lienzo a pantalla completa, se queda en `#121214` con texto `#F2F2F7` aunque el resto de la página esté en claro. El velo de ese lienzo, de abajo arriba: `rgba(18, 18, 20, 0.97)` al 0%, `0.78` al 32%, `0.35` al 62%, transparente al 100%.

---

## 4. Tipografía

Una familia para todo, incluido el código: Inter. Pesos cargados: 300, 400, 500, 600, 700.

```css
font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
-webkit-font-smoothing: antialiased;
```

| Rol en la web | Tamaño | Peso | Line-height | Tracking | Color oscuro |
| --- | --- | --- | --- | --- | --- |
| Display / hero | `clamp(1.5rem, 1.25rem + 1.5vw, 2.25rem)` = 24–36px | 600 | 1.15 | `-0.03em` | `#F2F2F7` |
| H1 | `clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)` = 22–28px | 600 | 1.2 | `-0.02em` | `#F2F2F7` |
| H2 de sección | `clamp(1.125rem, 1.05rem + 0.4vw, 1.375rem)` = 18–22px | 600 | 1.25 | `-0.01em` | `#F2F2F7` |
| H3 | 17px | 500 | 1.35 | `-0.01em` | `#F2F2F7` |
| Body | 17px | 400 | 1.5 | `-0.01em` | `#F2F2F7` |
| Body de apoyo | 17px | 400 | 1.45 | `-0.01em` | `#AEAEB2` |
| Body pequeño / botón | 14px | 400 el texto, 600 el botón | 1.45 | `-0.01em` | según pieza |
| Label de campo | 13px | 500 | 1.35 | `0.01em` | `#AEAEB2` |
| Caption | 12px | 400 | 1.4 | `-0.01em` | `#AEAEB2` |
| Meta / kicker | 11px | 500 | 1.35 | `0.06em` | `#8E8E93`, mayúsculas |
| Marca | 14px | 600 | 1 | `0.18em` | `#F2F2F7`, mayúsculas |
| Cita | 18px | 400 | 1.45 | `-0.01em` | `#F2F2F7` |

Sobre un lienzo oscuro a sangre:

| Pieza | Tamaño | Peso | Line-height | Tracking | Color |
| --- | --- | --- | --- | --- | --- |
| Nombre | 13px | 500 | 1.25 | `0.01em` | chalk al 86% |
| Título | `clamp(16.8px, 2.8vw, 19.2px)`; en móvil 16.8px | 600 | 1.2 | `-0.03em` | `#F2F2F7` |
| Párrafo | 14.4px; en móvil 14px | 400 | 1.48 | `-0.014em` | chalk al 76% |
| Enlace de acción | 13px | 560 | — | `-0.01em` | `#F2F2F7`, subrayado 1px, offset `0.22em`, color del subrayado chalk al 45% |
| Meta de una línea | 11.5px | 500 | 1.35 | `0.04em` | `#AEAEB2` |

El título del lienzo se corta a 2 líneas. El párrafo a 2, y a 3 bajo 1024px. Hover del título: subrayado 1px, offset `0.16em`, color chalk al 32%.

---

## 5. Componentes

### 5.1 Botón primario

Es la única acción llena de la vista.

| Propiedad | Valor |
| --- | --- |
| Alto | 40px. Si es la acción única de un bloque, 48px |
| Padding horizontal | 20px |
| Radio | 9999px |
| Borde | 0 |
| Fondo oscuro | `#F2F2F7` |
| Texto oscuro | `#1C1C1E` |
| Fondo claro | `#1C1C1E` |
| Texto claro | `#F2F2F7` |
| Tipo | 14px, peso 600, line-height 1.45 |
| Gap con icono | 8px |
| Hover | opacidad 0.92 |
| Active | escala 0.96, opacidad 0.85 |
| Disabled | opacidad 0.4, cursor not-allowed |
| Focus | outline 2px del color de texto de la página, offset 3px |
| Transición | 140ms, `cubic-bezier(0.22, 1, 0.36, 1)` |

### 5.2 Botón secundario

| Propiedad | Valor |
| --- | --- |
| Fondo oscuro | `rgba(242, 242, 247, 0.10)` |
| Texto | `#F2F2F7` |
| Hover | `rgba(242, 242, 247, 0.12)` |
| Fondo claro | `rgba(28, 28, 30, 0.07)` |
| Hover claro | `rgba(28, 28, 30, 0.10)` |
| Resto | igual que el primario: píldora, 40px, peso 600, press 0.96 / 0.85 |

### 5.3 Botón ghost

Fondo transparente. Texto secundario (`#AEAEB2` / `#3A3A3C`). Hover: texto primario y fondo suave (`0.06` oscuro, `0.04` claro).

### 5.4 Botón de icono

44×44, radio 9999px, fondo transparente. Hover: relleno suave. Active: escala 0.96, opacidad 0.85. Activo: relleno seleccionado.

### 5.5 Chip

Padding `6.4px 13.6px`, radio 9999px, fondo suave, texto 13px peso 500 color secundario. Hover: relleno fuerte y texto primario. Activo: relleno seleccionado.

### 5.6 Campo

| Propiedad | Valor |
| --- | --- |
| Alto | 44px |
| Padding horizontal | 16px |
| Radio | 12px |
| Borde | 0 |
| Fondo oscuro | `#2C2C2E` |
| Fondo claro | `#FFFFFF` |
| Texto | 17px, peso 400 |
| Placeholder | `#8E8E93` |
| Focus | outline 2px, offset 2px, color acento |
| Transición | fondo, color y opacidad, 140ms |

### 5.7 Tarjeta

| Propiedad | Valor |
| --- | --- |
| Fondo | relleno suave |
| Radio | 16px |
| Padding | 12px 16px |
| Borde | 0 |
| Sombra | ninguna en reposo |
| Hover | relleno fuerte, 140ms |
| Seleccionada | relleno `0.12` / `0.10` |
| Press | opacidad 0.72 |

### 5.8 Vacío

Padding `40px 16px`. El icono va en un círculo de 44px, fondo `#323234`, color `#AEAEB2`. El texto queda centrado, ancho máximo 448px, gap 12px.

### 5.9 Carga

Barra de 36×2px, radio pleno, a un 28% de la altura del bloque. Opacidad de 0.2 a 0.7 y escala X de 0.7 a 1, 900ms, ida y vuelta.

Skeleton: barrido entre `#323234` y `#1C1C1E`, `background-size: 200% 100%`, 1200ms. Un punto de 8px pulsa de opacidad 0.35 a 1 y de escala 0.9 a 1 en 380ms.

---

## 6. Iconos y forma

Icono: Material Symbols Rounded.

| Eje | Valor |
| --- | --- |
| FILL | 0 |
| wght | 300 |
| GRAD | −25 |
| opsz | 24 |

Tamaños: 16, 20, 24, 28, 32. El de interfaz es 24. El área clicable es 44. El color sigue al texto: `#F2F2F7`, `#AEAEB2` o `#8E8E93`.

Al aparecer, el glifo escala 0.9 → 1.1 → 1 en 200ms. Un giro de espera da una vuelta en 900ms lineal.

| Forma | Radio |
| --- | --- |
| Control, chip, nav, avatar | 9999px |
| Tarjeta y fila | 16px |
| Campo | 12px |
| Diálogo | 20px |
| Detalle mínimo | 4px o 6px |
| Superficie empujada (Z-push) | 16px, escala 0.94, brillo 0.72 |

| Sombra | Valor |
| --- | --- |
| Mínima | `0 1px 2px rgba(18, 18, 20, 0.20)` |
| Dock y elevación baja | `0 2px 12px rgba(0, 0, 0, 0.18)` |
| Media | `0 4px 16px rgba(18, 18, 20, 0.25)` |
| Alta | `0 8px 28px rgba(0, 0, 0, 0.28)` |
| Muy alta | `0 12px 40px rgba(18, 18, 20, 0.35)` |
| Diálogo | `0 16px 48px rgba(0, 0, 0, 0.35)` |

En claro, la sombra alta baja a `0 8px 28px rgba(18, 18, 20, 0.08)` y la muy alta a `0 12px 40px rgba(28, 28, 30, 0.08)`. El texto no lleva sombra.

El dock, si se usa, lleva `backdrop-filter: blur(24px)`.

---

## 7. Espacio

Escala de 8 puntos: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96.

| Uso en la página | Valor |
| --- | --- |
| Aire lateral, móvil | 16px |
| Aire lateral, ≥768 | 24px |
| Aire lateral, ≥1024 | 32px |
| Entre secciones | 32px |
| Dentro de un grupo | 16px |
| Entre título y cuerpo | 12px |
| Entre filas apretadas | 4px |
| Entre botones | 8px |
| Ancho máximo de página | 1280px |
| Ancho de lectura amplio | 1024px |
| Ancho de lectura medio | 768px |
| Ancho de lectura corto | 640px |
| Ancho de un párrafo de apertura | 576px |
| Ancho de un diálogo | 512px |

Breakpoints: 640, 768, 1024, 1280.

---

## 8. Motion

Una curva para entrar, posar y pulsar: `cubic-bezier(0.22, 1, 0.36, 1)`. Para salir: `cubic-bezier(0.4, 0, 1, 1)`.

| Duración | ms | Cuándo |
| --- | --- | --- |
| Instant | 80 | cambio mínimo |
| Fast | 140 | hover, foco, press visual en CSS |
| Medium | 240 | revelar un bloque, cambiar de panel, cambiar de tema |
| Slow | 380 | entrar la página |
| Expressive | 640 | un gesto largo |
| Ambient | 1200 | skeleton |

| Spring | mass | stiffness | damping | Uso |
| --- | --- | --- | --- | --- |
| Press | 1 | 280 | 24 | botón |
| Settle | 1 | 170 | 26 | página, diálogo, píldora activa |
| Soft | 1 | 220 | 28 | — |
| Snappy | 1 | 320 | 28 | — |

| Gesto | Valores |
| --- | --- |
| Press | escala 0.96, opacidad 0.85 |
| Entrada de página | opacidad 0 y `translateY(6px)` hasta identidad, 380ms, y al terminar no queda transform |
| Revelar | opacidad 0 y `translateY(8px)`, 240ms |
| Cambiar panel | opacidad 0 y `translateY(4px)`, 240ms |
| Lista | el mismo cambio, con retraso de 24ms por ítem hasta 160ms |
| Empuje en profundidad | escala 0.94, radio 16px, brillo 0.72 |

Con `prefers-reduced-motion: reduce`, las duraciones cortas van a 0ms, la escala de press a 1, y las animaciones de entrada se apagan. El scroll pasa de `smooth` a `auto`.

---

## 9. Sistema listo para la página

Pegar esto como base. El tema claro está en `html[data-theme="light"]`.

```css
:root {
  --bg: #121214;
  --surface: #1c1c1e;
  --surface-2: #242426;
  --elevated: #2c2c2e;
  --hover: #323234;
  --active: #3a3a3c;
  --text: #f2f2f7;
  --text-2: #aeaeb2;
  --text-3: #8e8e93;
  --on-primary: #1c1c1e;
  --fill: rgba(242, 242, 247, 0.06);
  --fill-strong: rgba(242, 242, 247, 0.1);
  --fill-selected: rgba(242, 242, 247, 0.12);
  --inactive: rgba(242, 242, 247, 0.72);
  --scrim: rgba(8, 8, 10, 0.55);
  --ok: #7c8a7a;
  --warn: #c4a574;
  --danger: #c45c4a;
  --info: #8a9aaa;
  --font: "Inter", system-ui, sans-serif;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --radius-control: 9999px;
  --radius-card: 16px;
  --radius-field: 12px;
  --radius-dialog: 20px;
  --page: 80rem;
  --gutter: 16px;
  --section: 32px;
}

html[data-theme="light"] {
  --bg: #f7f6f3;
  --surface: #ffffff;
  --surface-2: #f0efeb;
  --elevated: #ffffff;
  --hover: #eae9e4;
  --active: #e2e1db;
  --text: #1c1c1e;
  --text-2: #3a3a3c;
  --text-3: #636366;
  --on-primary: #f2f2f7;
  --fill: rgba(28, 28, 30, 0.04);
  --fill-strong: rgba(28, 28, 30, 0.07);
  --fill-selected: rgba(28, 28, 30, 0.1);
  --ok: #5f6d5e;
  --warn: #9a7d4f;
  --danger: #a34a3c;
  --info: #5f6d7a;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  font-size: 17px;
  line-height: 1.5;
  letter-spacing: -0.01em;
}

.wrap {
  width: min(var(--page), calc(100% - (var(--gutter) * 2)));
  margin-inline: auto;
}

.hero-title {
  margin: 0;
  font-size: clamp(1.5rem, 1.25rem + 1.5vw, 2.25rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.hero-copy {
  margin: 12px 0 0;
  max-width: 36rem;
  color: var(--text-2);
  line-height: 1.45;
}

.kicker {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-3);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 0 20px;
  border: 0;
  border-radius: var(--radius-control);
  background: var(--text);
  color: var(--on-primary);
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 140ms var(--ease), transform 140ms var(--ease), background 140ms var(--ease);
}
.btn:hover { opacity: 0.92; }
.btn:active { transform: scale(0.96); opacity: 0.85; }
.btn:disabled { opacity: 0.4; cursor: not-allowed; }
.btn:focus-visible { outline: 2px solid var(--text); outline-offset: 3px; }

.btn-secondary {
  background: var(--fill-strong);
  color: var(--text);
}
.btn-secondary:hover { opacity: 1; background: var(--fill-selected); }

.card {
  background: var(--fill);
  border-radius: var(--radius-card);
  padding: 12px 16px;
}
.card:hover { background: var(--fill-strong); }

.field {
  width: 100%;
  height: 44px;
  padding: 0 16px;
  border: 0;
  border-radius: var(--radius-field);
  background: var(--elevated);
  color: var(--text);
  font: inherit;
}
.field:focus-visible { outline: 2px solid var(--text); outline-offset: 2px; }

.section { display: grid; gap: 12px; }
.page-flow { display: grid; gap: var(--section); }
```

```js
// tailwind.config — theme.extend
module.exports = {
  theme: {
    extend: {
      colors: {
        void: "#121214",
        obsidian: "#1C1C1E",
        chalk: "#F2F2F7",
        muted: "#AEAEB2",
        tertiary: "#8E8E93",
        mineral: "#7C8A7A",
        brass: "#C4A574",
        terracotta: "#C45C4A",
        slate: "#8A9AAA",
        paper: "#F7F6F3",
        ink: "#1C1C1E",
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      fontSize: {
        display: ["clamp(1.5rem, 1.25rem + 1.5vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.03em", fontWeight: "600" }],
        h1: ["clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        h2: ["clamp(1.125rem, 1.05rem + 0.4vw, 1.375rem)", { lineHeight: "1.25", fontWeight: "600" }],
        body: ["1.0625rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        label: ["0.8125rem", { lineHeight: "1.35", letterSpacing: "0.01em", fontWeight: "500" }],
        meta: ["0.6875rem", { lineHeight: "1.35", letterSpacing: "0.06em", fontWeight: "500" }],
      },
      spacing: { 18: "4.5rem" },
      maxWidth: { page: "80rem", read: "36rem", dialog: "32rem" },
      borderRadius: { control: "9999px", card: "16px", field: "12px", dialog: "20px" },
      transitionTimingFunction: { spring: "cubic-bezier(0.22, 1, 0.36, 1)" },
      transitionDuration: { fast: "140ms", mid: "240ms", slow: "380ms" },
    },
  },
};
```

Orden de montaje en la página: fondo void, grano, columna de 80rem, cabecera transparente, hero con kicker + display + párrafo muted + píldora, secciones a 32px con tarjetas de relleno 6% y radio 16px, campos a 44px, diálogo a 20px cuando haga falta flotar.
