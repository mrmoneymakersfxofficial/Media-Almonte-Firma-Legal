import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TeamCards } from "@/components/TeamCards";

export const metadata: Metadata = {
  title: "Nuestros Abogados | MEDINA ALMONTE — Lawyers Firm",
  description:
    "Conoce al equipo de abogados de MEDINA ALMONTE — Lawyers Firm. Profesionales comprometidos con la excelencia jurídica en Perú.",
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
      <section className="section-dark-gradient py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A961]/30 text-[#C9A961] text-sm font-medium tracking-wider uppercase mb-8">
                El Equipo
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1
                className="immersive-title font-bold mb-6"
                style={{
                  color: "#C9A961",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Nuestro Equipo de Abogados
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="section-divider-gold mb-6" />
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

          {/* Team — no cards, vertical list */}
          <TeamCards />

          {/* Colegio de Abogados — no card */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 text-center">
              <hr className="subtle-divider mb-10" />
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Todos nuestros abogados se encuentran debidamente colegiados y
                habilitados para el ejercicio profesional en el territorio
                nacional.
              </p>
              <p className="text-[#C9A961] font-semibold mt-3 text-sm sm:text-base">
                Registro: Colegio de Abogados de Lima — CAL
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}