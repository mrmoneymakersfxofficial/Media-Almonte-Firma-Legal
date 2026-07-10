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
  TrendingUp,
  UserCheck,
  Clock,
  DollarSign,
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
      description:
        "Actuamos con honestidad en cada paso. Sin letras chicas ni sorpresas. Cada decisión la tomamos contigo, con total claridad sobre costos, plazos y probabilidades de éxito en tu caso.",
    },
    {
      icon: ShieldCheck,
      title: "Defensa Agresiva",
      description:
        "Protegemos tus derechos sin titubeos, con la firmeza que tu caso requiere. Nuestro equipo litiga con estrategia probada, preparación exhaustiva y una red de contactos institucionales que fortalece tu posición.",
    },
    {
      icon: Handshake,
      title: "Cercanía y Confianza",
      description:
        "Estamos contigo en cada etapa del proceso, comunicando cada avance. No quedas solo en ningún momento — recibes actualizaciones periódicas y acceso directo a tu abogado asignado.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 section-dark-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <ScrollReveal>
            <div>
              <span className="inline-block text-[#B87333] font-semibold text-sm tracking-wider uppercase mb-4">
                Sobre Nosotros
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.15] mb-6"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                <span
                  style={{
                    background: "linear-gradient(135deg, #f4e5c2, #d4af37)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Más que Abogados,
                </span>
                <br />
                <span className="text-white">tu Principal Estratega Legal</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-base sm:text-lg">
                En Medina Almonte Firma Legal entendemos que cada caso es
                único. Por eso, diseñamos defensas a medida, con un enfoque
                humano y una estrategia jurídica impecable. Representamos tus
                intereses con la firmeza y la ética que tu situación requiere.
              </p>
              <Link
                href="/abogados"
                className="btn-gold-primary inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-[15px] font-bold gpu-accelerated"
              >
                Conoce a Nuestro Equipo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Valores */}
          <div className="space-y-5">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={0.12 * i} duration={0.6}>
                  <div className="card-premium gold-border-gradient rounded-2xl p-6 sm:p-7 flex items-start gap-5 group">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center icon-glow transition-all duration-300 group-hover:bg-[#D4AF37]/15 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3
                        className="text-white font-bold text-lg mb-1.5"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed">
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
   SECTION: ÁREAS DE PRÁCTICA (GRID) — Premium Cards
   ════════════════════════════════════════════════════════════════ */
const practiceAreas = [
  {
    icon: FileText,
    title: "Derecho Civil",
    description:
      "Defendemos tus derechos en conflictos contractuales, propiedad, herencias y responsabilidad civil con estrategia probada.",
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
      "Protegemos tus derechos como trabajador o empleador. Asesoría en despidos, acoso y negociaciones colectivas.",
    cta: "Asesoría Laboral",
    href: "/areas/laboral",
  },
  {
    icon: Building2,
    title: "Derecho Corporativo",
    description:
      "Blindamos tu empresa con contratos seguros, compliance normativo y asesoría legal integral para tu crecimiento.",
    cta: "Protege tu Empresa",
    href: "/areas/corporativo",
  },
  {
    icon: Heart,
    title: "Derecho de Familia",
    description:
      "Te acompañamos en procesos de divorcio, custodia, pensiones alimenticias y sucesiones con total discreción.",
    cta: "Familia y Sucesiones",
    href: "/areas/familia",
  },
];

function PracticeAreas() {
  return (
    <section className="py-20 lg:py-28 section-navy-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#B87333] font-semibold text-sm tracking-wider uppercase mb-4">
              Áreas de Práctica
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.15] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-white">Defendemos tus Derechos en</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f4e5c2, #d4af37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Todas las Áreas
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {practiceAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <ScrollReveal key={area.title} delay={0.08 * i} duration={0.6}>
                <Link href={area.href} className="block group h-full">
                  <div className="card-premium gold-border-gradient rounded-2xl p-7 sm:p-8 h-full">
                    <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 icon-glow transition-all duration-300 group-hover:bg-[#D4AF37]/15 group-hover:scale-110">
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
                    <span className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
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
   SECTION: TESTIMONIOS — Carousel
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
    <section className="py-20 lg:py-28 section-dark-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#B87333] font-semibold text-sm tracking-wider uppercase mb-4">
              Testimonios
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.15] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-white">Lo Que Dicen</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f4e5c2, #d4af37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Nuestros Clientes
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              La confianza de nuestros clientes es nuestra mayor satisfacción.
              Cada testimonio refleja nuestro compromiso con la excelencia
              jurídica.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative max-w-4xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{ align: "center", loop: true }}
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((t, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-4 md:basis-[80%] lg:basis-[70%]"
                  >
                    <div className="glass-card gold-border-gradient rounded-2xl p-8 sm:p-10 h-full">
                      <Quote className="w-10 h-10 text-[#D4AF37]/25 mb-6" />
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

            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-5 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-[#D4AF37]/50 transition-colors gpu-accelerated"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-[#D4AF37]" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-5 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-[#D4AF37]/50 transition-colors gpu-accelerated"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5 text-[#D4AF37]" />
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 gpu-accelerated ${
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
  { icon: ScaleIcon, name: "Colegio de Abogados de Lima", short: "CAL" },
  { icon: Landmark, name: "Ministerio de Justicia", short: "MINJUS" },
  { icon: Shield, name: "Tribunal Constitucional", short: "TC" },
  { icon: BookOpen, name: "Poder Judicial del Perú", short: "PJ" },
  { icon: Scale, name: "Asociación de Abogados de Lima", short: "AAL" },
];

function MembershipsBar() {
  return (
    <section className="py-16 lg:py-20 section-navy-gradient">
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
              <span
                style={{
                  background: "linear-gradient(135deg, #f4e5c2, #d4af37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Certificaciones
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-14 justify-center flex-wrap md:flex-nowrap overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
            {memberships.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.short}
                  className="flex flex-col items-center gap-3 min-w-[120px] shrink-0 group"
                >
                  <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center transition-all duration-300 group-hover:scale-105 gpu-accelerated">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <p className="text-white/70 text-sm font-medium leading-tight text-center group-hover:text-white transition-colors">
                    {m.name}
                  </p>
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
   SECTION: ¿POR QUÉ ELEGIRNOS? — Lucide Icons
   ════════════════════════════════════════════════════════════════ */
function WhyChooseUs() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Experiencia en Litigios",
      description:
        "Hemos representado a cientos de clientes en cortes y tribunales, obteniendo resoluciones favorables en el 92% de los casos. Nuestra experiencia se traduce en estrategia y resultados.",
    },
    {
      icon: UserCheck,
      title: "Equipo Multidisciplinario",
      description:
        "Abogados especializados trabajando de forma coordinada para abordar cada caso desde todas las perspectivas jurídicas. Colaboración que marca la diferencia.",
    },
    {
      icon: Clock,
      title: "Acompañamiento Constante",
      description:
        "Te explicamos cada paso y te damos certeza jurídica. No quedas solo en ningún momento del proceso — comunicación transparente y constante.",
    },
    {
      icon: DollarSign,
      title: "Honorarios Transparentes",
      description:
        "Sin letras chicas ni costos ocultos. Sabes desde el primer momento cuánto invertirás en tu defensa. Opciones de pago flexibles disponibles.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative ambient blurs */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] gpu-accelerated"
        style={{
          background: "radial-gradient(circle, rgba(11,26,46,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] gpu-accelerated"
        style={{
          background: "radial-gradient(circle, rgba(184,115,51,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#B87333] font-semibold text-sm tracking-wider uppercase mb-4">
              Nuestra Diferencia
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.15]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-white">Una Firma Legal con</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f4e5c2, #d4af37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Enfoque Estratégico
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={reason.title} delay={0.08 * i} duration={0.6}>
                <div className="card-premium gold-border-gradient rounded-2xl p-7 sm:p-8 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 icon-glow transition-all duration-300 group-hover:bg-[#D4AF37]/15 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3
                    className="text-white font-bold text-lg sm:text-xl mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Final — Premium Gradient Button */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <Link
              href="/contacto"
              className="btn-gold-primary inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-xl text-[15px] sm:text-lg font-bold gpu-accelerated"
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