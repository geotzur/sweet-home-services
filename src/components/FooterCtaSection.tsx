export default function FooterCtaSection() {
  return (
    <section
      id="get-started"
      className="relative isolate overflow-hidden py-20 sm:py-24 text-white"
      aria-labelledby="footer-cta-heading"
    >
      {/* Rich gradient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(135deg, #0A2B2B 0%, #104040 30%, #155656 60%, #1A6B6B 100%)",
        }}
        aria-hidden="true"
      />

      {/* Amber glow accent */}
      <div
        className="pointer-events-none absolute -z-10"
        style={{
          top: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgb(245 166 35 / 0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Secondary teal glow */}
      <div
        className="pointer-events-none absolute -z-10"
        style={{
          bottom: "-30%",
          left: "-5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgb(26 107 107 / 0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Animated CSS dots / particles */}
      <div className="pointer-events-none absolute inset-0 -z-5 overflow-hidden" aria-hidden="true">
        <div className="cta-particle cta-particle-1" />
        <div className="cta-particle cta-particle-2" />
        <div className="cta-particle cta-particle-3" />
        <div className="cta-particle cta-particle-4" />
        <div className="cta-particle cta-particle-5" />
        <div className="cta-particle cta-particle-6" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - content */}
          <div className="text-center lg:text-left">
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
              Ready to Build
              <br />
              Something Smart?
            </h2>

            <p
              className="mb-9 mx-auto lg:mx-0 leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                color: "#97CDCD",
                maxWidth: "520px",
              }}
            >
              Join 500+ local businesses with smart, SEO-optimized websites.
              No setup fees. No contracts. Your site live in 48 hours.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
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
          </div>

          {/* Right side - phone illustration */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative" style={{ width: "280px", height: "480px" }}>
              {/* Phone frame SVG */}
              <svg
                viewBox="0 0 280 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                aria-hidden="true"
              >
                {/* Phone body */}
                <rect
                  x="4"
                  y="4"
                  width="272"
                  height="472"
                  rx="36"
                  fill="#111827"
                  stroke="rgb(255 255 255 / 0.15)"
                  strokeWidth="2"
                />
                {/* Screen */}
                <rect
                  x="16"
                  y="48"
                  width="248"
                  height="396"
                  rx="4"
                  fill="white"
                />
                {/* Notch */}
                <rect
                  x="100"
                  y="14"
                  width="80"
                  height="24"
                  rx="12"
                  fill="#1a1a2e"
                />
                {/* Home indicator */}
                <rect
                  x="104"
                  y="456"
                  width="72"
                  height="4"
                  rx="2"
                  fill="rgb(255 255 255 / 0.3)"
                />

                {/* ---- Screen content: Smart website dashboard ---- */}
                {/* Header bar */}
                <rect x="28" y="60" width="224" height="36" rx="8" fill="#1A6B6B" />
                <text x="44" y="83" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  {"Marcus's Plumbing Co."}
                </text>
                <circle cx="236" cy="78" r="4" fill="#22C55E" />

                {/* Stats row */}
                <rect x="28" y="106" width="108" height="56" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
                <text x="40" y="124" fill="#6B7280" fontSize="8" fontFamily="sans-serif">Site Visitors</text>
                <text x="40" y="146" fill="#1A6B6B" fontSize="18" fontWeight="bold" fontFamily="sans-serif">847</text>

                <rect x="144" y="106" width="108" height="56" rx="8" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" />
                <text x="156" y="124" fill="#6B7280" fontSize="8" fontFamily="sans-serif">New Leads</text>
                <text x="156" y="146" fill="#D97706" fontSize="18" fontWeight="bold" fontFamily="sans-serif">32</text>

                {/* SEO Score card */}
                <rect x="28" y="172" width="224" height="56" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <text x="40" y="194" fill="#374151" fontSize="10" fontWeight="bold" fontFamily="sans-serif">SEO Score</text>
                <rect x="40" y="204" width="196" height="8" rx="4" fill="#E5E7EB" />
                <rect x="40" y="204" width="184" height="8" rx="4" fill="#1A6B6B" />
                <text x="196" y="224" fill="#1A6B6B" fontSize="9" fontWeight="bold" fontFamily="sans-serif">94/100</text>

                {/* Recent activity */}
                <rect x="28" y="240" width="224" height="44" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="48" cy="262" r="10" fill="#F5A623" opacity="0.15" />
                <text x="43" y="266" fill="#F5A623" fontSize="10" fontFamily="sans-serif">&#9993;</text>
                <text x="64" y="258" fill="#374151" fontSize="9" fontWeight="bold" fontFamily="sans-serif">New quote request</text>
                <text x="64" y="272" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">Sarah M. — 2 min ago</text>

                <rect x="28" y="292" width="224" height="44" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="48" cy="314" r="10" fill="#22C55E" opacity="0.15" />
                <text x="43" y="318" fill="#22C55E" fontSize="10" fontFamily="sans-serif">&#9742;</text>
                <text x="64" y="310" fill="#374151" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Incoming call</text>
                <text x="64" y="324" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">Mike R. — 8 min ago</text>

                <rect x="28" y="344" width="224" height="44" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1" />
                <circle cx="48" cy="366" r="10" fill="#6366F1" opacity="0.15" />
                <text x="43" y="370" fill="#6366F1" fontSize="10" fontFamily="sans-serif">&#10003;</text>
                <text x="64" y="362" fill="#374151" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Booking confirmed</text>
                <text x="64" y="376" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">Lisa T. — 23 min ago</text>
              </svg>

              {/* Glow effect behind the phone */}
              <div
                className="absolute -inset-8 -z-10 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgb(245 166 35 / 0.15) 0%, transparent 70%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
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
