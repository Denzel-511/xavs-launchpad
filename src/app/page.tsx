import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import TracksSection from "@/components/sections/TracksSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import MentorsSection from "@/components/sections/MentorsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import FoundingCohortSection from "@/components/sections/FoundingCohortSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <TracksSection />
        <HowItWorksSection />
        <MentorsSection />
        <PartnersSection />
        <FoundingCohortSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
