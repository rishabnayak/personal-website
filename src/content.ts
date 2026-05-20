import type { SiteContent } from "./content";

export type BioFragment = {
  text: string;
  tone?: "base" | "highlight" | "link";
  href?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
  iconSize?: number;
};

export type SiteContent = {
  seo: {
    title: string;
    description: string;
    author: string;
    email: string;
    url: string;
    analyticsId: string;
    resumePath: string;
  };
  profile: {
    name: string;
    tagline: string;
    portrait: string;
    bio: BioFragment[][];
  };
  socials: SocialLink[];
};

export const siteContent: SiteContent = {
  seo: {
    title: "Rishab Nayak",
    description:
      "Hacking on tools to make every marketing hit repeatable. Previously cofounded Mount ($3M+ raised, GC-led) and Joyn. Shipped agentic infrastructure at OXOS Medical. MS CS, Boston University.",
    author: "Rishab Nayak",
    email: "rishab@rishabnayak.com",
    url: "https://rishabnayak.com",
    analyticsId: "G-PB3MH3Z2Q3",
    resumePath: "/assets/files/RNayak_Resume.pdf",
  },
  profile: {
    name: "Rishab Nayak",
    tagline: "Hacking on tools to make every marketing hit repeatable",
    portrait: "/assets/images/profilePhoto.jpeg",
    bio: [
      [
        { text: "Hacking on AI tools ", tone: "highlight" },
        { text: "to make ", tone: "base" },
        { text: "marketing hits repeatable.", tone: "highlight" },
      ],
      [
        { text: "Previously ", tone: "base" },
        { text: "cofounded ", tone: "highlight" },
        {
          text: "Mount",
          tone: "link",
          href: "https://rentmount.com",
        },
        { text: " — peer-to-peer rental marketplace; ", tone: "base" },
        { text: "$3.5M raised ", tone: "highlight" },
        { text: "with ", tone: "base" },
        { text: "Tribeca + General Catalyst", tone: "highlight" },
        { text: "; ", tone: "base" },
        { text: "PhocusWire Top 25 '23", tone: "highlight" },
        { text: ". Cofounded ", tone: "base" },
        { text: "Joyn", tone: "link" },
        { text: " — AI-powered communication used by execs to ", tone: "base" },
        { text: "close an Asia↔US SPAC deal", tone: "highlight" },
        { text: ".", tone: "base" },
      ],
      [
        { text: "MS CS, Boston University", tone: "highlight" },
        { text: ". ", tone: "base" },
      ],
    ],
  },
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/rishabnayak",
      icon: "/assets/images/github.png",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/rishabnayak",
      icon: "/assets/images/linkedin.png",
    },
    {
      label: "Email",
      href: "mailto:rishab@rishabnayak.com",
      icon: "/assets/images/email.png",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/nayakrishab",
      icon: "/assets/images/instagram.png",
    },
    {
      label: "X",
      href: "https://x.com/rishabnayak",
      icon: "/assets/images/x.png",
      iconSize: 20,
    },
  ],
};
