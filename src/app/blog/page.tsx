import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Sweet Home Services",
  description:
    "Tips, guides, and insights on local SEO, website design, and growing your local business online.",
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1
            className="text-4xl font-bold text-neutral-900"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Blog
          </h1>
          <p className="mt-4 text-lg text-neutral-500">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
