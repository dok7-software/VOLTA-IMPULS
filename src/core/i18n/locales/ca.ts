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
    badge: "Places obertes · Inici 14 d'agost de 2026",
    titleLine1: "El teu model empresarial més sostenible:",
    titleArticle: "",
    titleHighlight: "Energia, Recursos i Circularitat",
    titleLine2: "",
    subtitle:
      "Tens una empresa, ets una persona emprenedora o lideres una spin-off amb un model de negoci vinculat al Pallars?",
    subtitleLine2:
      "Aquest programa t'ajuda a fer més sostenible el teu model de negoci incorporant els principis de l'energia circular.",
    ctaPrimary: "Inscriu-t'hi ara",
    ctaSecondary: "Coneix-ne més",
    fundedBy: "Finançat per:",
    fseLogo: {
      src: "/images/logo-union-europea.png",
      alt: "Cofinançat per la Unió Europea",
    },
    generalitatLogo: {
      src: "/images/logo-generalitat.png",
      alt: "Generalitat de Catalunya",
    },
    fundingNote:
      "Finançat pel Departament d'Empresa i Treball de la Generalitat de Catalunya i cofinançat pel Fons Social Europeu Plus",
    programBy: "Programa de:",
    pimecLogo: {
      src: "/images/logo-pimec.png",
      alt: "Fundació pimec",
    },
    stats: [
      { value: "80h", label: "formació" },
      { value: "100h", label: "mentoria experta" },
      { value: "Pilots", label: "reals" },
      { value: "Inici", label: "14 setembre 2026" },
    ],
  },
  about: {
    label: "Què és Circular Impuls?",
    titlePrefix: "",
    titleHighlight: "",
    paragraphs: [
      "CIRCULAR IMPULS és un programa que t'ajuda a incorporar els principis de l'economia circular al teu model de negoci, tant si està en funcionament com si es troba en una fase inicial de desenvolupament.",
      "El programa combina formació especialitzada, mentoria experta i validació en entorns reals per ajudar-te a transformar el teu projecte d'autoconsum, comunitat energètica o model circular en una iniciativa viable, sostenible i amb potencial de creixement.",
      "Aquesta iniciativa està impulsada per la Fundació Pimec, amb la col·laboració del Departament d'Empresa i Treball de la Generalitat de Catalunya, i cofinançada per la Unió Europea.",
      "Tant si formes part d'una empresa consolidada, com si ets una persona emprenedora amb una idea en desenvolupament o lideres una spin-off vinculada al territori, aquest programa és per a tu.",
    ],
    cardTitle: "El teu projecte en marxa",
    cardText:
      "El sol, els recursos locals i la comunitat, convertits en projectes.",
  },
  areas: {
    label: "Destinat a",
    titleLine1: "Empreses, emprenedors",
    titleLine2: "i spin-offs al Pallars.",
    description:
      "Per participar-hi, cal disposar d'una empresa o idea de negoci vinculada al Pallars i treballar en alguna d'aquestes línies estratègiques:",
    items: [
      {
        icon: "cycle",
        title: "Economia circular",
        subtitle: "Reducció i reutilització",
        bullets: [
          {
            sector: "",
            text: "Reducció de residus, reutilització i allargament de la vida útil dels recursos, nous models circulars aplicats a la indústria lleugera, els serveis o els recursos locals.",
          },
        ],
      },
      {
        icon: "sun",
        title: "Energia renovable",
        subtitle: "Autoconsum i comunitats",
        bullets: [
          {
            sector: "",
            text: "Projectes d'autoconsum, comunitats energètiques, solucions energètiques per al turisme, la indústria, el comerç, les pimes, els municipis o la ciutadania.",
          },
        ],
      },
      {
        icon: "leaf",
        title: "Sostenibilitat",
        subtitle: "Competitivitat i medi ambient",
        bullets: [
          {
            sector: "",
            text: "Estratègies ambientals que reforcin la competitivitat i la rendibilitat del negoci.",
          },
        ],
      },
      {
        icon: "network",
        title: "Gestió de recursos",
        subtitle: "Optimització del consum",
        bullets: [
          {
            sector: "",
            text: "Optimització del consum de l'aigua, l'energia i altres recursos, i millora de la gestió de materials vinculats a l'activitat econòmica de la comarca.",
          },
        ],
      },
    ],
  },
  methodology: {
    titlePrefix: "La nostra",
    titleHighlight: "metodologia",
    subtitle:
      "Un itinerari híbrid que combina formació, acompanyament i experiència pràctica, adaptat a les teves necessitats perquè puguis fer créixer el teu projecte al teu ritme.",
    steps: [
      {
        number: "01",
        title: "Tecnologia i innovació (50h)",
        description:
          "Combina 20 hores de sessions presencials pràctiques amb 30 hores de formació asíncrona. Descobreix com aplicar la Intel·ligència Artificial, l'Internet de les Coses (IoT), el Big Data i la Biotecnologia per identificar noves oportunitats de negoci vinculades a l'economia circular, l'energia i la sostenibilitat.",
        note: "Inclou una visita tècnica sectorial per conèixer experiències reals i casos d'èxit.",
        progress: 25,
      },
      {
        number: "02",
        title: "Gestió empresarial (30h)",
        description:
          "Aprèn a estructurar la teva proposta de valor, validar la viabilitat econòmica del projecte i definir una estratègia comercial sòlida.",
        note: "La formació es desenvolupa en format en línia i culmina amb una jornada presencial de treball i networking.",
        progress: 50,
      },
      {
        number: "03",
        title: "Mentories one to one (100h)",
        description:
          "Accedeix a un acompanyament personalitzat amb professionals experts per avançar en el teu full de ruta tecnològic, consolidar el model financer i explorar oportunitats de finançament i accés a capital.",
        progress: 75,
      },
      {
        number: "04",
        title: "Demo Day (14 de desembre de 2026)",
        description:
          "Presenta el teu projecte davant d'un jurat format per persones expertes, potencials inversors i actors clau de l'ecosistema empresarial i d'innovació del Pallars.",
        note: "Una oportunitat per mostrar els resultats del teu treball, validar el model de negoci i generar noves aliances per al seu creixement.",
        progress: 100,
      },
    ],
  },
  pillars: {
    titlePrefix: "Per què",
    titleHighlight: "Circular Impuls?",
    items: [
      {
        heading: "Perquè la validació ho és tot.",
        body: "Molts projectes empresarials, gairebé el 90%, no arriben a consolidar-se perquè desenvolupen productes o serveis sense validar adequadament les necessitats del mercat. Circular Impuls t'ajuda a reduir aquest risc mitjançant la creació d'un pilot real, la validació de la proposta de valor i la contrastació del teu model financer amb persones expertes abans de realitzar inversions significatives.",
      },
      {
        heading: "Perquè el mercat ho exigeix.",
        body: "La transició cap a models basats en l'autoconsum, l'eficiència energètica i l'economia circular ja no és només una qüestió de sostenibilitat o responsabilitat corporativa. És una oportunitat per millorar la competitivitat, reduir costos, generar noves fonts de valor i adaptar-se a un entorn regulatori i econòmic cada vegada més exigent.",
      },
      {
        heading: "Perquè necessites passar de la idea a l'acció.",
        body: "Aquest programa combina formació especialitzada, mentoria individualitzada i validació pràctica perquè puguis convertir una oportunitat en un model de negoci viable, escalable i arrelat al territori del Pallars.",
      },
    ],
  },
  impact: {
    label: "",
    title: "Circular Impuls t'ofereix:",
    description: "",
    stats: [
      { value: "80", unit: "h", label: "de formació especialitzada" },
      { value: "100", unit: "h", label: "de mentoria individualitzada" },
    ],
    badges: [
      "Visites tècniques sectorials",
      "Accés a experts i xarxa d'agents del territori",
      "Presentació final davant inversors i agents clau",
    ],
  },
  cta: {
    label: "Places limitades",
    titleLine1: "Places",
    titleHighlight: "limitades.",
    description:
      "Comença el 14 d'agost de 2026 amb sessió inaugural presencial de 10 a 12h.",
    form: {
      name: "Nom",
      email: "Correu electrònic",
      phone: "Telèfon",
      location: "Ubicació",
      hasCompany: "Tens empresa?",
      hasCompanyYes: "Sí",
      hasCompanyNo: "No",
      sector: "Sector",
      consent:
        "Accepto que les meves dades es tractin per gestionar la meva inscripció al programa, d'acord amb la política de privacitat.",
      submit: "Inscriu-t'hi →",
      submitting: "Enviant...",
      success: "Inscripció enviada. Ens posarem en contacte aviat.",
      error: "No s'ha pogut enviar. Torna-ho a provar més tard.",
    },
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
