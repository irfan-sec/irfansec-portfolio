import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "irfan.ali@cybersec.com",
      action: () => window.open("mailto:ceoirfan@cyberlearn.systems")
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/irfan-sec",
      action: () => window.open("https://github.com/irfan-sec", "_blank")
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/irfan-ali",
      action: () => window.open("https://linkedin.com/in/irfan-security", "_blank")
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Remotely",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-15"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Ready to discuss cybersecurity solutions or potential collaborations? 
            I'm always open to new opportunities and interesting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-primary">Let's Connect</h3>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-4 p-4 rounded-xl glass-card hover:border-primary/50 transition-all hover-scale ${
                    info.action ? 'cursor-pointer hover:bg-primary/5 hover-glow' : ''
                  }`}
                  onClick={info.action || undefined}
                >
                  <div className="p-3 rounded-xl bg-gradient-hero/20 glow">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-card-foreground font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl glass-card glow">
              <h4 className="text-lg font-semibold mb-4 text-card-foreground">
                Professional Services
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Security Assessments & Audits</li>
                <li>• Penetration Testing</li>
                <li>• Security Architecture Consulting</li>
                <li>• Incident Response & Forensics</li>
                <li>• Security Training & Workshops</li>
              </ul>
            </div>
          </div>

          <Card className="glass-card shadow-floating hover-scale">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-hero hover:shadow-electric text-primary-foreground hover-glow transition-all duration-300 py-3 text-lg rounded-xl"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
