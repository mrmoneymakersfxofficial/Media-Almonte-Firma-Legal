"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import {
  MessageCircle, Clock, ArrowRight,
  ChevronRight, CheckCircle2, Shield, Scale, Zap,
  BookOpen, TrendingUp
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

const consultTopics = [
  {
    icon: BookOpen,
    title: "Asesoría Fiscal",
    description: "Optimiza tu carga tributaria legalmente. Analizamos tu situación actual y te recomendamos la mejor estrategia fiscal para reducir costos cumpliendo la ley.",
    cta: "Agendar Asesoría",
    details: ["Análisis integral de tu situación tributaria", "Identificación de oportunidades de ahorro fiscal", "Planificación tributaria personalizada", "Recomendaciones de optimización legal", "Seguimiento trimestral de tu plan fiscal"],
  },
  {
    icon: TrendingUp,
    title: "Planificación Estratégica",
    description: "Diseñamos estrategias a mediano y largo plazo para que tu negocio crezca con eficiencia tributaria. Toma decisiones financieras informadas.",
    cta: "Agendar Planificación",
    details: ["Diagnóstico financiero completo", "Proyección de cargas tributarias", "Estrategia de reinversión de utilidades", "Plan de crecimiento fiscal eficiente", "Reportes periódicos de seguimiento"],
  },
  {
    icon: Shield,
    title: "Cumplimiento Normativo",
    description: "Mantén tu empresa al día con todas las obligaciones tributarias y laborales. Evita multas y sanciones con nuestro acompañamiento constante.",
    cta: "Agendar Consultoría",
    details: ["Revisión de cumplimiento tributario", "Calendario de obligaciones personalizado", "Presentación de declaraciones a tiempo", "Asesoría en cambios normativos", "Alertas de vencimientos importantes"],
  },
];

const whyUs = [
  { icon: Zap, text: "Respuesta inmediata: nos comunicamos contigo en menos de 1 hora" },
  { icon: Shield, text: "Equipo especializado con experiencia en asesoría tributaria real" },
  { icon: Scale, text: "Conocimiento profundo de la normativa tributaria peruana vigente" },
  { icon: CheckCircle2, text: "Seguimiento constante hasta la resolución final de tu caso" },
];

export function DefensaPage() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();

  function handleBooking() {
    const name = (document.getElementById("booking-name") as HTMLInputElement)?.value?.trim();
    const date = (document.getElementById("booking-date") as HTMLInputElement)?.value;
    const time = (document.getElementById("booking-time") as HTMLSelectElement)?.value;
    const service = (document.getElementById("booking-service") as HTMLSelectElement)?.value;
    if (!name || !date || !time) {
      alert("Por favor completa tu nombre, fecha y hora preferida.");
      return;
    }
    const message = `Hola *Jhon&Asociados*.

Me gustaría agendar una asesoría:

Nombre: ${name}
Servicio: ${service}
Fecha: ${date}
Hora: ${time}

Quedo atento a la confirmación. ¡Gracias!`;
    const url = `https://api.whatsapp.com/send?phone=51943366950&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <SiteLayout>
      {/* ═══ SUBPAGE HERO — Asesoría Tributaria: Professional Photograph + Brand Overlay ═══ */}
      <section className="subpage-hero relative overflow-hidden">
        {/* Layer 0: Background photo */}
        <div className="absolute inset-0 z-0">
          <div
            className="subpage-hero-photo"
            style={{ backgroundImage: "url('/jhon-defensa.webp')" }}
          />
        </div>
        {/* Layer 1: Brand overlay */}
        <div className="absolute inset-0 z-1 subpage-hero-overlay" />
        {/* Layer 2: Decorative blurs */}
        <div className="absolute inset-0 z-2 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#008775]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#481180]/15 rounded-full blur-3xl" />
        </div>
        {/* Layer 20: Content */}
        <div className="subpage-hero-content relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="subpage-hero-breadcrumb inline-flex items-center gap-1 text-white/60 hover:text-white text-sm transition-colors mb-5">
              Inicio <ChevronRight className="w-4 h-4" /> Asesoría Tributaria
            </Link>
            <h1 className="subpage-hero-title text-[28px] sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Asesoría Tributaria <span className="text-[#00a996]">Especializada</span>
            </h1>
            <p className="subpage-hero-desc mt-5 text-[15px] sm:text-lg text-white/75 max-w-2xl leading-relaxed font-light">
              Optimiza tus cargas fiscales, planifica estratégicamente y cumple la ley con respaldo profesional. Agenda tu asesoría personalizada ahora.
            </p>
            <div className="subpage-hero-ctas mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openModal(5)}
                className="inline-flex items-center justify-center gap-2.5 bg-[#008775] hover:bg-[#006655] text-white px-7 py-3.5 rounded-xl text-[15px] font-bold transition-all shadow-lg shadow-[#008775]/30 hover:shadow-xl active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                Consultoría Gratuita
              </button>
              <Link
                href="/nosotros-contacto"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-3.5 rounded-xl text-[15px] font-semibold transition-all backdrop-blur-sm"
              >
                Contáctanos
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Scroll down indicator */}
        <ScrollDownIndicator />
      </section>

      {/* Consultation Topics */}
      <SectionDivider from="#001528" to="#f9fafb" />
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
                Nuestros <span className="text-emerald">servicios de asesoría</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Cada negocio tiene necesidades diferentes. Elige el servicio que mejor se adapte a tu situación.
              </p>
            </motion.div>
          </div>

          <div className="space-y-8">
            {consultTopics.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal
                  key={card.title}
                  delay={0.1 * i}
                  duration={0.6}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-emerald/30 transition-all overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="p-6 lg:p-8 lg:col-span-1">
                      <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center mb-5">
                        <Icon className="w-7 h-7 text-emerald" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-2">{card.title}</h3>
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
                        onClick={() => openModal(5)}
                        className="inline-flex items-center gap-2 bg-emerald hover:bg-emerald-dark text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg"
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

      {/* Dynamic Booking Section */}
      <SectionDivider from="#f9fafb" to="#ffffff" />
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Agendar Reunión</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy">
                Reserva tu <span className="text-purple">asesoría personalizada</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">Completa tus datos y te contactaremos por WhatsApp para confirmar tu cita.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Nombre completo</label>
                  <input id="booking-name" type="text" placeholder="Ej. Juan Pérez" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 outline-none transition-all text-navy" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Fecha preferida</label>
                    <input id="booking-date" type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 outline-none transition-all text-navy" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Hora preferida</label>
                    <select id="booking-time" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 outline-none transition-all text-navy">
                      <option value="">Seleccionar hora</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Servicio de interés</label>
                  <select id="booking-service" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 outline-none transition-all text-navy">
                    <option value="Asesoría Fiscal">Asesoría Fiscal</option>
                    <option value="Planificación Estratégica">Planificación Estratégica</option>
                    <option value="Cumplimiento Normativo">Cumplimiento Normativo</option>
                    <option value="Consulta General">Consulta General</option>
                  </select>
                </div>
                <button
                  onClick={handleBooking}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald hover:bg-emerald-dark text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-emerald/25 hover:shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar por WhatsApp
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Us */}
      <SectionDivider from="#ffffff" to="#ffffff" />
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Nuestra Ventaja</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              ¿Por qué <span className="text-purple">elegirnos</span>?
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

      {/* CTA */}
      <SectionDivider from="#ffffff" to="#002350" />
      <section className="py-20 bg-gradient-to-r from-navy to-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Listo para gestionar tu contabilidad?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Agenda tu asesoría personalizada. Sin compromiso, sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openModal(5)} className="inline-flex items-center justify-center gap-2 bg-white text-navy px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl">
              <MessageCircle className="w-5 h-5" /> Agendar Asesoría
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
