"use client";

import { cn } from "@/lib/utils";

/* ════════════════════════════════════════════════════════════════
   CorporateImage — Standardized corporate photo component

   Design system: All content images across the site use this
   single component to ensure visual consistency and premium feel.

   Props:
     src        — Image path (e.g. "/jhon-constitucion.webp")
     alt        — Accessible description
     height     — Height preset: "sm" (280px) | "md" (340px) | "lg" (420px) | "xl" (520px)
     objectPos  — CSS object-position (default: "top")
     badge      — Optional floating badge (e.g. "+20 Años")
     hoverZoom  — Enable subtle zoom on hover (default: false)

   Responsive behavior:
     - Mobile:  93% width, centered, rounded-[20px]
     - Tablet:  Full width, rounded-[22px]
     - Desktop: Full width, rounded-2xl (24px)

   Shadow: Corporate soft navy shadow
   ════════════════════════════════════════════════════════════════ */

interface CorporateImageProps {
  src: string;
  alt: string;
  height?: "sm" | "md" | "lg" | "xl";
  objectPosition?: string;
  badge?: React.ReactNode;
  hoverZoom?: boolean;
  className?: string;
  accentBar?: boolean;
}

const HEIGHT_MAP = {
  sm: "h-[260px] sm:h-[280px] lg:h-[340px]",
  md: "h-[340px] sm:h-[380px] lg:h-[440px]",
  lg: "h-[360px] sm:h-[420px] lg:h-[500px]",
  xl: "h-[320px] sm:h-[420px] lg:h-[520px]",
};

export function CorporateImage({
  src,
  alt,
  height = "lg",
  objectPosition = "top",
  badge,
  hoverZoom = false,
  className,
  accentBar = false,
}: CorporateImageProps) {
  return (
    <div
      className={cn(
        /* Mobile: 93% width centered — NOT full bleed */
        "relative mx-auto w-[93%] sm:w-full max-w-[560px] lg:max-w-none",
        className
      )}
    >
      {/* Image container — consistent rounded corners + shadow */}
      <div
        className={cn(
          "w-full rounded-[20px] sm:rounded-[22px] lg:rounded-2xl overflow-hidden",
          /* Corporate shadow — soft navy, stronger on larger screens */
          "shadow-lg shadow-navy/[0.10] sm:shadow-xl sm:shadow-navy/[0.12] lg:shadow-2xl lg:shadow-navy/20",
          HEIGHT_MAP[height]
        )}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "w-full h-full object-cover",
            hoverZoom
              ? "group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              : "",
            objectPosition !== "top" && `object-${objectPosition}`
          )}
          style={{ objectPosition: objectPosition === "top" ? "top" : objectPosition }}
        />
      </div>

      {/* Optional floating badge — bottom-right on mobile, shifted on desktop */}
      {badge && (
        <div className="absolute -bottom-5 -right-1 sm:-right-5 z-10">{badge}</div>
      )}

      {/* Optional accent bar at bottom — subtle gradient line */}
      {accentBar && (
        <div className="absolute bottom-0 left-6 sm:left-8 right-6 sm:right-8 h-1 bg-gradient-to-r from-emerald via-teal to-emerald/50 rounded-full opacity-50" />
      )}
    </div>
  );
}
