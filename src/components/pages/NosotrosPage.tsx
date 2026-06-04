"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import {
  Target, Eye, CheckCircle2, Monitor, Award, Users, MessageCircle,
  ChevronRight, Mail, MapPin, Clock, Send, ArrowRight
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { useWhatsAppStore, services } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";
import { useState } from "react";

const columns = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Brindar soluciones tributarias y contables de excelencia que protejan el patrimonio de nuestros clientes y contribuyan al crecimiento sostenible de sus negocios. Trabajamos con transparencia, responsabilidad y un compromiso inquebrantable con cada uno de los casos que recibimos.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Ser la firma de asesoría tributaria líder en Perú, reconocida por nuestra innovación tecnológica, especialización permanente y compromiso con resultados medibles. Aspiramos a que cada empresa peruana acceda a servicios contables de clase mundial sin importar su tamaño.",
  },
];

const values = [
  { label: "Honestidad", description: "Transparencia total en cada proceso, decisión y reporte entregado a nuestros clientes." },
  { label: "Compromiso", description: "Nos dedicamos al 100% a cada caso. Tu problema tributario es nuestra prioridad." },
  { label: "Innovación Tecnológica", description: "Utilizamos software contable de última generación y herramientas digitales para mayor eficiencia." },
  { label: "Especialización Permanente", description: "Nuestro equipo se capacita constantemente para estar actualizado con las normas tributarias." },
  { label: "Orientación al Resultado", description: "No solo cumplimos, buscamos optimizar tu situación tributaria para que pagues lo justo." },
  { label: "Accesibilidad", description: "Atención personalizada para empresas de todos los tamaños, desde emprendedores hasta corporativos." },
];

const credentials = [
  { icon: Monitor, label: "Software contable de última generación" },
  { icon: Award, label: "Equipo certificado y especializado" },
  { icon: Users, label: "Atención personalizada y dedicada" },
  { icon: CheckCircle2, label: "Licencias y certificaciones actualizadas" },
];

const contactInfo = [
  { icon: MessageCircle, title: "WhatsApp", detail: "+51 943 366 950", description: "Respuesta inmediata", color: "text-whatsapp", bg: "bg-whatsapp/10" },
  { icon: Mail, title: "Email", detail: "contacto@jhonyasociados.com", description: "Respuesta en 24h", color: "text-navy", bg: "bg-navy/10" },
  { icon: MapPin, title: "Ubicación", detail: "Lima, Perú", description: "Atención virtual y presencial", color: "text-purple", bg: "bg-purple/10" },
  { icon: Clock, title: "Horario", detail: "Lun - Vie: 8:00 - 18:00", description: "Sáb: 9:00 - 13:00", color: "text-emerald", bg: "bg-emerald/10" },
];

export function NosotrosPage() {
  useScrollSlug();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation(0.1);
  const { ref: credRef, isVisible: credVisible } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const serviceName = services.find((s) => s.name === formData.service)?.name || formData.service || "General";
    const message = `Hola *Jhon&Asociados*.\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nServicio: ${serviceName}\nMensaje: ${formData.message}`;
    const url = `https://api.whatsapp.com/send?phone=51943366950&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <SiteLayout>
      {/* ═══ SUBPAGE HERO — Institutional Photograph + Brand Overlay ═══ */}
      <section id="hero" className="subpage-hero relative overflow-hidden">
        {/* Layer 0: Background photo - full bleed, face-focused */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/jhon-nosotros.webp"
            alt="Especialista Jhon&Asociados"
            className="w-full h-full object-cover object-[center_20%] md:object-[60%_20%] brightness-[0.40]"
          />
        </div>
        {/* Layer 1: Brand overlay — standard corporate gradient */}
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
              Inicio <ChevronRight className="w-4 h-4" /> Nosotros
            </Link>
            <h1 className="subpage-hero-title text-[28px] sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Jhon&<span className="text-[#00a996]">Asociados</span>
            </h1>
            <p className="subpage-hero-desc mt-5 text-[15px] sm:text-lg text-white/75 max-w-2xl leading-relaxed font-light">
              Transparencia, tecnología y resultados. Conoce al equipo que protege el patrimonio
              de más de 500 empresas en Perú.
            </p>
            <div className="subpage-hero-ctas mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-2.5 bg-[#008775] hover:bg-[#006655] text-white px-7 py-3.5 rounded-xl text-[15px] font-bold transition-all shadow-lg shadow-[#008775]/30 hover:shadow-xl active:scale-[0.98]"
              >
                Consultoría Gratuita
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="mailto:contacto@jhonyasociados.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-3.5 rounded-xl text-[15px] font-semibold transition-all backdrop-blur-sm"
              >
                <Mail className="w-4 h-4" />
                Escríbenos
              </a>
            </div>
          </motion.div>
        </div>
        {/* Scroll down indicator */}
        <ScrollDownIndicator />
      </section>

      {/* Mission & Vision */}
      <SectionDivider from="#001528" to="#ffffff" />
      <section id="mision-vision" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={aboutRef} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Quiénes Somos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Nuestro propósito es <span className="text-emerald">tu tranquilidad</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {columns.map((col, i) => {
              const Icon = col.icon;
              return (
                <motion.div
                  key={col.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{col.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{col.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-navy mb-8 text-center">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((v, i) => (
                <ScrollReveal
                  key={v.label}
                  delay={0.05 * i}
                  duration={0.4}
                  y={20}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:shadow-sm transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-navy">{v.label}</span>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{v.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <SectionDivider from="#ffffff" to="#f9fafb" />
      <section id="credenciales" className="py-20 lg:py-28 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={credRef} className="bg-navy rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald/20 rounded-full blur-3xl" />
            <div className="relative">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={credVisible ? { opacity: 1, y: 0 } : {}}
                className="text-2xl font-bold text-white mb-8 text-center"
              >
                ¿En qué nos respaldamos?
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {credentials.map((cred, i) => {
                  const Icon = cred.icon;
                  return (
                    <motion.div
                      key={cred.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={credVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                      className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="w-14 h-14 bg-emerald/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-emerald-light" />
                      </div>
                      <p className="text-white/80 text-sm font-medium">{cred.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <SectionDivider from="#f9fafb" to="#ffffff" />
      <section id="contacto" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Contacto</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Hablemos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Estamos listos para ayudarte. Envíanos un mensaje y recibe asesoría personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <ScrollReveal
              x={-30}
              duration={0.6}
              className="lg:col-span-3 bg-gray-50 rounded-2xl border border-gray-200 p-6 lg:p-8"
            >
              <h3 className="text-xl font-bold text-navy mb-6">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">Nombre completo *</label>
                  <input name="name" value={formData.name} onChange={handleChange} required placeholder="Tu nombre"
                    className="w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy">Email</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com"
                      className="w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-navy">Servicio</label>
                    <select name="service" value={formData.service} onChange={handleChange}
                      className="w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all">
                      <option value="">-- Seleccionar --</option>
                      {services.map((s) => (<option key={s.id} value={s.name}>{s.name}</option>))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-navy">Mensaje</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Cuéntanos sobre tu necesidad..." rows={4}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all resize-none" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg">
                  <Send className="w-5 h-5" /> Enviar por WhatsApp
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal
              x={30}
              duration={0.6}
              delay={0.2}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="bg-gray-50 rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${info.bg} rounded-xl flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy text-sm">{info.title}</h4>
                        <p className="text-navy font-medium mt-0.5">{info.detail}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{info.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <button onClick={() => openModal()} className="w-full bg-navy hover:bg-navy-light text-white rounded-xl p-5 flex items-center justify-center gap-3 font-semibold transition-all shadow-md hover:shadow-lg">
                <MessageCircle className="w-5 h-5" /> Consultoría Gratuita
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
