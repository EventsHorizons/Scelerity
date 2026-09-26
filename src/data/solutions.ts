export type SolutionsContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    label: string;
    headline: string;
    sub: string;
    body: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  manifesto: {
    label: string;
    headline: string;
    lead: string;
    body: string;
    creed: string;
  };
  capabilities: {
    label: string;
    headline: string;
    lead: string;
    emphasis: string;
    includesLabel: string;
    stackLabel: string;
    items: {
      index: string;
      name: string;
      headline: string;
      lead: string;
      body: string;
      includes: string[];
      stack: string;
      microcopy: string;
      cta: string;
      href: string;
    }[];
  };
  system: {
    label: string;
    headline: string;
    lines: string[];
    closer: string;
    layers: { title: string; text: string }[];
    statement: string;
  };
  forward: {
    label: string;
    headline: string;
    body: string[];
    emphasis: string[];
  };
  process: {
    label: string;
    headline: string;
    steps: {
      number: string;
      title: string;
      lead: string;
      text: string[];
    }[];
  };
  principle: {
    label: string;
    headline: string;
    intro: string;
    questions: string[];
    close: string;
  };
  close: {
    headline: string;
    lines: string[];
    emphasis: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  statement: {
    brand: string;
    tagline: string;
    layers: string;
    year: string;
    line: string;
  };
};

const capabilitiesShared = {
  items: [
    {
      index: "01",
      name: "Digital Architecture",
      includes: [
        "Web Architecture",
        "Full-Stack Development",
        "Web Applications",
        "Digital Products",
        "Performance Engineering",
        "APIs & Integrations",
        "Scalable Systems",
      ],
      stack: "React · Next.js · Astro · TypeScript · Node.js · PostgreSQL",
      microcopy: "Idea → Architecture → Build → Scale",
      href: "/servicios/desarrollo-web/",
    },
    {
      index: "02",
      name: "Human Experience",
      includes: [
        "UX Strategy",
        "Product Design",
        "UI Systems",
        "Design Systems",
        "Brand Identity",
        "Art Direction",
        "Interaction Design",
        "Motion",
      ],
      stack: "Figma · React · Tailwind · GSAP · Framer Motion · Three.js",
      microcopy: "Understand → Define → Design → Evolve",
      href: "/servicios/diseno-web/",
    },
    {
      index: "03",
      name: "Cultural Growth",
      includes: [
        "Cultural Positioning",
        "Growth Strategy",
        "Content Systems",
        "Campaigns",
        "Social Strategy",
        "Performance Marketing",
        "Analytics",
        "Conversion Optimization",
      ],
      stack: "GA4 · Meta Ads · Search · CRM · Analytics · AI",
      microcopy: "Observe → Position → Activate → Grow",
      href: "/servicios/marketing-digital/",
    },
  ],
};

export const solutionsEs: SolutionsContent = {
  meta: {
    title: "Servicios — Arquitectura, experiencia y growth",
    description:
      "Estrategia, tecnología, diseño y growth para crear experiencias digitales preparadas para el próximo ciclo cultural.",
  },
  hero: {
    label: "Services / 2028+",
    headline: "Construimos hoy lo que tu marca necesitará mañana.",
    sub: "Estrategia, tecnología, diseño y growth para crear experiencias digitales preparadas para el próximo ciclo cultural.",
    body: [
      "No utilizamos tecnología para hacer ruido.",
      "La utilizamos para resolver mejor, conectar más profundamente y abrir posibilidades que antes no existían.",
    ],
    ctaPrimary: "Hablemos de tu proyecto →",
    ctaSecondary: "Explorar capacidades ↓",
  },
  manifesto: {
    label: "Manifiesto",
    headline: "La tecnología no es el destino.",
    lead: "Es la infraestructura de nuevas formas de crear, comunicar, descubrir y relacionarnos.",
    body: "Por eso diseñamos pensando en la persona que está frente a la pantalla, la cultura que la rodea y el sistema que existe detrás.",
    creed: "Tecno-Humanismo: tecnología avanzada con criterio humano.",
  },
  capabilities: {
    label: "Capabilities",
    headline: "Tres sistemas. Una misma visión.",
    lead: "No vendemos servicios aislados.",
    emphasis:
      "Diseñamos la arquitectura, la experiencia y el crecimiento como partes de un mismo sistema.",
    includesLabel: "Incluye",
    stackLabel: "Stack",
    items: [
      {
        ...capabilitiesShared.items[0],
        headline: "Arquitectura de Experiencias Digitales",
        lead: "Diseñamos y desarrollamos productos digitales rápidos, escalables y preparados para evolucionar.",
        body: "Desde sitios de alto rendimiento hasta plataformas y sistemas web complejos, construimos la infraestructura que permite que una idea llegue al mundo sin quedar atrapada en ella.",
        cta: "Ver arquitectura →",
      },
      {
        ...capabilitiesShared.items[1],
        headline: "Interfaces que entienden a las personas.",
        lead: "Diseñamos experiencias donde identidad, interacción y tecnología funcionan como una sola cosa.",
        body: "UX, UI, branding y motion se convierten en un sistema coherente: reconocible, intuitivo y suficientemente flexible para crecer con el producto.",
        cta: "Ver experience →",
      },
      {
        ...capabilitiesShared.items[2],
        headline: "Growth con contexto.",
        lead: "No hacemos marketing para llenar feeds. Diseñamos sistemas de crecimiento alrededor de cultura, comportamiento y datos.",
        body: "Encontramos dónde existe atención, por qué importa y cómo convertirla en reconocimiento, comunidad y crecimiento sostenible.",
        cta: "Ver growth →",
      },
    ],
  },
  system: {
    label: "System",
    headline: "Una misma idea. Todo el sistema.",
    lines: [
      "Una marca no vive en un logo.",
      "Un producto no vive en una interfaz.",
      "Una campaña no vive en una publicación.",
    ],
    closer: "Todo está conectado.",
    layers: [
      { title: "Strategy", text: "Definimos qué merece existir." },
      { title: "Experience", text: "Diseñamos cómo debe sentirse." },
      { title: "Technology", text: "Construimos cómo debe funcionar." },
      { title: "Growth", text: "Creamos cómo llega y cómo evoluciona." },
    ],
    statement: "Scelerity conecta las cuatro capas.",
  },
  forward: {
    label: "2028+",
    headline: "Diseñar para 2028 no significa predecir el futuro.",
    body: [
      "Significa no construir con las reglas del pasado.",
      "Trabajamos con tecnologías contemporáneas y emergentes —IA, interfaces inteligentes, 3D, motion, automatización y arquitecturas modernas— cuando aportan una ventaja real.",
    ],
    emphasis: ["No perseguimos la novedad.", "Perseguimos la posibilidad."],
  },
  process: {
    label: "Process",
    headline: "Primero pensamos. Después construimos.",
    steps: [
      {
        number: "01",
        title: "Decode",
        lead: "Entendemos el problema.",
        text: [
          "Negocio, audiencia, cultura, producto, datos y contexto.",
          "El objetivo no es comenzar rápido.",
          "Es comenzar en la dirección correcta.",
        ],
      },
      {
        number: "02",
        title: "Design",
        lead: "Convertimos complejidad en una experiencia clara.",
        text: [
          "Estrategia, arquitectura, identidad, UX, UI y concepto empiezan a formar un mismo sistema.",
        ],
      },
      {
        number: "03",
        title: "Build",
        lead: "Pasamos de intención a realidad.",
        text: [
          "Desarrollamos, integramos, probamos y optimizamos con una arquitectura pensada para el mundo real.",
        ],
      },
      {
        number: "04",
        title: "Evolve",
        lead: "Publicar no es terminar.",
        text: [
          "Observamos el comportamiento, medimos lo que importa y seguimos evolucionando el producto.",
        ],
      },
    ],
  },
  principle: {
    label: "Principle",
    headline: "La tecnología debe ampliar lo humano, no reemplazarlo.",
    intro: "Cada decisión debe pasar por tres preguntas:",
    questions: [
      "¿Es útil?",
      "¿Se entiende?",
      "¿Hace algo posible que antes no lo era?",
    ],
    close: "Si la respuesta no es clara, seguimos pensando.",
  },
  close: {
    headline: "Hay cosas que todavía no tienen nombre.",
    lines: [
      "Productos que aún no existen.",
      "Experiencias que todavía no tienen una interfaz.",
      "Marcas que todavía no encontraron su lenguaje.",
    ],
    emphasis: "Ahí es donde queremos trabajar.",
    ctaPrimary: "Empezar un proyecto →",
    ctaSecondary: "Ver nuestro trabajo",
  },
  statement: {
    brand: "Scelerity",
    tagline: "Digital systems for a changing culture.",
    layers: "Strategy · Experience · Technology · Growth",
    year: "2028+",
    line: "Construyendo hacia adelante.",
  },
};

export const solutionsEn: SolutionsContent = {
  meta: {
    title: "Services — Architecture, experience, and growth",
    description:
      "Strategy, technology, design, and growth to create digital experiences ready for the next cultural cycle.",
  },
  hero: {
    label: "Services / 2028+",
    headline: "We build today what your brand will need tomorrow.",
    sub: "Strategy, technology, design, and growth to create digital experiences ready for the next cultural cycle.",
    body: [
      "We don't use technology to make noise.",
      "We use it to solve better, connect more deeply, and open possibilities that didn't exist before.",
    ],
    ctaPrimary: "Let's talk about your project →",
    ctaSecondary: "Explore capabilities ↓",
  },
  manifesto: {
    label: "Manifesto",
    headline: "Technology is not the destination.",
    lead: "It is the infrastructure of new ways to create, communicate, discover, and relate.",
    body: "That is why we design for the person in front of the screen, the culture around them, and the system behind it.",
    creed: "Techno-Humanism: advanced technology with human judgment.",
  },
  capabilities: {
    label: "Capabilities",
    headline: "Three systems. One vision.",
    lead: "We don't sell isolated services.",
    emphasis:
      "We design architecture, experience, and growth as parts of the same system.",
    includesLabel: "Includes",
    stackLabel: "Stack",
    items: [
      {
        ...capabilitiesShared.items[0],
        headline: "Digital Experience Architecture",
        lead: "We design and build digital products that are fast, scalable, and ready to evolve.",
        body: "From high-performance sites to platforms and complex web systems, we build the infrastructure that lets an idea reach the world without getting trapped in it.",
        cta: "View architecture →",
      },
      {
        ...capabilitiesShared.items[1],
        headline: "Interfaces that understand people.",
        lead: "We design experiences where identity, interaction, and technology work as one.",
        body: "UX, UI, branding, and motion become a coherent system: recognizable, intuitive, and flexible enough to grow with the product.",
        cta: "View experience →",
      },
      {
        ...capabilitiesShared.items[2],
        headline: "Growth with context.",
        lead: "We don't do marketing to fill feeds. We design growth systems around culture, behavior, and data.",
        body: "We find where attention exists, why it matters, and how to turn it into recognition, community, and sustainable growth.",
        cta: "View growth →",
      },
    ],
  },
  system: {
    label: "System",
    headline: "One idea. The whole system.",
    lines: [
      "A brand does not live in a logo.",
      "A product does not live in an interface.",
      "A campaign does not live in a post.",
    ],
    closer: "Everything is connected.",
    layers: [
      { title: "Strategy", text: "We define what deserves to exist." },
      { title: "Experience", text: "We design how it should feel." },
      { title: "Technology", text: "We build how it should work." },
      { title: "Growth", text: "We create how it arrives and how it evolves." },
    ],
    statement: "Scelerity connects the four layers.",
  },
  forward: {
    label: "2028+",
    headline: "Designing for 2028 does not mean predicting the future.",
    body: [
      "It means not building with the rules of the past.",
      "We work with contemporary and emerging technologies — AI, intelligent interfaces, 3D, motion, automation, and modern architectures — when they offer a real advantage.",
    ],
    emphasis: ["We don't chase novelty.", "We chase possibility."],
  },
  process: {
    label: "Process",
    headline: "First we think. Then we build.",
    steps: [
      {
        number: "01",
        title: "Decode",
        lead: "We understand the problem.",
        text: [
          "Business, audience, culture, product, data, and context.",
          "The goal is not to start fast.",
          "It is to start in the right direction.",
        ],
      },
      {
        number: "02",
        title: "Design",
        lead: "We turn complexity into a clear experience.",
        text: [
          "Strategy, architecture, identity, UX, UI, and concept start to form one system.",
        ],
      },
      {
        number: "03",
        title: "Build",
        lead: "We move from intention to reality.",
        text: [
          "We develop, integrate, test, and optimize with an architecture built for the real world.",
        ],
      },
      {
        number: "04",
        title: "Evolve",
        lead: "Publishing is not finishing.",
        text: [
          "We watch behavior, measure what matters, and keep evolving the product.",
        ],
      },
    ],
  },
  principle: {
    label: "Principle",
    headline: "Technology should expand what is human, not replace it.",
    intro: "Every decision has to pass three questions:",
    questions: [
      "Is it useful?",
      "Is it clear?",
      "Does it make something possible that wasn't before?",
    ],
    close: "If the answer isn't clear, we keep thinking.",
  },
  close: {
    headline: "There are things that still don't have a name.",
    lines: [
      "Products that don't exist yet.",
      "Experiences that still don't have an interface.",
      "Brands that still haven't found their language.",
    ],
    emphasis: "That is where we want to work.",
    ctaPrimary: "Start a project →",
    ctaSecondary: "See our work",
  },
  statement: {
    brand: "Scelerity",
    tagline: "Digital systems for a changing culture.",
    layers: "Strategy · Experience · Technology · Growth",
    year: "2028+",
    line: "Building forward.",
  },
};
