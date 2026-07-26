export type SolutionsContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    label: string;
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  pillars: {
    label: string;
    headline: string;
    items: {
      title: string;
      tagline: string;
      value: string;
    }[];
  };
  showcase: {
    label: string;
    headline: string;
    items: {
      title: string;
      category: string;
      media: "image" | "video";
      layout: "hero" | "wide" | "default";
    }[];
  };
  plans: {
    label: string;
    headline: string;
    idealLabel: string;
    includesLabel: string;
    resultLabel: string;
    items: {
      name: string;
      tagline: string;
      ideal: string;
      includes: string[];
      result: string;
    }[];
  };
  strategy: {
    label: string;
    headline: string;
    body: string;
    points: string[];
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
  close: {
    headline: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

export const solutionsEs: SolutionsContent = {
  meta: {
    title: "Soluciones — Scelerity",
    description:
      "Diseño, desarrollo y marketing digital para marcas que quieren crecer con claridad.",
  },
  hero: {
    label: "Soluciones",
    headline: "Diseño, desarrollo y marketing que hacen crecer tu marca.",
    sub: "Unimos los tres pilares que tu negocio necesita para verse bien, funcionar mejor y llegar más lejos.",
    ctaPrimary: "Escríbenos",
    ctaSecondary: "Ver planes",
  },
  pillars: {
    label: "Tres pilares",
    headline: "Todo lo que tu marca necesita, en un solo lugar.",
    items: [
      {
        title: "Diseño",
        tagline: "Claridad antes que decoración.",
        value:
          "Identidad visual, estructura y experiencia pensadas para que tu marca se entienda al instante y genere confianza.",
      },
      {
        title: "Desarrollo",
        tagline: "Rápido, sólido, listo para escalar.",
        value:
          "Sitios web, plataformas y e-commerce construidos con criterio: velocidad, funcionalidad y una base que crece contigo.",
      },
      {
        title: "Marketing digital",
        tagline: "Visibilidad con dirección.",
        value:
          "SEO, campañas y contenido que conectan con las personas correctas y convierten interés en oportunidades reales.",
      },
    ],
  },
  showcase: {
    label: "En acción",
    headline: "Así se ve cuando diseño, código y estrategia trabajan juntos.",
    items: [
      {
        title: "Northline",
        category: "Identidad · Motion",
        media: "video",
        layout: "hero",
      },
      {
        title: "Aether",
        category: "Producto · Plataforma",
        media: "image",
        layout: "default",
      },
      {
        title: "Pulse",
        category: "Landing · Conversión",
        media: "video",
        layout: "wide",
      },
      {
        title: "Meridian",
        category: "E-commerce · UX",
        media: "image",
        layout: "default",
      },
      {
        title: "Signal",
        category: "SEO · Contenido",
        media: "image",
        layout: "default",
      },
    ],
  },
  plans: {
    label: "Planes",
    headline: "Elige el punto de partida que tiene sentido para ti.",
    idealLabel: "Para quién es",
    includesLabel: "Qué incluye",
    resultLabel: "Qué buscamos lograr",
    items: [
      {
        name: "Starter",
        tagline: "Presencia web + SEO local",
        ideal: "Tu primera web profesional y empezar a aparecer donde te buscan.",
        includes: [
          "Web de hasta 5 páginas",
          "Diseño responsive + WhatsApp",
          "SEO on-page y Google Business",
          "Analítica básica",
        ],
        result: "Una presencia clara, confiable y visible en tu mercado local.",
      },
      {
        name: "Growth",
        tagline: "Web + SEO + marketing",
        ideal: "Ya tienes presencia y quieres generar leads de forma más constante.",
        includes: [
          "Web de hasta 10 páginas + landings",
          "SEO técnico y contenido",
          "Google Ads y Meta Ads",
          "Reportes mensuales",
        ],
        result: "Un sistema que atrae tráfico cualificado y convierte mejor.",
      },
      {
        name: "Full Digital",
        tagline: "Estrategia integral",
        ideal: "Necesitas una operación digital completa, medida y sostenida.",
        includes: [
          "Sitio a medida o e-commerce",
          "SEO, contenido y multicanal",
          "Automatización y remarketing",
          "Reuniones de estrategia con KPIs",
        ],
        result: "Una operación digital ordenada, medible y pensada para crecer.",
      },
    ],
  },
  strategy: {
    label: "Estrategia",
    headline: "No improvisamos. Entendemos, definimos y ejecutamos.",
    body: "Cada proyecto empieza por entender tu negocio. Después definimos el camino, construimos la solución correcta y la mejoramos con el tiempo.",
    points: [
      "Analizamos tu negocio y tu mercado",
      "Definimos qué comunicar y a quién",
      "Implementamos con criterio y coherencia",
      "Medimos, ajustamos y optimizamos",
    ],
  },
  process: {
    label: "Cómo trabajamos",
    headline: "Un proceso claro, sin complicaciones.",
    steps: [
      {
        number: "01",
        title: "Descubrimiento",
        text: "Conocemos tu negocio, tu mercado y tu punto de partida.",
      },
      {
        number: "02",
        title: "Estrategia",
        text: "Definimos el camino y priorizamos lo que más impacta.",
      },
      {
        number: "03",
        title: "Ejecución",
        text: "Diseñamos, desarrollamos y activamos con foco en calidad.",
      },
      {
        number: "04",
        title: "Revisión",
        text: "Validamos contigo que todo responda a lo que necesitas.",
      },
      {
        number: "05",
        title: "Lanzamiento",
        text: "Ponemos todo en marcha, ordenado y listo para crecer.",
      },
      {
        number: "06",
        title: "Optimización",
        text: "Medimos, ajustamos y seguimos mejorando.",
      },
    ],
  },
  benefits: {
    label: "Qué ganas",
    headline: "Lo que cambia cuando trabajamos juntos.",
    items: [
      {
        title: "Marca más clara",
        text: "Tu mensaje se entiende. Tu identidad se siente coherente.",
      },
      {
        title: "Presencia más fuerte",
        text: "Una web que inspira confianza desde el primer segundo.",
      },
      {
        title: "Mejor visibilidad",
        text: "Apareces donde importa, con estrategia detrás.",
      },
      {
        title: "Más oportunidades",
        text: "Mejor conversión, mejores leads, mejores resultados.",
      },
    ],
  },
  close: {
    headline: "Tu marca ya tiene potencial. Hagamos que se note.",
    body: "Si buscas una estrategia clara, una ejecución cuidada y un equipo que piense contigo, hablemos.",
    ctaPrimary: "Escríbenos",
    ctaSecondary: "Ver planes",
  },
};

export const solutionsEn: SolutionsContent = {
  meta: {
    title: "Solutions — Scelerity",
    description:
      "Design, development, and digital marketing for brands that want to grow with clarity.",
  },
  hero: {
    label: "Solutions",
    headline: "Design, development, and marketing that help your brand grow.",
    sub: "We bring together the three pillars your business needs to look sharp, work better, and go further.",
    ctaPrimary: "Write to us",
    ctaSecondary: "View plans",
  },
  pillars: {
    label: "Three pillars",
    headline: "Everything your brand needs, in one place.",
    items: [
      {
        title: "Design",
        tagline: "Clarity before decoration.",
        value:
          "Visual identity, structure, and experience built so your brand is understood instantly and earns trust.",
      },
      {
        title: "Development",
        tagline: "Fast, solid, ready to scale.",
        value:
          "Websites, platforms, and e-commerce built with intent: speed, functionality, and a foundation that grows with you.",
      },
      {
        title: "Digital marketing",
        tagline: "Visibility with direction.",
        value:
          "SEO, campaigns, and content that reach the right people and turn interest into real opportunities.",
      },
    ],
  },
  showcase: {
    label: "In action",
    headline: "What it looks like when design, code, and strategy work together.",
    items: [
      {
        title: "Northline",
        category: "Identity · Motion",
        media: "video",
        layout: "hero",
      },
      {
        title: "Aether",
        category: "Product · Platform",
        media: "image",
        layout: "default",
      },
      {
        title: "Pulse",
        category: "Landing · Conversion",
        media: "video",
        layout: "wide",
      },
      {
        title: "Meridian",
        category: "E-commerce · UX",
        media: "image",
        layout: "default",
      },
      {
        title: "Signal",
        category: "SEO · Content",
        media: "image",
        layout: "default",
      },
    ],
  },
  plans: {
    label: "Plans",
    headline: "Choose the starting point that makes sense for you.",
    idealLabel: "Who it's for",
    includesLabel: "What's included",
    resultLabel: "What we're aiming for",
    items: [
      {
        name: "Starter",
        tagline: "Web presence + local SEO",
        ideal: "Your first professional site and showing up where people search for you.",
        includes: [
          "Website up to 5 pages",
          "Responsive design + WhatsApp",
          "On-page SEO and Google Business",
          "Basic analytics",
        ],
        result: "A clear, trustworthy presence visible in your local market.",
      },
      {
        name: "Growth",
        tagline: "Web + SEO + marketing",
        ideal: "You already have a presence and want to generate leads more consistently.",
        includes: [
          "Website up to 10 pages + landings",
          "Technical SEO and content",
          "Google Ads and Meta Ads",
          "Monthly reports",
        ],
        result: "A system that attracts qualified traffic and converts better.",
      },
      {
        name: "Full Digital",
        tagline: "Full-funnel strategy",
        ideal: "You need a complete, measured, sustained digital operation.",
        includes: [
          "Custom site or e-commerce",
          "SEO, content, and multichannel",
          "Automation and remarketing",
          "Strategy meetings with KPIs",
        ],
        result: "An orderly, measurable digital operation built to grow.",
      },
    ],
  },
  strategy: {
    label: "Strategy",
    headline: "We don't wing it. We understand, define, and execute.",
    body: "Every project starts by understanding your business. Then we define the path, build the right solution, and keep improving it over time.",
    points: [
      "We analyze your business and market",
      "We define what to say and who to reach",
      "We implement with judgment and coherence",
      "We measure, adjust, and optimize",
    ],
  },
  process: {
    label: "How we work",
    headline: "A clear process, no unnecessary friction.",
    steps: [
      {
        number: "01",
        title: "Discovery",
        text: "We learn your business, market, and starting point.",
      },
      {
        number: "02",
        title: "Strategy",
        text: "We define the path and prioritize what matters most.",
      },
      {
        number: "03",
        title: "Execution",
        text: "We design, build, and launch with a focus on quality.",
      },
      {
        number: "04",
        title: "Review",
        text: "We validate with you that everything fits what you need.",
      },
      {
        number: "05",
        title: "Launch",
        text: "We go live — organized and ready to grow.",
      },
      {
        number: "06",
        title: "Optimization",
        text: "We measure, adjust, and keep improving.",
      },
    ],
  },
  benefits: {
    label: "What you gain",
    headline: "What changes when we work together.",
    items: [
      {
        title: "Clearer brand",
        text: "Your message lands. Your identity feels coherent.",
      },
      {
        title: "Stronger presence",
        text: "A website that inspires trust from the first second.",
      },
      {
        title: "Better visibility",
        text: "You show up where it matters — with strategy behind it.",
      },
      {
        title: "More opportunities",
        text: "Better conversion, better leads, better results.",
      },
    ],
  },
  close: {
    headline: "Your brand already has potential. Let's make it show.",
    body: "If you want a clear strategy, careful execution, and a team that thinks with you — let's talk.",
    ctaPrimary: "Write to us",
    ctaSecondary: "View plans",
  },
};
