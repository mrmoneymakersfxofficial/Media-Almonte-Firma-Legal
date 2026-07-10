import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "La Firma | Medina Almonte Firma Legal",
  description:
    "Conoce Medina Almonte Firma Legal. Más que abogados, tu principal estratega legal en Perú. Especialistas en Derecho Corporativo, Civil, Penal, Laboral y Familia.",
  keywords: [
    "Medina Almonte",
    "firma legal Perú",
    "abogados corporativos",
    "estudio jurídico",
  ],
};

export default function FirmaPage() {
  return (
    <SiteLayout>
      <section className="bg-[#0A0A0A] min-h-screen flex items-center justify-center py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">
              Sobre Nosotros
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
              Medina Almonte Firma Legal
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-10"
              style={{
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Más que Abogados, tu Principal Estratega Legal
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
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
      </section>
    </SiteLayout>
  );
}