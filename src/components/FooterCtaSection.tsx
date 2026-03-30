export default function FooterCtaSection() {
  return (
    <section
      id="get-started"
      className="py-20 sm:py-24"
      style={{ background: "#1A6B6B" }}
      aria-labelledby="footer-cta-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative element */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{ background: "rgb(255 255 255 / 0.12)" }}
        >
          <span aria-hidden="true">📍</span>
          <span
            className="text-white text-sm font-medium"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Serving local businesses across the USA
          </span>
        </div>

        <h2
          id="footer-cta-heading"
          className="text-white leading-tight mb-5"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
          }}
        >
          Ready to Get Found
          <br />
          in Your Town?
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
          Join 500+ local businesses that show up when customers are searching.
          No setup fees. No contracts. Your site live in 48 hours.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Primary: amber */}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition-all duration-150 w-full sm:w-auto"
            style={{
              fontFamily: "var(--font-heading)",
              background: "#F5A623",
              color: "#111827",
              boxShadow: "0 4px 20px 0 rgb(245 166 35 / 0.40)",
            }}
          >
            See Plans & Pricing
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
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-150 hover:border-white/60 w-full sm:w-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Talk to a Human
          </a>
        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            "✓ No setup fees",
            "✓ No contracts",
            "✓ 48hr launch",
            "✓ Dedicated manager",
          ].map((item) => (
            <span
              key={item}
              className="text-sm"
              style={{
                fontFamily: "var(--font-sans)",
                color: "#97CDCD",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
