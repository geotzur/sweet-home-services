"use client";

import { useState } from "react";

const pricingFaqs = [
  {
    question: "What's the difference between the plans?",
    answer:
      "Starter gives you a professional website with up to 100 pages, local SEO, monthly performance reports, and blog content — a solid foundation every local business needs. Growth adds monthly improvements, 1 blog post per month, analytics, competitor analysis, up to 500 pages, and up to 2 revisions per month. Authority is the full package: up to 1,500 pages, 4 blog posts per month, backlink building, CRM integration, full creative, and same-day priority support.",
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes. You can change plans at the start of any billing cycle. Upgrades take effect immediately and you'll be prorated for the difference. Downgrades take effect on the next renewal date. There are no penalties for changing plans.",
  },
  {
    question: "Is there a setup fee or long-term contract?",
    answer:
      "No setup fees, ever. No contracts. You pay month-to-month from day one. We earn your business with results — not by trapping you in a 12-month agreement. You can cancel anytime from your account settings.",
  },
  {
    question: "What happens if I cancel?",
    answer:
      "If you cancel, your subscription ends at the next billing date. You keep access to your account until then. Your domain remains yours — we'll give you all your files and transfer any domain names you own. We don't hold your website hostage.",
  },
  {
    question: "Do you offer a money-back guarantee or free trial?",
    answer:
      "We offer a 14-day satisfaction guarantee. If you're not happy with what we've built in the first 14 days, we'll refund your first month — no questions asked. After that, the service is month-to-month and you can cancel anytime.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, Amex, Discover) through our secure Stripe payment processor. We can also accommodate ACH bank transfers for Authority plan customers — contact us to set that up.",
  },
];

/**
 * Pricing-specific FAQ accordion — billing and plan questions.
 * Shares visual language with FaqSection but has pricing-focused content.
 */
export default function PricingFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="pricing-faq"
      className="py-16 sm:py-20"
      style={{ background: "#F9FAFB" }}
      aria-labelledby="pricing-faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="section-overline mb-3">Pricing FAQ</p>
          <h2
            id="pricing-faq-heading"
            className="text-neutral-900 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Billing questions?{" "}
            <span style={{ color: "#1A6B6B" }}>Straight answers.</span>
          </h2>
        </div>

        {/* Accordion */}
        <dl className="space-y-2">
          {pricingFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl overflow-hidden"
                style={{
                  border: "1px solid",
                  borderColor: isOpen ? "#97CDCD" : "#E5E7EB",
                  transition: "border-color 200ms",
                }}
              >
                <dt>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    style={{
                      background: isOpen ? "#E6F3F3" : "#FFFFFF",
                      transition: "background 200ms",
                    }}
                  >
                    <span
                      className="text-neutral-900 leading-snug"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                      }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
                      style={{
                        background: isOpen ? "#1A6B6B" : "#E5E7EB",
                        color: isOpen ? "#FFFFFF" : "#6B7280",
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
                </dt>
                {isOpen && (
                  <dd
                    className="px-5 pb-5 pt-1 text-neutral-700 leading-relaxed"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                    }}
                  >
                    {faq.answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
