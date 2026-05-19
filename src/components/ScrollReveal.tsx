"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  threshold?: number;
}

/**
 * Reliable scroll-triggered reveal animation.
 * Uses double requestAnimationFrame to wait for browser scroll restoration
 * before checking if elements are already in viewport.
 * Replace all Framer Motion whileInView usage with this component.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 30,
  x = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
  }, [threshold]);

  const hidden = { opacity: 0, y, x };
  const visible = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={isVisible ? visible : hidden}
      transition={{
        duration,
        delay: isVisible ? delay : 0,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
