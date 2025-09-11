import { Github, Linkedin, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-space-deep border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                Irfan Ali
              </span>
            </div>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Cybersecurity Engineer specializing in threat analysis, 
              penetration testing, and security architecture.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary/20 hover:text-primary"
                onClick={() => window.open("https://github.com/irfan-sec", "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary/20 hover:text-primary"
                onClick={() => window.open("https://linkedin.com/in/irfan-ali", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary/20 hover:text-primary"
                onClick={() => window.open("mailto:irfan.ali@cybersec.com")}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Services</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>Security Assessments</li>
              <li>Penetration Testing</li>
              <li>Vulnerability Analysis</li>
              <li>Security Consulting</li>
              <li>Incident Response</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Expertise</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>Network Security</li>
              <li>Web Application Security</li>
              <li>Cloud Security</li>
              <li>Malware Analysis</li>
              <li>Digital Forensics</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground text-sm sm:text-base">
            © {currentYear} Irfan Ali. All rights reserved. Built with security in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;