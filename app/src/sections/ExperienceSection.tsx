import FadeIn from "@/components/FadeIn";

const experiences = [
  {
    role: "Backend Developer",
    company: "Cleverstudio (Rikoo AI)",
    date: "April 2026 - May 2026",
    description:
      "Developed and maintained scalable backend services, REST APIs, and database systems for AI-powered applications. Improved reliability, performance, and efficiency across distributed systems.",
    tags: ["REST APIs", "AI Systems", "Distributed Systems"],
  },
  {
    role: "Smart India Hackathon 2025 -- Finalist",
    company: "",
    date: "",
    description:
      "Developed an offline-first gamified learning platform for rural students using interactive learning experiences and optimized animations. Enhanced accessibility for low-connectivity environments.",
    tags: ["Flutter", "Offline-First", "Gamification", "Rural EdTech"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="w-full bg-[#F8F8F6] relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        {/* 3D Decorative Cube */}
        <FadeIn
          delay={0.1}
          y={30}
          x={40}
          duration={0.9}
          className="absolute -top-[60px] sm:-top-[80px] right-[5%] sm:right-[8%] md:right-[12%] opacity-85"
        >
          <img
            src="/images/experience-3d-cube.png"
            alt="Decorative 3D cube"
            className="w-[80px] sm:w-[120px] md:w-[160px] h-auto object-contain"
            style={{ transform: "rotate(15deg)" }}
            loading="lazy"
          />
        </FadeIn>

        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Experience
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
          {experiences.map((exp, index) => (
            <FadeIn key={index} delay={0.15 + index * 0.15} y={30}>
              <div
                className="flex flex-col py-6 sm:py-8 md:py-12"
                style={{
                  borderBottom:
                    index < experiences.length - 1
                      ? "1px solid rgba(12, 12, 12, 0.12)"
                      : "none",
                }}
              >
                <h3
                  className="text-[#0C0C0C] font-semibold"
                  style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}
                >
                  {exp.role}
                </h3>
                {exp.company && (
                  <p className="text-[rgba(12,12,12,0.6)] font-normal text-[0.875rem] uppercase tracking-[0.05em] mt-1">
                    {exp.company}
                  </p>
                )}
                {exp.date && (
                  <p className="text-[rgba(12,12,12,0.5)] font-normal text-[0.875rem] mt-1">
                    {exp.date}
                  </p>
                )}
                <p
                  className="text-[rgba(12,12,12,0.7)] font-light leading-relaxed mt-4 sm:mt-6"
                  style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)" }}
                >
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[rgba(12,12,12,0.06)] text-[#0C0C0C] font-normal text-[0.75rem] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
