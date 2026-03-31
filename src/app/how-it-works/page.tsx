import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works — Sweet Home Services",
  description:
    "See how Sweet Home Services builds and optimizes your local business website in 48 hours. Simple 3-step process from discovery call to live site.",
  openGraph: {
    title: "How It Works — Sweet Home Services",
    description:
      "From discovery call to Google rankings in 3 simple steps. Your site live in 48 hours.",
  },
};

/* ─── Step Data ──────────────────────────────────────────────────── */

const steps = [
  {
    number: 1,
    title: "Tell Us About Your Business",
    subtitle: "Discovery call — just 15 minutes",
    description:
      "We hop on a quick call to learn about your business, your customers, and what makes you different. No tech jargon, no homework — just a friendly conversation so we can build something that actually sounds like you.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        {/* Phone/chat bubble */}
        <rect x="16" y="12" width="32" height="40" rx="4" fill="#E6F3F3" />
        <rect x="20" y="20" width="24" height="4" rx="2" fill="#97CDCD" />
        <rect x="20" y="28" width="18" height="4" rx="2" fill="#97CDCD" />
        <rect x="20" y="36" width="14" height="4" rx="2" fill="#97CDCD" />
        {/* Person silhouette */}
        <circle cx="48" cy="18" r="6" fill="#1A6B6B" />
        <path
          d="M42 30C42 26.6863 44.6863 24 48 24C51.3137 24 54 26.6863 54 30V32H42V30Z"
          fill="#1A6B6B"
        />
        {/* Speech lines */}
        <path
          d="M12 22L8 20"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 28L6 28"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 34L8 36"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "We Build Your Website + SEO",
    subtitle: "Launched in 48 hours",
    description:
      "Our team designs a fast, mobile-first website tailored to your industry — then wires it for local SEO from day one. Google Business Profile, keywords, meta tags, schema markup, the works. You review, we revise, and you're live.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        {/* Browser window */}
        <rect x="8" y="10" width="48" height="36" rx="4" fill="#E6F3F3" />
        <rect x="8" y="10" width="48" height="10" rx="4" fill="#1A6B6B" />
        <circle cx="16" cy="15" r="2" fill="#F87171" />
        <circle cx="22" cy="15" r="2" fill="#FBBF24" />
        <circle cx="28" cy="15" r="2" fill="#34D399" />
        {/* Code lines */}
        <rect x="14" y="26" width="20" height="3" rx="1.5" fill="#97CDCD" />
        <rect x="14" y="32" width="14" height="3" rx="1.5" fill="#97CDCD" />
        <rect x="14" y="38" width="18" height="3" rx="1.5" fill="#97CDCD" />
        {/* Rocket */}
        <path
          d="M46 52L50 44L54 52H46Z"
          fill="#F5A623"
        />
        <circle cx="50" cy="42" r="4" fill="#F5A623" />
        <path
          d="M50 38V30"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Speed lines */}
        <path d="M44 48L40 50" stroke="#1A6B6B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M56 48L60 50" stroke="#1A6B6B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Watch Your Business Grow",
    subtitle: "Monthly reports + ongoing optimization",
    description:
      "Every month we send you a clear report showing your rankings, traffic, and leads. We keep optimizing your SEO, updating your content, and making sure you stay ahead of competitors — so you can focus on running your business.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        {/* Chart background */}
        <rect x="8" y="12" width="48" height="40" rx="4" fill="#E6F3F3" />
        {/* Grid lines */}
        <path d="M14 44H50" stroke="#C0E1E1" strokeWidth="1" />
        <path d="M14 36H50" stroke="#C0E1E1" strokeWidth="1" />
        <path d="M14 28H50" stroke="#C0E1E1" strokeWidth="1" />
        {/* Growth line */}
        <path
          d="M14 42L24 34L34 36L44 24L50 18"
          stroke="#1A6B6B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Area under line */}
        <path
          d="M14 42L24 34L34 36L44 24L50 18V44H14V42Z"
          fill="#1A6B6B"
          opacity="0.1"
        />
        {/* Data points */}
        <circle cx="24" cy="34" r="3" fill="#1A6B6B" />
        <circle cx="34" cy="36" r="3" fill="#1A6B6B" />
        <circle cx="44" cy="24" r="3" fill="#1A6B6B" />
        {/* Star / success indicator */}
        <circle cx="50" cy="18" r="4" fill="#F5A623" />
        <path
          d="M50 15L50.9 17.1L53.2 17.4L51.6 18.9L52 21.2L50 20.1L48 21.2L48.4 18.9L46.8 17.4L49.1 17.1L50 15Z"
          fill="white"
        />
      </svg>
    ),
  },
];

/* ─── Deliverables Checklist ─────────────────────────────────────── */

const deliverables = [
  {
    category: "Website",
    items: [
      "Custom-designed, mobile-first website",
      "Up to 7 pages (Home, About, Services, Contact, etc.)",
      "Lightning-fast load times (Core Web Vitals optimized)",
      "SSL certificate and security hardening",
      "Contact forms and click-to-call buttons",
    ],
  },
  {
    category: "SEO",
    items: [
      "Google Business Profile setup and optimization",
      "Local keyword research and targeting",
      "On-page SEO (meta tags, headings, schema markup)",
      "Google Analytics and Search Console setup",
      "Monthly SEO performance report",
    ],
  },
  {
    category: "Ongoing Support",
    items: [
      "Dedicated account manager",
      "Unlimited content updates",
      "Monthly ranking and traffic reports",
      "Competitor monitoring",
      "99.9% uptime guarantee",
    ],
  },
];

/* ─── Page Component ─────────────────────────────────────────────── */

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* ── Hero Section ───────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-20 sm:py-28"
          aria-labelledby="hiw-hero-heading"
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% -10%, #C0E1E1 0%, transparent 70%)",
            }}
          />

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="section-overline mb-4">The Process</p>

            <h1
              id="hiw-hero-heading"
              className="text-neutral-900 leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.25rem, 5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
              }}
            >
              From Phone Call to{" "}
              <span
                className="relative inline-block"
                style={{ color: "#1A6B6B" }}
              >
                Google Rankings
                <span
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
                  style={{ background: "#F5A623", bottom: "-4px" }}
                  aria-hidden="true"
                />
              </span>
              <br />
              in Three Simple Steps
            </h1>

            <p
              className="mt-6 text-neutral-600 leading-relaxed mx-auto"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                maxWidth: "560px",
              }}
            >
              No tech skills needed. No confusing dashboards. We do the heavy
              lifting so you can focus on what you do best — running your
              business.
            </p>
          </div>
        </section>

        {/* ── 3-Step Process Section ─────────────────────────────── */}
        <section
          className="py-20 sm:py-24"
          style={{ background: "#F9FAFB" }}
          aria-labelledby="steps-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="steps-heading" className="sr-only">
              Our three-step process
            </h2>

            {/* Steps container with timeline */}
            <div className="relative">
              {/* ─ Desktop horizontal timeline line ─ */}
              <div
                className="hidden lg:block absolute top-[72px] left-[16.67%] right-[16.67%] h-0.5"
                style={{ background: "#C0E1E1" }}
                aria-hidden="true"
              />

              {/* ─ Mobile vertical timeline line ─ */}
              <div
                className="lg:hidden absolute top-0 bottom-0 left-8 w-0.5"
                style={{ background: "#C0E1E1" }}
                aria-hidden="true"
              />

              <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="relative flex lg:flex-col items-start lg:items-center gap-6 lg:gap-0"
                  >
                    {/* Numbered circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                        style={{
                          background: "#1A6B6B",
                          fontFamily: "var(--font-heading)",
                          boxShadow:
                            "0 4px 14px 0 rgb(26 107 107 / 0.3), inset 0 2px 4px rgb(255 255 255 / 0.15)",
                        }}
                        aria-hidden="true"
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="lg:mt-8 lg:text-center flex-1">
                      {/* Illustration */}
                      <div
                        className="hidden lg:flex items-center justify-center w-32 h-32 mx-auto mb-6 rounded-2xl"
                        style={{ background: "white" }}
                      >
                        {step.icon}
                      </div>

                      {/* Mobile illustration (smaller) */}
                      <div
                        className="lg:hidden flex items-center justify-center w-16 h-16 mb-4 rounded-xl"
                        style={{ background: "white" }}
                      >
                        <div className="scale-75">{step.icon}</div>
                      </div>

                      <h3
                        className="text-neutral-900 mb-1"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.375rem",
                          fontWeight: 700,
                        }}
                      >
                        {step.title}
                      </h3>

                      <p
                        className="mb-3 font-semibold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "0.8125rem",
                          color: "#F5A623",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {step.subtitle}
                      </p>

                      <p
                        className="text-neutral-600 leading-relaxed"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.9375rem",
                          maxWidth: "360px",
                          margin: "0 auto",
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── What You Get Section ───────────────────────────────── */}
        <section
          className="py-20 sm:py-24 bg-white"
          aria-labelledby="deliverables-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-overline mb-3">What You Get</p>
              <h2
                id="deliverables-heading"
                className="text-neutral-900 leading-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                Everything Your Business Needs to{" "}
                <span style={{ color: "#1A6B6B" }}>Get Found Online</span>
              </h2>
              <p
                className="mt-4 text-neutral-600 leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.0625rem",
                }}
              >
                Every plan includes a full suite of tools and services — no
                surprise add-ons.
              </p>
            </div>

            {/* Deliverables grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {deliverables.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-neutral-100 p-8"
                  style={{ background: "#F9FAFB" }}
                >
                  {/* Category icon badge */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "#E6F3F3" }}
                  >
                    {group.category === "Website" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          stroke="#1A6B6B"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 21H16"
                          stroke="#1A6B6B"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 17V21"
                          stroke="#1A6B6B"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    {group.category === "SEO" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          cx="11"
                          cy="11"
                          r="7"
                          stroke="#1A6B6B"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d="M16 16L21 21"
                          stroke="#1A6B6B"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    {group.category === "Ongoing Support" && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 22C12 22 4 18 4 11V5L12 2L20 5V11C20 18 12 22 12 22Z"
                          stroke="#1A6B6B"
                          strokeWidth="2"
                          strokeLinejoin="round"
                          fill="none"
                        />
                        <path
                          d="M9 12L11 14L15 10"
                          stroke="#1A6B6B"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  <h3
                    className="text-neutral-900 mb-5"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                    }}
                  >
                    {group.category}
                  </h3>

                  <ul className="space-y-3.5" role="list">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        {/* Checkmark */}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                          className="flex-shrink-0 mt-0.5"
                        >
                          <circle cx="10" cy="10" r="10" fill="#1A6B6B" />
                          <path
                            d="M6.5 10.5L8.5 12.5L13.5 7.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          className="text-neutral-700 leading-snug"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9375rem",
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA Section ─────────────────────────────────── */}
        <section
          className="py-20 sm:py-24"
          style={{ background: "#1A6B6B" }}
          aria-labelledby="hiw-cta-heading"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
              style={{ background: "rgb(255 255 255 / 0.12)" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#F5A623"
                aria-hidden="true"
              >
                <path d="M8 0L10.2 5.8L16 6.2L11.6 10L13 16L8 12.8L3 16L4.4 10L0 6.2L5.8 5.8L8 0Z" />
              </svg>
              <span
                className="text-white text-sm font-medium"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Join 500+ local businesses
              </span>
            </div>

            <h2
              id="hiw-cta-heading"
              className="text-white leading-tight mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
              }}
            >
              Ready to Get Started?
            </h2>

            <p
              className="mb-9 leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                color: "#97CDCD",
                maxWidth: "520px",
                margin: "0 auto 2.25rem",
              }}
            >
              Book your free 15-minute discovery call and we&apos;ll have your site
              live within 48 hours. No setup fees, no contracts.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* Primary: amber */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition-all duration-150 w-full sm:w-auto"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "#F5A623",
                  color: "#111827",
                  boxShadow: "0 4px 20px 0 rgb(245 166 35 / 0.40)",
                }}
              >
                Book Your Free Call
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 8a.5.5 0 01.5-.5h7.293L8.146 4.854a.5.5 0 11.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L10.793 8.5H3.5A.5.5 0 013 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* Secondary: white outline */}
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-150 hover:border-white/60 w-full sm:w-auto"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                See Plans &amp; Pricing
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                "No setup fees",
                "No contracts",
                "48hr launch",
                "Dedicated manager",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm flex items-center gap-1.5"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#97CDCD",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="7" cy="7" r="7" fill="rgb(255 255 255 / 0.2)" />
                    <path
                      d="M4 7.5L6 9.5L10 5.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
