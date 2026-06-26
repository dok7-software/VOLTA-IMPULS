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
    badge: "Plazas abiertas hasta el [fecha por confirmar]",
    titleLine1: "Innovación para",
    titleArticle: "tu ",
    titleHighlight: "empresa",
    titleLine2: "",
    subtitle:
      "Impulsa tu proyecto en energía circular. Valida tu idea y construye un modelo de negocio escalable y arraigado al territorio",
    ctaPrimary: "Presenta tu candidatura al Programa PRIMER 2026",
    ctaSecondary: "Conoce más",
    fundedBy: "Financiado por:",
    fseLogo: {
      src: "/images/FSE+-es.png",
      alt: "Financiado por la Unión Europea",
    },
    generalitatLogoAlt: "Generalitat de Catalunya",
    fundingNote:
      "Financiado por el Departamento de Empresa y Trabajo de la Generalitat de Catalunya y cofinanciado por el Fondo Social Europeo Plus",
    programBy: "Programa de:",
    programOrg: "fundación pimec",
    stats: [
      { value: "80h", label: "formación" },
      { value: "100h", label: "mentoría experta" },
      { value: "Pilotos", label: "reales" },
      { value: "Inicio", label: "(por confirmar)" },
    ],
  },
  about: {
    label: "¿Qué es Circular Impuls?",
    titlePrefix: "De tu proyecto en fase inicial a un",
    titleHighlight: "modelo de negocio validado.",
    paragraphs: [
      "Iniciativa impulsada por la Generalitat de Catalunya y la Unión Europea, en colaboración con Pimec.",
      "Circular Impuls te ofrece la formación especializada, la mentoría experta y la validación real que necesitas para convertir tu proyecto de autoconsumo, comunidad energética o modelo circular en un negocio viable.",
      "Te acompañamos para que aproveches las oportunidades del territorio, superes barreras y construyas un modelo de negocio rentable y escalable.",
    ],
    cardTitle: "Tu proyecto en marcha",
    cardText:
      "El sol, los recursos locales y la comunidad, convertidos en proyectos.",
  },
  areas: {
    label: "Ámbitos de formación y trabajo",
    titleLine1: "¿Tienes un proyecto en fase inicial?",
    titleLine2: "Elige tu ámbito.",
    description:
      "El programa se estructura en tres ámbitos temáticos. Cada participante desarrolla su proyecto dentro de uno de ellos, con formación y mentoría específicas.",
    items: [
      {
        icon: "sun",
        title: "Autoconsumo energético",
        subtitle: "Solar y otras fuentes",
        bullets: [
          {
            sector: "Turismo",
            text: "cubrir la demanda estacional y reducir costes en temporada alta.",
          },
          {
            sector: "Industria ligera",
            text: "energía propia para los procesos productivos.",
          },
          {
            sector: "Comercio y servicios",
            text: "menos factura y más resiliencia.",
          },
        ],
      },
      {
        icon: "network",
        title: "Comunidades energéticas",
        subtitle: "Gestión colectiva local",
        bullets: [
          {
            sector: "Municipios",
            text: "gestión colectiva y gobernanza local de la energía.",
          },
          {
            sector: "Pymes",
            text: "generación y excedentes compartidos entre socios.",
          },
          {
            sector: "Ciudadanía",
            text: "participación, ahorro compartido y acompañamiento.",
          },
        ],
      },
      {
        icon: "cycle",
        title: "Modelos circulares",
        subtitle: "Recursos sin desperdicios",
        bullets: [
          {
            sector: "Industria ligera",
            text: "reutilización de recursos y producto como servicio.",
          },
          {
            sector: "Servicios",
            text: "servitización y gestión energética y recurrente.",
          },
          {
            sector: "Recursos locales",
            text: "aprovechamiento eficiente, sin desperdicios.",
          },
        ],
      },
    ],
  },
  methodology: {
    titlePrefix: "Nuestra",
    titleHighlight: "metodología",
    steps: [
      {
        number: "01",
        title: "Definir",
        description:
          "Tu proyecto y tu modelo de negocio. Pon las bases con foco y método.",
        progress: 100,
      },
      {
        number: "02",
        title: "Validar",
        description:
          "Que funciona en la realidad, mediante pilotos reales con empresas y agentes locales.",
        progress: 45,
      },
      {
        number: "03",
        title: "Poner en marcha",
        description:
          "Con un plan de crecimiento y escalabilidad claro, listo para ir más allá del territorio.",
        progress: 20,
      },
    ],
  },
  pillars: {
    titlePrefix: "Pilares del",
    titleHighlight: "Programa",
    items: [
      {
        icon: "clock",
        accent: "purple",
        title: "Mentorías personalizadas",
        description: "100 horas de mentorías personalizadas y seguimiento experto.",
      },
      {
        icon: "graduation",
        accent: "green",
        title: "Formación especializada",
        description: "115 horas de formación en tecnología, innovación y gestión.",
      },
      {
        icon: "flask",
        accent: "purple",
        title: "Validación de MVPs",
        description: "Posibilidad de validación de MVPs en entornos reales y seguros.",
      },
      {
        icon: "handshake",
        accent: "green",
        title: "Conexión con inversores",
        description: "Conexión con inversores y actores clave del sector.",
      },
    ],
  },
  impact: {
    label: "Ejes del programa",
    title: "Acompañamiento real, en cifras",
    description: "Formación, mentoría y validación en entornos reales.",
    stats: [
      { value: "80", unit: "h", label: "Horas mínimas de formación especializada" },
      { value: "100", unit: "h", label: "Horas de mentoría experta y seguimiento" },
    ],
    badges: [
      "Pilotos reales con empresas y agentes locales",
      "Actividades presenciales en el territorio",
      "Formación presencial + online asíncrona",
    ],
  },
  cta: {
    label: "Convocatoria abierta",
    titleLine1: "¿Listo para impulsar",
    titleHighlight: "tu proyecto?",
    description:
      "Minimiza el riesgo. Acelera tu ejecución. Las plazas para la edición de septiembre – diciembre 2026 están estrictamente limitadas para garantizar la máxima calidad y el acompañamiento personalizado de cada proyecto.",
    button: "Presenta tu candidatura al Programa PRIMER 2026 →",
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
