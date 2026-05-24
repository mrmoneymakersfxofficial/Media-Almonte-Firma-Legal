"use client";

import { useEffect, useState } from "react";

/**
 * Premium preloader — 300ms exposure, smooth fade-out.
 * Navy background + emerald spinner matching brand colors.
 * Placed in RootLayout to cover all pages (Home + subpages).
 */
export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Force hide after 300ms with fade-out transition
    const timer = setTimeout(() => {
      setVisible(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="site-preloader">
      <div className="preloader-spinner" />
    </div>
  );
}
