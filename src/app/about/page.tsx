import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Sweet Home Services",
  description:
    "Sweet Home Services helps local businesses get found online with AI-powered websites and SEO. Learn about our mission, values, and what makes us different from traditional agencies.",
  openGraph: {
    title: "About — Sweet Home Services",
    description:
      "We help local businesses get found online with AI-powered websites and SEO. Learn our story.",
    type: "website",
  },
};

/* ─── Data ────────────────────────────────────────────────────────── */

const valueProps = [
  {
    title: "AI-Powered Speed",
    description:
      "Our proprietary AI builds your site in hours, not months. You get a professional, conversion-optimized website without the agency timeline or price tag.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Local Expertise",
    description:
      "We specialize in local SEO. From Google Business Profile optimization to neighborhood-level keyword targeting, we know how to put you on the map.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise invoices. Pick a plan, know exactly what you pay, and cancel anytime. We earn your business every month.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    description:
      "Your site is never set-and-forget. We monitor performance, update content, and continuously optimize so you keep climbing the rankings.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Local businesses served" },
  { value: "48 hrs", label: "Average site launch time" },
  { value: "3.2x", label: "Average traffic increase" },
  { value: "98%", label: "Client satisfaction rate" },
];

const comparisonRows = [
  {
    feature: "Timeline to launch",
    traditional: "6 - 12 weeks",
    sweetHome: "48 hours",
  },
  {
    feature: "Upfront cost",
    traditional: "$3,000 - $15,000",
    sweetHome: "$0",
  },
  {
    feature: "Monthly SEO included",
    traditional: "Extra $500 - $2,000/mo",
    sweetHome: "Built in to every plan",
  },
  {
    feature: "Content updates",
    traditional: "Billed per change",
    sweetHome: "Included & ongoing",
  },
  {
    feature: "Local SEO focus",
    traditional: "Generic approach",
    sweetHome: "Hyper-local targeting",
  },
  {
    feature: "Contract lock-in",
    traditional: "12 - 24 months",
    sweetHome: "Cancel anytime",
  },
];

/* ─── Page Component ──────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="pt-16 pb-12">
        {/* ────────────────── HERO ────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(170deg, #E6F3F3 0%, #FFFFFF 60%)" }}
          aria-labelledby="about-hero-heading"
        >
          {/* Decorative blobs */}
          <svg
            className="absolute -top-32 -right-32 opacity-20 pointer-events-none"
            width="480"
            height="480"
            viewBox="0 0 480 480"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="240" cy="240" r="240" fill="#1A6B6B" />
          </svg>
          <svg
            className="absolute -bottom-24 -left-24 opacity-10 pointer-events-none"
            width="360"
            height="360"
            viewBox="0 0 360 360"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="180" cy="180" r="180" fill="#F5A623" />
          </svg>

          {/* Grid dots pattern */}
          <svg
            className="absolute top-16 left-8 opacity-[0.06] pointer-events-none"
            width="200"
            height="200"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="about-dots"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="2" fill="#1A6B6B" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#about-dots)" />
          </svg>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
            <div className="max-w-3xl">
              <p className="section-overline mb-4">About Sweet Home Services</p>
              <h1
                id="about-hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
              >
                We help local businesses{" "}
                <span style={{ color: "#1A6B6B" }}>get found</span> online
              </h1>
              <p
                className="mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl"
                style={{ fontFamily: "var(--font-sans)", color: "#6B7280" }}
              >
                Most small businesses don&apos;t need a flashy website — they need
                customers walking through the door. We combine AI-powered web
                design with hyper-local SEO so your neighbors can actually find
                you when they search.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold text-white shadow-brand transition-colors duration-150 hover:opacity-90 w-full sm:w-auto"
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "#1A6B6B",
                  }}
                >
                  View Our Plans
                  <svg
                    className="ml-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors duration-150 border w-full sm:w-auto"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#1A6B6B",
                    borderColor: "#1A6B6B",
                  }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────── MISSION ────────────────── */}
        <section
          className="py-20 sm:py-28"
          style={{ backgroundColor: "#F9FAFB" }}
          aria-labelledby="mission-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Mission image */}
              <div className="relative" aria-hidden="true">
                <div
                  className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden relative"
                  style={{ backgroundColor: "#E6F3F3" }}
                >
                  <Image
                    src="/images/about-mission.jpg"
                    alt="Small business owner standing proudly in front of their shop"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating accent shape */}
                <svg
                  className="absolute -bottom-4 -right-4 opacity-20 pointer-events-none"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect width="100" height="100" rx="20" fill="#F5A623" />
                </svg>
              </div>

              {/* Text content */}
              <div>
                <p className="section-overline mb-3">Our Mission</p>
                <h2
                  id="mission-heading"
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                >
                  Every local business deserves to be found
                </h2>
                <div
                  className="mt-6 space-y-4 text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)", color: "#6B7280" }}
                >
                  <p>
                    We started Sweet Home Services because we saw the same story
                    playing out in towns everywhere: talented plumbers, beloved
                    bakeries, and trusted dentists were invisible online -- losing
                    customers to competitors with bigger budgets and slicker
                    websites.
                  </p>
                  <p>
                    Traditional agencies charge thousands upfront and take months
                    to deliver. By the time the site is live, the business has
                    already missed a season of potential customers. We knew there
                    had to be a better way.
                  </p>
                  <p>
                    So we built one. By combining AI with deep local-SEO
                    expertise, we launch beautiful, high-performing sites in 48
                    hours -- at a price any small business can afford. No
                    contracts, no hidden fees, no jargon. Just more customers
                    finding your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────── STATS ────────────────── */}
        <section
          className="relative overflow-hidden py-16 sm:py-20"
          style={{ backgroundColor: "#1A6B6B" }}
          aria-label="Key statistics"
        >
          {/* Decorative angled lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="stats-lines"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(30)"
              >
                <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stats-lines)" />
          </svg>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-4xl sm:text-5xl font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "#F5A623" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-2 text-sm sm:text-base"
                    style={{ fontFamily: "var(--font-sans)", color: "#C0E1E1" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────── WHY SWEET HOME SERVICES ────────────────── */}
        <section
          className="py-20 sm:py-28"
          aria-labelledby="values-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="section-overline mb-3">Why Sweet Home Services</p>
              <h2
                id="values-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
              >
                Built for businesses like yours
              </h2>
              <p
                className="mt-4 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", color: "#6B7280" }}
              >
                We&apos;re not a generic website builder. Everything we do is designed
                to help local service businesses attract more customers from their
                own community.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
              {valueProps.map((prop) => (
                <article
                  key={prop.title}
                  className="brand-glow group relative rounded-2xl border p-8 transition-shadow duration-200 hover:shadow-lg"
                  style={{ borderColor: "#E6F3F3", backgroundColor: "#FFFFFF" }}
                >
                  {/* Accent corner */}
                  <svg
                    className="absolute top-0 right-0 opacity-[0.08] pointer-events-none"
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="120" cy="0" r="120" fill="#1A6B6B" />
                  </svg>

                  <div
                    className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl"
                    style={{ backgroundColor: "#E6F3F3", color: "#1A6B6B" }}
                  >
                    {prop.icon}
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                  >
                    {prop.title}
                  </h3>
                  <p
                    className="mt-2 leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)", color: "#6B7280" }}
                  >
                    {prop.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────── HOW WE'RE DIFFERENT ────────────────── */}
        <section
          className="py-20 sm:py-28"
          style={{ backgroundColor: "#F9FAFB" }}
          aria-labelledby="comparison-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="section-overline mb-3">How We&apos;re Different</p>
              <h2
                id="comparison-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
              >
                Traditional agencies vs. Sweet Home Services
              </h2>
              <p
                className="mt-4 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", color: "#6B7280" }}
              >
                We rethought the entire model so you get better results at a
                fraction of the cost -- and without the headaches.
              </p>
            </div>

            {/* Comparison table */}
            <div className="overflow-hidden rounded-2xl border shadow-sm -mx-4 sm:mx-0" style={{ borderColor: "#E5E7EB" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[540px]" role="table">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-semibold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "#6B7280",
                          backgroundColor: "#F9FAFB",
                        }}
                      >
                        Feature
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-semibold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "#6B7280",
                          backgroundColor: "#F9FAFB",
                        }}
                      >
                        Traditional Agency
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-semibold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "#FFFFFF",
                          backgroundColor: "#1A6B6B",
                        }}
                      >
                        Sweet Home Services
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr
                        key={row.feature}
                        style={{
                          backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F9FAFB",
                        }}
                      >
                        <td
                          className="px-6 py-4 text-sm font-medium"
                          style={{ fontFamily: "var(--font-sans)", color: "#1F2937" }}
                        >
                          {row.feature}
                        </td>
                        <td
                          className="px-6 py-4 text-sm"
                          style={{ fontFamily: "var(--font-sans)", color: "#6B7280" }}
                        >
                          {row.traditional}
                        </td>
                        <td
                          className="px-6 py-4 text-sm font-semibold"
                          style={{ fontFamily: "var(--font-sans)", color: "#1A6B6B" }}
                        >
                          <span className="inline-flex items-center gap-1.5">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 8.5L6.5 12L13 4"
                                stroke="#1A6B6B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            {row.sweetHome}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────── OUR VALUES ────────────────── */}
        <section
          className="relative py-20 sm:py-28 overflow-hidden"
          aria-labelledby="principles-heading"
        >
          {/* Decorative diagonal stripe */}
          <svg
            className="absolute top-0 right-0 opacity-[0.04] pointer-events-none"
            width="600"
            height="600"
            viewBox="0 0 600 600"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="200"
              y="-100"
              width="200"
              height="800"
              rx="20"
              transform="rotate(25 300 300)"
              fill="#1A6B6B"
            />
          </svg>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="section-overline mb-3">What Guides Us</p>
              <h2
                id="principles-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
              >
                Principles we build on
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Simplicity First",
                  body: "Small business owners are busy. We keep everything dead simple -- from onboarding to billing to your dashboard.",
                  accent: "#1A6B6B",
                },
                {
                  title: "Results Over Vanity",
                  body: "We don't chase design awards. We chase phone calls, form fills, and foot traffic. Every decision is measured by ROI.",
                  accent: "#F5A623",
                },
                {
                  title: "Community Roots",
                  body: "We believe strong local businesses make strong communities. Your success is our success -- and your town's success.",
                  accent: "#1A6B6B",
                },
              ].map((principle) => (
                <article key={principle.title} className="text-center px-4">
                  <div
                    className="mx-auto mb-5 w-14 h-1 rounded-full"
                    style={{ backgroundColor: principle.accent }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                  >
                    {principle.title}
                  </h3>
                  <p
                    className="mt-2 leading-relaxed"
                    style={{ fontFamily: "var(--font-sans)", color: "#6B7280" }}
                  >
                    {principle.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────── CTA ────────────────── */}
        <section
          className="brand-grid relative overflow-hidden py-20 sm:py-28"
          style={{
            background: "linear-gradient(135deg, #1A6B6B 0%, #104040 100%)",
          }}
          aria-labelledby="cta-heading"
        >
          {/* Decorative circles */}
          <svg
            className="absolute -top-20 -left-20 opacity-10 pointer-events-none"
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="150" cy="150" r="150" fill="#F5A623" />
          </svg>
          <svg
            className="absolute -bottom-16 -right-16 opacity-10 pointer-events-none"
            width="250"
            height="250"
            viewBox="0 0 250 250"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="125" cy="125" r="125" fill="white" />
          </svg>

          {/* Grid dot pattern */}
          <svg
            className="absolute bottom-8 left-8 opacity-[0.06] pointer-events-none"
            width="160"
            height="160"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="cta-dots"
                x="0"
                y="0"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="160" height="160" fill="url(#cta-dots)" />
          </svg>

          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to put your business on the map?
            </h2>
            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-sans)", color: "#C0E1E1" }}
            >
              Join 500+ local businesses who stopped being invisible online.
              Get a professional website with built-in SEO -- launched in 48
              hours, not 48 days.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm font-semibold shadow-lg transition-colors duration-150 hover:opacity-90 w-full sm:w-auto"
                style={{
                  fontFamily: "var(--font-heading)",
                  backgroundColor: "#F5A623",
                  color: "#1F2937",
                }}
              >
                Get Started Free
                <svg
                  className="ml-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm font-semibold transition-colors duration-150 border w-full sm:w-auto"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#FFFFFF",
                  borderColor: "rgba(255,255,255,0.3)",
                }}
              >
                Talk to Us First
              </Link>
            </div>
            <p
              className="mt-6 text-sm"
              style={{ fontFamily: "var(--font-sans)", color: "#97CDCD" }}
            >
              No credit card required. No contracts. Cancel anytime.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
