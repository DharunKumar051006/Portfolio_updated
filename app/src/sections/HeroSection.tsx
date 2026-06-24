import { motion } from "framer-motion";
import Magnet from "@/components/Magnet";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex justify-between items-center px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8 gap-2 sm:gap-4"
      >
        <div className="flex gap-2 sm:gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-[#D7E2EA] font-medium uppercase tracking-[0.08em] text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none whitespace-nowrap px-2 sm:px-3 md:px-4 py-2 relative z-20"
            >
              {link.label}
            </button>
          ))}
        </div>
        <a
          href="/resume.pdf"
          download
          className="text-[#D7E2EA] font-medium uppercase tracking-[0.08em] text-xs sm:text-sm md:text-lg hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border border-[#D7E2EA] rounded px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 relative z-20 whitespace-nowrap text-[10px] sm:text-xs md:text-sm"
        >
          Download CV
        </a>
      </motion.nav>

      {/* Hero Heading */}
      <div className="overflow-hidden w-full text-center mt-6 sm:mt-4 md:-mt-5">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight sm:tracking-tight leading-tight sm:leading-none w-full text-[4.5vw] sm:text-[10vw] md:text-[11vw] lg:text-[12vw] px-3 sm:px-0"
        >
          HI, I&apos;M<br className="block md:hidden" />
          <span className="hidden md:inline"> </span>DHARUN
          <br />KUMAR
        </motion.h1>
      </div>

      {/* Hero Portrait */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet padding={150} strength={3}>
          <img
            src="/images/hero-portrait.png"
            alt="Dharun Kumar S"
            className="w-full h-auto object-contain"
            draggable={false}
          />
        </Magnet>
      </motion.div>

      {/* Bottom Bar */}
      <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 px-4 sm:px-6 md:px-10 pb-5 sm:pb-7 md:pb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-[0.08em] leading-snug max-w-[150px] sm:max-w-[220px] md:max-w-[280px] order-2 sm:order-1"
          style={{ fontSize: "clamp(0.65rem, 1.4vw, 1.5rem)" }}
        >
          an ai/ml engineer driven by building intelligent, scalable, and impactful digital solutions
        </motion.p>
      </div>
    </section>
  );
}
