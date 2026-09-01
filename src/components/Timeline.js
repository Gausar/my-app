import { Container, Row, Col } from "react-bootstrap";
import { Briefcase, Mortarboard } from "react-bootstrap-icons";
import { useInView } from "../hooks/useInView";

// ============================================================================
// TODO(gausar): your real roles, studies and milestones - newest first.
// type is either "work" or "education" (it picks the icon).
// ============================================================================
const TIMELINE = [
  {
    date: "2024 — Present",
    title: "Software Engineer",
    org: "Nasha Tech",
    description:
      "Building web applications and internal tools, and moving toward ML/AI work.",
    type: "work",
  },
  {
    date: "2021 — 2025",
    title: "BSc, Software Engineering",
    org: "National University of Mongolia",
    description:
      "Coursework in algorithms, data structures, machine learning and databases.",
    type: "education",
  },
];

const TimelineItem = ({ item }) => {
  const [ref, inView] = useInView(0.25);
  const Icon = item.type === "work" ? Briefcase : Mortarboard;

  return (
    <div ref={ref} className={"tl-item" + (inView ? " in-view" : "")}>
      <div className="tl-marker">
        <Icon size={14} />
      </div>
      <div className="tl-card">
        <span className="tl-date">{item.date}</span>
        <h4 className="tl-title">{item.title}</h4>
        <span className="tl-org">{item.org}</span>
        <p className="tl-desc">{item.description}</p>
      </div>
    </div>
  );
};

export const Timeline = () => {
  return (
    <section className="timeline-section" id="timeline">
      <Container>
        <Row>
          <Col>
            <h2>Experience &amp; Education</h2>
            <p className="tl-intro">The path so far.</p>
            <div className="tl">
              {TIMELINE.map((item, i) => (
                <TimelineItem key={i} item={item} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
