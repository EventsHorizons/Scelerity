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
      work: "Trabajo",
      about: "Agencia",
      services: "Qué hacemos",
      returns: "Territorio",
      method: "Método",
      solutions: "Soluciones",
      servicesPage: "Servicios",
      company: "Nosotros",
      journal: "Blog",
      contact: "Hablemos",
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
      kicker: "Cultural & creative marketing",
      headline: "Hacemos que las ideas entren en la cultura.",
      sub: "Estrategia, creatividad, identidad y experiencias para marcas, proyectos y comunidades que tienen algo que mover.",
      ctaPrimary: "Hablemos",
      ctaSecondary: "Ver proyectos",
    },
    work: {
      label: "Trabajo",
      headline: "Ideas que ya están ocurriendo.",
      view: "Ver proyecto",
      cta: "Hablemos",
      projects: [
        {
          title: "Aether",
          category: "Experiencias · Digital",
          description: "Jerarquía y un solo sistema visual, en escritorio y en móvil.",
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
          category: "Identidad",
          description: "Imagen fija y movimiento, leídos como una sola pieza.",
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
          category: "Identidad · Experiencias",
          description: "La aplicación y la identidad, con el mismo criterio desde la primera pantalla.",
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
      label: "Cultura",
      headline: "Cultura mueve personas.",
      body: [
        "Nosotros ayudamos a mover ideas.",
        "Trabajamos entre creatividad, estrategia y cultura para que un proyecto conecte con las personas correctas y tenga relevancia, no solo presencia.",
      ],
      cta: "Ver proyectos",
      principles: [
        {
          title: "Proyectos culturales",
          text: "Artistas, colectivos, instituciones, festivales, espacios, editoriales y organizaciones creativas.",
        },
        {
          title: "Industrias creativas",
          text: "Música, moda, arte, diseño, cine, entretenimiento, arquitectura, gastronomía y publishing.",
        },
        {
          title: "Marcas",
          text: "Empresas que quieren una relación real con comunidades y territorios culturales.",
        },
      ],
    },
    services: {
      label: "Qué hacemos",
      headline: "Una idea no termina en una campaña.",
      deck: "Una campaña se apaga. Si la idea no tiene estrategia, sistema, producto y una forma de seguir, se queda en un anuncio.",
      cta: "Hablemos",
      phases: [
        {
          name: "Estrategia",
          lead: "Entender antes de comunicar.",
          body: "Audiencia, contexto y territorio cultural. Sin eso, la pieza llega a nadie.",
          rows: [
            { label: "Audiencia", value: "A quién tiene que llegar" },
            { label: "Contexto", value: "De dónde sale el proyecto" },
            { label: "Territorio", value: "La conversación cultural" },
          ],
          image:
            "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1800&q=80",
          alt: "Sala de una galería: el territorio donde una idea tiene que encontrar a alguien",
        },
        {
          name: "Sistemas",
          lead: "Hacer reconocible la idea.",
          body: "Identidad, dirección de arte y un lenguaje que se sostiene en cada pieza.",
          rows: [
            { label: "Identidad", value: "Lo que se reconoce" },
            { label: "Dirección", value: "Arte y tono" },
            { label: "Lenguaje", value: "Lo que se repite en cada pieza" },
          ],
          image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1800&q=80",
          alt: "Muestrario de color y paleta de un sistema visual",
        },
        {
          name: "Producto",
          lead: "Darle una forma que se usa.",
          body: "Interfaz e ingeniería, para que el mismo sentido aguante en el teléfono y en el escritorio.",
          rows: [
            { label: "Interfaz", value: "La forma de usarlo" },
            { label: "Ingeniería", value: "Que siga en pie cuando llega gente" },
            { label: "Lectura", value: "El mismo sentido en móvil y escritorio" },
          ],
          image:
            "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1800&q=80",
          alt: "Una página diseñada, vista en monitor, tablet y teléfono",
        },
        {
          name: "Continuidad",
          lead: "Que no dependa de una campaña.",
          body: "Experiencias, canales y lo que se automatiza para que el trabajo no se detenga.",
          rows: [
            { label: "Experiencias", value: "Digital, social y espacios" },
            { label: "Automatización", value: "Lo que no debería ocupar el día" },
            { label: "Después", value: "Qué se observa cuando la campaña termina" },
          ],
          image:
            "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?auto=format&fit=crop&w=1800&q=80",
          alt: "Un tablero de automatizaciones que conecta tareas entre herramientas",
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
      label: "Método",
      headline: "No existe una fórmula para la cultura.",
      steps: [
        {
          number: "01",
          title: "Observar",
          text: "El proyecto, su contexto, las personas y la conversación cultural en la que quiere entrar.",
        },
        {
          number: "02",
          title: "Encontrar",
          text: "Una tensión, una oportunidad o una idea que vale la pena explorar.",
        },
        {
          number: "03",
          title: "Crear",
          text: "Estrategia, concepto, identidad y experiencia.",
        },
        {
          number: "04",
          title: "Activar",
          text: "Los canales, plataformas, espacios y comunidades donde la idea puede tener sentido.",
        },
        {
          number: "05",
          title: "Aprender",
          text: "Medimos, observamos y seguimos.",
        },
      ],
    },
    benefits: {
      label: "Criterio",
      headline: "No perseguimos tendencias.",
      items: [
        {
          title: "Contexto",
          text: "Antes que formato. Intentamos entender de dónde viene algo antes de usarlo.",
        },
        {
          title: "Idea",
          text: "Antes que contenido. Crear contenido no es lo mismo que tener algo que decir.",
        },
        {
          title: "Relevancia",
          text: "Antes que ruido. Hacer ruido es fácil. Crear relevancia es otra cosa.",
        },
        {
          title: "Tecnología",
          text: "Cuando la idea necesita una nueva forma: web, interfaz, motion o un producto digital.",
        },
      ],
    },
    faq: {
      label: "Alcance",
      headline: "Antes de empezar.",
      items: [
        {
          q: "¿Sirve si el proyecto no es cultural?",
          a: "Sí. El encargo es el mismo: que se vea, se use y pueda crecer. En música, arte y eventos esa necesidad aparece antes. En una empresa, por la misma razón.",
        },
        {
          q: "¿Y si ya tengo identidad?",
          a: "Si aguanta, se construye encima. Si no aguanta, se corrige antes de hacer el resto.",
        },
        {
          q: "¿Qué recibo?",
          a: "La parte encargada, lista para usar: identidad, producto, campaña, o las tres alineadas.",
        },
        {
          q: "¿Puedo pedir solo la web?",
          a: "Puedes. Si la web depende de una identidad que todavía no existe, se dice al empezar.",
        },
      ],
    },
    cta: {
      eyebrow: "Contacto",
      headline: "¿Qué quieres poner en movimiento?",
      body: ["Cuéntanos sobre el proyecto."],
      primary: "Iniciar conversación",
      whatsapp: "(+57) 301 599 3300",
      email: "hello@scelerity.co",
      location: "Bogotá · Colombia",
      response: "Respuesta en menos de 24 horas",
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        phone: "Teléfono",
        source: "¿Cómo nos conoces?",
        sourcePlaceholder: "Selecciona una opción",
        message: "Mensaje",
        messagePlaceholder: "Qué es el proyecto y qué quieres poner en movimiento.",
        captcha: "No soy un robot",
        submit: "Enviar",
        submitting: "Enviando...",
        success: "Mensaje enviado. Te respondemos pronto.",
        error: "No pudimos enviar el mensaje. Inténtalo de nuevo.",
        required: "Campo obligatorio",
        sources: [
          { value: "google", label: "Google" },
          { value: "linkedin", label: "LinkedIn" },
          { value: "instagram", label: "Instagram" },
          { value: "behance", label: "Behance" },
          { value: "dribbble", label: "Dribbble" },
          { value: "client", label: "Cliente" },
          { value: "referral", label: "Referido" },
          { value: "other", label: "Otro" },
        ],
      },
    },
    footer: {
      tagline: "Cultural & creative marketing.",
      rights: "Todos los derechos reservados.",
      navLabel: "Navegación",
      links: [
        { href: "/servicios/", label: "Servicios" },
        { href: "/blog/", label: "Blog" },
        { href: "/nosotros/", label: "Nosotros" },
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
      work: "Work",
      about: "Agency",
      services: "What we do",
      returns: "Territory",
      method: "Method",
      solutions: "Solutions",
      servicesPage: "Services",
      company: "About",
      journal: "Blog",
      contact: "Let's talk",
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
      kicker: "Cultural & creative marketing",
      headline: "We help ideas enter culture.",
      sub: "Strategy, creativity, identity, and experiences for brands, projects, and communities that have something to move.",
      ctaPrimary: "Let's talk",
      ctaSecondary: "See projects",
    },
    work: {
      label: "Work",
      headline: "Ideas already in motion.",
      view: "View project",
      cta: "Let's talk",
      projects: [
        {
          title: "Aether",
          category: "Experiences · Digital",
          description: "Hierarchy and one visual system, on desktop and on mobile.",
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
          category: "Identity",
          description: "Still image and motion, read as one piece.",
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
          category: "Identity · Experiences",
          description: "The app and the identity, with the same standard from the first screen.",
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
      label: "Culture",
      headline: "Culture moves people.",
      body: [
        "We help move ideas.",
        "We work between creativity, strategy, and culture so a project reaches the right people and gains relevance, not just presence.",
      ],
      cta: "See projects",
      principles: [
        {
          title: "Cultural projects",
          text: "Artists, collectives, institutions, festivals, spaces, publishers, and creative organizations.",
        },
        {
          title: "Creative industries",
          text: "Music, fashion, art, design, film, entertainment, architecture, food, and publishing.",
        },
        {
          title: "Brands",
          text: "Companies that want a real relationship with communities and cultural territories.",
        },
      ],
    },
    services: {
      label: "What we do",
      headline: "An idea does not end in a campaign.",
      deck: "A campaign goes out. If the idea has no strategy, system, product, and a way to continue, it stays an ad.",
      cta: "Let's talk",
      phases: [
        {
          name: "Strategy",
          lead: "Understand before communicating.",
          body: "Audience, context, and cultural territory. Without that, the piece reaches no one.",
          rows: [
            { label: "Audience", value: "Who it has to reach" },
            { label: "Context", value: "Where the project comes from" },
            { label: "Territory", value: "The cultural conversation" },
          ],
          image:
            "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1800&q=80",
          alt: "A gallery room: the territory where an idea has to find someone",
        },
        {
          name: "Systems",
          lead: "Make the idea recognizable.",
          body: "Identity, art direction, and a language that holds on every piece.",
          rows: [
            { label: "Identity", value: "What gets recognized" },
            { label: "Direction", value: "Art and tone" },
            { label: "Language", value: "What repeats on every piece" },
          ],
          image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1800&q=80",
          alt: "Color swatches and a palette from a visual system",
        },
        {
          name: "Product",
          lead: "Give it a form that gets used.",
          body: "Interface and engineering, so the same meaning holds on the phone and on the desktop.",
          rows: [
            { label: "Interface", value: "The form of use" },
            { label: "Engineering", value: "That it stays standing when people arrive" },
            { label: "Reading", value: "The same meaning on phone and desktop" },
          ],
          image:
            "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1800&q=80",
          alt: "A designed page, seen on a monitor, a tablet, and a phone",
        },
        {
          name: "Continuity",
          lead: "So it does not depend on a campaign.",
          body: "Experiences, channels, and what gets automated so the work does not stop.",
          rows: [
            { label: "Experiences", value: "Digital, social, and spaces" },
            { label: "Automation", value: "What should not take the day" },
            { label: "After", value: "What gets watched once the campaign ends" },
          ],
          image:
            "https://images.unsplash.com/photo-1648134859187-71dadc9f815a?auto=format&fit=crop&w=1800&q=80",
          alt: "An automations board that connects tasks across tools",
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
      label: "Method",
      headline: "There is no formula for culture.",
      steps: [
        {
          number: "01",
          title: "Observe",
          text: "The project, its context, the people, and the cultural conversation it wants to enter.",
        },
        {
          number: "02",
          title: "Find",
          text: "A tension, an opportunity, or an idea worth exploring.",
        },
        {
          number: "03",
          title: "Create",
          text: "Strategy, concept, identity, and experience.",
        },
        {
          number: "04",
          title: "Activate",
          text: "The channels, platforms, spaces, and communities where the idea can make sense.",
        },
        {
          number: "05",
          title: "Learn",
          text: "We measure, watch, and continue.",
        },
      ],
    },
    benefits: {
      label: "Judgment",
      headline: "We do not chase trends.",
      items: [
        {
          title: "Context",
          text: "Before format. We try to understand where something comes from before using it.",
        },
        {
          title: "Idea",
          text: "Before content. Making content is not the same as having something to say.",
        },
        {
          title: "Relevance",
          text: "Before noise. Making noise is easy. Creating relevance is something else.",
        },
        {
          title: "Technology",
          text: "When the idea needs a new form: web, interface, motion, or a digital product.",
        },
      ],
    },
    faq: {
      label: "Scope",
      headline: "Before you start.",
      items: [
        {
          q: "Does this work if the project is not cultural?",
          a: "Yes. The brief is the same: to be seen, to be used, and to be able to grow. In music, art, and events, that need appears sooner. In a company, for the same reason.",
        },
        {
          q: "What if I already have an identity?",
          a: "If it holds, we build on it. If it does not, we correct it before making the rest.",
        },
        {
          q: "What do I receive?",
          a: "The part you commission, ready to use: identity, product, campaign, or the three of them aligned.",
        },
        {
          q: "Can I ask only for the website?",
          a: "You can. If the site depends on an identity that does not exist yet, we say so at the start.",
        },
      ],
    },
    cta: {
      eyebrow: "Contact",
      headline: "What do you want to set in motion?",
      body: ["Tell us about the project."],
      primary: "Start a conversation",
      whatsapp: "+57 3015993300",
      email: "hello@scelerity.co",
      location: "Bogotá · Colombia",
      response: "Reply within 24 hours",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        source: "How did you find us?",
        sourcePlaceholder: "Select an option",
        message: "Message",
        messagePlaceholder: "What the project is, and what you want to set in motion.",
        captcha: "I'm not a robot",
        submit: "Send",
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
      tagline: "Cultural & creative marketing.",
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
