import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Derecho Penal | Medina Almonte Firma Legal",
  description:
    "Defensa penal especializada: delitos corporativos, investigaciones fiscales, protección de derechos fundamentales y defensa en procesos penales en Perú.",
  keywords: [
    "derecho penal Perú",
    "defensa penal",
    "delitos corporativos",
    "abogado penalista",
    "proceso penal",
  ],
};

export default function PenalPage() {
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
              Derecho Penal
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="pro-paragraph-lg max-w-3xl mx-auto mb-12">
              En el área de Derecho Penal brindamos una defensa agresiva y
              estratégica, tanto en la etapa de investigación preliminar como en
              el proceso penal propiamente dicho. Nos especializamos en delitos
              corporativos, blancos, económicos y financieros, así como en la
              protección de los derechos fundamentales de nuestros clientes
              durante todo el procedimiento.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a
              href="https://api.whatsapp.com/send?phone=51943366950&text=Hola%2C%20necesito%20una%20consulta%20legal%20en%20Derecho%20Penal%20-%20Medina%20Almonte%20Firma%20Legal."
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