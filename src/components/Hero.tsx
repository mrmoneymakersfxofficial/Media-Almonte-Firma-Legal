"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

/* ═══════════════════════════════════════════════════════════════════════
   HERO SLIDER — Dynamic Rotating Banner (4s infinite cycle)
   5 slides: Inicio → Constitución → Contabilidad → Defensa → Nosotros
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
    badge: "Especialistas Tributarios en Perú",
    h1: (
      <>
        Protegemos tu{" "}
        <span className="text-[#00a996]">Empresa.</span>{" "}
        <br className="hidden sm:block" />
        Aseguramos tu{" "}
        <span className="text-[#00a996]">Patrimonio.</span>
      </>
    ),
    subtitle:
      "Asesoría tributaria y contable de excelencia. Cero multas SUNAT. Seguridad jurídica total.",
    cta1: { text: "Consultoría Gratuita →", type: "whatsapp", serviceId: null },
    cta2: { text: "Nuestros Servicios", type: "scroll" },
    badges: ["Sin compromiso", "Respuesta inmediata", "Personalizado"],
  },
  {
    img: "/jhon-constitucion.webp",
    badge: "Constitución de Empresas",
    h1: (
      <>
        Constituye tu Empresa.{" "}
        <br className="hidden sm:block" />
        <span className="text-[#00a996]">Precios a Consultar.</span>
      </>
    ),
    subtitle:
      "Formaliza tu negocio sin estrés, colas ni trámites complicados. Incluye Notaría y SUNARP.",
    cta1: {
      text: "Constituir Empresa Ahora",
      type: "link",
      href: "/constitucion-de-empresas",
    },
    cta2: {
      text: "Ver Paquetes",
      type: "link",
      href: "/constitucion-de-empresas",
    },
    badges: ["Notaría incluida", "SUNARP garantizado", "RUC + Clave SOL"],
  },
  {
    img: "/jhon-contabilidad.webp",
    badge: "Contabilidad Integral",
    h1: (
      <>
        Tu Contabilidad en Regla.{" "}
        <br className="hidden sm:block" />
        <span className="text-[#00a996]">Sin multas de SUNAT.</span>
      </>
    ),
    subtitle:
      "Nos encargamos de tus declaraciones mensuales, libros electrónicos, SIRE y planillas.",
    cta1: { text: "Evaluar mi Régimen MYPE", type: "whatsapp", serviceId: 4 },
    cta2: {
      text: "Planes Mensuales",
      type: "link",
      href: "/contabilidad-tributacion",
    },
    badges: ["Declaraciones mensuales", "Libros electrónicos", "Planilla laboral"],
  },
  {
    img: "/jhon-defensa.webp",
    badge: "Defensa Tributaria Urgente",
    h1: (
      <>
        Escudo Legal y Tributario{" "}
        <br className="hidden sm:block" />
        Ante <span className="text-[#00a996]">Fiscalizaciones.</span>
      </>
    ),
    subtitle:
      "Atención urgente de cartas inductivas, cobranzas coactivas y auditorías de SUNAT.",
    cta1: { text: "Detener Fiscalización Ya", type: "whatsapp", serviceId: 5 },
    cta2: {
      text: "Casos de Defensa",
      type: "link",
      href: "/defensa-tributaria-sunat",
    },
    badges: ["Atención urgente", "Cartas inductivas", "Cobranza coactiva"],
  },
  {
    img: "/jhon-nosotros.webp",
    badge: "Más de 20 años de Experiencia",
    h1: (
      <>
        Especialistas Tributarios con{" "}
        <br className="hidden sm:block" />
        <span className="text-[#00a996]">más de 20 años de Éxito.</span>
      </>
    ),
    subtitle:
      "Transparencia, tecnología y resultados respaldando el crecimiento de los empresarios en el Perú.",
    cta1: {
      text: "Agendar Reunión",
      type: "link",
      href: "/nosotros-contacto",
    },
    cta2: {
      text: "Conocer Historia",
      type: "link",
      href: "/nosotros-contacto",
    },
    badges: ["+5,000 empresas", "Transparencia total", "Resultados comprobados"],
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
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
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
    "inline-flex items-center justify-center gap-2.5 bg-[#008775] hover:bg-[#006655] text-white px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#008775]/30 hover:shadow-xl hover:shadow-[#008775]/40 active:scale-[0.98]";
  const baseSecondary =
    "inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm";
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
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#481180]/12 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#008775]/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ═══ LAYER 20 — Content (animated per slide) ═══ */}
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
              className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2"
            >
              <Shield className="w-3.5 h-3.5 text-[#00a996]" />
              <span className="text-white/85 text-xs sm:text-sm font-medium tracking-wide">
                {slide.badge}
              </span>
            </motion.div>

            {/* H1 — with staggered translateY entrance */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-h1 text-[34px] sm:text-[46px] lg:text-[54px] xl:text-[62px] font-extrabold text-white leading-[1.1] tracking-tight"
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
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00a996]" />
                  {badge}
                </span>
              ))}
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
              className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center"
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
                ? "w-8 h-2.5 bg-[#00a996] rounded-full"
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
          className={`hero-progress-fill h-full bg-gradient-to-r from-[#00a996] to-[#00c9b0] ${isPaused ? "paused" : ""}`}
        />
      </div>

      {/* Scroll down indicator */}
      <ScrollDownIndicator />
    </section>
  );
}
