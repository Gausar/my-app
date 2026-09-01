import { useInView } from "../hooks/useInView";

// Fades its children up into place the first time they scroll into view.
export const Reveal = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "reveal-in " : ""}${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};
