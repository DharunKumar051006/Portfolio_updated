import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import LiveProjectButton from "@/components/LiveProjectButton";

interface ProjectData {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  col1Images: string[];
  col2Image: string;
  liveLink?: string;
}

const projects: ProjectData[] = [
  {
    number: "01",
    category: "AI Application",
    title: "Smart AI Notes Summarizer",
    description:
      "A multi-modal AI note generation platform supporting text, speech, image, and PDF inputs. Features AI-powered summarization in 18 languages and an intelligent retrieval pipeline for faster learning.",
    technologies: ["Python", "React", "LLM", "MongoDB"],
    col1Images: [
      "/images/project-01-dashboard.jpg",
      "/images/project-01-mobile.jpg",
    ],
    col2Image: "/images/project-01-pipeline.jpg",
    liveLink: "https://github.com/Dharunkumar0/AI-Notes-Generator-Hackelite/tree/localLLM",
  },
  {
    number: "02",
    category: "Hackathon Project",
    title: "Gamified Learning Platform",
    description:
      "An offline-first STEM learning platform designed for rural students. Includes interactive games, quizzes, teacher analytics, and optimized performance for low-bandwidth environments. Smart India Hackathon 2025 Finalist Project.",
    technologies: ["Flutter", "JavaScript", "HTML", "CSS"],
    col1Images: [
      "/images/project-02-game.jpg",
      "/images/project-02-analytics.jpg",
    ],
    col2Image: "/images/project-02-students.jpg",
    liveLink: "https://github.com/Dharunkumar0/Aurraa",
  },
  {
    number: "03",
    category: "Generative AI",
    title: "RAG Based AI Tutor",
    description:
      "A privacy-focused AI tutor built using Retrieval-Augmented Generation and local LLM inference. Enables multilingual conversations with study materials and provides personalized learning assistance.",
    technologies: ["React", "Python", "LLM", "Vector Database"],
    col1Images: [
      "/images/project-03-interface.jpg",
      "/images/project-03-rag-diagram.jpg",
    ],
    col2Image: "/images/project-03-multilingual.jpg",
    liveLink: "https://github.com/Dharunkumar0/AI-POWERED-VIRTUAL-LEARNING-TUTOR-RAG",
  },
];

const TOTAL_CARDS = projects.length;

function ProjectCard({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="h-[85vh] sticky top-24 md:top-32"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        className="w-full h-full bg-[#0C0C0C] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col"
        style={{
          scale,
          borderRadius: "clamp(40px, 5vw, 60px)",
          willChange: "transform",
        }}
      >
        {/* Card Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex items-start gap-4 sm:gap-8">
            <span
              className="hero-heading font-black tracking-tight leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pt-2 sm:pt-4">
              <span className="text-[#D7E2EA] font-normal uppercase tracking-[0.05em] text-[1rem]">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-semibold text-[1.5rem] tracking-[-0.01em]">
                {project.title}
              </span>
            </div>
          </div>
          <LiveProjectButton 
            className="hidden sm:block flex-shrink-0"
            link={project.liveLink}
          />
        </div>

        {/* Image Grid */}
        <div className="flex-1 flex gap-3 sm:gap-4 mt-4 min-h-0 overflow-hidden">
          <div className="flex flex-col gap-3 sm:gap-4 w-[40%] min-h-0">
            <img
              src={project.col1Images[0]}
              alt={`${project.title} screenshot 1`}
              className="w-full object-cover flex-shrink-0"
              style={{
                height: "clamp(100px, 12vw, 180px)",
                borderRadius: "clamp(20px, 3vw, 40px)",
                maxHeight: "180px",
              }}
              loading="lazy"
            />
            <img
              src={project.col1Images[1]}
              alt={`${project.title} screenshot 2`}
              className="w-full object-cover flex-1 min-h-0"
              style={{
                borderRadius: "clamp(20px, 3vw, 40px)",
              }}
              loading="lazy"
            />
          </div>
          <div className="w-[60%] min-h-0 flex items-center justify-center">
            <img
              src={project.col2Image}
              alt={`${project.title} screenshot 3`}
              className="w-full h-full object-contain"
              style={{
                borderRadius: "clamp(20px, 3vw, 40px)",
                maxHeight: "100%",
              }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Tech Tags & Description */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-[rgba(215,226,234,0.1)] text-[#D7E2EA] font-normal text-[0.75rem] px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-[rgba(215,226,234,0.7)] font-light text-[0.9rem] leading-relaxed mt-3">
            {project.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full bg-[#0C0C0C] relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center tracking-tight mb-16 sm:mb-20"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Project
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
