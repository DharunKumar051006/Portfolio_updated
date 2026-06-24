interface ContactButtonProps {
  label?: string;
  className?: string;
  onClick?: () => void;
}

export default function ContactButton({
  label = "Contact Me",
  className = "",
  onClick,
}: ContactButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Scroll to the contact footer section with contact details
      const contactElement = document.getElementById("contact-footer");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`contact-btn-gradient rounded-full text-white font-medium uppercase tracking-[0.15em] hover:opacity-85 hover:brightness-110 transition-all duration-200 cursor-pointer ${className}`}
      style={{
        padding: "clamp(12px, 1.2vw, 16px) clamp(24px, 2.5vw, 48px)",
        fontSize: "clamp(0.75rem, 0.9vw, 1rem)",
      }}
    >
      {label}
    </button>
  );
}
