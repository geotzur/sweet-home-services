import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Sweet Home Services",
  description:
    "Tips, guides, and insights on local SEO, website design, and growing your local business online.",
};

const posts = [
  {
    title: "5 Reasons Your Local Business Needs a Website in 2026",
    excerpt:
      "Still relying on word-of-mouth? Here's why a professional website is the single best investment for local service businesses this year.",
    category: "Getting Started",
    date: "Coming Soon",
    readTime: "5 min read",
  },
  {
    title: "Local SEO 101: How to Optimize Your Website for Local Search",
    excerpt:
      "A beginner-friendly guide to local SEO best practices — structure, content, and technical optimizations that help your business stand out online.",
    category: "SEO",
    date: "Coming Soon",
    readTime: "8 min read",
  },
  {
    title: "Google Business Profile: The Complete Setup Guide",
    excerpt:
      "Step-by-step instructions to claim, verify, and optimize your Google Business Profile for maximum local visibility.",
    category: "SEO",
    date: "Coming Soon",
    readTime: "10 min read",
  },
  {
    title: "How to Get More Online Reviews (Without Being Pushy)",
    excerpt:
      "Reviews are the lifeblood of local trust. Learn ethical, effective strategies to consistently earn 5-star reviews from happy customers.",
    category: "Growth",
    date: "Coming Soon",
    readTime: "6 min read",
  },
  {
    title: "Website Speed: Why It Matters for Local Businesses",
    excerpt:
      "A 1-second delay in page load time can cost you 7% of conversions. Here's how to make sure your site loads fast for every visitor.",
    category: "Technical",
    date: "Coming Soon",
    readTime: "4 min read",
  },
  {
    title: "The $149/mo Website: What You Actually Get",
    excerpt:
      "A transparent breakdown of exactly what's included in our Starter plan — and why it delivers more value than agencies charging 10x the price.",
    category: "Sweet Home Services",
    date: "Coming Soon",
    readTime: "7 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Getting Started": "#1A6B6B",
  SEO: "#F5A623",
  Growth: "#2E9E7D",
  Technical: "#6B7280",
  "Sweet Home Services": "#1A6B6B",
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 pb-12">
        {/* Hero */}
        <section className="brand-grid relative overflow-hidden py-20 text-center" style={{ background: "#1A6B6B" }}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,166,35,0.28),transparent_58%)]" />
          <div className="mx-auto max-w-3xl px-4">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "#F5A623" }}
            >
              Blog
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Grow Your Local Business Online
            </h1>
            <p className="text-lg" style={{ fontFamily: "var(--font-sans)", color: "#B2DFDB" }}>
              Expert tips on SEO, web design, and digital marketing — written for local service businesses.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16" style={{ background: "transparent" }}>
          <div className="mx-auto max-w-6xl px-4">
            <div className="section-shell p-5 sm:p-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="bg-white rounded-2xl overflow-hidden border border-brand-teal-100/60 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
                >
                  {/* Blog post image */}
                  <div className="relative h-48">
                    <Image
                      src="/images/blog-placeholder.jpg"
                      alt="Blog post illustration"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category badge */}
                    <span
                      className="inline-block w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide mb-3"
                      style={{
                        fontFamily: "var(--font-heading)",
                        background: `${categoryColors[post.category] || "#1A6B6B"}15`,
                        color: categoryColors[post.category] || "#1A6B6B",
                      }}
                    >
                      {post.category}
                    </span>

                    <h2
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
                    >
                      {post.title}
                    </h2>

                    <p
                      className="flex-1 leading-relaxed mb-4"
                      style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "#6B7280" }}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm" style={{ color: "#9CA3AF" }}>
                      <span style={{ fontFamily: "var(--font-sans)" }}>{post.date}</span>
                      <span style={{ fontFamily: "var(--font-sans)" }}>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center" style={{ background: "transparent" }}>
          <div className="mx-auto max-w-2xl px-4">
            <div className="section-shell brand-glow px-6 py-10 sm:px-10">
              <h2
                className="text-3xl font-bold text-neutral-900 mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to Build Something Smart?
              </h2>
              <p className="text-lg mb-8" style={{ fontFamily: "var(--font-sans)", color: "#4B5563" }}>
                Don&apos;t wait for customers to find you. Let us build your online presence.
              </p>
              <a
                href="/pricing"
                className="inline-block rounded-xl px-8 py-4 font-semibold text-base transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "#F5A623",
                  color: "#111827",
                }}
              >
                View Plans &amp; Pricing
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
