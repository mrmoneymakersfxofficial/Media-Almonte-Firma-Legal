"use client";

import { useRef, useCallback } from "react";

/**
 * Animated "Ver más" scroll indicator for hero sections.
 * Uses React onClick + DOM traversal to find the next REAL content section
 * (skipping tiny dividers like SectionDivider which are < 20px).
 */
export function ScrollDownIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    // Find the parent hero section (works on Home and all subpages)
    const currentHero = indicator.closest("section") || indicator.closest("header");
    if (!currentHero) return;

    // Traverse siblings until we find a real content section (> 20px tall)
    // This skips SectionDivider (12px), whitespace text nodes, etc.
    let nextEl = currentHero.nextElementSibling as HTMLElement | null;
    while (nextEl && nextEl.offsetHeight < 20) {
      nextEl = nextEl.nextElementSibling as HTMLElement | null;
    }

    if (nextEl) {
      // Wow effect: subtle sink animation before scroll
      indicator.style.transform = "translate(-50%, 5px)";
      indicator.style.opacity = "0.5";

      setTimeout(() => {
        nextEl.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Restore indicator to original state
        setTimeout(() => {
          indicator.style.transform = "translate(-50%, 0)";
          indicator.style.opacity = "1";
        }, 300);
      }, 150);
    }
  }, []);

  return (
    <div
      ref={indicatorRef}
      className="scroll-down-indicator"
      onClick={handleClick}
    >
      <span>Ver más</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="scroll-arrow"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  );
}
