# 📐 Design System Architecture: Stack AI

## 1. Identidad Gráfica y Paleta de Colores
El lenguaje visual de Stack AI es esencialmente **Dark Mode First** (SaaS Enterprise / Deep Tech). Transmite sofisticación, enfoque técnico y minimalismo. Utiliza un contraste alto con fondos oscuros profundos y texto claro, apoyándose en bordes sutiles para separar componentes en lugar de sombras pesadas.

### 🎨 Color Palette (Tokens)
**Backgrounds (Fondos):**
*   `--bg-base`: `#000000` (Fondo principal de la página, negro puro para un look premium).
*   `--bg-surface`: `#09090B` (Fondo de modales y contenedores principales).
*   `--bg-card`: `#121214` ó `#18181B` (Fondo para tarjetas de features, nodos en el canvas).
*   `--bg-glass`: `rgba(9, 9, 11, 0.7)` (Usado en la barra de navegación superior con `backdrop-filter: blur(12px)`).

**Text & Typography Colors:**
*   `--text-primary`: `#FFFFFF` ó `#FAFAFA` (Títulos H1-H6 y texto principal destacado).
*   `--text-secondary`: `#A1A1AA` (Zinc 400 - Párrafos, subtítulos, descripciones).
*   `--text-tertiary`: `#71717A` (Zinc 500 - Metadatos, placeholders, labels inactivos).

**Borders & Dividers:**
*   `--border-subtle`: `#27272A` (Zinc 800 - Bordes de tarjetas, separadores, inputs).
*   `--border-focus`: `#52525B` (Zinc 600 - Estado hover/focus de inputs o tarjetas).

**Accents & Semantics:**
*   `--brand-primary`: `#FFFFFF` (Stack AI usa mucho el contraste puro (blanco/negro) como acción primaria).
*   `--brand-accent`: Suelen usar sutiles gradientes de luz (glow) detrás de elementos clave, combinando tonos fríos apagados (ej. `rgba(255,255,255, 0.05)`).
*   `--semantic-success`: `#10B981` (Para indicadores de estado, nodos activos o despliegues exitosos).
*   `--semantic-error`: `#EF4444` (Para errores de compilación de nodos o validación).

---

## 2. Tipografía
La plataforma utiliza tipografías de estilo *Geometric Sans-Serif* muy limpias, optimizadas para legibilidad técnica y densidad de información. 

**Familias Tipográficas:**
*   **Primary (UI & Display):** `Inter`, `Geist Sans` o similar (Sans-serif moderno).
*   **Monospace (Código & Nodos):** `JetBrains Mono` o `Fira Code` (Para mostrar IDs, fragmentos de prompt, o variables en el canvas).

**Jerarquía y Escala (Base 16px):**
*   **H1 (Hero Title):** `font-size: 4rem (64px)`, `line-height: 1.1`, `font-weight: 600` (Tracking sutilmente ajustado: `-0.02em`).
*   **H2 (Section Title):** `font-size: 2.5rem (40px)`, `line-height: 1.2`, `font-weight: 600`.
*   **H3 (Card Title):** `font-size: 1.25rem (20px)`, `line-height: 1.4`, `font-weight: 500`.
*   **Body (Párrafos):** `font-size: 1rem (16px)`, `line-height: 1.6`, `font-weight: 400`, `color: var(--text-secondary)`.
*   **Small / UI Text:** `font-size: 0.875rem (14px)`, `line-height: 1.5`, `font-weight: 400` (Usado en navegación, botones pequeños, tags).
*   **Micro (Labels/Canvas):** `font-size: 0.75rem (12px)`, `font-weight: 500`, `text-transform: uppercase`, `letter-spacing: 0.05em`.

---

## 3. Componentes UI (Botones y Controles)

### 🖱 Botones
La aplicación evita botones sobrecargados. Las esquinas son redondeadas pero no en forma de píldora (pill).

*   **Primary Button (Ej: "Get a Demo", "Try it Now"):**
    *   **Default:** `background: #FFFFFF`, `color: #000000`, `border-radius: 8px`, `padding: 10px 20px`, `font-weight: 500`.
    *   **Hover:** `opacity: 0.9` o un ligero oscurecimiento/escala (`transform: scale(0.98)`).
*   **Secondary / Outline Button:**
    *   **Default:** `background: transparent`, `color: #FFFFFF`, `border: 1px solid #27272A`, `border-radius: 8px`.
    *   **Hover:** `background: #18181B` (Zinc 900), `border-color: #3F3F46`.
*   **Ghost Button (Navegación):**
    *   **Default:** `background: transparent`, `color: #A1A1AA`.
    *   **Hover:** `color: #FFFFFF`. Sin fondo, cambio puramente de opacidad/color de texto.

### 📝 Inputs y Formularios
*   **Estilo:** Minimalista. `background: #09090B`, `border: 1px solid #27272A`, `border-radius: 6px`.
*   **Focus State:** `outline: none`, `border-color: #52525B`, ligera sombra interior blanca con opacidad baja `box-shadow: 0 0 0 1px rgba(255,255,255,0.1)`.
*   **Labels:** Tamaño Small (14px), color secundario, con un margen inferior de 6px.

---

## 4. Iconografía y Formas

*   **Estilo de Iconos:** Lineales, minimalistas, con un grosor de trazo uniforme (stroke-width: 1.5px o 2px). Similares a librerías como *Lucide Icons* o *Phosphor Icons*.
*   **Formas (Border Radius):**
    *   **Contenedores grandes (Modales, Canvas panels):** `12px` a `16px`.
    *   **Cards (Features, Nodos):** `8px` a `12px` (Da un aspecto técnico pero amigable).
    *   **Elementos pequeños (Inputs, Botones, Tags):** `6px` a `8px`.
*   **Profundidad Visual (Sombras):**
    *   En Dark Mode no se usan sombras difusas grandes. La profundidad se logra mediante **bordes de 1px** (`border: 1px solid rgba(255,255,255,0.1)`) y ligeros contrastes de color de fondo (Background layers).
    *   **Glow sutil:** A veces los elementos principales tienen un leve resplandor de fondo (`box-shadow: 0 0 40px rgba(255, 255, 255, 0.03)`).

---

## 5. Layout y Espaciado (Grillas)

*   **Sistema de Espaciado (Padding/Margin):** Escala basada en múltiplos de 4px y 8px (Tailwind standard).
    *   `gap-2` (8px): Entre iconos y texto.
    *   `gap-4` (16px): Entre elementos de un formulario o stack de botones.
    *   `gap-8` a `gap-12` (32px - 48px): Entre secciones internas de una tarjeta o bloque.
    *   `gap-24` a `gap-32` (96px - 128px): Espacio vertical masivo entre grandes secciones del landing page para dejar "respirar" el contenido.
*   **Estructura del Landing Page:**
    *   **Navbar:** Fixed top, padding de `16px` vertical, `24px` horizontal. Uso de Glassmorphism.
    *   **Bento Box Grids:** Uso frecuente de CSS Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) para mostrar "soluciones" o "integraciones" en cajas de diferentes tamaños.
*   **Estructura del Editor (App Canvas):**
    *   Barra lateral izquierda (Sidebar) estrecha (aprox 260px) con fondo `#09090B` y borde derecho sólido de 1px.
    *   Fondo de canvas con patrón de puntos (`dot pattern`) muy sutil: radial-gradient o SVG pattern en opacity 0.05.

---

## 6. Motion e Interacciones (UX/Micro-interacciones)

Stack AI se siente "rápido" y nativo. No hay animaciones pesadas.
*   **Duración Base (Easing):** Animaciones rápidas, típicamente `150ms` a `200ms` con una curva `ease-out` para hovers de botones y tarjetas.
*   **Hover en Tarjetas:** 
    *   Lígera traslación hacia arriba (`transform: translateY(-2px)`).
    *   Cambio sutil en el borde (`border-color` pasa de Zinc-800 a Zinc-600).
*   **Aparición de Secciones (Scroll Reveal):** 
    *   Efecto de "Fade Up": `opacity: 0` a `1` y `translateY: 20px` a `0`.
    *   Curva más suave (spring): `transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1)`.
*   **Botones (Click/Active):** `transform: scale(0.97)`, que da una sensación táctil inmediata al interactuar.
*   **Micro-interacciones de Nodos:** Al conectar un nodo con otro (si se replica el estilo de la app), la línea de conexión tiene un efecto SVG `stroke-dasharray` animado o un resaltado (highlight) de color `success` al conectarse correctamente.