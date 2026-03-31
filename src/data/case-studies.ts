export interface CaseStudy {
  id: string;
  clientName: string;
  ownerName: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  duration: string;
  initials: string;
  accentColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "marcus-plumbing",
    clientName: "Marcus's Plumbing Co.",
    ownerName: "Marcus T.",
    industry: "Plumbing",
    location: "Austin, TX",
    challenge:
      "Marcus was relying entirely on word-of-mouth and had no online presence. Competitors with basic websites were winning jobs he never even knew were available.",
    solution:
      "Sweet Home Services built Marcus a fast, mobile-first website with local SEO targeting Austin plumbing searches and a click-to-call button that worked on every device.",
    results: [
      "Ranked #1 for 'plumber Austin TX' within 90 days",
      "22 new monthly leads from Google search",
      "Site live and indexed in 48 hours",
    ],
    quote:
      "My phone hasn't stopped ringing since the site went live — best decision I've made for my business.",
    duration: "6 months",
    initials: "MT",
    accentColor: "#1A6B6B",
  },
  {
    id: "studio-diane",
    clientName: "Studio Diane",
    ownerName: "Diane R.",
    industry: "Salon",
    location: "Nashville, TN",
    challenge:
      "Diane's salon had loyal regulars but she couldn't attract new clients searching online. Her old website looked outdated and wasn't showing up in local searches.",
    solution:
      "Sweet Home Services refreshed her brand online with a polished, photo-forward website, an optimized Google Business Profile, and a booking link front and center.",
    results: [
      "Google profile views up 3x in the first month",
      "18 new client bookings in the first 6 weeks",
      "Average booking value increased by 24%",
    ],
    quote:
      "I finally have a website I'm proud to share — and new clients are finding me every single week.",
    duration: "4 months",
    initials: "DR",
    accentColor: "#F5A623",
  },
  {
    id: "millbrook-family-dental",
    clientName: "Millbrook Family Dental",
    ownerName: "Greg M.",
    industry: "Dental",
    location: "Columbus, OH",
    challenge:
      "Greg's practice had a dated website that loaded slowly and wasn't optimized for the 'dentist near me' searches his potential patients were using every day.",
    solution:
      "Sweet Home Services rebuilt the site with fast performance, patient-friendly copy, and structured local SEO targeting Columbus neighborhoods where Greg's patients live.",
    results: [
      "Page load time cut from 6.2s to 1.4s",
      "31 new patient inquiries in the first quarter",
      "Top 3 ranking for 'family dentist Columbus OH'",
    ],
    quote:
      "We went from invisible online to booked out three weeks in advance — the new site made all the difference.",
    duration: "5 months",
    initials: "GM",
    accentColor: "#1A6B6B",
  },
];
