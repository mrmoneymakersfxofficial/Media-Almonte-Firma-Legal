"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      const clamped = Math.min(progress, 100);
      if (barRef.current) {
        barRef.current.style.width = `${clamped}%`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${clamped}%`;
      }
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100000] pointer-events-none">
      {/* Main progress bar */}
      <div
        id="scroll-progress"
        ref={barRef}
        className="h-[3px] w-0"
        style={{
          background: "linear-gradient(90deg, #a08520 0%, #c9a961 25%, #D4AF37 50%, #c9a961 75%, #a08520 100%)",
          willChange: "width",
          transform: "translateZ(0)",
          boxShadow: "0 0 12px rgba(212,175,55,0.6), 0 0 4px rgba(212,175,55,0.8)",
        }}
      />
      {/* Glow tip at the end of the bar */}
      <div
        ref={glowRef}
        className="absolute top-0 w-[30px] h-[3px] -translate-x-1/2 opacity-0 transition-opacity duration-300"
        style={{
          background: "radial-gradient(ellipse at center, #c9a961 0%, #D4AF37 40%, transparent 100%)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}