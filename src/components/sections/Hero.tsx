import { Button } from "@/components/ui/button";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import VaultAnimation from "@/components/3d/VaultAnimation";
import MatrixBackground from "@/components/effects/MatrixBackground";
import ParallaxContainer from "@/components/effects/ParallaxContainer";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix background */}
      <MatrixBackground />
      
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-void"></div>
        <div className="absolute inset-0 bg-gradient-hologram opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <ParallaxContainer speed={0.2}>
          {/* 3D Vault Animation */}
          <div className="mb-12">
            <VaultAnimation />
          </div>
        </ParallaxContainer>
        
        <ParallaxContainer speed={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono font-bold mb-6 leading-tight">
            CYBERSECURITY
            <br />
            <span className="text-cyber-green">ENGINEER</span>
          </h1>
          
          <div className="mb-8">
            <div className="inline-block terminal-glow rounded-lg px-6 py-3">
              <p className="text-lg sm:text-xl md:text-2xl font-mono text-cyber-teal">
                <span className="text-cyber-blue">&gt;</span> Protecting systems, data, and people
                <span className="terminal-cursor"></span>
              </p>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-12 leading-relaxed px-4 sm:px-0 font-sans">
            Specialized in advanced threat hunting, penetration testing, and security architecture. 
            Building robust defenses against evolving cyber threats with cutting-edge methodologies.
          </p>
        </ParallaxContainer>
        
        <ParallaxContainer speed={0.05}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 px-4 sm:px-0">
            <Button 
              size="lg" 
              className="bg-gradient-cyber hover:shadow-cyber border-0 text-base sm:text-lg px-8 py-4 rounded-lg font-mono font-semibold transition-all duration-300 cyber-hover"
              onClick={() => scrollToSection("projects")}
            >
              <Terminal className="w-5 h-5 mr-2" />
              EXPLORE MY WORK
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hologram border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/20 hover:border-cyber-blue text-base sm:text-lg px-8 py-4 rounded-lg font-mono font-semibold cyber-hover"
              onClick={() => scrollToSection("contact")}
            >
              CONTACT_ME.exe
            </Button>
          </div>
        </ParallaxContainer>
        
        <ParallaxContainer speed={0.1}>
          <div className="flex justify-center space-x-6">
            <Button 
              variant="ghost" 
              size="icon"
              className="hologram hover:bg-cyber-blue/20 hover:text-cyber-blue w-14 h-14 rounded-lg cyber-hover"
              onClick={() => window.open("https://github.com/irfan-sec", "_blank")}
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hologram hover:bg-cyber-blue/20 hover:text-cyber-blue w-14 h-14 rounded-lg cyber-hover"
              onClick={() => window.open("https://linkedin.com/in/irfan-ali", "_blank")}
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="hologram hover:bg-cyber-blue/20 hover:text-cyber-blue w-14 h-14 rounded-lg cyber-hover"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </ParallaxContainer>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;