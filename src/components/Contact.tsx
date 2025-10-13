import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Contact = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  return (
    <section 
      ref={elementRef}
      id="contact" 
      className={`py-20 relative overflow-hidden section-transition ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground stagger-1">Get In Touch</h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto stagger-2">
            I'm always interested in discussing new opportunities, innovative projects, 
            or collaborating on AI/ML initiatives. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 stagger-3">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're looking for a data scientist, ML engineer, or just want to discuss 
                the latest trends in AI, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110">
                  <Mail className="text-primary group-hover:rotate-12 transition-transform duration-300" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">saadfahim2012@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110">
                  <Phone className="text-primary group-hover:rotate-12 transition-transform duration-300" size={20} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+94 766533626</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110">
                  <MapPin className="text-primary group-hover:rotate-12 transition-transform duration-300" size={20} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Galle, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover:bg-yellow-600/20 hover:border-yellow-600/30 transform hover:scale-110 hover:rotate-6 transition-all duration-300"
                  onClick={() => window.open('https://github.com/Saad00SD', '_blank')}
                >
                  <Github size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover:bg-yellow-600/20 hover:border-yellow-600/30 transform hover:scale-110 hover:-rotate-6 transition-all duration-300"
                  onClick={() => window.open('https://www.linkedin.com/in/saadfahim-sd/', '_blank')}
                >
                  <Linkedin size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="hover:bg-yellow-600/20 hover:border-yellow-600/30 transform hover:scale-110 hover:rotate-6 transition-all duration-300"
                  onClick={() => window.open('mailto:saadfahim2012@gmail.com', '_blank')}
                >
                  <Mail size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 bg-card/90 backdrop-blur-sm shadow-2xl shadow-black/30 stagger-4">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@gmail.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project Collaboration" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or opportunity..."
                  className="min-h-[120px] resize-none"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-foreground hover:from-foreground hover:to-primary transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;