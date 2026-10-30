// Visitors who ask for less motion get still frames instead of looping Lotties.
export const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
