import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import PartnerLogosSection from "@/components/PartnerLogosSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import IndustryVerticalsSection from "@/components/IndustryVerticalsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FaqSection from "@/components/FaqSection";
import FooterCtaSection from "@/components/FooterCtaSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* ① Sticky navigation */}
      <Navigation />

      <main id="main-content" className="pb-10 sm:pb-14">
        {/* ② Hero — headline + CTA above the fold */}
        <HeroSection />

        <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ③ Social proof strip — trust signals */}
          <div className="section-shell brand-grid overflow-hidden">
            <SocialProofStrip />
          </div>
        </div>

        {/* Partner logos — trusted tech stack */}
        <PartnerLogosSection />

        {/* ④ How It Works — 3-step process */}
        <HowItWorksSection />

        {/* ⑤ Pricing — 3-tier cards */}
        <PricingSection />

        {/* ⑥ Industry Verticals — supported niches */}
        <IndustryVerticalsSection />

        {/* ⑦ Testimonials — client quotes */}
        <TestimonialsSection />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Case Studies — real results */}
          <div className="section-shell overflow-hidden">
            <CaseStudiesSection />
          </div>
        </div>

        {/* ⑧ FAQ — 6 questions */}
        <FaqSection />

        {/* ⑨ Footer CTA — secondary conversion */}
        <FooterCtaSection />
      </main>

      {/* ⑩ Footer — nav, legal, social */}
      <Footer />
    </>
  );
}
