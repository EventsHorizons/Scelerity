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
};

export type Content = {
  nav: {
    work: string;
    about: string;
    services: string;
    solutions: string;
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
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  work: {
    label: string;
    headline: string;
    view: string;
    projects: Project[];
  };
  about: {
    label: string;
    headline: string;
    body: string[];
    principles: { title: string; text: string }[];
  };
  services: {
    label: string;
    headline: string;
    columns: { what: string; why: string; result: string };
    items: {
      name: string;
      what: string;
      why: string;
      result: string;
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
      about: "Nosotros",
      services: "Servicios",
      solutions: "Soluciones",
      journal: "Blog",
      contact: "Contacto",
      menu: "Menú",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      skipToContent: "Saltar al contenido",
    },
    journal: {
      label: "Blog",
      headline: "Ideas que mueven marcas.",
      sub: "Diseño, producto y marketing — sin relleno, con criterio.",
      readArticle: "Leer artículo",
      viewAll: "Ver todo el Blog",
      prev: "Anterior",
      next: "Siguiente",
    },
    solutions: solutionsEs,
    hero: {
      brand: "Scelerity",
      headline: "Velocidad con precisión.",
      sub: "Diseño y producto digital de alto rendimiento.",
      ctaPrimary: "Empezar",
      ctaSecondary: "Ver trabajo",
    },
    work: {
      label: "Trabajo seleccionado",
      headline: "Proyectos que se sienten inevitables.",
      view: "Explorar",
      projects: [
        {
          title: "Aether",
          category: "Producto · Plataforma",
          description:
            "Una plataforma compleja convertida en una interfaz que se entiende en segundos.",
          metrics: [
            { value: "+42%", label: "Conversión" },
            { value: "8 sem", label: "Al lanzamiento" },
          ],
          media: "image",
        },
        {
          title: "Northline",
          category: "Motion · Identidad",
          description:
            "Sistema visual y motion diseñados como una sola pieza.",
          metrics: [
            { value: "3.2x", label: "Recuerdo" },
            { value: "60 fps", label: "En dispositivo" },
          ],
          media: "video",
        },
        {
          title: "Vespera",
          category: "App · Marca",
          description:
            "Producto y marca alineados desde el primer frame.",
          metrics: [
            { value: "4.8★", label: "Store rating" },
            { value: "−38%", label: "Fricción" },
          ],
          media: "image",
        },
      ],
    },
    about: {
      label: "Sobre Scelerity",
      headline: "Construimos lo que se siente inevitable.",
      body: [
        "Somos un estudio de diseño y producto digital. Trabajamos con marcas que necesitan velocidad sin perder control.",
        "Cada detalle responde a una decisión. La belleza sin función no es craft, y la velocidad sin control no es potencia.",
      ],
      principles: [
        {
          title: "Claridad",
          text: "Si no se entiende rápido, no está terminado.",
        },
        {
          title: "Precisión",
          text: "Cada interacción tiene una razón de existir.",
        },
        {
          title: "Momentum",
          text: "El producto debe sentirse vivo, no decorado.",
        },
      ],
    },
    services: {
      label: "Servicios",
      headline: "Tres disciplinas. Una dirección.",
      columns: { what: "Qué", why: "Por qué", result: "Resultado" },
      items: [
        {
          name: "Producto digital",
          what: "Interfaces, flujos y sistemas de diseño.",
          why: "Porque la experiencia es el producto.",
          result: "Productos que se usan sin fricción y se recuerdan.",
        },
        {
          name: "Desarrollo",
          what: "Frontends rápidos, estables y escalables.",
          why: "Porque el craft se mide en rendimiento real.",
          result: "Sistemas listos para crecer sin reescribirse.",
        },
        {
          name: "Marca",
          what: "Identidad, motion y herramientas inteligentes.",
          why: "Porque la marca debe operar, no solo verse.",
          result: "Presencia con carácter e inteligencia con propósito.",
        },
      ],
    },
    featured: {
      label: "Proyecto destacado",
      project: {
        title: "Aether",
        category: "Producto · Plataforma",
        description:
          "Rediseñamos una plataforma densa en una experiencia clara: menos pasos, más confianza, resultados medibles en semanas.",
        metrics: [
          { value: "+42%", label: "Conversión" },
          { value: "8 sem", label: "Al lanzamiento" },
          { value: "−51%", label: "Tiempo de tarea" },
        ],
        media: "image",
      },
    },
    process: {
      label: "Método",
      headline: "Cómo trabajamos.",
      steps: [
        {
          number: "01",
          title: "Escuchar",
          text: "Contexto, restricciones y objetivo real.",
        },
        {
          number: "02",
          title: "Definir",
          text: "Alcance claro. Decisiones tempranas.",
        },
        {
          number: "03",
          title: "Construir",
          text: "Diseño y desarrollo en paralelo.",
        },
        {
          number: "04",
          title: "Pulir",
          text: "Detalle, rendimiento y entrega limpia.",
        },
      ],
    },
    benefits: {
      label: "Por qué Scelerity",
      headline: "Lo que cambia cuando trabajas con nosotros.",
      items: [
        {
          title: "Velocidad con criterio",
          text: "Movemos rápido sin improvisar. Cada sprint deja algo usable.",
        },
        {
          title: "Diseño que convierte",
          text: "La estética sirve a la claridad, no al revés.",
        },
        {
          title: "Código listo para escala",
          text: "Arquitectura pensada para crecer, no para demos.",
        },
        {
          title: "Una sola dirección",
          text: "Diseño, producto y desarrollo alineados desde el día uno.",
        },
      ],
    },
    faq: {
      label: "Preguntas",
      headline: "Antes de empezar.",
      items: [
        {
          q: "¿Con qué tipo de empresas trabajan?",
          a: "Con startups en crecimiento y equipos que ya tienen tracción, pero necesitan un producto o marca a la altura de su ambición.",
        },
        {
          q: "¿Cuánto dura un proyecto típico?",
          a: "Un MVP o rediseño enfocado suele tomar de 4 a 10 semanas. Proyectos de sistema más amplios se definen por fases.",
        },
        {
          q: "¿Trabajan remoto?",
          a: "Sí. Operamos de forma remota con comunicación clara, demos frecuentes y un solo punto de contacto.",
        },
        {
          q: "¿Cómo empieza una colaboración?",
          a: "Con una llamada corta. Si hay feeling, te enviamos una propuesta con alcance, timeline y siguiente paso.",
        },
      ],
    },
    cta: {
      eyebrow: "Let's build something exceptional",
      headline: "Construyamos algo que se mueva.",
      body: [
        "Creamos experiencias digitales de alto impacto para empresas que buscan diferenciarse mediante diseño, desarrollo, inteligencia artificial y tecnología.",
        "Cuéntanos tu idea y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.",
      ],
      primary: "Escríbenos",
      whatsapp: "(+57) 301 599 3300",
      email: "hello@scelerity.co",
      location: "Remote · Worldwide",
      response: "Respuesta en menos de 24 horas",
      form: {
        name: "Nombre",
        email: "Correo electrónico",
        phone: "Teléfono",
        source: "¿Cómo nos conoces?",
        sourcePlaceholder: "Selecciona una opción",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos sobre tu proyecto...",
        captcha: "No soy un robot",
        submit: "Enviar mensaje",
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
      tagline: "Craft. Velocidad. Precisión.",
      rights: "Todos los derechos reservados.",
      navLabel: "Navegación",
      links: [
        { href: "/soluciones/", label: "Soluciones" },
        { href: "/blog/", label: "Blog" },
        { href: "/#services", label: "Servicios" },
        { href: "/#work", label: "Portafolio" },
        { href: "/#about", label: "Nosotros" },
        { href: "/#contact", label: "Contacto" },
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
      about: "About us",
      services: "Services",
      solutions: "Solutions",
      journal: "Blog",
      contact: "Contact",
      menu: "Menu",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      skipToContent: "Skip to content",
    },
    journal: {
      label: "Blog",
      headline: "Ideas that move brands.",
      sub: "Design, product, and marketing — no filler, just judgment.",
      readArticle: "Read article",
      viewAll: "View all posts",
      prev: "Previous",
      next: "Next",
    },
    solutions: solutionsEn,
    hero: {
      brand: "Scelerity",
      headline: "Speed with precision.",
      sub: "High-performance digital design and product.",
      ctaPrimary: "Start",
      ctaSecondary: "View work",
    },
    work: {
      label: "Selected work",
      headline: "Projects that feel inevitable.",
      view: "Explore",
      projects: [
        {
          title: "Aether",
          category: "Product · Platform",
          description:
            "A complex platform turned into an interface you understand in seconds.",
          metrics: [
            { value: "+42%", label: "Conversion" },
            { value: "8 wks", label: "To launch" },
          ],
          media: "image",
        },
        {
          title: "Northline",
          category: "Motion · Identity",
          description:
            "Visual system and motion designed as one piece.",
          metrics: [
            { value: "3.2x", label: "Recall" },
            { value: "60 fps", label: "Every device" },
          ],
          media: "video",
        },
        {
          title: "Vespera",
          category: "App · Brand",
          description:
            "Product and brand aligned from the first frame.",
          metrics: [
            { value: "4.8★", label: "Store rating" },
            { value: "−38%", label: "Friction" },
          ],
          media: "image",
        },
      ],
    },
    about: {
      label: "About Scelerity",
      headline: "We build what feels inevitable.",
      body: [
        "We are a digital design and product studio. We work with brands that need speed without losing control.",
        "Every detail answers to a decision. Beauty without function isn’t craft, and speed without control isn’t power.",
      ],
      principles: [
        {
          title: "Clarity",
          text: "If it isn’t understood quickly, it isn’t finished.",
        },
        {
          title: "Precision",
          text: "Every interaction has a reason to exist.",
        },
        {
          title: "Momentum",
          text: "The product should feel alive—not decorated.",
        },
      ],
    },
    services: {
      label: "Services",
      headline: "Three disciplines. One direction.",
      columns: { what: "What", why: "Why", result: "Result" },
      items: [
        {
          name: "Digital product",
          what: "Interfaces, flows, and design systems.",
          why: "Because experience is the product.",
          result: "Products used without friction and remembered.",
        },
        {
          name: "Development",
          what: "Fast, stable frontends built to scale.",
          why: "Because craft is measured in real performance.",
          result: "Systems ready to grow without a rewrite.",
        },
        {
          name: "Brand & AI",
          what: "Identity, motion, and intelligent tools.",
          why: "Because a brand should operate, not just look.",
          result: "Presence with character. Intelligence with purpose.",
        },
      ],
    },
    featured: {
      label: "Featured project",
      project: {
        title: "Aether",
        category: "Product · Platform",
        description:
          "We turned a dense platform into a clear experience: fewer steps, more trust, measurable results in weeks.",
        metrics: [
          { value: "+42%", label: "Conversion" },
          { value: "8 wks", label: "To launch" },
          { value: "−51%", label: "Task time" },
        ],
        media: "image",
      },
    },
    process: {
      label: "Method",
      headline: "How we work.",
      steps: [
        {
          number: "01",
          title: "Listen",
          text: "Context, constraints, and the real goal.",
        },
        {
          number: "02",
          title: "Define",
          text: "Clear scope. Early decisions.",
        },
        {
          number: "03",
          title: "Build",
          text: "Design and development in parallel.",
        },
        {
          number: "04",
          title: "Refine",
          text: "Detail, performance, clean delivery.",
        },
      ],
    },
    benefits: {
      label: "Why Scelerity",
      headline: "What changes when you work with us.",
      items: [
        {
          title: "Speed with judgment",
          text: "We move fast without improvising. Every sprint leaves something usable.",
        },
        {
          title: "Design that converts",
          text: "Aesthetics serve clarity—not the other way around.",
        },
        {
          title: "Code built to scale",
          text: "Architecture for growth, not demos.",
        },
        {
          title: "One direction",
          text: "Design, product, and engineering aligned from day one.",
        },
      ],
    },
    faq: {
      label: "Questions",
      headline: "Before we start.",
      items: [
        {
          q: "Who do you work with?",
          a: "Growing startups and teams that already have traction—but need a product or brand that matches their ambition.",
        },
        {
          q: "How long does a typical project take?",
          a: "A focused MVP or redesign usually takes 4–10 weeks. Larger system work is scoped in phases.",
        },
        {
          q: "Do you work remotely?",
          a: "Yes. We operate remotely with clear communication, frequent demos, and a single point of contact.",
        },
        {
          q: "How does a collaboration start?",
          a: "With a short call. If there’s a fit, we send a proposal with scope, timeline, and next step.",
        },
      ],
    },
    cta: {
      eyebrow: "Let's build something exceptional",
      headline: "Let's build something that moves.",
      body: [
        "We create high-impact digital experiences for companies that want to stand out through design, development, artificial intelligence, and technology.",
        "Tell us your idea and our team will get back to you within 24 hours.",
      ],
      primary: "Write to us",
      whatsapp: "+57 3015993300",
      email: "hello@scelerity.co",
      location: "Remote · Worldwide",
      response: "Reply within 24 hours",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        source: "How did you find us?",
        sourcePlaceholder: "Select an option",
        message: "Message",
        messagePlaceholder: "Tell us about your project...",
        captcha: "I'm not a robot",
        submit: "Send message",
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
      tagline: "Craft. Speed. Precision.",
      rights: "All rights reserved.",
      navLabel: "Navigation",
      links: [
        { href: "/soluciones/", label: "Solutions" },
        { href: "/blog/", label: "Blog" },
        { href: "/#services", label: "Services" },
        { href: "/#work", label: "Portfolio" },
        { href: "/#about", label: "About us" },
        { href: "/#contact", label: "Contact" },
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
