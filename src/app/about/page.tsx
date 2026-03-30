import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Sweet Home Services",
  description:
    "Learn about Sweet Home Services — our mission to help local businesses get found online with professional websites and SEO.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1
            className="text-4xl font-bold text-neutral-900"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About Us
          </h1>
          <p className="mt-4 text-lg text-neutral-500">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
