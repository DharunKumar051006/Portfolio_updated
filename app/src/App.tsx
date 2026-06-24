import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import AchievementsSection from "@/sections/AchievementsSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";

export default function App() {
  return (
    <main className="overflow-x-clip bg-[#0C0C0C] font-kanit">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
