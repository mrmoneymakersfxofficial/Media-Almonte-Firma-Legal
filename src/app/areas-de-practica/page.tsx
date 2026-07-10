import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Áreas de Práctica | Medina Almonte Firma Legal",
  description:
    "Conoce nuestras áreas de especialización: Derecho Civil, Penal, Laboral, Corporativo y Familia. Soluciones legales integrales en Perú.",
  keywords: [
    "áreas de práctica",
    "derecho civil",
    "derecho penal",
    "derecho laboral",
    "derecho corporativo",
    "derecho de familia",
  ],
};

const areas = [
  {
    name: "Derecho Civil",
    slug: "civil",
    description:
      "Contratos, responsabilidad civil, propiedad y resoluciones de conflictos contractuales.",
    icon: "⚖️",
  },
  {
    name: "Derecho Penal",
    slug: "penal",
    description:
      "Defensa penal, delitos corporativos, investigaciones y protección de derechos fundamentales.",
    icon: "🛡️",
  },
  {
    name: "Derecho Laboral",
    slug: "laboral",
    description:
      "Relaciones laborales, negociaciones colectivas, despido y seguridad social.",
    icon: "📋",
  },
  {
    name: "Derecho Corporativo",
    slug: "corporativo",
    description:
      "Constitución de empresas, gobernanza corporativa, fusiones y adquisiciones.",
    icon: "🏢",
  },
  {
    name: "Derecho de Familia",
    slug: "familia",
    description:
      "Divorcios, custodia, pensiones alimenticias, herencias y sucesiones.",
    icon: "👨‍👩‍👧‍👦",
  },
];

export default function AreasDePracticaPage() {
  return (
    <SiteLayout>
      <section className="bg-[#0A0A0A] min-h-screen py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">
                Especialidades
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{
                  color: "#D4AF37",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Áreas de Práctica
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Nuestro equipo de abogados especializados cubre las principales
                ramas del derecho para ofrecerte una defensa legal integral.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <ScrollReveal key={area.slug} delay={index * 0.1}>
                <Link href={`/areas/${area.slug}`} className="block group">
                  <div className="relative bg-[#111111] border border-white/5 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#141414]">
                    <span className="text-4xl mb-4 block">{area.icon}</span>
                    <h3
                      className="text-xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors"
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                      }}
                    >
                      {area.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {area.description}
                    </p>
                    <div className="mt-6 flex items-center text-[#D4AF37] text-sm font-medium">
                      <span>Conocer más</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}