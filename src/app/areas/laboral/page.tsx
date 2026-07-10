import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Derecho Laboral | Medina Almonte Firma Legal",
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
      <section className="bg-[#0A0A0A] min-h-screen py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
              href="https://api.whatsapp.com/send?phone=51943366950&text=Hola%2C%20necesito%20una%20consulta%20legal%20en%20Derecho%20Laboral%20-%20Medina%20Almonte%20Firma%20Legal."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0A0A0A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c5a030] transition-colors duration-300"
            >
              Consulta Legal Inicial
            </a>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}