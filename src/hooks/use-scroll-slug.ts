"use client";

import { useEffect } from "react";

/**
 * useScrollSlug — watches all <section id="..."> elements and updates
 * the browser URL (via history.replaceState) as the user scrolls,
 * so the URL bar shows the current section slug without a full page reload.
 *
 * Usage (add once per page, inside a client component):
 *   import { useScrollSlug } from "@/hooks/use-scroll-slug";
 *   useScrollSlug();   // that's it — zero arguments
 */

export function useScrollSlug() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const slug = visible[0].target.id;
          if (slug) {
            const url = `${window.location.pathname}#${slug}`;
            if (window.location.href !== window.location.origin + url) {
              window.history.replaceState(null, "", url);
            }
          }
        }
      },
      {
        // Trigger when 25 % of the section is visible
        threshold: 0.25,
        // Extend observation area slightly above viewport
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);
}
