import CheckoutButton from "./CheckoutButton";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "$89",
    tagline: "Your smart website. Ready to grow.",
    description: "A professional, SEO-ready website with location and service pages — the smart foundation every local business needs.",
    cta: "Start with Basic",
    featured: false,
    features: [
      "Up to 30-page website",
      "Location + service pages",
      "Mobile-responsive design",
      "On-page SEO optimization",
      "Content creation included",
      "SSL certificate + hosting",
      "Contact form + click-to-call",
    ],
    notIncluded: [
      "Monthly keyword reports",
      "Blog content",
      "Analytics dashboards",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    price: "$149",
    tagline: "A website that works as hard as you do.",
    description: "A comprehensive, SEO-optimized website built to scale — with monthly reporting and ongoing refinements.",
    cta: "Start with Starter",
    featured: false,
    features: [
      "Up to 100 professional pages",
      "Mobile-first, fast-loading design",
      "Local SEO optimization",
      "Monthly website performance report",
      "Content creation included",
      "SSL certificate + hosting",
      "Contact form + click-to-call",
      "1 revision per month",
    ],
    notIncluded: [
      "Blog content",
      "Analytics dashboards",
      "Competitor tracking",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$299",
    tagline: "Smarter every month.",
    description: "Everything in Starter plus monthly improvements — new pages, blog content, analytics, and ongoing optimization.",
    cta: "Start Growing",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Up to 500-page website",
      "2 blog posts per month",
      "Google Analytics + Search Console",
      "Competitor website analysis",
      "Schema markup + rich snippets",
      "Monthly improvements (pages, keywords, services)",
      "Up to 4 revisions per month",
    ],
    notIncluded: [
      "CRM / lead management integration",
    ],
  },
  {
    id: "authority",
    name: "Authority",
    price: "$499",
    tagline: "Your complete digital presence.",
    description: "The full package — unlimited creative, CRM integration, backlink building, and priority support to power your growth.",
    cta: "Become an Authority",
    featured: false,
    features: [
      "Everything in Growth",
      "Up to 1,500 pages",
      "4 blog posts per month",
      "Backlink building",
      "CRM / lead management integration",
      "Full creative (icons, images, branding)",
      "Priority support (same-day response)",
    ],
    notIncluded: [],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-20 sm:py-24"
      style={{ background: "#F9FAFB" }}
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-overline mb-3">Simple, Transparent Pricing</p>
          <h2
            id="pricing-heading"
            className="text-neutral-900 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            One monthly fee.{" "}
            <span style={{ color: "#1A6B6B" }}>Everything included.</span>
          </h2>
          <p
            className="mt-4 text-neutral-600 leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1.0625rem" }}
          >
            No setup fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Footer note */}
        <p
          className="mt-10 text-center text-neutral-500"
          style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem" }}
        >
          All plans include hosting, SSL, content creation, and a dedicated account manager.
        </p>

        {/* Compare Plans link */}
        <div className="mt-6 text-center">
          <a
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-lg border-2 px-5 py-2.5 text-sm font-semibold transition-all duration-150 hover:bg-brand-teal-50"
            style={{
              fontFamily: "var(--font-heading)",
              borderColor: "#1A6B6B",
              color: "#1A6B6B",
            }}
          >
            Compare All Plans in Detail
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M3 8a.5.5 0 01.5-.5h7.293L8.146 4.854a.5.5 0 11.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L10.793 8.5H3.5A.5.5 0 013 8z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

type Plan = (typeof plans)[number];

function PricingCard({ plan }: { plan: Plan }) {
  const isFeatured = plan.featured;

  return (
    <div
      className="relative flex flex-col rounded-2xl p-6 sm:p-7"
      style={{
        background: isFeatured ? "#1A6B6B" : "#FFFFFF",
        border: isFeatured ? "none" : "1px solid #E5E7EB",
        boxShadow: isFeatured
          ? "0 20px 40px -8px rgb(26 107 107 / 0.35)"
          : "0 4px 6px -1px rgb(0 0 0 / 0.07)",
      }}
    >
      {/* Popular badge */}
      {"badge" in plan && plan.badge && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
          style={{
            background: "#F5A623",
            color: "#111827",
            fontFamily: "var(--font-heading)",
            letterSpacing: "0.05em",
          }}
        >
          {plan.badge}
        </div>
      )}

      {/* Plan name + tagline */}
      <div className="mb-5">
        <p
          className="section-overline mb-1"
          style={{ color: isFeatured ? "#97CDCD" : "#1A6B6B" }}
        >
          {plan.name}
        </p>
        <p
          className="leading-snug"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.0625rem",
            fontWeight: 600,
            color: isFeatured ? "#FFFFFF" : "#1F2937",
          }}
        >
          {plan.tagline}
        </p>
      </div>

      {/* Price */}
      <div className="mb-5 flex items-baseline gap-1">
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "2.75rem",
            fontWeight: 700,
            color: isFeatured ? "#FFFFFF" : "#1F2937",
            lineHeight: 1,
          }}
        >
          {plan.price}
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.9375rem",
            color: isFeatured ? "#97CDCD" : "#6B7280",
          }}
        >
          /month
        </span>
      </div>

      {/* Description */}
      <p
        className="mb-6 leading-relaxed"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.875rem",
          color: isFeatured ? "#C0E1E1" : "#6B7280",
        }}
      >
        {plan.description}
      </p>

      {/* CTA */}
      <CheckoutButton planId={plan.id} label={plan.cta} featured={isFeatured} />

      {/* Feature list */}
      <ul className="flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: isFeatured ? "#E6F3F3" : "#374151",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill={isFeatured ? "#F5A623" : "#1A6B6B"}
              className="mt-0.5 flex-shrink-0"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.354 5.354a.5.5 0 00-.708-.708L7 9.293 5.354 7.646a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
        {plan.notIncluded.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 opacity-50"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: isFeatured ? "#C0E1E1" : "#6B7280",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill={isFeatured ? "#6DB8B8" : "#D1D5DB"}
              className="mt-0.5 flex-shrink-0"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 1a7 7 0 100 14A7 7 0 008 1zM5.354 5.354a.5.5 0 01.708 0L8 7.293l1.938-1.939a.5.5 0 11.708.708L8.707 8l1.939 1.938a.5.5 0 01-.708.708L8 8.707l-1.938 1.939a.5.5 0 01-.708-.708L7.293 8 5.354 6.062a.5.5 0 010-.708z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
