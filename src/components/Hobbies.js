import { Container, Row, Col } from "react-bootstrap";
import { LottieSvg } from "lottie-react";
import { Reveal } from "./Reveal";
import { prefersReducedMotion } from "../utils/motion";
import dombyraAnimation from "../assets/lottie/dombyra.json";
import runningAnimation from "../assets/lottie/running.json";
import readingAnimation from "../assets/lottie/reading.json";

const HOBBIES = [
  {
    animation: dombyraAnimation,
    // Crop to fill the stage: the source has wide empty margins.
    cover: true,
    title: "Playing dombyra",
    text: "The Kazakh two-stringed lute — a way to stay close to home.",
  },
  {
    animation: runningAnimation,
    title: "Running",
    text: "I run regularly to maintain my physical well-being, clear my mind, and regain a sense of calm and focus.",
  },
  {
    animation: readingAnimation,
    title: "Reading",
    text: "I read whenever I have free time, particularly enjoying literature and non-fiction books about technology, people, and how things work.",
  },
];

export const Hobbies = () => {
  return (
    <section className="hobbies" id="hobbies">
      <Container>
        <Reveal>
          <h2>Beyond Code</h2>
          <p className="hobbies-intro">
            What I get up to when I'm away from the keyboard.
          </p>
        </Reveal>

        <Row className="g-4 hobby-cards">
          {HOBBIES.map((hobby) => (
            <Col md={4} key={hobby.title}>
              <div className="hobby-card">
                <div className="hobby-lottie" aria-hidden="true">
                  <LottieSvg
                    src={hobby.animation}
                    className="hobby-lottie-player"
                    loop={!prefersReducedMotion}
                    autoplay={!prefersReducedMotion}
                    rendererSettings={
                      hobby.cover
                        ? { preserveAspectRatio: "xMidYMid slice" }
                        : undefined
                    }
                  />
                </div>
                <h3>{hobby.title}</h3>
                <p>{hobby.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
