"use client";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-16"
      aria-label="Hero"
      style={{
        background:
          "linear-gradient(135deg, #051515 0%, #104040 35%, #1A6B6B 65%, #155656 100%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Amber glow blob - top right */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Teal glow blob - bottom left */}
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #6DB8B8 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Overline pill */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#F5A623" }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ fontFamily: "var(--font-heading)", color: "#97CDCD" }}
              >
                Smart Websites for Local Business
              </span>
            </div>

            {/* Headline */}
            <h1
              className="leading-[1.08]"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 5.5vw, 3.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              Your Business.
              <br />
              <span className="relative inline-block" style={{ color: "#F5A623" }}>
                Built Smart.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 280 12"
                  fill="none"
                  aria-hidden="true"
                  style={{ height: "10px" }}
                >
                  <path
                    d="M2 8.5C60 2 120 2 140 5C160 8 200 9 278 3"
                    stroke="#F5A623"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="mt-6 mx-auto lg:mx-0 leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                lineHeight: "1.75",
                maxWidth: "480px",
                color: "#C0E1E1",
              }}
            >
              We build smart, SEO-optimized websites with content, automations,
              and the tools your business needs to grow — so you can focus on the work that matters.
              Starting at{" "}
              <strong style={{ color: "#FFFFFF", fontWeight: 600 }}>$149/month.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              {/* Primary CTA — amber with glow */}
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold transition-all duration-200 w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
                  color: "#111827",
                  boxShadow:
                    "0 4px 20px 0 rgb(245 166 35 / 0.40), 0 0 0 1px rgb(245 166 35 / 0.15) inset",
                }}
              >
                See Plans & Pricing
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 8a.5.5 0 01.5-.5h7.293L8.146 4.854a.5.5 0 11.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L10.793 8.5H3.5A.5.5 0 013 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* Secondary CTA — frosted glass, scrolls to contact */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold transition-all duration-200 w-full sm:w-auto hover:bg-white/15"
                style={{
                  fontFamily: "var(--font-heading)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#FFFFFF",
                  backdropFilter: "blur(8px)",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2.5 3.5C2.5 2.95 2.95 2.5 3.5 2.5H6L7.25 5.5L5.75 6.75C6.5 8.25 8.25 10 9.75 10.75L11 9.25L14 10.5V13C14 13.55 13.55 14 13 14C7.2 14 2.5 9.3 2.5 3.5Z" />
                </svg>
                Get a Free Consultation
              </a>
            </div>

            {/* Trust badges row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {[
                { icon: "M9 12l2 2 4-4", label: "SEO-optimized" },
                { icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", label: "Mobile-first" },
                { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Monthly updates" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2"
                  style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8125rem", fontFamily: "var(--font-sans)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={item.icon} />
                  </svg>
                  {item.label}
                </div>
              ))}
            </div>

            {/* No contract signal */}
            <p
              className="mt-5 text-sm flex items-center justify-center lg:justify-start gap-1.5"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-sans)" }}
            >
              No contracts &middot; No setup fees &middot; Cancel anytime
            </p>
          </div>

          {/* Right: Dashboard preview mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <HeroDashboard />
          </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-[40px] sm:h-[60px]">
          <path d="M0 60V20C360 0 720 40 1080 20C1260 10 1380 15 1440 20V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

/* ─── Dashboard-style visual showing real value ─── */
function HeroDashboard() {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg">
      {/* Main dashboard card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 25px 60px -12px rgba(0,0,0,0.4)",
        }}
      >
        {/* Dashboard header */}
        <div
          className="px-5 py-3.5 flex items-center justify-between"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22C55E" }} />
            <span
              className="text-xs font-semibold"
              style={{ fontFamily: "var(--font-heading)", color: "rgba(255,255,255,0.7)" }}
            >
              Your Business Dashboard
            </span>
          </div>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: "rgba(34,197,94,0.15)", color: "#22C55E", fontFamily: "var(--font-sans)" }}
          >
            Live
          </span>
        </div>

        <div className="p-5 space-y-4">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { label: "SEO Score", value: "94", sub: "all pages optimized", color: "#F5A623" },
              { label: "Calls Today", value: "12", sub: "+34% this week", color: "#22C55E" },
              { label: "Site Visits", value: "847", sub: "this month", color: "#6DB8B8" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-2 sm:p-3"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p
                  className="text-[10px] sm:text-xs mb-1 truncate"
                  style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.4)" }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-lg sm:text-xl font-bold leading-none"
                  style={{ fontFamily: "var(--font-heading)", color: stat.color }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[10px] sm:text-xs mt-1 truncate"
                  style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.3)" }}
                >
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Mini chart visualization */}
          <div
            className="rounded-xl p-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-xs font-semibold"
                style={{ fontFamily: "var(--font-heading)", color: "rgba(255,255,255,0.6)" }}
              >
                Monthly Leads
              </span>
              <span
                className="text-xs font-medium"
                style={{ fontFamily: "var(--font-sans)", color: "#22C55E" }}
              >
                Trending up
              </span>
            </div>
            {/* Simplified bar chart */}
            <div className="flex items-end gap-1.5 h-16">
              {[25, 35, 30, 45, 40, 55, 50, 65, 60, 75, 80, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all"
                  style={{
                    height: `${h}%`,
                    background:
                      i >= 10
                        ? "linear-gradient(180deg, #F5A623, #D4881A)"
                        : i >= 8
                          ? "rgba(109,184,184,0.6)"
                          : "rgba(109,184,184,0.25)",
                    borderRadius: "2px 2px 0 0",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-sans)" }}>
                Jan
              </span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-sans)" }}>
                Dec
              </span>
            </div>
          </div>

          {/* Recent leads feed */}
          <div className="space-y-2">
            {[
              { name: "Sarah M.", action: "Requested a quote", time: "2 min ago", icon: "quote" },
              { name: "Mike R.", action: "Called from website", time: "8 min ago", icon: "phone" },
              { name: "Lisa T.", action: "Booked online", time: "23 min ago", icon: "calendar" },
            ].map((lead) => (
              <div
                key={lead.name}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.04)" }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,166,35,0.15)" }}
                >
                  {lead.icon === "phone" ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                  ) : lead.icon === "calendar" ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium truncate" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-heading)" }}>
                    {lead.name} <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>{lead.action}</span>
                  </p>
                </div>
                <span className="text-xs flex-shrink-0" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-sans)" }}>
                  {lead.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge: SEO optimized */}
      <div
        className="absolute -top-4 right-0 sm:-right-4 rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 hero-float max-w-[calc(100%-1rem)]"
        style={{
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          style={{ background: "linear-gradient(135deg, #1A6B6B, #104040)" }}
        >
          &#10003;
        </div>
        <div>
          <p className="text-xs font-bold text-neutral-800" style={{ fontFamily: "var(--font-heading)" }}>
            SEO Optimized
          </p>
          <p className="text-xs text-neutral-400" style={{ fontFamily: "var(--font-sans)" }}>
            All pages scored A+
          </p>
        </div>
      </div>

      {/* Floating badge: New lead notification */}
      <div
        className="absolute -bottom-3 left-0 sm:-left-4 rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 hero-float-delayed max-w-[calc(100%-1rem)]"
        style={{
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #F5A623, #D4881A)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold text-neutral-800" style={{ fontFamily: "var(--font-heading)" }}>
            New Lead Received
          </p>
          <p className="text-xs text-neutral-400" style={{ fontFamily: "var(--font-sans)" }}>
            Just now &middot; Website form
          </p>
        </div>
      </div>
    </div>
  );
}
