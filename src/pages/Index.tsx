import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="px-4 sm:px-6 lg:px-8 xl:px-12">
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary/20 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-yellow-600/20 hover:text-yellow-600 transition-all duration-300 transform hover:scale-110"
              onClick={() => window.open('https://github.com/Saad00SD', '_blank')}
            >
              <Github size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-yellow-600/20 hover:text-yellow-600 transition-all duration-300 transform hover:scale-110"
              onClick={() => window.open('https://www.linkedin.com/in/saadfahim-sd/', '_blank')}
            >
              <Linkedin size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-yellow-600/20 hover:text-yellow-600 transition-all duration-300 transform hover:scale-110"
              onClick={() => window.open('mailto:saadfahim2012@gmail.com', '_blank')}
            >
              <Mail size={20} />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © 2025 Saad Fahim. Built with passion for intelligent solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
