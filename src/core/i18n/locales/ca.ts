import type { Dictionary } from "@/core/i18n/types";

const ca = {
  meta: {
    title: "Circular Impuls",
    description:
      "Programa d'acceleració de projectes en energia circular del territori.",
  },
  brand: "CIRCULAR IMPULS",
  nav: {
    cta: "Inscriu-t'hi",
  },
  hero: {
    imageAlt: "Persones caminant per la ciutat",
    badge: "Places obertes fins al [data per confirmar]",
    titleLine1: "Innovació per a",
    titleArticle: "la ",
    titleHighlight: "teva empresa",
    titleLine2: "",
    subtitle:
      "Impulsa el teu projecte en energia circular. Valida la teva idea i construeix un model de negoci escalable i arrelat al territori",
    ctaPrimary: "Inscriu-t'hi ara",
    ctaSecondary: "Coneix-ne més",
    fundedBy: "Finançat per:",
    fseLogo: {
      src: "/images/FSE+-ca.jpg",
      alt: "Cofinançat per la Unió Europea",
    },
    generalitatLogoAlt: "Generalitat de Catalunya",
    fundingNote:
      "Finançat pel Departament d'Empresa i Treball de la Generalitat de Catalunya i cofinançat pel Fons Social Europeu Plus",
    programBy: "Programa de:",
    programOrg: "fundació pimec",
    stats: [
      { value: "80h", label: "formació" },
      { value: "100h", label: "mentoria experta" },
      { value: "Pilots", label: "reals" },
      { value: "Inici", label: "(per confirmar)" },
    ],
  },
  about: {
    label: "Què és Circular Impuls?",
    titlePrefix: "Del teu projecte en fase inicial a un",
    titleHighlight: "model de negoci validat.",
    paragraphs: [
      "Iniciativa impulsada per la Generalitat de Catalunya i la Unió Europea, en col·laboració amb Pimec.",
      "Circular Impuls et dóna la formació especialitzada, la mentoria experta i la validació real que necessites per convertir el teu projecte d'autoconsum, comunitat energètica o model circular en un negoci viable.",
      "T'acompanyem perquè aprofitis les oportunitats del territori, superis barreres i construeixis un model de negoci rendible i escalable.",
    ],
    cardTitle: "El teu projecte en marxa",
    cardText:
      "El sol, els recursos locals i la comunitat, convertits en projectes.",
  },
  areas: {
    label: "Àmbits de formació i treball",
    titleLine1: "Tens un projecte en fase inicial?",
    titleLine2: "Tria el teu àmbit.",
    description:
      "El programa s'estructura en tres àmbits temàtics. Cada participant desenvolupa el seu projecte dins d'un d'ells, amb formació i mentoria específiques.",
    items: [
      {
        icon: "sun",
        title: "Autoconsum energètic",
        subtitle: "Solar i altres fonts",
        bullets: [
          {
            sector: "Turisme",
            text: "cobrir la demanda estacional i reduir costos en temporada alta.",
          },
          {
            sector: "Indústria lleugera",
            text: "energia pròpia per als processos productius.",
          },
          {
            sector: "Comerç i serveis",
            text: "menys factura i més resiliència.",
          },
        ],
      },
      {
        icon: "network",
        title: "Comunitats energètiques",
        subtitle: "Gestió col·lectiva local",
        bullets: [
          {
            sector: "Municipis",
            text: "gestió col·lectiva i governança local de l'energia.",
          },
          {
            sector: "Pimes",
            text: "generació i excedents compartits entre socis.",
          },
          {
            sector: "Ciutadania",
            text: "participació, estalvi compartit i acompanyament.",
          },
        ],
      },
      {
        icon: "cycle",
        title: "Models circulars",
        subtitle: "Recursos sense malbarataments",
        bullets: [
          {
            sector: "Indústria lleugera",
            text: "reutilització de recursos i producte com a servei.",
          },
          {
            sector: "Serveis",
            text: "servitització i gestió energètica i recurrent.",
          },
          {
            sector: "Recursos locals",
            text: "aprofitament eficient, sense malbarataments.",
          },
        ],
      },
    ],
  },
  methodology: {
    titlePrefix: "La nostra",
    titleHighlight: "metodologia",
    steps: [
      {
        number: "01",
        title: "Definir",
        description:
          "El teu projecte i el teu model de negoci. Posa les bases amb focus i mètode.",
        progress: 100,
      },
      {
        number: "02",
        title: "Validar",
        description:
          "Que funciona en la realitat, mitjançant pilots reals amb empreses i agents locals.",
        progress: 45,
      },
      {
        number: "03",
        title: "Posar en marxa",
        description:
          "Amb un pla de creixement i escalabilitat clar, a punt per anar més enllà del territori.",
        progress: 20,
      },
    ],
  },
  pillars: {
    titlePrefix: "Pilars del",
    titleHighlight: "Programa",
    items: [
      {
        icon: "clock",
        accent: "purple",
        title: "Mentories personalitzades",
        description: "100 hores de mentories personalitzades i seguiment expert.",
      },
      {
        icon: "graduation",
        accent: "green",
        title: "Formació especialitzada",
        description: "115 hores de formació en tecnologia, innovació i gestió.",
      },
      {
        icon: "flask",
        accent: "purple",
        title: "Validació de MVPs",
        description: "Possibilitat de validació de MVPs en entorns reals i segurs.",
      },
      {
        icon: "handshake",
        accent: "green",
        title: "Connexió amb inversors",
        description: "Connexió amb inversors i actors clau del sector.",
      },
    ],
  },
  impact: {
    label: "Eixos del programa",
    title: "Acompanyament real, en xifres",
    description: "Formació, mentoria i validació en entorns reals.",
    stats: [
      { value: "80", unit: "h", label: "Hores mínimes de formació especialitzada" },
      { value: "100", unit: "h", label: "Hores de mentoria experta i seguiment" },
    ],
    badges: [
      "Pilots reals amb empreses i agents locals",
      "Activitats presencials al territori",
      "Formació presencial + online asíncron",
    ],
  },
  cta: {
    label: "Convocatòria oberta",
    titleLine1: "A punt per impulsar",
    titleHighlight: "el teu projecte?",
    description:
      "Minimitza el risc. Accelera la teva execució. Les places per a l'edició de setembre – desembre 2026 estan estrictament limitades per garantir la màxima qualitat i l'acompanyament personalitzat de cada projecte.",
    button: "Presenta la teva candidatura al Programa PRIMER 2026 →",
  },
  footer: {
    description:
      "Programa d'acceleració de projectes en energia circular del territori.",
    linksTitle: "Enllaços",
    contactTitle: "Contacte",
    supportTitle: "Amb el suport de",
    links: [
      { label: "El programa", href: "#programa" },
      { label: "Metodologia", href: "#metodologia" },
      { label: "Àmbits de treball", href: "#ambits" },
      { label: "Pilars", href: "#pilars" },
      { label: "FAQ", href: "#faq" },
    ],
    contact: [
      { label: "info@circularimpuls.cat", href: "mailto:info@circularimpuls.cat" },
      { label: "Inscriu-t'hi", href: "#contacte" },
    ],
    sponsors: [
      "logo · Generalitat de Catalunya",
      "logo · Unió Europea · FSE",
      "logo · pimec",
    ],
    copyright: "Circular Impuls. Tots els drets reservats.",
  },
} satisfies Dictionary;

export default ca;
