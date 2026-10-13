# Arquitectura y copy

**Fecha:** 11 de octubre de 2026  
**Entradas:** `docs/scelerity/01-auditoria.md`, `docs/scelerity/02-posicionamiento-y-oferta.md`.  
**Idioma:** español de Colombia, tuteo. Sin voseo.

Este documento no cambia la estrategia. Donde un pedido de esta fase chocaba con la fase 2, queda anotado y se resuelve a favor de la fase 2.

| Choque | Resolución |
| --- | --- |
| Una página aparte de «Cultura y proyectos creativos» | No se crea. La ruta pública entera es esa. Otra página repetiría la portada. |
| Una página de negocios B2B | No se crea. La fase 2 la deja fuera hasta que alguien de esas conversaciones pague. |
| Un titular que diga oficio y cliente, en lugar de «Ideas en cultura.» | El `h1` se queda. El subtítulo dice para quién es y qué se construye. |
| Mostrar Definir / Construir / Activar como método visible | No. En la página se usan las cuatro fases ya aprobadas: audiencia, sistema, producto, continuidad. |
| Blog de ideas en el menú | No. Los seis artículos actuales no hablan de un encargo de Drawboard. Las URL pueden seguir vivas; no se enlazan desde la navegación principal. |
| «Respuesta en menos de 24 horas» | Se quita. La fase 2 lo prohíbe hasta que alguien pueda cumplir ese plazo. |

No se reescribe la paleta, el hero ni el pie negro. Aquí solo está la información y el texto.

---

## Sitemap

| Página | Ruta | En el menú | Función |
| --- | --- | --- | --- |
| Inicio | `/` | Logo | Entender la promesa y elegir el siguiente paso |
| Cómo trabajamos | `/servicios/` | Sí | Ver Diagnóstico, Sistema y Continuidad, con límites |
| Proyectos | `/proyectos/` | Sí | Ver estudios internos sin tomarlos por clientes |
| Nosotros | `/nosotros/` | Sí | Saber desde dónde se trabaja y qué no se es |
| Contacto | `/contacto/` | Sí | Escribir con los datos que hacen falta para responder |
| Privacidad | `/privacidad/` | Pie | Texto legal ya publicado. No se reescribe aquí |
| Términos | `/terminos/` | Pie | Texto legal ya publicado. No se reescribe aquí |

**Salen del mapa y del menú:** `/servicios/diseno-web/`, `/branding/`, `/desarrollo-web/`, `/desarrollo-apps/`, `/ecommerce/`, `/seo/`, `/marketing-digital/`, `/inteligencia-artificial/`, `/automatizacion/`, `/migracion-legacy/`, `/mvp-rapido/`, `/soluciones/`, `/local/` y `/local/orlando|miami|tampa|jacksonville|kissimmee/`, y el blog como ítem de navegación.

Esas URL hoy responden 200. Al implementar, cada una redirige a `/servicios/` o deja de publicarse. No se dejan a medias, con la promesa vieja todavía indexada.

---

## Recorridos

**Quien produce un festival, un espacio o un sello.** Llega al inicio, lee para quién es, baja a las tres piezas y abre Cómo trabajamos. Si reconoce la acción que le falta (entrada, reserva, patrocinio o contacto), va a Contacto. Si desconfía de los trabajos, abre Proyectos y ve la etiqueta de estudio interno.

**Quien pide una app, SEO o un MVP en quince días.** No encuentra esa ficha. En Cómo trabajamos lee qué no entra. Si igual escribe, el formulario le pide la acción concreta, no el oficio.

**Quien busca una empresa en Florida o un plan Starter.** No hay página para eso.

---

## Portada `/`

**Audiencia.** Quien ya tiene un proyecto cultural en marcha.  
**Intención.** Saber si Drawboard hace lo que le falta.  
**Pregunta.** «¿Esto es para un proyecto como el mío, o es una agencia que hace de todo?»  
**Mensaje.** Un proyecto con fecha o con algo que cobrar necesita una pieza que siga en pie, no otra campaña.  
**CTA principal.** «Cuéntanos la fecha» → `/contacto/`.  
**CTA secundario.** «Ver cómo trabajamos» → `/servicios/`.  
**Enlaces.** Proyectos, Nosotros, Contacto. No enlaza fichas de oficio ni ciudades de Florida.

### Texto

**Etiqueta (sr-only del hero, se mantiene):** Ideas en cultura.

**h1:** Ideas en cultura.

**Subtítulo:** Para festivales, espacios, sellos y productores que ya tienen programación o algo que cobrar. Ordenamos la oferta y construimos la pieza digital que sigue en pie cuando la campaña se apaga.

**CTA principal:** Cuéntanos la fecha  
**CTA secundario:** Ver cómo trabajamos

**h2:** Para quién es

Trabajamos con quien ya opera: un festival con fecha, un espacio con programación, un sello con catálogo, un productor con patrocinadores o un equipo que vende algo concreto.

Si el proyecto todavía no tiene forma de cobrar, reservar o recibir una propuesta, lo primero es el diagnóstico. No armamos una presencia para quien aún no tiene esa acción.

**h2:** Una idea no termina en una campaña.

Una campaña se apaga. Si nadie puede entrar, reservar, escribir o patrocinar cuando eso pasa, el proyecto vuelve a depender del siguiente aviso.

El trabajo sigue cuatro pasos. No son cuatro servicios sueltos.

**h3:** Audiencia  
A quién tiene que llegar, y qué tiene que poder hacer en la pieza: comprar una entrada, reservar, pedir el dossier o escribir.

**h3:** Sistema  
La identidad que se puede usar más de una vez: nombre, tono y piezas básicas. No un manual que después nadie abre.

**h3:** Producto  
Una página o un flujo publicado, con el alcance escrito antes de empezar. Escritorio y teléfono.

**h3:** Continuidad  
Qué se mira cuando la pieza ya está en uso, y qué no se vuelve a hacer en cada ciclo. Este paso solo se contrata después de entregar.

**Enlace bajo las fases:** Ver alcance y límites

**h2:** Tres formas de entrar

**h3:** Diagnóstico  
Hay actividad, y no está claro qué hay que construir.  
En una sesión dejamos el problema, la acción y lo que queda fuera. Es un trabajo pago y corto. Sirve para decidir si sigue un Sistema, o para parar.

**h3:** Sistema  
La campaña no deja nada que la gente pueda usar.  
Mensaje, identidad aplicada y una pieza publicada. Al final, la acción acordada se puede completar. No prometemos llenar la sala ni cerrar patrocinios.

**h3:** Continuidad  
La pieza ya existe y hay que mirarla, no abrir otro oficio.  
Solo si el Sistema lo entregamos nosotros y ya se está usando.

**CTA de este bloque:** Ver cómo trabajamos

**h2:** Estudios de oficio

Aether, Northline y Vespera son maquetas nuestras. No son clientes. No hay cifra, testimonio ni resultado de negocio.

**Enlace:** Ver los estudios

No usar «Ver proyecto». No poner un botón de reproducir en Northline: en el repositorio no hay video, solo la foto.

**h2 de cierre:** Cuéntanos la fecha y qué tiene que quedar funcionando.

Si ya sabes la acción —entrada, reserva, patrocinio o contacto—, escríbenos. Si todavía no, pide el diagnóstico.

**CTA:** Escribir a Drawboard → `/contacto/`

**Metadatos**

- Título: `Drawboard — Ideas en cultura`
- Descripción: `Estudio en Bogotá para festivales, espacios, sellos y productores. Ordenamos la oferta y construimos la pieza digital que sigue cuando la campaña se apaga.`

---

## Cómo trabajamos `/servicios/`

**Audiencia.** Quien ya entendió la portada y quiere saber qué compra.  
**Intención.** Elegir Diagnóstico, Sistema o Continuidad.  
**Pregunta.** «¿Qué entra, qué no entra y cuál es el paso siguiente?»  
**Mensaje.** Hay tres encargos, en orden. El oficio (diseño, desarrollo, medición) vive dentro del encargo.  
**CTA principal.** «Pedir diagnóstico» → `/contacto/?pieza=diagnostico`.  
**CTA secundario.** «Escribir sobre un Sistema» → `/contacto/?pieza=sistema`.  
**Enlaces.** Inicio, Proyectos, Contacto. Sin fichas relacionadas de SEO, apps o IA.

### Texto

**Etiqueta:** Cómo trabajamos

**h1:** Un proyecto cultural necesita un sistema, no otra campaña.

**Introducción:** El encargo empieza por una acción. Alguien tiene que poder comprar, reservar, patrocinar o escribir. Lo demás se cotiza aparte, o no se hace.

**h2:** Diagnóstico

**Problema.** Hay fecha, programación o una oferta, y no está claro qué pieza hace falta.

**Qué recibe.** Una sesión y un documento corto: a quién se dirige, qué acción importa, qué se construiría y qué queda fuera. También una recomendación: seguir con un Sistema, o no seguir.

**Qué no entra.** Diseño final, desarrollo, pauta, redes y revisión de contratos.

**Qué necesitamos de ti.** A quien decide el presupuesto, la fecha o la oferta actual, y respuestas dentro del plazo que acordemos.

**Listo cuando.** Puedes aceptar o rechazar el Sistema con el alcance por escrito.

**CTA:** Pedir diagnóstico

**h2:** Sistema

**Problema.** El proyecto se anuncia, y cuando la campaña termina no queda dónde cobrar, reservar o explicar la oferta.

**Qué recibe.**

- A quién llega y qué se le pide que haga.
- Identidad usable en esa pieza, no un libro de marca suelto.
- Una página o un flujo publicado.
- El formulario o la integración que hayamos escrito en el alcance.
- Una nota de qué evento se mide, y un plan de mejora que no dependa de publicar todos los días.
- Accesos y, si hay código, el repositorio de esa pieza.

**Qué no entra, salvo que se cotice en un anexo.** Pauta, gestión de redes, video, software a medida, aplicaciones, tiendas, migración de código, SEO mensual, automatizaciones no escritas y soporte sin fecha de fin.

**Qué necesitamos de ti.** Textos y decisiones en las revisiones incluidas. Dominio y cuentas. Una sola persona que apruebe.

**Listo cuando.** La acción acordada se puede completar en la pieza publicada. Eso no es una meta de ventas.

**CTA:** Escribir sobre un Sistema

**h2:** Continuidad

**Problema.** La pieza ya está en uso y hace falta mirar la acción, no encargar otro oficio.

**Qué recibe.** Una revisión del periodo, los cambios acordados (con tope de horas o de ítems) y una lista de lo que no se toca.

**Qué no entra.** Paquetes de contenido, anuncios y desarrollo abierto.

**Qué necesitamos de ti.** Acceso a la medición y alguien que diga qué va primero.

**Listo cuando.** Hay una decisión de seguir, ajustar o parar, con el número de esa acción: solicitudes, reservas o entradas. No con seguidores.

**Condición.** Solo después de un Sistema entregado por Drawboard.

**CTA:** Preguntar por continuidad → `/contacto/?pieza=continuidad`

**h2:** Qué no hacemos

No publicamos fichas de SEO, pauta, redes, comercio electrónico, inteligencia artificial, automatización, aplicaciones ni migración de código. No prometemos una plataforma en quince días. No damos concepto jurídico ni representación. No ofrecemos beneficios de la contribución de espectáculos públicos ni del incentivo de la Ley de Cine como si sirvieran para cualquier proyecto.

Si el patrocinio necesita un contrato, eso lo ve un abogado, con su propio acuerdo. Nosotros podemos ordenar fechas, documentos y el presupuesto del proyecto.

**h2:** Preguntas

**¿Cuánto cuesta?**  
No hay una tarifa publicada. El precio sale de las horas de definición, diseño, construcción, prueba y reuniones, más terceros, revisiones incluidas y el soporte hasta una fecha. Sin esas horas no damos un número.

**¿Trabajan solo en cultura?**  
La oferta pública es para proyectos culturales que ya operan. Otros encargos no tienen página.

**¿El diagnóstico se descuenta del Sistema?**  
Solo si está escrito en la propuesta. No se asume.

**¿Pueden garantizar entradas o patrocinios?**  
No. Garantizamos el alcance entregado: que la acción se pueda hacer en la pieza. El resultado comercial depende de la oferta, el precio y la operación, y eso no lo controlamos.

**¿Dónde están?**  
En Bogotá. El trabajo con clientes de otras ciudades es remoto. No tenemos oficina en Florida ni planes con nombres de paquete.

**Metadatos**

- Título: `Cómo trabajamos — Drawboard`
- Descripción: `Diagnóstico, Sistema y Continuidad para proyectos culturales que ya operan. Qué entra, qué no entra y cómo se sabe que el encargo está listo.`

---

## Proyectos `/proyectos/`

**Audiencia.** Quien quiere una prueba antes de escribir.  
**Intención.** Confiar, o ver que no hay clientes publicados.  
**Pregunta.** «¿Esto lo hicieron para alguien?»  
**Mensaje.** No todavía. Hay tres maquetas de oficio, marcadas como tales.  
**CTA principal.** «Cuéntanos la fecha» → `/contacto/`.  
**CTA secundario.** «Ver cómo trabajamos» → `/servicios/`.

### Texto

**Etiqueta:** Proyectos

**h1:** Todavía no hay casos de clientes.

Lo que sigue son estudios internos. Sirven para mostrar criterio de interfaz e identidad. No tienen cliente, fecha de encargo ni resultado de negocio. No los uses como prueba de ventas, de patrocinio ni de un producto en el mercado.

Cuando exista un encargo con permiso para contarlo, esta página dirá el contexto, el reto, qué hizo Drawboard, qué se entregó y cómo se comprobó el resultado. Hasta entonces, no hay logos, cifras ni testimonios.

**h2:** Aether  
**Etiqueta visible:** Estudio interno  
**Texto:** Maqueta de una interfaz en escritorio y en teléfono, con una sola jerarquía visual.  
**Alt:** Maqueta en un portátil y un teléfono, con una interfaz editorial en tonos azul oscuro y violeta.  
**No decir:** plataforma SaaS, cliente, métrica.

**h2:** Northline  
**Etiqueta visible:** Estudio interno  
**Texto:** Maqueta de identidad en una pantalla fija. No hay pieza en movimiento publicada.  
**Alt:** Maqueta de una identidad en un monitor y un teléfono, en tonos carbón, arena y ámbar.  
**No decir:** video, motion entregado, cliente.

**h2:** Vespera  
**Etiqueta visible:** Estudio interno  
**Texto:** Maqueta de una misma identidad en varias pantallas de teléfono.  
**Alt:** Maqueta de una interfaz de marca en dos teléfonos, en tonos vino y champagne.  
**No decir:** aplicación de un cliente, descarga, usuarios.

**Cierre:** Si tienes un proyecto con fecha, el siguiente paso no es parecerse a estas maquetas. Es acordar la acción que la pieza tiene que permitir.

**CTA:** Cuéntanos la fecha

**Metadatos**

- Título: `Proyectos — Drawboard`
- Descripción: `Estudios internos de interfaz e identidad. Drawboard aún no publica casos de clientes ni resultados de negocio.`

---

## Nosotros `/nosotros/`

**Audiencia.** Quien quiere saber quién responde y desde dónde.  
**Intención.** Confirmar que no es una agencia genérica ni una oficina en otra ciudad.  
**Pregunta.** «¿Quiénes son y qué no hacen?»  
**Mensaje.** Un estudio en Bogotá. El criterio es cultural. La prueba de clientes todavía no está en el sitio.  
**CTA principal.** «Cuéntanos la fecha» → `/contacto/`.  
**CTA secundario.** «Ver cómo trabajamos» → `/servicios/`.

### Texto

**Etiqueta:** Nosotros

**h1:** Drawboard es un estudio en Bogotá.

Ordenamos la oferta de proyectos culturales que ya operan y construimos la pieza digital que esa oferta necesita. Diseño y desarrollo entran ahí. No se venden como una lista de oficios.

No somos una firma de abogados, ni una productora de campañas, ni un equipo con oficina en Orlando, Miami u otras ciudades de Florida.

El sitio muestra tres maquetas propias. Cuando podamos contar un encargo con nombre y resultado, estará en Proyectos, con permiso de quien lo encargó.

**CTA:** Cuéntanos la fecha

**Metadatos**

- Título: `Nosotros — Drawboard`
- Descripción: `Estudio en Bogotá para proyectos culturales que ya operan. Construimos la pieza digital que sigue cuando la campaña se apaga.`

El texto actual de Nosotros («agencia de marketing cultural» que «hace diseño, desarrollo y marketing») se reemplaza por este. Decir agencia y tres oficios contradice la fase 2.

---

## Contacto `/contacto/`

**Audiencia.** Quien ya sabe qué pieza pregunta, o quien todavía no.  
**Intención.** Dejar datos suficientes para una respuesta útil.  
**Pregunta.** «¿Cómo les cuento el proyecto sin llenar un formulario largo?»  
**Mensaje.** Hace falta la organización, la acción y el plazo. El correo es el canal que sí existe hoy.  
**CTA principal.** Enviar, solo cuando el envío llegue a un buzón. Hasta entonces, el botón principal es escribir a `hello@drawboard.co`.  
**CTA secundario.** WhatsApp, con el número ya publicado `+57 301 599 3300`, armado como `https://wa.me/573015993300`. El enlace actual del sitio mete espacios y paréntesis en `wa.me`; eso hay que corregirlo al implementar. No es un canal nuevo.

### Formulario

Campos, en este orden:

1. Nombre. Obligatorio.
2. Correo. Obligatorio.
3. Organización. Obligatorio.
4. Qué tiene que quedar funcionando. Obligatorio. Pista: «Entradas, reservas, patrocinio, contacto u otra acción.»
5. Enlace del proyecto. Opcional. Pista: «Sitio, red o documento. Si no hay, déjalo vacío.»
6. Plazo. Obligatorio. Select: «Hay una fecha concreta», «En este trimestre», «Todavía no hay fecha».
7. Pieza. Select, puede venir en la URL (`diagnostico`, `sistema`, `continuidad`). Opciones visibles: Diagnóstico, Sistema, Continuidad, Todavía no sé.
8. Casilla: «Acepto que Drawboard use estos datos para responder este mensaje.» Enlace a `/privacidad/`. Obligatoria.

Se quitan como obligatorios: teléfono, «¿cómo nos conoces?» y el presupuesto. El presupuesto se pide en la propuesta, cuando existan horas.

**Botón:** Enviar mensaje

**Errores, al salir del campo o al intentar enviar:**

- Nombre: «Falta tu nombre.»
- Correo: «Escribe un correo donde podamos responder.»
- Organización: «Falta el nombre del proyecto o de la organización.»
- Acción: «Cuéntanos qué tiene que quedar funcionando.»
- Plazo: «Elige un plazo.»
- Casilla: «Hace falta tu aceptación para escribirte.»
- Fallo de envío: «No salió. Escríbenos a hello@drawboard.co.»

**Confirmación, solo si el mensaje llegó al buzón:** «Llegó. Te escribimos a este correo sobre [organización].»

No decir que llegó si el formulario sigue en el `setTimeout` de 1,1 segundos sin destino. Mientras eso no cambie, no se muestra el formulario como si enviara. Se muestra el correo y el WhatsApp, y esta frase: «El formulario vuelve cuando los mensajes lleguen a nuestro correo.»

**No escribir:** respuesta en menos de 24 horas, respuesta automática, ni un CRM que no está en el repositorio.

**h1:** Cuéntanos la fecha y qué tiene que quedar funcionando.

**Introducción:** Festivales, espacios, sellos y productores. Si aún no sabes qué construir, pide el diagnóstico. Si ya sabes la acción, habla del Sistema.

**Datos visibles**

- Correo: hello@drawboard.co
- WhatsApp: +57 301 599 3300
- Ciudad: Bogotá, Colombia

**Metadatos**

- Título: `Contacto — Drawboard`
- Descripción: `Escribe a Drawboard en Bogotá. Cuéntanos la organización, la fecha y qué tiene que quedar funcionando.`

---

## Pie, en todas las páginas

**Tagline, se mantiene:** Cultural & creative marketing.

**Ciudad, se mantiene:** Bogotá.

**Enlaces:** Cómo trabajamos, Proyectos, Nosotros, Contacto, Privacidad, Términos.

**No poner en el pie:** Servicios como catálogo, Blog, Local, ni una lista de oficios.

---

## Palabras que no se publican sin una prueba que hoy no existe

garantizado, líder, únicos, revolucionamos, resultados comprobados, aumentamos ventas, casos de éxito, clientes que confían, testimonio, certificación, planes Starter, Growth, Full Digital, MVP en 15 días, oficina en Orlando, Miami, Tampa, Jacksonville o Kissimmee, asesoría jurídica, beneficio tributario, Ley 1493 como gancho, incentivo de la Ley de Cine para cualquier proyecto.

Tampoco cifras de impacto, logos de clientes ni nombres de personas que no hayan autorizado el texto.

---

## Accesibilidad del contenido

- Un solo `h1` por página. Las fases y las tres piezas son `h2` o `h3`, en el orden en que se leen.
- Cada enlace dice el destino: «Ver cómo trabajamos», «Pedir diagnóstico», «Ver los estudios». No «Ver más», «Ver proyecto» ni «Leer».
- Los alt describen la maqueta que se ve. No llevan «SEO», «SaaS» ni «Drawboard Bogotá».
- El estado de error del formulario va junto al campo, no solo en el color.
- «Estudio interno» es texto, no una etiqueta que dependa del color.
- Privacidad se enlaza al lado de la casilla, con el nombre de la página.

---

## Bloque y objetivo comercial

| Bloque | Página | Objetivo |
| --- | --- | --- |
| h1 + subtítulo | Inicio | Reconocer al comprador cultural que ya opera |
| Cuatro fases | Inicio | Entender que es un solo encargo, no un catálogo |
| Tres formas de entrar | Inicio | Elegir Diagnóstico, Sistema o Continuidad |
| Estudios de oficio | Inicio | No confundir maquetas con clientes |
| Cierre con fecha | Inicio | Ir a contacto con un motivo |
| Diagnóstico, Sistema, Continuidad | Cómo trabajamos | Saber alcance, límite y criterio de listo |
| Qué no hacemos | Cómo trabajamos | Filtrar pedidos de pauta, app, legal e impuestos |
| Preguntas de precio y garantía | Cómo trabajamos | Evitar una expectativa que no se puede cumplir |
| Estudios con etiqueta | Proyectos | Sostener confianza sin inventar prueba |
| Ciudad y límites | Nosotros | Alinear Bogotá y descartar la lectura de agencia generalista |
| Correo y WhatsApp | Contacto | Escribir por un canal que sí existe |
| Formulario | Contacto | Solo cuando el envío llegue a un buzón |

---

## Lo que falta y no se inventa

| Falta | Quién lo aporta | Mientras no esté |
| --- | --- | --- |
| Un caso con cliente, rol, entrega y resultado, y permiso escrito | El fundador | Proyectos declara que no hay casos |
| Foto del estudio o del equipo, si Nosotros va a mostrar personas | El fundador | Nosotros no lleva retrato |
| Testimonios | El cliente, por escrito | No se redactan |
| Horas reales para cotizar | El fundador, en el primer diagnóstico | No hay precios en la web |
| Buzón que reciba el formulario | Implementación. Hoy no hay API | Contacto muestra correo y WhatsApp |
| Confirmación de que hello@drawboard.co y el WhatsApp se leen | El fundador | No prometer plazo de respuesta |
| Que las redes del pie (Instagram, Facebook, TikTok, LinkedIn) sean perfiles reales | El fundador. La auditoría no los abrió | No decir «síguenos» como prueba de comunidad |
| Artículos útiles sobre la oferta | Cuando exista un encargo o una entrevista | El blog no vuelve al menú |
| Revisión de un abogado si algún texto menciona contratos o derechos | Un abogado con tarjeta | El párrafo de Cómo trabajamos se queda en el límite ya escrito. No se amplía |
