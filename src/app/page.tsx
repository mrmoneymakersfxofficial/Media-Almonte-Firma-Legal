"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { CorporateImage } from "@/components/CorporateImage";
import { Services } from "@/components/Services";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
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
    <section className="py-20 lg:py-28 founder-presentation-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Professional Photo — Standardized CorporateImage */}
          <ScrollReveal x={-30} duration={0.7}>
            <CorporateImage
              src="/jhon-constitucion.webp"
              alt="Michael Jhon B. — Especialista Tributario"
              height="lg"
              badge={
                <div className="bg-emerald text-white rounded-xl px-5 py-3 shadow-lg shadow-emerald/30 flex items-center gap-2.5">
                  <Award className="w-5 h-5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">Experiencia</p>
                    <p className="text-lg font-extrabold leading-tight">+20 Años</p>
                  </div>
                </div>
              }
            />
          </ScrollReveal>

          {/* Right: Info */}
          <ScrollReveal x={30} duration={0.7}>
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">
              Fundador & Director General
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy leading-tight mb-4">
              Michael Jhon B.
            </h2>
            <p className="text-emerald font-bold text-lg sm:text-xl mb-6">
              Especialistas Tributarios
            </p>

            {/* Quote — with gradient highlight on key phrase */}
            <div className="relative mb-8 pl-5 border-l-4 border-emerald/40">
              <Quote className="w-8 h-8 text-emerald/20 absolute -top-1 -left-1" />
              <p className="text-navy/80 text-lg sm:text-xl italic leading-relaxed font-medium">
                &ldquo;Trabajamos al lado de nuestros clientes para ser{" "}
                <span className="font-extrabold not-italic founder-gradient-text">
                  socios estratégicos
                </span>{" "}
                en el crecimiento de sus negocios.&rdquo;
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
    <section className="relative bg-gray-50/50">
      {/* ─── Mobile: Immersive full-bleed image ─── */}
      <div className="relative lg:hidden overflow-hidden">
        <motion.div
          initial={{ scale: 1.12, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[3/2] overflow-hidden"
        >
          <motion.img
            src="/capacitacion-conferencia.webp"
            alt="Capacitación Tributaria Gratuita — Jhon&Asociados"
            loading="lazy"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Gradient overlay for text readability */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-navy/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          {/* Top white fade — seamless blend with section above */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#f9fafb]/80 to-transparent pointer-events-none" />
          {/* Bottom white fade — seamless blend with section below */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
          {/* Floating badge — top left */}
          <motion.div
            className="absolute top-5 left-5"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-1.5 bg-emerald/90 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-lg shadow-emerald/30">
              🎓 CAPACITACIÓN GRATUITA
            </span>
          </motion.div>
          {/* Content at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3 drop-shadow-lg">
              Accede Sin Costo a Nuestra Conferencia en Vivo
            </h2>
            <p className="text-emerald font-semibold text-sm sm:text-base mb-2 drop-shadow">
              Cómo Pagar Menos Impuesto y Ganar Más Dinero, Cumpliendo la Ley
            </p>
            <p className="text-white/75 text-sm leading-relaxed mb-6 drop-shadow">
              Miles de emprendedores ya están aplicando estos conocimientos y transformando su negocio.
            </p>
            <motion.button
              onClick={() => openModal(10)}
              className="inline-flex items-center justify-center gap-2.5 bg-emerald hover:bg-emerald/90 text-white px-7 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-emerald/30 active:scale-[0.98]"
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <MessageCircle className="w-5 h-5" />
              ¡INSCRÍBETE GRATIS AHORA!
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Desktop: Card layout with image on right ─── */}
      <div className="hidden lg:block py-20 lg:py-28">
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

                {/* Right: Conference image with parallax animation */}
                <motion.div
                  className="relative min-h-[420px] overflow-hidden"
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.img
                    src="/capacitacion-conferencia.webp"
                    alt="Capacitación Tributaria Gratuita — Jhon&Asociados"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Subtle overlay at edge */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                  {/* Live badge floating */}
                  <motion.div
                    className="absolute top-6 right-6 flex items-center gap-2 bg-navy/80 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-sm font-bold tracking-wide">EN VIVO</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
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
    "Mentor de Negocios MYPE",
  ];

  return (
    <section className="bg-navy relative overflow-hidden">
      {/* ─── Mobile: Immersive image only — no text, maximum visual impact ─── */}
      <div className="relative lg:hidden">
        <motion.div
          className="relative w-full aspect-square overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/jhon-conferencista.webp"
            alt="Michael Jhon B. — Conferencista Especializado en Estrategias Tributarias"
            loading="lazy"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </div>

      {/* ─── Desktop: Side-by-side with image + content ─── */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-0 min-h-[600px] items-stretch">
        {/* Left: Full-height image with zoom animation */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="/jhon-conferencista.webp"
            alt="Michael Jhon B. — Conferencista Especializado en Estrategias Tributarias"
            loading="lazy"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Subtle edge gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/30" />
          {/* Decorative accent bar at bottom */}
          <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald via-teal to-emerald/50 rounded-full opacity-40" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="py-20 lg:py-28 px-12 xl:px-16"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-5">
            CONFERENCISTA ESPECIALIZADO
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
            <span className="text-emerald">Jhon&Asociados:</span>{" "}
            <span className="text-purple">Más de 20 años</span> protegiendo
            patrimonios en el Perú
          </h2>
          <p className="text-white/70 leading-relaxed mb-10 text-lg">
            Con una trayectoria consolidada en asesoría tributaria, contabilidad
            integral y defensa ante SUNAT, nuestro equipo liderado por Jhon ha
            ayudado a miles de emprendedores y empresas a cumplir con la ley
            tributaria de forma inteligente, optimizando sus cargas fiscales y
            protegiendo su patrimonio.
          </p>
          <ul className="space-y-5">
            {achievements.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
              >
                <CheckCircle2 className="w-6 h-6 text-emerald flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium text-lg">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
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
    <section className="py-20 lg:py-28 bg-gray-50/50">
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
    <section className="py-20 lg:py-28 bg-white">
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
    value: "21,000+",
    label: "Empresas Constituidas",
    subtext: "Con RUC 20 activo y sin complicaciones",
  },
  {
    value: "23,000+",
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
    <section className="py-20 lg:py-28 bg-navy">
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
    <section className="py-20 lg:py-28 relative overflow-hidden">
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
  return (
    <SiteLayout>
      <Hero />
      <SectionDivider from="#001528" to="#ffffff" />

      {/* Section 0: Founder Presentation */}
      <FounderPresentation />

      <SectionDivider from="#ffffff" to="#f9fafb" />

      {/* Section 1: Conference Capture Card */}
      <ConferenceCaptureCard />

      <SectionDivider from="#f9fafb" to="#002350" />

      {/* Section 2: Speaker Authority */}
      <SpeakerAuthority />

      <SectionDivider from="#002350" to="#f9fafb" />

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
