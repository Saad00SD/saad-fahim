import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const About = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      id="about"
      // Light: Subtle white/gray gradient | Dark: Subtle black/neutral gradient
      className={`py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-neutral-900 relative overflow-hidden section-transition ${isVisible ? "visible" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-800 dark:from-amber-300 dark:to-amber-500">
            About Me
          </h2>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: Portrait */}
          <div className="flex justify-center">
            <CardContent className="pt-6">
              <div className="relative mx-auto w-full max-w-sm">
                {/* Aura */}
                <div className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-40 blur-2xl bg-gradient-to-tr from-yellow-400/20 via-gray-50/10 to-transparent dark:from-amber-400/20 dark:via-neutral-900/10" />
                {/* Border */}
                <div className="relative rounded-[2rem] p-[3px] bg-gradient-to-tr from-yellow-400/50 via-gray-400/20 to-yellow-500/30 dark:from-amber-400/50 dark:via-neutral-500/20 dark:to-amber-500/30 shadow-2xl shadow-black/10 dark:shadow-black/40">
                  {/* Image Background */}
                  <div className="rounded-[1.85rem] overflow-hidden bg-white dark:bg-neutral-900">
                    <img src="portrait.jpg"
                      alt="My portrait"
                      className="block w-full h-auto object-cover"
                    />
                  </div>
                </div>
                {/* SVG Squiggle */}
                <svg
                  className="absolute -bottom-8 -right-10 w-44 h-44 opacity-30"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 120 C60 60, 140 60, 160 120"
                    fill="none"
                    className="stroke-yellow-500 dark:stroke-amber-400"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </CardContent>
          </div>

          {/* RIGHT COLUMN: Detailed Explanation & Education */}
          <div className="space-y-8">
            <div className="bg-white/50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 backdrop-blur-sm space-y-6 shadow-lg">
              <p className="text-gray-600 dark:text-neutral-400 leading-relaxed text-justify">
                Hi, I'm <span className="text-gray-900 dark:text-neutral-100 font-medium">Saad Fahim</span> — BSc in Computer Science with a focus on
                <span className="text-yellow-700 dark:text-amber-400 font-medium"> AI/ML</span>, <span className="text-yellow-700 dark:text-amber-400 font-medium">Data Science</span>, and
                <span className="text-yellow-700 dark:text-amber-400 font-medium"> Software Engineering</span>. I'm a fast learner who enjoys exploring new tools and
                turning ideas into innovative, practical solutions to real-world problems.
              </p>
              
              <p className="text-gray-600 dark:text-neutral-400 leading-relaxed text-justify">
                <span className="text-gray-800 dark:text-neutral-200 font-medium">
                  I have hands-on experience designing, building, and shipping end-to-end projects. 
                  My work involves creating intelligent systems, from AI-powered chatbots that analyze documents to machine learning pipelines. 
                  I also build full-stack solutions, including interactive dashboards and backend APIs, to provide actionable operational insights. My core skills bridge the gap between machine learning, data science, and software engineering, always supported by solid version control and deployment practices.
                </span>
              </p>

              <p className="text-gray-600 dark:text-neutral-400 leading-relaxed text-justify">
                <span className="text-gray-800 dark:text-neutral-200 font-medium">
                  I have demonstrated strong leadership and teamwork in high-pressure environments. As a Supervisor at the Asia Cup 2023 with Bookme, 
                  I oversaw on-ground operations and coordinated schedules for a team of 100+ members to ensure seamless event execution. 
                  As Media Head of the DigiSkillsDev Society, I led our digital platforms and content strategy, collaborating across teams to deliver consistent, high-quality communications and measurable engagement.
                </span>
              </p>
            </div>
            
            <Card className="bg-white/50 dark:bg-neutral-900/50 border border-gray-200 dark:border-neutral-800 rounded-2xl backdrop-blur-md shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-neutral-100">Education</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-yellow-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-neutral-200 leading-tight text-sm">
                        BSc in Computer Science
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-500">
                        PAF-IAST
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-yellow-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-neutral-200 leading-tight text-sm">
                        G.C.E (Advanced Level)
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-500">
                        All Saint's College
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;