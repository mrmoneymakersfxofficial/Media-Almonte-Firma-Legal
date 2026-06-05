"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import {
  CheckCircle2, BarChart3, MessageCircle, BookOpen, FileText, Shield,
  Users, TrendingUp, Clock, ChevronRight, Calculator, ArrowRight,
  AlertTriangle, Mail
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

const mainFeatures = [
  { icon: BookOpen, title: "Libros Electrónicos", desc: "Registro de Compras, Ventas, Inventarios, Caja y Bancos, Diario, Mayor, Planilla. Todos al día y conforme a SUNAT." },
  { icon: FileText, title: "Sistema SIRE", desc: "Registro Electrónico de Información de SUNAT. Actualizamos tu información de ventas, compras y comprobantes electrónicos de forma mensual." },
  { icon: Calculator, title: "Declaraciones Mensuales", desc: "IGV, Renta, IES, Retenciones, ITAN. Preparamos y presentamos todas tus declaraciones tributarias antes de los plazos." },
  { icon: FileText, title: "PDTs y Formularios Vigentes", desc: "PDT 621, PDT 619, PDT 601, FRL 601, y todos los formularios que tu empresa necesite presentar." },
  { icon: BarChart3, title: "Conciliaciones Bancarias", desc: "Verificamos que tus registros contables coincidan con los movimientos bancarios. Detectamos diferencias a tiempo." },
  { icon: TrendingUp, title: "Estados Financieros", desc: "Balance General, Estado de Resultados, Flujo de Efectivo. Información financiera clara para la toma de decisiones." },
  { icon: Shield, title: "Asesoría Tributaria Permanente", desc: "Consultas ilimitadas sobre temas tributarios. Te orientamos sobre las mejores opciones para tu negocio." },
];

const additionalServices = [
  { icon: Users, title: "Planilla y Laboral", desc: "T-REGISTRO, PDT 601, boletas de pago, liquidaciones, CTS, vacaciones y gratificaciones.", price: "A Consultar" },
  { icon: Clock, title: "Cumplimiento de Plazos", desc: "Calendario personalizado con todos los vencimientos tributarios y laborales de tu empresa.", price: "Incluido" },
];

const stats = [
  { value: "200+", label: "Empresas confiadas" },
  { value: "99%", label: "Declaraciones a tiempo" },
  { value: "0", label: "Multas por retraso" },
];

const benefits = [
  "Reduces costos hasta un 60% comparado con un contador interno",
  "Eliminas el riesgo de multas por declaraciones extemporáneas",
  "Tienes acceso a un equipo de especialistas, no a una sola persona",
  "Recibes reportes financieros claros para tomar mejores decisiones",
  "Tu información está respaldada y segura en la nube",
  "Enfócate en tu negocio, nosotros nos encargamos de los números",
];

const planillasFeatures = [
  { icon: Users, title: "T-REGISTRO", desc: "Alta, baja y modificación de trabajadores en plataforma SUNAT" },
  { icon: FileText, title: "Planilla Mensual PDT 601", desc: "Elaboración y presentación de planilla electrónica" },
  { icon: Calculator, title: "Boletas de Pago", desc: "Cálculo de remuneraciones, deducciones y aportes" },
  { icon: Clock, title: "CTS", desc: "Cálculo y depósito de Compensación por Tiempo de Servicios" },
  { icon: BookOpen, title: "Vacaciones y Gratificaciones", desc: "Control de descansos y gratificaciones ordinarias y extraordinarias" },
  { icon: TrendingUp, title: "Liquidaciones", desc: "Cálculo preciso de liquidaciones por fin de contrato" },
  { icon: Shield, title: "Seguro Essalud y ONP", desc: "Declaración y pago mensual de aportes" },
  { icon: CheckCircle2, title: "Auditoría Laboral", desc: "Revisión de cumplimiento normativo laboral" },
];

export function ContabilidadPage() {
  useScrollSlug();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();

  return (
    <SiteLayout>
      {/* ═══ SUBPAGE HERO — Matches Homepage Hero Architecture ═══ */}
      <section id="hero" className="relative flex overflow-hidden hero-fade-top">
        {/* Layer 0: Background photo - full bleed */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/jhon-contabilidad.webp"
            alt="Especialista Jhon&Asociados"
            className="w-full h-full object-cover object-[70%_15%] lg:object-[right_10%_top_18%] brightness-[0.45] lg:brightness-[0.85] lg:contrast-[1.02]"
          />
        </div>
        {/* Layer 1: Brand overlay (same as home) */}
        <div className="hero-brand-overlay" />
        {/* Layer 2: Decorative blurs (home-sized) */}
        <div className="hero-decor-layer">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#481180]/12 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#008775]/8 rounded-full blur-[100px]" />
        </div>
        {/* Layer 20: Content */}
        <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="hero-text-col">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
              {/* Breadcrumb */}
              <Link href="/" className="inline-flex items-center gap-1 text-white/50 hover:text-white/75 text-[13px] transition-colors">
                Inicio <ChevronRight className="w-4 h-4" /> Contabilidad y Tributación
              </Link>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mt-4"
              >
                <Shield className="w-3.5 h-3.5 text-[#00a996]" />
                <span className="text-white/85 text-xs sm:text-sm font-medium tracking-wide">Contabilidad Integral</span>
              </motion.div>
              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hero-h1 text-[34px] sm:text-[46px] lg:text-[54px] xl:text-[62px] font-extrabold text-white leading-[1.1] tracking-tight"
              >
                Contabilidad Integral{" "}
                <span className="text-[#00a996]">y Tributación</span>
              </motion.h1>
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-subtitle mt-6 text-[15px] sm:text-[17px] lg:text-[18px] text-[#f8fafc]/80 max-w-lg leading-relaxed font-light"
              >
                Terceriza tu contabilidad con expertos. Nosotros nos encargamos de los libros electrónicos,
                declaraciones mensuales, planillas y cumplimiento tributario completo para que tú te
                enfoques en hacer crecer tu negocio.
              </motion.p>
              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hero-ctas mt-10 flex flex-col sm:flex-row gap-3.5"
              >
                <button
                  onClick={() => openModal(4)}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#008775] hover:bg-[#006655] text-white px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#008775]/30 hover:shadow-xl hover:shadow-[#008775]/40 active:scale-[0.98]"
                >
                  Cotización Personalizada
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/defensa-tributaria-sunat"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm"
                >
                  Problemas con SUNAT
                </Link>
              </motion.div>
              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="hero-trust mt-7 flex flex-wrap gap-x-5 gap-y-2 text-white/45 text-xs sm:text-sm"
              >
                {[
                  "Declaraciones mensuales",
                  "Libros electrónicos",
                  "Planilla laboral"
                ].map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00a996]" />
                    {badge}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Scroll down indicator */}
        <ScrollDownIndicator />
      </section>

      {/* Main Features */}
      <SectionDivider from="#001528" to="#ffffff" />
      <section id="servicios-incluidos" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Servicios Incluidos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Todo lo que necesitas para estar <span className="text-purple">al día con SUNAT</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainFeatures.map((feature, i) => {
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
        </div>
      </section>

      {/* ═══ CONTABILIDAD DIGITAL — Plan Promocional ═══ */}
      <SectionDivider from="#ffffff" to="#f0fdf4" />
      <section id="contabilidad-digital" className="py-16 sm:py-20 lg:py-24 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-3">Plan Promocional</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight mb-3">
                CONTABILIDAD <span className="text-emerald">DIGITAL</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">Tu empresa merece respaldo real</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* Price Card */}
            <ScrollReveal delay={0.1}>
              <div className="relative bg-white rounded-2xl shadow-xl shadow-emerald/10 border border-emerald/10 overflow-hidden">
                {/* Green ribbon */}
                <div className="bg-emerald text-white text-center py-2 text-sm font-bold tracking-wider uppercase">
                  Precio Promocional
                </div>
                <div className="p-8 text-center">
                  <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Desde</p>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-navy/60 text-lg font-semibold">S/</span>
                    <span className="text-5xl font-extrabold text-navy">250</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">al mes</p>
                  <p className="text-xs text-muted-foreground/70 mb-6">Modalidad Promocional</p>
                  <a
                    href="https://wa.me/51943366950?text=Hola%2C%20me%20interesa%20el%20plan%20de%20Contabilidad%20Digital%20S%2F250%20al%20mes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full bg-emerald hover:bg-emerald/90 text-white px-7 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-emerald/25 active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Cotizar Ahora
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Benefits Grid */}
            <ScrollReveal delay={0.2} className="lg:col-span-2">
              <h3 className="text-xl font-bold text-navy mb-6">Beneficios Incluidos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "📄", title: "Cero documentación física", desc: "Gestión completamente digitalizada, rápida y sin necesidad de archivar papeles físicos." },
                  { icon: "📊", title: "Operaciones oportunas", desc: "Libros electrónicos y Sistema SIRE actualizados rigurosamente mes a mes ante la SUNAT." },
                  { icon: "🛒", title: "Revisión de compras y ventas", desc: "Control detallado de todas tus transacciones comerciales y del registro de tu personal." },
                  { icon: "💬", title: "Atención por WhatsApp", desc: "Canal directo de comunicación inmediata para resolver cualquier consulta contable cotidiana." },
                  { icon: "🔓", title: "Sin contrato de permanencia", desc: "Libertad absoluta para gestionar tu contabilidad sin penalizaciones ni plazos forzosos." },
                  { icon: "👨‍💼", title: "Contador responsable", desc: "Respaldo profesional y técnico directo ante cualquier requerimiento o fiscalización de SUNAT y SUNAFIL." },
                  { icon: "🏢", title: "Oficina en Lima, Perú", desc: "Operaciones centralizadas estratégicamente para brindar cobertura digital a todo el territorio nacional." },
                  { icon: "✅", title: "Tranquilidad tributaria", desc: "Mayor control sobre tus finanzas para garantizar un crecimiento empresarial seguro y sostenible." },
                ].map((b, i) => (
                  <ScrollReveal key={i} delay={0.05 * i} duration={0.3} y={10}>
                    <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-emerald/5 shadow-sm">
                      <span className="text-xl shrink-0 mt-0.5">{b.icon}</span>
                      <div>
                        <p className="font-semibold text-navy text-sm mb-1">{b.title}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* SUNAT Alert */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-bold text-amber-800 mb-2">Alerta Preventiva SUNAT</h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Evita multas y contingencias: No dejes tus declaraciones al azar. Una sola infracción o multa de SUNAT puede costarte hasta <strong>S/ 5,500</strong> o más. En <strong>Jhon&Asociados</strong> nos encargamos de proteger tu patrimonio.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact channels */}
          <ScrollReveal delay={0.4}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a
                href="https://wa.me/51943366950?text=Hola%2C%20me%20interesa%20el%20plan%20de%20Contabilidad%20Digital%20S%2F250%20al%20mes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-emerald" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp Directo</p>
                  <p className="font-bold text-navy text-sm">943-366-950</p>
                </div>
              </a>
              <a
                href="mailto:contacto@jhonasociados.com"
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Correo Electrónico</p>
                  <p className="font-bold text-navy text-sm">contacto@jhonasociados.com</p>
                </div>
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Stats & Price Panel */}
      <SectionDivider from="#f0fdf4" to="#f9fafb" />
      <section id="estadisticas-beneficios" ref={statsRef} className="py-20 lg:py-28 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={statsVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-navy rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald/30 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald/20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-emerald-light" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold">A Consultar</h3>
                    <p className="text-white/60 text-sm">Servicios Contables</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed mb-8">
                  Incluye todos los libros electrónicos, declaraciones mensuales, conciliaciones, estados financieros. Todo lo que necesitas para estar al día con SUNAT.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-emerald-light">{stat.value}</div>
                      <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={statsVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-navy mb-6">Beneficios de tercerizar tu contabilidad</h3>
                <div className="space-y-4">
                  {benefits.map((b, i) => (
                    <ScrollReveal
                      key={i}
                      delay={0.05 * i}
                      duration={0.3}
                      y={10}
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{b}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <SectionDivider from="#f9fafb" to="#ffffff" />
      <section id="servicios-complementarios" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Servicios Complementarios</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Más de lo que esperas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollReveal
                  key={s.title}
                  delay={0.1 * i}
                  className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 text-center"
                >
                  <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-emerald" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-block bg-emerald/10 text-emerald font-bold text-sm px-3 py-1 rounded-full">{s.price}</span>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Planillas y Laboral */}
      <SectionDivider from="#ffffff" to="#f9fafb" />
      <section id="planillas-laboral" className="py-20 lg:py-28 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Servicio Especializado</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Planillas y Laboral <span className="text-purple">Tercerización total</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Gestionamos integralmente todas tus obligaciones laborales: desde el registro de trabajadores
              hasta las liquidaciones finales, para que cumplas con la normativa y cuides a tu equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {planillasFeatures.map((feature, i) => {
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
                onClick={() => openModal(8)}
                className="inline-flex items-center justify-center gap-2.5 bg-[#008775] hover:bg-[#006655] text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-[#008775]/30 hover:shadow-xl active:scale-[0.98]"
              >
                Cotizar Planilla
                <ArrowRight className="w-5 h-5" />
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionDivider from="#f9fafb" to="#002350" />
      <section id="contacto" className="py-20 bg-gradient-to-r from-navy to-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Listo para gestionar tu contabilidad?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Solicita una cotización personalizada. Sin compromiso, sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openModal(4)} className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl">
              <MessageCircle className="w-5 h-5" /> Cotización Personalizada
            </button>
            <Link href="/defensa-tributaria-sunat" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all">
              ¿Problemas con SUNAT? Ver Asesoría Tributaria
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
