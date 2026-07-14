import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Shield, Building2, ArrowRight, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Recursos Legales | Medina Almonte Firma Legal",
  description: "Artículos, guías y recursos legales de Medina Almonte Firma Legal. Mantente informado sobre las últimas novedades jurídicas en Perú.",
  keywords: ["recursos legales", "artículos jurídicos", "guías legales Perú", "blog jurídico"],
};

const articles = [
  { slug: "cambios-legislacion-laboral-2026", category: "Derecho Laboral", title: "Nuevos Cambios en la Legislación Laboral Peruana 2026", excerpt: "El gobierno peruano ha aprobado recientes modificaciones a la normativa laboral que afectan directamente a los contratos de trabajo temporales y los derechos de los trabajadores. En este artículo analizamos los principales cambios y su impacto práctico tanto para empleadores como para empleados, incluyendo las nuevas disposiciones sobre teletrabajo y la actualización de los montos de las indemnizaciones por despido arbitrario.", date: "15 de Junio, 2026", icon: Briefcase, iconColor: "#D4AF37" },
  { slug: "guia-denuncia-penal", category: "Derecho Penal", title: "Guía Completa: Cómo Actuar Ante una Denuncia Penal", excerpt: "Recibir una denuncia penal puede ser una situación abrumadora. Conocer tus derechos y los pasos a seguir desde el primer momento es fundamental para garantizar una defensa adecuada. Explicamos detalladamente el proceso penal peruano, desde la investigación fiscal hasta la etapa de juzgamiento, y las estrategias de defensa que han demostrado mayor eficacia en cada tipo de causa penal.", date: "2 de Junio, 2026", icon: Shield, iconColor: "#B87333" },
  { slug: "compliance-legal-peru", category: "Derecho Corporativo", title: "Protege Tu Empresa: Claves del Compliance Legal en Perú", excerpt: "El cumplimiento normativo o compliance legal se ha convertido en una necesidad imprescindible para las empresas en Perú. Desde la prevención de la responsabilidad administrativa hasta la implementación de programas de integridad, detallamos los aspectos esenciales que toda empresa debe considerar para operar dentro del marco legal vigente y evitar sanciones que puedan afectar su reputación y continuidad operativa.", date: "20 de Mayo, 2026", icon: Building2, iconColor: "#4A90D9" },
];

export default function RecursosLegalesPage() {
  return (
    <SiteLayout>
      <section className="section-dark-gradient min-h-screen py-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">Conocimiento</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="immersive-title font-bold mb-6" style={{ color: "#D4AF37", fontFamily: "var(--font-playfair), serif" }}>Recursos Legales</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="section-divider-gold mb-6" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="pro-paragraph-lg max-w-3xl mx-auto">Accede a nuestra biblioteca de artículos, guías y análisis jurídicos. En Medina Almonte Firma Legal creemos que un cliente informado toma mejores decisiones. Nuestro equipo publica regularmente contenido actualizado sobre las principales novedades legales, reformas legislativas y buenas prácticas en las distintas ramas del derecho peruano.</p>
            </ScrollReveal>
          </div>

          {/* Articles — no cards, vertical list with icon + text */}
          <div className="space-y-12">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <ScrollReveal key={article.slug} delay={0.1 * (index + 1)}>
                  <Link href={`/recursos-legales/${article.slug}`} className="block group">
                    <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 md:gap-8">
                      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${article.iconColor}12` }}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: article.iconColor }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className="inline-block text-xs font-semibold tracking-wider uppercase mb-2"
                          style={{ color: article.iconColor }}
                        >
                          {article.category}
                        </span>
                        <h2 className="immersive-title font-bold leading-snug group-hover:text-[#D4AF37] transition-colors duration-300 mb-2" style={{ color: "#fff", fontFamily: "var(--font-playfair), serif", WebkitLineClamp: 2 }}>
                          {article.title}
                        </h2>
                        <p className="immersive-desc text-gray-400 leading-relaxed mb-3">{article.excerpt}</p>
                        <div className="flex items-center justify-center md:justify-start gap-6">
                          <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                            <Calendar className="w-3.5 h-3.5" />{article.date}
                          </span>
                          <span className="flex items-center gap-1.5 text-[#D4AF37] text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
                            Leer más<ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                    {index < articles.length - 1 && <hr className="subtle-divider mt-12" />}
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {/* CTA */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center">
              <hr className="subtle-divider mb-10" />
              <p className="text-gray-500 text-sm mb-6">¿Necesitas asesoría legal personalizada sobre algún tema?</p>
              <a href="https://api.whatsapp.com/send?phone=51943366950&text=Hola%2C%20tengo%20una%20consulta%20sobre%20sus%20artículos%20legales." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-gold-primary gpu-accelerated text-[#0A0A0A] font-bold text-sm px-8 py-3.5 rounded-xl">Consultar por WhatsApp</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}