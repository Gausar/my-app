import { useInView } from "../hooks/useInView";

export const SkillBar = ({ name, level }) => {
  const [ref, inView] = useInView(0.3);

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar-head">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-level">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: inView ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
};
