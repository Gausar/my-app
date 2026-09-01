import { useEffect, useRef, useState } from "react";

// Returns [ref, inView]. Once the element scrolls into view, inView stays
// true (one-shot reveal) so animations don't replay on every scroll.
export const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    // Environments without IntersectionObserver (SSR, jsdom, very old
    // browsers): just show the content instead of hiding it forever.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, threshold]);

  return [ref, inView];
};
