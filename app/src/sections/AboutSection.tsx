import FadeIn from "@/components/FadeIn";
import AnimatedText from "@/components/AnimatedText";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Content */}
      <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 z-[2] px-4 sm:px-0">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-24 w-full">
          <div style={{ fontSize: "clamp(0.9rem, 2vw, 1.3rem)" }} className="max-w-2xl mx-auto">
            <AnimatedText
              text="I am an AI/ML and Full Stack Developer passionate about building intelligent applications that solve real-world problems. With experience in Python, React, NLP, LLMs, and scalable software development, I enjoy creating innovative solutions that combine technology, creativity, and user experience. From AI-powered learning platforms to RAG-based tutors and multi-modal applications, I focus on developing products that are practical, efficient, and impactful. Let's build something amazing together."
              className="text-[#D7E2EA] font-medium leading-relaxed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
