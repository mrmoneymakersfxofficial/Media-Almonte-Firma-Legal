import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Trophy, TrendingUp, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos y Resultados | Medina Almonte Firma Legal",
  description: "Conoce los casos de éxito y resultados obtenidos por Medina Almonte Firma Legal. Nuestra trayectoria habla por nosotros.",
  keywords: ["casos de éxito", "resultados jurídicos", "sentencias favorables", "abogados Perú"],
};

const cases = [
  { id: 1, title: "Resolución Favorable en Litigio Corporativo", category: "Derecho Corporativo", description: "Representación exitosa en un conflicto societario de alta complejidad, logrando una resolución que protegió los intereses de nuestro cliente corporativo.", result: "Resolución Favorable", icon: Trophy },
  { id: 2, title: "Absolución en Proceso Penal Complejo", category: "Derecho Penal", description: "Defensa penal estratégica que resultó en la absolución completa de los cargos imputados, demostrando la inocencia de nuestro cliente ante el Poder Judicial.", result: "Absolución Completa", icon: TrendingUp },
  { id: 3, title: "Conciliación en Disputa Laboral", category: "Derecho Laboral", description: "Negociación y conciliación exitosa en un caso de despido arbitrario, obteniendo una indemnización justa y reintegro laboral para el trabajador.", result: "Conciliación Exitosa", icon: CheckCircle },
];

export default function ResultadosPage() {
  return (
    <SiteLayout>
      <section className="section-dark-gradient min-h-screen py-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">Trayectoria</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="immersive-title font-bold mb-6" style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}>Casos y Resultados</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="section-divider-gold mb-6" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="pro-paragraph-lg max-w-3xl mx-auto">Nuestra firma cuenta con una sólida trayectoria de casos resueltos con éxito en diversas áreas del derecho. Cada resultado favorable refleja nuestro compromiso con la excelencia, la preparación meticulosa y la defensa incansable de los intereses de nuestros clientes.</p>
            </ScrollReveal>
          </div>

          {/* Stats — no cards, just numbers */}
          <ScrollReveal delay={0.25}>
            <div className="grid grid-cols-3 gap-4 mb-16 text-center">
              {[
                { number: "500+", label: "Casos Gestionados" },
                { number: "92%", label: "Tasa de Éxito" },
                { number: "15+", label: "Años de Experiencia" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="immersive-stat-number mb-1" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>{stat.number}</div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider" style={{ fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <hr className="subtle-divider mb-10" />

          {/* Cases — no cards, left accent line only */}
          <div className="space-y-10">
            {cases.map((caseItem, index) => {
              const Icon = caseItem.icon;
              return (
                <ScrollReveal key={caseItem.id} delay={0.1 * (index + 1)}>
                  <div className="border-l-[3px] border-[#D4AF37]/50 pl-5 sm:pl-8 py-2">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3">
                      <div className="flex-1 min-w-0">
                        <span className="case-number-gold text-sm font-medium text-gray-500" style={{ fontFamily: "var(--font-playfair), serif" }}>
                          CASO {String(caseItem.id).padStart(2, '0')}
                        </span>
                        <h3 className="text-white font-bold text-base sm:text-lg mt-1 leading-snug" style={{ fontFamily: "var(--font-playfair), serif" }}>{caseItem.title}</h3>
                        <p className="text-[#B87333] text-sm font-medium mt-1">{caseItem.category}</p>
                      </div>
                      <span className="case-badge-victory shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 self-start sm:mt-1">
                        <Icon className="w-3.5 h-3.5" />{caseItem.result}
                      </span>
                    </div>
                    <p className="pro-paragraph-sm">{caseItem.description}</p>
                  </div>
                  {index < cases.length - 1 && <hr className="subtle-divider mt-10" />}
                </ScrollReveal>
              );
            })}
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center">
              <hr className="subtle-divider mb-10" />
              <p className="text-gray-500 text-sm mb-6">¿Tienes un caso que necesita representación legal de primer nivel?</p>
              <a href="https://api.whatsapp.com/send?phone=51943366950&text=Hola%2C%20necesito%20asesor%C3%ADa%20legal%20de%20Medina%20Almonte%20Firma%20Legal." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-gold-primary gpu-accelerated text-[#0A0A0A] font-bold text-sm px-8 py-3.5 rounded-xl">Consultar por WhatsApp</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}