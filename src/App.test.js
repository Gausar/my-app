import { act } from "react";
import { createRoot } from "react-dom/client";
import { ProjectCard } from "./components/ProjectCard";

// Note: a full <App /> render can't run under this project's Jest setup
// (react-router-dom v7 ships ESM that react-scripts 5's Jest resolver
// can't load). So we smoke-test a router-free leaf component instead.
test("ProjectCard renders content and only the links it is given", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  act(() => {
    createRoot(container).render(
      <ProjectCard
        title="Chatbot NUM"
        description="Helps students find the rules."
        imgUrl="/x.png"
        tags={["RAG", "React"]}
        demo="https://example.com/"
      />
    );
  });

  expect(container.textContent).toContain("Chatbot NUM");
  expect(container.textContent).toContain("Helps students find the rules.");
  expect(container.textContent).toContain("RAG");
  expect(
    container.querySelector('a[href="https://example.com/"]')
  ).not.toBeNull();
  // No github prop passed, so the "Code" link should not render.
  expect(container.textContent).not.toContain("Code");

  document.body.removeChild(container);
});
