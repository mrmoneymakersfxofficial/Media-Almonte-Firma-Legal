import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Derecho Laboral | MEDINA ALMONTE — Lawyers Firm",
  description:
    "Asesoría laboral integral: relaciones laborales, negociaciones colectivas, despido, seguridad social y derecho sindical en Perú.",
  keywords: [
    "derecho laboral Perú",
    "abogado laboral",
    "despido",
    "negociación colectiva",
    "seguridad social",
  ],
};

export default function LaboralPage() {
  return (
    <SiteLayout>
      <section className="section-navy-gradient min-h-screen py-24 px-4">
        <div className="max-w-4xl mx-auto text-center glass-card gold-border-gradient rounded-2xl p-6 sm:p-8">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A961]/30 text-[#C9A961] text-sm font-medium tracking-wider uppercase mb-8">
              Área de Práctica
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{
                color: "#C9A961",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Derecho Laboral
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
              Asesoramos tanto a empleadores como a trabajadores en todas las
              etapas de la relación laboral. Desde la elaboración de contratos de
              trabajo y reglamentos internos hasta la defensa en litigios por
              despido injusto, acoso laboral y conflictos sindicales. Nuestro
              objetivo es prevenir controversias y, cuando sea necesario,
              resolverlas con la mayor eficacia jurídica.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a
              href="https://api.whatsapp.com/send?phone=51977186734&text=Hola%2C%20necesito%20una%20consulta%20legal%20en%20Derecho%20Laboral%20-%20MEDINA%20ALMONTE%20Lawyers%20Firm."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold-primary gpu-accelerated text-[#0F0F0F] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c5a030] transition-colors duration-300"
            >
              Consulta Legal Inicial
            </a>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}