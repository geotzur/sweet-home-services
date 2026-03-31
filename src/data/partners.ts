export interface Partner {
  id: string;
  name: string;
  abbrev: string;
  url: string;
  /** Path under /public for partner mark (PNG/SVG). */
  logoSrc?: string;
}

export interface PartnersSection {
  overline: string;
  headline: string;
  subheadline: string;
  partners: Partner[];
}

export const partnersSection: PartnersSection = {
  overline: "Trusted Tech Stack",
  headline: "We build on tools you can count on.",
  subheadline:
    "Every Sweet Home Services website runs on industry-leading platforms so your site is fast, secure, and easy to manage for years to come.",
  partners: [
    {
      id: "google-analytics",
      name: "Google Analytics",
      abbrev: "GA4",
      url: "https://analytics.google.com",
      logoSrc: "/assets/logo-google-transparent.png",
    },
    {
      id: "google-business-profile",
      name: "Google Business Profile",
      abbrev: "GBP",
      url: "https://business.google.com",
      logoSrc: "/assets/logo-google-transparent.png",
    },
    {
      id: "semrush",
      name: "Semrush",
      abbrev: "SEMrush",
      url: "https://www.semrush.com",
      logoSrc: "/assets/logo-semrush-transparent.png",
    },
    {
      id: "stripe",
      name: "Stripe",
      abbrev: "Stripe",
      url: "https://stripe.com",
      logoSrc: "/assets/logo-stripe-transparent.png",
    },
    {
      id: "vercel",
      name: "Vercel",
      abbrev: "Vercel",
      url: "https://vercel.com",
      logoSrc: "/assets/logo-vercel-transparent.png",
    },
    {
      id: "cloudflare",
      name: "Cloudflare",
      abbrev: "CF",
      url: "https://www.cloudflare.com",
      logoSrc: "/assets/logo-cloudflare-transparent.png",
    },
  ],
};
