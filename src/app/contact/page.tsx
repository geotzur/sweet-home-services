import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Sweet Home Services",
  description:
    "Get in touch with Sweet Home Services. Questions about our plans, custom needs, or partnerships — we're here to help.",
};

const trustBadges = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="#1A6B6B" strokeWidth="2" />
        <path d="M8 12l3 3 5-5" stroke="#1A6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Free Consultation",
    desc: "No obligation, no pressure",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="#1A6B6B" strokeWidth="2" />
        <path d="M3 10h18" stroke="#1A6B6B" strokeWidth="2" />
        <rect x="6" y="14" width="4" height="2" rx="1" fill="#1A6B6B" />
      </svg>
    ),
    title: "No Setup Fees",
    desc: "Start with zero upfront cost",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="#1A6B6B" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="#1A6B6B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "48-Hour Launch",
    desc: "Your site live in two days",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="py-20 text-center" style={{ background: "#1A6B6B" }}>
          <div className="mx-auto max-w-3xl px-4">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "#F5A623" }}
            >
              Contact Us
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let&apos;s Get Your Business Found Online
            </h1>
            <p className="text-lg" style={{ fontFamily: "var(--font-sans)", color: "#B2DFDB" }}>
              Book a free consultation or send us a message. We&apos;ll respond within 24 hours.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-16" style={{ background: "#F9FAFB" }}>
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                  >
                    Send Us a Message
                  </h2>
                  <form action="#" className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-1.5"
                          style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Jane Smith"
                          className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors"
                          style={{
                            fontFamily: "var(--font-sans)",
                            borderColor: "#E5E7EB",
                            background: "#F9FAFB",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-1.5"
                          style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="jane@business.com"
                          className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors"
                          style={{
                            fontFamily: "var(--font-sans)",
                            borderColor: "#E5E7EB",
                            background: "#F9FAFB",
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-1.5"
                          style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                        >
                          Phone (optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="(555) 123-4567"
                          className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors"
                          style={{
                            fontFamily: "var(--font-sans)",
                            borderColor: "#E5E7EB",
                            background: "#F9FAFB",
                          }}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="business-type"
                          className="block text-sm font-medium mb-1.5"
                          style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                        >
                          Business Type
                        </label>
                        <select
                          id="business-type"
                          name="business-type"
                          className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors"
                          style={{
                            fontFamily: "var(--font-sans)",
                            borderColor: "#E5E7EB",
                            background: "#F9FAFB",
                            color: "#6B7280",
                          }}
                        >
                          <option value="">Select your industry</option>
                          <option value="contractor">Contractor / Home Services</option>
                          <option value="salon">Salon & Spa</option>
                          <option value="medical">Medical & Dental</option>
                          <option value="restaurant">Restaurant & Food</option>
                          <option value="legal">Legal / Accounting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1.5"
                        style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your business and what you're looking for..."
                        className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors resize-none"
                        style={{
                          fontFamily: "var(--font-sans)",
                          borderColor: "#E5E7EB",
                          background: "#F9FAFB",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl px-6 py-3.5 font-semibold text-base transition-colors duration-150"
                      style={{
                        fontFamily: "var(--font-heading)",
                        background: "#1A6B6B",
                        color: "#FFFFFF",
                      }}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3
                    className="text-lg font-bold mb-6"
                    style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                  >
                    Other Ways to Reach Us
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "#1A6B6B15" }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1A6B6B" aria-hidden="true">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                        >
                          Email
                        </p>
                        <a
                          href="mailto:hello@sweethomeservices.org"
                          className="text-sm hover:underline"
                          style={{ fontFamily: "var(--font-sans)", color: "#1A6B6B" }}
                        >
                          hello@sweethomeservices.org
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "#1A6B6B15" }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1A6B6B" aria-hidden="true">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                        >
                          Phone
                        </p>
                        <a
                          href="tel:+15551234567"
                          className="text-sm hover:underline"
                          style={{ fontFamily: "var(--font-sans)", color: "#1A6B6B" }}
                        >
                          (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "#1A6B6B15" }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1A6B6B" aria-hidden="true">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                        >
                          Business Hours
                        </p>
                        <p className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "#6B7280" }}>
                          Mon–Fri: 9 AM – 6 PM EST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div
                  className="rounded-2xl overflow-hidden h-48 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #2E9E7D 100%)" }}
                >
                  <div className="text-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="white" opacity="0.5" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <p
                      className="text-sm mt-2"
                      style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.7)" }}
                    >
                      Serving businesses nationwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex items-center gap-4 bg-white rounded-xl px-6 py-5 shadow-sm"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#1A6B6B10" }}
                  >
                    {badge.icon}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                    >
                      {badge.title}
                    </p>
                    <p
                      className="text-xs"
                      style={{ fontFamily: "var(--font-sans)", color: "#6B7280" }}
                    >
                      {badge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
