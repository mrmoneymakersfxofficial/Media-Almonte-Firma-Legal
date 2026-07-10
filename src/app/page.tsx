"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import {
  Scale,
  ShieldCheck,
  FileText,
  Handshake,
  Users,
  Building2,
  Heart,
  ArrowRight,
} from "lucide-react";

/* ════════════════════════════════════════════════════════════════
   SECTION: ¿QUIÉNES SOMOS?
   ════════════════════════════════════════════════════════════════ */
function WhoWeAre() {
  const values = [
    {
      icon: Scale,
      title: "Ética y Transparencia",
      description: "Actuamos con honestidad en cada paso. Sin letras chicas ni sorpresas.",
    },
    {
      icon: ShieldCheck,
      title: "Defensa Agresiva",
      description: "Protegemos tus derechos sin titubeos, con la firmeza que tu caso requiere.",
    },
    {
      icon: Handshake,
      title: "Cercanía y Confianza",
      description: "Estamos contigo en cada etapa del proceso, comunicando cada avance.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <ScrollReveal>
            <div>
              <span className="inline-block text-[#B87333] font-semibold text-sm tracking-wider uppercase mb-4">
                Sobre Nosotros
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                <span className="text-[#D4AF37]">Más que Abogados,</span>
                <br />
                <span className="text-white">tu Principal Estratega Legal</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-base sm:text-lg">
                En Medina Almonte Firma Legal entendemos que cada caso es único. Por eso,
                diseñamos defensas a medida, con un enfoque humano y una estrategia jurídica
                impecable. Representamos tus intereses con la firmeza y la ética que tu
                situación requiere.
              </p>
              <Link
                href="/abogados"
                className="inline-flex items-center gap-2.5 bg-[#D4AF37] hover:bg-[#B87333] text-[#0A0A0A] px-7 py-4 rounded-xl text-[15px] font-bold transition-all shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl active:scale-[0.98]"
              >
                Conoce a Nuestro Equipo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Valores */}
          <div className="space-y-6">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={0.15 * i} duration={0.6}>
                  <div className="bg-[#0B1A2E] border border-[#D4AF37]/10 rounded-2xl p-6 sm:p-7 flex items-start gap-5 hover:border-[#D4AF37]/25 transition-colors">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3
                        className="text-white font-bold text-lg mb-1.5"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION: ÁREAS DE PRÁCTICA (GRID)
   ════════════════════════════════════════════════════════════════ */
const practiceAreas = [
  {
    icon: FileText,
    title: "Derecho Civil",
    description:
      "Defendemos tus derechos en conflictos contractuales, propiedad, herencias y responsabilidad civil.",
    cta: "Asesoría Civil",
    href: "/areas/civil",
  },
  {
    icon: ShieldCheck,
    title: "Derecho Penal",
    description:
      "Te representamos ante cualquier imputación o investigación penal. Defendemos tu libertad y tu buen nombre.",
    cta: "Defensa Penal",
    href: "/areas/penal",
  },
  {
    icon: Users,
    title: "Derecho Laboral",
    description:
      "Protegemos tus derechos como trabajador o empleador. Asesoría en despidos, acoso y negociaciones.",
    cta: "Asesoría Laboral",
    href: "/areas/laboral",
  },
  {
    icon: Building2,
    title: "Derecho Corporativo",
    description:
      "Blindamos tu empresa con contratos seguros, compliance y asesoría legal integral.",
    cta: "Protege tu Empresa",
    href: "/areas/corporativo",
  },
  {
    icon: Heart,
    title: "Derecho de Familia",
    description:
      "Te acompañamos en procesos de divorcio, custodia, pensiones y sucesiones.",
    cta: "Familia y Sucesiones",
    href: "/areas/familia",
  },
];

function PracticeAreas() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B1A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#B87333] font-semibold text-sm tracking-wider uppercase mb-4">
              Áreas de Práctica
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-white">Defendemos tus Derechos en</span>{" "}
              <span className="text-[#D4AF37]">Todas las Áreas</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <ScrollReveal key={area.title} delay={0.1 * i} duration={0.6}>
                <Link href={area.href} className="block group h-full">
                  <div className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-7 sm:p-8 h-full hover:border-[#D4AF37]/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#D4AF37]/5">
                    <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/20 transition-colors">
                      <Icon className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                    <h3
                      className="text-white font-bold text-lg sm:text-xl mb-3"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {area.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {area.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold text-sm group-hover:gap-3 transition-all">
                      {area.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION: ¿POR QUÉ ELEGIRNOS?
   ════════════════════════════════════════════════════════════════ */
function WhyChooseUs() {
  const reasons = [
    {
      icon: "🏛️",
      title: "Experiencia en Litigios",
      description:
        "Hemos representado a cientos de clientes en cortes y tribunales, obteniendo resoluciones favorables en el 92% de los casos.",
    },
    {
      icon: "📜",
      title: "Equipo Multidisciplinario",
      description:
        "Abogados especializados trabajando de forma coordinada para abordar cada caso desde todas las perspectivas jurídicas.",
    },
    {
      icon: "⏳",
      title: "Acompañamiento Constante",
      description:
        "Te explicamos cada paso y te damos certeza jurídica. No quedas solo en ningún momento del proceso.",
    },
    {
      icon: "💰",
      title: "Honorarios Transparentes",
      description:
        "Sin letras chicas ni costos ocultos. Sabes desde el primer momento cuánto invertirás en tu defensa.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#0B1A2E]/50 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#B87333]/5 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#B87333] font-semibold text-sm tracking-wider uppercase mb-4">
              Nuestra Diferencia
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-white">Una Firma Legal con</span>{" "}
              <span className="text-[#D4AF37]">Enfoque Estratégico</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={0.1 * i} duration={0.6}>
              <div className="bg-[#0B1A2E] border border-[#D4AF37]/10 rounded-2xl p-7 sm:p-8 h-full hover:border-[#D4AF37]/25 transition-colors">
                <span className="text-3xl mb-4 block">{reason.icon}</span>
                <h3
                  className="text-white font-bold text-lg sm:text-xl mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Final */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2.5 bg-[#D4AF37] hover:bg-[#B87333] text-[#0A0A0A] px-8 sm:px-10 py-4 rounded-xl text-[15px] sm:text-lg font-bold transition-all shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl active:scale-[0.98]"
            >
              Agenda una Cita
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   HOME PAGE
   ════════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <SectionDivider from="#0A0A0A" to="#0A0A0A" />

      {/* ¿Quiénes Somos? */}
      <WhoWeAre />

      <SectionDivider from="#0A0A0A" to="#0B1A2E" />

      {/* Áreas de Práctica (Grid) */}
      <PracticeAreas />

      <SectionDivider from="#0B1A2E" to="#0A0A0A" />

      {/* ¿Por qué Elegirnos? */}
      <WhyChooseUs />
    </SiteLayout>
  );
}