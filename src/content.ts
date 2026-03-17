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
    description: "2x Founder | MLH Top 50 | GCP Professional Cloud Architect",
    author: "Rishab Nayak",
    email: "rishab@rishabnayak.com",
    url: "https://rishabnayak.com",
    analyticsId: "G-PB3MH3Z2Q3",
    resumePath: "/assets/files/RNayak_Resume.pdf",
  },
  profile: {
    name: "Rishab Nayak",
    tagline: "2x Founder | MLH Top 50 | GCP Professional Cloud Architect",
    portrait: "/assets/images/profilePhoto.jpeg",
    bio: [
      [
        { text: "As a ", tone: "base" },
        { text: "seasoned founder ", tone: "highlight" },
        { text: "and ", tone: "base" },
        { text: "engineer, ", tone: "highlight" },
        { text: "I bring a track record of ", tone: "base" },
        { text: "driving innovation and efficiency ", tone: "highlight" },
        { text: "across multiple tech ventures. With a ", tone: "base" },
        { text: "Master of Science ", tone: "highlight" },
        { text: "in ", tone: "base" },
        { text: "Computer Science ", tone: "highlight" },
        { text: "from ", tone: "base" },
        { text: "Boston University ", tone: "highlight" },
        { text: "and expertise in domains spanning ", tone: "base" },
        { text: "Embedded Linux Devices, AI, ", tone: "highlight" },
        { text: "and ", tone: "base" },
        { text: "Cloud Computing. ", tone: "highlight" },
        { text: "I have ", tone: "base" },
        { text: "co-founded ", tone: "highlight" },
        { text: "successful startups including ", tone: "base" },
        {
          text: "Mount",
          tone: "link",
          href: "https://rentmount.com",
        },
        { text: " and ", tone: "base" },
        { text: "Joyn", tone: "link" },
        { text: ", raising a total of ", tone: "base" },
        { text: "over $3M in funding.", tone: "highlight" },
      ],
      [
        { text: "I'm passionate about ", tone: "base" },
        {
          text: "solving complex problems, leading high-performing teams, ",
          tone: "highlight",
        },
        { text: "and continuously ", tone: "base" },
        {
          text: "pushing the boundaries of technology.",
          tone: "highlight",
        },
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
