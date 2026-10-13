# Implementación y QA

**Fecha:** 11 de octubre de 2026  
**No está publicado.** El build local pasó. No se hizo push ni deploy en esta fase.

## Resumen

El sitio deja de ofrecer once oficios. La navegación es Cómo trabajamos, Proyectos, Nosotros y Contacto. La portada mantiene «Ideas en cultura.» y explica el encargo en cuatro pasos y tres piezas: Diagnóstico, Sistema y Continuidad. Aether, Northline y Vespera se muestran como estudios internos. El formulario ya no finge un envío: el contacto es `hello@scelerity.co` y `https://wa.me/573015993300`. El domicilio en los datos estructurados pasa de Orlando a Bogotá. Las fichas `/servicios/[slug]/`, `/soluciones/` y `/local/` dejan de generarse. En Vercel, `vercel.json` las redirige a `/servicios/`.

### Conflictos resueltos de forma conservadora

| Conflicto | Decisión |
| --- | --- |
| El hero ya ocupa la pantalla con «Ideas en / cultura» | El subtítulo y los dos CTA van al pie del hero, en HTML, sin rehacer la animación |
| No hay API y el export es estático | No se muestra el formulario ni un mensaje de éxito. Se muestran correo y WhatsApp |
| `tsc` suelto después del build | `npm run build` compiló y pasó el chequeo de tipos. El `postbuild` vuelve a juntar `.next` con la caché de desarrollo, y ese `validator.ts` todavía nombra rutas borradas. No es un error de las páginas nuevas |
| `docs/DESIGN-SYSTEM.md` pide Syne y DM Sans | No se aplicó. Siguen Aspekta, Inter y DM Mono |
| El blog sigue en el repositorio | No está en el menú. Sus URL siguen vivas. No se reescribieron los artículos |

## Archivos

**Creados:** `src/components/sections/OfferView.tsx`, `StudiesView.tsx`, `NosotrosView.tsx`, `src/app/proyectos/page.tsx`, este documento.

**Modificados:** portada (`page.tsx`, `ScelerityHero.tsx`, `About.tsx`, `Services.tsx`, `Work.tsx`, `FinalCTA.tsx`), `Header.tsx`, `useSiteNav.ts`, `content.ts`, `servicios/page.tsx`, `nosotros/page.tsx`, `contacto/page.tsx`, `sitemap.ts`, `schema.ts`, `metadata.ts`, `config.ts`, `vercel.json`.

**Eliminados:** `src/app/servicios/[slug]/page.tsx`, `src/app/soluciones/page.tsx`, `src/app/local/page.tsx`, `src/app/local/[city]/page.tsx`.

No se borraron los módulos viejos del reel (`services-system`, `services-edition`). Ya no los monta ninguna ruta.

## Rutas

El build estático listó: `/`, `/servicios/`, `/proyectos/`, `/nosotros/`, `/contacto/`, `/blog/`, `/blog/[slug]` (6), `/privacidad/`, `/terminos/`, `/sitemap.xml`, `/robots.txt`. No aparecen `/local/` ni `/servicios/mvp-rapido/`.

En `http://localhost:3000/` se leyó el texto aprobado: h1 «Ideas en cultura.», las cuatro fases, las tres piezas, la frase de maquetas, correo, WhatsApp y Bogotá. No había `<form>`. El enlace de WhatsApp es `https://wa.me/573015993300`.

`/servicios/` titula «Cómo trabajamos — Drawboard» y abre con Diagnóstico. `/proyectos/` dice que no hay casos y muestra tres imágenes.

A 390 px de ancho, la portada no generó scroll horizontal (`scrollWidth` igual a 390). El botón «Abrir menú» está en el árbol de accesibilidad. No se recorrió el sitio entero con Tab.

## Herramientas

| Comando | Resultado |
| --- | --- |
| `npm run build` | Exit 0. Next.js 15.5.22. Compiló, chequeó tipos y generó las páginas estáticas. Avisos de ESLint ya existentes (`<img>` del hero, fuente en `layout.tsx`, hook en `useScrollLock`) |
| `npx eslint` sobre los archivos tocados | 0 errores. El aviso de `<img>` en Estudios se cambió a `next/image` |
| `npx tsc --noEmit` después del `postbuild` | Falla: `.next/types/validator.ts` importa rutas que ya no existen. El build, antes de ese `postbuild`, no falló el chequeo de tipos |
| Tests | No hay script `test` ni archivos `*.test` / `*.spec`. No se ejecutó una suite |
| Lighthouse, axe, PageSpeed | No se ejecutaron. No hay cifra de rendimiento ni de contraste |

En la carga local de la portada no aparecieron recursos propios con estado HTTP de error en `performance.getEntriesByType`. No se revisó la consola línea por línea.

## Problemas abiertos

| Prioridad | Problema |
| --- | --- |
| P0 | Nadie ha confirmado que `hello@scelerity.co` y el WhatsApp se leen. El sitio no promete un plazo de respuesta |
| P1 | Las redirecciones de fichas viejas y de `/local/` están en `vercel.json`. No se comprobaron en Vercel porque no hubo deploy. En local, esas URL responden 404 |
| P1 | El blog sigue publicado con artículos genéricos de SEO e IA. No está en el menú, pero sigue en el sitemap |
| P2 | `tsc` suelto choca con la caché de `.next` después del build. Hace falta regenerar esa caché o borrar `validator.ts` antes de fiarse de un `tsc` aislado |
| P2 | No hay prueba de teclado completa, ni de contraste, ni de Lighthouse |
| P2 | Redes del pie no se abrieron. No se afirma que los perfiles existan |

## Lo que tiene que aportar el fundador

- Confirmar el correo y el WhatsApp.
- Un caso con permiso, cuando exista. Hasta entonces la página dice que no hay casos.
- Horas reales antes de publicar un precio.
- Decidir si el blog se deja en el sitemap.

## Revisar antes de publicar

1. Portada: «Ideas en cultura», para quién es, y que no aparezca el catálogo de once servicios.
2. Cómo trabajamos: Diagnóstico, Sistema, Continuidad, y el párrafo de lo que no se hace.
3. Proyectos: la frase «Todavía no hay casos de clientes.»
4. Contacto: correo y WhatsApp, sin formulario y sin «respuesta en 24 horas».
5. Que al desplegar, `/servicios/mvp-rapido/` y `/local/orlando/` redirijan a `/servicios/` y no muestren la promesa vieja.
