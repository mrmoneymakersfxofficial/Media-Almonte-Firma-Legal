import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Shield, Users, Target, Award, Scale, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "La Firma | Medina Almonte Firma Legal",
  description:
    "Conoce Medina Almonte Firma Legal. Más que abogados, tu principal estratega legal en Perú. Especialistas en Derecho Penal, Familia y Civil.",
  keywords: [
    "Medina Almonte",
    "firma legal Perú",
    "abogados penales",
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
    description: "Más de 10 años de experiencia y formación continua nos permiten ofrecer un servicio legal de primer nivel en todas las ramas del derecho.",
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
                Medina Almonte Firma Legal
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
              <p className="pro-paragraph-lg max-w-3xl mx-auto">
                Medina Almonte Firma Legal es un estudio jurídico de primer nivel
                con sede en Perú, dedicado a brindar soluciones legales
                estratégicas e integrales. Con un equipo de abogados
                altamente calificados y una trayectoria comprobada, nos
                comprometemos con la excelencia, la ética profesional y la
                obtención de resultados concretos para nuestros clientes.
                Nuestro enfoque combina la experiencia jurídica con una
                visión moderna del derecho, adaptándonos a las necesidades
                de cada caso con innovación y dedicación.
              </p>
            </ScrollReveal>
          </div>

          {/* Values — no cards, icon + text direct on background */}
          <ScrollReveal delay={0.2}>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase">
                Nuestros Valores
              </span>
            </div>
          </ScrollReveal>

          <div className="firma-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={0.1 * (index + 1)}>
                  <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3 sm:gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: "var(--font-playfair), serif" }}>
                        {value.title}
                      </h3>
                      <p className="pro-paragraph-sm">{value.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Stats — no cards, just numbers on background */}
          <ScrollReveal delay={0.3}>
            <div className="mt-20">
              <hr className="subtle-divider mb-12" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {[
                  { number: "10+", label: "Años de Experiencia" },
                  { number: "92%", label: "Casos Resueltos Favorablemente" },
                  { number: "500+", label: "Clientes Atendidos" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="immersive-stat-number mb-2">
                      {stat.number}
                    </div>
                    <p className="immersive-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}