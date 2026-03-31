const steps = [
  {
    number: "01",
    title: "We Build Your Site",
    description:
      "Tell us about your business and we'll design and build a professional, mobile-first website tailored to your industry — contractor, salon, medical, restaurant, or more.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect width="28" height="28" rx="8" fill="#1A6B6B" />
        <path
          d="M8 20L14 8L20 20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 16H18"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="14" cy="8" r="1.5" fill="#F5A623" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Handle Your SEO",
    description:
      "Our team optimizes every page for local search, builds your Google Business Profile, and creates content that ranks for the keywords your customers actually use.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect width="28" height="28" rx="8" fill="#1A6B6B" />
        <circle
          cx="13"
          cy="13"
          r="5"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M17 17L21 21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="13" cy="13" r="2" fill="#F5A623" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "You Get Found",
    description:
      "Watch your phone ring with local customers who found you on Google. We track your rankings, send monthly reports, and keep your site updated as your business grows.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect width="28" height="28" rx="8" fill="#1A6B6B" />
        <path
          d="M8 18L12 13L16 16L20 9"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="20" cy="9" r="2" fill="#F5A623" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-24"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell brand-grid overflow-hidden px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-overline mb-3">The Process</p>
          <h2
            id="how-it-works-heading"
            className="text-neutral-900 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            From Zero to Google-Ranked
            <br />
            <span style={{ color: "#1A6B6B" }}>in Three Simple Steps</span>
          </h2>
          <p
            className="mt-4 text-neutral-600 leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1.0625rem" }}
          >
            You run your business. We handle everything online.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px"
            style={{ background: "#C0E1E1" }}
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-brand-teal-100/70 bg-white/90 p-6 flex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* Step number badge */}
              <div className="relative mb-5">
                {step.icon}
                {/* Step number overlay */}
                <span
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "#F5A623",
                    color: "#111827",
                    fontSize: "10px",
                  }}
                >
                  {index + 1}
                </span>
              </div>

              <h3
                className="text-neutral-900 mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                }}
              >
                {step.title}
              </h3>

              <p
                className="text-neutral-600 leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-colors duration-150"
            style={{
              fontFamily: "var(--font-heading)",
              background: "#1A6B6B",
              color: "#FFFFFF",
            }}
          >
            Get Your Site Built
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
        </div>
        </div>
      </div>
    </section>
  );
}
