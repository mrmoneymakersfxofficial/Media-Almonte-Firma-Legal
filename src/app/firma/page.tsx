import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Shield, Users, Target, Award, Scale, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "La Firma | MEDINA ALMONTE — Lawyers Firm",
  description:
    "Conoce MEDINA ALMONTE — Lawyers Firm. Más que abogados, tu principal estratega legal en Perú. Especialistas en Derecho Civil, Penal y de Familia.",
  keywords: [
    "Medina Almonte",
    "lawyers firm Perú",
    "abogados",
    "estudio jurídico",
  ],
};

const values = [
  {
    icon: Shield,
    title: "Ética Profesional",
    description: "Cada acción se rige por los más altos estándares éticos, garantizando transparencia y confianza en la relación con nuestros clientes.",
  },
  {
    icon: Target,
    title: "Enfoque Estratégico",
    description: "No solo defendemos, sino que diseñamos estrategias legales personalizadas que maximizan las probabilidades de éxito en cada caso.",
  },
  {
    icon: Users,
    title: "Compromiso con el Cliente",
    description: "Nuestro éxito se mide por los resultados de nuestros clientes. Cada caso recibe atención dedicada y seguimiento constante.",
  },
  {
    icon: Award,
    title: "Excelencia Jurídica",
    description: "Nuestra formación continua y experiencia en el sector público y privado nos permiten ofrecer un servicio jurídico de primer nivel.",
  },
  {
    icon: Scale,
    title: "Justicia Accesible",
    description: "Creemos que todos merecen una defensa de calidad. Ofrecemos planes de pago flexibles y la primera consulta completamente gratuita.",
  },
  {
    icon: BookOpen,
    title: "Innovación Legal",
    description: "Combinamos la tradición jurídica con herramientas y enfoques modernos para adaptarnos a los desafíos legales del mundo actual.",
  },
];

export default function FirmaPage() {
  return (
    <SiteLayout>
      <section className="section-dark-gradient min-h-screen py-24 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">
                Sobre Nosotros
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1
                className="immersive-title font-bold mb-6"
                style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}
              >
                MEDINA ALMONTE — Lawyers Firm
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="section-divider-gold mb-6" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-10" style={{ fontFamily: "var(--font-playfair), serif" }}>
                Más que Abogados, tu Principal Estratega Legal
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                MEDINA ALMONTE — Lawyers Firm es un estudio jurídico
                con sede en Perú, dedicado a brindar soluciones legales
                estratégicas e integrales. Nos comprometemos con la
                excelencia, la ética profesional y la obtención de
                resultados concretos para nuestros clientes. Nuestro
                enfoque combina la experiencia jurídica con una visión
                moderna del derecho, adaptándonos a las necesidades de
                cada caso con innovación y dedicación.
              </p>
            </ScrollReveal>
          </div>

          {/* Founder Section */}
          <ScrollReveal delay={0.2}>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#C0C0C0]/30 text-[#C0C0C0] text-sm font-medium tracking-wider uppercase">
                Nuestro Fundador
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="max-w-3xl mx-auto mb-20">
              <div className="flex flex-col items-center text-center">
                <div className="team-avatar-ring w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0 mb-6">
                  <span
                    className="text-[#D4AF37] text-2xl font-bold"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    EM
                  </span>
                </div>
                <h3
                  className="text-white font-bold text-xl sm:text-2xl mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Dr. Eduardo Medina Almonte
                </h3>
                <p className="text-[#C0C0C0] text-sm font-medium mb-6">
                  Abogado — Fundador
                </p>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Medina Almonte es un abogado que actualmente ejerce la profesión legal, tras una destacada trayectoria como servidor público del Poder Judicial y del Ministerio Público, donde desempeñó funciones durante más de 10 años. Es miembro activo del Colegio de Abogados del Callao. Cuenta con estudios de posgrado en materia penal y ha realizado pasantías nacionales e internacionales, incluyendo una en Colombia. Ha impartido clases en la Pontificia Universidad Católica del Perú (PUCP). Su enfoque profesional se centra en Derecho Penal, Derecho de Familia y Derecho Civil.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Values — no cards, icon + text direct on background */}
          <ScrollReveal delay={0.2}>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#C0C0C0]/30 text-[#C0C0C0] text-sm font-medium tracking-wider uppercase">
                Nuestros Valores
              </span>
            </div>
          </ScrollReveal>

          <div className="firma-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={0.1 * (index + 1)}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mt-0.5">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>
                        {value.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}