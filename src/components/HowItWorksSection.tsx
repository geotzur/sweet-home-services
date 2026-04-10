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
    decorativeSvg: (
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" aria-hidden="true">
        {/* Browser window outline */}
        <rect x="10" y="8" width="100" height="64" rx="6" stroke="#C0E1E1" strokeWidth="1.5" fill="none" />
        <line x1="10" y1="22" x2="110" y2="22" stroke="#C0E1E1" strokeWidth="1.5" />
        <circle cx="22" cy="15" r="2.5" fill="#F87171" />
        <circle cx="30" cy="15" r="2.5" fill="#FBBF24" />
        <circle cx="38" cy="15" r="2.5" fill="#34D399" />
        {/* Content lines */}
        <rect x="20" y="30" width="40" height="4" rx="2" fill="#E6F3F3" />
        <rect x="20" y="40" width="80" height="3" rx="1.5" fill="#E5E7EB" />
        <rect x="20" y="48" width="70" height="3" rx="1.5" fill="#E5E7EB" />
        <rect x="20" y="56" width="50" height="3" rx="1.5" fill="#E5E7EB" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Handle Your SEO",
    description:
      "Our team optimizes every page with SEO best practices, creates quality content, and structures your site so search engines and customers can find what they need.",
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
    decorativeSvg: (
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" aria-hidden="true">
        {/* Search/SEO chart */}
        <rect x="10" y="8" width="100" height="64" rx="6" stroke="#C0E1E1" strokeWidth="1.5" fill="none" />
        {/* Graph bars */}
        <rect x="22" y="50" width="10" height="14" rx="2" fill="#E6F3F3" />
        <rect x="38" y="40" width="10" height="24" rx="2" fill="#C0E1E1" />
        <rect x="54" y="32" width="10" height="32" rx="2" fill="#97CDCD" />
        <rect x="70" y="24" width="10" height="40" rx="2" fill="#1A6B6B" />
        <rect x="86" y="16" width="10" height="48" rx="2" fill="#F5A623" />
        {/* Arrow trending up */}
        <path d="M24 48 L44 38 L60 30 L76 22 L92 14" stroke="#1A6B6B" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" fill="none" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Your Site Gets Smarter",
    description:
      "Every month we improve your site — new pages, updated content, better keywords. With analytics, CRM connections, and smart automations, your website becomes the engine that powers your business.",
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
    decorativeSvg: (
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" aria-hidden="true">
        {/* Phone ringing */}
        <rect x="35" y="4" width="50" height="72" rx="8" stroke="#C0E1E1" strokeWidth="1.5" fill="none" />
        <rect x="50" y="10" width="20" height="4" rx="2" fill="#E5E7EB" />
        {/* Screen content */}
        <text x="46" y="42" fill="#1A6B6B" fontSize="10" fontWeight="bold" fontFamily="sans-serif">+15</text>
        <text x="43" y="54" fill="#6B7280" fontSize="7" fontFamily="sans-serif">new calls</text>
        {/* Ring waves */}
        <path d="M28 28 C22 22, 22 40, 28 34" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M22 24 C14 16, 14 44, 22 38" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
        <path d="M92 28 C98 22, 98 40, 92 34" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M98 24 C106 16, 106 44, 98 38" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
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
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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
            From Idea to Smart Website
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

        {/* Timeline layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line - desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, #1A6B6B 0%, #4DA9A9 50%, #F5A623 100%)",
            }}
            aria-hidden="true"
          />

          {/* Vertical timeline line - mobile */}
          <div
            className="md:hidden absolute left-6 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, #1A6B6B 0%, #4DA9A9 50%, #F5A623 100%)",
            }}
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.number}
                className="relative mb-16 last:mb-0"
              >
                {/* --- Desktop layout: alternating left/right --- */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-12 items-center">
                  {/* Left column */}
                  <div
                    className={
                      isEven
                        ? "text-right pr-12"
                        : "flex justify-end pl-12 order-2"
                    }
                  >
                    {isEven ? (
                      /* Content on the left for even steps */
                      <div>
                        <div className="flex items-center justify-end gap-3 mb-3">
                          {step.icon}
                          <h3
                            className="text-neutral-900"
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "1.25rem",
                              fontWeight: 600,
                            }}
                          >
                            {step.title}
                          </h3>
                        </div>
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
                    ) : (
                      /* Decorative SVG on the left for odd steps */
                      <div
                        className="rounded-2xl p-6 flex items-center justify-center"
                        style={{
                          background: "#F9FAFB",
                          border: "1px solid #E5E7EB",
                        }}
                      >
                        {step.decorativeSvg}
                      </div>
                    )}
                  </div>

                  {/* Right column */}
                  <div
                    className={
                      isEven
                        ? "flex justify-start pl-12"
                        : "text-left pr-12 order-1"
                    }
                  >
                    {isEven ? (
                      /* Decorative SVG on the right for even steps */
                      <div
                        className="rounded-2xl p-6 flex items-center justify-center"
                        style={{
                          background: "#F9FAFB",
                          border: "1px solid #E5E7EB",
                        }}
                      >
                        {step.decorativeSvg}
                      </div>
                    ) : (
                      /* Content on the right for odd steps */
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          {step.icon}
                          <h3
                            className="text-neutral-900"
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "1.25rem",
                              fontWeight: 600,
                            }}
                          >
                            {step.title}
                          </h3>
                        </div>
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
                    )}
                  </div>
                </div>

                {/* Numbered circle on the center line - desktop */}
                <div
                  className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center text-sm font-bold z-10"
                  style={{
                    background: index === 2 ? "#F5A623" : "#1A6B6B",
                    color: index === 2 ? "#111827" : "white",
                    fontFamily: "var(--font-heading)",
                    boxShadow: "0 0 0 4px white, 0 0 0 6px #E5E7EB",
                  }}
                >
                  {step.number}
                </div>

                {/* --- Mobile layout: timeline on the left --- */}
                <div className="md:hidden flex gap-6">
                  {/* Numbered circle on the left line */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold z-10 relative"
                    style={{
                      background: index === 2 ? "#F5A623" : "#1A6B6B",
                      color: index === 2 ? "#111827" : "white",
                      fontFamily: "var(--font-heading)",
                      boxShadow: "0 0 0 4px white, 0 0 0 6px #E5E7EB",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-3">
                      {step.icon}
                      <h3
                        className="text-neutral-900"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-neutral-600 leading-relaxed mb-4"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                      }}
                    >
                      {step.description}
                    </p>
                    {/* Decorative illustration */}
                    <div
                      className="rounded-xl p-4 inline-flex"
                      style={{
                        background: "#F9FAFB",
                        border: "1px solid #E5E7EB",
                      }}
                    >
                      {step.decorativeSvg}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-colors duration-150 w-full sm:w-auto"
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
    </section>
  );
}
