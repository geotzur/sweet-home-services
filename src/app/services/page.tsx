import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — Sweet Home Services",
  description:
    "Custom website design, local SEO, Google Business Profile setup, content creation, performance monitoring, and ongoing support for local businesses.",
  openGraph: {
    title: "Our Services — Sweet Home Services",
    description:
      "Everything your local business needs to get found online. From custom websites to SEO and beyond.",
  },
};

/* ─── Service Data ───────────────────────────────────────────────── */

const services = [
  {
    title: "Custom Website Design",
    description:
      "A stunning, mobile-first website built specifically for your business. Fast load times, intuitive navigation, and conversion-optimized layouts that turn visitors into customers.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        {/* Monitor */}
        <rect
          x="4"
          y="6"
          width="32"
          height="22"
          rx="3"
          stroke="#1A6B6B"
          strokeWidth="2"
          fill="#E6F3F3"
        />
        {/* Screen content lines */}
        <rect x="8" y="11" width="14" height="2" rx="1" fill="#1A6B6B" />
        <rect x="8" y="16" width="10" height="2" rx="1" fill="#97CDCD" />
        <rect x="8" y="21" width="12" height="2" rx="1" fill="#97CDCD" />
        {/* Color swatch */}
        <rect x="26" y="11" width="6" height="6" rx="1.5" fill="#F5A623" />
        {/* Stand */}
        <line
          x1="20"
          y1="28"
          x2="20"
          y2="34"
          stroke="#1A6B6B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="34"
          x2="26"
          y2="34"
          stroke="#1A6B6B"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Local SEO Optimization",
    description:
      "Dominate local search results with targeted keyword strategies, optimized meta data, schema markup, and citation building — so customers in your area find you first.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        {/* Magnifying glass */}
        <circle
          cx="18"
          cy="18"
          r="10"
          stroke="#1A6B6B"
          strokeWidth="2"
          fill="#E6F3F3"
        />
        {/* Handle */}
        <line
          x1="25.5"
          y1="25.5"
          x2="34"
          y2="34"
          stroke="#1A6B6B"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Up arrow inside glass */}
        <path
          d="M18 23V13M18 13L14 17M18 13L22 17"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Google Business Profile Setup",
    description:
      "We claim, verify, and fully optimize your Google Business Profile with photos, service areas, business hours, and posts — making you stand out in Maps and local pack results.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        {/* Map pin */}
        <path
          d="M20 4C13.4 4 8 9.1 8 15.3C8 23.5 20 36 20 36C20 36 32 23.5 32 15.3C32 9.1 26.6 4 20 4Z"
          stroke="#1A6B6B"
          strokeWidth="2"
          fill="#E6F3F3"
        />
        {/* Inner circle */}
        <circle cx="20" cy="15" r="5" fill="#1A6B6B" />
        {/* Check mark */}
        <path
          d="M17 15L19 17L23 13"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Star */}
        <circle cx="30" cy="8" r="3" fill="#F5A623" />
      </svg>
    ),
  },
  {
    title: "Content Creation & Blog",
    description:
      "Engaging, SEO-friendly blog posts and service pages written for your audience. We research topics your customers are searching for and publish content that builds authority and drives traffic.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        {/* Document */}
        <rect
          x="8"
          y="4"
          width="24"
          height="32"
          rx="3"
          stroke="#1A6B6B"
          strokeWidth="2"
          fill="#E6F3F3"
        />
        {/* Text lines */}
        <rect x="13" y="10" width="14" height="2" rx="1" fill="#1A6B6B" />
        <rect x="13" y="15" width="10" height="2" rx="1" fill="#97CDCD" />
        <rect x="13" y="20" width="14" height="2" rx="1" fill="#97CDCD" />
        <rect x="13" y="25" width="8" height="2" rx="1" fill="#97CDCD" />
        {/* Pencil accent */}
        <path
          d="M29 28L33 24L36 27L32 31L29 32L29 28Z"
          fill="#F5A623"
          stroke="#F5A623"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Performance Monitoring & Reports",
    description:
      "Monthly reports covering traffic, rankings, conversions, and site health. We track what matters and provide clear, actionable insights so you always know your ROI.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        {/* Chart background */}
        <rect
          x="4"
          y="4"
          width="32"
          height="32"
          rx="3"
          stroke="#1A6B6B"
          strokeWidth="2"
          fill="#E6F3F3"
        />
        {/* Bars */}
        <rect x="10" y="22" width="4" height="10" rx="1" fill="#97CDCD" />
        <rect x="18" y="16" width="4" height="16" rx="1" fill="#1A6B6B" />
        <rect x="26" y="10" width="4" height="22" rx="1" fill="#1A6B6B" />
        {/* Trend line */}
        <path
          d="M10 24L18 18L26 12L32 8"
          stroke="#F5A623"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dot at end */}
        <circle cx="32" cy="8" r="2.5" fill="#F5A623" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support & Updates",
    description:
      "Security patches, plugin updates, content edits, and priority support whenever you need it. Your site stays fast, secure, and always up to date — with no extra charges.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        {/* Shield */}
        <path
          d="M20 3L6 10V19C6 27.5 12 34.5 20 37C28 34.5 34 27.5 34 19V10L20 3Z"
          stroke="#1A6B6B"
          strokeWidth="2"
          fill="#E6F3F3"
        />
        {/* Check */}
        <path
          d="M14 20L18 24L26 16"
          stroke="#1A6B6B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Amber sparkle */}
        <circle cx="30" cy="8" r="2.5" fill="#F5A623" />
        <circle cx="33" cy="12" r="1.5" fill="#F5A623" opacity="0.6" />
      </svg>
    ),
  },
];

/* ─── Process Steps ──────────────────────────────────────────────── */

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and local market to craft the perfect strategy.",
  },
  {
    number: "02",
    title: "Build & Optimize",
    description:
      "Our team designs your site, writes your content, and sets up your SEO foundation.",
  },
  {
    number: "03",
    title: "Launch & Grow",
    description:
      "Your site goes live and we continuously optimize, report, and improve your rankings.",
  },
];

/* ─── Page Component ─────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      <main id="main-content" className="pt-16">
        {/* ─── Hero Section ──────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "#1A6B6B" }}
          aria-label="Services hero"
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
            style={{ background: "#F5A623" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10"
            style={{ background: "#F5A623" }}
            aria-hidden="true"
          />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
            <div className="max-w-3xl mx-auto text-center">
              {/* Overline */}
              <p
                className="mb-4 text-xs font-bold tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#F5A623",
                }}
              >
                What We Do
              </p>

              {/* Headline */}
              <h1
                className="text-white leading-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                }}
              >
                Everything Your Local Business Needs to{" "}
                <span className="relative inline-block">
                  Get Found Online
                  {/* Amber underline */}
                  <span
                    className="absolute left-0 right-0 h-1 rounded-full"
                    style={{
                      background: "#F5A623",
                      bottom: "-4px",
                    }}
                    aria-hidden="true"
                  />
                </span>
              </h1>

              {/* Subhead */}
              <p
                className="mt-6 leading-relaxed mx-auto"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.125rem",
                  lineHeight: "1.75",
                  color: "#C0E1E1",
                  maxWidth: "560px",
                }}
              >
                From custom website design to local SEO and ongoing
                support — we handle the digital side so you can focus
                on running your business.
              </p>

              {/* Hero CTA */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-all duration-150 w-full sm:w-auto"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "#F5A623",
                    color: "#111827",
                    boxShadow: "0 4px 14px 0 rgb(245 166 35 / 0.35)",
                  }}
                >
                  View Plans & Pricing
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
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-3.5 text-base font-semibold transition-all duration-150 w-full sm:w-auto"
                  style={{
                    fontFamily: "var(--font-heading)",
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "#FFFFFF",
                  }}
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
            <svg
              viewBox="0 0 1440 56"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-10 sm:h-14"
            >
              <path
                d="M0 56V20C240 0 480 0 720 20C960 40 1200 40 1440 20V56H0Z"
                fill="#F9FAFB"
              />
            </svg>
          </div>
        </section>

        {/* ─── Services Grid ─────────────────────────────────────── */}
        <section
          className="relative"
          style={{ background: "#F9FAFB" }}
          aria-labelledby="services-heading"
        >
          {/* Decorative dot pattern */}
          <div
            className="absolute top-8 right-8 w-48 h-48 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, #1A6B6B 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
            {/* Section heading */}
            <div className="text-center mb-14 sm:mb-16">
              <p
                className="mb-3 text-xs font-bold tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#1A6B6B",
                }}
              >
                Our Services
              </p>
              <h2
                id="services-heading"
                className="text-neutral-900"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                }}
              >
                A Complete Digital Presence
              </h2>
              <p
                className="mt-4 mx-auto leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.0625rem",
                  color: "#6B7280",
                  maxWidth: "520px",
                }}
              >
                Six integrated services that work together to put your
                business in front of local customers.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group relative bg-white rounded-2xl p-7 sm:p-8 transition-all duration-200 hover:-translate-y-1"
                  style={{
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.05)",
                  }}
                >
                  {/* Card top accent line */}
                  <div
                    className="absolute top-0 left-8 right-8 h-0.5 rounded-b-full"
                    style={{
                      background:
                        index % 2 === 0
                          ? "#1A6B6B"
                          : "#F5A623",
                    }}
                    aria-hidden="true"
                  />

                  {/* Icon container */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "#E6F3F3" }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-neutral-900 mb-3"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "#6B7280",
                      lineHeight: "1.7",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Subtle number */}
                  <span
                    className="absolute top-5 right-6 font-bold select-none"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "3rem",
                      color: "#F3F4F6",
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How We Work Process ───────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "#FFFFFF" }}
          aria-labelledby="process-heading"
        >
          {/* Decorative corner */}
          <div
            className="absolute top-0 left-0 w-64 h-64 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at top left, #E6F3F3 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
            <div className="text-center mb-14 sm:mb-16">
              <p
                className="mb-3 text-xs font-bold tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#1A6B6B",
                }}
              >
                Our Process
              </p>
              <h2
                id="process-heading"
                className="text-neutral-900"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                }}
              >
                Simple. Transparent. Effective.
              </h2>
              <p
                className="mt-4 mx-auto leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.0625rem",
                  color: "#6B7280",
                  maxWidth: "480px",
                }}
              >
                Three straightforward steps from sign-up to showing up
                in local search results.
              </p>
            </div>

            {/* Process steps */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative text-center">
                  {/* Connector line (between cards on desktop) */}
                  {index < processSteps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5"
                      style={{
                        background:
                          "linear-gradient(to right, #1A6B6B, transparent)",
                        opacity: 0.2,
                      }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Number circle */}
                  <div
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg, #1A6B6B 0%, #155656 100%)",
                      boxShadow: "0 4px 14px 0 rgb(26 107 107 / 0.3)",
                    }}
                  >
                    <span
                      className="text-white"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="text-neutral-900 mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mx-auto leading-relaxed"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "#6B7280",
                      lineHeight: "1.7",
                      maxWidth: "300px",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── What's Included Strip ─────────────────────────────── */}
        <section
          className="relative"
          style={{ background: "#1F2937" }}
          aria-labelledby="included-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
            <h2
              id="included-heading"
              className="text-center text-white mb-10"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
              }}
            >
              Included With{" "}
              <span style={{ color: "#F5A623" }}>Every Plan</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: "SSL Security Certificate",
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        stroke="#F5A623"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7 11V7a5 5 0 0110 0v4"
                        stroke="#F5A623"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Mobile-Responsive Design",
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="6"
                        y="2"
                        width="12"
                        height="20"
                        rx="2"
                        stroke="#F5A623"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="10"
                        y1="19"
                        x2="14"
                        y2="19"
                        stroke="#F5A623"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Fast Hosting & CDN",
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                        stroke="#F5A623"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Dedicated Account Manager",
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="4"
                        stroke="#F5A623"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M4 21c0-3.314 3.582-6 8-6s8 2.686 8 6"
                        stroke="#F5A623"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl px-5 py-4"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(245,166,35,0.12)" }}
                  >
                    {item.icon}
                  </div>
                  <span
                    className="text-white font-medium"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Bottom CTA Section ────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "#F9FAFB" }}
          aria-label="Call to action"
        >
          {/* Decorative gradient blob */}
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #1A6B6B 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div
              className="relative mx-auto max-w-2xl rounded-3xl px-8 py-14 sm:px-14 sm:py-16 text-center"
              style={{
                background: "#1A6B6B",
                boxShadow: "0 25px 50px -12px rgb(26 107 107 / 0.35)",
              }}
            >
              {/* Decorative corner circles */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-15"
                style={{ background: "#F5A623" }}
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-15"
                style={{ background: "#F5A623" }}
                aria-hidden="true"
              />

              <h2
                className="text-white relative"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                }}
              >
                Ready to Grow Your Local Business?
              </h2>
              <p
                className="mt-4 mx-auto relative leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.0625rem",
                  lineHeight: "1.7",
                  color: "#C0E1E1",
                  maxWidth: "440px",
                }}
              >
                Get a custom website with built-in SEO, starting at
                $149/month. No contracts, no setup fees.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 relative">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-base font-semibold transition-all duration-150 w-full sm:w-auto"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "#F5A623",
                    color: "#111827",
                    boxShadow: "0 4px 14px 0 rgb(245 166 35 / 0.35)",
                  }}
                >
                  Get Started Today
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
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-7 py-3.5 text-base font-semibold transition-all duration-150 w-full sm:w-auto"
                  style={{
                    fontFamily: "var(--font-heading)",
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "#FFFFFF",
                  }}
                >
                  Schedule a Call
                </Link>
              </div>

              {/* Trust line */}
              <p
                className="mt-6 flex items-center justify-center gap-1.5 relative"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "#97CDCD",
                }}
              >
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
                No contracts. Cancel anytime. 14-day free trial.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
