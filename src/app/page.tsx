"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ConferencistaGallery } from "@/components/ConferencistaGallery";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { motion } from "framer-motion";
import {
  MessageCircle,
  CheckCircle2,
  Shield,
  Building2,
  Handshake,
  Star,
  Users,
  Calendar,
  ArrowRight,
  Quote,
  Award,
} from "lucide-react";

/* ════════════════════════════════════════════════════════════════
   SECTION 0: PRESENTATION — Michael Jhon B. Profile
   ════════════════════════════════════════════════════════════════ */
function FounderPresentation() {
  const { openModal } = useWhatsAppStore();

  return (
    <section id="fundador" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: header text → image → body text | Desktop: image left, text right */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 lg:items-center">

          {/* 1. Text header (Label + Name + Cargo) — order-1 mobile, order-2 desktop */}
          <ScrollReveal x={30} duration={0.7} className="order-1 lg:order-2">
            <span className="inline-block text-emerald font-bold text-sm sm:text-[15px] tracking-[0.15em] uppercase mb-5">
              FUNDADOR & CEO EN JHON&Asociados
            </span>
            <h2
              className="text-navy leading-[1.05] mb-4"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                color: '#002B6B',
              }}
            >
              MICHAEL JHON B.
            </h2>
            <p className="text-emerald font-bold text-base sm:text-lg tracking-[0.08em] uppercase mb-6">
              ESPECIALISTA TRIBUTARIO
            </p>
          </ScrollReveal>

          {/* 2. Founder Photo — order-2 mobile (below cargo), order-1 desktop (left col, spans 2 rows) */}
          <ScrollReveal x={-30} duration={0.7} className="order-2 lg:order-1 lg:row-span-2">
            <div className="relative">
              <div className="w-full h-[380px] sm:h-[480px] lg:h-[580px] rounded-[20px] overflow-hidden shadow-2xl shadow-navy/20">
                <img
                  src="/jhon-fundador.webp"
                  alt="Michael Jhon B. - Especialista Tributario"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-emerald text-white rounded-xl px-5 py-3 shadow-lg shadow-emerald/30 flex items-center gap-2.5">
                <Award className="w-5 h-5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider">Experiencia</p>
                  <p className="text-lg font-extrabold leading-tight">+20 Años</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. Body text (Quote + description + CTAs) — order-3 mobile (after image), right col row 2 desktop */}
          <ScrollReveal x={30} duration={0.7} className="order-3 lg:order-3 lg:col-start-2">
            {/* Quote */}
            <div className="relative mb-8 pl-5 border-l-4 border-emerald/40">
              <Quote className="w-8 h-8 text-emerald/20 absolute -top-1 -left-1" />
              <p className="text-navy/80 text-lg sm:text-xl italic leading-relaxed font-medium">
                &ldquo;Trabajamos contigo en cada paso, como tu principal socio estratégico.&rdquo;
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Especialistas en asesoría tributaria, contabilidad integral y defensa ante
              SUNAT. Acompañamos a empresas y emprendedores con soluciones legales que
              protegen su patrimonio y optimizan su carga tributaria, cumpliendo siempre
              con la normativa vigente.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-2.5 bg-emerald hover:bg-emerald/90 text-white px-7 py-4 rounded-xl text-[15px] font-bold transition-all shadow-lg shadow-emerald/25 hover:shadow-xl active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                Consultoría Gratuita
              </button>
              <Link
                href="/nosotros-contacto"
                className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-7 py-4 rounded-xl text-[15px] font-semibold transition-all"
              >
                Conoce Nuestro Equipo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 1: CONFERENCE CAPTURE CARD
   ════════════════════════════════════════════════════════════════ */
function ConferenceCaptureCard() {
  const { openModal } = useWhatsAppStore();

  return (
    <section id="capacitacion-gratuita" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal duration={0.7}>
          <div className="bg-white rounded-3xl shadow-lg shadow-navy/[0.04] border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
              {/* Left: Text content */}
              <div className="p-8 sm:p-10 lg:p-14">
                <span className="inline-block bg-emerald/10 text-emerald text-xs sm:text-sm font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
                  🎓 CAPACITACIÓN GRATUITA
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-navy leading-tight mb-4">
                  Accede Sin Costo a Nuestra Conferencia en Vivo
                </h2>
                <p className="text-emerald font-semibold text-base sm:text-lg mb-4">
                  Cómo Pagar Menos Impuesto y Ganar Más Dinero, Cumpliendo la Ley
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Miles de emprendedores ya están aplicando estos conocimientos y
                  transformando su negocio con estrategias simples pero poderosas.
                </p>
                <button
                  onClick={() => openModal(10)}
                  className="inline-flex items-center justify-center gap-2.5 bg-emerald hover:bg-emerald/90 text-white px-7 sm:px-9 py-4 sm:py-[18px] rounded-xl text-[15px] sm:text-lg font-bold transition-all shadow-lg shadow-emerald/25 hover:shadow-xl hover:shadow-emerald/30 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  ¡INSCRÍBETE GRATIS AHORA!
                </button>
              </div>

              {/* Right: Decorative visual */}
              <div className="relative hidden lg:flex items-center justify-center min-h-[340px] bg-gradient-to-br from-navy via-[#0a1e4a] to-purple p-12">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple/20 rounded-full blur-3xl" />
                <div className="relative text-center">
                  <div className="w-28 h-28 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center">
                    <Calendar className="w-14 h-14 text-emerald" />
                  </div>
                  <p className="text-white font-bold text-xl mb-1">EN VIVO</p>
                  <p className="text-white/60 text-sm">Capacitación Tributaria</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 2: CONFERENCE SPEAKER AUTHORITY
   ════════════════════════════════════════════════════════════════ */
function SpeakerAuthority() {
  const achievements = [
    "Especialista en Optimización Fiscal Legal",
    "Asesor de exitosos Contribuyentes",
    "Mentor y Coach de Negocios MYPE",
  ];

  return (
    <section id="conferencista" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: label -> title -> image -> trajectory | Desktop: image left, text right */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          {/* 1. Text header - order-1 mobile (first), order-2 desktop (right col) */}
          <ScrollReveal x={30} duration={0.7} className="order-1 lg:order-2">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">
              CONFERENCISTA ESPECIALIZADO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight mb-5">
              <span className="whitespace-nowrap">Jhon&Asociados:</span>{" "}
              <span className="text-purple">Más de 20 años</span> protegiendo
              patrimonios en el Perú
            </h2>
          </ScrollReveal>

          {/* 2. Gallery Carousel - order-2 mobile, order-1 desktop (left col, spans 2 rows) */}
          <ScrollReveal x={-30} duration={0.7} className="order-2 lg:order-1 lg:row-span-2">
            <ConferencistaGallery />
          </ScrollReveal>

          {/* 3. Text body (trajectory + achievements) - order-3 mobile (after image), right col row 2 desktop */}
          <ScrollReveal x={30} duration={0.7} className="order-3 lg:order-3 lg:col-start-2">
            <p className="text-muted-foreground leading-relaxed mb-8">
              Con una trayectoria consolidada en asesoría tributaria, contabilidad
              integral y defensa ante SUNAT, nuestro equipo liderado por Jhon ha
              ayudado a miles de emprendedores y empresas a cumplir con la ley
              tributaria de forma inteligente, optimizando sus cargas fiscales y
              protegiendo su patrimonio.
            </p>
            <ul className="space-y-4">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald flex-shrink-0 mt-0.5" />
                  <span className="text-navy font-medium text-base sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 3: COMPANY FORMATION + RUC 20 BENEFITS
   ════════════════════════════════════════════════════════════════ */
function CompanyFormation() {
  const { openModal } = useWhatsAppStore();

  const benefits = [
    {
      icon: Shield,
      title: "Patrimonio Seguro",
      description:
        "Tus recursos y patrimonio estarán seguros frente a cualquier imprevisto.",
    },
    {
      icon: Building2,
      title: "Licitaciones del Estado",
      description:
        "Podrás trabajar con el Estado y aprovechar sus programas empresariales.",
    },
    {
      icon: Handshake,
      title: "Créditos y Alianzas",
      description:
        "Amplía tus oportunidades comerciales al trabajar con empresas de mayor nivel y facilita el acceso a futuros créditos empresariales.",
    },
  ];

  return (
    <section id="constitucion-empresas" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight mb-4">
              Constituye tu empresa{" "}
              <span className="text-emerald">Precios a Consultar</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Formaliza tu negocio de manera rápida y segura. Incluye minuta,
              partida registral, RUC, Clave SOL y asesoría personalizada para que
              operes legalmente desde el primer día.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="text-center mb-14">
            <Link
              href="/constitucion-de-empresas"
              className="inline-flex items-center gap-2 bg-emerald hover:bg-emerald/90 text-white px-8 sm:px-10 py-4 rounded-xl text-base sm:text-lg font-bold transition-all shadow-lg shadow-emerald/25 hover:shadow-xl active:scale-[0.98]"
            >
              ¡Constituir Ya!
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.title} delay={0.1 * i} duration={0.6}>
                <div className="benefit-item-immersive flex flex-row items-start gap-4 sm:gap-[18px] mb-9 last:mb-0">
                  <div className="benefit-icon-pin w-[46px] h-[46px] shrink-0 rounded-[10px] bg-emerald/[0.08] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <div className="benefit-text-block pt-0.5">
                    <h3 className="benefit-item-title text-[18px] font-bold text-navy mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="benefit-item-desc text-[14px] text-[#475569] leading-[1.5] m-0">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 4: TESTIMONIALS
   ════════════════════════════════════════════════════════════════ */
const testimonials = [
  {
    name: "Fernando",
    text: "Gracias a la asesoría tributaria de Jhon&Asociados, logré reducir mi carga impositiva legalmente. Su equipo me explicó cada paso con claridad y profesionalismo. Totalmente recomendados.",
    stars: 5,
  },
  {
    name: "María Fernanda",
    text: "Constituí mi empresa con ellos y el proceso fue rápido y sin complicaciones. Desde la minuta hasta el RUC, todo quedó perfecto. Ahora opero con total tranquilidad y respaldo legal.",
    stars: 5,
  },
  {
    name: "Juan",
    text: "La asesoría estratégica que recibí fue clave para el crecimiento de mi negocio. Me ayudaron a tomar decisiones financieras correctas y a cumplir con todas mis obligaciones tributarias.",
    stars: 5,
  },
  {
    name: "Lilia",
    text: "Llevo más de 2 años con su servicio de contabilidad integral y cada mes me siento tranquila sabiendo que mis declaraciones están correctas. Excelente equipo y atención personalizada.",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">
              Testimonios
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
              Nuestros Clientes{" "}
              <span className="text-purple">Hablan Por Nosotros</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={0.1 * i} duration={0.6}>
              <div className="bg-gray-50/80 rounded-2xl p-7 sm:p-8 h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-navy/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                    <span className="text-navy font-bold text-sm">
                      {t.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                  <span className="text-navy font-semibold text-sm">
                    {t.name}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 5: AUTHORITY METRICS
   ════════════════════════════════════════════════════════════════ */
const metrics = [
  {
    value: "20+",
    label: "Años de Experiencia",
    subtext: "Potenciando negocios en el Perú",
  },
  {
    value: "5,000+",
    label: "Empresas Constituidas",
    subtext: "Con RUC 20 activo y sin complicaciones",
  },
  {
    value: "15,000+",
    label: "Emprendedores Capacitados",
    subtext: "En talleres, seminarios y tips tributarios",
  },
  {
    value: "Equipo Experto",
    label: "Colaboradores",
    subtext: "Contadores profesionales listos para protegerte",
  },
];

function AuthorityMetrics() {
  return (
    <section id="metricas" className="py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Números que{" "}
              <span className="text-emerald">Hablan por Nosotros</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={0.1 * i} duration={0.6}>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald mb-2">
                  {m.value}
                </p>
                <p className="text-white font-semibold text-base sm:text-lg mb-1">
                  {m.label}
                </p>
                <p className="text-white/50 text-sm">{m.subtext}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION 6: HIGH CONVERSION CTA
   ════════════════════════════════════════════════════════════════ */
function HighConversionCTA() {
  const { openModal } = useWhatsAppStore();

  return (
    <section id="contacto" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #002350 0%, #481180 100%)",
        }}
      />
      {/* Decorative blurs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white leading-tight mb-8 max-w-3xl mx-auto">
            ¡No busques más! Nosotros nos encargamos de tus declaraciones y te
            ayudamos a evitar problemas con SUNAT.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/constitucion-de-empresas"
              className="inline-flex items-center justify-center gap-2 bg-emerald hover:bg-emerald/90 text-white px-7 sm:px-9 py-4 rounded-xl text-[15px] sm:text-lg font-bold transition-all shadow-lg shadow-emerald/25 hover:shadow-xl active:scale-[0.98] w-full sm:w-auto"
            >
              <Building2 className="w-5 h-5" />
              QUIERO CONSTITUIR MI EMPRESA AHORA
            </Link>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/40 text-white px-7 sm:px-9 py-4 rounded-xl text-[15px] sm:text-lg font-bold transition-all backdrop-blur-sm w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              CONSULTORÍA GRATUITA
            </button>
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
  useScrollSlug();
  return (
    <SiteLayout>
      <Hero />
      <SectionDivider from="#001528" to="#ffffff" />

      {/* Section 0: Founder Presentation */}
      <FounderPresentation />

      <SectionDivider from="#ffffff" to="#f9fafb" />

      {/* Section 1: Conference Capture Card */}
      <ConferenceCaptureCard />

      <SectionDivider from="#f9fafb" to="#ffffff" />

      {/* Section 2: Speaker Authority */}
      <SpeakerAuthority />

      <SectionDivider from="#ffffff" to="#f9fafb" />

      {/* Section 3: Company Formation + RUC 20 Benefits */}
      <CompanyFormation />

      <SectionDivider from="#f9fafb" to="#f9fafb" />

      {/* Services (existing, SEO value) */}
      <Services />

      <SectionDivider from="#f9fafb" to="#ffffff" />

      {/* Section 4: Testimonials */}
      <Testimonials />

      {/* Section 5: Authority Metrics (navy bg) */}
      <AuthorityMetrics />

      {/* Section 6: High Conversion CTA */}
      <HighConversionCTA />
    </SiteLayout>
  );
}
