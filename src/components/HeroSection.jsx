import { ArrowDown } from "lucide-react";
import profile from "../assets/profile.jpg"; // Profile image in src/assets

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative container max-w-4xl mx-auto text-center z-10 space-y-6">
        {/* Profile Image */}
        <img
          src={profile}
          alt="Sonika Sompuram"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full mx-auto border-4 border-primary shadow-lg opacity-0 animate-fade-in"
        />

        {/* Hero Text */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in">Hi, I'm</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            {" "}
            Sonika
          </span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
            {" "}
            Sompuram
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I am a web developer passionate about building modern and responsive
          web applications. I focus on creating user-friendly, functional, and
          visually appealing digital experiences.
        </p>

        {/* View Work Button */}
        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
