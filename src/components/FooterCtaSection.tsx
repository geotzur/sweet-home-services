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
              Ready to Get Found
              <br />
              in Your Town?
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
              Join 500+ local businesses that show up when customers are
              searching. No setup fees. No contracts. Your site live in 48
              hours.
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

                {/* ---- Screen content: Google-like search results ---- */}
                {/* Search bar */}
                <rect
                  x="28"
                  y="60"
                  width="224"
                  height="36"
                  rx="18"
                  fill="#F3F4F6"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
                {/* Search icon */}
                <circle
                  cx="46"
                  cy="78"
                  r="6"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  fill="none"
                />
                <line
                  x1="50.5"
                  y1="82.5"
                  x2="54"
                  y2="86"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                {/* Search text */}
                <text
                  x="60"
                  y="82"
                  fill="#6B7280"
                  fontSize="10"
                  fontFamily="sans-serif"
                >
                  plumber near me
                </text>

                {/* Result 1 - Featured / #1 */}
                <rect
                  x="28"
                  y="110"
                  width="224"
                  height="88"
                  rx="8"
                  fill="#F0FDF4"
                  stroke="#BBF7D0"
                  strokeWidth="1"
                />
                {/* #1 badge */}
                <rect
                  x="36"
                  y="118"
                  width="26"
                  height="18"
                  rx="4"
                  fill="#F5A623"
                />
                <text
                  x="41"
                  y="131"
                  fill="#111827"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  #1
                </text>
                {/* Business name */}
                <text
                  x="68"
                  y="131"
                  fill="#1A6B6B"
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  {"Marcus's Plumbing Co."}
                </text>
                {/* URL */}
                <text
                  x="36"
                  y="148"
                  fill="#6B7280"
                  fontSize="8"
                  fontFamily="sans-serif"
                >
                  www.marcusplumbing.com
                </text>
                {/* Stars */}
                <text
                  x="36"
                  y="163"
                  fill="#F5A623"
                  fontSize="10"
                  fontFamily="sans-serif"
                >
                  ★★★★★
                </text>
                <text
                  x="80"
                  y="163"
                  fill="#6B7280"
                  fontSize="8"
                  fontFamily="sans-serif"
                >
                  4.9 (127 reviews)
                </text>
                {/* Snippet */}
                <text
                  x="36"
                  y="180"
                  fill="#374151"
                  fontSize="8"
                  fontFamily="sans-serif"
                >
                  Licensed plumber in Austin, TX. 24/7
                </text>
                <text
                  x="36"
                  y="191"
                  fill="#374151"
                  fontSize="8"
                  fontFamily="sans-serif"
                >
                  emergency service. Free estimates...
                </text>

                {/* Result 2 */}
                <rect
                  x="28"
                  y="210"
                  width="224"
                  height="64"
                  rx="8"
                  fill="white"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
                <text
                  x="36"
                  y="233"
                  fill="#1E40AF"
                  fontSize="10"
                  fontFamily="sans-serif"
                >
                  Big Chain Plumbing Inc.
                </text>
                <text
                  x="36"
                  y="248"
                  fill="#6B7280"
                  fontSize="8"
                  fontFamily="sans-serif"
                >
                  www.bigchainplumbing.com
                </text>
                <text
                  x="36"
                  y="263"
                  fill="#374151"
                  fontSize="8"
                  fontFamily="sans-serif"
                >
                  National plumbing services...
                </text>

                {/* Result 3 */}
                <rect
                  x="28"
                  y="286"
                  width="224"
                  height="64"
                  rx="8"
                  fill="white"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
                <text
                  x="36"
                  y="309"
                  fill="#1E40AF"
                  fontSize="10"
                  fontFamily="sans-serif"
                >
                  QuickFix Plumbing Services
                </text>
                <text
                  x="36"
                  y="324"
                  fill="#6B7280"
                  fontSize="8"
                  fontFamily="sans-serif"
                >
                  www.quickfixplumbing.com
                </text>
                <text
                  x="36"
                  y="339"
                  fill="#374151"
                  fontSize="8"
                  fontFamily="sans-serif"
                >
                  Affordable plumbing repairs...
                </text>

                {/* Result 4 (partial / cut off) */}
                <rect
                  x="28"
                  y="362"
                  width="224"
                  height="64"
                  rx="8"
                  fill="white"
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
                <text
                  x="36"
                  y="385"
                  fill="#1E40AF"
                  fontSize="10"
                  fontFamily="sans-serif"
                >
                  Hometown Pipes & Drains
                </text>
                <text
                  x="36"
                  y="400"
                  fill="#6B7280"
                  fontSize="8"
                  fontFamily="sans-serif"
                >
                  www.hometownpipes.com
                </text>
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
