import { useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import projImg1 from "../assets/img/chat.png";
import projImg2 from "../assets/img/chatbot.png";
import projImg3 from "../assets/img/dobby.png";
import projImg4 from "../assets/img/invitation.png";
import projImg5 from "../assets/img/lost-card.png";
import projImg6 from "../assets/img/shop.png";
import projImg7 from "../assets/img/travel.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

// TODO(gausar): add your real GitHub URLs. Tags are ordered
// language -> backend -> database -> frontend -> styling -> domain.
const PROJECTS = [
  {
    title: "Chatbot NUM",
    description:
      "Makes the internal rules and regulations of the National University of Mongolia accessible to students and helps resolve questions that come up.",
    tags: ["Python", "FastAPI", "RAG", "LLM", "Vector search"],
    category: "AI / ML",
    imgUrl: projImg1,
    github: "",
    demo: "https://num-chatbot.vercel.app/",
  },
  {
    title: "Gemini Chatbot",
    description:
      "A conversational assistant built out of curiosity on top of Google's free Gemini language model.",
    tags: ["JavaScript", "Gemini API", "LLM"],
    category: "AI / ML",
    imgUrl: projImg2,
    github: "",
    demo: "https://chatbot-gausars-projects.vercel.app/",
  },
  {
    title: "Dobby bot",
    description:
      "A conversational assistant built for the purpose of make internal communication easier and make everyday standup meetings more efficient.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Nuxt", "Vue"],
    category: "Web Development",
    imgUrl: projImg3,
    github: "",
    demo: "https://dobby.nashatech.com/",
  },
  {
    title: "Online Invitation",
    description:
      "Invite your friends and family to your special event with a personalized online invitation.",
    tags: ["Nuxt", "Vue", "Tailwind CSS", "i18n"],
    category: "Web Development",
    imgUrl: projImg4,
    github: "",
    demo: "https://invitation-with-language-options.vercel.app/",
  },
  {
    title: "Lost Document Finder",
    description:
      "A web application that helps users find lost documents by providing a platform to report and search for lost items.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Nuxt", "Vue"],
    category: "Web Development",
    imgUrl: projImg5,
    github: "",
    demo: "https://lost-card-system.vercel.app/",
  },
  {
    title: "Online Shopping Website",
    description:
      "A platform for users to browse and purchase products online.",
    tags: ["Nuxt", "Vue", "Tailwind CSS", "Pinia"],
    category: "Web Development",
    imgUrl: projImg6,
    github: "",
    demo: "https://surprise-box-gift-shop.vercel.app/",
  },
  {
    title: "Steppe & Sky Travel Website",
    description:
      "A website for booking and managing travel experiences in the Altai Mountains regions.",
    tags: ["Nuxt", "Vue", "Tailwind CSS"],
    category: "Web Development",
    imgUrl: projImg7,
    github: "",
    demo: "https://altai-travel.vercel.app/",
  },
];

export const Projects = () => {
  const categories = useMemo(
    () => ["All", ...new Set(PROJECTS.map((p) => p.category))],
    []
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="project" id="Projects">
      <Container>
        <Row>
          <Col>
            <Reveal>
              <h2>Projects</h2>
              <p>A few things I've built. Click through to the code or a live demo.</p>

              <div className="project-filters">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={
                      "project-filter" + (activeCategory === category ? " active" : "")
                    }
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Reveal>

            <Row>
              {visibleProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-projects-right"
        src={colorSharp2}
        alt="projects background"
      />
    </section>
  );
};
