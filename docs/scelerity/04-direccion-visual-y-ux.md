# Dirección visual y UX

**Fecha:** 11 de octubre de 2026  
**Entradas:** `docs/scelerity/01-auditoria.md`, `02-posicionamiento-y-oferta.md`, `03-arquitectura-y-copy.md`, y el código en `src/app/globals.css`, `src/app/layout.tsx`.  
**Esta fase no implementa el sitio.**

`docs/DESIGN-SYSTEM.md` no es la fuente de verdad. Describe Syne, DM Sans, JetBrains Mono y el tagline «Velocidad con precisión». El sitio publicado usa otra cosa. Manda el CSS.

---

## Qué se conserva, qué se afina, qué se deja

| Elemento | Decisión | Evidencia |
| --- | --- | --- |
| Paleta semántica oscura `#121214` / clara `#f7f6f3` | Se conserva | `globals.css`. La auditoría no encontró un fallo de color; el fallo es la promesa |
| Hero oscuro `#09090b` con las tres fotos de oficio | Se conserva | La fase 2 y la 3 prohíben rehacer el hero para «verse más estratégico» |
| Pie negro y tagline «Cultural & creative marketing» | Se conserva | Misma decisión. El texto del pie cambia de enlaces, no de color |
| Acento `#fd3db5` | Se conserva, solo en hover y active del botón principal | Ya está así en `globals.css` y en el reel. No se extiende a títulos ni a fondos |
| Tema claro / oscuro, `theme-init.js`, `localStorage` | Se conserva | Existe y el usuario lo eligió. La página de servicios no se fuerza a blanco si el tema es oscuro |
| Tipografía: Aspekta (display), Inter (cuerpo), DM Mono (etiquetas) | Se conserva | `layout.tsx`. No se cargan Syne ni DM Sans |
| Wordmark con letras separadas | Se conserva | Es la marca visible en el header |
| Reel horizontal de once servicios | Se reemplaza | La fase 3 pide una narrativa de tres encargos, no un muro de fichas. El pin de scroll no ayuda a leer un alcance |
| Tarjetas de Aether, Northline y Vespera con «Ver proyecto» y play | Se reemplazan por estudios etiquetados | Auditoría: no hay enlace ni video |
| Glass del header | Se conserva en el header. No se copia a secciones nuevas | Cumple una función (leer el menú sobre el hero). Más vidrio no aporta |
| WebGL (`three`, `EnergyField`) | No se enciende | No está montado en la portada actual. Sumarlo no explica la oferta |
| Fotos de Unsplash en fichas de servicio | No se reutilizan | Ilustraban oficios que ya no tienen página |
| Gradientes de texto, neón, sombras altas en secciones | No se añaden | `--gradient-*` ya está en `none`. Se queda así |

**Fondo de Cómo trabajamos.** En tema claro el fondo es `--bg` `#f7f6f3`, con superficie blanca `#ffffff` solo donde hay un campo de formulario. En tema oscuro sigue `--bg` `#121214`. No hay una isla clara fija que rompa el toggle. La razón para no imponer blanco siempre: el modo oscuro ya es parte de la identidad y la auditoría no lo marcó como problema.

---

## Sistema visual

### Color

Usar tokens, no hex sueltos en componentes nuevos.

| Token | Oscuro | Claro | Uso |
| --- | --- | --- | --- |
| `--bg` | `#121214` | `#f7f6f3` | Fondo de página |
| `--fg` | `#f2f2f7` | `#1c1c1e` | Texto |
| `--fg-muted` | `#aeaeb2` | `#3a3a3c` | Párrafo secundario |
| `--fg-subtle` | `#8e8e93` | `#636366` | Notas, metadatos |
| `--surface` | `#1c1c1e` | `#ffffff` | Campos |
| `--danger` | `#c45c4a` | `#a34a3c` | Error, junto con texto |
| `--ok` | `#7c8a7a` | `#5f6d5e` | Éxito, junto con texto |
| Acento `#fd3db5` | igual | igual | Solo hover y active del botón principal. El reposo del botón es `--fg` sobre `--bg` |

El hero y el pie no heredan el toggle: hero `#09090b` con texto claro; pie `#000`.

### Tipo

| Rol | Familia | Peso en código | Uso |
| --- | --- | --- | --- |
| Título | Aspekta, `--font-display` | h1 500, h2 300 | Un título por bloque |
| Cuerpo | Inter, `--font-body` | 400 | Párrafos. Ancho máximo `--read` (36rem) |
| Etiqueta | DM Mono, `--font-mono` | 400, tracking amplio, mayúsculas | «Estudio interno», «Cómo trabajamos». Una por sección, no una por párrafo |

Escala existente, sin tamaños nuevos: `--text-h1`, `--text-h2`, `--text-h3`, `--text-body`, `--text-small`, `--text-eyebrow`. En móvil el h1 ya baja a `2rem` y en escritorio ancho llega a `4.5rem`. No agrandar el hero por encima de eso.

### Espacio, grid, radio

- Página: `--page` 80rem, centrada.
- Lectura: `--read` 36rem. Los párrafos no se estiran al ancho de la grilla.
- Escala: `--space-4` (16px) dentro de un bloque, `--space-8` entre título y texto, `--space-16` (64px) entre secciones en móvil, el doble desde 1024px.
- Columnas: una hasta 768px. Desde 1024px, un bloque de servicio puede partirse en 12 columnas: texto en 7, límites en 4, una columna de aire. No en tres tarjetas iguales.
- Radio de control: pill (`--radius-control`). Radio de campo: 12px. Las secciones nuevas no llevan tarjeta de 16px alrededor de cada idea.
- Sombra: ninguna en secciones. `--shadow-min` solo en el menú móvil si hace falta separarlo del fondo. No usar `--shadow-high` ni superiores en marketing.

### Iconos

Lucide ya está en el proyecto. Usar solo en el menú, cerrar, error y éxito del formulario. No ilustrar Audiencia, Sistema, Producto y Continuidad con un icono cada una: el título ya lo dice.

### Imagen

Una imagen, un destino. Las tres maquetas (`/projects/aether.jpg`, `northline.jpg`, `vespera.jpg`) solo en Proyectos y, en portada, como una fila de tres con la etiqueta «Estudio interno». No se recortan para parecer tres clientes. No se usan fotos de músicos, escenarios ni Unsplash para «representar» el diagnóstico.

### Movimiento

Stack actual: CSS, GSAP y Lenis. No se agrega librería.

| Pieza | Regla |
| --- | --- |
| Hero | El texto «Ideas en» y «cultura» está visible al primer frame. Las persianas pueden seguir en escritorio, sin tapar el título. Si `prefers-reduced-motion: reduce`, un solo fotograma, sin animación |
| Cambio de sección | Aparece con el scroll normal. Sin pin, sin fade que deje el texto en opacidad baja |
| Lenis | Solo escritorio, como ahora. En táctil, scroll nativo |
| Botón | 140ms (`--dur-fast`), ease existente. Hover: fondo `#fd3db5` y texto `#1c1c1e`. Active: el mismo color, escala 0.98. Focus visible: anillo de 2px `--fg`, separado 2px, además del cambio de color |
| Reduced motion | Sin lerp de reel, sin parallax, sin demora para mostrar el contenido |

El contenido no espera a que termine una animación. El `h1` de portada no puede depender de GSAP para existir en el DOM legible. Hoy parte del titular visual está partido en capas; al implementar, el texto del subtítulo (para quién es) tiene que estar en HTML, no solo en un canvas.

---

## Primer viewport de la portada

Alto: una pantalla (`100svh`), fondo `#09090b`, foto de oficio detrás, como ahora.

Orden, de arriba a abajo, aunque el header flote:

1. Header: wordmark, y desde 1280px los enlaces Cómo trabajamos, Proyectos, Nosotros, Contacto. Debajo de 1280px, botón de menú de 44×44px.
2. Línea «Ideas en» y la palabra «cultura». Se leen sin esperar el movimiento.
3. Subtítulo en Inter, máximo 36rem, color claro sobre el oscuro del hero: para festivales, espacios, sellos y productores.
4. Dos acciones: botón «Cuéntanos la fecha» y enlace de texto «Ver cómo trabajamos». El enlace no es un segundo botón rosa.

Si la foto no carga, el fondo sigue siendo `#09090b` y el texto se lee igual.

Debajo del pliegue, en flujo vertical, sin reel: para quién es; las cuatro fases; las tres piezas en tres franjas (no en tres cards); la fila de estudios; el cierre. Cada franja cambia de aire, no de decoración. La fase y el cierre pueden usar la tarjeta de sección que ya existe (`section-card`) si el contraste del texto sigue siendo el del token. No se inventa un fondo nuevo por bloque.

**Móvil (390px).** Una columna. El subtítulo no se parte en tracking exagerado. Los dos CTA se apilan, ancho completo, altura mínima 44px. La foto del hero no empuja el texto fuera de la pantalla: si no caben título, subtítulo y botones, el subtítulo pasa al primer bloque debajo del hero, no se encoge por debajo de 16px.

---

## Wireframes por página

### Inicio `/`

Escritorio, de arriba a abajo:

1. Hero, como el viewport anterior.
2. «Para quién es». Un párrafo. Sin tres columnas de «proyectos culturales / industrias / marcas»: esa lista mezclaba a cualquiera. Un solo bloque.
3. «Una idea no termina en una campaña.» Cuatro fases en una sola columna de lectura. En escritorio ancho, el nombre de la fase a la izquierda (col 1–4) y el párrafo a la derecha (col 6–12). En móvil, nombre y luego párrafo.
4. Diagnóstico, Sistema, Continuidad. Cada uno: título, dos líneas, enlace a la ancla de `/servicios/`. Separados por espacio (`--space-16`), no por una línea.
5. Tres imágenes 4:3, en fila desde 768px y en columna antes. Encima de cada una, el texto «Estudio interno». Sin overlay «Ver proyecto».
6. Cierre: una frase y un botón. Sin formulario duplicado.

### Cómo trabajamos `/servicios/`

Narrativa vertical. No es un carrusel.

1. Título y la frase de la acción (entrar, reservar, patrocinar, escribir).
2. Diagnóstico. Título grande. A la derecha, o debajo en móvil: «Qué recibe», «Qué no entra», «Listo cuando». CTA al final del bloque.
3. Sistema. La misma estructura, más larga. La lista de exclusiones es una lista de texto, no una nube de chips.
4. Continuidad. Misma estructura. Una línea visible antes del CTA: «Solo después de un Sistema entregado por Scelerity.»
5. «Qué no hacemos.» Un párrafo. Sin iconos de prohibido.
6. Preguntas. `h3` pregunta, párrafo respuesta. No un acordeón si el texto cabe. Si se pliega en móvil, el botón muestra la pregunta completa y el estado abierto no depende solo del color.

Cada bloque ocupa el ancho de lectura. No hay imagen de stock al lado. El ritmo lo da el tamaño del título (h2) frente al cuerpo.

### Proyectos `/proyectos/`

1. Título: «Todavía no hay casos de clientes.»
2. Párrafo de advertencia.
3. Tres bloques verticales, no una grilla de cards. Cada uno: imagen 4:3 a todo el ancho de contenido (máximo 48rem), luego «Estudio interno», nombre, dos líneas, alt como en la fase 3. Northline sin icono de play.
4. Cierre con un solo botón.

Estado vacío futuro: si se quita una maqueta, no se rellena con un rectángulo gris ni con otra copia de Aether. El hueco se cierra y quedan las que existan.

### Nosotros `/nosotros/`

1. Título.
2. Dos párrafos, ancho de lectura.
3. Un botón.
4. Sin foto de equipo hasta que el fundador entregue una. Sin mapa de Orlando.

### Contacto `/contacto/`

1. Título y una línea.
2. Correo y WhatsApp como enlaces reales, antes del formulario.
3. Formulario en una columna, máximo 32rem (`--dialog`).
4. Mientras el envío no tenga destino, el formulario no se renderiza. En su lugar, los dos enlaces y la frase de la fase 3. Eso es el estado vacío del formulario, no un éxito falso.

**Móvil en todas.** Una columna. El header no tapa el `h1`: el contenido empieza debajo de la altura del header, o el header es sólido al hacer scroll, como ya hace al ganar fondo. Nada de scroll horizontal. Comprobado en la auditoría solo en la portada actual a 390px; hay que repetirlo en estas páginas al implementar.

---

## Estados

| Control | Reposo | Hover | Active | Focus | Disabled | Loading | Error | Éxito |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Botón principal | Fondo `--fg`, texto `--bg` | Fondo `#fd3db5`, texto `#1c1c1e` | Igual que hover, escala 0.98 | Anillo 2px `--fg` | Opacidad 0.4 y `aria-disabled`. No solo gris | Texto «Enviando…» y `aria-busy`. Sin spinner como única señal | No aplica | No aplica |
| Enlace de texto | Subrayado en reposo | Subrayado más grueso o `--fg` pleno | Opacidad 0.7 | Mismo anillo | — | — | — | — |
| Campo | Fondo `--surface`, texto `--fg`, borde 1px `--fg` al 20% | Borde `--fg` | Igual | Anillo 2px `--fg` | — | — | Borde `--danger` y el texto de error debajo | — |
| Casilla | Caja 20px y etiqueta | — | — | Anillo en la caja | — | — | Texto de error bajo la etiqueta | — |
| Envío | — | — | — | — | Botón disabled mientras `aria-busy` | «Enviando…» | «No salió. Escríbenos a hello@scelerity.co.» | «Llegó. Te escribimos a este correo sobre [organización].» Solo si el buzón respondió |

El éxito no se pinta de verde como única señal: va el texto «Llegó». El error no es solo el borde rojo: va la frase junto al campo. Área táctil mínima 44×44px en botones, casilla y menú.

---

## Componentes y qué se elimina

| Componente | Propósito | Se elimina si |
| --- | --- | --- |
| Header | Ir a las cuatro páginas y cambiar tema e idioma | Se le añaden ítems de oficio o de ciudades |
| Hero | Decir «Ideas en cultura» en el primer segundo | El subtítulo nuevo no cabe y se esconde en la animación |
| Bloque de fases | Explicar un solo encargo | Vuelve a ser un carrusel con números 01–04 |
| Fila de estudios | Mostrar oficio sin fingir clientes | Recuperan métricas «UI / Web» como si fueran resultados |
| Lista de alcance | Decir qué recibe y qué no | Se parte en tarjetas gemelas por habilidad |
| Formulario | Recoger organización, acción y plazo | Se muestra un éxito a los 1,1s sin API |
| Pie | Ciudad, correo y legal | Lista el catálogo viejo |

Adornos que no pasan a las páginas nuevas: contador de slides, barra de progreso del reel, cursor personalizado que tape un enlace (si se mantiene, no sustituye el anillo de focus), grano de página si baja el contraste del texto muted. El cursor custom ya existe; no se rediseña en esta fase. Si en la implementación el anillo de focus no se ve por el cursor, gana el focus.

Viabilidad: todo esto es CSS de los tokens actuales, HTML y el copy de la fase 3. GSAP solo en el hero, con salida inmediata si `prefers-reduced-motion`. No hace falta Three, ni un carrusel, ni una fuente nueva.

---

## Assets

No duplicar una imagen para simular varios servicios. No encargar fotos de clientes que no existen.

| Archivo | Función | Formato | Proporción | Contenido | Alt |
| --- | --- | --- | --- | --- | --- |
| `/hero/arte.jpg`, `sistemas.jpg`, `cultura.jpg` | Fondos del hero. Ya existen | JPEG | 16:9, 2400px de ancho hoy | Oficio: pintura, código, sala. Se conservan | Los alt actuales del hero de datos. No hace falta uno nuevo |
| `/projects/aether.jpg` | Estudio en Proyectos y miniatura en inicio | JPEG | 4:3 | Maqueta ya publicada | «Maqueta en un portátil y un teléfono, con una interfaz editorial en tonos azul oscuro y violeta.» |
| `/projects/northline.jpg` | Igual | JPEG | 4:3 | Identidad fija. Quitar el tratamiento de video | «Maqueta de una identidad en un monitor y un teléfono, en tonos carbón, arena y ámbar.» |
| `/projects/vespera.jpg` | Igual | JPEG | 4:3 | Teléfonos | «Maqueta de una interfaz de marca en dos teléfonos, en tonos vino y champagne.» |

**Por producir, solo si el fundador los tiene.** No se sustituyen con stock.

| Nombre | Función | Formato | Proporción | Contenido | Alt |
| --- | --- | --- | --- | --- | --- |
| `caso-[cliente]-01.jpg` | Primer caso real, cuando haya permiso | JPEG o WebP | 4:3, lado largo 1600px | La pieza publicada, no un mockup genérico | Descripción de esa pieza y del proyecto, escrita con el permiso |
| `estudio-retrato.jpg` | Nosotros, opcional | JPEG | 3:2 | Persona o lugar real del estudio en Bogotá | Quién o qué se ve, sin palabras de SEO |

Hasta que esos dos no existan, Proyectos usa solo las tres maquetas y Nosotros no lleva imagen.

Las imágenes de `public/services/` y `public/plates/` (oficios sueltos) no entran en las páginas nuevas. Una misma foto no se asigna a Diagnóstico, Sistema y Continuidad.
