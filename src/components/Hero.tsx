"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

/* ═══════════════════════════════════════════════════════════════════════
   HERO — Medina Almonte Firma Legal
   Imagen responsiva: mobile (portrait) / desktop (landscape)
   ═══════════════════════════════════════════════════════════════════════ */

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

/* ═══ CTA Button ═══ */
function CtaButton({
  text,
  variant,
  onClick,
  href,
}: {
  text: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
}) {
  const basePrimary =
    "inline-flex items-center justify-center gap-2.5 bg-[#D4AF37] hover:bg-[#B87333] text-[#0A0A0A] px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#B87333]/40 active:scale-[0.98]";
  const baseSecondary =
    "inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] text-[#D4AF37] px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm";
  const cls = variant === "primary" ? basePrimary : baseSecondary;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {text}
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   HERO COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export function Hero() {
  const { openModal } = useWhatsAppStore();

  return (
    <section className="relative flex overflow-hidden min-h-[100svh] hero-fade-top">
      {/* ═══ BACKGROUND — Mobile (portrait) / Desktop (landscape) ═══ */}
      {/* Mobile image — visible only on small screens */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/medina-almonte-hero-mobile.webp')" }}
        aria-hidden="true"
      />
      {/* Desktop image — visible only on md+ screens */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/medina-almonte-hero-desktop.webp')" }}
        aria-hidden="true"
      />

      {/* ═══ Gold accent line at top ═══ */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-20" style={{ background: 'linear-gradient(90deg, transparent 0%, #D4AF37 30%, #B87333 70%, transparent 100%)' }} />

      {/* ═══ LAYER 1 — Dark overlay for readability ═══ */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/95 via-[#0B1A2E]/80 to-[#0A0A0A]/60" aria-hidden="true" />
      {/* Bottom fade for counters readability */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" aria-hidden="true" />

      {/* ═══ LAYER 2 — Decorative Blurs ═══ */}
      <div className="hero-decor-layer">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#0B1A2E]/50 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#B87333]/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="hero-content relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center min-h-[100svh] py-24 md:py-32">
        <div className="hero-text-col">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#D4AF37]/25 rounded-full px-4 py-2"
          >
            <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-white/85 text-xs sm:text-sm font-medium tracking-wide">
              Medina Almonte Firma Legal
            </span>
          </motion.div>

          {/* H1 — Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-h1 mt-6 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            <span className="text-[#D4AF37]">Medina Almonte</span>
          </motion.h1>

          {/* H2 — Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Firma Legal
          </motion.h2>

          {/* Value line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-[#B87333] font-semibold tracking-wide"
          >
            Especialistas en Derecho Corporativo, Civil y Penal.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 text-[15px] sm:text-[17px] lg:text-[18px] text-[#f8fafc]/80 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Protegemos tus intereses con excelencia y estrategia.{" "}
            <span className="text-white font-medium">Confianza, autoridad legal y resultados comprobados.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hero-ctas mt-10 flex flex-col sm:flex-row gap-3.5"
          >
            <CtaButton
              text="Agenda tu Consulta"
              variant="primary"
              onClick={() => openModal()}
            />
            <CtaButton
              text="Conoce Más"
              variant="secondary"
              onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
            />
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="hero-trust mt-8 flex flex-wrap gap-x-5 gap-y-2 text-white/45 text-xs sm:text-sm"
          >
            {["Confianza", "Autoridad legal", "Resultados comprobados"].map((badge) => (
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-social mt-5 flex gap-5 text-white/50 text-sm"
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
        </div>

        {/* ═══ COUNTERS ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="hero-counters mt-14 lg:mt-20 grid grid-cols-3 gap-3 sm:gap-6 hero-text-col"
        >
          {[
            { value: 15, suffix: "+", label: "Años Defendiendo Derechos" },
            { value: 92, suffix: "%", label: "Resoluciones Favorables" },
            { value: 500, suffix: "+", label: "Clientes Representados" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/[0.06] backdrop-blur-sm border border-[#D4AF37]/15 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center"
            >
              <CounterItem value={item.value} suffix={item.suffix} label={item.label} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <ScrollDownIndicator />
    </section>
  );
}