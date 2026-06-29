import type { Dictionary } from "@/core/i18n/types";

const es = {
  meta: {
    title: "Circular Impuls",
    description:
      "Programa de aceleración de proyectos en energía circular del territorio.",
  },
  brand: "CIRCULAR IMPULS",
  nav: {
    cta: "Inscríbete",
  },
  hero: {
    imageAlt: "Personas caminando por la ciudad",
    badge: "Plazas abiertas · Inicio 14 de agosto de 2026",
    titleLine1: "Tu modelo de negocio,",
    titleArticle: "",
    titleHighlight: "más sostenible y más rentable",
    titleLine2: "",
    subtitle:
      "¿Tienes una empresa, eres emprendedor o emprendedora, o lideras una spin-off con actividad en el Pallars?",
    subtitleLine2:
      "Este programa te ayuda a integrar la energía circular en tu modelo de negocio — y a hacerlo rentable.",
    ctaPrimary: "Inscríbete",
    ctaSecondary: "Conoce más",
    fundedBy: "Financiado por:",
    fseLogo: {
      src: "/images/logo-union-europea.png",
      alt: "Cofinanciado por la Unión Europea",
    },
    generalitatLogo: {
      src: "/images/logo-generalitat.png",
      alt: "Generalitat de Catalunya",
    },
    fundingNote:
      "Financiado por el Departamento de Empresa y Trabajo de la Generalitat de Catalunya\ny cofinanciado por el Fondo Social Europeo Plus",
    programBy: "Programa de:",
    pimecLogo: {
      src: "/images/logo-pimec.png",
      alt: "Fundación pimec",
    },
    stats: [
      { value: "80h", label: "formación" },
      { value: "100h", label: "mentoría experta" },
      { value: "Pilotos", label: "reales" },
      { value: "Inicio", label: "14 septiembre 2026" },
    ],
  },
  about: {
    label: "¿Qué es Circular Impuls?",
    titlePrefix: "",
    titleHighlight: "",
    paragraphs: [
      "Un programa que te ayuda a incorporar los principios de la economía circular en tu negocio, ya esté en marcha o todavía en fase de idea.",
      "Combina formación especializada, mentoría experta y validación en entornos reales, para convertir tu proyecto de autoconsumo, comunidad energética o modelo circular en una iniciativa viable, sostenible y con potencial real de crecimiento.",
      "Impulsado por la Fundación Pimec, con la colaboración del Departamento de Empresa y Trabajo de la Generalitat de Catalunya, y cofinanciado por la Unión Europea.",
      "Da igual si vienes de una empresa consolidada, tienes una idea en desarrollo o lideras una spin-off vinculada al territorio: este programa es para ti.",
    ],
    cardTitle: "Tu proyecto en marcha",
    cardText:
      "El sol, los recursos locales y la comunidad, convertidos en proyectos.",
  },
  areas: {
    label: "¿A quién va dirigido?",
    titleLine1: "Empresas, emprendedores",
    titleLine2: "y spin-offs en el Pallars.",
    description:
      "Para participar necesitas una empresa o idea relacionada con el Pallars y trabajar en alguna de estas líneas estratégicas:",
    items: [
      {
        icon: "cycle",
        title: "Economía circular",
        subtitle: "Reducción y reutilización",
        bullets: [
          {
            sector: "",
            text: "Reducción de residuos, reutilización y alargamiento de la vida útil de los recursos, nuevos modelos circulares en industria ligera, servicios o recursos locales.",
          },
        ],
      },
      {
        icon: "sun",
        title: "Energía renovable",
        subtitle: "Autoconsumo y comunidades",
        bullets: [
          {
            sector: "",
            text: "Proyectos de autoconsumo, comunidades energéticas, soluciones energéticas para turismo, industria, comercio, pymes, municipios o ciudadanía.",
          },
        ],
      },
      {
        icon: "leaf",
        title: "Sostenibilidad",
        subtitle: "Competitividad y medioambiente",
        bullets: [
          {
            sector: "",
            text: "Estrategias ambientales que refuercen la competitividad y la rentabilidad del negocio.",
          },
        ],
      },
      {
        icon: "network",
        title: "Gestión de recursos",
        subtitle: "Optimización del consumo",
        bullets: [
          {
            sector: "",
            text: "Optimización del consumo de agua, energía y otros recursos, mejora en la gestión de materiales vinculados a la actividad económica de la comarca.",
          },
        ],
      },
    ],
  },
  methodology: {
    titlePrefix: "Nuestra",
    titleHighlight: "metodología",
    subtitle:
      "Un itinerario híbrido que combina formación, acompañamiento y experiencia práctica, adaptado a tu ritmo para que puedas hacer crecer tu proyecto sin forzar los tiempos.",
    steps: [
      {
        number: "01",
        title: "Tecnología e innovación (50h)",
        description:
          "20 horas presenciales y prácticas + 30 horas de formación asíncrona. Descubre cómo aplicar Inteligencia Artificial, IoT, Big Data y Biotecnología para detectar nuevas oportunidades de negocio en economía circular, energía y sostenibilidad.",
        note: "Incluye una visita técnica sectorial para conocer experiencias reales y casos de éxito.",
        progress: 25,
      },
      {
        number: "02",
        title: "Gestión empresarial (30h)",
        description:
          "Estructura tu propuesta de valor, valida la viabilidad económica de tu proyecto y define una estrategia comercial sólida.",
        note: "La formación es online y culmina con una jornada presencial de trabajo y networking.",
        progress: 50,
      },
      {
        number: "03",
        title: "Mentorías one to one (100h)",
        description:
          "Acompañamiento personalizado con profesionales expertos para avanzar en tu hoja de ruta tecnológica, consolidar tu modelo financiero y explorar oportunidades de financiación y acceso a capital.",
        progress: 75,
      },
      {
        number: "04",
        title: "Demo Day (14 de diciembre de 2026)",
        description:
          "Presenta tu proyecto ante un jurado de personas expertas, potenciales inversores y actores clave del ecosistema empresarial e innovador del Pallars.",
        note: "Tu oportunidad para mostrar resultados, validar tu modelo de negocio y generar nuevas alianzas de crecimiento.",
        progress: 100,
      },
    ],
  },
  pillars: {
    titlePrefix: "¿Por qué",
    titleHighlight: "Circular Impuls?",
    items: [
      {
        heading: "Porque la validación lo es todo.",
        body: "Casi el 90% de los proyectos empresariales no llegan a consolidarse por lanzar productos o servicios sin validar bien las necesidades del mercado. Circular Impuls reduce ese riesgo: creas un piloto real, validas tu propuesta de valor y contrastas tu modelo financiero con expertos antes de invertir en serio.",
      },
      {
        heading: "Porque el mercado lo exige.",
        body: "La transición hacia el autoconsumo, la eficiencia energética y la economía circular ya no es solo una cuestión de sostenibilidad o responsabilidad corporativa. Es una vía para ganar competitividad, reducir costes, abrir nuevas fuentes de valor y adaptarte a un entorno regulatorio cada vez más exigente.",
      },
      {
        heading: "Porque toca pasar de la idea a la acción.",
        body: "Este programa combina formación especializada, mentoría individualizada y validación práctica para que conviertas una oportunidad en un modelo de negocio viable, escalable y arraigado en el Pallars.",
      },
    ],
  },
  impact: {
    label: "",
    title: "Circular Impuls te ofrece:",
    description: "",
    stats: [
      { value: "80", unit: "h", label: "de formación especializada" },
      { value: "100", unit: "h", label: "de mentoría individualizada" },
    ],
    badges: [
      "Visitas técnicas sectoriales",
      "Acceso a expertos y red de agentes del territorio",
      "Presentación final ante inversores y agentes clave",
    ],
  },
  cta: {
    label: "Plazas limitadas",
    titleLine1: "Plazas",
    titleHighlight: "limitadas.",
    description:
      "Empieza el 14 de agosto de 2026 con sesión inaugural presencial de 10 a 12h.",
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      location: "Ubicación",
      hasCompany: "¿Tienes empresa?",
      hasCompanyYes: "Sí",
      hasCompanyNo: "No",
      sector: "Sector",
      consent:
        "Acepto que mis datos se traten para gestionar mi inscripción al programa, de acuerdo con la política de privacidad.",
      submit: "Inscríbete →",
      submitting: "Enviando...",
      success: "Inscripción enviada. Nos pondremos en contacto pronto.",
      error: "No se ha podido enviar. Inténtalo de nuevo más tarde.",
    },
  },
  footer: {
    description:
      "Programa de aceleración de proyectos en energía circular del territorio.",
    linksTitle: "Enlaces",
    contactTitle: "Contacto",
    supportTitle: "Con el apoyo de",
    links: [
      { label: "El programa", href: "#programa" },
      { label: "Metodología", href: "#metodologia" },
      { label: "Ámbitos de trabajo", href: "#ambits" },
      { label: "Pilares", href: "#pilars" },
      { label: "FAQ", href: "#faq" },
    ],
    contact: [
      { label: "info@circularimpuls.cat", href: "mailto:info@circularimpuls.cat" },
      { label: "Inscríbete", href: "#contacte" },
    ],
    sponsors: [
      "logo · Generalitat de Catalunya",
      "logo · Unión Europea · FSE",
      "logo · pimec",
    ],
    copyright: "Circular Impuls. Todos los derechos reservados.",
  },
} satisfies Dictionary;

export default es;
