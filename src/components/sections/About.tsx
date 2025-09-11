import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Target, Code, Users, Zap } from "lucide-react";
import HologramGlobe from "@/components/3d/HologramGlobe";
import ParallaxContainer from "@/components/effects/ParallaxContainer";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Security Expertise",
      description: "8+ years in cybersecurity with focus on red team operations, vulnerability research, and threat hunting across enterprise environments",
      metric: "500+ vulnerabilities discovered"
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Advanced proficiency in Python, C++, and security tools. Developed custom exploit frameworks and automated security assessment tools",
      metric: "20+ security tools created"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Industry-recognized certifications including OSCP, CEH, and CompTIA Security+. Continuous learning in emerging security technologies",
      metric: "12 active certifications"
    },
    {
      icon: Target,
      title: "Mission Focus",
      description: "Dedicated to protecting critical infrastructure through proactive security measures and innovative defense strategies",
      metric: "99.9% threat prevention rate"
    }
  ];

  const specializations = [
    "Red Team Operations",
    "Penetration Testing", 
    "Threat Hunting",
    "Malware Analysis",
    "Cloud Security",
    "Network Forensics",
    "OSINT Gathering",
    "Incident Response",
    "Security Architecture",
    "Zero-Day Research"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 matrix-bg opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ParallaxContainer speed={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold mb-6">
              &lt;ABOUT_ME /&gt;
            </h2>
            <div className="terminal-glow inline-block rounded-lg px-6 py-3 mb-6">
              <p className="text-lg sm:text-xl font-mono text-cyber-teal">
                <span className="text-cyber-blue">&gt;</span> Security professional with deep expertise in threat analysis
              </p>
            </div>
          </div>
        </ParallaxContainer>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ParallaxContainer speed={0.05}>
            <div className="space-y-8">
              {/* Profile Picture */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-cyber rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-cyber-blue/50 group-hover:border-cyber-green/70 transition-all duration-300">
                    <img 
                      src="/lovable-uploads/f4f3f87a-efba-4cb4-a142-779796f94b03.png" 
                      alt="Cybersecurity Engineer Profile"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-void/20 to-transparent"></div>
                  </div>
                  {/* Scanner effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-cyber-green/30 animate-ping"></div>
                </div>
              </div>
              
              <div>
              <h3 className="text-2xl sm:text-3xl font-mono font-bold mb-6 text-cyber-green">
                my_journey.exe
              </h3>
              <div className="space-y-6">
                <div className="terminal-glow p-6 rounded-lg">
                  <p className="text-muted-foreground mb-4 leading-relaxed font-sans">
                    As a cybersecurity engineer with 8+ years of experience, I specialize in 
                    red team operations, advanced persistent threat (APT) analysis, and 
                    zero-day vulnerability research. My expertise spans across cloud security 
                    architectures, network forensics, and custom exploitation frameworks.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-sans">
                    I've successfully identified and mitigated security vulnerabilities in 
                    Fortune 500 companies, developed automated threat detection systems, 
                    and led incident response efforts for critical infrastructure protection.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {specializations.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="hologram bg-cyber-blue/10 text-cyber-blue hover:bg-gradient-cyber hover:text-primary-foreground border-cyber-blue/20 cyber-hover transition-all duration-300 font-mono text-xs py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </ParallaxContainer>

          <ParallaxContainer speed={0.15}>
            <div className="flex justify-center">
              <HologramGlobe />
            </div>
          </ParallaxContainer>
        </div>

        <ParallaxContainer speed={0.05}>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hologram shadow-floating cyber-hover transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 rounded-lg bg-gradient-cyber/20 group-hover:bg-gradient-cyber/30 transition-all">
                      <highlight.icon className="w-7 h-7 text-cyber-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-mono font-semibold mb-2 text-card-foreground group-hover:text-cyber-green transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed mb-3 font-sans text-sm">
                        {highlight.description}
                      </p>
                      <div className="inline-block terminal-glow px-3 py-1 rounded">
                        <span className="text-cyber-green font-mono text-xs">
                          {highlight.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ParallaxContainer>
      </div>
    </section>
  );
};

export default About;