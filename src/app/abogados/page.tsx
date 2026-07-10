import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TeamCards } from "@/components/TeamCards";

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
      <section className="bg-[#0A0A0A] py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
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
          </div>

          {/* Team Grid */}
          <TeamCards />

          {/* Colegio de Abogados Info */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 text-center">
              <div className="bg-[#0B1A2E] border border-[#D4AF37]/10 rounded-2xl p-8 max-w-3xl mx-auto">
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Todos nuestros abogados se encuentran debidamente colegiados y
                  habilitados para el ejercicio profesional en el territorio
                  nacional.
                </p>
                <p className="text-[#D4AF37] font-semibold mt-3 text-sm sm:text-base">
                  Registro: Colegio de Abogados de Lima — CAL
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}