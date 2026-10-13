# Auditoría de Scelerity

**Fecha:** 11 de octubre de 2026  
**Alcance:** sitio publicado en https://scelerity.vercel.app/ y repositorio Next.js del proyecto.  
**No se hizo:** cambiar código, estilos, dependencias ni contenido. No se ejecutó Lighthouse, PageSpeed, axe ni una prueba completa de teclado. No se midieron conversiones: no hay analítica activa en la sesión revisada.

Documentos leídos: `docs/estrategia-scelerity.md`, `docs/Informe_estrategico_Scelerity_2026.md`, `docs/DESIGN-SYSTEM.md`, `docs/SEO-OS.md`, `docs/SECURITY-PERFORMANCE-AUDIT.md`. Esas auditorías previas no se tratan como medición de esta sesión.

Leyenda: **hecho** = visto en el sitio o en un archivo. **Inferencia** = conclusión a partir de esos hechos. **Hipótesis** = todavía no comprobada con compradores o con una prueba. **Recomendación** = qué decidir después, no el diseño de la solución.

---

## Resumen ejecutivo

En los primeros segundos la portada se entiende como un estudio cultural. El título publicado es «Scelerity — Hacemos que las ideas entren en la cultura.» El único `h1` visible en el DOM es «Ideas en cultura.» Debajo, el sitio nombra proyectos culturales, industrias creativas y marcas, y cierra el ciclo «Qué hacemos» con «Una idea no termina en una campaña» y cuatro fases: estrategia, sistemas, producto y continuidad.

Esa lectura se rompe en cuanto el visitante abre Servicios. La navegación principal (Servicios, Blog, Nosotros, Contacto) lleva a un catálogo de once oficios. La ficha `/servicios/mvp-rapido/` titula «MVP en 15 Días — De Idea a Plataforma en Producción» y promete código en producción con React o Astro, TypeScript y una base relacional. El pie de esa misma página sigue diciendo «Cultural & creative marketing.»

El trabajo de portada (Aether, Northline, Vespera) no enlaza a un caso. «Ver proyecto» es una etiqueta sobre la imagen, no un enlace. Northline está marcado como vídeo y solo muestra un icono de reproducción. No hay cliente, fecha ni resultado.

El formulario de contacto valida en el cliente y, si pasa, espera 1,1 segundos y muestra éxito. No hay ruta `src/app/api` ni envío a un servicio. **Hecho:** un envío correcto no llega a ningún buzón. **Inferencia:** la conversión publicada no existe.

Hay una segunda contradicción geográfica. La portada y Nosotros dicen Bogotá. `src/lib/seo/config.ts` fija el domicilio del negocio en Orlando, FL, y `areaServed` incluye US, CO, MX, ES y Worldwide. Existen cinco páginas locales de Florida (Orlando, Miami, Tampa, Jacksonville, Kissimmee), con schema `LocalBusiness` y país forzado a `US` en `localBusinessNode`. Jacksonville afirma planes «Starter, Growth y Full Digital» que no aparecen en ninguna oferta del sitio.

La decisión ya escrita en `docs/estrategia-scelerity.md` —una oferta, Sistema, y sacar el catálogo del menú— coincide con lo que el sitio muestra. Esta auditoría no la rediseña. Confirma que el problema principal es de promesa y de prueba, y que el formulario roto y las páginas de Florida son fallos concretos, no de estilo.

---

## Inventario comprobado

**Stack.** Next.js 15.5.22, React 19, exportación estática (`output: "export"`, `trailingSlash: true`), Tailwind 4, GSAP, Lenis, Framer Motion. `three` y `@react-three/fiber` están en `package.json`. No hay script de tests ni archivos `*.test` / `*.spec`. Playwright está como dependencia de desarrollo; esta sesión no lo ejecutó. `npm run audit:responsive` y `audit:sections` existen y no se corrieron aquí.

**Rutas que respondieron 200** el 11 de octubre de 2026: `/`, `/servicios/`, `/servicios/mvp-rapido/`, `/servicios/migracion-legacy/`, `/soluciones/`, `/blog/`, `/blog/seo-2026/`, `/nosotros/`, `/contacto/`, `/local/`, `/local/orlando/`, `/local/kissimmee/`, `/privacidad/`, `/terminos/`, `/sitemap.xml`, `/robots.txt`, `/feed.xml`. `/no-existe/` respondió 404.

**Páginas de servicio** declaradas en `src/lib/seo/services.ts`: diseño web, desarrollo web, desarrollo de apps, SEO, branding, marketing digital, inteligencia artificial, automatización, e-commerce, migración legacy, MVP rápido. `/soluciones/` reexporta `/servicios/` (`src/app/soluciones/page.tsx`) y no está en el sitemap.

**Blog** (`content/blog/`): `branding-digital`, `velocidad-core-web-vitals`, `marketing-digital-integrado`, `ia-potencia-empresas`, `pagina-web-conversiones`, `seo-2026`. El de SEO está fechado 2026-07-14 y habla de prácticas generales, no de un proyecto de Scelerity.

**Componentes vivos de la portada** (`src/app/page.tsx`): `ScelerityHero`, `About`, `Work`, `Services` (ciclo de cuatro fases), `FinalCTA`, `Header`, `Footer`.

**Código presente y no montado por ninguna ruta** (no aparece importado desde `src/app`): `src/components/sections/Hero.tsx` y `EnergyField` (WebGL), `services-edition/ServicesEdition.tsx`, `services-system/ServiceField.tsx` y `fieldEngine.ts`, el árbol `sections/solutions/` salvo el reexport que no lo usa. **Inferencia:** three.js no se ejecuta en la portada actual.

**Viewport móvil.** Con ancho emulado de 390 px, la portada no generó scroll horizontal (`scrollWidth` 390). El encabezado visible era solo el wordmark; la navegación primaria está oculta hasta `xl` y el botón de menú existe en `Header.tsx` (`aria-expanded`, `aria-controls="mobile-nav"`). No se abrió ese menú en esta sesión.

---

## Hallazgos

| # | Hallazgo | Tipo | Evidencia | Impacto | Prioridad | Esfuerzo | Recomendación (sin diseñar aún) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | La portada promete cultura y Servicios promete once oficios, incluido un MVP en 15 días | Hecho | Portada en vivo; `/servicios/mvp-rapido/` título y cuerpo; `content.ts` del reel | El visitante no sabe qué contratar | P0 comercial | Medio | Decidir si el menú sigue apuntando a `/servicios/` |
| 2 | El formulario no envía el mensaje a ningún destino | Hecho | `ContactForm.tsx` líneas 92–97: `setTimeout` 1100 ms y comentario «Ready for API»; no hay `src/app/api` | Toda conversión del sitio es falsa | P0 técnico | Bajo | Decidir el destino real antes de pedir más campos |
| 3 | Los tres proyectos no son casos | Hecho | `Work.tsx`: «Ver proyecto» no es un `href`; `content.ts` sin cliente ni resultado; Northline `media: "video"` sin reproductor | La prueba social no prueba | P0 comercial | Bajo | Decidir etiqueta de estudio o retirada |
| 4 | Bogotá en la prosa, Orlando en los datos estructurados, Florida en `/local/` | Hecho | Portada y `nosotros/page.tsx`; `seo/config.ts` `addressLocality: "Orlando"`; `local.ts` cinco ciudades; `schema.ts` `addressCountry: "US"` | Riesgo de confianza y de SEO local engañoso | P0 estratégico | Medio | Decidir si esas páginas siguen indexadas |
| 5 | Afirmaciones locales sin oferta que las sostenga | Hecho | FAQ de Jacksonville: planes Starter, Growth y Full Digital; Tampa: foco B2B y schema local; Kissimmee: Google Business Profile | Promesas que el resto del sitio no cumple | P1 | Bajo, si se retiran | Decidir si se conservan como experimento SEO |
| 6 | `SearchAction` apunta a `/blog/?q=` y el blog no lee esa query | Hecho | `schema.ts` `websiteNode`; `src/app/blog` sin `searchParams` | Dato estructurado de una función inexistente | P2 técnico | Bajo | Quitar o implementar; no dejar el marcado |
| 7 | Analítica solo si hay variables de entorno; en esta carga no había `gtag` ni `dataLayer` | Hecho | `Analytics.tsx`; `Runtime.evaluate` en la portada: `ga: false` | No hay línea base de visitas ni de formularios | P1 | Depende de cuentas | No tratar visitas como demanda hasta que exista medición con consentimiento |
| 8 | Imágenes de hero a 2400 px, repetidas en el DOM (cortes, espejos, lente) | Hecho | `scelerity-hero/data.ts`; evaluación: varias `<img>` de `arte.jpg`, `sistemas.jpg`, `cultura.jpg` con `naturalWidth` 2400 | Peso potencial. No medido en Lighthouse | P2 | Medio | Medir antes de optimizar. No se afirma un Core Web Vital |
| 9 | Código muerto de hero WebGL, edición de servicios y soluciones | Hecho | Imports no alcanzados desde `src/app` | Confunde la siguiente fase y mantiene `three` en el bundle de dependencias | P2 | Medio | Decidir qué árbol es el vigente |
| 10 | Blog genérico de SEO, branding e IA | Hecho | Seis MDX; ninguno documenta un encargo de Scelerity | No sostiene la oferta cultural | P2 editorial | Bajo | Alinear o dejar de enlazar desde servicios |
| 11 | Contraste, foco y rendimiento no medidos con herramienta | Hecho de método | No se corrió axe ni Lighthouse. Sí hay enlace «Saltar al contenido» y el viewport no fija `maximum-scale` (`layout.tsx`) | No declarar el sitio accesible ni rápido | — | — | Repetir esas pruebas después de cualquier cambio |

**Hipótesis, no demostrada:** un productor cultural reconoce la portada y se pierde en Servicios. Hace falta la entrevista, no otra opinión de interfaz.

**Inferencia:** el informe estratégico de 757 líneas no pudo abrir el sitio; esta sesión sí. Su advertencia de no publicar casos ni capacidades sin prueba queda confirmada por los hallazgos 1, 3, 4 y 5.

---

## Conservar

- La frase de portada y el ciclo de cuatro fases. Coinciden con la decisión de `docs/estrategia-scelerity.md` y se leen sin el catálogo.
- El sistema visual ya cerrado: tema claro/oscuro, pie negro, acento solo en el botón, hero de arte / sistemas / cultura, bilingüe. El problema observado no es de paleta.
- Skip link, `lang="es"`, sitemap, robots y RSS. Existen y respondieron.
- Validación del formulario en cliente (`zod` + campos obligatorios). Sirve cuando haya un destino real.

## Quitar, simplificar o replantear

- El reel de once servicios como destino del menú, en especial la promesa de quince días (`mvp-rapido`) y la migración legacy como producto suelto.
- «Ver proyecto» y el icono de play si no hay destino ni vídeo.
- Páginas `/local/*` y el domicilio Orlando del schema, salvo que exista una operación real en esas ciudades. Esa operación no está en el repositorio ni en la portada.
- Planes Starter / Growth / Full Digital: se nombran y no se definen.
- `SearchAction` del blog.
- Módulos no montados, cuando se decida cuál es la interfaz vigente. No borrarlos en esta fase.

---

## Riesgos y dependencias

- Exportación estática: un formulario real no puede ser una route handler de Next en este build. Depende de un servicio externo (el comentario del formulario menciona Formspree o Resend) y de variables de entorno que esta sesión no vio configuradas en el HTML.
- OneDrive y la caché de Next están documentados en `next.config.ts` y `scripts/ensure-next-cache.mjs`. No se comprobó si el build local falla por eso.
- Imágenes remotas de Unsplash en el blog y en fichas de servicio (`next.config.ts` permite `images.unsplash.com`). Si esa URL cambia, las fichas quedan rotas. No se contaron fallos de red en la portada: las tres fotos de hero cargaron.
- Datos estructurados de negocio local en EE. UU. pueden indexarse mientras la marca dice Bogotá. Retirarlos después no borra lo ya rastreado.
- No hay tests automatizados. Un cambio de menú o de formulario no tiene red de seguridad en CI dentro de `package.json`.

---

## Vacíos que el sitio no resuelve

- Ingresos, margen, equipo, pipeline y autorización para publicar trabajos.
- Si Aether, Northline y Vespera corresponden a un cliente real.
- Si hay operación, reuniones o clientes en Florida.
- Si `foundingDate: "2024"` en el schema es un dato de la empresa o solo un literal.
- Si las cuentas de Instagram, Facebook, TikTok y LinkedIn del pie son perfiles activos. No se abrieron.
- Core Web Vitals, contraste, recorrido completo de teclado y tasa de envío. No medidos.
- Disposición de pago del comprador cultural. Hipótesis del informe, no un hecho del sitio.

---

## Comprobaciones para repetir después de implementar

1. En 10 segundos, un recorrido nuevo dice una sola cosa que se contrata, en portada y en el destino del menú Servicios.
2. Un envío de prueba llega al buzón acordado y el estado de error aparece si el servicio falla. El éxito actual no cuenta.
3. Ninguna ficha pública promete un plazo que no se haya cumplido.
4. Cada proyecto visible o tiene caso (cliente, rol, resultado) o dice que es un estudio interno.
5. Ciudad del texto, del pie y del JSON-LD es la misma. `/local/` no afirma oficinas ni planes inexistentes, o deja de estar en el sitemap.
6. El `SearchAction` coincide con una búsqueda que funciona, o no está.
7. A 390 px y en escritorio: sin scroll horizontal, menú operable, foco visible. Medir con teclado, no solo con el DOM.
8. Lighthouse o PageSpeed en portada y en la página de oferta, con número, no con impresión.
9. Un envío no se declara conversión en analítica si la herramienta sigue ausente.
10. Las rutas viejas de servicio responden con redirección o 404 consciente, no con una promesa retirada a medias.

---

## Diez decisiones para la fase siguiente

No son el diseño. Son lo que hay que cerrar antes de escribir pantallas.

1. ¿El menú Servicios sigue llevando al reel de once fichas o a una sola oferta?
2. ¿La promesa de quince días se retira del título, del sitemap y de los relacionados, o se deja hasta tener una entrega que la cumpla?
3. ¿Aether, Northline y Vespera se etiquetan como estudio interno o salen de la portada?
4. ¿El domicilio público es Bogotá, Orlando, o los dos con una prueba distinta para cada uno?
5. ¿`/local/` se desindexa o se reescribe solo donde haya un cliente real?
6. ¿A qué dirección llega un mensaje de contacto, y quién responde en el plazo que el sitio ya promete («menos de 24 horas»)?
7. ¿El blog actual se mantiene enlazado desde servicios o se deja de promover hasta que hable de la oferta?
8. ¿Qué árbol de componentes es el vigente: `services-system`, `services-experience`, `services-edition` o `solutions`?
9. ¿Se mide el sitio (analítica con consentimiento) antes de juzgar canales, o se valida solo con conversaciones?
10. ¿La identidad visual se congela, como pide `docs/estrategia-scelerity.md`, y el único cambio de esta fase es menú, prueba y formulario?
