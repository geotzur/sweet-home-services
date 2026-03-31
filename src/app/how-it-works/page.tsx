import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works — Sweet Home Services",
  description:
    "See how Sweet Home Services builds and optimizes your local business website in 48 hours. Simple 3-step process from discovery call to Google rankings.",
};

/* ─── Step data ──────────────────────────────────────────────────── */
const steps = [
  {
    number: 1,
    title: "Tell Us About Your Business",
    subtitle: "Free 15-minute discovery call",
    description:
      "We hop on a quick call to learn about your business, your ideal customers, and what makes you different. No prep needed — just tell us what you do and where you serve.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        {/* Phone / chat bubble */}
        <rect x="8" y="14" width="48" height="36" rx="8" fill="#E6F3F3" />
        <rect x="14" y="22" width="24" height="3" rx="1.5" fill="#1A6B6B" />
        <rect x="14" y="29" width="18" height="3" rx="1.5" fill="#97CDCD" />
        <rect x="14" y="36" width="22" height="3" rx="1.5" fill="#97CDCD" />
        {/* Chat dots */}
        <circle cx="44" cy="29" r="2" fill="#F5A623" />
        <circle cx="44" cy="35" r="2" fill="#F5A623" />
        {/* Clock badge */}
        <circle cx="50" cy="18" r="10" fill="#1A6B6B" />
        <path
          d="M50 13V18L53 20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "We Build Your Website + SEO",
    subtitle: "48 hours to launch",
    description:
      "Our team designs a professional, mobile-first website tailored to your industry and optimizes every page for local search. Google Business Profile setup included.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        {/* Browser window */}
        <rect x="6" y="12" width="52" height="40" rx="6" fill="#E6F3F3" />
        <rect x="6" y="12" width="52" height="10" rx="6" fill="#1A6B6B" />
        <rect x="6" y="18" width="52" height="4" fill="#1A6B6B" />
        {/* Browser dots */}
        <circle cx="14" cy="17" r="2" fill="#F87171" />
        <circle cx="21" cy="17" r="2" fill="#FBBF24" />
        <circle cx="28" cy="17" r="2" fill="#34D399" />
        {/* Code / content lines */}
        <rect x="12" y="28" width="20" height="3" rx="1.5" fill="#1A6B6B" />
        <rect x="12" y="34" width="28" height="2" rx="1" fill="#97CDCD" />
        <rect x="12" y="39" width="24" height="2" rx="1" fill="#97CDCD" />
        {/* Rocket */}
        <circle cx="48" cy="38" r="8" fill="#F5A623" />
        <path
          d="M48 33L50 38H46L48 33Z"
          fill="white"
        />
        <rect x="46.5" y="38" width="3" height="4" rx="1" fill="white" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Watch Your Business Grow",
    subtitle: "Monthly reports + ongoing optimization",
    description:
      "We track your Google rankings, send clear monthly reports, and continuously optimize your content and SEO so you keep climbing — and keep getting calls.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        {/* Chart bg */}
        <rect x="6" y="12" width="52" height="40" rx="6" fill="#E6F3F3" />
        {/* Growth chart */}
        <path
          d="M14 44L24 34L32 38L50 20"
          stroke="#1A6B6B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Chart area fill */}
        <path
          d="M14 44L24 34L32 38L50 20V44H14Z"
          fill="#1A6B6B"
          opacity="0.12"
        />
        {/* Arrow tip */}
        <path
          d="M46 20H50V24"
          stroke="#1A6B6B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Star badge */}
        <circle cx="50" cy="16" r="8" fill="#F5A623" />
        <path
          d="M50 11L51.5 14.5L55 15L52.5 17.5L53 21L50 19.5L47 21L47.5 17.5L45 15L48.5 14.5L50 11Z"
          fill="white"
        />
      </svg>
    ),
  },
];

/* ─── Deliverables checklist ─────────────────────────────────────── */
const deliverables = [
  {
    category: "Website",
    items: [
      "Custom-designed, mobile-first website",
      "Industry-specific copywriting",
      "Click-to-call and contact forms",
      "Photo gallery and testimonials section",
      "Lightning-fast hosting included",
    ],
  },
  {
    category: "SEO & Search",
    items: [
      "Google Business Profile setup and optimization",
      "Local keyword research and targeting",
      "On-page SEO for every page",
      "Schema markup for rich search results",
      "Citation building across 50+ directories",
    ],
  },
  {
    category: "Ongoing Support",
    items: [
      "Monthly ranking and traffic reports",
      "Continuous SEO optimization",
      "Dedicated account manager",
      "Content updates as your business grows",
      "99.9% uptime guarantee",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-20 sm:py-28"
          aria-label="How It Works hero"
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 0%, #C0E1E1 0%, transparent 70%)",
            }}
          />

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="section-overline mb-4">The Process</p>
            <h1
              className="text-neutral-900 leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
              }}
            >
              From First Call to First Page{" "}
              <span style={{ color: "#1A6B6B" }}>in 48 Hours</span>
            </h1>
            <p
              className="mt-5 text-neutral-600 leading-relaxed mx-auto"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                maxWidth: "560px",
              }}
            >
              We keep it simple. Three steps, no jargon, no contracts. You focus
              on running your business while we get you found on Google.
            </p>
          </div>
        </section>

        {/* ── 3-Step Process ───────────────────────────────────────── */}
        <section
          className="py-16 sm:py-20"
          style={{ background: "#F9FAFB" }}
          aria-labelledby="steps-heading"
        >
          <h2 id="steps-heading" className="sr-only">
            Three-step process
          </h2>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* ── Timeline connector line ── */}
              {/* Vertical line (mobile) */}
              <div
                className="absolute left-8 top-12 bottom-12 w-0.5 md:hidden"
                style={{ background: "#C0E1E1" }}
                aria-hidden="true"
              />
              {/* Horizontal line (desktop) */}
              <div
                className="hidden md:block absolute top-[72px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-0.5"
                style={{ background: "#C0E1E1" }}
                aria-hidden="true"
              />

              {/* ── Steps grid ── */}
              <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                {steps.map((step) => (
                  <div key={step.number} className="relative">
                    <div className="flex md:flex-col items-start md:items-center md:text-center gap-5 md:gap-0">
                      {/* Numbered circle */}
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                          style={{
                            background: "#1A6B6B",
                            fontFamily: "var(--font-heading)",
                            boxShadow: "0 4px 14px 0 rgb(26 107 107 / 0.30)",
                          }}
                          aria-hidden="true"
                        >
                          {step.number}
                        </div>
                      </div>

                      <div className="md:mt-6 flex-1">
                        {/* Illustration */}
                        <div className="hidden md:flex justify-center mb-5">
                          {step.icon}
                        </div>

                        {/* Title */}
                        <h3
                          className="text-neutral-900 mb-1"
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.25rem",
                            fontWeight: 700,
                          }}
                        >
                          {step.title}
                        </h3>

                        {/* Subtitle badge */}
                        <span
                          className="inline-block rounded-full px-3 py-0.5 text-xs font-semibold mb-3"
                          style={{
                            background: "#FEF8EE",
                            color: "#B36B12",
                            fontFamily: "var(--font-heading)",
                          }}
                        >
                          {step.subtitle}
                        </span>

                        {/* Description */}
                        <p
                          className="text-neutral-600 leading-relaxed"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9375rem",
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── What You Get ─────────────────────────────────────────── */}
        <section
          className="py-16 sm:py-24 bg-white"
          aria-labelledby="deliverables-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-overline mb-3">Everything Included</p>
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
                What You Get{" "}
                <span style={{ color: "#1A6B6B" }}>with Every Plan</span>
              </h2>
              <p
                className="mt-4 text-neutral-600 leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.0625rem",
                }}
              >
                No hidden fees, no modules to unlock. Every plan includes a
                fully built website, local SEO, and ongoing support.
              </p>
            </div>

            {/* Deliverables grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {deliverables.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border p-6 lg:p-8"
                  style={{ borderColor: "#E6F3F3", background: "#FAFEFE" }}
                >
                  {/* Category icon + title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#1A6B6B" }}
                    >
                      {group.category === "Website" && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                        >
                          <rect
                            x="2"
                            y="3"
                            width="16"
                            height="12"
                            rx="2"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M2 7H18"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M8 17H12"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M10 15V17"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                        </svg>
                      )}
                      {group.category === "SEO & Search" && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            cx="9"
                            cy="9"
                            r="5.5"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M13.5 13.5L17 17"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                      {group.category === "Ongoing Support" && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M10 2V5M10 15V18M18 10H15M5 10H2M15.66 4.34L13.54 6.46M6.46 13.54L4.34 15.66M15.66 15.66L13.54 13.54M6.46 6.46L4.34 4.34"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <circle
                            cx="10"
                            cy="10"
                            r="3"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                        </svg>
                      )}
                    </div>
                    <h3
                      className="text-neutral-900"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                      }}
                    >
                      {group.category}
                    </h3>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-3" role="list">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        {/* Check icon */}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <circle cx="10" cy="10" r="10" fill="#E6F3F3" />
                          <path
                            d="M6.5 10.5L9 13L13.5 7.5"
                            stroke="#1A6B6B"
                            strokeWidth="2"
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

        {/* ── Bottom CTA ───────────────────────────────────────────── */}
        <section
          className="py-20 sm:py-24"
          style={{ background: "#1A6B6B" }}
          aria-labelledby="cta-heading"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            {/* Decorative badge */}
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
                <path d="M8 0L10 5.5H16L11 9L13 15L8 11.5L3 15L5 9L0 5.5H6L8 0Z" />
              </svg>
              <span
                className="text-white text-sm font-medium"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                500+ local businesses served
              </span>
            </div>

            <h2
              id="cta-heading"
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
              className="mb-9 leading-relaxed mx-auto"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                color: "#97CDCD",
                maxWidth: "520px",
              }}
            >
              Book your free 15-minute discovery call today. No commitments, no
              pressure — just a quick chat about how we can help your business
              get found online.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
                Book Free Discovery Call
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

              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-150 hover:border-white/60 w-full sm:w-auto"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                View Pricing
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                "No setup fees",
                "No contracts",
                "48hr launch",
                "Cancel anytime",
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
                    <path
                      d="M3.5 7L6 9.5L10.5 4.5"
                      stroke="#97CDCD"
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
