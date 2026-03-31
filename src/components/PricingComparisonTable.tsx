"use client";

import React, { useState } from "react";

type CellValue = string | boolean | null;

interface FeatureRow {
  label: string;
  basic: CellValue;
  starter: CellValue;
  growth: CellValue;
  authority: CellValue;
  tooltip?: string;
}

interface FeatureCategory {
  name: string;
  features: FeatureRow[];
}

const tiers = [
  { id: "basic", name: "Basic", price: "$89/mo", color: "#1A6B6B" },
  { id: "starter", name: "Starter", price: "$149/mo", color: "#1A6B6B" },
  { id: "growth", name: "Growth", price: "$299/mo", color: "#1A6B6B", featured: true },
  { id: "authority", name: "Authority", price: "$499/mo", color: "#1A6B6B" },
];

const categories: FeatureCategory[] = [
  {
    name: "Website & Design",
    features: [
      { label: "Website pages", basic: "3 pages", starter: "5 pages", growth: "Up to 15 pages", authority: "Unlimited" },
      { label: "Mobile-responsive design", basic: true, starter: true, growth: true, authority: true },
      { label: "Custom branded design", basic: null, starter: true, growth: true, authority: true },
      { label: "SSL certificate + hosting", basic: true, starter: true, growth: true, authority: true },
      { label: "Contact form + click-to-call", basic: true, starter: true, growth: true, authority: true },
      { label: "Monthly revisions", basic: null, starter: "1 per month", growth: "Unlimited", authority: "Unlimited" },
    ],
  },
  {
    name: "Local SEO",
    features: [
      { label: "Google Business Profile claim", basic: true, starter: true, growth: true, authority: true },
      { label: "Basic on-page SEO", basic: true, starter: true, growth: true, authority: true },
      { label: "Local keyword optimization", basic: null, starter: true, growth: true, authority: true },
      { label: "Monthly keyword ranking report", basic: null, starter: true, growth: true, authority: true },
      { label: "Schema markup + rich snippets", basic: null, starter: null, growth: true, authority: true },
      { label: "Competitor rank tracking", basic: null, starter: null, growth: true, authority: true },
      { label: "Backlink building", basic: null, starter: null, growth: null, authority: true },
    ],
  },
  {
    name: "Content",
    features: [
      { label: "Copywriting (all pages)", basic: null, starter: true, growth: true, authority: true },
      { label: "Blog posts per month", basic: null, starter: null, growth: "2 posts", authority: "4 posts" },
      { label: "Review management + responses", basic: null, starter: null, growth: true, authority: true },
      { label: "Reputation campaigns", basic: null, starter: null, growth: null, authority: true },
    ],
  },
  {
    name: "Analytics & Ads",
    features: [
      { label: "Google Analytics dashboard", basic: null, starter: null, growth: true, authority: true },
      { label: "Google Ads management", basic: null, starter: null, growth: null, authority: "Up to $1k/mo" },
    ],
  },
  {
    name: "Support",
    features: [
      { label: "Dedicated account manager", basic: null, starter: true, growth: true, authority: true },
      { label: "Response time", basic: null, starter: "2 business days", growth: "1 business day", authority: "Same day" },
      { label: "Quarterly strategy call", basic: null, starter: null, growth: null, authority: true },
    ],
  },
];

function CheckIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="#1A6B6B"
      aria-label="Included"
      role="img"
    >
      <path
        fillRule="evenodd"
        d="M9 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm3.53 5.97a.75.75 0 00-1.06-1.06L8.25 10.44 6.53 8.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l3.75-3.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-label="Not included"
      role="img"
    >
      <path
        d="M5 9h8"
        stroke="#D1D5DB"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CellContent({ value, featured }: { value: CellValue; featured?: boolean }) {
  if (value === true) return <CheckIcon />;
  if (value === null || value === false) return <DashIcon />;

  return (
    <span
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.8125rem",
        fontWeight: 500,
        color: featured ? "#E6F3F3" : "#374151",
      }}
    >
      {value}
    </span>
  );
}

/**
 * Feature comparison table — side-by-side breakdown across all 3 tiers.
 *
 * Desktop: sticky column headers, feature rows grouped by category.
 * Mobile: each tier rendered as a collapsible card with its own feature list.
 *
 * Design:
 *   - Growth (featured) column has teal bg header + light teal row tint
 *   - Category headers: bold, small caps, full-width gray rule
 *   - Alternating row shading for readability
 */
export default function PricingComparisonTable() {
  const [openMobileTier, setOpenMobileTier] = useState<string | null>("growth");

  return (
    <section
      id="compare"
      className="py-16 sm:py-20"
      style={{ background: "#FFFFFF" }}
      aria-label="Plan comparison"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-overline mb-3">Compare Plans</p>
          <h2
            className="text-neutral-900 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Everything that&apos;s{" "}
            <span style={{ color: "#1A6B6B" }}>included in each plan</span>
          </h2>
        </div>

        {/* ── Desktop table (md+) ── */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
          <table className="w-full border-collapse" style={{ minWidth: "640px" }}>
            <thead>
              <tr style={{ background: "#F9FAFB" }}>
                {/* Feature label column */}
                <th
                  scope="col"
                  className="sticky left-0 py-4 pl-6 pr-4 text-left"
                  style={{ background: "#F9FAFB", width: "34%" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "#6B7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Feature
                  </span>
                </th>

                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    scope="col"
                    className="py-4 px-5 text-center"
                    style={{
                      background: tier.featured ? "#1A6B6B" : "#F9FAFB",
                      width: "22%",
                    }}
                  >
                    <div className="flex flex-col items-center gap-0.5">
                      {tier.featured && (
                        <span
                          className="mb-1 rounded-full px-3 py-0.5 text-xs font-bold"
                          style={{
                            background: "#F5A623",
                            color: "#111827",
                            fontFamily: "var(--font-heading)",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Most Popular
                        </span>
                      )}
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: tier.featured ? "#FFFFFF" : "#1F2937",
                        }}
                      >
                        {tier.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.8125rem",
                          color: tier.featured ? "#97CDCD" : "#6B7280",
                        }}
                      >
                        {tier.price}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {categories.map((cat) => (
                <React.Fragment key={`cat-${cat.name}`}>
                  {/* Category header row */}
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-3 border-t"
                      style={{ background: "#F3F4F6", borderColor: "#E5E7EB" }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#374151",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {cat.name}
                      </span>
                    </td>
                  </tr>

                  {/* Feature rows */}
                  {cat.features.map((row, rowIdx) => {
                    const isEven = rowIdx % 2 === 0;
                    return (
                      <tr
                        key={row.label}
                        style={{ background: isEven ? "#FFFFFF" : "#FAFAFA" }}
                      >
                        {/* Feature label */}
                        <td
                          className="sticky left-0 py-3.5 pl-6 pr-4 border-t"
                          style={{
                            background: isEven ? "#FFFFFF" : "#FAFAFA",
                            borderColor: "#F3F4F6",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.875rem",
                              color: "#374151",
                            }}
                          >
                            {row.label}
                          </span>
                        </td>

                        {/* Tier cells */}
                        {[
                          { key: "basic", value: row.basic },
                          { key: "starter", value: row.starter },
                          { key: "growth", value: row.growth, featured: true },
                          { key: "authority", value: row.authority },
                        ].map(({ key, value, featured }) => (
                          <td
                            key={key}
                            className="py-3.5 px-5 text-center border-t"
                            style={{
                              background: featured
                                ? isEven
                                  ? "#EEF8F8"
                                  : "#E6F3F3"
                                : isEven
                                ? "#FFFFFF"
                                : "#FAFAFA",
                              borderColor: "#F3F4F6",
                            }}
                          >
                            <div className="flex items-center justify-center">
                              <CellContent value={value} featured={featured} />
                            </div>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}

              {/* CTA row */}
              <tr style={{ background: "#F9FAFB" }}>
                <td
                  className="py-5 pl-6 pr-4 border-t"
                  style={{ borderColor: "#E5E7EB" }}
                />
                {tiers.map((tier) => (
                  <td
                    key={tier.id}
                    className="py-5 px-5 text-center border-t"
                    style={{
                      background: tier.featured ? "#E6F3F3" : "#F9FAFB",
                      borderColor: "#E5E7EB",
                    }}
                  >
                    <a
                      href="#pricing-cards"
                      className="inline-block rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors"
                      style={{
                        fontFamily: "var(--font-heading)",
                        background: tier.featured ? "#1A6B6B" : "transparent",
                        color: tier.featured ? "#FFFFFF" : "#1A6B6B",
                        border: tier.featured ? "none" : "1.5px solid #1A6B6B",
                      }}
                    >
                      {tier.featured ? "Get Started" : `Choose ${tier.name}`}
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── Mobile accordion (< md) ── */}
        <div className="md:hidden space-y-3">
          {tiers.map((tier) => {
            const isOpen = openMobileTier === tier.id;
            return (
              <div
                key={tier.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  border: tier.featured ? "2px solid #1A6B6B" : "1px solid #E5E7EB",
                }}
              >
                {/* Accordion trigger */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-3 px-5 py-4"
                  onClick={() => setOpenMobileTier(isOpen ? null : tier.id)}
                  aria-expanded={isOpen}
                  style={{
                    background: tier.featured ? "#1A6B6B" : "#F9FAFB",
                  }}
                >
                  <div className="flex flex-col items-start">
                    {tier.featured && (
                      <span
                        className="mb-1 rounded-full px-2.5 py-0.5 text-xs font-bold"
                        style={{
                          background: "#F5A623",
                          color: "#111827",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        Most Popular
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: tier.featured ? "#FFFFFF" : "#1F2937",
                      }}
                    >
                      {tier.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        color: tier.featured ? "#97CDCD" : "#6B7280",
                      }}
                    >
                      {tier.price}
                    </span>
                  </div>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200"
                    style={{
                      background: tier.featured ? "rgba(255,255,255,0.15)" : "#E5E7EB",
                      color: tier.featured ? "#FFFFFF" : "#6B7280",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M6 8.707L1.646 4.354a.5.5 0 01.708-.708L6 7.293l3.646-3.647a.5.5 0 01.708.708L6 8.707z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                {/* Feature list */}
                {isOpen && (
                  <div className="px-5 py-4 space-y-0">
                    {categories.map((cat) => (
                      <div key={cat.name} className="mb-4">
                        <p
                          className="mb-2 pb-1 border-b"
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "0.6875rem",
                            fontWeight: 700,
                            color: "#9CA3AF",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            borderColor: "#F3F4F6",
                          }}
                        >
                          {cat.name}
                        </p>
                        <ul className="space-y-2.5">
                          {cat.features.map((row) => {
                            const val =
                              tier.id === "basic"
                                ? row.basic
                                : tier.id === "starter"
                                ? row.starter
                                : tier.id === "growth"
                                ? row.growth
                                : row.authority;
                            if (val === null || val === false) return null;
                            return (
                              <li
                                key={row.label}
                                className="flex items-start gap-2.5"
                              >
                                <CheckIcon size={15} />
                                <span
                                  style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.875rem",
                                    color: "#374151",
                                  }}
                                >
                                  {val === true ? row.label : `${row.label}: ${val}`}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}

                    {/* Mobile CTA */}
                    <a
                      href="#pricing-cards"
                      className="mt-4 block w-full rounded-xl px-5 py-3 text-center font-semibold text-sm"
                      style={{
                        fontFamily: "var(--font-heading)",
                        background: tier.featured ? "#1A6B6B" : "transparent",
                        color: tier.featured ? "#FFFFFF" : "#1A6B6B",
                        border: tier.featured ? "none" : "1.5px solid #1A6B6B",
                      }}
                    >
                      {tier.featured ? "Get Started with Growth" : `Choose ${tier.name}`}
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
