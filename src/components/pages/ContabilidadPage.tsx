"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import {
  CheckCircle2, BarChart3, MessageCircle, BookOpen, FileText, Shield,
  Users, TrendingUp, Monitor, Clock, ChevronRight, Calculator
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";

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
  { icon: Users, title: "Planilla y Laboral", desc: "T-REGISTRO, PDT 601, boletas de pago, liquidaciones, CTS, vacaciones y gratificaciones.", price: "Desde S/ 250/mes" },
  { icon: Monitor, title: "Software Contable", desc: "Acceso a plataforma digital para consultar tus libros, estados financieros y documentos en tiempo real.", price: "Incluido" },
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

export function ContabilidadPage() {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();

  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 bg-navy relative overflow-hidden hero-fade-top">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors mb-6 inline-flex items-center gap-1">
              Inicio <ChevronRight className="w-4 h-4" /> Contabilidad y Tributación
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
              Contabilidad Integral <span className="text-emerald-light">y Tributación</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed">
              Terceriza tu contabilidad con expertos. Nosotros nos encargamos de los libros electrónicos,
              declaraciones mensuales, planillas y cumplimiento tributario completo para que tú te
              enfoques en hacer crecer tu negocio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <SectionDivider from="#002350" to="#ffffff" />
      <section className="py-20 lg:py-28 bg-white">
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

      {/* Stats & Price Panel */}
      <SectionDivider from="#ffffff" to="#f9fafb" />
      <section ref={statsRef} className="py-20 lg:py-28 bg-gray-50/50">
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
                    <h3 className="text-2xl font-bold">Desde S/ 350/mes</h3>
                    <p className="text-white/60 text-sm">Contabilidad completa + Planilla</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed mb-8">
                  Incluye todos los libros electrónicos, declaraciones mensuales, conciliaciones, estados financieros
                  y planilla electrónica. Todo lo que necesitas para estar al día con SUNAT y la SUNAFIL.
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Servicios Complementarios</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Más de lo que esperas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* CTA */}
      <SectionDivider from="#ffffff" to="#002350" />
      <section className="py-20 bg-gradient-to-r from-navy to-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Listo para tercerizar tu contabilidad?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Solicita una cotización personalizada. Sin compromiso, sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openModal(4)} className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl">
              <MessageCircle className="w-5 h-5" /> Cotización Personalizada
            </button>
            <Link href="/defensa-tributaria-sunat" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all">
              ¿Problemas con SUNAT? Ver Defensa Tributaria
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
