"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2, Clock, TrendingUp, Users } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

/* ═══════════════════════════════════════════════════════════════════════
   HERO — Medina Almonte Firma Legal · Premium Visual Upgrade
   ═══════════════════════════════════════════════════════════════════════ */

/* ═══ Counter component — Glassmorphism + Lucide Icon ═══ */
function CounterItem({
  value,
  suffix,
  label,
  icon: Icon,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
}) {
  const { count, ref } = useCountUp(value, 2500);
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-2">
        <Icon className="w-4 h-4 text-[#D4AF37]/50 mr-1.5" />
        <span
          ref={ref}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
          style={{
            background: "linear-gradient(135deg, #f4e5c2, #d4af37)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-white/50 text-[11px] sm:text-xs mt-0.5 font-medium tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}

/* ═══ CTA Button — Premium Gradient + Shine ═══ */
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
  const cls =
    variant === "primary"
      ? "btn-gold-primary inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:px-9 sm:py-4.5 rounded-xl text-[15px] sm:text-base gpu-accelerated"
      : "btn-gold-outline inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:px-9 sm:py-4.5 rounded-xl text-[15px] sm:text-base gpu-accelerated";

  const inner = (
    <>
      {text}
      {variant === "primary" && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {inner}
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
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/medina-almonte-hero-mobile.webp')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/medina-almonte-hero-desktop.webp')" }}
        aria-hidden="true"
      />

      {/* ═══ Gold accent line at top ═══ */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-20 gpu-accelerated"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #D4AF37 30%, #f4e5c2 50%, #B87333 70%, transparent 100%)",
        }}
      />

      {/* ═══ LAYER 1 — Premium Dark Overlay with depth ═══ */}
      <div
        className="absolute inset-0 gpu-accelerated"
        style={{
          background:
            "linear-gradient(160deg, rgba(10,10,10,0.97) 0%, rgba(11,26,46,0.85) 40%, rgba(10,10,10,0.65) 70%, rgba(184,115,51,0.08) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom depth fade for counters */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 gpu-accelerated"
        style={{
          background:
            "linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.8) 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ═══ LAYER 2 — Decorative Elements ═══ */}
      <div className="hero-decor-layer">
        {/* Large ambient glow — gold */}
        <div
          className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full blur-[140px] gpu-accelerated"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)" }}
        />
        {/* Copper glow bottom-left */}
        <div
          className="absolute -bottom-60 -left-60 w-[500px] h-[500px] rounded-full blur-[120px] gpu-accelerated"
          style={{ background: "radial-gradient(circle, rgba(184,115,51,0.05) 0%, transparent 70%)" }}
        />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] gpu-accelerated"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D4AF37 0.8px, transparent 0.8px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ═══ CONTENT ═══ */}
      <div className="hero-content relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center min-h-[100svh] py-24 md:py-32">
        <div className="hero-text-col">
          {/* Badge — Glassmorphism pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge lg:hidden inline-flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-xl border border-[#D4AF37]/20 rounded-full px-5 py-2.5 shadow-[0_0_20px_rgba(212,175,55,0.08)] gpu-accelerated"
          >
            <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-white/85 text-xs sm:text-sm font-medium tracking-wide">
              Medina Almonte Firma Legal
            </span>
          </motion.div>

          {/* H1 — Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-h1 mt-7 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
            style={{
              fontFamily: "var(--font-playfair), serif",
              background: "linear-gradient(135deg, #f4e5c2 0%, #d4af37 40%, #B87333 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Medina Almonte
          </motion.h1>

          {/* H2 — Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Firma Legal
          </motion.h2>

          {/* Value line — Copper accent */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-base sm:text-lg font-semibold tracking-wide"
            style={{
              color: "#B87333",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Especialistas en Derecho Corporativo, Civil y Penal.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 text-[15px] sm:text-[17px] lg:text-[18px] text-white/75 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Protegemos tus intereses con excelencia y estrategia.{" "}
            <span className="text-white/95 font-medium">
              Confianza, autoridad legal y resultados comprobados.
            </span>
          </motion.p>

          {/* CTAs — Premium Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hero-ctas mt-10 flex flex-col sm:flex-row gap-4"
          >
            <CtaButton
              text="Agenda tu Consulta"
              variant="primary"
              onClick={() => openModal()}
            />
            <CtaButton
              text="Conoce Más"
              variant="secondary"
              onClick={() =>
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
              }
            />
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="hero-trust mt-8 flex flex-wrap gap-x-5 gap-y-2.5 text-white/40 text-xs sm:text-sm"
          >
            {["Confianza", "Autoridad legal", "Resultados comprobados"].map(
              (badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]/80" />
                  {badge}
                </span>
              )
            )}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-social mt-5 flex gap-5 text-white/40 text-sm"
          >
            <a
              href="https://www.instagram.com/solucioneslegales.medinaa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/17zonPNHp7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors duration-300"
            >
              Facebook
            </a>
          </motion.div>
        </div>

        {/* ═══ STAT COUNTERS — Glassmorphism Cards ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-counters mt-14 lg:mt-20 grid grid-cols-3 gap-3 sm:gap-5 hero-text-col"
        >
          {[
            { value: 15, suffix: "+", label: "Años de Experiencia", icon: Clock },
            { value: 92, suffix: "%", label: "Casos Ganados", icon: TrendingUp },
            { value: 500, suffix: "+", label: "Clientes Satisfechos", icon: Users },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.7 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="stat-glass gold-border-gradient rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center gpu-accelerated"
            >
              <CounterItem
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <ScrollDownIndicator />
    </section>
  );
}