"use client";

/**
 * Professional ultra-thin gradient divider between sections.
 * Creates a seamless color transition using actual section colors.
 *
 * height = ~12px total (≈0.3cm each side blended)
 *
 * Usage between sections:
 *   <SectionDivider from="#002350" to="#ffffff" />
 *   <SectionDivider from="#ffffff" to="#f9fafb" />
 */
export function SectionDivider({
  from,
  to,
  className = "",
}: {
  from: string;
  to: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full pointer-events-none ${className}`}
      style={{
        height: "12px",
        marginTop: "-1px",
        marginBottom: "-1px",
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
      aria-hidden="true"
    />
  );
}
