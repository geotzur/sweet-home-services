import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Examples — Sweet Home Services",
  description:
    "Browse real examples of local business websites built and optimized by Sweet Home Services.",
};

interface Example {
  business: string;
  industry: string;
  location: string;
  result: string;
  gradient: string;
  url?: string;
}

const examples: Example[] = [
  // ─── Live client sites ──────────────────────────────────────────
  {
    business: "Fresh Flow Air Duct Cleaning",
    industry: "Home Services",
    location: "Lantana, FL",
    result: "Local-SEO site with service area pages across South Florida",
    gradient: "linear-gradient(135deg, #1A6B6B 0%, #2E9E7D 100%)",
    url: "https://freshflowairductcleaning.services/",
  },
  {
    business: "The Air Duct Guys",
    industry: "Home Services",
    location: "South Florida",
    result: "Conversion-focused site with instant quote form",
    gradient: "linear-gradient(135deg, #155656 0%, #1A6B6B 100%)",
    url: "https://airductcleaning.services/",
  },
  {
    business: "Lint Savers Dryer Cleaning",
    industry: "Home Services",
    location: "South Florida",
    result: "Dryer vent cleaning site with click-to-call and booking",
    gradient: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
    url: "https://dryercleaningservices.com/",
  },
  {
    business: "ClingPool",
    industry: "Home Services",
    location: "Miami, FL",
    result: "Pool cleaning & maintenance site with booking flow",
    gradient: "linear-gradient(135deg, #2E9E7D 0%, #1A6B6B 100%)",
    url: "https://astounding-scone-95741c.netlify.app/",
  },
  {
    business: "Locksmith Luz",
    industry: "Home Services",
    location: "Los Angeles, CA",
    result: "24/7 locksmith site with emergency service callout",
    gradient: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
    url: "https://magenta-boba-a630b1.netlify.app/",
  },
  {
    business: "Locksmith Luck",
    industry: "Home Services",
    location: "Los Angeles, CA",
    result: "Locksmith site with fast-response positioning",
    gradient: "linear-gradient(135deg, #155656 0%, #1A6B6B 100%)",
    url: "https://willowy-babka-a0c492.netlify.app/",
  },

  // ─── Sample portfolio ──────────────────────────────────────────
  {
    business: "Austin Elite Plumbing",
    industry: "Plumbing",
    location: "Austin, TX",
    result: "30-page website with 12 service area pages delivered",
    gradient: "linear-gradient(135deg, #1A6B6B 0%, #2E9E7D 100%)",
  },
  {
    business: "Bella Luxe Salon & Spa",
    industry: "Beauty & Wellness",
    location: "Denver, CO",
    result: "Stunning website with integrated booking system",
    gradient: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
  },
  {
    business: "Bright Smile Dental",
    industry: "Medical & Dental",
    location: "Phoenix, AZ",
    result: "47 new patient inquiries in first month",
    gradient: "linear-gradient(135deg, #1A6B6B 0%, #155656 100%)",
  },
  {
    business: "Tony's Trattoria",
    industry: "Restaurant",
    location: "Portland, OR",
    result: "+28% online reservations month-over-month",
    gradient: "linear-gradient(135deg, #2E9E7D 0%, #1A6B6B 100%)",
  },
  {
    business: "Summit Roofing Co.",
    industry: "Roofing",
    location: "Nashville, TN",
    result: "Storm damage landing page with instant quote form",
    gradient: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
  },
  {
    business: "Parker & Associates Law",
    industry: "Legal",
    location: "Charlotte, NC",
    result: "Practice area pages with consultation booking system",
    gradient: "linear-gradient(135deg, #1A6B6B 0%, #2E9E7D 100%)",
  },
];

export default function ExamplesPage() {
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
              Portfolio
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Real Results for Real Businesses
            </h1>
            <p className="text-lg" style={{ fontFamily: "var(--font-sans)", color: "#B2DFDB" }}>
              See how local businesses like yours are growing with Sweet Home Services.
            </p>
          </div>
        </section>

        {/* Examples Grid */}
        <section className="py-16" style={{ background: "#F9FAFB" }}>
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {examples.map((ex) => {
                const urlDisplay = ex.url
                  ? ex.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
                  : `sweethomeservices.org/${ex.industry.toLowerCase().replace(/[& ]+/g, "-")}`;

                const Wrapper = ex.url ? "a" : "div";
                const wrapperProps = ex.url
                  ? {
                      href: ex.url,
                      target: "_blank" as const,
                      rel: "noopener noreferrer",
                      "aria-label": `Visit ${ex.business} website (opens in new tab)`,
                    }
                  : {};

                return (
                  <Wrapper
                    key={ex.business}
                    {...wrapperProps}
                    className={`block rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 ${
                      ex.url ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : "hover:shadow-md"
                    }`}
                  >
                    {/* Browser mockup */}
                    <div style={{ background: ex.gradient }} className="p-5">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                        {/* Browser bar */}
                        <div className="bg-black/20 px-3 py-2 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-400/80" />
                          <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                          <span className="w-2 h-2 rounded-full bg-green-400/80" />
                          <div className="ml-2 flex-1 truncate rounded-full bg-white/20 px-2 py-0.5 text-[10px] text-white/70">
                            {urlDisplay}
                          </div>
                        </div>
                        {/* Mock content */}
                        <div className="p-4 space-y-2">
                          <div className="h-3 w-3/4 rounded bg-white/30" />
                          <div className="h-2 w-full rounded bg-white/20" />
                          <div className="h-2 w-5/6 rounded bg-white/20" />
                          <div className="mt-3 h-6 w-24 rounded-md bg-white/30" />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span
                          className="inline-block rounded-full px-2.5 py-0.5 text-xs font-bold"
                          style={{
                            fontFamily: "var(--font-heading)",
                            background: "#1A6B6B15",
                            color: "#1A6B6B",
                          }}
                        >
                          {ex.industry}
                        </span>
                        <span
                          className="text-xs"
                          style={{ fontFamily: "var(--font-sans)", color: "#9CA3AF" }}
                        >
                          {ex.location}
                        </span>
                        {ex.url && (
                          <span
                            className="ml-auto inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                            style={{
                              fontFamily: "var(--font-heading)",
                              background: "#2E9E7D20",
                              color: "#1A6B6B",
                            }}
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ background: "#2E9E7D" }}
                            />
                            Live
                          </span>
                        )}
                      </div>

                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                      >
                        {ex.business}
                      </h3>

                      <div
                        className="flex items-center gap-2 rounded-lg px-3 py-2"
                        style={{ background: "#F5A62315" }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#F5A623" aria-hidden="true">
                          <path d="M8 0l2.47 4.94L16 5.83l-4 3.86.94 5.47L8 12.5l-4.94 2.66.94-5.47-4-3.86 5.53-.89L8 0z" />
                        </svg>
                        <span
                          className="text-sm font-semibold"
                          style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                        >
                          {ex.result}
                        </span>
                      </div>

                      {ex.url && (
                        <div
                          className="mt-3 flex items-center gap-1 text-xs font-semibold"
                          style={{ fontFamily: "var(--font-heading)", color: "#1A6B6B" }}
                        >
                          Visit site
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M4 2h6v6M10 2L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center" style={{ background: "#1A6B6B" }}>
          <div className="mx-auto max-w-2xl px-4">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your Business Could Be Next
            </h2>
            <p className="text-lg mb-8" style={{ fontFamily: "var(--font-sans)", color: "#B2DFDB" }}>
              Join hundreds of local businesses already growing with Sweet Home Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pricing"
                className="inline-block rounded-xl px-8 py-4 font-semibold text-base transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "#F5A623",
                  color: "#111827",
                }}
              >
                View Plans
              </a>
              <a
                href="/contact"
                className="inline-block rounded-xl px-8 py-4 font-semibold text-base transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "transparent",
                  color: "#FFFFFF",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
              >
                Book a Free Call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
