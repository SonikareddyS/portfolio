import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { Education } from "../components/Education";
import { SkillsSection } from "../components/SkillsSection";
import { Experience } from "../components/Experience";
import { ProjectsSection } from "../components/ProjectsSection";
import { Certificates } from "../components/Certificates";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <Education />   
        <SkillsSection />
        <Experience />
        <ProjectsSection />
        <Certificates />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
