"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

/* ═══════════════════════════════════════════════════════════════════════
   HERO SLIDER — Medina Almonte Firma Legal
   5 slides: Inicio → Corporativo → Tributario → Civil → Nosotros
   ═══════════════════════════════════════════════════════════════════════ */

const SLIDE_INTERVAL = 4000;

type CtaConfig =
  | { text: string; type: "whatsapp"; serviceId: number | null }
  | { text: string; type: "link"; href: string }
  | { text: string; type: "scroll" };

interface SlideData {
  img: string;
  badge: string;
  h1: React.ReactNode;
  subtitle: string;
  cta1: CtaConfig;
  cta2: CtaConfig;
  badges: string[];
}

const slides: SlideData[] = [
  {
    img: "/jhon-hero-oficina.webp",
    badge: "Medina Almonte Firma Legal",
    h1: (
      <>
        <span className="font-serif text-[#D4AF37]">Medina Almonte</span>{" "}
        <br className="hidden sm:block" />
        <span className="text-white">Firma Legal</span>
      </>
    ),
    subtitle:
      "Especialistas en Derecho Corporativo, Tributario y Civil. Protegemos tus intereses con excelencia y estrategia.",
    cta1: { text: "Agenda tu Consulta", type: "whatsapp", serviceId: null },
    cta2: { text: "Conoce Más", type: "scroll" },
    badges: ["Confianza", "Autoridad legal", "Resultados comprobados"],
  },
  {
    img: "/jhon-constitucion.webp",
    badge: "Derecho Corporativo",
    h1: (
      <>
        <span className="text-white">Soluciones Legales para</span>{" "}
        <br className="hidden sm:block" />
        <span className="font-serif text-[#D4AF37]">Tu Empresa.</span>
      </>
    ),
    subtitle:
      "Constitución de empresas, asesoría corporativa y cumplimiento regulatorio integral.",
    cta1: {
      text: "Consultoría Corporativa",
      type: "whatsapp",
      serviceId: 1,
    },
    cta2: {
      text: "Nuestros Servicios",
      type: "link",
      href: "/servicios",
    },
    badges: ["Asesoría integral", "Experiencia comprobada", "Respuesta inmediata"],
  },
  {
    img: "/jhon-contabilidad.webp",
    badge: "Derecho Tributario",
    h1: (
      <>
        <span className="text-white">Defensa Tributaria</span>{" "}
        <br className="hidden sm:block" />
        <span className="font-serif text-[#D4AF37]">Estratégica y Legal.</span>
      </>
    ),
    subtitle:
      "Optimización fiscal, defensa ante SUNAT y planificación tributaria para proteger tu patrimonio.",
    cta1: { text: "Consultoría Tributaria", type: "whatsapp", serviceId: 4 },
    cta2: {
      text: "Ver Servicios",
      type: "link",
      href: "/servicios",
    },
    badges: ["Defensa SUNAT", "Optimización fiscal", "Planificación legal"],
  },
  {
    img: "/jhon-defensa.webp",
    badge: "Derecho Civil y Penal",
    h1: (
      <>
        <span className="text-white">Protección Legal</span>{" "}
        <br className="hidden sm:block" />
        <span className="font-serif text-[#D4AF37]">en Todo Momento.</span>
      </>
    ),
    subtitle:
      "Litigios civiles, defensa penal y resolución de conflictos con estrategia y profesionalismo.",
    cta1: { text: "Consulta Urgente", type: "whatsapp", serviceId: 5 },
    cta2: {
      text: "Áreas de Práctica",
      type: "link",
      href: "/servicios",
    },
    badges: ["Atención urgente", "Litigios civiles", "Defensa penal"],
  },
  {
    img: "/jhon-nosotros.webp",
    badge: "Autoridad y Confianza en Perú",
    h1: (
      <>
        <span className="text-white">Más de 20 Años de</span>{" "}
        <br className="hidden sm:block" />
        <span className="font-serif text-[#D4AF37]">Trayectoria Legal.</span>
      </>
    ),
    subtitle:
      "Transparencia, tecnología y resultados. La firma que respalda el crecimiento empresarial en el Perú.",
    cta1: {
      text: "Agendar Reunión",
      type: "link",
      href: "/nosotros-contacto",
    },
    cta2: {
      text: "Conócenos",
      type: "link",
      href: "/nosotros-contacto",
    },
    badges: ["+5,000 casos", "Transparencia total", "Equipo experto"],
  },
];

/* ═══ Counter component ═══ */
function CounterItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value, 2500);
  return (
    <div className="text-center">
      <span
        ref={ref}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#D4AF37] tracking-tight"
      >
        {count}
        {suffix}
      </span>
      <p className="text-white/60 text-xs sm:text-sm mt-1 font-medium">{label}</p>
    </div>
  );
}

/* ═══ CTA Renderer ═══ */
function CtaButton({
  cta,
  variant,
}: {
  cta: CtaConfig;
  variant: "primary" | "secondary";
}) {
  const { openModal } = useWhatsAppStore();

  const basePrimary =
    "inline-flex items-center justify-center gap-2.5 bg-[#D4AF37] hover:bg-[#B87333] text-[#0A0A0A] px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#B87333]/40 active:scale-[0.98]";
  const baseSecondary =
    "inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] text-[#D4AF37] px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm";
  const cls = variant === "primary" ? basePrimary : baseSecondary;

  if (cta.type === "link") {
    return (
      <Link href={cta.href} className={cls}>
        {cta.text}
      </Link>
    );
  }

  const handleClick = () => {
    if (cta.type === "whatsapp") {
      openModal(cta.serviceId ?? undefined);
    } else if (cta.type === "scroll") {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <button onClick={handleClick} className={cls}>
      {cta.text}
      {cta.type === "whatsapp" && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   HERO SLIDER COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export function Hero() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slide = slides[active];

  /* Auto-rotation: 4s interval, pauses on hover */
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section
      className="relative flex overflow-hidden hero-fade-top"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ═══ LAYER 0 — Slide Backgrounds (crossfade) ═══ */}
      {slides.map((s, index) => (
        <div
          key={s.img}
          className={`hero-slide-bg${index === active ? " hero-slide-active" : ""}`}
          data-slide={index}
          style={{ backgroundImage: `url(${s.img})` }}
          aria-hidden={index !== active}
        />
      ))}

      {/* ═══ LAYER 1 — Brand Overlay (shared) ═══ */}
      <div className="hero-brand-overlay" aria-hidden="true" />

      {/* ═══ LAYER 2 — Decorative Blurs + Dot Pattern ═══ */}
      <div className="hero-decor-layer">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#0B1A2E]/50 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#B87333]/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ═══ LAYER 20 — Content (animated per slide) ═══ */}
      <div className="hero-content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="hero-text-col">
          {/* Animated text wrapper — key re-triggers entrance animation */}
          <motion.div
            key={`slide-text-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#D4AF37]/25 rounded-full px-4 py-2"
            >
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-white/85 text-xs sm:text-sm font-medium tracking-wide">
                {slide.badge}
              </span>
            </motion.div>

            {/* H1 — with staggered translateY entrance */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-h1 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight"
            >
              {slide.h1}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle mt-6 text-[15px] sm:text-[17px] lg:text-[18px] text-[#f8fafc]/80 max-w-lg leading-relaxed font-light"
            >
              {slide.subtitle}
            </motion.p>

            {/* CTAs — Functional actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-ctas mt-10 flex flex-col sm:flex-row gap-3.5"
            >
              <CtaButton cta={slide.cta1} variant="primary" />
              <CtaButton cta={slide.cta2} variant="secondary" />
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hero-trust mt-7 flex flex-wrap gap-x-5 gap-y-2 text-white/45 text-xs sm:text-sm"
            >
              {slide.badges.map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="hero-social mt-6 flex gap-5 text-white/50 text-sm"
            >
              <a
                href="https://www.instagram.com/solucioneslegales.medinaa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/17zonPNHp7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
              >
                Facebook
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* ═══ COUNTERS — Fixed authority anchors (don't rotate) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="hero-counters mt-14 lg:mt-20 grid grid-cols-3 gap-3 sm:gap-6 hero-text-col"
        >
          {[
            { value: 408, suffix: "+", label: "Empresas Formalizadas" },
            { value: 1, suffix: "M+", label: "en Multas Evitadas" },
            { value: 98, suffix: "%", label: "de Satisfacción" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/[0.06] backdrop-blur-sm border border-[#D4AF37]/15 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center"
            >
              <CounterItem
                value={item.value}
                suffix={item.suffix}
                label={item.label}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ═══ NAVIGATION DOTS — Bottom left ═══ */}
      <div className="hero-slider-dots absolute bottom-16 left-4 sm:left-8 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`transition-all duration-300 cursor-pointer ${
              index === active
                ? "w-8 h-2.5 bg-[#D4AF37] rounded-full"
                : "w-2.5 h-2.5 bg-white/35 hover:bg-white/60 rounded-full"
            }`}
            aria-label={`Diapositiva ${index + 1}`}
          />
        ))}
      </div>

      {/* ═══ PROGRESS BAR — 4s cycle indicator ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-white/[0.08]">
        <div
          key={`progress-${active}-${isPaused ? "p" : "r"}`}
          className={`hero-progress-fill h-full bg-gradient-to-r from-[#D4AF37] to-[#F0E68C] ${isPaused ? "paused" : ""}`}
        />
      </div>

      {/* Scroll down indicator */}
      <ScrollDownIndicator />
    </section>
  );
}