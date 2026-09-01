import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Reveal } from "./Reveal";

// Shown only if public/profile.jpg is missing, so the layout never breaks.
const PLACEHOLDER_PHOTO =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='500'>
       <rect width='100%' height='100%' fill='#15151d'/>
       <text x='50%' y='50%' fill='#8a8a99' font-family='sans-serif'
             font-size='18' text-anchor='middle'>Add public/profile.jpg</text>
     </svg>`
  );

export const About = () => {
  const [photoSrc, setPhotoSrc] = useState("/profile.jpeg");

  // TODO(gausar): tweak these to match reality.
  const facts = [
    { label: "Location", value: "Ulaanbaatar, Mongolia" },
    { label: "Focus", value: "Machine Learning & AI" },
    { label: "Currently", value: "Working as a Software Engineer" },
    { label: "Open to", value: "Collaboration" },
  ];

  // dots: rough 5-point scale (1 A1 - 3 B1/B2 - 4 C1 - 5 native).
  const languages = [
    { name: "Kazakh", level: "Native", dots: 5 },
    { name: "Mongolian", level: "Native", dots: 5 },
    { name: "English", level: "IELTS 6.5 · B2", dots: 3 },
    { name: "Japanese", level: "Beginner", dots: 1 },
  ];

  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-start">
          <Col md={5} className="about-photo-col">
            <Reveal>
              <div className="about-photo-frame">
                <img
                  src={photoSrc}
                  alt="Gausar Amangyeldi"
                  onError={() => setPhotoSrc(PLACEHOLDER_PHOTO)}
                />
              </div>
              <div className="about-languages">
                <span className="about-block-label">Languages</span>
                <div className="lang-list">
                  {languages.map((lang) => (
                    <div className="lang-item" key={lang.name}>
                      <div className="lang-row">
                        <span className="lang-name">{lang.name}</span>
                        <span className="lang-level">{lang.level}</span>
                      </div>
                      <div className="lang-dots" aria-hidden="true">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <span
                            key={n}
                            className={"lang-dot" + (n <= lang.dots ? " filled" : "")}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Col>
          <Col md={7} className="about-text-col">
            <Reveal delay={100}>
            <h2>About Me</h2>
            {/* TODO(gausar): replace with your real bio (2-3 short paragraphs). */}
            <p>
              I’m Gausar Amangyeldi, a software engineer and Computer Science graduate from the National University of Mongolia.
            </p>
            <p>
              I’m a curious and persistent learner who values clean solutions, continuous growth, and technology’s ability to improve people’s lives. My goal is to deepen my expertise through international experience and use what I learn to create opportunities for young people, particularly girls interested in technology.

            </p>

            <div className="about-facts">
              {facts.map((fact, i) => (
                <div className="about-fact" key={i}>
                  <span className="about-fact-label">{fact.label}</span>
                  <span className="about-fact-value">{fact.value}</span>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <a
                className="about-btn primary"
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <ArrowRightCircle size={20} />
              </a>
              <Link className="about-btn ghost" to="/contact">
                Get in touch
              </Link>
            </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
