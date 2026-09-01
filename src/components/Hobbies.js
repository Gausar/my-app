import { Container, Row, Col } from "react-bootstrap";
import { MusicNoteList, Activity, BookHalf } from "react-bootstrap-icons";
import { Reveal } from "./Reveal";

const HOBBIES = [
  {
    icon: MusicNoteList,
    title: "Playing dombyra",
    text: "The Kazakh two-stringed lute — a way to stay close to home.",
  },
  {
    icon: Activity,
    title: "Running",
    text: "I run regularly to maintain my physical well-being, clear my mind, and regain a sense of calm and focus.",
  },
  {
    icon: BookHalf,
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
          {HOBBIES.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <Col md={4} key={hobby.title}>
                <div className="hobby-card">
                  <span className="hobby-icon">
                    <Icon size={22} />
                  </span>
                  <h3>{hobby.title}</h3>
                  <p>{hobby.text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
