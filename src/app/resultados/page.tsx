import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Trophy, TrendingUp, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos y Resultados | MEDINA ALMONTE — Lawyers Firm",
  description: "Conoce los casos de éxito y resultados obtenidos por MEDINA ALMONTE — Lawyers Firm. Nuestra trayectoria habla por nosotros.",
  keywords: ["casos de éxito", "resultados jurídicos", "sentencias favorables", "abogados Perú"],
};

const cases = [
  { id: 1, title: "Sentencia de Alimentos Justa para Mis Hijos", category: "Derecho de Familia", description: "Asesoría legal integral que permitió obtener una sentencia de alimentos justa para los hijos del cliente, así como el reconocimiento del apellido paterno, garantizando sus derechos alimentarios y de identidad.", result: "Sentencia Favorable", icon: Trophy },
  { id: 2, title: "Absolución en Proceso Penal Complejo", category: "Derecho Penal", description: "Defensa penal estratégica que resultó en la absolución completa de los cargos imputados, demostrando la inocencia de nuestro cliente ante el Poder Judicial y permitiendo su reincorporación a la vida familiar.", result: "Absolución Completa", icon: TrendingUp },
  { id: 3, title: "Recuperación de Libertad y Reunificación Familiar", category: "Derecho Penal", description: "Defensa penal exitosa que permitió a nuestro cliente recuperar su libertad y reunirse nuevamente con sus hijas, gracias a una estrategia legal sólida y sostenida en cada etapa del proceso.", result: "Libertad Recuperada", icon: CheckCircle },
  { id: 4, title: "Contratos Seguros para Inquilinos de Multifamiliar", category: "Derecho Civil", description: "Redacción y revisión de contratos de arrendamiento para todos los inquilinos de un multifamiliar, brindando seguridad jurídica al propietario y previniendo situaciones de precariedad legal.", result: "Seguridad Jurídica", icon: Trophy },
];

export default function ResultadosPage() {
  return (
    <SiteLayout>
      <section className="section-dark-gradient min-h-screen py-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A961]/30 text-[#C9A961] text-sm font-medium tracking-wider uppercase mb-8">Trayectoria</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="immersive-title font-bold mb-6" style={{ color: "#C9A961", fontFamily: "var(--font-playfair), serif" }}>Casos y Resultados</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="section-divider-gold mb-6" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">Nuestra firma cuenta con una sólida trayectoria de casos resueltos con éxito en diversas áreas del derecho. Cada resultado favorable refleja nuestro compromiso con la excelencia, la preparación meticulosa y la defensa incansable de los intereses de nuestros clientes.</p>
            </ScrollReveal>
          </div>

          {/* Stats — no cards, just numbers */}
          <ScrollReveal delay={0.25}>
            <div className="grid grid-cols-3 gap-4 mb-16 text-center">
              {[
                { number: "500+", label: "Casos Gestionados" },
                { number: "92%", label: "Tasa de Éxito" },
                { number: "10+", label: "Años de Experiencia" },
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
                  <div className="border-l-[3px] border-[#C9A961]/50 pl-5 sm:pl-8 py-2">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-3">
                      <div className="flex-1 min-w-0">
                        <span className="case-number-gold text-sm font-medium text-gray-500" style={{ fontFamily: "var(--font-playfair), serif" }}>
                          CASO {String(caseItem.id).padStart(2, '0')}
                        </span>
                        <h3 className="text-white font-bold text-base sm:text-lg mt-1 leading-snug" style={{ fontFamily: "var(--font-playfair), serif" }}>{caseItem.title}</h3>
                        <p className="text-[#8B6F47] text-sm font-medium mt-1">{caseItem.category}</p>
                      </div>
                      <span className="case-badge-victory shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 self-start sm:mt-1">
                        <Icon className="w-3.5 h-3.5" />{caseItem.result}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{caseItem.description}</p>
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
              <a href="https://api.whatsapp.com/send?phone=51977186734&text=Hola%2C%20necesito%20asesor%C3%ADa%20legal%20de%20MEDINA%20ALMONTE%20Lawyers%20Firm." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-gold-primary gpu-accelerated text-[#0F0F0F] font-bold text-sm px-8 py-3.5 rounded-xl">Consultar por WhatsApp</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}