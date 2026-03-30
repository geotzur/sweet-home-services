import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import IndustryVerticalsSection from "@/components/IndustryVerticalsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import FooterCtaSection from "@/components/FooterCtaSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* ① Sticky navigation */}
      <Navigation />

      <main id="main-content">
        {/* ② Hero — headline + CTA above the fold */}
        <HeroSection />

        {/* ③ Social proof strip — trust signals */}
        <SocialProofStrip />

        {/* ④ How It Works — 3-step process */}
        <HowItWorksSection />

        {/* ⑤ Pricing — 3-tier cards */}
        <PricingSection />

        {/* ⑥ Industry Verticals — supported niches */}
        <IndustryVerticalsSection />

        {/* ⑦ Testimonials — client quotes */}
        <TestimonialsSection />

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
