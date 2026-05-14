export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  label: string;
};

export const siteConfig = {
  name: "Kareem Salah",
  title: "Software Engineer",
  siteUrl: "https://kareemo.dev",
  description:
    "Personal website of Kareem Salah, a software engineer who enjoys solving problems across frontend, backend, product, and creative work.",
  ogImage: "/images/placeholders/picture-bike.jpeg",
  locale: "en_US",
  email: "hello@kareemo.dev",
  // TODO: Replace placeholder links with your real profiles and upload a real PDF to /public/resume.pdf.
  resumeHref: "/resume.pdf",
  navItems: [
    // { href: "/", label: "Home" },
    // { href: "/work", label: "Work" },
    // { href: "/projects", label: "Projects" },
    // { href: "/about", label: "About" },
    // { href: "/now", label: "Now" },
    // { href: "/contact", label: "Contact" },
  ] satisfies NavItem[],
  socialLinks: [
    { href: "https://github.com/kareemsalah227", label: "GitHub" },
    { href: "https://www.linkedin.com/in/kareem-salah-816379b1/", label: "LinkedIn" },
    { href: "https://www.youtube.com/channel/UCTMl5K6u7WSKmIsozUoGwPw/", label: "YouTube" },
  ] satisfies SocialLink[],
};

export const quickFacts = [
  "Warm, low-ego collaboration",
  "Frontend-heavy recent work",
  "Broad software engineering positioning",
];

export const workStyleChips = [
  "Low-ego collaboration",
  "Kindness",
  "Clear communication",
  "Trust",
  "Autonomy",
  "Simplicity",
  "Quality",
  "Sustainable pace",
];

export const beyondCodeCards = [
  {
    title: "Making",
    description: "Cooking, pizza-making, and building a cooking YouTube channel.",
  },
  {
    title: "Moving",
    description: "Hiking, cycling, exercise, and long walks that clear my head.",
  },
  {
    title: "Noticing",
    description: "Photography, discovering new places, and collecting good music.",
  },
  {
    title: "Playing & wondering",
    description: "Science, maths, PlayStation, PC games, and following curiosity.",
  },
];

export const nowCards = [
  {
    title: "Building",
    description: "This personal website and small improvements to the German Time Tracker.",
  },
  {
    title: "Learning",
    description: "Frontend architecture, German, and better pizza dough fermentation.",
  },
  {
    title: "Enjoying",
    description: "Long walks, good music, and a healthy mix of PlayStation and PC games.",
  },
];
