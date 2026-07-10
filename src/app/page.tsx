"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Scale,
  ShieldCheck,
  FileText,
  Handshake,
  Users,
  Building2,
  Heart,
  ArrowRight,
  Star,
  Quote,
  Shield,
  Landmark,
  BookOpen,
  ScaleIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

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
   SECTION: LO QUE DICEN NUESTROS CLIENTES (TESTIMONIALS)
   ════════════════════════════════════════════════════════════════ */
const testimonials = [
  {
    text: "Gracias a Medina Almonte logré una resolución favorable en mi caso laboral. Su equipo me mantuvo informado en cada etapa del proceso y siempre sentí que estaban de mi lado.",
    name: "Carlos M.",
    role: "Caso Laboral",
  },
  {
    text: "La defensa penal que me brindaron fue excepcional. Desde el primer momento entendieron mi situación y actuaron con la rapidez y firmeza que se necesitaba.",
    name: "María L.",
    role: "Defensa Penal",
  },
  {
    text: "Necesitaba blindar mi empresa legalmente y ellos me ofrecieron una solución integral. Profesionales de alto nivel que realmente conocen el derecho corporativo.",
    name: "Roberto S.",
    role: "Derecho Corporativo",
  },
  {
    text: "Mi caso de familia era delicado y sensible. El equipo de Medina Almonte manejó todo con la discreción y empatía que necesitábamos. Estoy profundamente agradecida.",
    name: "Ana P.",
    role: "Derecho de Familia",
  },
];

function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api, setCurrent]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#B87333] font-semibold text-sm tracking-wider uppercase mb-4">
              Testimonios
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-white">Lo Que Dicen</span>{" "}
              <span className="text-[#D4AF37]">Nuestros Clientes</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              La confianza de nuestros clientes es nuestra mayor satisfacción.
              Cada testimonio refleja nuestro compromiso con la excelencia jurídica.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative max-w-4xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((t, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-4 md:basis-[80%] lg:basis-[70%]"
                  >
                    <div className="bg-[#0B1A2E] border border-[#D4AF37]/10 rounded-2xl p-8 sm:p-10 h-full">
                      <Quote className="w-10 h-10 text-[#D4AF37]/30 mb-6" />
                      <p
                        className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8"
                        style={{
                          fontFamily: "var(--font-merriweather), serif",
                        }}
                      >
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <p className="text-white font-bold text-base">
                            {t.name}
                          </p>
                          <p className="text-[#B87333] text-sm">{t.role}</p>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, si) => (
                            <Star
                              key={si}
                              className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Navigation Arrows */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 w-10 h-10 rounded-full bg-[#0B1A2E] border border-[#D4AF37]/20 flex items-center justify-center hover:border-[#D4AF37]/50 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-[#D4AF37]" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 w-10 h-10 rounded-full bg-[#0B1A2E] border border-[#D4AF37]/20 flex items-center justify-center hover:border-[#D4AF37]/50 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 text-[#D4AF37]" />
            </button>
          </div>
        </ScrollReveal>

        {/* Dots */}
        <ScrollReveal delay={0.25}>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i
                    ? "w-8 bg-[#D4AF37]"
                    : "w-2 bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50"
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION: MEMBRESÍAS Y CERTIFICACIONES
   ════════════════════════════════════════════════════════════════ */
const memberships = [
  {
    icon: ScaleIcon,
    name: "Colegio de Abogados de Lima",
    short: "CAL",
  },
  {
    icon: Landmark,
    name: "Ministerio de Justicia del Perú",
    short: "MINJUS",
  },
  {
    icon: Shield,
    name: "Tribunal Constitucional",
    short: "TC",
  },
  {
    icon: BookOpen,
    name: "Poder Judicial del Perú",
    short: "PJ",
  },
  {
    icon: Scale,
    name: "Asociación de Abogados de Lima",
    short: "AAL",
  },
];

function MembershipsBar() {
  return (
    <section className="py-16 lg:py-20 bg-[#0B1A2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-[#B87333] font-semibold text-sm tracking-wider uppercase mb-4">
              Confían en Nosotros
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-white">Membresías y</span>{" "}
              <span className="text-[#D4AF37]">Certificaciones</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-14 justify-center flex-wrap md:flex-nowrap overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
            {memberships.map((m, i) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.short}
                  className="flex flex-col items-center gap-3 min-w-[120px] shrink-0"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0A0A0A] border border-[#D4AF37]/15 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <div className="text-center">
                    <p className="text-white text-sm font-medium leading-tight">
                      {m.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
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

      {/* Testimonios */}
      <TestimonialsSection />

      {/* Membresías y Certificaciones */}
      <MembershipsBar />

      <SectionDivider from="#0B1A2E" to="#0A0A0A" />

      {/* ¿Por qué Elegirnos? */}
      <WhyChooseUs />
    </SiteLayout>
  );
}