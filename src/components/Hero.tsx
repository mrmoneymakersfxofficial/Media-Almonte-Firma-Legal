"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2, Clock, TrendingUp, Users, Volume2, VolumeX } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";
import { ve } from "@/lib/ve";
import type { HeroSettings } from "@/sanity/types";

/* ═══════════════════════════════════════════════════════════════════════
   HERO — Medina Almonte Firma Legal · Real-Time Visual Editing
   ═══════════════════════════════════════════════════════════════════════ */

/* ═══ Counter component — Glassmorphism + Lucide Icon ═══ */
function CounterItem({
  value,
  suffix,
  label,
  icon: Icon,
  veProps,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  veProps?: Record<string, string>;
}) {
  const { count, ref } = useCountUp(value, 2500);
  return (
    <div className="text-center" {...veProps}>
      <div className="flex items-center justify-center mb-2">
        <Icon className="w-4 h-4 text-[#FFD700]/70 mr-1.5" />
        <span
          ref={ref}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
          style={{
            background: "linear-gradient(135deg, #FFF6D1 0%, #FFD700 35%, #DFB143 70%, #B8860B 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 2px 10px rgba(255, 215, 0, 0.25))",
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
  veProps,
}: {
  text: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
  veProps?: Record<string, string>;
}) {
  const cls =
    variant === "primary"
      ? "btn-gold-primary inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:px-9 sm:py-4.5 rounded-xl text-[15px] sm:text-base gpu-accelerated shadow-[0_4px_25px_rgba(255,215,0,0.35)]"
      : "btn-gold-outline inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:px-9 sm:py-4.5 rounded-xl text-[15px] sm:text-base gpu-accelerated border-[#FFD700]/40 text-[#FFE082] hover:border-[#FFD700]";

  const inner = (
    <>
      <span {...veProps}>{text}</span>
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

const DEFAULT_COUNTERS = [
  { value: 15, suffix: "+", label: "Años de Experiencia", icon: Clock },
  { value: 92, suffix: "%", label: "Casos Ganados", icon: TrendingUp },
  { value: 500, suffix: "+", label: "Clientes Satisfechos", icon: Users },
];

/* ═══════════════════════════════════════════════════════════════════════
   HERO COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export function Hero({ heroSettings }: { heroSettings?: HeroSettings }) {
  const { openModal } = useWhatsAppStore();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = useCallback(() => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, []);

  const badgeText = heroSettings?.badge || "MEDINA ALMONTE — Lawyers Firm";
  const title1 = heroSettings?.titlePart1 || "Medina Almonte";
  const title2 = heroSettings?.titlePart2 || "Firma Legal";
  const tagline = heroSettings?.tagline || "Especialistas en Derecho Penal, Familia y Civil.";
  const description =
    heroSettings?.description ||
    "Protegemos tus intereses con excelencia y estrategia. Confianza, autoridad legal y resultados comprobados.";
  const ctaPrimary = heroSettings?.ctaPrimaryText || "Agenda tu Consulta";
  const ctaSecondary = heroSettings?.ctaSecondaryText || "Conoce Más";
  const trustBadges =
    heroSettings?.trustBadges && heroSettings.trustBadges.length > 0
      ? heroSettings.trustBadges
      : ["Confianza", "Autoridad legal", "Resultados comprobados"];
  const videoSrc = heroSettings?.backgroundVideoUrl || "/video-1.mp4";

  const counters =
    heroSettings?.statCounters && heroSettings.statCounters.length > 0
      ? heroSettings.statCounters.map((sc, i) => {
          const fallbackIcon = i === 0 ? Clock : i === 1 ? TrendingUp : Users;
          return {
            value: sc.value,
            suffix: sc.suffix || "+",
            label: sc.label,
            icon: fallbackIcon,
          };
        })
      : DEFAULT_COUNTERS;

  return (
    <section className="relative flex overflow-hidden min-h-[100svh] hero-fade-top">
      {/* ═══ BACKGROUND VIDEO — video 1 ═══ */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true" {...ve("heroSettings", "heroSettings", "backgroundVideoUrl")}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          poster="/hero-video-poster.webp"
          className="w-full h-full object-cover md:object-[68%_center] object-center filter brightness-[0.92] contrast-[1.08]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* ═══ Gold accent line at top (Pure 24K Gold) ═══ */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-20 gpu-accelerated"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #D4AF37 25%, #FFF0AD 50%, #DFAB3E 75%, transparent 100%)",
        }}
      />

      {/* ═══ LAYER 1 — General ambient overlay ═══ */}
      <div
        className="absolute inset-0 gpu-accelerated"
        style={{
          background:
            "linear-gradient(160deg, rgba(10,10,10,0.50) 0%, rgba(11,26,46,0.38) 35%, rgba(10,10,10,0.28) 65%, rgba(27,42,73,0.04) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ═══ LAYER 1B — Lateral Editorial Shade (PC only) ═══ */}
      <div
        className="absolute inset-0 hidden md:block gpu-accelerated"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.70) 35%, rgba(10,10,10,0.20) 65%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom depth fade for counters */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 gpu-accelerated"
        style={{
          background:
            "linear-gradient(to top, rgba(15,15,15,0.92) 0%, rgba(10,10,10,0.40) 45%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ═══ LAYER 2 — Decorative Elements ═══ */}
      <div className="hero-decor-layer">
        <div
          className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full blur-[140px] gpu-accelerated"
          style={{ background: "radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-60 -left-60 w-[500px] h-[500px] rounded-full blur-[120px] gpu-accelerated"
          style={{ background: "radial-gradient(circle, rgba(218,165,32,0.07) 0%, transparent 70%)" }}
        />
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
        <div className="hero-text-col max-w-xl">
          {/* Badge — Glassmorphism pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge lg:hidden inline-flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-xl border border-[#FFD700]/30 rounded-full px-5 py-2.5 shadow-[0_0_20px_rgba(255,215,0,0.12)] gpu-accelerated"
            {...ve("heroSettings", "heroSettings", "badge")}
          >
            <Shield className="w-3.5 h-3.5 text-[#FFD700]" />
            <span className="text-white/85 text-xs sm:text-sm font-medium tracking-wide">
              {badgeText}
            </span>
          </motion.div>

          {/* H1 — Title with 24K Pure Real Gold Gradient & Specular Sheen */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-h1 mt-7 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight cursor-pointer"
            style={{
              fontFamily: "var(--font-playfair), serif",
              background: "linear-gradient(135deg, #FFF6D1 0%, #FFD700 25%, #DFB143 50%, #FFF2B2 75%, #B8860B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 14px rgba(255, 215, 0, 0.35))",
            }}
            {...ve("heroSettings", "heroSettings", "titlePart1")}
          >
            {title1}
          </motion.h1>

          {/* H2 — Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-[1.15] tracking-tight cursor-pointer"
            style={{ fontFamily: "var(--font-playfair), serif" }}
            {...ve("heroSettings", "heroSettings", "titlePart2")}
          >
            {title2}
          </motion.h2>

          {/* Value line — Silver accent */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-base sm:text-lg font-semibold tracking-wide"
            style={{
              color: "#C0C0C0",
              fontFamily: "var(--font-inter), sans-serif",
            }}
            {...ve("heroSettings", "heroSettings", "tagline")}
          >
            {tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 text-[15px] sm:text-[17px] lg:text-[18px] text-white/75 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
            {...ve("heroSettings", "heroSettings", "description")}
          >
            {description}
          </motion.p>

          {/* CTAs — Premium Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hero-ctas mt-10 flex flex-col sm:flex-row gap-4"
          >
            <CtaButton
              text={ctaPrimary}
              variant="primary"
              onClick={() => openModal()}
              veProps={ve("heroSettings", "heroSettings", "ctaPrimaryText")}
            />
            <CtaButton
              text={ctaSecondary}
              variant="secondary"
              onClick={() =>
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
              }
              veProps={ve("heroSettings", "heroSettings", "ctaSecondaryText")}
            />
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="hero-trust mt-8 flex flex-wrap gap-x-5 gap-y-2.5 text-white/40 text-xs sm:text-sm"
            {...ve("heroSettings", "heroSettings", "trustBadges")}
          >
            {trustBadges.map((badge, idx) => (
              <span key={badge} className="flex items-center gap-1.5" {...ve("heroSettings", "heroSettings", `trustBadges[${idx}]`)}>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]/80" />
                {badge}
              </span>
            ))}
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
          className="hero-counters mt-14 lg:mt-20 grid grid-cols-3 gap-3 sm:gap-5 hero-text-col max-w-xl"
        >
          {counters.map((item, i) => (
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
                veProps={ve("heroSettings", "heroSettings", `statCounters[${i}]`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ═══ Audio Toggle Button (Luxury Glassmorphism) ═══ */}
      <div className="absolute bottom-24 right-5 sm:bottom-10 sm:right-28 z-30">
        <button
          onClick={toggleAudio}
          className="group flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-[#FFD700]/30 hover:border-[#FFD700]/70 text-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.45)] transition-all duration-300 active:scale-95 cursor-pointer"
          aria-label={isMuted ? "Activar audio del video" : "Silenciar video"}
          title={isMuted ? "Activar audio" : "Silenciar"}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-[#FFD700] transition-transform group-hover:scale-110" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#FFD700] transition-transform group-hover:scale-110" />
          )}
          <span className="text-xs font-medium text-white/85 group-hover:text-white transition-colors tracking-wide">
            {isMuted ? "Audio" : "Silenciar"}
          </span>
        </button>
      </div>

      {/* Scroll down indicator */}
      <ScrollDownIndicator />
    </section>
  );
}