import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, LineChart, Code, Cpu, BarChart3, Globe, Cloud, GitBranch } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Skills = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  
  const skills = [
    { 
      category: "Machine Learning", 
      icon: Brain, 
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "OpenCV"],
      level: "Advanced",
      color: "from-purple-500 to-pink-500"
    },
    { 
      category: "Data Science", 
      icon: BarChart3, 
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Statistical Analysis"],
      level: "Advanced",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      category: "Programming", 
      icon: Code, 
      items: ["Python", "C++", "SQL", "C#", "JavaScript", "TypeScript"],
      level: "Advanced",
      color: "from-green-500 to-emerald-500"
    },
    { 
      category: "Big Data", 
      icon: Database, 
      items: ["Apache Spark", "Hadoop", "MongoDB", "PostgreSQL", "Kafka", "Redis"],
      level: "Intermediate",
      color: "from-orange-500 to-red-500"
    },
    { 
      category: "Cloud & MLOps", 
      icon: Cloud, 
      items: ["Azure", "Docker", "Kubernetes", "MLflow", "Git", "CI/CD"],
      level: "Intermediate",
      color: "from-indigo-500 to-purple-500"
    },
    { 
      category: "Analytics", 
      icon: LineChart, 
      items: ["Tableau", "Power BI", "Excel", "SPSS", "Data Visualization", "ETL"],
      level: "Advanced",
      color: "from-yellow-500 to-orange-500"
    },
    { 
      category: "Web Development", 
      icon: Globe, 
      items: ["React", "Next.js", "Node.js", "HTML/CSS", "Tailwind CSS", "REST APIs"],
      level: "Intermediate",
      color: "from-teal-500 to-blue-500"
    },
    { 
      category: "Version Control", 
      icon: GitBranch, 
      items: ["Git", "GitHub", "GitLab", "Bitbucket", "Code Review", "Branching Strategies"],
      level: "Advanced",
      color: "from-gray-500 to-slate-500"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-500/20 text-green-600 border-green-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-600 border-yellow-500/30";
      case "Beginner":
        return "bg-blue-500/20 text-blue-600 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-600 border-gray-500/30";
    }
  };

  return (
    <section 
      ref={elementRef}
      id="skills" 
      className={`py-20 bg-gradient-to-b from-accent/5 to-secondary/10 relative overflow-hidden section-transition ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground stagger-1">Technical Skills</h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/90 backdrop-blur-sm transform hover:scale-105 hover:rotate-1 shadow-lg shadow-black/20 stagger-${index + 3} mx-auto`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} shadow-lg`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <Badge className={`${getLevelColor(skill.level)} text-xs font-medium`}>
                      {skill.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <Badge 
                        key={itemIndex} 
                        variant="secondary" 
                        className="text-xs bg-secondary/50 hover:bg-secondary/80 transition-colors duration-200"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Summary */}
        {/* <div className="mt-16 text-center stagger-7">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 shadow-xl shadow-black/30">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold mb-4 text-foreground">Skills Summary</h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Technology Categories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Technologies & Tools</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
                Continuously expanding my skill set through hands-on projects, certifications, 
                and staying updated with the latest trends in AI/ML and software development.
              </p>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
