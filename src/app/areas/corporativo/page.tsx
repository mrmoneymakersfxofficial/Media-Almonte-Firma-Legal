import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Derecho Corporativo | MEDINA ALMONTE — Lawyers Firm",
  description:
    "Derecho Corporativo: constitución de empresas, gobernanza corporativa, fusiones, adquisiciones y asesoría empresarial integral en Perú.",
  keywords: [
    "derecho corporativo Perú",
    "constitución de empresas",
    "gobernanza corporativa",
    "fusiones y adquisiciones",
    "asesoría empresarial",
  ],
};

export default function CorporativoPage() {
  return (
    <SiteLayout>
      <section className="section-navy-gradient min-h-screen py-24 px-4">
        <div className="max-w-4xl mx-auto text-center glass-card gold-border-gradient rounded-2xl p-6 sm:p-8">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">
              Área de Práctica
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
              Derecho Corporativo
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
              Brindamos asesoría legal integral a empresas de todos los tamaños,
              desde la constitución societaria hasta operaciones complejas de
              reestructuración, fusiones y adquisiciones. Nuestro enfoque se
              centra en la prevención de riesgos legales, el cumplimiento
              normativo y la optimización de la estructura corporativa para
              garantizar el éxito y la sostenibilidad de tu negocio.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a
              href="https://api.whatsapp.com/send?phone=51977186734&text=Hola%2C%20necesito%20una%20consulta%20legal%20en%20Derecho%20Corporativo%20-%20MEDINA%20ALMONTE%20Lawyers%20Firm."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold-primary gpu-accelerated text-[#0A0A0A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c5a030] transition-colors duration-300"
            >
              Consulta Legal Inicial
            </a>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}