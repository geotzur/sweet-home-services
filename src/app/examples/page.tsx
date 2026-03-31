import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Examples — Sweet Home Services",
  description:
    "Browse real examples of local business websites built and optimized by Sweet Home Services.",
};

const examples = [
  {
    business: "Austin Elite Plumbing",
    industry: "Plumbing",
    location: "Austin, TX",
    result: "+340% organic traffic in 90 days",
    gradient: "linear-gradient(135deg, #1A6B6B 0%, #2E9E7D 100%)",
  },
  {
    business: "Bella Luxe Salon & Spa",
    industry: "Beauty & Wellness",
    location: "Denver, CO",
    result: "#1 Google Maps for 'salon near me'",
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
    result: "12 qualified leads per week from organic search",
    gradient: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
  },
  {
    business: "Parker & Associates Law",
    industry: "Legal",
    location: "Charlotte, NC",
    result: "+180% visibility for local legal keywords",
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
              {examples.map((ex) => (
                <div
                  key={ex.business}
                  className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
                >
                  {/* Browser mockup */}
                  <div style={{ background: ex.gradient }} className="p-5">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                      {/* Browser bar */}
                      <div className="bg-black/20 px-3 py-2 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400/80" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                        <span className="w-2 h-2 rounded-full bg-green-400/80" />
                        <div className="ml-2 flex-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] text-white/70">
                          sweethomeservices.org/{ex.industry.toLowerCase().replace(/[& ]+/g, "-")}
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
                    <div className="flex items-center gap-2 mb-2">
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
                  </div>
                </div>
              ))}
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
