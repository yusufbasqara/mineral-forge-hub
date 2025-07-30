import HeroSection from "@/components/HeroSection";
import CompanyStory from "@/components/CompanyStory";
import ServicesSection from "@/components/ServicesSection";
import VisionMission from "@/components/VisionMission";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyStory />
      <ServicesSection />
      <VisionMission />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
