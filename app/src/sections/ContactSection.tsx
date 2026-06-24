import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const certifications = [
  {
    image: "/images/cert-ibm.png",
    tooltip: "IBM Certified Generative AI",
  },
  {
    image: "/images/cert-nasscom.png",
    tooltip: "NASSCOM Data Processing & Visualization",
  },
  {
    image: "/images/cert-infosys.png",
    tooltip: "Infosys JavaScript Certification",
  },
];

const skills = [
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "#3776AB" },
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", color: "#007396" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "TensorFlow", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", color: "#FF6F00" },
  { name: "PyTorch", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", color: "#EE4C2C" },
  { name: "Keras", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg", color: "#D00000" },
  { name: "React.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", color: "#68A063" },
  { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "#13AA52" },
  { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", color: "#00758F" },
  { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#F1502F" },
  { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", color: "#2496ED" },
  { name: "NumPy", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", color: "#013243" },
  { name: "Pandas", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", color: "#150458" },
  { name: "OpenCV", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg", color: "#5C3EE8" },
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", color: "#E34C26" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "#1572B6" },
];

export default function ContactSection() {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  return (
    <section
      id="contact"
      className="w-full bg-[#0C0C0C] relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center tracking-tight leading-[1.1] mb-12 sm:mb-16 md:mb-20"
            style={{ fontSize: "clamp(2.5rem, 10vw, 120px)" }}
          >
            Let&apos;s Build Intelligent Solutions Together
          </h2>
        </FadeIn>

        {/* Certifications */}
        <FadeIn delay={0.4} y={20} className="w-full flex flex-col items-center mt-6">
          <span className="text-[#00D9FF] font-bold uppercase text-[0.875rem] tracking-[0.08em] text-center">
            Certifications
          </span>
          <div className="flex justify-center gap-6 mt-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.tooltip}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredCert(index)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <img
                  src={cert.image}
                  alt={cert.tooltip}
                  className="w-[60px] h-[60px] rounded-xl object-contain hover:scale-110 transition-transform duration-200 cursor-pointer"
                  loading="lazy"
                />
                <span
                  className={`absolute top-[72px] text-[#D7E2EA] font-normal text-[0.75rem] text-center whitespace-nowrap transition-opacity duration-200 ${
                    hoveredCert === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {cert.tooltip}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Skills */}
        <div id="skills" className="w-full">
          <FadeIn delay={0.5} y={20} className="w-full flex flex-col items-center mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-[rgba(215,226,234,0.1)]">
            <span className="text-[#00D9FF] font-bold uppercase text-[0.8rem] tracking-[0.08em] text-center mb-8 sm:mb-10">
              Skills & Technologies
            </span>
          
          {/* Skills Grid - Two Rows */}
          <div className="w-full px-4 sm:px-0">
            {/* Top Row - Moving Left */}
            <div className="relative mb-6 sm:mb-8 overflow-hidden rounded-lg">
              <motion.div 
                className="flex gap-3 sm:gap-4 md:gap-5 w-max"
                initial={{ x: 0 }}
                animate={{ x: -1500 }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...skills.slice(0, 8), ...skills.slice(0, 8), ...skills.slice(0, 8)].map((skill, index) => (
                  <motion.div
                    key={`top-${index}`}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.08, 0.4),
                    }}
                    whileHover={{
                      y: -12,
                      scale: 1.15,
                      boxShadow: "0 20px 50px rgba(0, 217, 255, 0.4)",
                    }}
                    className="group cursor-pointer flex-shrink-0"
                  >
                    <div
                      className="relative bg-gradient-to-br from-[rgba(215,226,234,0.1)] to-[rgba(215,226,234,0.05)] border border-[rgba(215,226,234,0.2)] rounded-xl p-4 sm:p-5 md:p-6 hover:border-[#00D9FF] transition-all duration-300 flex flex-col items-center justify-center gap-3 w-[110px] sm:w-[120px] md:w-[140px] h-[110px] sm:h-[120px] md:h-[140px]"
                      style={{
                        background: `linear-gradient(135deg, rgba(0,217,255,0.08) 0%, rgba(${skill.color}, 0.08) 100%)`,
                      }}
                    >
                      {/* Animated background glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at center, ${skill.color}20, transparent)`,
                        }}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />

                      {/* Skill Image */}
                      <motion.div
                        className="relative z-10 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 flex items-center justify-center"
                        whileHover={{ rotate: 20, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <img 
                          src={skill.image} 
                          alt={skill.name}
                          className="w-full h-full object-contain drop-shadow-lg"
                          style={{ filter: "drop-shadow(0 0 8px rgba(0,217,255,0.3))" }}
                          onError={(e) => {
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ctext x='20' y='20' text-anchor='middle' dy='.3em' fill='%2300D9FF' font-size='24'%3E?%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </motion.div>

                      {/* Skill Name */}
                      <span
                        className="text-[#D7E2EA] font-bold text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] uppercase tracking-[0.06em] text-center group-hover:text-[#00D9FF] transition-colors duration-300 relative z-10"
                        style={{ color: skill.color }}
                      >
                        {skill.name}
                      </span>

                      {/* Animated pulse border on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-[#00D9FF] opacity-0 group-hover:opacity-100"
                        animate={{ boxShadow: [
                          "0 0 0 0 rgba(0,217,255,0.4)",
                          "0 0 30px 15px rgba(0,217,255,0.2)",
                          "0 0 0 0 rgba(0,217,255,0)"
                        ]}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Row - Moving Right */}
            <div className="relative overflow-hidden rounded-lg">
              <motion.div 
                className="flex gap-3 sm:gap-4 md:gap-5 w-max"
                initial={{ x: -1500 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...skills.slice(8, 17), ...skills.slice(8, 17), ...skills.slice(8, 17)].map((skill, index) => (
                  <motion.div
                    key={`bottom-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.08, 0.4),
                    }}
                    whileHover={{
                      y: -12,
                      scale: 1.15,
                      boxShadow: "0 20px 50px rgba(0, 217, 255, 0.4)",
                    }}
                    className="group cursor-pointer flex-shrink-0"
                  >
                    <div
                      className="relative bg-gradient-to-br from-[rgba(215,226,234,0.1)] to-[rgba(215,226,234,0.05)] border border-[rgba(215,226,234,0.2)] rounded-xl p-4 sm:p-5 md:p-6 hover:border-[#00D9FF] transition-all duration-300 flex flex-col items-center justify-center gap-3 w-[110px] sm:w-[120px] md:w-[140px] h-[110px] sm:h-[120px] md:h-[140px]"
                      style={{
                        background: `linear-gradient(135deg, rgba(0,217,255,0.08) 0%, rgba(${skill.color}, 0.08) 100%)`,
                      }}
                    >
                      {/* Animated background glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle at center, ${skill.color}20, transparent)`,
                        }}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />

                      {/* Skill Image */}
                      <motion.div
                        className="relative z-10 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 flex items-center justify-center"
                        whileHover={{ rotate: 20, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <img 
                          src={skill.image} 
                          alt={skill.name}
                          className="w-full h-full object-contain drop-shadow-lg"
                          style={{ filter: "drop-shadow(0 0 8px rgba(0,217,255,0.3))" }}
                          onError={(e) => {
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ctext x='20' y='20' text-anchor='middle' dy='.3em' fill='%2300D9FF' font-size='24'%3E?%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </motion.div>

                      {/* Skill Name */}
                      <span
                        className="text-[#D7E2EA] font-bold text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] uppercase tracking-[0.06em] text-center group-hover:text-[#00D9FF] transition-colors duration-300 relative z-10"
                        style={{ color: skill.color }}
                      >
                        {skill.name}
                      </span>

                      {/* Animated pulse border on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-[#00D9FF] opacity-0 group-hover:opacity-100"
                        animate={{ boxShadow: [
                          "0 0 0 0 rgba(0,217,255,0.4)",
                          "0 0 30px 15px rgba(0,217,255,0.2)",
                          "0 0 0 0 rgba(0,217,255,0)"
                        ]}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
