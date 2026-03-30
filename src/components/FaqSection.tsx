"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to launch my website?",
    answer:
      "Most websites go live within 48–72 hours after we receive your business information. We handle the design, copywriting, and technical setup. You'll review and approve before we publish.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No contracts. You pay month-to-month and can cancel anytime. We earn your business every month by delivering results — not by locking you in.",
  },
  {
    question: "What do I need to provide to get started?",
    answer:
      "Just the basics: your business name, phone number, address, service areas, and any photos you'd like to use. We write the copy and handle everything else. You can also provide a logo if you have one.",
  },
  {
    question: "How does the SEO actually work?",
    answer:
      "We optimize your site for local search — targeting keywords your customers use like 'plumber in [your city]' or 'hair salon near me.' We set up your Google Business Profile, build citations across local directories, and create content that earns rankings over time. You'll see monthly reports showing your keyword positions and traffic.",
  },
  {
    question: "Can I use my own domain name?",
    answer:
      "Absolutely. You keep ownership of your domain. If you don't have one yet, we'll help you pick and register the right one. We handle all the DNS and hosting setup.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We can either redesign your existing site or build fresh. Either way, we'll audit what you have, preserve your SEO equity, and migrate any content worth keeping. We won't throw away work that's already ranking.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-20 sm:py-24 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="section-overline mb-3">FAQ</p>
          <h2
            id="faq-heading"
            className="text-neutral-900 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Questions? We&apos;ve Got{" "}
            <span style={{ color: "#1A6B6B" }}>Straight Answers.</span>
          </h2>
        </div>

        {/* Accordion */}
        <dl className="space-y-2">
          {faqs.map((faq, index) => {
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
                        fontSize: "1rem",
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
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="currentColor"
                      >
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

        {/* Still have questions */}
        <div
          className="mt-10 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
          style={{ background: "#E6F3F3" }}
        >
          <div className="flex-1">
            <p
              className="text-neutral-900 font-semibold mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Still have questions?
            </p>
            <p
              className="text-neutral-600"
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem" }}
            >
              We&apos;re a real team. Shoot us a message and we&apos;ll reply the same day.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 rounded-lg px-5 py-2.5 font-semibold text-sm transition-colors"
            style={{
              fontFamily: "var(--font-heading)",
              background: "#1A6B6B",
              color: "#FFFFFF",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
