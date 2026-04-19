"use client";

import { useState, type FormEvent } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getSupabase } from "@/lib/supabase-browser";
import { submitToNetlifyForm } from "@/lib/netlify-forms";
import { WhatsAppInlineLink } from "@/components/WhatsAppButton";

/* ─── Plan options for the dropdown ────────────────────────────────── */
const planOptions = [
  "Not sure",
  "Basic",
  "Starter",
  "Growth",
  "Authority",
];

/* ─── Shared label / input styles ─────────────────────────────────── */
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

/* ─── Trust badges ────────────────────────────────────────────────── */
const trustBadges = [
  {
    title: "Free Consultation",
    description: "No pressure, no commitment \u2014 just a friendly chat.",
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

/* ─── Timeline steps ──────────────────────────────────────────────── */
const timelineSteps = [
  {
    step: 1,
    title: "We respond within 24 hours",
    description:
      "Our team reviews your message and gets back to you with next steps.",
  },
  {
    step: 2,
    title: "Quick discovery call",
    description:
      "A brief 15-minute call to understand your business, goals, and preferences.",
  },
  {
    step: 3,
    title: "Your site goes live in 48 hours",
    description:
      "We build and launch your custom website within two business days.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: "",
    planInterest: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const supabase = getSupabase();

      const [supabaseResult] = await Promise.all([
        supabase.from("contacts").insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          business_name: formData.businessName || null,
          message: formData.message || null,
          plan_interest: formData.planInterest || null,
        }),
        submitToNetlifyForm("contact", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.businessName,
          planInterest: formData.planInterest,
          message: formData.message,
        }).catch((err) => {
          console.warn("Netlify form submission failed:", err);
        }),
      ]);

      if (supabaseResult.error) throw supabaseResult.error;
      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

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

                  {/* ── Success state ── */}
                  {submitted ? (
                    <div className="text-center py-12">
                      <div
                        className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                        style={{ background: "#E6F3F3" }}
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M10 16L14 20L22 12"
                            stroke="#1A6B6B"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h4
                        className="text-xl font-bold text-neutral-900 mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Message Sent!
                      </h4>
                      <p
                        className="text-neutral-600 mb-6"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.9375rem",
                        }}
                      >
                        Thanks for reaching out. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            businessName: "",
                            message: "",
                            planInterest: "",
                          });
                        }}
                        className="text-sm font-medium transition-colors hover:underline"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "#1A6B6B",
                        }}
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="contact-name"
                            style={labelStyle}
                            className="block mb-1.5"
                          >
                            Full Name{" "}
                            <span style={{ color: "#EF4444" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="contact-name"
                            name="name"
                            autoComplete="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 placeholder:text-neutral-400 focus:border-[#1A6B6B] focus:ring-2 focus:ring-[#1A6B6B]/20 focus:outline-none"
                            style={inputStyle}
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
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane@mybusiness.com"
                            className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 placeholder:text-neutral-400 focus:border-[#1A6B6B] focus:ring-2 focus:ring-[#1A6B6B]/20 focus:outline-none"
                            style={inputStyle}
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
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                            className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 placeholder:text-neutral-400 focus:border-[#1A6B6B] focus:ring-2 focus:ring-[#1A6B6B]/20 focus:outline-none"
                            style={inputStyle}
                          />
                        </div>

                        {/* Business Name */}
                        <div>
                          <label
                            htmlFor="contact-business"
                            style={labelStyle}
                            className="block mb-1.5"
                          >
                            Business Name
                          </label>
                          <input
                            type="text"
                            id="contact-business"
                            name="businessName"
                            autoComplete="organization"
                            value={formData.businessName}
                            onChange={handleChange}
                            placeholder="Acme Plumbing Co."
                            className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 placeholder:text-neutral-400 focus:border-[#1A6B6B] focus:ring-2 focus:ring-[#1A6B6B]/20 focus:outline-none"
                            style={inputStyle}
                          />
                        </div>

                        {/* Plan Interest */}
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="contact-plan"
                            style={labelStyle}
                            className="block mb-1.5"
                          >
                            Plan Interest
                          </label>
                          <select
                            id="contact-plan"
                            name="planInterest"
                            value={formData.planInterest}
                            onChange={handleChange}
                            className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 appearance-none bg-white focus:border-[#1A6B6B] focus:ring-2 focus:ring-[#1A6B6B]/20 focus:outline-none"
                            style={{
                              ...inputStyle,
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 14px center",
                              paddingRight: "40px",
                            }}
                          >
                            <option value="">Select a plan...</option>
                            {planOptions.map((plan) => (
                              <option key={plan} value={plan}>
                                {plan}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Message -- full width */}
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
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us a bit about your business and what you're looking for..."
                            className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 placeholder:text-neutral-400 resize-vertical focus:border-[#1A6B6B] focus:ring-2 focus:ring-[#1A6B6B]/20 focus:outline-none"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* Error message */}
                      {error && (
                        <div
                          className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {error}
                        </div>
                      )}

                      {/* Submit button */}
                      <div className="mt-6">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-base font-semibold text-white transition-all duration-150 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                          style={{
                            fontFamily: "var(--font-heading)",
                            background: "#1A6B6B",
                            boxShadow:
                              "0 4px 14px 0 rgb(26 107 107 / 0.30)",
                          }}
                        >
                          {submitting ? (
                            <>
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              Sending...
                            </>
                          ) : (
                            <>
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
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* ── Right column: Contact info + Timeline (2/5) ── */}
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
                          href="mailto:seo@sweethomeservices.org"
                          className="font-medium transition-colors hover:underline"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9375rem",
                            color: "#1A6B6B",
                          }}
                        >
                          seo@sweethomeservices.org
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
                          href="tel:+18182306619"
                          className="font-medium transition-colors hover:underline"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9375rem",
                            color: "#1A6B6B",
                          }}
                        >
                          (818) 230-6619
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(37, 211, 102, 0.12)" }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="#25D366"
                          aria-hidden="true"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-neutral-500 text-xs font-medium mb-0.5"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          WhatsApp
                        </p>
                        <WhatsAppInlineLink />
                      </div>
                    </div>

                    {/* Location */}
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
                            d="M9 16.5C9 16.5 14.5 11.5 14.5 7.5C14.5 4.46 12.04 2 9 2C5.96 2 3.5 4.46 3.5 7.5C3.5 11.5 9 16.5 9 16.5Z"
                            stroke="#1A6B6B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="9"
                            cy="7.5"
                            r="2"
                            stroke="#1A6B6B"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-neutral-500 text-xs font-medium mb-0.5"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Location
                        </p>
                        <p
                          className="text-neutral-800 font-medium"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9375rem",
                          }}
                        >
                          Los Angeles, California
                        </p>
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
                          Mon - Fri: 9am - 6pm PT
                        </p>
                        <p
                          className="text-neutral-500"
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.8125rem",
                          }}
                        >
                          Sat: 10am - 2pm PT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What happens next? timeline */}
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
                    What happens next?
                  </h3>

                  <div className="space-y-0">
                    {timelineSteps.map((item, idx) => (
                      <div key={item.step} className="relative flex gap-4">
                        {/* Vertical connector line */}
                        {idx < timelineSteps.length - 1 && (
                          <div
                            className="absolute left-[15px] top-[32px] w-0.5"
                            style={{
                              background: "#D1E8E8",
                              height: "calc(100% - 8px)",
                            }}
                          />
                        )}

                        {/* Step number circle */}
                        <div
                          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                          style={{
                            fontFamily: "var(--font-heading)",
                            background: "#1A6B6B",
                          }}
                        >
                          {item.step}
                        </div>

                        {/* Content */}
                        <div className="pb-6">
                          <p
                            className="text-neutral-900 font-semibold"
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: "0.9375rem",
                            }}
                          >
                            {item.title}
                          </p>
                          <p
                            className="mt-1 text-neutral-500 leading-relaxed"
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.8125rem",
                            }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
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
              href="tel:+18182306619"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition-all duration-150 w-full sm:w-auto"
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
              Call (818) 230-6619
            </a>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {["No setup fees", "No contracts", "Cancel anytime"].map(
                (item) => (
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
                ),
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
