"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { useWhatsAppStore } from "@/lib/whatsapp";

function CounterItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2500);
  return (
    <div className="text-center">
      <span ref={ref} className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
        {count}{suffix}
      </span>
      <p className="text-white/60 text-xs sm:text-sm mt-1 font-medium">{label}</p>
    </div>
  );
}

export function Hero() {
  const { openModal } = useWhatsAppStore();

  return (
    <section className="relative flex overflow-hidden hero-fade-top">

      {/* ═══ LAYER 0 — Background Photograph (100% cover, face-framed) ═══ */}
      <div className="hero-photo-bg" aria-hidden="true" />

      {/* ═══ LAYER 1 — Asymmetric Brand Overlay ═══ */}
      <div className="hero-brand-overlay" aria-hidden="true" />

      {/* ═══ LAYER 2 — Decorative Blurs + Dot Pattern ═══ */}
      <div className="hero-decor-layer">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#481180]/12 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#008775]/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ═══ LAYER 20 — Content (left column desktop / top mobile) ═══ */}
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="hero-text-col">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2"
          >
            <Shield className="w-3.5 h-3.5 text-[#00a996]" />
            <span className="text-white/85 text-xs sm:text-sm font-medium tracking-wide">
              Especialistas Tributarios en Perú
            </span>
          </motion.div>

          {/* H1 — Premium Headline — Less is More */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-h1 text-[34px] sm:text-[46px] lg:text-[54px] xl:text-[62px] font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Protegemos tu{" "}
            <span className="text-[#00a996]">Empresa.</span>
            <br />
            Aseguramos tu{" "}
            <span className="text-[#00a996]">Patrimonio.</span>
          </motion.h1>

          {/* Subtitle — Short & Impactful */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle mt-6 text-[15px] sm:text-[17px] lg:text-[18px] text-[#f8fafc]/80 max-w-lg leading-relaxed font-light"
          >
            Asesoría tributaria y contable de excelencia.
            Cero multas SUNAT. Seguridad jurídica total.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-ctas mt-10 flex flex-col sm:flex-row gap-3.5"
          >
            {/* Primary CTA — Emerald */}
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2.5 bg-[#008775] hover:bg-[#006655] text-white px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#008775]/30 hover:shadow-xl hover:shadow-[#008775]/40 active:scale-[0.98]"
            >
              Consultoría Gratuita
              <ArrowRight className="w-4 h-4" />
            </button>
            {/* Secondary CTA — Transparent with border */}
            <Link
              href="/constitucion-de-empresas"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm"
            >
              Nuestros Servicios
            </Link>
          </motion.div>

          {/* Trust badges — Minimal inline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hero-trust mt-7 flex flex-wrap gap-x-5 gap-y-2 text-white/45 text-xs sm:text-sm"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00a996]" />
              Sin compromiso
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00a996]" />
              Respuesta inmediata
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00a996]" />
              Personalizado
            </span>
          </motion.div>
        </div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="hero-counters mt-14 lg:mt-20 grid grid-cols-3 gap-3 sm:gap-6 hero-text-col"
        >
          {[
            { value: 500, suffix: "+", label: "Empresas Formalizadas" },
            { value: 2, suffix: "M+", label: "en Multas Evitadas" },
            { value: 98, suffix: "%", label: "de Satisfacción" },
          ].map((item) => (
            <div key={item.label} className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center">
              <CounterItem value={item.value} suffix={item.suffix} label={item.label} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
