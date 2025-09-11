import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Shield, Network, Bug, Key } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Shield,
      title: "Network Security Scanner",
      description: "Advanced network vulnerability scanner built with Python that identifies security weaknesses across network infrastructure. Features automated reporting and risk assessment.",
      technologies: ["Python", "Nmap", "Scapy", "SQLite"],
      github: "https://github.com/irfan-sec",
      demo: "#",
      category: "Security Tool"
    },
    {
      icon: Bug,
      title: "Web Application Penetration Testing Framework",
      description: "Comprehensive framework for web application security testing with automated vulnerability detection and custom payload generation.",
      technologies: ["Python", "Selenium", "BeautifulSoup", "Flask"],
      github: "https://github.com/irfan-sec",
      demo: "#",
      category: "Pentesting"
    },
    {
      icon: Network,
      title: "SIEM Log Analysis Tool",
      description: "Real-time security event correlation and analysis tool that processes log data from multiple sources to detect potential security incidents.",
      technologies: ["Python", "ELK Stack", "Docker", "Redis"],
      github: "https://github.com/irfan-sec",
      demo: "#",
      category: "SIEM"
    },
    {
      icon: Key,
      title: "Cryptographic Security Library",
      description: "Lightweight cryptographic library implementing modern encryption algorithms with focus on performance and security best practices.",
      technologies: ["Python", "C++", "OpenSSL", "CMake"],
      github: "https://github.com/irfan-sec",
      demo: "#",
      category: "Cryptography"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Explore my cybersecurity projects and tools that demonstrate expertise 
            in security analysis, penetration testing, and threat detection.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card shadow-floating hover:shadow-electric transition-all duration-300 group hover-scale floating">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 rounded-xl bg-gradient-hero/20 glow group-hover:bg-gradient-hero/30 transition-all">
                      <project.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="mt-2 glass-card border-primary/50 text-primary hover-glow">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card border-primary text-primary hover:bg-gradient-hero hover:text-primary-foreground hover-glow transition-all duration-300"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card border-primary/50 text-foreground hover:bg-primary/20 hover-glow transition-all duration-300"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card border-primary text-primary hover:bg-gradient-hero hover:text-primary-foreground hover-glow px-8 py-4 text-lg rounded-xl transition-all duration-300"
            onClick={() => window.open("https://github.com/irfan-sec", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;