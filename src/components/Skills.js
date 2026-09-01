import { Container, Row, Col } from "react-bootstrap";
import { SkillBar } from "./SkillBar";

// ============================================================================
// TODO(gausar): THIS IS YOUR DATA. Set real skills and honest levels (0-100).
// Add/remove groups and skills freely - the layout adapts to whatever is here.
// ============================================================================
const SKILL_GROUPS = [
  {
    category: "Frontend",
    skills: [
      { name: "Vue", level: 80 },
      { name: "Nuxt", level: 75 },
      { name: "TanStack Query", level: 70 },
      { name: "React", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "REST APIs", level: 75 },
      { name: "PostgreSQL / SQL", level: 65 },
    ],
  },
  {
    // Skills used to build the bachelor thesis: RAG over NUM documents.
    category: "AI / ML",
    skills: [
      { name: "Retrieval-Augmented Generation", level: 90 },
      { name: "Prompt engineering", level: 80 },
      { name: "LangChain / LlamaIndex", level: 85 },
      { name: "Embeddings & semantic search", level: 85 },
      { name: "Vector DBs (FAISS / Chroma)", level: 80 },
      { name: "Document parsing & chunking", level: 85 },
      { name: "HF Transformers", level: 75 },
      { name: "PyTorch", level: 60 },
      { name: "RAG evaluation (RAGAS)", level: 75 },
    ],
  },
  {
    category: "Data & Tools",
    skills: [
      { name: "pandas / NumPy", level: 70 },
      { name: "Data visualization", level: 75 },
      { name: "Git", level: 85 },
      { name: "Docker", level: 55 },
      { name: "Tableau / Power BI", level: 70 },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>What I work with, and roughly how comfortable I am with each.</p>

              <div className="skill-groups">
                {SKILL_GROUPS.map((group) => (
                  <div className="skill-group" key={group.category}>
                    <h3 className="skill-group-title">{group.category}</h3>
                    {group.skills.map((skill) => (
                      <SkillBar key={skill.name} {...skill} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
