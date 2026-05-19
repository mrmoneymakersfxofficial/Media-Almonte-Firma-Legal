"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function FadeInView({ children, className = "", delay = 0, threshold = 0.15 }: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    const isInViewport = () => {
      const rect = el.getBoundingClientRect();
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
        el.classList.add("card-visible");
        return;
      }

      // Start hidden
      el.classList.add("card-hidden");
      el.classList.remove("card-visible");

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("card-visible");
              el.classList.remove("card-hidden");
            }, delay);
            observer?.disconnect();
          }
        },
        { threshold }
      );
      observer.observe(el);
    };

    // Double requestAnimationFrame ensures browser has finished scroll restoration
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(setup);
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [delay, threshold]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
