import FadeIn from "@/components/FadeIn";

interface Achievement {
  badge: string;
  badgeBg: string;
  title: string;
  org?: string;
  description: string;
  tags: string[];
  image: string;
  reverse?: boolean;
}

const achievements: Achievement[] = [
  {
    badge: "Runner-Up",
    badgeBg: "#0C0C0C",
    title: "Thinkathon'26",
    org: "Department of Artificial Intelligence, Kongu Engineering College",
    description:
      "Built Agrounity, an AI-powered agriculture platform featuring crop monitoring, pest detection, crop recommendations, real-time insights, and farmer support tools.",
    tags: ["AI", "Agriculture", "Computer Vision", "IoT"],
    image: "/images/achievement-trophy.png",
  },
  {
    badge: "Finalist",
    badgeBg: "#7621B0",
    title: "Smart India Hackathon 2025",
    description:
      "National-level hackathon finalist. Developed an offline-first gamified STEM learning platform targeting rural education with optimized performance for low-bandwidth environments.",
    tags: ["Flutter", "Gamification", "Offline-First", "EdTech"],
    image: "/images/achievement-hackathon.png",
    reverse: true,
  },
  {
    badge: "AI Project",
    badgeBg: "rgba(12,12,12,0.8)",
    title: "Agrounity -- AI Agriculture Platform",
    description:
      "AI-powered agriculture platform developed during Thinkathon'26, featuring crop monitoring, pest detection, crop recommendations, real-time insights, and farmer support tools.",
    tags: ["Python", "OpenCV", "Machine Learning", "IoT"],
    image: "/images/achievement-agrounity.png",
  },
];

function AchievementCard({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  return (
    <FadeIn delay={0.15 + index * 0.15} y={30}>
      <div
        className={`bg-white border border-[rgba(12,12,12,0.08)] p-5 sm:p-6 md:p-10 flex flex-col ${
          achievement.reverse ? "sm:flex-row-reverse" : "sm:flex-row"
        } gap-4 sm:gap-6 md:gap-8 rounded-[20px] sm:rounded-[28px] md:rounded-[32px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-200`}
      >
        {/* Image Column */}
        <div className="sm:w-[35%] flex items-center justify-center">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="max-h-[160px] sm:max-h-[200px] md:max-h-[240px] w-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Content Column */}
        <div className="sm:w-[65%] flex flex-col justify-center">
          <span
            className="text-white font-medium text-[0.75rem] uppercase px-3 py-1 rounded-full self-start"
            style={{ backgroundColor: achievement.badgeBg }}
          >
            {achievement.badge}
          </span>
          <h3
            className="text-[#0C0C0C] font-semibold mt-2 sm:mt-3"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.3rem)" }}
          >
            {achievement.title}
          </h3>
          {achievement.org && (
            <p className="text-[rgba(12,12,12,0.5)] font-normal text-[0.75rem] sm:text-[0.8rem] mt-0.5 sm:mt-1">
              {achievement.org}
            </p>
          )}
          <p className="text-[rgba(12,12,12,0.7)] font-light text-[0.85rem] sm:text-[0.9rem] leading-relaxed mt-2.5 sm:mt-4">
            {achievement.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {achievement.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[rgba(12,12,12,0.06)] text-[#0C0C0C] font-normal text-[0.75rem] px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function AchievementsSection() {
  return (
    <section className="w-full bg-[#F5F5F0] relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Achievements
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
