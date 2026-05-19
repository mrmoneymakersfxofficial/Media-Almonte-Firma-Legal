"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Shield, CheckCircle2 } from "lucide-react";
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
    <section className="relative min-h-[100svh] flex items-center overflow-hidden hero-fade-top">

      {/* ═══ LAYER 0 — Background Photograph ═══ */}
      <div className="hero-photo-bg" aria-hidden="true" />

      {/* ═══ LAYER 1 — Brand Gradient Overlay (Navy + Purple corporate tint) ═══ */}
      <div className="hero-brand-overlay" aria-hidden="true" />

      {/* ═══ LAYER 2 — Decorative Blurs + Dot Pattern ═══ */}
      <div className="hero-decor-layer">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#481180]/15 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#008775]/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ═══ LAYER 20 — Content (always on top) ═══ */}
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3.5 py-1.5 mb-5"
          >
            <Shield className="w-3.5 h-3.5 text-[#00a996]" />
            <span className="text-white/85 text-xs sm:text-sm font-medium tracking-wide">
              Especialistas Tributarios en Perú
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[64px] font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Protege tu patrimonio.{" "}
            <span className="text-[#00a996]">
              Nosotros nos encargamos de SUNAT.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 text-[15px] sm:text-lg text-white/60 max-w-2xl leading-relaxed"
          >
            Especialistas en asesoría tributaria, contabilidad integral y defensa
            ante fiscalizaciones. Más de 500 empresas confían en nosotros.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            {/* Official WhatsApp CTA — same widget as floating corner */}
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1fb855] text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 active:scale-[0.98]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                style={{ width: "22px", height: "22px", fill: "#FFFFFF" }}
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              Consultoría Gratuita
            </button>
            <Link
              href="/constitucion-de-empresas"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm"
            >
              Nuestros Servicios
              <ArrowDown className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-white/40 text-xs sm:text-sm"
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
              Atención personalizada
            </span>
          </motion.div>
        </div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-6"
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
