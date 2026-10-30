import { Container, Row, Col } from "react-bootstrap";
import { Briefcase, Mortarboard } from "react-bootstrap-icons";
import { LottieSvg } from "lottie-react";
import { useInView } from "../hooks/useInView";
import { prefersReducedMotion } from "../utils/motion";
import catCodingAnimation from "../assets/lottie/cat-coding.json";
import robotAnimation from "../assets/lottie/robot.json";
import owlGraduateAnimation from "../assets/lottie/owl-graduate.json";

// ============================================================================
// TODO(gausar): your real roles, studies and milestones - newest first.
// type is either "work" or "education" (it picks the icon).
// animation is the Lottie shown beside the card; cover crops it to fill,
// zoom scales up one whose artwork sits small inside its frame.
// ============================================================================
const TIMELINE = [
  {
    date: "2026.09.11 — Present",
    title: "Software Engineer",
    org: "Mobicom",
    description:
      "Building iOS development. ",
    type: "work",
    animation: catCodingAnimation,
    cover: true,
  },
  {
    date: "2025.09.22 — 2026.09.10",
    title: "Junior Software Engineer",
    org: "Nasha Tech",
    description:
      "Building web applications and internal tools, and moving toward ML/AI work.",
    type: "work",
    animation: robotAnimation,
  },
  {
    date: "2021 — 2025",
    title: "BSc, Computer Science",
    org: "National University of Mongolia",
    description:
      "Coursework in algorithms, data structures, machine learning and databases.",
    type: "education",
    animation: owlGraduateAnimation,
    zoom: 1.5,
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
        <div className="tl-text">
          <span className="tl-date">{item.date}</span>
          <h4 className="tl-title">{item.title}</h4>
          <span className="tl-org">{item.org}</span>
          <p className="tl-desc">{item.description}</p>
        </div>
        <div className="tl-lottie" aria-hidden="true">
          <LottieSvg
            src={item.animation}
            className="tl-lottie-player"
            style={item.zoom ? { transform: `scale(${item.zoom})` } : undefined}
            loop={!prefersReducedMotion}
            autoplay={!prefersReducedMotion}
            rendererSettings={
              item.cover ? { preserveAspectRatio: "xMidYMid slice" } : undefined
            }
          />
        </div>
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
