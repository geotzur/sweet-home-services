import Link from "next/link";

const trustSignals = [
  { stat: "48hr", label: "Average launch time" },
  { stat: "500+", label: "Local businesses served" },
  { stat: "4.9★", label: "Average client rating" },
  { stat: "0", label: "Long-term contracts" },
];

/**
 * Pricing page hero — full-bleed teal background with value-focused headline,
 * subheadline, CTA, and 4 trust-signal chips.
 *
 * Design:
 *   bg: brand-teal-500 (#1A6B6B)
 *   headline: white, Plus Jakarta Sans 700, clamp 2.5–3.5rem
 *   subheadline: teal-100, Inter 400, 1.125rem
 *   primary CTA: amber bg, dark text (highest contrast on teal)
 *   secondary CTA: white outline
 *   trust strip: semi-transparent white chips below CTAs
 */
export default function PricingHero() {
  return (
    <section
      style={{ background: "#1A6B6B" }}
      className="pt-28 pb-20 sm:pt-32 sm:pb-24"
      aria-label="Pricing hero"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Overline */}
        <p
          className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-heading)",
            background: "rgba(255,255,255,0.12)",
            color: "#C0E1E1",
          }}
        >
          Simple, Transparent Pricing
        </p>

        {/* Headline */}
        <h1
          className="leading-tight text-white"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
          }}
        >
          A smart website built to{" "}
          <span style={{ color: "#F5A623" }}>grow with you.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="mx-auto mt-5 max-w-2xl leading-relaxed"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            color: "#C0E1E1",
          }}
        >
          One monthly fee. We build your website, create your content, and
          optimize it with SEO best practices — so you can focus on running
          your business. No contracts. Cancel anytime.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pricing-cards"
            className="w-full sm:w-auto rounded-xl px-7 py-3.5 font-semibold transition-colors duration-150"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
              background: "#F5A623",
              color: "#111827",
            }}
          >
            See All Plans
          </a>
          <Link
            href="/#faq"
            className="w-full sm:w-auto rounded-xl px-7 py-3.5 font-semibold transition-colors duration-150"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
              background: "rgba(255,255,255,0.10)",
              color: "#FFFFFF",
              border: "1.5px solid rgba(255,255,255,0.30)",
            }}
          >
            How It Works
          </Link>
        </div>

        {/* Trust signal strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {trustSignals.map((signal) => (
            <div
              key={signal.label}
              className="flex items-center gap-2 rounded-full px-4 py-2"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  color: "#F5A623",
                }}
              >
                {signal.stat}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  color: "#C0E1E1",
                }}
              >
                {signal.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
