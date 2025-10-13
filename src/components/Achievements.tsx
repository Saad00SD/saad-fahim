import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, FileCheck, Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Achievements = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  
  const awards = [
    {
      title: "URAAN Project Exibition - Runner Up",
      organization: "PAF-IAST",
      description: "Developed the Hostel Management System for student registration, room allotments, mess management, and automated fee calculation",
      date: "2023",
      type: "award",
      image: "project-images/uran-img.jpg"
    },
    {
      title: "Dean's List",
      organization: "PAF-IAST",
      description: "Academic excellence recognition for the GPA 3.92 in Fall semester",
      date: "2021",
      type: "award"
    },
  ];

  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2025",
      credentialId: "TH2FNPLD3Q2T",
    },
    {
      title: "Generative AI Explorer - Vertex AI",
      issuer: "Google",
      date: "2025",
      credentialId: "13679043",
    },
    {
      title: "Python Programming",
      issuer: "University of Moratuwa",
      date: "2024",
      credentialId: "meytDnM1HT",
    },
    {
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      date: "2024",
      credentialId: "Xw4Gu7MlGk",
    }
  ];

  return (
    <section 
      ref={elementRef}
      id="achievements" 
      className={`py-20 section-transition ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500 stagger-1">
            Awards & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Awards */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 stagger-3">
              <Trophy className="text-amber-400 animate-float" size={28} />
              <h3 className="text-2xl font-semibold text-neutral-100">Awards</h3>
            </div>
            
            {/* UPDATED: Added 'items-start' to prevent cards from stretching */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              {awards.map((award, index) => (
                <Card key={index} className={`group bg-neutral-900/50 border-neutral-800 hover:border-amber-500/40 backdrop-blur-sm shadow-lg hover:shadow-amber-500/10 transition-all duration-300 stagger-${index + 4}`}>
                  <CardHeader>
                    {award.image && (
                      <div className="mb-4 rounded-md overflow-hidden border border-neutral-700">
                        <img 
                          src={award.image} 
                          alt={award.title} 
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-start justify-between">
                      <Award className="text-amber-400 mt-1 group-hover:scale-110 transition-transform duration-300" size={24} />
                      <Badge className="bg-neutral-800 text-amber-400 border-amber-400/30 text-xs">
                        {award.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-neutral-100">{award.title}</CardTitle>
                    <CardDescription className="text-amber-500 font-medium">
                      {award.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-400">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 stagger-5">
              <FileCheck className="text-amber-400" size={28} />
              <h3 className="text-2xl font-semibold text-neutral-100">Professional Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className={`group bg-neutral-900/50 border-neutral-800 hover:border-amber-500/40 backdrop-blur-sm shadow-lg hover:shadow-amber-500/10 transition-shadow duration-300 stagger-${index + 6}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="text-amber-400" size={20} />
                        <CardTitle className="text-lg text-neutral-100">{cert.title}</CardTitle>
                      </div>
                      <Badge className="bg-neutral-800 text-amber-400 border-amber-400/30 text-xs">{cert.date}</Badge>
                    </div>
                    <CardDescription className="text-amber-500 font-medium pl-7">
                      {cert.issuer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pl-7">
                    <p className="text-sm text-neutral-400">
                      <span className="font-medium text-neutral-300">Credential ID:</span> {cert.credentialId}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;