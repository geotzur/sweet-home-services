import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PricingHero from "@/components/PricingHero";
import PricingSection from "@/components/PricingSection";
import PricingComparisonTable from "@/components/PricingComparisonTable";
import PricingFaqSection from "@/components/PricingFaqSection";
import PricingContactCta from "@/components/PricingContactCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing — Sweet Home Services | Websites & SEO for Local Businesses",
  description:
    "Simple, transparent pricing for local business websites and SEO. Starter from $149/mo. No setup fees, no contracts. Launch in 48 hours.",
  openGraph: {
    title: "Pricing — Sweet Home Services | Starter from $149/mo",
    description:
      "Professional website + local SEO done for you. Starter $149/mo · Growth $299/mo · Authority $499/mo. No contracts. Cancel anytime.",
    type: "website",
  },
};

/**
 * Standalone pricing page — /pricing
 *
 * Sections:
 *   1. Navigation (sticky, shared)
 *   2. PricingHero — teal full-bleed, value headline + trust chips
 *   3. PricingSection — 3-tier cards with Growth featured (reuses homepage component)
 *   4. PricingComparisonTable — side-by-side feature breakdown
 *   5. PricingFaqSection — 6 billing/plan FAQ items
 *   6. PricingContactCta — "Not sure which plan?" contact panel
 *   7. Footer (shared)
 */
export default function PricingPage() {
  return (
    <>
      {/* Sticky navigation */}
      <Navigation />

      <main id="main-content">
        {/* Hero — value-focused headline, trust signals */}
        <PricingHero />

        {/* 3-tier pricing cards */}
        <div id="pricing-cards">
          <PricingSection />
        </div>

        {/* Feature comparison table */}
        <PricingComparisonTable />

        {/* Billing FAQ */}
        <PricingFaqSection />

        {/* "Not sure?" contact CTA */}
        <PricingContactCta />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
