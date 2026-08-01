"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type GalleryLightboxProps = {
  images: GalleryImage[];
  /** Index of the image to open at. When `null`, the lightbox is closed. */
  openAtIndex: number | null;
  onClose: () => void;
  onIndexChange?: (index: number) => void;
};

export function GalleryLightbox({
  images,
  openAtIndex,
  onClose,
  onIndexChange,
}: GalleryLightboxProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [currentIndex, setCurrentIndex] = useState(openAtIndex ?? 0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sync external open signal → scroll embla to that slide
  useEffect(() => {
    if (openAtIndex === null) return;
    setIsLoaded(false);
    setCurrentIndex(openAtIndex);
    // Defer until embla is ready
    const t = window.setTimeout(() => {
      emblaApi?.scrollTo(openAtIndex, true);
      setIsLoaded(true);
    }, 60);
    return () => window.clearTimeout(t);
  }, [openAtIndex, emblaApi]);

  // Track embla's selected slide
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const idx = emblaApi.selectedScrollSnap();
    setCurrentIndex(idx);
    onIndexChange?.(idx);
  }, [emblaApi, onIndexChange]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Body scroll lock + keyboard navigation
  useEffect(() => {
    if (openAtIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") emblaApi?.scrollNext();
      if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openAtIndex, emblaApi, onClose]);

  const isOpen = openAtIndex !== null;
  const total = images.length;
  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="gallery-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes ampliadas"
        >
          {/* Subtle gold gradient sheen at top */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#C9A961]/10 to-transparent"
          />

          {/* TOP BAR — counter + close */}
          <header className="relative z-10 flex items-center justify-between px-5 sm:px-8 py-5 sm:py-6">
            <div className="flex items-center gap-3">
              <span
                className="text-[#C9A961] text-sm sm:text-base font-medium tracking-wider uppercase"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Galería del Estudio
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-gray-400 text-sm tabular-nums tracking-wider">
                {String(currentIndex + 1).padStart(2, "0")}
                <span className="text-gray-600 mx-1.5">/</span>
                {String(total).padStart(2, "0")}
              </span>
              <button
                onClick={onClose}
                aria-label="Cerrar galería"
                className="group relative w-11 h-11 rounded-full border border-white/15 hover:border-[#C9A961] transition-colors flex items-center justify-center bg-white/5 hover:bg-[#C9A961]/10"
              >
                <X className="w-5 h-5 text-gray-300 group-hover:text-[#C9A961] transition-colors" />
              </button>
            </div>
          </header>

          {/* MAIN STAGE — Embla carousel, one image at a time, Instagram-style */}
          <div className="relative flex-1 min-h-0 flex items-center">
            {/* Left chevron */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Imagen anterior"
              className="group absolute left-2 sm:left-5 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 hover:border-[#C9A961] bg-black/40 hover:bg-[#C9A961]/15 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300 group-hover:text-[#C9A961] transition-colors" />
            </button>

            <div
              ref={emblaRef}
              className="embla__viewport-gallery absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <div className="flex h-full items-center">
                {images.map((img, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={idx}
                      className="embla__slide-gallery relative min-w-0 flex-[0_0_100%] h-full flex items-center justify-center px-4 sm:px-20 lg:px-28"
                    >
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0.35,
                          scale: isActive ? 1 : 0.92,
                        }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="relative w-full h-full flex items-center justify-center"
                      >
                        <div className="relative max-w-full max-h-full w-auto h-auto flex items-center justify-center">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={1600}
                            height={1000}
                            sizes="100vw"
                            priority={idx === openAtIndex}
                            className="object-contain max-w-full max-h-[72vh] sm:max-h-[78vh] w-auto h-auto rounded-xl shadow-[0_25px_80px_-15px_rgba(0,0,0,0.85)]"
                            style={{
                              maskImage:
                                "linear-gradient(180deg, #000 92%, transparent 100%)",
                              WebkitMaskImage:
                                "linear-gradient(180deg, #000 92%, transparent 100%)",
                            }}
                          />
                          {/* Premium gold frame glow */}
                          <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-px rounded-xl"
                            style={{
                              boxShadow:
                                "0 0 0 1px rgba(201,169,97,0.15), 0 0 60px -10px rgba(201,169,97,0.15)",
                            }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right chevron */}
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Siguiente imagen"
              className="group absolute right-2 sm:right-5 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 hover:border-[#C9A961] bg-black/40 hover:bg-[#C9A961]/15 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300 group-hover:text-[#C9A961] transition-colors" />
            </button>
          </div>

          {/* BOTTOM BAR — caption + dots */}
          <footer className="relative z-10 px-5 sm:px-8 py-5 sm:py-6">
            <AnimatePresence mode="wait">
              {currentImage?.caption && (
                <motion.p
                  key={`caption-${currentIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-center text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-4"
                >
                  {currentImage.caption}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Dot navigation */}
            <div className="flex items-center justify-center gap-2.5">
              {images.map((img, idx) => {
                const active = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => emblaApi?.scrollTo(idx)}
                    aria-label={`Ir a imagen ${idx + 1}: ${img.alt}`}
                    className="group relative h-2 rounded-full transition-all duration-300"
                    style={{
                      width: active ? 32 : 8,
                      backgroundColor: active
                        ? "#C9A961"
                        : "rgba(255,255,255,0.25)",
                    }}
                  >
                    <span className="absolute inset-0 rounded-full group-hover:bg-[#C9A961]/40 transition-colors" />
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-center text-gray-600 text-[11px] sm:text-xs tracking-wider uppercase">
              Usa las flechas · arrastra · ← → en el teclado · ESC para cerrar
            </p>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Small floating "zoom" hint badge that can be placed over a thumbnail
 * to communicate that clicking opens the lightbox.
 */
export function GalleryZoomHint({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-all duration-300 ${className}`}
    >
      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <div className="w-12 h-12 rounded-full border border-[#C9A961]/70 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <ZoomIn className="w-5 h-5 text-[#C9A961]" />
        </div>
      </div>
    </div>
  );
}
