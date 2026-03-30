import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Sweet Home Services",
  description:
    "Get in touch with Sweet Home Services. Questions about our plans, custom needs, or partnerships — we are here to help.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1
            className="text-4xl font-bold text-neutral-900"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-neutral-500">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
