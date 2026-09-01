// Runs before each test file. Kept dependency-free: this project does not
// install @testing-library.

// Tell React we're in a proper act() environment (silences act warnings).
global.IS_REACT_ACT_ENVIRONMENT = true;

// Provide a no-op IntersectionObserver so components that use it can
// render under jsdom.
if (typeof global.IntersectionObserver === "undefined") {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}
