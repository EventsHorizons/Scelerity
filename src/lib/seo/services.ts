export type SeoPillar = "diseno" | "desarrollo" | "marketing";

export type ServicePage = {
  slug: string;
  pillar: SeoPillar;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: { eyebrow: string; headline: string; sub: string };
  problem: { headline: string; paragraphs: string[] };
  solution: { headline: string; paragraphs: string[] };
  benefits: { title: string; text: string }[];
  useCases: string[];
  technologies: string[];
  faq: { q: string; a: string }[];
  relatedServices: string[];
  relatedBlogSlugs: string[];
};

const sharedCta = {
  primary: "Hablemos de tu proyecto",
  secondary: "Ver servicios",
};

export const SEO_SERVICES: ServicePage[] = [
  {
    slug: "diseno-web",
    pillar: "diseno",
    title: "Diseño Web",
    metaTitle: "Diseño de páginas web — Scelerity",
    metaDescription:
      "Sitios y páginas de llegada que explican la oferta, se leen en el teléfono y dejan un contacto. El plazo se acuerda al definir el alcance.",
    keywords: ["diseño web", "diseño web profesional", "ux ui", "landing page"],
    hero: {
      eyebrow: "Diseño",
      headline: "Cómo se usa la pantalla.",
      sub: "Orden de la información y de los pasos para que alguien termine lo que vino a hacer.",
    },
    problem: {
      headline: "La página no explica la oferta",
      paragraphs: [
        "Quien llega con una intención se va si la primera pantalla no dice qué es el negocio ni qué hacer después.",
        "Un sitio cuidado que no ordena la lectura no resuelve el encargo. Hace falta jerarquía, el mismo sentido en el teléfono y un contacto visible.",
      ],
    },
    solution: {
      headline: "Una lectura con un siguiente paso",
      paragraphs: [
        "Ordenamos qué se dice primero, qué se deja para después y dónde se escribe.",
        "Cada sección responde una pregunta y acerca una acción concreta: escribir, reservar o comprar.",
      ],
    },
    benefits: [
      { title: "Lectura clara", text: "La oferta se entiende en la primera pantalla, en el teléfono y en el escritorio." },
      { title: "Misma marca", text: "El sitio usa el mismo sistema visual que el resto de las piezas." },
      { title: "Teléfono", text: "La lectura no cambia de sentido al pasar de pantalla." },
      { title: "Peso", text: "La página carga sin pedir paciencia para entender la oferta." },
    ],
    useCases: ["Rediseño de un sitio", "Páginas de una campaña", "Sitio de un servicio", "Primera página de un negocio"],
    technologies: ["Jerarquía", "Tipo", "Estados", "Sistema"],
    faq: [
      { q: "¿Cuánto tarda un diseño web?", a: "Depende del alcance. El plazo se dice en la primera conversación, antes de empezar." },
      { q: "¿Incluyen desarrollo?", a: "Sí. Diseño y desarrollo van integrados para garantizar fidelidad y rendimiento." },
    ],
    relatedServices: ["branding", "desarrollo-web", "marketing-digital"],
    relatedBlogSlugs: ["pagina-web-conversiones", "branding-digital"],
  },
  {
    slug: "desarrollo-web",
    pillar: "desarrollo",
    title: "Desarrollo Web",
    metaTitle: "Desarrollo web — Scelerity",
    metaDescription:
      "El sitio se construye para seguir en pie cuando llega gente, y para cambiar sin reescribirlo entero.",
    keywords: ["desarrollo web", "desarrollo web a medida", "sitios web"],
    hero: {
      eyebrow: "Desarrollo",
      headline: "Sitios y herramientas.",
      sub: "Para presentar un negocio, recibir mensajes, vender o administrar cuentas.",
    },
    problem: {
      headline: "La plantilla ya no deja crecer",
      paragraphs: [
        "Un sitio armado con piezas sueltas se vuelve lento y caro de tocar cuando el negocio pide otra página, otro idioma o otra integración.",
        "Hace falta una base que acepte el siguiente cambio sin empezar de cero.",
      ],
    },
    solution: {
      headline: "Una base que se puede seguir",
      paragraphs: [
        "Construimos la estructura, el contenido y el despliegue como un solo sistema.",
        "Cada decisión prioriza carga, acceso y la posibilidad de extender sin reescribirlo todo.",
      ],
    },
    benefits: [
      { title: "Carga", text: "La página responde antes de que quien llegó pierda la intención." },
      { title: "Encontrable", text: "Títulos, estructura y direcciones limpias, para que el sitio se pueda indexar." },
      { title: "Cambio", text: "Una pieza nueva no obliga a rehacer las demás." },
      { title: "Conexión", text: "Formularios, pagos y herramientas que el negocio ya usa." },
    ],
    useCases: ["Sitio de una empresa", "Producto en la web", "Portal de clientes", "Tienda con sitio propio"],
    technologies: ["Estructura", "Carga", "Acceso", "Datos"],
    faq: [
      { q: "¿Con qué se construye?", a: "Con la base que el producto necesita. El nombre de la herramienta no es el encargo." },
      { q: "¿Hay mantenimiento?", a: "Sí, si queda escrito: qué se vigila, qué se cambia y cada cuánto." },
    ],
    relatedServices: ["diseno-web", "desarrollo-apps", "automatizacion"],
    relatedBlogSlugs: ["velocidad-core-web-vitals", "seo-2026"],
  },
  {
    slug: "desarrollo-apps",
    pillar: "desarrollo",
    title: "Desarrollo de Aplicaciones",
    metaTitle: "Aplicaciones — Scelerity",
    metaDescription:
      "Aplicaciones con un flujo que alguien puede volver a abrir. El alcance se corta antes de construir.",
    keywords: ["desarrollo de apps", "aplicaciones a medida", "mvp", "software a medida"],
    hero: {
      eyebrow: "Desarrollo",
      headline: "Una app es un hábito.",
      sub: "Definimos el recorrido que tiene que poder repetirse, y lo construimos hasta dejarlo usable.",
    },
    problem: {
      headline: "La pantalla no alcanza",
      paragraphs: [
        "Un flujo a medias se abandona antes de volverse útil. La deuda temprana hace caro el segundo uso.",
        "Hace falta decidir qué acción es la crítica y construir esa, no todas.",
      ],
    },
    solution: {
      headline: "El recorrido que se repite",
      paragraphs: [
        "Cortamos el alcance al flujo que demuestra el producto y lo dejamos usable, con estados vacíos y de error.",
        "La siguiente función entra cuando esa primera ya se puede usar.",
      ],
    },
    benefits: [
      { title: "Repetición", text: "La segunda vez que alguien abre la app, la tarea se reconoce." },
      { title: "Alcance", text: "El flujo crítico se acuerda antes de sumar pantallas." },
      { title: "Base", text: "Lo construido admite el siguiente paso sin tirar lo anterior." },
      { title: "Conexión", text: "Acceso, datos y pagos entran si el flujo los necesita." },
    ],
    useCases: ["Primera versión", "Paneles internos", "Herramientas entre empresas", "Reservas"],
    technologies: ["Flujos", "Estados", "Datos", "Acceso"],
    faq: [
      { q: "¿Web o teléfono?", a: "La que use quien tiene que volver. Se recomienda al ver el flujo, no antes." },
      { q: "¿Cuánto cuesta una primera versión?", a: "Depende de lo que entre. Después de la conversación hay una propuesta con fases." },
    ],
    relatedServices: ["desarrollo-web", "automatizacion", "inteligencia-artificial"],
    relatedBlogSlugs: ["ia-potencia-empresas"],
  },
  {
    slug: "seo",
    pillar: "marketing",
    title: "SEO",
    metaTitle: "SEO — Scelerity",
    metaDescription:
      "Que el sitio aparezca cuando la búsqueda ya tiene una intención. Técnica, estructura y contenido. Sin una posición prometida.",
    keywords: ["seo", "posicionamiento web", "seo técnico", "agencia seo"],
    hero: {
      eyebrow: "Búsqueda",
      headline: "Estar cuando buscan.",
      sub: "Alineamos técnica, estructura y texto con la forma real en que se busca. No prometemos una posición.",
    },
    problem: {
      headline: "El sitio no aparece",
      paragraphs: [
        "Un sitio bien hecho que no responde a una búsqueda concreta no compite con quien sí la responde.",
        "Sin una estructura que se pueda rastrear y páginas que contesten una intención, el orgánico se queda en el informe.",
      ],
    },
    solution: {
      headline: "Búsqueda y página, juntas",
      paragraphs: [
        "Revisamos qué impide indexar, qué páginas faltan y qué texto no contesta la pregunta.",
        "Cada cambio se puede leer: qué se midió y qué se decidió con eso. El puesto en la lista no se garantiza.",
      ],
    },
    benefits: [
      { title: "Técnica", text: "Indexación, velocidad y una estructura que se puede rastrear." },
      { title: "Intención", text: "Páginas que contestan una búsqueda, no un volumen suelto." },
      { title: "Autoría", text: "El contenido sale de quien hace el trabajo, no de un texto genérico." },
      { title: "Lectura", text: "Se mira qué búsqueda llega a qué página. No se inventa un ingreso." },
    ],
    useCases: ["Auditoría del sitio", "Cambio de dominio", "Arquitectura de contenidos", "Búsqueda local"],
    technologies: ["Índice", "Estructura", "Texto", "Medición"],
    faq: [
      { q: "¿Cuándo se ve?", a: "Lo técnico se puede revisar en semanas. Una posición no tiene fecha prometida." },
      { q: "¿Compran enlaces?", a: "No. El trabajo es la estructura, el texto y la correspondencia entre búsqueda y página." },
    ],
    relatedServices: ["marketing-digital", "diseno-web", "desarrollo-web"],
    relatedBlogSlugs: ["seo-2026", "velocidad-core-web-vitals"],
  },
  {
    slug: "branding",
    pillar: "diseno",
    title: "Branding Digital",
    metaTitle: "Branding e identidad de marca — Scelerity",
    metaDescription:
      "Identidad de marca para empresas: nombre, tono, sistema visual y manual para usar la marca en el día a día.",
    keywords: ["branding digital", "identidad visual", "marca", "posicionamiento de marca"],
    hero: {
      eyebrow: "Diseño",
      headline: "Identidad de marca.",
      sub: "Qué dice la marca, cómo se ve y las reglas para usarla. No es solo el logo.",
    },
    problem: {
      headline: "Las piezas no se parecen entre sí",
      paragraphs: [
        "Un logo suelto, sin tono ni reglas, se usa distinto en cada canal.",
        "Sin un sistema, cada pieza nueva hay que inventarla desde cero.",
      ],
    },
    solution: {
      headline: "Un sistema para usar la marca",
      paragraphs: [
        "Definimos qué dice la marca, cómo se ve y cómo se aplica en web, redes y piezas del día a día.",
        "El entregable incluye las reglas, no solo el archivo del logo.",
      ],
    },
    benefits: [
      { title: "Reconocimiento", text: "La marca se distingue por lo que dice y por lo que deja de decir." },
      { title: "Coherencia", text: "Las piezas nuevas salen del mismo sistema, no de un archivo suelto." },
      { title: "Uso", text: "Reglas para aplicar la marca sin pedir una pieza cada semana." },
      { title: "Menos retrabajo", text: "La siguiente campaña no empieza desde cero." },
    ],
    useCases: ["Marca nueva", "Cambio de identidad", "Reglas de uso", "Sistema para un equipo"],
    technologies: ["Nombre", "Tono", "Signo", "Reglas"],
    faq: [
      { q: "¿Incluyen logo?", a: "Sí, como parte de un sistema de identidad completo, no como archivo aislado." },
      { q: "¿Solo digital?", a: "El sistema funciona en digital y se adapta a aplicaciones impresas básicas." },
    ],
    relatedServices: ["diseno-web", "marketing-digital", "diseno-web"],
    relatedBlogSlugs: ["branding-digital"],
  },
  {
    slug: "marketing-digital",
    pillar: "marketing",
    title: "Marketing Digital",
    metaTitle: "Marketing digital — Scelerity",
    metaDescription:
      "Campaña, sitio y mensaje con el mismo texto. Cada canal entra si queda escrito en el encargo. Sin una venta prometida.",
    keywords: ["marketing digital", "publicidad digital", "comunicación digital"],
    hero: {
      eyebrow: "Mensaje",
      headline: "Marketing digital.",
      sub: "Contenidos y anuncios que llevan a una página concreta. No incluye una venta garantizada.",
    },
    problem: {
      headline: "La atención no llega",
      paragraphs: [
        "Un anuncio que promete otra cosa que la página pierde a quien hizo clic.",
        "Depender de un solo canal deja el negocio callado cuando ese canal cambia de reglas.",
      ],
    },
    solution: {
      headline: "Un mensaje, varios canales",
      paragraphs: [
        "Definimos qué se repite, dónde se publica y qué página recibe a quien llega.",
        "Cada canal entra solo si está en el encargo, con una forma de leer qué pasó después.",
      ],
    },
    benefits: [
      { title: "Continuidad", text: "El anuncio y la página dicen lo mismo." },
      { title: "Alcance", text: "Cada canal entra solo si queda escrito." },
      { title: "Repetición", text: "El mensaje se puede volver a usar sin reescribirlo entero." },
      { title: "Lectura", text: "Se mira qué llegó a la página. No se inventa un resultado." },
    ],
    useCases: ["Lanzamiento", "Contactos", "Tienda", "Recordar la marca"],
    technologies: ["Mensaje", "Canal", "Página", "Lectura"],
    faq: [
      { q: "¿Manejan pauta?", a: "Sí, si el canal queda en el encargo. El informe dice qué se gastó y qué llegó a la página." },
      { q: "¿Empresas y personas?", a: "Las dos. El ciclo de compra cambia el mensaje, no el criterio." },
    ],
    relatedServices: ["seo", "diseno-web", "inteligencia-artificial"],
    relatedBlogSlugs: ["marketing-digital-integrado", "seo-2026"],
  },
  {
    slug: "inteligencia-artificial",
    pillar: "desarrollo",
    title: "Inteligencia Artificial",
    metaTitle: "Inteligencia artificial — Scelerity",
    metaDescription:
      "Un caso concreto de IA dentro del trabajo que ya existe. La decisión sigue en el equipo. Sin un demo que nadie usa.",
    keywords: ["inteligencia artificial empresas", "ia para empresas", "automatización ia"],
    hero: {
      eyebrow: "Criterio",
      headline: "La decisión sigue siendo humana.",
      sub: "Elegimos un caso, lo conectamos al flujo que ya existe y dejamos la revisión en el equipo.",
    },
    problem: {
      headline: "El demo no entra al día",
      paragraphs: [
        "Una herramienta sin proceso se prueba una vez y se abandona.",
        "Hace falta un caso, un límite y una persona que corrija el resultado.",
      ],
    },
    solution: {
      headline: "Un caso, no un discurso",
      paragraphs: [
        "Nombramos la tarea repetida, el dato que la alimenta y quién aprueba la salida.",
        "Lo repetitivo sale del día. El criterio no.",
      ],
    },
    benefits: [
      { title: "Tarea", text: "Menos trabajo repetido en el caso que se eligió." },
      { title: "Contexto", text: "La herramienta usa el material del negocio, no un ejemplo genérico." },
      { title: "Límite", text: "Está escrito qué no debe decidir la máquina." },
      { title: "Control", text: "Una persona revisa antes de que el resultado salga." },
    ],
    useCases: ["Soporte con revisión", "Borradores de texto", "Clasificar solicitudes", "Documentos repetidos"],
    technologies: ["Caso", "Límite", "Revisión", "Registro"],
    faq: [
      { q: "¿Reemplaza personas?", a: "No. Saca una tarea repetida. La decisión queda en el equipo." },
      { q: "¿Y los datos sensibles?", a: "Se define qué puede ver la herramienta y qué no sale del negocio." },
    ],
    relatedServices: ["automatizacion", "desarrollo-apps", "marketing-digital"],
    relatedBlogSlugs: ["ia-potencia-empresas"],
  },
  {
    slug: "automatizacion",
    pillar: "desarrollo",
    title: "Automatización",
    metaTitle: "Automatización — Scelerity",
    metaDescription:
      "Lo que se copia entre herramientas sale del día, con un aviso cuando falla. Sin prometer horas recuperadas.",
    keywords: ["automatización", "integraciones", "procesos"],
    hero: {
      eyebrow: "Operación",
      headline: "Lo que se repite sale del día.",
      sub: "Conectamos las herramientas que ya existen. Lo que debe seguir siendo manual se deja escrito.",
    },
    problem: {
      headline: "Copiar datos gasta el día",
      paragraphs: [
        "Pasar información de una herramienta a otra mete errores y ocupa la atención del trabajo que sí importa.",
        "Cada sistema aislado obliga a alguien a hacer de puente.",
      ],
    },
    solution: {
      headline: "El puente deja de ser una persona",
      paragraphs: [
        "Mapeamos qué se repite, qué debe quedar manual y dónde se rompe.",
        "La tarea sale del calendario. Si falla, hay un aviso y un registro.",
      ],
    },
    benefits: [
      { title: "Menos traspaso", text: "El dato no se vuelve a escribir a mano." },
      { title: "Menos error", text: "Se corta el punto donde el copiado se equivoca." },
      { title: "Aviso", text: "Cuando el flujo se rompe, alguien lo ve." },
      { title: "Volumen", text: "El mismo proceso aguanta más casos sin sumar el mismo trabajo." },
    ],
    useCases: ["CRM y mensajes", "Altas de clientes", "Reportes", "Avisos entre sistemas"],
    technologies: ["Mapa", "Conexión", "Aviso", "Excepción"],
    faq: [
      { q: "¿Hay que cambiar de software?", a: "No, si lo que ya usan se puede conectar. Si no se puede, se dice antes de empezar." },
      { q: "¿Qué se conecta?", a: "Las herramientas del encargo. No hay una lista fija." },
    ],
    relatedServices: ["inteligencia-artificial", "desarrollo-web", "desarrollo-apps"],
    relatedBlogSlugs: ["ia-potencia-empresas", "marketing-digital-integrado"],
  },
  {
    slug: "ecommerce",
    pillar: "desarrollo",
    title: "E-commerce",
    metaTitle: "E-commerce — Scelerity",
    metaDescription:
      "Ficha, catálogo y pago en un solo recorrido. Cada paso se ordena para no perder una compra ya decidida.",
    keywords: ["ecommerce", "tienda online", "desarrollo ecommerce"],
    hero: {
      eyebrow: "Tienda",
      headline: "Comprar es un recorrido.",
      sub: "Ordenamos ficha, catálogo y pago para que la decisión no se corte a mitad de camino.",
    },
    problem: {
      headline: "El pago interrumpe la decisión",
      paragraphs: [
        "Un catálogo lento o un pago confuso corta una compra que ya estaba tomada.",
        "Una tienda armada con piezas que no se hablan obliga a explicar el producto dos veces.",
      ],
    },
    solution: {
      headline: "Del objeto al pago",
      paragraphs: [
        "La ficha dice qué es, el catálogo deja encontrarlo y el pago confirma sin pedir una segunda decisión.",
        "Inventario y envío entran si la operación los necesita. La plataforma se elige después de ver el catálogo.",
      ],
    },
    benefits: [
      { title: "Hilo", text: "La compra conserva el mismo relato hasta la confirmación." },
      { title: "Carga", text: "La ficha se lee antes de que la espera la cierre." },
      { title: "Control", text: "Catálogo, precios y textos quedan en manos del negocio." },
      { title: "Operación", text: "Pago, envío e inventario conectados cuando hacen falta." },
    ],
    useCases: ["Tienda propia", "Pedido entre empresas", "Catálogo con variantes", "Cambio de plataforma"],
    technologies: ["Ficha", "Pago", "Stock", "Envío"],
    faq: [
      { q: "¿Plataforma o a medida?", a: "Depende del catálogo y del pago. La opción se propone después de verlos." },
      { q: "¿Se puede cambiar de plataforma?", a: "Sí, con un plan de direcciones para no perder las páginas que ya existen. Una posición no se garantiza." },
    ],
    relatedServices: ["desarrollo-web", "diseno-web", "marketing-digital"],
    relatedBlogSlugs: ["pagina-web-conversiones", "velocidad-core-web-vitals"],
  },
  {
    slug: "migracion-legacy",
    pillar: "desarrollo",
    title: "Migración y Refactorización de Código Legacy",
    metaTitle: "Migración de código heredado — Scelerity",
    metaDescription:
      "El sistema viejo deja de marcar el ritmo del producto. Se reescribe por partes, sin apagar el negocio.",
    keywords: [
      "migración legacy",
      "refactorización de código",
      "modernización de software",
    ],
    hero: {
      eyebrow: "Desarrollo",
      headline: "El código viejo no tiene que decidir el ritmo del producto.",
      sub: "Se reescribe lo que impide cambiar, por partes, sin detener lo que ya funciona.",
    },
    problem: {
      headline: "El monolito ya no aguanta el siguiente cambio",
      paragraphs: [
        "Cada feature toca demasiadas capas. La lógica de negocio queda atrapada y el equipo evita tocar lo crítico.",
        "Sin una base moderna, la interfaz no puede ser rápida ni escalable sin miedo a romper producción.",
      ],
    },
    solution: {
      headline: "Reescritura con criterio, no un rewrite ciego",
      paragraphs: [
        "Mapeamos qué conservar, qué extraer y qué reescribir. La migración avanza por fases para no detener el negocio.",
        "La lógica queda separada de la interfaz. La base de datos se elige según el caso, no según una moda.",
      ],
    },
    benefits: [
      { title: "Velocidad de cambio", text: "Menos miedo al deploy y ciclos de entrega más cortos." },
      { title: "Interfaz moderna", text: "UI rápida, clara y lista para crecer." },
      { title: "Arquitectura viva", text: "Código documentado y separado por responsabilidades." },
      { title: "Continuidad", text: "Migración por fases sin apagar el producto actual." },
    ],
    useCases: [
      "Sistemas que ya no se pueden tocar",
      "Paneles internos viejos",
      "Datos atrapados en la interfaz",
      "Deuda que bloquea el siguiente cambio",
    ],
    technologies: ["Diagnóstico", "Fases", "Lógica", "Interfaz"],
    faq: [
      {
        q: "¿Hay que reescribir todo de una vez?",
        a: "No. Definimos un perímetro y migramos por fases para proteger el negocio.",
      },
      {
        q: "¿Qué frameworks usan?",
        a: "La que el producto necesita. El nombre de la herramienta se decide con el perímetro, no antes.",
      },
    ],
    relatedServices: ["desarrollo-web", "desarrollo-apps", "mvp-rapido"],
    relatedBlogSlugs: ["velocidad-core-web-vitals", "ia-potencia-empresas"],
  },
  {
    slug: "mvp-rapido",
    pillar: "desarrollo",
    title: "MVP Ultra-Rápido como Servicio (MaaS)",
    metaTitle: "Primera versión de un producto — Scelerity",
    metaDescription:
      "Una primera versión usable, con el flujo acordado y un plazo definido en la conversación inicial. No publicamos un plazo fijo.",
    keywords: [
      "mvp",
      "prueba de concepto",
      "primera versión",
    ],
    hero: {
      eyebrow: "Desarrollo",
      headline: "Una primera versión usable.",
      sub: "El flujo crítico se acuerda al empezar. El plazo sale de ese alcance, no de una promesa fija de quince días.",
    },
    problem: {
      headline: "Sin un producto usable, la idea no se valida",
      paragraphs: [
        "Esperar meses para ver la primera versión aplaza la única prueba que importa: si alguien la usa.",
        "Una presentación no sustituye un flujo que se puede abrir, pagar o rechazar.",
      ],
    },
    solution: {
      headline: "Un MVP con perímetro claro y salida a producción",
      paragraphs: [
        "Acordamos el flujo crítico, lo construimos y lo publicamos.",
        "Sale con repositorio, accesos y una base para la siguiente versión. No con un prototipo para tirar.",
      ],
    },
    benefits: [
      { title: "Tiempo", text: "El plazo sale del flujo acordado, no de una fecha de catálogo." },
      { title: "Producción", text: "Código desplegado, no solo un demo local." },
      { title: "Enfoque", text: "Solo el flujo que demuestra la hipótesis." },
      { title: "Continuidad", text: "Base técnica para la siguiente versión." },
    ],
    useCases: [
      "Pruebas de concepto para inversionistas",
      "Lanzamientos de nuevo producto",
      "Herramientas internas urgentes",
      "Validación de marketplace o SaaS",
    ],
    technologies: ["Alcance", "Flujo", "Publicación", "Repositorio"],
    faq: [
      {
        q: "¿Qué entra en la primera versión?",
        a: "El flujo acordado al inicio. Lo demás queda fuera hasta una siguiente fase.",
      },
      {
        q: "¿El código es mío?",
        a: "Sí. Entregamos repositorio y la base para seguir construyendo con tu equipo o con nosotros.",
      },
    ],
    relatedServices: ["desarrollo-apps", "desarrollo-web", "migracion-legacy"],
    relatedBlogSlugs: ["pagina-web-conversiones", "velocidad-core-web-vitals"],
  },
];

export { sharedCta };

export function getAllServiceSlugs() {
  return SEO_SERVICES.map((s) => s.slug);
}

export function getServiceBySlug(slug: string) {
  return SEO_SERVICES.find((s) => s.slug === slug);
}

export function getServicesByPillar(pillar: SeoPillar) {
  return SEO_SERVICES.filter((s) => s.pillar === pillar);
}

export const PILLAR_LABELS: Record<SeoPillar, string> = {
  diseno: "Diseño",
  desarrollo: "Desarrollo",
  marketing: "Marketing Digital",
};
