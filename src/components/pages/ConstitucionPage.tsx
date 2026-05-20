"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ArrowRight, MessageCircle, ChevronRight } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";

const packages = [
  {
    name: "SAC",
    fullName: "Sociedad Anónima Cerrada",
    price: "S/ 450",
    priceNum: 450,
    serviceId: 1,
    recommended: false,
    features: [
      "Minuta de constitución",
      "Escritura pública",
      "Inscripción en SUNARP",
      "Obtención de RUC",
      "Clave SOL operativa",
      "Libro de actas legalizado",
    ],
    idealFor: "Socios que buscan formalidad con capital accionario. Permite tener hasta 20 socios. Ideal para negocios en crecimiento que planean captar inversiones.",
  },
  {
    name: "EIRL",
    fullName: "Empresa Individual de Responsabilidad Limitada",
    price: "S/ 380",
    priceNum: 380,
    serviceId: 2,
    recommended: true,
    features: [
      "Minuta de constitución",
      "Escritura pública",
      "Inscripción en SUNARP",
      "Obtención de RUC",
      "Clave SOL operativa",
      "Libro de actas legalizado",
      "Asesoría tributaria inicial GRATIS",
    ],
    idealFor: "Emprendedores individuales que quieren proteger su patrimonio personal. Solo un dueño, responsabilidad limitada y trámite más rápido.",
  },
  {
    name: "SRL",
    fullName: "Sociedad de Responsabilidad Limitada",
    price: "S/ 550",
    priceNum: 550,
    serviceId: 3,
    recommended: false,
    features: [
      "Minuta de constitución",
      "Escritura pública",
      "Inscripción en SUNARP",
      "Obtención de RUC",
      "Clave SOL operativa",
      "Libro de actas legalizado",
      "Licencia de funcionamiento (asesoría)",
    ],
    idealFor: "Socios que desean una estructura flexible con fewer requisitos formales que la SAC. Entre 2 y 20 socios con Responsabilidad Limitada.",
  },
];

const steps = [
  { num: "01", title: "Consulta Gratuita", desc: "Nos cuentas tu negocio y te recomendamos el tipo societario ideal." },
  { num: "02", title: "Elaboración de Minuta", desc: "Nuestro equipo legal redacta la minuta con todos los estatutos necesarios." },
  { num: "03", title: "Escritura Pública", desc: "Firmas ante notario público para darle formalidad legal." },
  { num: "04", title: "Inscripción SUNARP", desc: "Registramos tu empresa en los Registros Públicos de manera ágil." },
  { num: "05", title: "Obtención de RUC + Clave SOL", desc: "Gestionamos tu RUC y activamos tu Clave SOL para operar de inmediato." },
  { num: "06", title: "Capacitación Tributaria", desc: "Te orientamos sobre tus obligaciones tributarias y plazos SUNAT." },
];

const faqs = [
  { q: "¿Cuánto tiempo toma constituir una empresa?", a: "El proceso completo toma entre 5 a 10 días hábiles dependiendo del tipo societario. La EIRL es generalmente la más rápida al requerir menos trámites registrales." },
  { q: "¿Qué documentos necesito para empezar?", a: "Solo necesitas tu DNI original y una copia. Nosotros nos encargamos de todo lo demás: búsqueda de nombre, elaboración de minuta, trámites notariales y registrales." },
  { q: "¿El precio incluye todos los pagos?", a: "Sí, nuestros paquetes incluyen todos los honorarios profesionales. Los pagos notariales y registrales están cubiertos dentro del precio indicado, sin costos ocultos." },
  { q: "¿Puedo constituir mi empresa si estoy en otra ciudad?", a: "Absolutamente. Todo el proceso se puede realizar de manera remota. Solo necesitas enviar fotos de tu DNI por WhatsApp y nosotros gestionamos todo." },
  { q: "¿Qué diferencia hay entre SAC, EIRL y SRL?", a: "La EIRL es para un solo dueño con responsabilidad limitada. La SAC permite hasta 20 socios con capital accionario, ideal si planeas inversionistas. La SRL es intermedia: entre 2 y 20 socios con menos formalidades que la SAC." },
];

export function ConstitucionPage() {
  const { openModal } = useWhatsAppStore();

  return (
    <SiteLayout>
      {/* ═══ SUBPAGE HERO — Corporate Photograph + Brand Overlay ═══ */}
      <section className="subpage-hero relative overflow-hidden">
        {/* Layer 0: Background photo */}
        <div className="absolute inset-0 z-0">
          <div className="subpage-hero-photo" />
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
              Inicio <ChevronRight className="w-4 h-4" /> Constitución de Empresas
            </Link>
            <h1 className="subpage-hero-title text-[28px] sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Constitución de <span className="text-[#00a996]">Empresas</span>
            </h1>
            <p className="subpage-hero-desc mt-5 text-[15px] sm:text-lg text-white/75 max-w-2xl leading-relaxed font-light">
              Empieza con pie derecho. Formaliza tu negocio con paquetes claros,
              precios transparentes y un proceso acompañado de principio a fin.
            </p>
            <div className="subpage-hero-ctas mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-2.5 bg-[#008775] hover:bg-[#006655] text-white px-7 py-3.5 rounded-xl text-[15px] font-bold transition-all shadow-lg shadow-[#008775]/30 hover:shadow-xl active:scale-[0.98]"
              >
                Constituir mi Empresa
                <ArrowRight className="w-4 h-4" />
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
        <div className="scroll-down-indicator" onClick={() => window.scrollTo({ top: document.querySelector('.subpage-hero')?.offsetHeight, behavior: 'smooth' })}>
          <span>Ver más</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="scroll-arrow"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </section>

      {/* Pricing Cards */}
      <SectionDivider from="#001528" to="#ffffff" />
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Paquetes y Precios</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Elige el tipo de empresa <span className="text-purple">ideal para ti</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className={`relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm border transition-all hover:shadow-lg ${
                  pkg.recommended ? "pricing-recommended border-emerald shadow-md scale-[1.02] lg:scale-105" : "border-gray-200"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-current" /> MÁS POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{pkg.fullName}</p>
                  <div className="mt-4">
                    <span className="text-sm text-muted-foreground">Desde</span>
                    <div className="text-4xl lg:text-5xl font-bold text-navy">{pkg.price}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${pkg.recommended ? "text-emerald" : "text-navy/40"}`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-xs font-semibold text-navy mb-1">Ideal para:</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pkg.idealFor}</p>
                </div>

                <button
                  onClick={() => openModal(pkg.serviceId)}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                    pkg.recommended ? "bg-emerald hover:bg-emerald-dark text-white shadow-md hover:shadow-lg" : "bg-navy hover:bg-navy-light text-white"
                  }`}
                >
                  Constituir mi {pkg.name}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <SectionDivider from="#ffffff" to="#f9fafb" />
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Proceso</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              ¿Cómo <span className="text-emerald">funciona</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Un proceso simple y transparente. Nosotros nos encargamos de todo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal
                key={step.num}
                delay={0.05 * i}
                duration={0.5}
                className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <span className="text-4xl font-black text-emerald/15">{step.num}</span>
                <h3 className="text-lg font-bold text-navy mt-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <SectionDivider from="#f9fafb" to="#ffffff" />
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Preguntas Frecuentes</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Resolvemos tus dudas</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal
                key={i}
                delay={0.05 * i}
                duration={0.4}
                y={20}
                className="group bg-gray-50 rounded-xl border border-gray-100"
              >
                <details>
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="font-semibold text-navy pr-4">{faq.q}</h3>
                    <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionDivider from="#ffffff" to="#002350" />
      <section className="py-20 bg-gradient-to-r from-navy to-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Listo para formalizar tu negocio?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Constituye tu empresa hoy y empieza a facturar legalmente. Consultoría sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openModal()} className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl">
              <MessageCircle className="w-5 h-5" />
              Consultar por WhatsApp
            </button>
            <Link href="/nosotros-contacto" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all">
              Conocer más de nosotros
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
