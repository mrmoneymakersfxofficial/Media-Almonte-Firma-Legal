import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Casos y Resultados | Medina Almonte Firma Legal",
  description:
    "Conoce los casos de éxito y resultados obtenidos por Medina Almonte Firma Legal. Nuestra trayectoria habla por nosotros.",
  keywords: [
    "casos de éxito",
    "resultados jurídicos",
    "sentencias favorables",
    "abogados Perú",
  ],
};

export default function ResultadosPage() {
  return (
    <SiteLayout>
      <section className="bg-[#0A0A0A] min-h-screen flex items-center justify-center py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">
              Trayectoria
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{
                color: "#D4AF37",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Casos y Resultados
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Nuestra firma cuenta con una sólida trayectoria de casos
              resueltos con éxito en diversas áreas del derecho. Cada resultado
              favorable refleja nuestro compromiso con la excelencia, la
              preparación meticulosa y la defensa incansable de los intereses de
              nuestros clientes. Aquí compartimos algunos de los hitos que
              demuestran por qué confían en nosotros.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 space-y-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-white/5 rounded-2xl p-8 text-left"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold">
                      {i}
                    </div>
                    <div className="flex-1">
                      <div className="h-4 w-48 bg-[#1a1a1a] rounded mb-2" />
                      <div className="h-3 w-32 bg-[#1a1a1a] rounded" />
                    </div>
                    <span className="text-[#D4AF37] text-sm font-medium px-3 py-1 border border-[#D4AF37]/20 rounded-full">
                      Victoria
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Próximamente — Detalle del caso será publicado próximamente.
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}