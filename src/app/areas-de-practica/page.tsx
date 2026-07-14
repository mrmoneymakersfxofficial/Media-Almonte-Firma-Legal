import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Áreas de Práctica | Medina Almonte Firma Legal",
  description: "Conoce nuestras áreas de especialización: Derecho Civil, Penal, Laboral, Corporativo y Familia. Soluciones legales integrales en Perú.",
  keywords: ["áreas de práctica", "derecho civil", "derecho penal", "derecho laboral", "derecho corporativo", "derecho de familia"],
};

const areas = [
  { name: "Derecho Civil", slug: "civil", description: "Contratos, responsabilidad civil, propiedad y resoluciones de conflictos contractuales.", icon: "⚖️" },
  { name: "Derecho Penal", slug: "penal", description: "Defensa penal, delitos corporativos, investigaciones y protección de derechos fundamentales.", icon: "🛡️" },
  { name: "Derecho Laboral", slug: "laboral", description: "Relaciones laborales, negociaciones colectivas, despido y seguridad social.", icon: "📋" },
  { name: "Derecho Corporativo", slug: "corporativo", description: "Constitución de empresas, gobernanza corporativa, fusiones y adquisiciones.", icon: "🏢" },
  { name: "Derecho de Familia", slug: "familia", description: "Divorcios, custodia, pensiones alimenticias, herencias y sucesiones.", icon: "👨‍👩‍👧‍👦" },
];

export default function AreasDePracticaPage() {
  return (
    <SiteLayout>
      <section className="section-dark-gradient min-h-screen py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">Especialidades</span>
              <h1 className="immersive-title font-bold mb-6" style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}>
                Áreas de Práctica
              </h1>
              <div className="section-divider-gold mb-6" />
              <p className="pro-paragraph-lg max-w-2xl mx-auto">
                Nuestro equipo de abogados especializados cubre las principales ramas del derecho para ofrecerte una defensa legal integral.
              </p>
            </div>
          </ScrollReveal>

          {/* Areas — no cards, vertical list with spacing */}
          <div className="space-y-10 md:space-y-14">
            {areas.map((area, index) => (
              <ScrollReveal key={area.slug} delay={index * 0.08}>
                <Link href={`/areas/${area.slug}`} className="block group">
                  <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-3 md:gap-8">
                    <span className="text-3xl md:text-4xl shrink-0">{area.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="immersive-title font-semibold mb-2 group-hover:text-[#D4AF37] transition-colors"
                        style={{ color: "#fff", fontFamily: "var(--font-playfair), serif", WebkitLineClamp: 2 }}
                      >
                        {area.name}
                      </h3>
                      <p className="immersive-desc text-gray-400 leading-relaxed">{area.description}</p>
                      <span className="inline-flex items-center justify-center text-[#D4AF37] text-sm font-medium mt-3 gap-2 group-hover:gap-3 transition-all duration-300">
                        Conocer más
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {index < areas.length - 1 && <hr className="subtle-divider mt-10 md:mt-14" />}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}