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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">Trayectoria</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}>Casos y Resultados</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="section-divider-gold mb-6" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">Nuestra firma cuenta con una sólida trayectoria de casos resueltos con éxito en diversas áreas del derecho. Cada resultado favorable refleja nuestro compromiso con la excelencia, la preparación meticulosa y la defensa incansable de los intereses de nuestros clientes.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
              {[
                { number: "500+", label: "Casos Gestionados" },
                { number: "92%", label: "Tasa de Éxito" },
                { number: "15+", label: "Años de Experiencia" },
              ].map((stat) => (
                <div key={stat.label} className="stat-glass glass-card rounded-xl p-5 text-center gpu-accelerated">
                  <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}>{stat.number}</div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {cases.map((caseItem, index) => {
              const Icon = caseItem.icon;
              return (
                <ScrollReveal key={caseItem.id} delay={0.1 * (index + 1)}>
                  <div className="case-card-premium rounded-2xl p-6 sm:p-8 text-left gpu-accelerated">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-[#0A0A0A] border border-[#D4AF37]/20 flex items-center justify-center">
                        <span className="case-number-gold text-xl font-bold" style={{ fontFamily: "var(--font-playfair), serif" }}>{String(caseItem.id).padStart(2, '0')}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-base sm:text-lg mb-1.5" style={{ fontFamily: "var(--font-playfair), serif" }}>{caseItem.title}</h3>
                        <p className="text-[#B87333] text-sm font-medium">{caseItem.category}</p>
                      </div>
                      <span className="case-badge-victory shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5" />{caseItem.result}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed pl-16">{caseItem.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-14 text-center">
              <p className="text-gray-500 text-sm mb-6">¿Tienes un caso que necesita representación legal de primer nivel?</p>
              <a href="https://api.whatsapp.com/send?phone=51943366950&text=Hola%2C%20necesito%20asesor%C3%ADa%20legal%20de%20Medina%20Almonte%20Firma%20Legal." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-gold-primary gpu-accelerated text-[#0A0A0A] font-bold text-sm px-8 py-3.5 rounded-xl">Consultar por WhatsApp</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}