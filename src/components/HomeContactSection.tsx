"use client";

import { useState, type FormEvent } from "react";
import { getSupabase } from "@/lib/supabase-browser";
import { submitToNetlifyForm } from "@/lib/netlify-forms";
import { WhatsAppInlineLink } from "@/components/WhatsAppButton";

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

export default function HomeContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
          plan_interest: null,
        }),
        submitToNetlifyForm("contact", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.businessName,
          message: formData.message,
        }).catch((err) => {
          console.warn("Netlify form submission failed:", err);
        }),
      ]);

      if (supabaseResult.error) throw supabaseResult.error;
      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24"
      style={{ background: "#F9FAFB" }}
      aria-labelledby="home-contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── Left: Pitch copy ─────────────────────────────────── */}
          <div>
            <p className="section-overline mb-4">Let&apos;s Talk</p>
            <h2
              id="home-contact-heading"
              className="text-neutral-900 leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Ready to Grow Your Business{" "}
              <span style={{ color: "#1A6B6B" }}>Online?</span>
            </h2>
            <p
              className="mt-4 text-neutral-600 leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                maxWidth: "520px",
              }}
            >
              Tell us a little about your business and we&apos;ll get back to
              you within a few hours with a free, no-pressure plan tailored to
              you.
            </p>

            {/* Bullet value props */}
            <ul className="mt-7 space-y-3">
              {[
                "Free 15-minute consultation — no commitment",
                "Custom SEO-optimized site in 48 hours",
                "Month-to-month, cancel anytime",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-neutral-700"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                  }}
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ background: "#E6F3F3" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 6.5L5 9L9.5 3.5"
                        stroke="#1A6B6B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Quick contact info */}
            <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
              <WhatsAppInlineLink />
              <a
                href="tel:+18182306619"
                className="flex items-center gap-2 transition-colors hover:underline"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "#1A6B6B",
                  fontWeight: 600,
                }}
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
                (818) 230-6619
              </a>
              <a
                href="mailto:seo@sweethomeservices.org"
                className="flex items-center gap-2 transition-colors hover:underline"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "#1A6B6B",
                  fontWeight: 600,
                }}
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
                seo@sweethomeservices.org
              </a>
            </div>
          </div>

          {/* ── Right: Form card ─────────────────────────────────── */}
          <div
            className="rounded-2xl border p-6 sm:p-8"
            style={{
              background: "#FFFFFF",
              borderColor: "#E5E7EB",
              boxShadow: "0 4px 20px 0 rgb(0 0 0 / 0.04)",
            }}
          >
            {submitted ? (
              <div className="text-center py-10">
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
                <h3
                  className="text-xl font-bold text-neutral-900 mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-neutral-600"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                  }}
                >
                  Thanks for reaching out. We&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3
                  className="text-neutral-900 mb-5"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                  }}
                >
                  Get Your Free Consultation
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="home-name"
                      style={labelStyle}
                      className="block mb-1.5"
                    >
                      Full Name <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="home-name"
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

                  <div>
                    <label
                      htmlFor="home-email"
                      style={labelStyle}
                      className="block mb-1.5"
                    >
                      Email <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="home-email"
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

                  <div>
                    <label
                      htmlFor="home-phone"
                      style={labelStyle}
                      className="block mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="home-phone"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 placeholder:text-neutral-400 focus:border-[#1A6B6B] focus:ring-2 focus:ring-[#1A6B6B]/20 focus:outline-none"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="home-business"
                      style={labelStyle}
                      className="block mb-1.5"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="home-business"
                      name="businessName"
                      autoComplete="organization"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Acme Plumbing Co."
                      className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 placeholder:text-neutral-400 focus:border-[#1A6B6B] focus:ring-2 focus:ring-[#1A6B6B]/20 focus:outline-none"
                      style={inputStyle}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="home-message"
                      style={labelStyle}
                      className="block mb-1.5"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="home-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business and what you&apos;re looking for..."
                      className="w-full rounded-lg border px-4 py-3 transition-colors duration-150 placeholder:text-neutral-400 resize-vertical focus:border-[#1A6B6B] focus:ring-2 focus:ring-[#1A6B6B]/20 focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {error && (
                  <div
                    className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-base font-semibold text-white transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "#1A6B6B",
                    boxShadow: "0 4px 14px 0 rgb(26 107 107 / 0.30)",
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

                <p
                  className="mt-3 text-center text-xs text-neutral-500"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  We&apos;ll never share your info. Reply within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
