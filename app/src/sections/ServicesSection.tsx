import FadeIn from "@/components/FadeIn";

const services = [
  {
    number: "01",
    name: "Artificial Intelligence",
    description:
      "Building AI-powered applications using Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI technologies to solve real-world challenges.",
  },
  {
    number: "02",
    name: "LLM & RAG Development",
    description:
      "Designing intelligent assistants, chatbots, and Retrieval-Augmented Generation systems using modern LLMs, vector databases, and advanced prompt engineering.",
  },
  {
    number: "03",
    name: "Full Stack Development",
    description:
      "Developing scalable web applications using React, Node.js, MongoDB, MySQL, and modern development practices focused on performance and usability.",
  },
  {
    number: "04",
    name: "Backend Engineering",
    description:
      "Creating secure APIs, database architectures, and cloud-ready backend systems that ensure reliability, scalability, and high performance.",
  },
  {
    number: "05",
    name: "Data Science & Analytics",
    description:
      "Transforming data into actionable insights through machine learning models, visualization, predictive analytics, and intelligent automation.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Services
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
            >
              <div
                className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 md:gap-12 py-6 sm:py-8 md:py-12"
                style={{
                  borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
                }}
              >
                <span
                  className="text-[#0C0C0C] font-black tracking-tight leading-none flex-shrink-0"
                  style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
                >
                  {service.number}
                </span>
                <div className="flex flex-col gap-2 sm:gap-2.5 w-full">
                  <h3
                    className="text-[#0C0C0C] font-medium uppercase tracking-[0.02em]"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="text-[rgba(12,12,12,0.6)] font-light leading-relaxed max-w-2xl"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
