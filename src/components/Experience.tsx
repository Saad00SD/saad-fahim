import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Your experience data
const experiences = [
  {
    title: "AI/ML Engineer - Trainee",
    company: "Sherbet Rewards and Technologies",
    period: "2025 - Present",
    description: "London, UK",
  },
  {
    title: "Teaching Assistant",
    company: "PAF-IAST University",
    period: "Feb 2025 - Jun 2025",
    description: "Haripur, PK",
  },
  {
    title: "ERP Internship",
    company: "Datamation Systems (Pvt) Limited",
    period: "Aug 2023 - Sep 2023",
    description: "Colombo, SL",
  },
  {
    title: "Robotics Internship",
    company: "SPCAI",
    period: "Jul 2022 - Aug 2022",
    description: "Haripur, PK",
  },
];

// Reusable component for each experience item
const ExperienceItem = ({ exp, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isLeft = index % 2 === 0;

  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <li ref={ref} className="mb-10 flex w-full items-center justify-between">
      {/* Left Card or Spacer */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        {isLeft && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full max-w-sm rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 text-right shadow-lg backdrop-blur-sm transition-colors hover:border-amber-500/40"
          >
            <p className="mb-1 text-sm font-semibold text-amber-400">{exp.period}</p>
            <h3 className="text-xl font-bold text-neutral-100">{exp.title}</h3>
            <p className="font-medium text-amber-500">{exp.company}</p>
            <p className="mt-2 text-sm text-neutral-400">{exp.description}</p>
          </motion.div>
        )}
      </div>

      {/* Timeline Circle (now correctly positioned on the line) */}
      <div className="z-10 mx-4 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-4 border-amber-400 bg-black"></div>

      {/* Right Card or Spacer */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        {!isLeft && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full max-w-sm rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 text-left shadow-lg backdrop-blur-sm transition-colors hover:border-amber-500/40"
          >
            <p className="mb-1 text-sm font-semibold text-amber-400">{exp.period}</p>
            <h3 className="text-xl font-bold text-neutral-100">{exp.title}</h3>
            <p className="font-medium text-amber-500">{exp.company}</p>
            <p className="mt-2 text-sm text-neutral-400">{exp.description}</p>
          </motion.div>
        )}
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            Experience
          </h2>
        </div>
        
        <div className="relative">
          {/* NEW: Single continuous timeline bar */}
          <div className="absolute left-1/2 top-2 h-full w-0.5 -translate-x-1/2 bg-amber-400/20"></div>
          
          <ul className="mx-auto">
            {experiences.map((exp, idx) => (
              <ExperienceItem key={idx} exp={exp} index={idx} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;