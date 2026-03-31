import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ — Sweet Home Services",
  description:
    "Frequently asked questions about Sweet Home Services — pricing, setup, SEO, and more.",
};

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How long does it take to launch my website?",
        a: "Most websites go live within 48 hours of your onboarding call. We handle everything — design, content, SEO setup, and deployment. You just review and approve.",
      },
      {
        q: "Do I need any technical skills?",
        a: "None at all. We handle all the technical work. You just tell us about your business, and we take care of the rest — from design to SEO to hosting.",
      },
      {
        q: "What do I need to provide?",
        a: "Just your business details: name, services, location, contact info, and any photos you'd like to use. We'll handle the copywriting, design, and optimization.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    items: [
      {
        q: "What's included in the monthly fee?",
        a: "Every plan includes your website, hosting, SSL certificate, basic SEO optimization, and monthly performance reports. Higher-tier plans add blog content, advanced SEO, and Google Business Profile management.",
      },
      {
        q: "Are there any setup fees or contracts?",
        a: "No setup fees and no long-term contracts. You pay month-to-month and can cancel anytime. We believe in earning your business every month.",
      },
      {
        q: "Can I upgrade or downgrade my plan?",
        a: "Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle.",
      },
    ],
  },
  {
    category: "SEO & Results",
    items: [
      {
        q: "How long until I see results from SEO?",
        a: "Local SEO typically shows measurable improvement within 30–90 days. You'll start appearing in more local searches, Google Maps results, and may see increased calls and form submissions.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No one can honestly guarantee specific rankings — Google's algorithm changes constantly. What we do guarantee is best-practice optimization, consistent effort, and transparent monthly reporting so you can see exactly what's happening.",
      },
      {
        q: "What kind of reports do I get?",
        a: "Monthly reports include keyword rankings, website traffic, Google Business Profile insights, and actionable recommendations. Growth and Authority plans include more detailed analytics.",
      },
    ],
  },
  {
    category: "Technical",
    items: [
      {
        q: "Do I own my website?",
        a: "Yes. Your website content and domain are yours. If you ever decide to leave, we'll help you export everything.",
      },
      {
        q: "Is my website mobile-friendly?",
        a: "Absolutely. Every website we build is fully responsive and optimized for mobile, tablet, and desktop. Over 60% of local searches happen on mobile devices.",
      },
      {
        q: "Do you provide hosting?",
        a: "Yes, hosting is included in every plan. We use enterprise-grade infrastructure with SSL certificates, CDN, and 99.9% uptime guarantee.",
      },
    ],
  },
];

export default function FaqPage() {
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
              FAQ
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Frequently Asked Questions
            </h1>
            <p className="text-lg" style={{ fontFamily: "var(--font-sans)", color: "#B2DFDB" }}>
              Everything you need to know about Sweet Home Services.
              Can&apos;t find what you&apos;re looking for?{" "}
              <a href="/contact" className="underline text-white hover:text-amber-300">
                Contact us
              </a>
              .
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16" style={{ background: "#F9FAFB" }}>
          <div className="mx-auto max-w-4xl px-4 space-y-12">
            {faqs.map((cat) => (
              <div key={cat.category}>
                <h2
                  className="text-2xl font-bold mb-6 pb-3 border-b-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#1F2937",
                    borderColor: "#1A6B6B",
                  }}
                >
                  {cat.category}
                </h2>
                <div className="space-y-6">
                  {cat.items.map((faq) => (
                    <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ fontFamily: "var(--font-heading)", color: "#1A6B6B" }}
                      >
                        {faq.q}
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "#4B5563" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center" style={{ background: "#1A6B6B" }}>
          <div className="mx-auto max-w-2xl px-4">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Still have questions?
            </h2>
            <p className="text-lg mb-8" style={{ fontFamily: "var(--font-sans)", color: "#B2DFDB" }}>
              Our team is happy to help. Book a free 15-minute consultation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold text-base transition-colors duration-150 w-full sm:w-auto"
              style={{
                fontFamily: "var(--font-heading)",
                background: "#F5A623",
                color: "#111827",
              }}
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
