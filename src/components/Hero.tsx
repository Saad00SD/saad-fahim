import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import React, { useEffect, useState } from "react";

const TITLES = ["AI/ML Engineer", "Data Scientist", "Software Engineer"];

const Hero = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [currentTitle, setCurrentTitle] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % TITLES.length);
        setFade(true);
      }, 400); // fade out duration
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={elementRef}
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/10 to-accent/20 relative overflow-hidden section-transition pt-24 sm:pt-0 ${isVisible ? 'visible' : ''}`}
    >
      {/* Background decoration with enhanced animations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3 animate-float"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '0.5s' }}></div>
      
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
           {/* Left Side - Content */}
           <div className="text-left space-y-6 sm:space-y-8">
             {/* Title */}
             <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-on-load stagger-1 transition-all duration-700 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ease-in-out`}
                 style={{ transitionProperty: 'opacity, transform' }}>
               {TITLES[currentTitle]}
             </h1>
             
             <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl text-yellow-600 animate-on-load stagger-2">
               Transforming Data into Intelligence
             </h2>
             
             <p className="text-sm sm:text-base md:text-lg text-muted-foreground animate-on-load stagger-3">
               Computer Science graduate specializing in AI/ML and Data Science, passionate about developing
               innovative AI solutions using machine learning, deep learning, and NLP.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 animate-on-load stagger-4">
              <a href="https://github.com/Saad00SD?tab=repositories" target="_blank" rel="noopener noreferrer">
               <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                 View My Work
               </Button>
              </a> 
              <a href="cv.pdf" target="_blank" rel="noopener noreferrer">
               <Button variant="outline" size="lg" className="border-yellow-600/30 hover:bg-yellow-600/10 hover:border-yellow-600 transition-all duration-300 transform hover:scale-105">
                 Download Resume
               </Button>
               </a>
             </div>
             
             <div className="flex gap-6 animate-on-load stagger-5">
               <Button 
                 variant="ghost" 
                 size="icon" 
                 className="hover:bg-yellow-600/20 hover:text-yellow-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                 onClick={() => window.open('https://github.com/Saad00SD', '_blank')}
               >
                 <Github size={24} />
               </Button>
               <Button 
                 variant="ghost" 
                 size="icon" 
                 className="hover:bg-yellow-600/20 hover:text-yellow-600 transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
                 onClick={() => window.open('https://www.linkedin.com/in/saadfahim-sd/', '_blank')}
               >
                 <Linkedin size={24} />
               </Button>
               <Button 
                 variant="ghost" 
                 size="icon" 
                 className="hover:bg-yellow-600/20 hover:text-yellow-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                 onClick={() => window.open('mailto:saadfahim2012@gmail.com', '_blank')}
               >
                 <Mail size={24} />
               </Button>
             </div>
           </div>
           
                       {/* Right Side - Large Profile Picture */}
            <div className="flex justify-center mt-8 lg:mt-0">
              <div className="relative">
                {/* Outer animated circle - visible on all screens, smaller on mobile */}
                <div className="absolute inset-0 w-32 h-32 xs:w-44 xs:h-44 sm:w-[18rem] sm:h-[18rem] md:w-[28rem] md:h-[28rem] rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 animate-spin-slow"></div>
                {/* Inner animated circle - visible on all screens, smaller on mobile */}
                <div className="absolute inset-2 w-24 h-24 xs:inset-4 xs:w-32 xs:h-32 sm:inset-8 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 animate-spin-slow-reverse"></div>
                {/* Profile picture container - responsive size, even larger on mobile */}
                <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-80 sm:h-80 md:w-[24rem] md:h-[24rem] rounded-full overflow-hidden border-8 border-background shadow-2xl mx-auto">
                  <img
                    src="my-photo.jpg"
                    alt="Saad Fahim" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to SVG if image fails to load
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  {/* Fallback SVG */}
                  <img
                    src="profile-placeholder.svg"
                    alt="Saad Fahim" 
                    className="w-full h-full object-cover hidden"
                  />
                </div>
                {/* Floating particles around the profile - visible on all screens, smaller on mobile */}
                <div className="absolute -top-4 -right-4 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 -right-8 w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 bg-yellow-300 rounded-full animate-bounce"></div>
                <div className="absolute top-1/4 -left-6 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 -right-6 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>
                      </div>
        </div>
        
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;