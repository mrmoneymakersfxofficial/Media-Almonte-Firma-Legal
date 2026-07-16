"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Award, Fingerprint } from "lucide-react";
import Image from "next/image";

/**
 * Brand Identity / Marca Registrada Section
 * Showcases the firm's registered trademark and brand identity materials.
 */
export function BrandIdentity() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative ambient */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] gpu-accelerated"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#C0C0C0] font-semibold text-sm tracking-wider uppercase mb-4">
              Identidad Institucional
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.15] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-white">Nuestra </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #c9a961, #d4af37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Marca Registrada
              </span>
            </h2>
            <p className="pro-paragraph-lg">
              Cada elemento de nuestra identidad visual refleja los valores de
              autoridad, confianza y excelencia jurídica que nos definen. Nuestro
              emblema institucional se encuentra en proceso de inscripción como
              marca registrada, garantizando la protección y exclusividad de
              nuestra imagen corporativa.
            </p>
          </div>
        </ScrollReveal>

        {/* Brand showcase — Full image with elegant frame */}
        <ScrollReveal delay={0.15}>
          <div className="max-w-3xl mx-auto">
            <div className="relative group">
              {/* Gold accent corners */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(212,175,55,0.15) 0%, transparent 30%, transparent 70%, rgba(160,133,32,0.15) 100%)",
                  borderRadius: "1rem",
                }}
                aria-hidden="true"
              />

              {/* Subtle gold top line */}
              <div
                className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-[2px] rounded-full gpu-accelerated"
                style={{
                  background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                }}
                aria-hidden="true"
              />

              <div className="relative rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                <Image
                  src="/marca-registrada.webp"
                  alt="Identidad de marca registrada — Medina Almonte Lawyers Firm"
                  width={704}
                  height={1521}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority={false}
                />
                {/* Subtle bottom gradient fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(10,10,10,0.4), transparent)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Subtle gold bottom line */}
              <div
                className="absolute -bottom-px left-1/2 -translate-x-1/2 w-24 h-[2px] rounded-full gpu-accelerated"
                style={{
                  background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Trust indicators below the image */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-12">
            <div className="flex items-center gap-3 text-white/50">
              <Award className="w-5 h-5 text-[#D4AF37]/60" />
              <span className="text-sm font-medium">Marca en Proceso de Inscripción</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
            <div className="flex items-center gap-3 text-white/50">
              <Fingerprint className="w-5 h-5 text-[#D4AF37]/60" />
              <span className="text-sm font-medium">Identidad Visual Protegida</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}