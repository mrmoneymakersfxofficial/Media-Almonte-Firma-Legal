import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Recursos Legales | Medina Almonte Firma Legal",
  description:
    "Artículos, guías y recursos legales de Medina Almonte Firma Legal. Mantente informado sobre las últimas novedades jurídicas en Perú.",
  keywords: [
    "recursos legales",
    "artículos jurídicos",
    "guías legales Perú",
    "blog jurídico",
  ],
};

export default function RecursosLegalesPage() {
  return (
    <SiteLayout>
      <section className="bg-[#0A0A0A] min-h-screen flex items-center justify-center py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">
              Conocimiento
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
              Recursos Legales
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Accede a nuestra biblioteca de artículos, guías y análisis
              jurídicos. En Medina Almonte Firma Legal creemos que un cliente
              informado toma mejores decisiones. Nuestro equipo publica
              regularmente contenido actualizado sobre las principales novedades
              legales, reformas legislativas y buenas prácticas en las distintas
              ramas del derecho peruano.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-white/5 rounded-2xl p-6 text-left"
                >
                  <div className="h-40 bg-[#1a1a1a] rounded-lg mb-4 flex items-center justify-center text-gray-600">
                    📄
                  </div>
                  <div className="h-3 w-16 bg-[#D4AF37]/20 rounded mb-3" />
                  <div className="h-4 w-full bg-[#1a1a1a] rounded mb-2" />
                  <div className="h-4 w-3/4 bg-[#1a1a1a] rounded mb-4" />
                  <p className="text-gray-600 text-xs">
                    Próximamente
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