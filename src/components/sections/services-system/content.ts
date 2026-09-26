import type { Locale } from "@/data/content";

export type Copy = { es: string; en: string };

export type FieldKind =
  | "aperture"
  | "lattice"
  | "glyph"
  | "truss"
  | "shell"
  | "current"
  | "signal"
  | "front"
  | "gather"
  | "circuit";

export type Compose = "through" | "rise" | "flank" | "lead";

export type FieldTone = "ink" | "chalk";

export type Depth = {
  bg: string;
  fg: string;
  muted: string;
  subtle: string;
  tone: FieldTone;
};

export type CapabilityGroup = {
  title: Copy;
  items: Copy[];
};

export type ServiceEntry = {
  slug: string;
  index: string;
  title: Copy;
  manifesto: Copy;
  problem: Copy;
  response: Copy;
  capabilities: CapabilityGroup[];
  deliverables: Copy[];
  impact: Copy[];
  figure: Copy;
  image: {
    src: string;
    alt: Copy;
    line: Copy;
    key: Copy;
  };
  kind: FieldKind;
  compose: Compose;
  depth: Depth;
};

export function tx(locale: Locale, copy: Copy) {
  return copy[locale];
}

const paper: Depth = {
  bg: "#ffffff",
  fg: "#1c1c1e",
  muted: "#5e5952",
  subtle: "#8a847c",
  tone: "ink",
};

const ivory: Depth = {
  bg: "#f7f6f3",
  fg: "#1c1c1e",
  muted: "#5e5952",
  subtle: "#8a847c",
  tone: "ink",
};

const stone: Depth = {
  bg: "#e8e3db",
  fg: "#1c1c1e",
  muted: "#4e4943",
  subtle: "#6e6860",
  tone: "ink",
};

const dusk: Depth = {
  bg: "#c4bdb2",
  fg: "#1c1c1e",
  muted: "#3a3834",
  subtle: "#5c574f",
  tone: "ink",
};

const umber: Depth = {
  bg: "#6e675f",
  fg: "#f4f0e8",
  muted: "#e4ddd2",
  subtle: "#c8c0b4",
  tone: "chalk",
};

const ink: Depth = {
  bg: "#3f3a35",
  fg: "#f4f0e8",
  muted: "#d5d0c8",
  subtle: "#b7afa4",
  tone: "chalk",
};

const voidNight: Depth = {
  bg: "#2a2622",
  fg: "#f4f0e8",
  muted: "#c8c0b4",
  subtle: "#a39e96",
  tone: "chalk",
};

const voidDeep: Depth = {
  bg: "#171614",
  fg: "#f4f0e8",
  muted: "#b7afa4",
  subtle: "#8e8880",
  tone: "chalk",
};

const voidBlack: Depth = {
  bg: "#09090b",
  fg: "#f4f0e8",
  muted: "#a39e96",
  subtle: "#8e8e93",
  tone: "chalk",
};

export const PAGE = {
  hero: {
    label: { es: "Servicios", en: "Services" },
    title: { es: "Forma, base y señal.", en: "Form, structure, and signal." },
    key: { es: "la base.", en: "the base." },
    sub: {
      es: "Diseño, desarrollo, producto y distribución. Cada servicio parte de un problema concreto y termina en una pieza que el proyecto puede seguir usando.",
      en: "Design, engineering, product, and distribution. Each service starts from a concrete problem and ends in a piece the project can keep using.",
    },
    cta: { es: "Hablar del proyecto", en: "Talk about the project" },
    indexLabel: { es: "Índice", en: "Index" },
    crumb: { es: "Servicios", en: "Services" },
    home: { es: "Inicio", en: "Home" },
  },
  intro: {
    label: { es: "Qué hacemos", en: "What we do" },
    title: {
      es: "Una intervención, no un catálogo.",
      en: "An intervention, not a catalogue.",
    },
    body: {
      es: "No separamos la imagen del uso, ni el uso de la técnica que lo sostiene. El trabajo empieza por lo que no se entiende, no convierte o no aguanta — y termina en una pieza que el proyecto puede seguir usando.",
      en: "We do not separate image from use, or use from the technique that holds it. The work starts with what cannot be understood, does not convert, or does not hold — and ends in a piece the project can keep using.",
    },
  },
  hinge: {
    label: { es: "Profundidad", en: "Depth" },
    text: {
      es: "El contraste sube porque el trabajo cambia de naturaleza. De la forma visible a la estructura que la sostiene.",
      en: "Contrast rises because the work changes nature. From the visible form to the structure that holds it.",
    },
  },
  close: {
    label: { es: "Conversación", en: "Conversation" },
    title: {
      es: "El proyecto, dicho con precisión.",
      en: "The project, said precisely.",
    },
    body: {
      es: "Si el problema ya tiene nombre, el siguiente paso es definirlo juntos. Sin lista de promesas: alcance, forma y base.",
      en: "If the problem already has a name, the next step is to define it together. No list of promises: scope, form, and structure.",
    },
    cta: { es: "Hablar del proyecto", en: "Talk about the project" },
  },
  enter: { es: "Ver el servicio", en: "View the service" },
  labels: {
    problem: { es: "Problema", en: "Problem" },
    response: { es: "Respuesta", en: "Response" },
    capabilities: { es: "Capacidades", en: "Capabilities" },
    deliverables: { es: "Entregables", en: "Deliverables" },
    impact: { es: "Impacto", en: "Impact" },
  },
};

export const SERVICES: ServiceEntry[] = [
  {
    slug: "diseno-web",
    index: "01",
    title: { es: "Diseño web", en: "Web design" },
    manifesto: {
      es: "La interfaz es la forma en que una idea se deja usar.",
      en: "The interface is the way an idea allows itself to be used.",
    },
    problem: {
      es: "Una primera pantalla que no se entiende pierde a quien llegó con una intención. El móvil y el escritorio no pueden pedir dos lecturas distintas.",
      en: "A first screen that cannot be understood loses someone who arrived with an intention. Phone and desktop cannot ask for two different readings.",
    },
    response: {
      es: "Ordenamos jerarquía, ritmo y lectura para que la página explique el proyecto sin pedir esfuerzo.",
      en: "We order hierarchy, rhythm, and reading so the page explains the project without asking for effort.",
    },
    capabilities: [
      {
        title: { es: "Estructura", en: "Structure" },
        items: [
          { es: "Arquitectura de información", en: "Information architecture" },
          { es: "Jerarquía y recorrido", en: "Hierarchy and path" },
          { es: "Comportamiento responsive", en: "Responsive behavior" },
        ],
      },
      {
        title: { es: "Interfaz", en: "Interface" },
        items: [
          { es: "Composición y tipo", en: "Composition and type" },
          { es: "Estados y foco", en: "States and focus" },
          { es: "Ritmo de lectura", en: "Reading rhythm" },
        ],
      },
      {
        title: { es: "Sistema", en: "System" },
        items: [
          { es: "Componentes", en: "Components" },
          { es: "Tokens visuales", en: "Visual tokens" },
          { es: "Consistencia entre páginas", en: "Consistency across pages" },
        ],
      },
    ],
    deliverables: [
      { es: "Sitios y landing pages", en: "Sites and landing pages" },
      { es: "Sistemas de interfaz", en: "Interface systems" },
      { es: "Prototipos de lectura", en: "Reading prototypes" },
    ],
    impact: [
      { es: "Menos fricción en la primera lectura", en: "Less friction on the first reading" },
      { es: "Oferta más clara", en: "A clearer offer" },
      { es: "El mismo sentido en móvil y escritorio", en: "The same meaning on phone and desktop" },
    ],
    figure: { es: "Estructura de lectura", en: "Reading structure" },
    image: {
      src: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1800&q=80",
      alt: {
        es: "Una landing page diseñada, vista a la vez en monitor, tablet y teléfono",
        en: "A designed landing page, seen at once on a monitor, tablet, and phone",
      },
      line: { es: "Diseño", en: "Design" },
      key: { es: "web", en: "web" },
    },
    kind: "lattice",
    compose: "through",
    depth: paper,
  },
  {
    slug: "branding",
    index: "02",
    title: { es: "Branding", en: "Branding" },
    manifesto: {
      es: "La identidad es un sistema que se reconoce antes del nombre.",
      en: "Identity is a system recognized before the name.",
    },
    problem: {
      es: "Piezas que no se hablan entre sí debilitan la percepción antes de que exista un argumento.",
      en: "Pieces that do not speak to each other weaken perception before an argument exists.",
    },
    response: {
      es: "Definimos un lenguaje visual y verbal que se sostiene en pantalla, papel y producto.",
      en: "We define a visual and verbal language that holds on screen, paper, and product.",
    },
    capabilities: [
      {
        title: { es: "Posición", en: "Position" },
        items: [
          { es: "Territorio de marca", en: "Brand territory" },
          { es: "Voz y criterio", en: "Voice and judgment" },
          { es: "Lo que no se dice", en: "What is left unsaid" },
        ],
      },
      {
        title: { es: "Lenguaje", en: "Language" },
        items: [
          { es: "Símbolo y tipo", en: "Symbol and type" },
          { es: "Color y ritmo", en: "Color and rhythm" },
          { es: "Relación entre piezas", en: "Relation between pieces" },
        ],
      },
      {
        title: { es: "Sistema", en: "System" },
        items: [
          { es: "Reglas aplicables", en: "Applicable rules" },
          { es: "Dirección de arte", en: "Art direction" },
          { es: "Uso en digital", en: "Digital use" },
        ],
      },
    ],
    deliverables: [
      { es: "Identidad visual", en: "Visual identity" },
      { es: "Sistema de marca", en: "Brand system" },
      { es: "Criterios de aplicación", en: "Application criteria" },
    ],
    impact: [
      { es: "Reconocimiento antes del nombre", en: "Recognition before the name" },
      { es: "Consistencia entre piezas", en: "Consistency across pieces" },
      { es: "Menos retrabajo en cada nueva pieza", en: "Less rework on every new piece" },
    ],
    figure: { es: "Centro que se sostiene", en: "A center that holds" },
    image: {
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1800&q=80",
      alt: {
        es: "Muestrario de color y paleta: el sistema visual de una marca",
        en: "Color swatches and a palette: a brand’s visual system",
      },
      line: { es: "La marca", en: "The mark" },
      key: { es: "antes", en: "first" },
    },
    kind: "glyph",
    compose: "flank",
    depth: ivory,
  },
  {
    slug: "desarrollo-web",
    index: "03",
    title: { es: "Desarrollo web", en: "Web development" },
    manifesto: {
      es: "El sitio tiene que seguir en pie el día en que llega gente.",
      en: "The site has to stay standing the day people arrive.",
    },
    problem: {
      es: "Una base frágil se vuelve lenta, difícil de cambiar y cara de extender cuando el proyecto crece.",
      en: "A fragile base becomes slow, hard to change, and expensive to extend when the project grows.",
    },
    response: {
      es: "Construimos una arquitectura que prioriza velocidad, acceso y la posibilidad de cambiar sin reescribirlo todo.",
      en: "We build an architecture that prioritizes speed, access, and the ability to change without rewriting everything.",
    },
    capabilities: [
      {
        title: { es: "Arquitectura", en: "Architecture" },
        items: [
          { es: "Frontend y estructura", en: "Frontend and structure" },
          { es: "Contenido y datos", en: "Content and data" },
          { es: "Despliegue", en: "Deployment" },
        ],
      },
      {
        title: { es: "Rendimiento", en: "Performance" },
        items: [
          { es: "Peso y render", en: "Weight and render" },
          { es: "Accesibilidad", en: "Accessibility" },
          { es: "Base medible", en: "A measurable base" },
        ],
      },
      {
        title: { es: "Integración", en: "Integration" },
        items: [
          { es: "APIs", en: "APIs" },
          { es: "Formularios", en: "Forms" },
          { es: "Servicios existentes", en: "Existing services" },
        ],
      },
    ],
    deliverables: [
      { es: "Sitios en producción", en: "Sites in production" },
      { es: "Base técnica evolutiva", en: "An evolvable technical base" },
      { es: "Integraciones", en: "Integrations" },
    ],
    impact: [
      { es: "Más velocidad de carga y de cambio", en: "More speed of load and of change" },
      { es: "Menos deuda al extender", en: "Less debt when extending" },
      { es: "Una base que puede crecer", en: "A base that can grow" },
    ],
    figure: { es: "Carga y conexión", en: "Load and connection" },
    image: {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",
      alt: {
        es: "Editor con el HTML y el CSS de una página web",
        en: "An editor with the HTML and CSS of a web page",
      },
      line: { es: "La base", en: "The base" },
      key: { es: "aguanta", en: "holds" },
    },
    kind: "truss",
    compose: "rise",
    depth: stone,
  },
  {
    slug: "desarrollo-apps",
    index: "04",
    title: { es: "Aplicaciones", en: "Applications" },
    manifesto: {
      es: "Una aplicación es un hábito, no una pantalla.",
      en: "An application is a habit, not a screen.",
    },
    problem: {
      es: "Flujos incompletos y deuda temprana hacen que el producto se abandone antes de volverse útil.",
      en: "Incomplete flows and early debt make the product get abandoned before it becomes useful.",
    },
    response: {
      es: "Definimos los recorridos críticos y los construimos para que alguien pueda volver a abrirlos.",
      en: "We define the critical paths and build them so someone can open them again.",
    },
    capabilities: [
      {
        title: { es: "Producto", en: "Product" },
        items: [
          { es: "Alcance", en: "Scope" },
          { es: "Flujos críticos", en: "Critical flows" },
          { es: "Prioridad de entrega", en: "Delivery priority" },
        ],
      },
      {
        title: { es: "Experiencia", en: "Experience" },
        items: [
          { es: "Interacción", en: "Interaction" },
          { es: "Estados vacíos y de error", en: "Empty and error states" },
          { es: "Continuidad entre sesiones", en: "Continuity between sessions" },
        ],
      },
      {
        title: { es: "Tecnología", en: "Technology" },
        items: [
          { es: "Datos", en: "Data" },
          { es: "Acceso", en: "Access" },
          { es: "Integraciones", en: "Integrations" },
        ],
      },
    ],
    deliverables: [
      { es: "Productos mínimos usables", en: "Usable minimum products" },
      { es: "Aplicaciones web", en: "Web applications" },
      { es: "Paneles y prototipos funcionales", en: "Panels and working prototypes" },
    ],
    impact: [
      { es: "Menos fricción en el uso repetido", en: "Less friction in repeated use" },
      { es: "Decisiones de producto más claras", en: "Clearer product decisions" },
      { es: "Una base que admite el siguiente paso", en: "A base that admits the next step" },
    ],
    figure: { es: "Capas de un producto", en: "Layers of a product" },
    image: {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1800&q=80",
      alt: {
        es: "La interfaz de una aplicación en el teléfono, y el mismo producto en el portátil",
        en: "An application interface on the phone, and the same product on the laptop",
      },
      line: { es: "Capas", en: "Layers" },
      key: { es: "de uso", en: "of use" },
    },
    kind: "shell",
    compose: "lead",
    depth: dusk,
  },
  {
    slug: "ecommerce",
    index: "05",
    title: { es: "E-commerce", en: "E-commerce" },
    manifesto: {
      es: "Comprar es un recorrido. Cada paso puede perderlo.",
      en: "Buying is a path. Every step can lose it.",
    },
    problem: {
      es: "Un catálogo lento o un pago confuso interrumpe una decisión que ya estaba tomada.",
      en: "A slow catalogue or a confusing payment interrupts a decision that was already made.",
    },
    response: {
      es: "Ordenamos ficha, catálogo y checkout para que la compra conserve su hilo hasta el final.",
      en: "We order the product page, catalogue, and checkout so the purchase keeps its thread to the end.",
    },
    capabilities: [
      {
        title: { es: "Catálogo", en: "Catalogue" },
        items: [
          { es: "Estructura", en: "Structure" },
          { es: "Ficha", en: "Product page" },
          { es: "Variantes", en: "Variants" },
        ],
      },
      {
        title: { es: "Compra", en: "Purchase" },
        items: [
          { es: "Carrito", en: "Cart" },
          { es: "Pago", en: "Payment" },
          { es: "Confirmación", en: "Confirmation" },
        ],
      },
      {
        title: { es: "Operación", en: "Operations" },
        items: [
          { es: "Inventario", en: "Inventory" },
          { es: "Envíos", en: "Shipping" },
          { es: "Lectura del recorrido", en: "Reading the path" },
        ],
      },
    ],
    deliverables: [
      { es: "Tiendas", en: "Stores" },
      { es: "Checkout", en: "Checkout" },
      { es: "Integraciones de pago y stock", en: "Payment and stock integrations" },
    ],
    impact: [
      { es: "Menos abandono por fricción", en: "Less abandonment from friction" },
      { es: "Producto más claro antes del pago", en: "A clearer product before payment" },
      { es: "Operación más estable", en: "More stable operations" },
    ],
    figure: { es: "Recorrido hacia el pago", en: "Path toward payment" },
    image: {
      src: "https://images.unsplash.com/photo-1539278383962-a7774385fa02?auto=format&fit=crop&w=1800&q=80",
      alt: {
        es: "Ficha de producto en una tienda online: prenda, precio y variantes de color",
        en: "A product page in an online store: garment, price, and color variants",
      },
      line: { es: "El objeto", en: "The object" },
      key: { es: "y el paso", en: "and the step" },
    },
    kind: "current",
    compose: "through",
    depth: umber,
  },
  {
    slug: "seo",
    index: "06",
    title: { es: "SEO", en: "SEO" },
    manifesto: {
      es: "Estar cuando la búsqueda ya tiene una intención.",
      en: "To be there when the search already has an intention.",
    },
    problem: {
      es: "Un sitio que no aparece para quien ya está buscando no compite, aunque esté bien hecho.",
      en: "A site that does not appear for someone already searching does not compete, even if it is well made.",
    },
    response: {
      es: "Alineamos técnica, estructura y contenido con la forma real en que se busca.",
      en: "We align technique, structure, and content with the way people actually search.",
    },
    capabilities: [
      {
        title: { es: "Técnica", en: "Technique" },
        items: [
          { es: "Indexación", en: "Indexing" },
          { es: "Velocidad", en: "Speed" },
          { es: "Estructura rastreable", en: "A crawlable structure" },
        ],
      },
      {
        title: { es: "Contenido", en: "Content" },
        items: [
          { es: "Arquitectura temática", en: "Thematic architecture" },
          { es: "Páginas con intención", en: "Pages with intention" },
          { es: "Claridad de respuesta", en: "Clarity of answer" },
        ],
      },
      {
        title: { es: "Lectura", en: "Reading" },
        items: [
          { es: "Posiciones", en: "Rankings" },
          { es: "Correspondencia búsqueda–página", en: "Search-to-page fit" },
          { es: "Qué se puede medir", en: "What can be measured" },
        ],
      },
    ],
    deliverables: [
      { es: "Auditoría técnica", en: "Technical audit" },
      { es: "Arquitectura de contenido", en: "Content architecture" },
      { es: "Base de indexación", en: "Indexing base" },
    ],
    impact: [
      { es: "Más encontrabilidad", en: "More findability" },
      { es: "Mejor correspondencia entre búsqueda y página", en: "Better fit between search and page" },
      { es: "Una base que se puede leer", en: "A base that can be read" },
    ],
    figure: { es: "Una búsqueda que encuentra", en: "A search that finds" },
    image: {
      src: "https://images.unsplash.com/photo-1726066012699-1c843dad5fd8?auto=format&fit=crop&w=1800&q=80",
      alt: {
        es: "Una búsqueda de Google abierta en un portátil",
        en: "A Google search open on a laptop",
      },
      line: { es: "La búsqueda", en: "The search" },
      key: { es: "encuentra", en: "finds" },
    },
    kind: "signal",
    compose: "flank",
    depth: ink,
  },
  {
    slug: "marketing-digital",
    index: "07",
    title: { es: "Marketing", en: "Marketing" },
    manifesto: {
      es: "Campaña, sitio y mensaje tienen que decir lo mismo.",
      en: "Campaign, site, and message have to say the same thing.",
    },
    problem: {
      es: "Canales que no se hablan producen atención que no llega a ninguna parte.",
      en: "Channels that do not speak to each other produce attention that arrives nowhere.",
    },
    response: {
      es: "Definimos el papel de cada canal y lo conectamos con una página capaz de recibir esa atención.",
      en: "We define each channel’s role and connect it to a page able to receive that attention.",
    },
    capabilities: [
      {
        title: { es: "Estrategia", en: "Strategy" },
        items: [
          { es: "Prioridad", en: "Priority" },
          { es: "Mensaje", en: "Message" },
          { es: "Secuencia", en: "Sequence" },
        ],
      },
      {
        title: { es: "Canales", en: "Channels" },
        items: [
          { es: "Orgánico", en: "Organic" },
          { es: "Pago", en: "Paid" },
          { es: "Correo", en: "Email" },
        ],
      },
      {
        title: { es: "Lectura", en: "Reading" },
        items: [
          { es: "Analítica compartida", en: "Shared analytics" },
          { es: "Continuidad anuncio–página", en: "Ad-to-page continuity" },
          { es: "Qué se decide con datos", en: "What gets decided with data" },
        ],
      },
    ],
    deliverables: [
      { es: "Sistema de campaña", en: "Campaign system" },
      { es: "Páginas de llegada", en: "Arrival pages" },
      { es: "Medición compartida", en: "Shared measurement" },
    ],
    impact: [
      { es: "Menos dispersión entre canales", en: "Less scatter across channels" },
      { es: "Continuidad entre anuncio y sitio", en: "Continuity between ad and site" },
      { es: "Decisiones con datos reales", en: "Decisions from real data" },
    ],
    figure: { es: "El mismo mensaje, en ondas", en: "The same message, in waves" },
    image: {
      src: "https://images.unsplash.com/photo-1759215524600-7971d6a4dac0?auto=format&fit=crop&w=1800&q=80",
      alt: {
        es: "Estadísticas de una publicación en redes: alcance, seguidores y origen de las vistas",
        en: "Stats for a social post: reach, followers, and where the views came from",
      },
      line: { es: "El mismo", en: "The same" },
      key: { es: "mensaje", en: "message" },
    },
    kind: "front",
    compose: "rise",
    depth: voidNight,
  },
  {
    slug: "inteligencia-artificial",
    index: "08",
    title: { es: "Inteligencia artificial", en: "Artificial intelligence" },
    manifesto: {
      es: "La máquina amplía el trabajo. La decisión sigue siendo humana.",
      en: "The machine extends the work. The decision stays human.",
    },
    problem: {
      es: "Una herramienta sin proceso se queda en una demostración que nadie incorpora al día.",
      en: "A tool without a process stays a demonstration nobody brings into the day.",
    },
    response: {
      es: "Elegimos un caso concreto, lo conectamos al flujo existente y dejamos el criterio en el equipo.",
      en: "We choose a concrete case, connect it to the existing flow, and leave judgment with the team.",
    },
    capabilities: [
      {
        title: { es: "Criterio", en: "Judgment" },
        items: [
          { es: "Caso de uso", en: "Use case" },
          { es: "Límites", en: "Limits" },
          { es: "Revisión humana", en: "Human review" },
        ],
      },
      {
        title: { es: "Sistema", en: "System" },
        items: [
          { es: "Contexto", en: "Context" },
          { es: "Datos", en: "Data" },
          { es: "Integración al flujo", en: "Integration into the flow" },
        ],
      },
      {
        title: { es: "Interfaz", en: "Interface" },
        items: [
          { es: "Cómo se pide", en: "How a request is made" },
          { es: "Cómo se corrige", en: "How it is corrected" },
          { es: "Qué queda registrado", en: "What gets recorded" },
        ],
      },
    ],
    deliverables: [
      { es: "Flujos asistidos", en: "Assisted flows" },
      { es: "Integraciones", en: "Integrations" },
      { es: "Prototipos operativos", en: "Working prototypes" },
    ],
    impact: [
      { es: "Menos tarea repetitiva", en: "Less repetitive work" },
      { es: "Más capacidad del equipo", en: "More capacity for the team" },
      { es: "Control sobre el resultado", en: "Control over the result" },
    ],
    figure: { es: "Densidad donde el campo se calma", en: "Density where the field goes quiet" },
    image: {
      src: "https://images.unsplash.com/photo-1753907537890-f20de9e116cc?auto=format&fit=crop&w=1800&q=80",
      alt: {
        es: "La interfaz de ChatGPT: un flujo asistido, con la petición en pantalla",
        en: "The ChatGPT interface: an assisted flow, with the request on screen",
      },
      line: { es: "El criterio", en: "Judgment" },
      key: { es: "sigue", en: "stays" },
    },
    kind: "gather",
    compose: "lead",
    depth: voidDeep,
  },
  {
    slug: "automatizacion",
    index: "09",
    title: { es: "Automatización", en: "Automation" },
    manifesto: {
      es: "Lo que se repite no debería ocupar el día.",
      en: "What repeats should not take the day.",
    },
    problem: {
      es: "Copiar datos entre herramientas introduce error y gasta la atención que el trabajo real necesita.",
      en: "Copying data between tools introduces error and spends the attention the real work needs.",
    },
    response: {
      es: "Conectamos los sistemas que ya existen para que la tarea repetida salga del calendario, con excepción visible.",
      en: "We connect the systems that already exist so the repeated task leaves the calendar, with a visible exception.",
    },
    capabilities: [
      {
        title: { es: "Mapa", en: "Map" },
        items: [
          { es: "Qué se repite", en: "What repeats" },
          { es: "Qué debe quedar manual", en: "What must stay manual" },
          { es: "Dónde se rompe", en: "Where it breaks" },
        ],
      },
      {
        title: { es: "Conexión", en: "Connection" },
        items: [
          { es: "APIs", en: "APIs" },
          { es: "Webhooks", en: "Webhooks" },
          { es: "Herramientas actuales", en: "Current tools" },
        ],
      },
      {
        title: { es: "Control", en: "Control" },
        items: [
          { es: "Registro", en: "Log" },
          { es: "Avisos", en: "Alerts" },
          { es: "Excepciones", en: "Exceptions" },
        ],
      },
    ],
    deliverables: [
      { es: "Flujos automatizados", en: "Automated flows" },
      { es: "Integraciones", en: "Integrations" },
      { es: "Alertas y registro", en: "Alerts and a log" },
    ],
    impact: [
      { es: "Menos error de traspaso", en: "Less handoff error" },
      { es: "Más tiempo para el trabajo que importa", en: "More time for the work that matters" },
      { es: "Un proceso que aguanta más volumen", en: "A process that holds more volume" },
    ],
    figure: { es: "Un circuito que sigue", en: "A circuit that continues" },
    image: {
      src: "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?auto=format&fit=crop&w=1800&q=80",
      alt: {
        es: "Un tablero de automatizaciones que conecta tareas entre herramientas",
        en: "An automations board that connects tasks across tools",
      },
      line: { es: "Lo que se", en: "What" },
      key: { es: "repite", en: "repeats" },
    },
    kind: "circuit",
    compose: "through",
    depth: voidBlack,
  },
];
