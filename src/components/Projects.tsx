import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, ImageIcon, TrendingUp, MessageSquare, Globe, ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const projectsData = [
    {
      title: "iNova - Intelligent Traffic Control System",
      description: "AI traffic control system using computer vision to detect anomalies and optimize signals, improving congestion and emergency response. Django dashboard for live monitoring and remote management.",
      icon: TrendingUp,
      image: "project-images/inova.png",
      technologies: ["Python", "TensorFlow", "Django", "OpenCV","Tailwind", "PostgreSQL"],
      features: ["Real-Time Anomaly Detection", "Traffic Signal Optimization", "Incident Alerts", "Data Pipeline"],
      githubUrl: "https://github.com/Saad00SD/iNovatcs-Intelligent_Traffic_Control_System_Final-Year-Project",
      liveUrl: "https://github.com/Saad00SD/iNovatcs-Intelligent_Traffic_Control_System_Final-Year-Project"
    },
    {
      title: "NLP-based Warehouse and Retail Sales Data Chatbot",
      description: "Developed an interactive chatbot using NLP to answer warehouse and retail sales queries from CSV data, integrating LangChain LLM (LLaMA 3 - 8B) and Groq API, with a Streamlit interface.",
      icon: ImageIcon,
      image: "project-images/nlpChatBot.jpeg",
      technologies: ["NLP", "LangChain", "Groq API", "Streamlit", "CSV","Python"],
      features: ["Agent",  "Real-Time Querying", "Interactive UI"],
      githubUrl: "https://github.com/Saad00SD/Warehouse-ChatBot",
      liveUrl: "https://github.com/Saad00SD/Warehouse-ChatBot"
    },
    {
      title: "Tokyo Olympic 2020- Big Data Analytics",
      description: "Used Azure and Apache Spark with DataBricks and GitHub to process, transform, and analyze the Olympic 2020 dataset, ensuring data quality and insights.",
      icon: MessageSquare,
      image: "project-images/olympic-analytics.png",
      technologies: ["Azure", "Apache Spark", "DataBricks", "Python", "GitHub","Azure Data Factory"],
      features: ["Data Processing", "Data Transformation", "Data Analysis", "Data Quality"],
      githubUrl: "https://github.com/Saad00SD/Tokyo_Olympic_2020_Data_Analytics",
      liveUrl: "https://github.com/Saad00SD/Tokyo_Olympic_2020_Data_Analytics"
    },
    {
      title: "PAF-IAST Hostel Management System",
      description: "Comprehensive hostel management system for student registration, room allotments, mess management, and automated fee calculation with real-time reporting and analytics.",
      icon: Brain,
      image: "project-images/pafiast.jpg",
      technologies: [".NET", "C#", "MySQL",],
      features: ["Student Registration", "Room Management", "Mess Management", "Fee Calculation"],
      githubUrl: "https://github.com/Saad00SD/PAF-IAST_Hostel_Management_System",
      liveUrl: "https://github.com/Saad00SD/PAF-IAST_Hostel_Management_System"
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light theme toggle, smooth animations, and mobile-first design with optimized performance.",
      icon: Globe,
      image: "project-images/website.png",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML","CSS"],
      features: ["Responsive Design", "Dark/Light Theme", "Smooth Animations", "Mobile Optimized"],
      githubUrl: "https://github.com/Saad00SD/Saad-Fahim-portfolio",
      liveUrl: "https://saad00sd.github.io/Saad-Fahim-portfolio"
    },
    {
      title: "Memory-Powered ChatBot",
      description: "Advanced conversational AI chatbot with persistent memory capabilities, built using LangChain and OpenAI GPT models. Features context retention, conversation history, and intelligent response generation.",
      icon: MessageSquare,
      image: "project-images/memBot.png",
      technologies: ["Python", "LangChain", "OpenAI GPT",  "Mem0","Jupyter"],
      features: ["Persistent Memory", "Context Retention", "Conversation History", "Smart Responses"],
      githubUrl: "https://github.com/Saad00SD/Memory-Powered-Chatbot-With-OpenAI-mem0.git",
      liveUrl: "https://github.com/Saad00SD/Memory-Powered-Chatbot-With-OpenAI-mem0.git"
    }
];

const Projects = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCardExpansion = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section 
      ref={elementRef}
      id="projects" 
      className={`py-20 relative overflow-hidden section-transition ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500 stagger-1">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const IconComponent = project.icon;
            const isExpanded = !!expandedCards[index];

            return (
              <motion.div
                key={index}
                layout
                className={`group relative overflow-hidden rounded-lg bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm shadow-lg transition-all duration-500 ease-in-out stagger-${index + 3} ${isExpanded ? 'hover:border-amber-500/60' : 'hover:border-amber-500/40'}`}
              >
                {/* DECREASED: Image height reduced from h-48 to h-40 */}
                <motion.div layout className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                      <Button variant="ghost" size="icon" className="text-amber-400 bg-black/50 backdrop-blur-sm hover:bg-black/70 transform hover:scale-110 hover:rotate-12 transition-all duration-300 h-8 w-8">
                        <Github size={16} />
                      </Button>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View Live Project">
                      <Button variant="ghost" size="icon" className="text-amber-400 bg-black/50 backdrop-blur-sm hover:bg-black/70 transform hover:scale-110 hover:-rotate-12 transition-all duration-300 h-8 w-8">
                        <ExternalLink size={16} />
                      </Button>
                    </a>
                  </div>
                </motion.div>
                
                {/* DECREASED: Padding reduced from p-6 to p-4 */}
                <motion.div layout className="p-4">
                  <div className="flex items-start gap-2">
                    {/* DECREASED: Icon size and padding reduced */}
                    <div className="p-1.5 rounded-lg bg-amber-400/10 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                      <IconComponent size={20} className="text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold leading-tight text-neutral-100">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-4" // Padding matches new standard
                    >
                      <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs font-medium mb-2 text-neutral-500 uppercase tracking-wider">Key Features</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.features.map((feature) => (
                              <Badge key={feature} variant="outline" className="text-xs border-amber-400/20 bg-transparent text-amber-400/80">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-medium mb-2 text-neutral-500 uppercase tracking-wider">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} className="text-xs bg-amber-400/10 text-amber-400 hover:bg-amber-400/20">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* DECREASED: Padding reduced */}
                <motion.div layout className="p-4 pt-2 flex justify-center">
                  <Button
                    onClick={() => toggleCardExpansion(index)}
                    variant="ghost"
                    className="w-full text-amber-400 hover:bg-amber-400/10"
                  >
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="mr-2"
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                    {isExpanded ? "Show Less" : "Load More"}
                  </Button>
                </motion.div>

              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a href="https://github.com/Saad00SD?tab=repositories" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="border-amber-400/40 text-amber-400 hover:bg-amber-400/10 hover:text-amber-300 transition-colors">
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;