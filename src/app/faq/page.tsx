import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ — Sweet Home Services",
  description:
    "Frequently asked questions about Sweet Home Services — pricing, setup, SEO, and more.",
};

export default function FaqPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1
            className="text-4xl font-bold text-neutral-900"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-neutral-500">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
