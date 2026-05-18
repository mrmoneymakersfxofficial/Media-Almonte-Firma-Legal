"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.width = `${Math.min(progress, 100)}%`;
      }
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      id="scroll-progress"
      ref={barRef}
      className="fixed top-0 left-0 h-[3px] w-0 z-[100000] pointer-events-none"
      style={{
        background: "linear-gradient(90deg, #481180 0%, #008775 100%)",
        willChange: "width",
        transform: "translateZ(0)",
      }}
    />
  );
}
