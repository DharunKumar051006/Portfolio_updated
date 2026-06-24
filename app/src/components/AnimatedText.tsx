import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className={`text-center leading-relaxed max-w-[560px] ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => {
            const globalIndex =
              words
                .slice(0, wordIndex)
                .reduce((acc, w) => acc + w.length, 0) + charIndex;
            const totalChars = text.length;

            return (
              <Character
                key={charIndex}
                char={char}
                progress={scrollYProgress}
                globalIndex={globalIndex}
                totalChars={totalChars}
              />
            );
          })}
        </span>
      ))}
    </p>
  );
}

function Character({
  char,
  progress,
  globalIndex,
  totalChars,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  globalIndex: number;
  totalChars: number;
}) {
  const start = globalIndex / totalChars;
  const end = (globalIndex + 1) / totalChars;

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}
