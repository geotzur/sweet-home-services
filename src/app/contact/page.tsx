import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Sweet Home Services",
  description:
    "Get in touch with Sweet Home Services. Free consultation, no contracts. Let us help your local business get found on Google.",
};

/* ─── Business type options for the dropdown ─────────────────────── */
const businessTypes = [
  "Contractor / Home Services",
  "Salon / Spa / Beauty",
  "Medical / Dental",
  "Restaurant / Food Service",
  "Automotive / Repair",
  "Legal / Professional Services",
  "Real Estate",
  "Fitness / Wellness",
  "Other",
];

/* ─── Trust badges data ──────────────────────────────────────────── */
const trustBadges = [
  {
    title: "Free Consultation",
    description: "No pressure, no commitment — just a friendly chat.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="14" fill="#E6F3F3" />
        <path
          d="M10 14.5L13 17.5L18 11.5"
          stroke="#1A6B6B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "No Contracts",
    description: "Month-to-month plans. Cancel anytime, no questions.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="14" fill="#FEF8EE" />
        <path
          d="M9 10H19M9 14H15M9 18H17"
          stroke="#B36B12"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "48-Hour Launch",
    description: "Your site goes live within two business days.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="14" fill="#E6F3F3" />
        <circle
          cx="14"
          cy="14"
          r="6"
          stroke="#1A6B6B"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M14 11V14.5L16 16"
          stroke="#1A6B6B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

/* ─── Shared label styles ────────────────────────────────────────── */
const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "#1F2937",
};

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.9375rem",
  borderColor: "#D1D5DB",
  color: "#1F2937",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-16 sm:py-20"
          aria-label="Contact hero"
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 0%, #C0E1E1 0%, transparent 70%)",
            }}
          />

          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="section-overline mb-4">Get In Touch</p>
            <h1
              className="text-neutral-900 leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
              }}
            >
              Let&apos;s Get Your Business{" "}
              <span style={{ color: "#1A6B6B" }}>Found Online</span>
            </h1>
            <p
              className="mt-4 text-neutral-600 leading-relaxed mx-auto"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                maxWidth: "520px",
              }}
            >
              Have a question or ready to get started? Fill out the form and
              we&apos;ll get back to you within a few hours.
            </p>
          </div>
        </section>

        {/* ── Contact Form + Info ─────────────────────────────────── */}
        <section
          className="py-12 sm:py-16"
          style={{ background: "#F9FAFB" }}
          aria-labelledby="contact-form-heading"
        >
          <h2 id="contact-form-heading" className="sr-only">
            Contact form and information
          </h2>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
              {/* ── Left column: Form (3/5) ── */}
              <div className="lg:col-span-3">
                <div
                  className="rounded-2xl border p-6 sm:p-8 lg:p-10"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "#E5E7EB",
                    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.04)",
                  }}
                >
                  <h3
                    className="text-neutral-900 mb-6"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                    }}
                  >
                    Send Us a Message
                  </h3>

                  <form action="#" method="POST" noValidate>
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          style={labelStyle}
                          className="block mb-1.5"
                        >
                          Full Name <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          autoComplete="name"
                          required
                          placeholder="Jane Smith"
                          className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 placeholder:text-neutral-400"
                          style={{
                            ...inputStyle,
                            outline: "none",
                          }}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          style={labelStyle}
                          className="block mb-1.5"
                        >
                          Email Address{" "}
                          <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          autoComplete="email"
                          required
                          placeholder="jane@mybusiness.com"
                          className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 placeholder:text-neutral-400"
                          style={{
                            ...inputStyle,
                            outline: "none",
                          }}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="contact-phone"
                          style={labelStyle}
                          className="block mb-1.5"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          autoComplete="tel"
                          placeholder="(555) 123-4567"
                          className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 placeholder:text-neutral-400"
                          style={{
                            ...inputStyle,
                            outline: "none",
                          }}
                        />
                      </div>

                      {/* Business Type */}
                      <div>
                        <label
                          htmlFor="contact-business-type"
                          style={labelStyle}
                          className="block mb-1.5"
                        >
                          Business Type{" "}
                          <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <select
                          id="contact-business-type"
                          name="businessType"
                          required
                          defaultValue=""
                          className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 appearance-none bg-white"
                          style={{
                            ...inputStyle,
                            outline: "none",
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 14px center",
                            paddingRight: "40px",
                          }}
                        >
                          <option value="" disabled>
                            Select your industry...
                          </option>
                          {businessTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message — full width */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="contact-message"
                          style={labelStyle}
                          className="block mb-1.5"
                        >
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          placeholder="Tell us a bit about your business and what you're looking for..."
                          className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 placeholder:text-neutral-400 resize-vertical"
                          style={{
                            ...inputStyle,
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>

                    {/* Submit button */}
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-base font-semibold text-white transition-all duration-150 w-full sm:w-auto"
                        style={{
                          fontFamily: "var(--font-heading)",
                          background: "#1A6B6B",
                          boxShadow: "0 4px 14px 0 rgb(26 107 107 / 0.30)",
                        }}
                      >
                        Send Message
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M1.5 1.5L14.5 8L1.5 14.5V9L10 8L1.5 7V1.5Z" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* ── Right column: Contact info + Map (2/5) ── */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact info card */}
                <div
                  className="rounded-2xl border p-6 sm:p-8"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "#E5E7EB",
                    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.04)",
                  }}
                >
                  <h3
                    className="text-neutral-900 mb-6"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                    }}
                  >
                    Contact Information
                  </h3>

                  <div className="space-y-5">
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "#E6F3F3" }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          aria-hidden="true"
                        >
                          <rect
                            x="1"
                            y="3"
                            width="16"
                            height="12"
                            rx="2"
                            stroke="#1A6B6B"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M1 5L9 10L17 5"
                            stroke="#1A6B6B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-neutral-500 text-xs font-medium mb-0.5"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Email
                        </p>
                        <a
                          href="mailto:hello@sweethomeservices.org"
                          className="font-medium transition-colors hover:underline"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9375rem",
                            color: "#1A6B6B",
                          }}
                        >
                          hello@sweethomeservices.org
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "#E6F3F3" }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.5 3.5C2.5 2.95 2.95 2.5 3.5 2.5H6.5L8 6L6.25 7.25C7.15 9.05 8.95 10.85 10.75 11.75L12 10L15.5 11.5V14.5C15.5 15.05 15.05 15.5 14.5 15.5C7.87 15.5 2.5 10.13 2.5 3.5Z"
                            stroke="#1A6B6B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-neutral-500 text-xs font-medium mb-0.5"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Phone
                        </p>
                        <a
                          href="tel:+18005551234"
                          className="font-medium transition-colors hover:underline"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9375rem",
                            color: "#1A6B6B",
                          }}
                        >
                          (800) 555-1234
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "#E6F3F3" }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            cx="9"
                            cy="9"
                            r="7"
                            stroke="#1A6B6B"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M9 5V9.5L12 11"
                            stroke="#1A6B6B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-neutral-500 text-xs font-medium mb-0.5"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Business Hours
                        </p>
                        <p
                          className="text-neutral-800 font-medium"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9375rem",
                          }}
                        >
                          Mon - Fri: 9am - 6pm EST
                        </p>
                        <p
                          className="text-neutral-500"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.8125rem",
                          }}
                        >
                          Sat: 10am - 2pm EST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder card */}
                <div
                  className="rounded-2xl border overflow-hidden"
                  style={{
                    borderColor: "#E5E7EB",
                    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.04)",
                  }}
                >
                  <div
                    className="relative flex items-center justify-center"
                    style={{
                      background: "#E6F3F3",
                      height: "200px",
                    }}
                    role="img"
                    aria-label="Map showing service area across the United States"
                  >
                    {/* Map illustration */}
                    <svg
                      width="120"
                      height="80"
                      viewBox="0 0 120 80"
                      fill="none"
                      aria-hidden="true"
                    >
                      {/* Simplified US shape */}
                      <path
                        d="M10 30C10 30 15 20 30 18C45 16 55 22 65 20C75 18 85 15 95 20C105 25 110 30 110 35C110 40 108 50 100 55C92 60 80 58 70 60C60 62 50 58 40 55C30 52 20 50 15 45C10 40 10 35 10 30Z"
                        fill="#1A6B6B"
                        opacity="0.2"
                        stroke="#1A6B6B"
                        strokeWidth="1.5"
                      />
                      {/* Location pins */}
                      <circle cx="35" cy="35" r="4" fill="#F5A623" />
                      <circle cx="60" cy="30" r="4" fill="#F5A623" />
                      <circle cx="85" cy="35" r="4" fill="#F5A623" />
                      <circle cx="50" cy="45" r="4" fill="#1A6B6B" />
                      <circle cx="75" cy="48" r="4" fill="#1A6B6B" />
                      {/* Pulse ring on center pin */}
                      <circle
                        cx="60"
                        cy="30"
                        r="8"
                        stroke="#F5A623"
                        strokeWidth="1"
                        opacity="0.4"
                        fill="none"
                      />
                    </svg>
                    <p
                      className="absolute bottom-3 text-center w-full text-sm font-medium"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "#1A6B6B",
                      }}
                    >
                      Serving local businesses nationwide
                    </p>
                  </div>
                </div>

                {/* Quick response badge */}
                <div
                  className="rounded-2xl border p-5 flex items-center gap-4"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "#E5E7EB",
                    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.04)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#FEF8EE" }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M11 2L13.5 8H20L14.5 12L17 19L11 14.5L5 19L7.5 12L2 8H8.5L11 2Z"
                        fill="#F5A623"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-neutral-900 font-semibold"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "0.9375rem",
                      }}
                    >
                      Average response time: 2 hours
                    </p>
                    <p
                      className="text-neutral-500"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                      }}
                    >
                      We respond to every inquiry personally
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Badges ────────────────────────────────────────── */}
        <section
          className="py-14 sm:py-16 bg-white"
          aria-label="Trust signals"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-8">
              {trustBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-3">{badge.icon}</div>
                  <h3
                    className="text-neutral-900 mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1rem",
                      fontWeight: 700,
                    }}
                  >
                    {badge.title}
                  </h3>
                  <p
                    className="text-neutral-500 leading-relaxed"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                    }}
                  >
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────────────── */}
        <section
          className="py-16 sm:py-20"
          style={{ background: "#1A6B6B" }}
          aria-labelledby="contact-cta-heading"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2
              id="contact-cta-heading"
              className="text-white leading-tight mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Prefer to Talk?
            </h2>
            <p
              className="mb-8 leading-relaxed mx-auto"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                color: "#97CDCD",
                maxWidth: "440px",
              }}
            >
              Skip the form and book a free 15-minute call. We&apos;ll walk you
              through everything and answer any questions.
            </p>
            <a
              href="tel:+18005551234"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition-all duration-150"
              style={{
                fontFamily: "var(--font-heading)",
                background: "#F5A623",
                color: "#111827",
                boxShadow: "0 4px 20px 0 rgb(245 166 35 / 0.40)",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2.5 3.5C2.5 2.95 2.95 2.5 3.5 2.5H6.5L8 6L6.25 7.25C7.15 9.05 8.95 10.85 10.75 11.75L12 10L15.5 11.5V14.5C15.5 15.05 15.05 15.5 14.5 15.5C7.87 15.5 2.5 10.13 2.5 3.5Z" />
              </svg>
              Call (800) 555-1234
            </a>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                "No setup fees",
                "No contracts",
                "Cancel anytime",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm flex items-center gap-1.5"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: "#97CDCD",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.5 7L6 9.5L10.5 4.5"
                      stroke="#97CDCD"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
