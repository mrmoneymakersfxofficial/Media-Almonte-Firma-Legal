"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import {
  AlertTriangle, Shield, Gavel, MessageCircle, Clock, ArrowRight,
  ChevronRight, CheckCircle2, FileWarning, FileText, Scale, Zap,
  TrendingUp, Users
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

const urgentCards = [
  {
    icon: FileWarning,
    title: "Cartas Inductivas",
    description: "SUNAT te envió una carta inductiva porque detectó inconsistencias en tu información tributaria. No responder a tiempo puede derivar en multas de hasta el 100% del tributo omitido.",
    cta: "Atender mi Carta Inductiva",
    serviceId: 5,
    urgency: "Tienes 10 días hábiles para responder. Actúa ahora.",
    price: "Desde S/ 200",
    details: [
      "Análisis completo de la carta recibida",
      "Identificación de las inconsistencias detectadas por SUNAT",
      "Preparación de la respuesta fundamentada con documentación",
      "Presentación de descargos ante SUNAT",
      "Seguimiento hasta la resolución del caso",
    ],
  },
  {
    icon: FileText,
    title: "Carta por Incremento Patrimonial No Justificado",
    description: "SUNAT detectó un incremento en tu patrimonio que no coincide con tus declaraciones tributarias. Es fundamental presentar descargos sólidos con documentación que sustente tus ingresos.",
    cta: "Atender mi Carta Patrimonial",
    serviceId: 11,
    urgency: "Tienes 10 días hábiles para responder. Actúa ahora.",
    price: "Consultar según el caso",
    details: [
      "Análisis completo de la carta recibida",
      "Identificación de las inconsistencias detectadas por SUNAT",
      "Preparación de la respuesta fundamentada con documentación",
      "Presentación de descargos ante SUNAT",
      "Seguimiento hasta la resolución del caso",
    ],
  },
  {
    icon: Shield,
    title: "Fiscalizaciones",
    description: "SUNAT seleccionó tu empresa para una auditoría tributaria. Una fiscalización mal manejada puede resultar en determinaciones de deuda significativas y cobranzas coactivas.",
    cta: "Defender mi Empresa",
    serviceId: 6,
    urgency: "No esperes a que termine el plazo de fiscalización.",
    price: "Consultar según caso",
    details: [
      "Revisión integral de la orden de fiscalización",
      "Organización y preparación de toda la documentación requerida",
      "Acompañamiento durante las actuaciones fiscales",
      "Elaboración de observaciones y descargos",
      "Estrategia de defensa tributaria personalizada",
    ],
  },
  {
    icon: Gavel,
    title: "Cobranza Coactiva",
    description: "Tienes deudas tributarias en etapa de cobranza coactiva. SUNAT puede embargar tus cuentas bancarias, bienes y afectar gravemente la operación de tu negocio.",
    cta: "Negociar mi Deuda",
    serviceId: 7,
    urgency: "Evita embargos y afectaciones a tu patrimonio.",
    price: "Consultar según deuda",
    details: [
      "Análisis de la deuda tributaria total",
      "Verificación de la validez de los valores reclamados",
      "Solicitud de fraccionamiento o aplazamiento",
      "Presentación de recursos de reclamación",
      "Negociación directa con SUNAT para obtener las mejores condiciones",
    ],
  },
];

const whyUs = [
  { icon: Zap, text: "Respuesta inmediata: nos comunicamos contigo en menos de 1 hora" },
  { icon: Shield, text: "Equipo especializado con experiencia en defensa tributaria real" },
  { icon: Scale, text: "Conocimiento profundo de la normativa tributaria peruana vigente" },
  { icon: CheckCircle2, text: "Seguimiento constante hasta la resolución final de tu caso" },
];

const inversionistaFeatures = [
  { icon: TrendingUp, title: "Evaluación de Inversiones", desc: "Análisis de viabilidad y rentabilidad de proyectos de inversión" },
  { icon: Scale, title: "Planificación Fiscal", desc: "Estructuración tributaria óptima para maximizar retornos" },
  { icon: Users, title: "Constitución de Empresas", desc: "Creación de vehículos societarios para inversores nacionales y extranjeros" },
  { icon: Gavel, title: "Debido Diligencia", desc: "Verificación integral de empresas antes de adquirir participaciones" },
  { icon: FileText, title: "Reestructuración Societaria", desc: "Reorganización de estructuras corporativas para eficiencia fiscal" },
  { icon: CheckCircle2, title: "Asesoría Inmobiliaria", desc: "Orientación en inversiones inmobiliarias y aspectos tributarios" },
  { icon: ArrowRight, title: "Transferencia de Acciones", desc: "Asesoramiento en compra-venta de participaciones empresariales" },
  { icon: Zap, title: "Reportes Financieros", desc: "Estados financieros especializados para toma de decisiones de inversión" },
];

export function DefensaPage() {
  useScrollSlug();
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();

  return (
    <SiteLayout>
      {/* ═══ SUBPAGE HERO — Asesoría Tributaria: Urgent Photograph + Dark Overlay ═══ */}
      <section id="hero" className="subpage-hero relative overflow-hidden">
        {/* Top urgency accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-urgent via-gold to-urgent z-30" />
        {/* Layer 0: Background photo - full bleed, face-focused */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/jhon-defensa.webp"
            alt="Especialista Jhon&Asociados"
            className="w-full h-full object-cover object-[center_20%] md:object-[60%_20%] brightness-[0.40]"
          />
        </div>
        {/* Layer 1: Dark high-conversion overlay (denser navy, no purple) */}
        <div className="absolute inset-0 z-1 subpage-hero-overlay-defensa" />
        {/* Layer 2: Decorative blurs */}
        <div className="absolute inset-0 z-2 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#DC2626]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#002350]/20 rounded-full blur-3xl" />
        </div>
        {/* Layer 20: Content */}
        <div className="subpage-hero-content relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col justify-between h-full">
            {/* Block 1: Breadcrumb */}
            <div>
              <Link href="/" className="subpage-hero-breadcrumb inline-flex items-center gap-1 text-white/60 hover:text-white text-sm transition-colors">
                Inicio <ChevronRight className="w-4 h-4" /> Asesoría Tributaria
              </Link>
            </div>
            {/* Block 2: Title + Description (centered vertically with air) */}
            <div className="my-auto pt-8 pb-4">
              <div className="inline-flex items-center gap-2 bg-urgent/20 border border-urgent/30 rounded-full px-4 py-2 mb-6">
                <span className="w-2.5 h-2.5 bg-urgent rounded-full urgent-pulse" />
                <span className="text-urgent font-semibold text-sm uppercase tracking-wider">Situación Urgente</span>
              </div>
              <h1 className="subpage-hero-title text-[28px] sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                ¿SUNAT te <span className="text-urgent">fiscalizó</span>?
              </h1>
              <p className="subpage-hero-desc mt-5 text-[15px] sm:text-lg text-white/75 max-w-2xl leading-relaxed font-light">
                No dejes pasar el plazo. Cada día cuenta para defender tu patrimonio. Nuestro equipo de
                especialistas tributarios actúa con la urgencia que tu caso requiere.
              </p>
            </div>
            {/* Block 3: CTA Buttons (bottom) */}
            <div className="subpage-hero-ctas flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openModal(5)}
                className="inline-flex items-center justify-center gap-2.5 bg-urgent hover:bg-urgent/90 text-white px-7 py-3.5 rounded-xl text-[15px] font-bold transition-all shadow-lg shadow-urgent/40 hover:shadow-xl active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                Consulta Urgente por WhatsApp
              </button>
              <a
                href="tel:+51943366950"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-3.5 rounded-xl text-[15px] font-semibold transition-all backdrop-blur-sm"
              >
                <AlertTriangle className="w-4 h-4" />
                Llamar Ahora
              </a>
            </div>
          </motion.div>
        </div>
        {/* Scroll down indicator */}
        <ScrollDownIndicator />
      </section>

      {/* Urgent Service Cards */}
      <SectionDivider from="#001528" to="#f9fafb" />
      <section id="elige-tu-situacion" className="py-20 lg:py-28 bg-gray-50/50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-red-50/30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
                Elige tu <span className="text-urgent">situación</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Cada caso es diferente. Selecciona tu situación y te ayudamos de inmediato.
              </p>
            </motion.div>
          </div>

          <div className="space-y-8">
            {urgentCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal
                  key={card.title}
                  delay={0.1 * i}
                  duration={0.6}
                  className="bg-white rounded-2xl border-2 border-urgent/20 shadow-sm hover:shadow-lg hover:border-urgent/40 transition-all overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="p-6 lg:p-8 lg:col-span-1">
                      <div className="w-14 h-14 bg-urgent/10 rounded-xl flex items-center justify-center mb-5">
                        <Icon className="w-7 h-7 text-urgent" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-2">{card.title}</h3>
                      <span className="inline-block bg-emerald/10 text-emerald font-bold text-sm px-3 py-1 rounded-full mb-3">{card.price}</span>
                      <div className="flex items-center gap-2 text-urgent bg-urgent/5 rounded-lg p-3">
                        <Clock className="w-4 h-4 shrink-0 urgent-pulse" />
                        <span className="text-sm font-medium">{card.urgency}</span>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8 lg:col-span-2 border-t lg:border-t-0 lg:border-l border-gray-100">
                      <p className="text-muted-foreground leading-relaxed mb-6">{card.description}</p>
                      <h4 className="text-sm font-bold text-navy mb-3 uppercase tracking-wider">¿Qué incluye?</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {card.details.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-foreground">{d}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => openModal(card.serviceId)}
                        className="inline-flex items-center gap-2 bg-urgent hover:bg-urgent/90 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                      >
                        {card.cta}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <SectionDivider from="#f9fafb" to="#ffffff" />
      <section id="por-que-confiar-en-nosotros" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Nuestra Ventaja</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              ¿Por qué <span className="text-purple">confiar en nosotros</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  key={i}
                  delay={0.1 * i}
                  duration={0.4}
                  y={20}
                  className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-emerald" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{item.text}</span>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Asesoría al Inversionista */}
      <SectionDivider from="#ffffff" to="#ffffff" />
      <section id="asesoria-inversionista" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Servicio Especializado</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Asesoría al Inversionista <span className="text-purple">Planificación estratégica</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Acompañamos a inversores nacionales y extranjeros en cada etapa: desde la evaluación
              de oportunidades hasta la estructuración fiscal óptima para maximizar sus retornos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inversionistaFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal
                  key={feature.title}
                  delay={0.05 * i}
                  className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-emerald/30 hover:shadow-sm transition-all"
                >
                  <div className="w-12 h-12 bg-emerald/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <ScrollReveal delay={0.3} duration={0.4} y={15}>
              <button
                onClick={() => openModal(9)}
                className="inline-flex items-center justify-center gap-2.5 bg-[#008775] hover:bg-[#006655] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-[#008775]/30 hover:shadow-xl active:scale-[0.98]"
              >
                Consultar Asesoría
                <ArrowRight className="w-5 h-5" />
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionDivider from="#ffffff" to="#991b1b" />
      <section id="contacto" className="py-20 bg-gradient-to-r from-urgent to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            El tiempo es tu peor enemigo frente a SUNAT
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Cuanto antes nos contactes, mejores serán las opciones de defensa para tu caso. Consulta sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openModal(5)} className="inline-flex items-center justify-center gap-2 bg-white text-navy px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl">
              <MessageCircle className="w-5 h-5" /> Atender mi Caso Ahora
            </button>
            <Link href="/contabilidad-tributacion" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all">
              Ver Servicios de Contabilidad
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
