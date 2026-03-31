"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-white pt-16"
      aria-label="Hero"
    >
      {/* Background photo texture */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-[0.15] -z-20"
        priority
        aria-hidden="true"
      />

      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, #C0E1E1 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Overline */}
            <p className="section-overline mb-4">
              Local Business Websites + SEO
            </p>

            {/* Headline */}
            <h1
              className="text-neutral-900 leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.25rem, 5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
              }}
            >
              Your Town.{" "}
              <span
                className="relative inline-block"
                style={{ color: "#1A6B6B" }}
              >
                Found Online.
                {/* Amber underline accent */}
                <span
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
                  style={{
                    background: "#F5A623",
                    bottom: "-4px",
                  }}
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="mt-6 text-neutral-600 leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                lineHeight: "1.7",
                maxWidth: "480px",
                margin: "1.5rem auto 0",
              }}
            >
              We build your website, handle your SEO, and get your business
              ranking on Google — so you can focus on the work that matters.
              Starting at{" "}
              <strong className="text-neutral-900 font-semibold">
                $149/month.
              </strong>
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              {/* Primary CTA — amber */}
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-all duration-150 w-full sm:w-auto"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "#F5A623",
                  color: "#111827",
                  boxShadow: "0 4px 14px 0 rgb(245 166 35 / 0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#D4881A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#F5A623";
                }}
              >
                Start Free Today
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

              {/* Secondary CTA — teal outline */}
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-3.5 text-base font-semibold transition-all duration-150 w-full sm:w-auto"
                style={{
                  fontFamily: "var(--font-heading)",
                  borderColor: "#1A6B6B",
                  color: "#1A6B6B",
                }}
              >
                See How It Works
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {["Google-ready SEO", "Mobile-first design", "Monthly optimization"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-teal-100 bg-white/80 px-3 py-1.5 text-xs font-medium text-neutral-700"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Trust signal */}
            <p className="mt-6 text-sm text-neutral-500 flex items-center justify-center lg:justify-start gap-1.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#22C55E"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.354 5.354a.5.5 0 00-.708-.708L7 9.293 5.354 7.646a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              No contracts. No setup fees. Cancel anytime.
            </p>
          </div>

          {/* Right: Visual mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="brand-glow relative w-full max-w-sm rounded-3xl p-3 lg:max-w-md">
      {/* Browser chrome mockup */}
      <div
        className="section-shell overflow-hidden rounded-2xl border border-neutral-200 bg-white"
        style={{ boxShadow: "0 25px 50px -12px rgb(26 107 107 / 0.25)" }}
      >
        {/* Browser bar */}
        <div className="bg-neutral-100 px-4 py-3 flex items-center gap-2 border-b border-neutral-200">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <div className="ml-3 flex-1 rounded-full bg-white border border-neutral-200 px-3 py-1 text-xs text-neutral-500">
            sweethomeservices.org/plumbers/austin-tx
          </div>
        </div>

        {/* Mock website content */}
        <div className="bg-white p-6 space-y-4">
          {/* Hero area */}
          <div
            className="rounded-xl p-5"
            style={{ background: "#E6F3F3" }}
          >
            <div
              className="h-3 rounded w-3/4 mb-2"
              style={{ background: "#1A6B6B" }}
            />
            <div
              className="h-2 rounded w-full mb-1"
              style={{ background: "#97CDCD" }}
            />
            <div
              className="h-2 rounded w-4/5 mb-4"
              style={{ background: "#97CDCD" }}
            />
            <div
              className="inline-block rounded-lg px-4 py-1.5 text-xs font-semibold"
              style={{ background: "#F5A623", color: "#111827" }}
            >
              Call Now: (512) 555-0192
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {["⭐ 4.9/5", "📍 Austin TX", "✅ Licensed"].map((stat) => (
              <div
                key={stat}
                className="rounded-lg text-center py-2 text-xs font-medium text-neutral-700 border border-neutral-100"
                style={{ background: "#F9FAFB" }}
              >
                {stat}
              </div>
            ))}
          </div>

          {/* Services list */}
          <div className="space-y-2">
            {[
              "Emergency Plumbing Repair",
              "Water Heater Installation",
              "Drain Cleaning",
            ].map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 text-xs text-neutral-700"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#1A6B6B" }}
                />
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Google ranking badge */}
      <div
        className="absolute -top-3 -right-3 bg-white rounded-xl px-3 py-2 shadow-lg border border-neutral-100 flex items-center gap-2"
        style={{ fontSize: "0.75rem" }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ background: "#1A6B6B" }}
        >
          #1
        </div>
        <div>
          <p className="font-semibold text-neutral-800 text-xs leading-tight">
            Google Result
          </p>
          <p className="text-neutral-500 text-xs leading-tight">
            &ldquo;plumber near me&rdquo;
          </p>
        </div>
      </div>

      {/* Floating "new lead" badge */}
      <div
        className="absolute -bottom-3 -left-3 bg-white rounded-xl px-3 py-2 shadow-lg border border-neutral-100 flex items-center gap-2"
        style={{ fontSize: "0.75rem" }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0"
          style={{ background: "#F5A623" }}
        >
          📞
        </div>
        <div>
          <p className="font-semibold text-neutral-800 text-xs leading-tight">
            New Lead
          </p>
          <p className="text-neutral-500 text-xs leading-tight">Just now</p>
        </div>
      </div>
    </div>
  );
}
