"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

/* ════════════════════════════════════════════════════════════════
   CONFERENCIST GALLERY — Premium Instagram-style Carousel + Lightbox
   3 images: instant transitions, swipe mobile, edge-click desktop.
   ════════════════════════════════════════════════════════════════ */

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: "/jhon-conferencista.webp", alt: "Conferencista - Capacitacion Tributaria" },
  { src: "/conferencista-2.webp", alt: "Conferencista - Evento empresarial" },
  { src: "/conferencista-3.webp", alt: "Conferencista - Expositor principal" },
];

const DRAG_THRESHOLD = 40;

/* Instant transition — zero delay */
const instantTransition = { duration: 0 };

export function ConferencistaGallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [direction, setDirection] = useState(0);
  const hasDragged = useRef(false);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  /* Lock body scroll when lightbox is open */
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  /* Keyboard navigation in lightbox */
  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(-1);
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, current]);

  const goTo = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  }, []);

  const goToIndex = useCallback((i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  }, [current]);

  /* Instant crossfade variants for both carousel and lightbox */
  const instantVariants = {
    enter: (dir: number) => ({ opacity: 0 }),
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleInlineDragStart = useCallback(() => {
    isDragging.current = true;
    hasDragged.current = false;
  }, []);

  const handleInlineDrag = useCallback((_: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 10) {
      hasDragged.current = true;
    }
  }, []);

  const handleInlineDragEnd = useCallback((e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent, info: PanInfo) => {
    isDragging.current = false;
    if (Math.abs(info.offset.x) > DRAG_THRESHOLD || Math.abs(info.velocity.x) > 250) {
      const dir = info.offset.x > 0 ? -1 : 1;
      hasDragged.current = true;
      goTo(dir);
    }
    /* Prevent lightbox open after a swipe */
    setTimeout(() => { hasDragged.current = false; }, 50);
  }, [goTo]);

  const handleInlineClick = useCallback(() => {
    if (!hasDragged.current && !isDragging.current) {
      setLightbox(true);
    }
  }, []);

  /* Edge click handler for desktop (click on left/right 25% edge) */
  const handleEdgeClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (hasDragged.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    /* Left 25% edge */
    if (clickX < width * 0.25) {
      goTo(-1);
      return;
    }
    /* Right 25% edge */
    if (clickX > width * 0.75) {
      goTo(1);
      return;
    }
    /* Center area opens lightbox */
    setLightbox(true);
  }, [goTo]);

  return (
    <>
      {/* ═══ INLINE CAROUSEL (in section) ═══ */}
      <div className="relative group">
        <div
          className="w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl shadow-navy/20 bg-[#001528] cursor-pointer"
          onClick={handleEdgeClick}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={instantVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={instantTransition}
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={handleInlineDragStart}
              onDrag={handleInlineDrag}
              onDragEnd={handleInlineDragEnd}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[current].src}
                alt={images[current].alt}
                className="w-full h-full object-cover object-top select-none pointer-events-none"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Zoom icon overlay (center hover) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/15 z-[5] pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Desktop edge zones - subtle gradient hints */}
          <div className="absolute inset-y-0 left-0 w-[25%] z-[3] pointer-events-none bg-gradient-to-r from-black/10 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-[25%] z-[3] pointer-events-none bg-gradient-to-l from-black/10 to-transparent" />
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                goToIndex(i);
              }}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? "w-8 h-2.5 bg-white shadow-lg"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows - always visible on desktop, on mobile visible as small arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); goTo(-1); }}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white/25 active:scale-90"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); goTo(1); }}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white/25 active:scale-90"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ═══ FULL-SCREEN LIGHTBOX ═══ */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setLightbox(false)}
          >
            {/* Close button */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(false); }}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors active:scale-90"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-white/70 text-sm font-semibold tracking-wider">
              {current + 1} / {images.length}
            </div>

            {/* Lightbox image container */}
            <div
              className="relative w-full h-full flex items-center justify-center px-4 py-16"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={instantVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={instantTransition}
                  className="absolute inset-0 flex items-center justify-center px-2 sm:px-8"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(e, info) => {
                    if (Math.abs(info.offset.x) > DRAG_THRESHOLD || Math.abs(info.velocity.x) > 300) {
                      const dir = info.offset.x > 0 ? -1 : 1;
                      goTo(dir);
                    }
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[current].src}
                    alt={images[current].alt}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg select-none"
                    draggable={false}
                    style={{
                      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Left arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); goTo(-1); }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors active:scale-90"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); goTo(1); }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors active:scale-90"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToIndex(i);
                  }}
                  className={`rounded-full transition-all duration-200 ${
                    i === current
                      ? "w-10 h-3 bg-white"
                      : "w-3 h-3 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Imagen ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
