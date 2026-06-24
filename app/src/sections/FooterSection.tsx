import { motion } from "framer-motion";
import { useState } from "react";
import { Linkedin, Github, Code2, MessageCircle } from "lucide-react";

export default function FooterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <footer id="contact-footer" className="w-full bg-[#0C0C0C] px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 border-t border-[rgba(215,226,234,0.1)]">
      <div className="max-w-7xl mx-auto">
        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20 md:mb-24">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-8 sm:mb-10 text-[#D7E2EA]">
              Contact Information
            </h2>

            <div className="space-y-4 sm:space-y-5">
              {/* Email Box */}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                href="mailto:dharunkumar123a@gmail.com"
                className="border border-[rgba(215,226,234,0.2)] rounded-xl px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 hover:border-[rgba(215,226,234,0.4)] hover:bg-[rgba(215,226,234,0.03)] transition-all duration-200 flex items-center gap-5 group block"
              >
                <span className="text-[#00D9FF] text-3xl flex-shrink-0">✉</span>
                <div className="flex flex-col">
                  <span className="text-[#D7E2EA]/60 font-semibold uppercase text-[0.75rem] sm:text-[0.8rem] tracking-[0.08em]">
                    Email
                  </span>
                  <span className="text-[#D7E2EA] font-medium text-[0.95rem] sm:text-[1.05rem] group-hover:text-[#00D9FF] transition-colors mt-1">
                    dharunkumar123a@gmail.com
                  </span>
                </div>
              </motion.a>

              {/* Phone Box */}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                href="tel:+919942613840"
                className="border border-[rgba(215,226,234,0.2)] rounded-xl px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 hover:border-[rgba(215,226,234,0.4)] hover:bg-[rgba(215,226,234,0.03)] transition-all duration-200 flex items-center gap-5 group block"
              >
                <span className="text-[#00D9FF] text-3xl flex-shrink-0">📞</span>
                <div className="flex flex-col">
                  <span className="text-[#D7E2EA]/60 font-semibold uppercase text-[0.75rem] sm:text-[0.8rem] tracking-[0.08em]">
                    Phone
                  </span>
                  <span className="text-[#D7E2EA] font-medium text-[0.95rem] sm:text-[1.05rem] group-hover:text-[#00D9FF] transition-colors mt-1">
                    +91 99426 13840
                  </span>
                </div>
              </motion.a>

              {/* Location Box */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="border border-[rgba(215,226,234,0.2)] rounded-xl px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 hover:border-[rgba(215,226,234,0.4)] hover:bg-[rgba(215,226,234,0.03)] transition-all duration-200 flex items-center gap-5 group"
              >
                <span className="text-[#00D9FF] text-3xl flex-shrink-0">📍</span>
                <div className="flex flex-col">
                  <span className="text-[#D7E2EA]/60 font-semibold uppercase text-[0.75rem] sm:text-[0.8rem] tracking-[0.08em]">
                    Location
                  </span>
                  <span className="text-[#D7E2EA] font-medium text-[0.95rem] sm:text-[1.05rem] group-hover:text-[#00D9FF] transition-colors mt-1">
                    Trichy, Tamil Nadu
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5"
          >
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label className="text-[#D7E2EA] font-semibold uppercase text-[0.8rem] tracking-[0.08em] mb-2 block">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full bg-[rgba(215,226,234,0.05)] border border-[rgba(215,226,234,0.2)] rounded-lg px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-[#D7E2EA] placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#00D9FF] focus:bg-[rgba(0,217,255,0.05)] transition-all duration-200"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <label className="text-[#D7E2EA] font-semibold uppercase text-[0.8rem] tracking-[0.08em] mb-2 block">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full bg-[rgba(215,226,234,0.05)] border border-[rgba(215,226,234,0.2)] rounded-lg px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-[#D7E2EA] placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#00D9FF] focus:bg-[rgba(0,217,255,0.05)] transition-all duration-200"
              />
            </motion.div>

            {/* Subject Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="text-[#D7E2EA] font-semibold uppercase text-[0.8rem] tracking-[0.08em] mb-2 block">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry / Collaboration"
                className="w-full bg-[rgba(215,226,234,0.05)] border border-[rgba(215,226,234,0.2)] rounded-lg px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-[#D7E2EA] placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#00D9FF] focus:bg-[rgba(0,217,255,0.05)] transition-all duration-200"
              />
            </motion.div>

            {/* Message Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <label className="text-[#D7E2EA] font-semibold uppercase text-[0.8rem] tracking-[0.08em] mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                rows={4}
                className="w-full bg-[rgba(215,226,234,0.05)] border border-[rgba(215,226,234,0.2)] rounded-lg px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-[#D7E2EA] placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#00D9FF] focus:bg-[rgba(0,217,255,0.05)] transition-all duration-200 resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              type="submit"
              className="w-full bg-[#1a9d7a] hover:bg-[#158565] text-white font-bold uppercase tracking-[0.08em] text-sm sm:text-base py-3.5 sm:py-4 md:py-5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group mt-2"
            >
              <span>Send Message</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
          </motion.form>
        </div>

        {/* Follow & Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-t border-[rgba(215,226,234,0.1)] pt-12 sm:pt-14 md:pt-16"
        >
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-12 sm:mb-14 text-[#D7E2EA] text-center">
            Follow & Connect
          </h3>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {/* LinkedIn */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              href="https://www.linkedin.com/in/dharun-kumar-s"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex flex-col items-center"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[rgba(0,217,255,0.3)] group-hover:border-[#00D9FF] group-hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-all duration-300"></div>
                
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D9FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon container */}
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-gradient-to-br from-[rgba(0,217,255,0.1)] to-[rgba(0,217,255,0.05)] rounded-xl group-hover:bg-gradient-to-br group-hover:from-[rgba(0,217,255,0.2)] group-hover:to-[rgba(0,217,255,0.1)] transition-all duration-300">
                  <Linkedin className="w-12 h-12 sm:w-16 sm:h-16 text-[#00D9FF] group-hover:scale-125 transition-transform duration-300" strokeWidth={1.5} />
                </div>
              </div>
              <span className="text-[#D7E2EA] font-bold uppercase text-[0.8rem] sm:text-[0.9rem] text-center mt-5 tracking-[0.06em]">LinkedIn</span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              href="https://github.com/Dharunkumar0"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex flex-col items-center"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[rgba(0,217,255,0.3)] group-hover:border-[#00D9FF] group-hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-all duration-300"></div>
                
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D9FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon container */}
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-gradient-to-br from-[rgba(0,217,255,0.1)] to-[rgba(0,217,255,0.05)] rounded-xl group-hover:bg-gradient-to-br group-hover:from-[rgba(0,217,255,0.2)] group-hover:to-[rgba(0,217,255,0.1)] transition-all duration-300">
                  <Github className="w-12 h-12 sm:w-16 sm:h-16 text-[#00D9FF] group-hover:scale-125 transition-transform duration-300" strokeWidth={1.5} />
                </div>
              </div>
              <span className="text-[#D7E2EA] font-bold uppercase text-[0.8rem] sm:text-[0.9rem] text-center mt-5 tracking-[0.06em]">GitHub</span>
            </motion.a>

            {/* LeetCode */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="https://leetcode.com/u/Dharun_kumar_s/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex flex-col items-center"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[rgba(0,217,255,0.3)] group-hover:border-[#00D9FF] group-hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-all duration-300"></div>
                
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D9FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon container */}
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-gradient-to-br from-[rgba(0,217,255,0.1)] to-[rgba(0,217,255,0.05)] rounded-xl group-hover:bg-gradient-to-br group-hover:from-[rgba(0,217,255,0.2)] group-hover:to-[rgba(0,217,255,0.1)] transition-all duration-300">
                  <Code2 className="w-12 h-12 sm:w-16 sm:h-16 text-[#00D9FF] group-hover:scale-125 transition-transform duration-300" strokeWidth={1.5} />
                </div>
              </div>
              <span className="text-[#D7E2EA] font-bold uppercase text-[0.8rem] sm:text-[0.9rem] text-center mt-5 tracking-[0.06em]">LeetCode</span>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              href="https://wa.me/919942613840"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex flex-col items-center"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[rgba(0,217,255,0.3)] group-hover:border-[#00D9FF] group-hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-all duration-300"></div>
                
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D9FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon container */}
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-gradient-to-br from-[rgba(0,217,255,0.1)] to-[rgba(0,217,255,0.05)] rounded-xl group-hover:bg-gradient-to-br group-hover:from-[rgba(0,217,255,0.2)] group-hover:to-[rgba(0,217,255,0.1)] transition-all duration-300">
                  <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 text-[#00D9FF] group-hover:scale-125 transition-transform duration-300" strokeWidth={1.5} />
                </div>
              </div>
              <span className="text-[#D7E2EA] font-bold uppercase text-[0.8rem] sm:text-[0.9rem] text-center mt-5 tracking-[0.06em]">WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-14 md:mt-16 pt-8 sm:pt-10 border-t border-[rgba(215,226,234,0.1)] text-center"
        >
          <p className="text-[#D7E2EA]/50 text-[0.85rem] sm:text-[0.9rem]">
            © 2024 Dharun Kumar. All rights reserved. | Designed & Built with <span className="text-[#00D9FF]">❤</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
