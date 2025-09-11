import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Network, Database, Cloud, Bug } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Security Analysis",
      skills: [
        { name: "Penetration Testing", level: 90 },
        { name: "Vulnerability Assessment", level: 85 },
        { name: "Threat Hunting", level: 80 },
        { name: "Incident Response", level: 88 }
      ]
    },
    {
      icon: Network,
      title: "Network Security",
      skills: [
        { name: "Firewall Configuration", level: 85 },
        { name: "IDS/IPS", level: 80 },
        { name: "Network Monitoring", level: 88 },
        { name: "VPN Setup", level: 82 }
      ]
    },
    {
      icon: Code,
      title: "Security Tools",
      skills: [
        { name: "Nmap", level: 90 },
        { name: "Metasploit", level: 85 },
        { name: "Burp Suite", level: 88 },
        { name: "Wireshark", level: 86 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      skills: [
        { name: "AWS Security", level: 75 },
        { name: "Azure Security", level: 70 },
        { name: "Container Security", level: 78 },
        { name: "Cloud Compliance", level: 80 }
      ]
    }
  ];

  const certifications = [
    "CISSP", "CEH", "OSCP", "Security+", "CySA+", "GCIH"
  ];

  const technologies = [
    "Python", "Bash", "PowerShell", "Linux", "Windows", "Kali Linux",
    "SIEM", "SOAR", "Splunk", "ELK Stack", "Docker", "Kubernetes"
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-aurora opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Comprehensive cybersecurity skills spanning from penetration testing 
            to cloud security architecture and incident response.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card shadow-floating hover:shadow-electric transition-all duration-300 hover-scale group">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-card-foreground">
                  <div className="p-3 rounded-xl bg-gradient-hero/20 glow group-hover:bg-gradient-hero/30 transition-all">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xl">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="glass-card shadow-floating hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-card-foreground">
                <div className="p-3 rounded-xl bg-gradient-hero/20 glow">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl">Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="glass-card bg-gradient-hero/10 text-primary hover:bg-gradient-hero hover:text-primary-foreground border-primary/20 hover-glow transition-all duration-300 px-4 py-2"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card shadow-floating hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-card-foreground">
                <div className="p-3 rounded-xl bg-gradient-hero/20 glow">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl">Technologies</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="glass-card border-primary/30 text-foreground hover:bg-primary/20 hover:border-primary hover-glow transition-all duration-300 px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;