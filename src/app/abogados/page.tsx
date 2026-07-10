import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Nuestros Abogados | Medina Almonte Firma Legal",
  description:
    "Conoce al equipo de abogados de Medina Almonte Firma Legal. Profesionales comprometidos con la excelencia jurídica en Perú.",
  keywords: [
    "abogados Perú",
    "equipo jurídico",
    "abogados especializados",
    "Medina Almonte",
  ],
};

export default function AbogadosPage() {
  return (
    <SiteLayout>
      <section className="bg-[#0A0A0A] min-h-screen flex items-center justify-center py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">
              El Equipo
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
              Nuestro Equipo de Abogados
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Cada miembro de nuestro equipo aporta una combinación única de
              experiencia, especialización y pasión por el derecho. Nuestros
              abogados cuentan con formación de primer nivel y una trayectoria
              comprobada en las principales áreas del derecho peruano. Trabajamos
              de forma colaborativa para garantizar que cada cliente reciba una
              representación legal excepcional y personalizada, respaldada por la
              ética profesional y el compromiso con la justicia.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col items-center"
                >
                  <div className="w-24 h-24 rounded-full bg-[#1a1a1a] mb-4 flex items-center justify-center text-gray-600 text-3xl">
                    👤
                  </div>
                  <div className="h-4 w-32 bg-[#1a1a1a] rounded mb-2" />
                  <div className="h-3 w-24 bg-[#1a1a1a] rounded" />
                  <p className="text-gray-600 text-sm mt-4">
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