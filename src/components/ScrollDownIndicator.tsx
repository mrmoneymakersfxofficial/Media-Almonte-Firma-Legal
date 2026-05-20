"use client";

import { useEffect } from "react";

/**
 * Animated "Ver más" scroll indicator for hero sections.
 * Uses a global querySelectorAll approach to find the next sibling
 * section and smooth-scroll to it on click.
 */
export function ScrollDownIndicator() {
  useEffect(() => {
    function attachListeners() {
      document.querySelectorAll<HTMLElement>(".scroll-down-indicator").forEach((indicator) => {
        // Avoid duplicate listeners
        if (indicator.dataset.bound === "true") return;
        indicator.dataset.bound = "true";

        indicator.addEventListener("click", function () {
          // Find the parent hero section
          const currentHero = this.closest("section") || this.closest("header") || this.parentElement;
          // Select the next sibling section
          const nextSection = currentHero?.nextElementSibling;

          if (nextSection) {
            nextSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });
    }

    attachListeners();
    // Re-attach after any dynamic navigation
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-down-indicator">
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
