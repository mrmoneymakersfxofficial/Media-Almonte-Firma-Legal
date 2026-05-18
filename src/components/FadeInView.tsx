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

    // Start hidden
    el.classList.add("card-hidden");
    el.classList.remove("card-visible");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("card-visible");
            el.classList.remove("card-hidden");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
