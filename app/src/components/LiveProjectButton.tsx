interface LiveProjectButtonProps {
  label?: string;
  className?: string;
  onClick?: () => void;
  link?: string;
}

export default function LiveProjectButton({
  label = "Live Project",
  className = "",
  onClick,
  link,
}: LiveProjectButtonProps) {
  const buttonStyles = `rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-[0.15em] bg-transparent hover:bg-[#D7E2EA]/10 transition-all duration-200 cursor-pointer ${className}`;
  
  const styleProps = {
    padding: "clamp(12px, 1.2vw, 14px) clamp(24px, 2.5vw, 40px)",
    fontSize: "clamp(0.875rem, 1vw, 1rem)",
  };

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyles}
        style={styleProps}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonStyles}
      style={styleProps}
    >
      {label}
    </button>
  );
}
