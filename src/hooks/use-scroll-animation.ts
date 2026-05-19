"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let observer: IntersectionObserver | null = null;

    const isInViewport = () => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0
      );
    };

    const setup = () => {
      // After scroll restoration, check if already visible
      if (isInViewport()) {
        setIsVisible(true);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer?.disconnect();
          }
        },
        { threshold }
      );
      observer.observe(element);
    };

    // Double requestAnimationFrame ensures browser has finished scroll restoration
    // before we check element positions
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(setup);
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible };
}
