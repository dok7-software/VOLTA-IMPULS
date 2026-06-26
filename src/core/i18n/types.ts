export type AreaIcon = "sun" | "network" | "cycle";
export type PillarIcon = "clock" | "graduation" | "flask" | "handshake";
export type PillarAccent = "purple" | "green";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  brand: string;
  nav: {
    cta: string;
  };
  hero: {
    imageAlt: string;
    badge: string;
    titleLine1: string;
    titleArticle: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    fundedBy: string;
    fseLogo: { src: string; alt: string };
    generalitatLogoAlt: string;
    fundingNote: string;
    programBy: string;
    programOrg: string;
    stats: { value: string; label: string }[];
  };
  about: {
    label: string;
    titlePrefix: string;
    titleHighlight: string;
    paragraphs: string[];
    cardTitle: string;
    cardText: string;
  };
  areas: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    items: {
      icon: AreaIcon;
      title: string;
      subtitle: string;
      bullets: { sector: string; text: string }[];
    }[];
  };
  methodology: {
    titlePrefix: string;
    titleHighlight: string;
    steps: {
      number: string;
      title: string;
      description: string;
      progress: number;
    }[];
  };
  pillars: {
    titlePrefix: string;
    titleHighlight: string;
    items: {
      icon: PillarIcon;
      accent: PillarAccent;
      title: string;
      description: string;
    }[];
  };
  impact: {
    label: string;
    title: string;
    description: string;
    stats: { value: string; unit: string; label: string }[];
    badges: string[];
  };
  cta: {
    label: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    button: string;
  };
  footer: {
    description: string;
    linksTitle: string;
    contactTitle: string;
    supportTitle: string;
    links: { label: string; href: string }[];
    contact: { label: string; href: string }[];
    sponsors: string[];
    copyright: string;
  };
};
