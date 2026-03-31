export interface Partner {
  id: string;
  name: string;
  abbrev: string;
  url: string;
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
    },
    {
      id: "google-business-profile",
      name: "Google Business Profile",
      abbrev: "GBP",
      url: "https://business.google.com",
    },
    {
      id: "semrush",
      name: "Semrush",
      abbrev: "SEMrush",
      url: "https://www.semrush.com",
    },
    {
      id: "stripe",
      name: "Stripe",
      abbrev: "Stripe",
      url: "https://stripe.com",
    },
    {
      id: "vercel",
      name: "Vercel",
      abbrev: "Vercel",
      url: "https://vercel.com",
    },
    {
      id: "cloudflare",
      name: "Cloudflare",
      abbrev: "CF",
      url: "https://www.cloudflare.com",
    },
  ],
};
