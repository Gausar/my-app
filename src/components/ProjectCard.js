import { Col } from "react-bootstrap";
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  tags = [],
  github,
  demo,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-card">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="proj-body">
          <h4>{title}</h4>
          <p>{description}</p>

          <div className="proj-tags">
            {tags.map((tag) => (
              <span className="proj-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="proj-links">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github size={18} /> Code
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <BoxArrowUpRight size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
