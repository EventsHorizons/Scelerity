import {
  solutionsEn,
  solutionsEs,
  type SolutionsContent,
} from "@/data/solutions";

export type Locale = "es" | "en";

export type Project = {
  title: string;
  category: string;
  description: string;
  metrics: { value: string; label: string }[];
  media: "image" | "video";
  /** Editorial portfolio cover — /projects/{slug}.jpg */
  cover: string;
  coverAlt: string;
};

export type Content = {
  nav: {
    work: string;
    about: string;
    services: string;
    returns: string;
    method: string;
    solutions: string;
    servicesPage: string;
    company: string;
    journal: string;
    contact: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
  };
  journal: {
    label: string;
    headline: string;
    sub: string;
    readArticle: string;
    viewAll: string;
    prev: string;
    next: string;
  };
  solutions: SolutionsContent;
  hero: {
    brand: string;
    kicker: string;
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  work: {
    label: string;
    headline: string;
    view: string;
    cta: string;
    projects: Project[];
  };
  about: {
    label: string;
    headline: string;
    body: string[];
    cta: string;
    principles: { title: string; text: string }[];
  };
  services: {
    label: string;
    headline: string;
    deck: string;
    cta: string;
    phases: {
      name: string;
      lead: string;
      body: string;
      rows: { label: string; value: string }[];
      image: string;
      alt: string;
      href: string;
      action: string;
    }[];
  };
  featured: {
    label: string;
    project: Project;
  };
  process: {
    label: string;
    headline: string;
    steps: { number: string; title: string; text: string }[];
  };
  trust: {
    label: string;
    headline: string;
    body: string[];
    points: { title: string; text: string }[];
  };
  benefits: {
    label: string;
    headline: string;
    items: { title: string; text: string }[];
  };
  faq: {
    label: string;
    headline: string;
    items: { q: string; a: string }[];
  };
  cta: {
    eyebrow: string;
    headline: string;
    body: string[];
    primary: string;
    /** E.164 digits only — used for wa.me links */
    whatsapp: string;
    email: string;
    location: string;
    response: string;
    form: {
      name: string;
      email: string;
      phone: string;
      source: string;
      sourcePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      captcha: string;
      submit: string;
      submitting: string;
      success: string;
      error: string;
      required: string;
      sources: { value: string; label: string }[];
    };
  };
  footer: {
    tagline: string;
    rights: string;
    navLabel: string;
    links: { href: string; label: string }[];
    legal: { href: string; label: string }[];
    social: {
      platform: "instagram" | "facebook" | "tiktok" | "linkedin";
      href: string;
      label: string;
    }[];
  };
};

export const content: Record<Locale, Content> = {
  es: {
    nav: {
      work: "Proyectos",
      about: "La agencia",
      services: "Servicios",
      returns: "Territorio",
      method: "Proceso",
      solutions: "Soluciones",
      servicesPage: "Servicios",
      company: "La agencia",
      journal: "Blog",
      contact: "Hablemos de tu proyecto",
      menu: "Menú",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      skipToContent: "Saltar al contenido",
    },
    journal: {
      label: "Notas",
      headline: "Notas.",
      sub: "Textos sobre el trabajo.",
      readArticle: "Leer artículo",
      viewAll: "Ver todo el Blog",
      prev: "Anterior",
      next: "Siguiente",
    },
    solutions: solutionsEs,
    hero: {
      brand: "Scelerity",
      kicker: "Bogotá",
      headline: "Diseño, tecnología y estrategia para marcas con propósito.",
      sub: "",
      ctaPrimary: "Cuéntanos tu proyecto",
      ctaSecondary: "Conoce nuestros servicios",
    },
    work: {
      label: "Trabajo seleccionado",
      headline: "Nuestra forma de pensar, en acción.",
      view: "Ver la pieza",
      cta: "Ver proyectos",
      projects: [
        {
          title: "Aether",
          category: "Ejercicio interno · Interfaz",
          description: "Ordenamos una pantalla de producto que tenía demasiada información. No es un cliente.",
          metrics: [
            { value: "UI", label: "Producto" },
            { value: "Web", label: "Escritorio y móvil" },
          ],
          media: "image",
          cover: "/projects/aether.jpg",
          coverAlt:
            "Mockup editorial Aether — plataforma SaaS en MacBook y iPhone, paleta navy violeta y cian",
        },
        {
          title: "Northline",
          category: "Ejercicio interno · Marca",
          description: "Una identidad que se reconoce quieta y en movimiento. No hay un cliente detrás.",
          metrics: [
            { value: "Marca", label: "Identidad" },
            { value: "Motion", label: "Pantalla" },
          ],
          media: "video",
          cover: "/projects/northline.jpg",
          coverAlt:
            "Mockup editorial Northline — identidad motion en monitor y móvil, paleta charcoal arena y ámbar",
        },
        {
          title: "Vespera",
          category: "Ejercicio interno · Marca y aplicación",
          description: "La misma marca en papel y dentro de una aplicación. También es un ejercicio interno.",
          metrics: [
            { value: "Marca", label: "Sistema" },
            { value: "App", label: "Interfaz" },
          ],
          media: "image",
          cover: "/projects/vespera.jpg",
          coverAlt:
            "Mockup editorial Vespera — app de marca en iPhones, paleta blush wine y champagne",
        },
      ],
    },
    about: {
      label: "La agencia",
      headline: "Cada proyecto tiene su propio punto de partida.",
      body: [
        "Algunos negocios necesitan encontrar su voz. Otros tienen un buen producto y una web o un mensaje que no lo sostiene. No partimos de una fórmula: partimos de ese problema.",
        "No vendemos de más. A veces basta resolver una necesidad concreta; otras hay que alinear marca, web y marketing. Desde la primera conversación queda claro qué se decide, qué asumimos y en qué se invierte.",
      ],
      cta: "Conoce nuestros servicios",
      principles: [
        { title: "El punto de partida", text: "Voz, producto o mensaje. El trabajo empieza por lo que ya tienes y por lo que te frena." },
        { title: "Solo lo necesario", text: "Una pieza, o marca, web y marketing juntas, según lo que el proyecto pide para avanzar." },
        { title: "Antes de ejecutar", text: "Decisiones, responsabilidades y lo que puedes esperar, definidos antes de diseñar o programar." },
      ],
    },
    services: {
      label: "Servicios",
      headline: "Soluciones precisas. Ejecución impecable.",
      deck: "Cuatro áreas de trabajo. Puedes usarlas de forma independiente o conectarlas para transformar toda tu presencia digital.",
      cta: "Encargar",
      phases: [
        {
          name: "Branding e identidad",
          lead: "Una identidad que hable por ti.",
          body: "Creamos marcas que trascienden lo estético. Desarrollamos sistemas visuales y verbales que definen la personalidad de tu negocio, generando confianza y reconocimiento en cada punto de contacto.",
          rows: [
            { label: "Incluye", value: "Estrategia de marca" },
            { label: "Incluye", value: "Identidad y dirección de arte" },
            { label: "Incluye", value: "Tono de voz y lineamientos" },
          ],
          image:
            "/services/marca.jpg",
          alt: "Papel hueso, papel negro, un chip magenta y un signo geométrico",
          href: "/servicios/branding/",
          action: "Desarrollar mi marca",
        },
        {
          name: "Diseño y desarrollo web",
          lead: "Plataformas que guían a tus usuarios.",
          body: "Diseñamos y programamos sitios web rápidos, accesibles y orientados a la conversión. Organizamos la información para que tu audiencia entienda exactamente qué ofreces y sepa cuál es el siguiente paso.",
          rows: [
            { label: "Incluye", value: "Arquitectura web" },
            { label: "Incluye", value: "Diseño UI y desarrollo" },
            { label: "Incluye", value: "Optimización móvil" },
          ],
          image:
            "/services/estructura.jpg",
          alt: "Un monitor con bloques de página y tres acetatos con la misma estructura",
          href: "/servicios/desarrollo-web/",
          action: "Crear mi sitio web",
        },
        {
          name: "Diseño UI/UX",
          lead: "Experiencias digitales sin fricción.",
          body: "Diseñamos productos pensando en las personas que van a utilizarlos. Transformamos flujos complejos en interfaces intuitivas, limpias y consistentes, facilitando la interacción y mejorando la retención.",
          rows: [
            { label: "Incluye", value: "Arquitectura y flujos" },
            { label: "Incluye", value: "Wireframes y prototipos" },
            { label: "Incluye", value: "Sistemas de diseño" },
          ],
          image:
            "/services/pagina.jpg",
          alt: "Un monitor y una hoja impresa con la misma composición, sin texto",
          href: "/servicios/diseno-web/",
          action: "Diseñar una experiencia",
        },
        {
          name: "Marketing digital",
          lead: "Estrategias que amplifican tu mensaje.",
          body: "De nada sirve un gran producto si nadie lo ve. Diseñamos ecosistemas de comunicación orientados a resultados, seleccionando solo los canales y acciones que realmente tienen sentido para tu público y tus recursos.",
          rows: [
            { label: "Incluye", value: "Planificación estratégica" },
            { label: "Incluye", value: "Contenidos y campañas" },
            { label: "Incluye", value: "Analítica" },
          ],
          image:
            "/services/piezas.jpg",
          alt: "Un ticket, una tarjeta y un sobre con el mismo signo y la misma franja magenta",
          href: "/servicios/marketing-digital/",
          action: "Planificar mi estrategia",
        },
      ],
    },
    featured: {
      label: "Pieza de muestra",
      project: {
        title: "Aether",
        category: "Producto digital",
        description:
          "Plataforma densa, difícil de enseñar. Quedaron la jerarquía y un solo sistema visual, en escritorio y en móvil.",
        metrics: [
          { value: "UI", label: "Producto" },
          { value: "Web", label: "Escritorio y móvil" },
          { value: "Sistema", label: "Visual" },
        ],
        media: "image",
        cover: "/projects/aether.jpg",
        coverAlt:
          "Mockup editorial Aether — plataforma SaaS en MacBook y iPhone, paleta navy violeta y cian",
      },
    },
    process: {
      label: "Proceso",
      headline: "Nuestro proceso: claridad de principio a fin.",
      steps: [
        { number: "01", title: "Entendemos tu necesidad", text: "Auditamos tu contexto, qué quieres lograr y con qué recursos cuentas actualmente." },
        { number: "02", title: "Definimos el proyecto", text: "Trazamos el mapa. Establecemos alcances, entregables, cronograma e inversión sin letras pequeñas." },
        { number: "03", title: "Diseñamos y desarrollamos", text: "Ejecutamos las soluciones acordadas mediante iteraciones ágiles, manteniendo una comunicación constante." },
        { number: "04", title: "Revisamos y entregamos", text: "Validamos el trabajo final, realizamos los ajustes y entregamos un producto pulido y listo para escalar." },
      ],
    },
    trust: {
      label: "Enfoque",
      headline: "Estrategia antes que ejecución.",
      body: [
        "No creemos en vender por vender. A veces, el mayor impacto se logra resolviendo una necesidad muy concreta; otras veces, requiere sincronizar marca, web y marketing.",
        "Desde nuestra primera charla buscamos que tengas absoluta claridad sobre qué decisiones se deben tomar, qué responsabilidades asumimos y qué resultados puedes esperar de nosotros.",
      ],
      points: [
        { title: "Una necesidad", text: "A veces el impacto está en resolver algo muy concreto." },
        { title: "Juntas", text: "Otras veces hace falta sincronizar marca, web y marketing." },
        { title: "Claridad", text: "Desde la primera charla queda claro qué decidimos, qué asumimos y qué puedes esperar." },
      ],
    },
    benefits: {
      label: "Criterio",
      headline: "Qué se decide antes de diseñar.",
      items: [
        {
          title: "Contexto",
          text: "De dónde sale el negocio y qué ya existe, antes de elegir un formato.",
        },
        {
          title: "Mensaje",
          text: "Qué frase tiene que quedar. Lo demás es producción.",
        },
        {
          title: "Uso",
          text: "Menos piezas, y solo las que alguien va a usar después de la entrega.",
        },
        {
          title: "Técnica",
          text: "Una página o una interfaz cuando el mensaje ya no cabe en un archivo.",
        },
      ],
    },
    faq: {
      label: "Preguntas",
      headline: "Preguntas frecuentes.",
      items: [
        {
          q: "¿Puedo contratar un solo servicio?",
          a: "Sí. Puedes trabajar con nosotros en una necesidad específica. Si en el proceso notamos áreas de mejora, te lo haremos saber de forma honesta, sin obligarte a contratar servicios adicionales.",
        },
        {
          q: "¿Trabajan con proyectos que apenas están comenzando?",
          a: "Sí. Ayudamos a sentar bases sólidas. Podemos estructurar tu identidad o tu web inicial para que salgas al mercado con una imagen profesional.",
        },
        {
          q: "¿Trabajan únicamente con empresas?",
          a: "No. Tenemos una afinidad especial por los proyectos culturales, artistas y creadores, adaptando nuestro rigor técnico a las sensibilidades del mundo creativo.",
        },
        {
          q: "¿Cómo solicito una propuesta?",
          a: "Solo escríbenos. Cuéntanos qué haces, qué te quita el sueño hoy y qué quieres lograr. A partir de ahí, organizamos una llamada para definir los siguientes pasos.",
        },
      ],
    },
    cta: {
      eyebrow: "Hablemos",
      headline: "Cuéntanos qué estás preparando.",
      body: ["Ya sea que tengas requerimientos técnicos muy estructurados o apenas una idea que necesitas aterrizar, estamos aquí para escucharte. Cuéntanos sobre tu visión; analizaremos tu caso y te responderemos para evaluar cómo podemos sumar valor a tu proyecto."],
      primary: "Hablemos de tu proyecto",
      whatsapp: "(+57) 301 599 3300",
      email: "hello@scelerity.co",
      location: "Bogotá · Colombia",
        response: "Te responderemos muy pronto.",
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          phone: "Nombre de tu empresa o proyecto (opcional)",
          source: "¿En qué necesitas ayuda?",
          sourcePlaceholder: "¿En qué necesitas ayuda?",
          message: "Tu proyecto",
          messagePlaceholder: "Cuéntanos un poco sobre tu proyecto y lo que te gustaría conseguir.",
        captcha: "No soy un robot",
        submit: "Enviar consulta",
        submitting: "Enviando...",
        success: "Gracias por escribirnos. Tu mensaje está en buenas manos, te responderemos muy pronto.",
        error: "No pudimos enviar el mensaje. Inténtalo de nuevo.",
        required: "Campo obligatorio",
        sources: [
          { value: "brand", label: "Branding e identidad" },
          { value: "web", label: "Diseño y desarrollo web" },
          { value: "ux", label: "Diseño UI/UX" },
          { value: "marketing", label: "Marketing digital" },
          { value: "culture", label: "Proyecto cultural" },
          { value: "unsure", label: "Aún no lo tengo claro" },
        ],
      },
    },
    footer: {
      tagline: "Scelerity es una agencia creativa y digital especializada en branding, diseño UI/UX, desarrollo web y estrategias de marketing para marcas con propósito y proyectos culturales.",
      rights: "Todos los derechos reservados.",
      navLabel: "Navegación",
      links: [
        { href: "/servicios/", label: "Servicios" },
        { href: "/#trabajo", label: "Proyectos" },
        { href: "/nosotros/", label: "La agencia" },
        { href: "/contacto/", label: "Contacto" },
      ],
      legal: [
        { href: "/privacidad/", label: "Política de privacidad" },
        { href: "/terminos/", label: "Términos y condiciones" },
      ],
      social: [
        {
          platform: "instagram",
          href: "https://instagram.com/scelerity",
          label: "Instagram",
        },
        {
          platform: "facebook",
          href: "https://facebook.com/scelerity",
          label: "Facebook",
        },
        {
          platform: "tiktok",
          href: "https://tiktok.com/@scelerity",
          label: "TikTok",
        },
        {
          platform: "linkedin",
          href: "https://linkedin.com/company/scelerity",
          label: "LinkedIn",
        },
      ],
    },
  },
  en: {
    nav: {
      work: "Projects",
      about: "Agency",
      services: "What we do",
      returns: "Territory",
      method: "How it starts",
      solutions: "Solutions",
      servicesPage: "Services",
      company: "About",
      journal: "Blog",
      contact: "Write to us",
      menu: "Menu",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      skipToContent: "Skip to content",
    },
    journal: {
      label: "Notes",
      headline: "Notes.",
      sub: "Writing about the work.",
      readArticle: "Read article",
      viewAll: "View all posts",
      prev: "Previous",
      next: "Next",
    },
    solutions: solutionsEn,
    hero: {
      brand: "Scelerity",
      kicker: "Bogotá",
      headline: "Brand, site, and outreach for projects and companies.",
      sub: "An artist, an event, or a business. What is missing can be commissioned together or in parts.",
      ctaPrimary: "Outline a brief",
      ctaSecondary: "See services",
    },
    work: {
      label: "Studies",
      headline: "Three craft pieces. No client.",
      view: "View the piece",
      cta: "Outline a brief",
      projects: [
        {
          title: "Aether",
          category: "Internal study · Product design",
          description: "The first screen did not say what the product was. One order remained, including on the phone.",
          metrics: [
            { value: "UI", label: "Product" },
            { value: "Web", label: "Desktop and mobile" },
          ],
          media: "image",
          cover: "/projects/aether.jpg",
          coverAlt:
            "Editorial mockup Aether — SaaS platform on MacBook and iPhone, navy violet cyan palette",
        },
        {
          title: "Northline",
          category: "Internal study · Identity",
          description: "The mark is recognized still and in motion. Internal study: there is no client.",
          metrics: [
            { value: "Brand", label: "Identity" },
            { value: "Motion", label: "Screen" },
          ],
          media: "video",
          cover: "/projects/northline.jpg",
          coverAlt:
            "Editorial mockup Northline — motion identity on monitor and phone, charcoal sand amber palette",
        },
        {
          title: "Vespera",
          category: "Internal study · Brand and app",
          description: "The app opens with the same brand as the paper. This is an internal study too.",
          metrics: [
            { value: "Brand", label: "System" },
            { value: "App", label: "Interface" },
          ],
          media: "image",
          cover: "/projects/vespera.jpg",
          coverAlt:
            "Editorial mockup Vespera — brand app on iPhones, blush wine champagne palette",
        },
      ],
    },
    about: {
      label: "The studio",
      headline: "Four crafts, one brief.",
      body: [
        "Scelerity, in Bogotá, makes identity, interface, site, and outreach. A musician, a festival, or a company can commission one piece.",
        "If the site depends on a brand that does not exist yet, that is written into the scope. We do not promise a full room or a sales figure.",
      ],
      cta: "See the crafts",
      principles: [
        {
          title: "Identity",
          text: "Name, tone, and rules so the poster and the page are recognized.",
        },
        {
          title: "Use",
          text: "The path to listen, book, buy, or write.",
        },
        {
          title: "Outreach",
          text: "The ad leads to that page, not to a different offer.",
        },
      ],
    },
    services: {
      label: "Services",
      headline: "The crafts.",
      deck: "Site, interface, brand, and outreach. Each one covers a different gap.",
      cta: "Commission",
      phases: [
        {
          name: "Development",
          lead: "The working site.",
          body: "It explains the offer, takes a message, sells a ticket, or holds an account.",
          rows: [
            { label: "Offer", value: "What is sold" },
            { label: "Customer", value: "Who it is for" },
            { label: "Message", value: "What has to be clear" },
          ],
          image: "/services/estructura.jpg",
          alt: "A monitor with page blocks and three acetate sheets of the same structure",
          href: "/servicios/desarrollo-web/",
          action: "See development",
        },
        {
          name: "Interface",
          lead: "The path.",
          body: "What appears first, and what is tapped to listen, book, or buy.",
          rows: [
            { label: "Identity", value: "What gets recognized" },
            { label: "Direction", value: "Art and tone" },
            { label: "Language", value: "What repeats on every piece" },
          ],
          image: "/services/pagina.jpg",
          alt: "A monitor and a printed sheet with the same layout, and no text",
          href: "/servicios/diseno-web/",
          action: "See interface",
        },
        {
          name: "Brand",
          lead: "The same mark.",
          body: "Name and rules. The poster, the listing, and the page recognize each other.",
          rows: [
            { label: "Interface", value: "The form of use" },
            { label: "Engineering", value: "That it stays standing when people arrive" },
            { label: "Reading", value: "The same meaning on phone and desktop" },
          ],
          image: "/services/marca.jpg",
          alt: "Bone paper, black paper, a magenta chip, and a geometric mark",
          href: "/servicios/branding/",
          action: "See brand",
        },
        {
          name: "Marketing",
          lead: "Reach outward.",
          body: "Where the project is announced, and which page answers.",
          rows: [
            { label: "Message", value: "What gets repeated" },
            { label: "Channel", value: "Where it is published" },
            { label: "Next", value: "What gets reviewed after" },
          ],
          image: "/services/piezas.jpg",
          alt: "A ticket, a card, and an envelope sharing one mark and one magenta stripe",
          href: "/servicios/marketing-digital/",
          action: "See outreach",
        },
      ],
    },
    featured: {
      label: "Sample piece",
      project: {
        title: "Aether",
        category: "Digital product",
        description:
          "A dense platform, hard to show. What remained was the hierarchy and one visual system, on desktop and on mobile.",
        metrics: [
          { value: "UI", label: "Product" },
          { value: "Web", label: "Desktop and mobile" },
          { value: "System", label: "Visual" },
        ],
        media: "image",
        cover: "/projects/aether.jpg",
        coverAlt:
          "Editorial mockup Aether — SaaS platform on MacBook and iPhone, navy violet cyan palette",
      },
    },
    process: {
      label: "How it starts",
      headline: "From the brief to the handoff.",
      steps: [
        { number: "01", title: "First message", text: "What the project is, who it is for, and which piece is missing." },
        { number: "02", title: "Scope", text: "What is in, what stays out, and what is delivered. Agreed before production." },
        { number: "03", title: "Design", text: "Identity or interface, depending on the brief, reviewed before they are built." },
        { number: "04", title: "Build", text: "The site or the piece is programmed and checked on a phone." },
        { number: "05", title: "Adjustments", text: "What was already in the scope gets corrected." },
        { number: "06", title: "Handoff", text: "A published page or files, with a way to use them." },
      ],
    },
    trust: {
      label: "Together",
      headline: "Why they are not separate.",
      body: [
        "A logo, a page, and ads made apart often tell three offers. Here the scope says which pieces enter the same brief.",
        "There are no published clients. The three pieces above belong to the studio.",
      ],
      points: [
        { title: "One scope", text: "Identity, interface, site, and outreach are listed before work starts." },
        { title: "On the phone", text: "The piece is tested where the audience will open it." },
        { title: "After", text: "Outreach waits until the page exists." },
      ],
    },
    benefits: {
      label: "Judgment",
      headline: "What gets decided before design.",
      items: [
        {
          title: "Context",
          text: "Where the business comes from, and what already exists, before a format is chosen.",
        },
        {
          title: "Message",
          text: "Which sentence has to remain. The rest is production.",
        },
        {
          title: "Use",
          text: "Fewer pieces, and only the ones someone will use after delivery.",
        },
        {
          title: "Technique",
          text: "A page or an interface when the message no longer fits in a file.",
        },
      ],
    },
    faq: {
      label: "Questions",
      headline: "Before starting a project.",
      items: [
        {
          q: "Do you work with companies in any sector?",
          a: "Yes. The brief is brand, design, or digital presence. Culture is one sector, not a condition for hiring us.",
        },
        {
          q: "How do I start?",
          a: "Write through the form or WhatsApp. Tell us what you need and we will propose a conversation.",
        },
        {
          q: "Can I commission only the brand or only the website?",
          a: "Yes. If the site depends on an identity that does not exist yet, we say so when we define the scope.",
        },
        {
          q: "How long does it take?",
          a: "It depends on the scope. The timeline is agreed in the first conversation, before work starts.",
        },
      ],
    },
    cta: {
      eyebrow: "Brief",
      headline: "Tell us the project.",
      body: ["An artist, an event, or a business. What already exists and what is missing: brand, site, interface, or outreach."],
      primary: "Outline a brief",
      whatsapp: "+57 3015993300",
      email: "hello@scelerity.co",
      location: "Bogotá · Colombia",
      response: "Write to us and we will reply.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        source: "How did you find us?",
        sourcePlaceholder: "Select an option",
        message: "Message",
        messagePlaceholder: "What you sell, and what is missing: the brand, the page, or both.",
        captcha: "I'm not a robot",
        submit: "Outline the brief",
        submitting: "Sending...",
        success: "Message sent. We'll be in touch soon.",
        error: "We couldn't send the message. Please try again.",
        required: "Required field",
        sources: [
          { value: "google", label: "Google" },
          { value: "linkedin", label: "LinkedIn" },
          { value: "instagram", label: "Instagram" },
          { value: "behance", label: "Behance" },
          { value: "dribbble", label: "Dribbble" },
          { value: "client", label: "Client" },
          { value: "referral", label: "Referral" },
          { value: "other", label: "Other" },
        ],
      },
    },
    footer: {
      tagline: "Websites, brands, and campaigns. Bogotá.",
      rights: "All rights reserved.",
      navLabel: "Navigation",
      links: [
        { href: "/servicios/", label: "Services" },
        { href: "/blog/", label: "Blog" },
        { href: "/nosotros/", label: "About" },
        { href: "/contacto/", label: "Contact" },
      ],
      legal: [
        { href: "/privacidad/", label: "Privacy Policy" },
        { href: "/terminos/", label: "Terms & Conditions" },
      ],
      social: [
        {
          platform: "instagram",
          href: "https://instagram.com/scelerity",
          label: "Instagram",
        },
        {
          platform: "facebook",
          href: "https://facebook.com/scelerity",
          label: "Facebook",
        },
        {
          platform: "tiktok",
          href: "https://tiktok.com/@scelerity",
          label: "TikTok",
        },
        {
          platform: "linkedin",
          href: "https://linkedin.com/company/scelerity",
          label: "LinkedIn",
        },
      ],
    },
  },
};