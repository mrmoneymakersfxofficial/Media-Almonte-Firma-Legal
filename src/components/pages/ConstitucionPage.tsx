"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ArrowRight, MessageCircle, ChevronRight, Shield } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { useScrollSlug } from "@/hooks/use-scroll-slug";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";

const packages = [
  {
    name: "SAC",
    fullName: "Sociedad Anónima Cerrada",
    price: "A Consultar",
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
    price: "A Consultar",
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
    price: "A Consultar",
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
    idealFor: "Socios que desean una estructura flexible con menos requisitos formales que la SAC. Entre 2 y 20 socios con Responsabilidad Limitada.",
  },
  {
    name: "COOPERATIVA",
    fullName: "Constitución de Cooperativas",
    price: "A Consultar",
    serviceId: 4,
    recommended: false,
    features: [
      "Minuta de constitución",
      "Escritura pública",
      "Inscripción en SUNARP",
      "Obtención de RUC",
      "Clave SOL operativa",
      "Libro de actas legalizado",
      "Estatutos y reglamento interno",
      "Asesoría en estructura cooperativa",
      "Licencia de funcionamiento (Asesoría)",
      "Permisos SBS (Asesoría)",
    ],
    idealFor: "Clientes que se dedican a la colocación de capitales con fondos propios, mínimo 12 socios.",
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
  useScrollSlug();
  const { openModal } = useWhatsAppStore();

  return (
    <SiteLayout>
      {/* ═══ SUBPAGE HERO — Responsive Layout ═══ */}
      <section id="hero" className="relative w-full min-h-screen min-h-[100dvh] flex items-center justify-start overflow-hidden bg-[#0B2146] pt-[100px] pb-12 px-6 sm:px-12 lg:px-20 xl:px-32">
        {/* Background image layer */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src="/jhon-constitucion.webp"
            alt="Especialista Jhon&Asociados"
            className="w-full h-full object-cover object-[center_15%] md:object-[60%_20%] lg:object-[70%_22%] xl:object-[75%_20%] scale-105 brightness-[0.40] md:brightness-100"
          />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0B2146] via-[#0B2146]/80 to-transparent w-full md:w-[70%] lg:w-[60%] z-10"></div>
          <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#0B2146]/90 via-[#0B2146]/60 to-[#050F21] z-10"></div>
        </div>
        {/* Content */}
        <div className="relative z-20 w-full max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col justify-center text-left">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
            {/* Breadcrumb */}
            <Link href="/" className="inline-flex items-center gap-1 text-white/50 hover:text-white/75 text-[13px] transition-colors">
              Inicio <ChevronRight className="w-4 h-4" /> Constitución de Empresas
            </Link>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mt-5"
            >
              <Shield className="w-3.5 h-3.5 text-[#00a996]" />
              <span className="text-white/85 text-xs sm:text-sm font-medium tracking-wide">Constitución de Empresas</span>
            </motion.div>
            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-h1 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight mt-4"
            >
              Constitución de{" "}
              <span className="text-[#00a996]">Empresas</span>
            </motion.h1>
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle mt-5 text-[15px] sm:text-[17px] lg:text-[18px] text-[#f8fafc]/80 max-w-lg leading-relaxed font-light"
            >
              Formaliza tu negocio con precios flexibles y un proceso acompañado de principio a fin. Nosotros nos encargamos de todo.
            </motion.p>
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-ctas mt-8 flex flex-col sm:flex-row gap-3.5"
            >
              <button
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-2.5 bg-[#008775] hover:bg-[#006655] text-white px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-bold transition-all shadow-lg shadow-[#008775]/30 hover:shadow-xl hover:shadow-[#008775]/40 active:scale-[0.98]"
              >
                Constituir mi Empresa
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/nosotros-contacto"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/25 text-white px-7 py-4 sm:px-8 sm:py-4 rounded-xl text-[15px] sm:text-base font-semibold transition-all backdrop-blur-sm"
              >
                Contáctanos
              </Link>
            </motion.div>
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hero-trust mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-white/45 text-xs sm:text-sm"
            >
              {[
                "Notaría incluida",
                "SUNARP garantizado",
                "RUC + Clave SOL"
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00a996]" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
        {/* Scroll down indicator */}
        <ScrollDownIndicator />
      </section>

      {/* ═══ Requirements Section — After Hero ═══ */}
      <SectionDivider from="#001528" to="#f9fafb" />
      <section id="requisitos" className="py-20 lg:py-28 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Información del Servicio</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
                Constituye tu empresa{" "}
                <span className="text-emerald">Precios a Consultar</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Formaliza tu negocio sin estrés ni trámites complicados. Nos encargamos de todo el proceso, rápido y sin colas, para que empieces a facturar de inmediato.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 lg:p-10">
              <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald" />
                </div>
                Requisitos para Constituir tu Empresa
              </h3>
              <ul className="space-y-5">
                {[
                  "El importe de capital social tiene un máximo de S/ 20,000. En caso de desear aportar un monto mayor, puede contactarse con nosotros para una evaluación personalizada. No es necesario depositar el capital en una cuenta bancaria.",
                  "El pago del servicio cubre hasta un gerente general. Si desea incluir gerentes adicionales en la estructura de su empresa, contáctenos para brindarle la asesoría correspondiente.",
                  "No tener multas pendientes en la ONPE por no haber sufragado. Puede verificar su situación en www.onpe.gob.pe. En caso de tener multas, contáctenos y le orientamos sobre el procedimiento.",
                  "No existe un monto mínimo obligatorio de aporte de capital. Sin embargo, recomendamos constituir con un importe mínimo de S/ 100.00 para efectos registrales.",
                  "Proponer de 2 a 3 nombres alternativos para la denominación social de su empresa, los cuales serán verificados para asegurar su disponibilidad en los Registros Públicos.",
                  "Definir la distribución porcentual de acciones o participaciones entre los socios de la empresa.",
                  "Indicar la dirección donde se registrará la empresa. No se requiere presentar recibos de servicios originales de agua o luz.",
                  "Completar el formulario de datos de la estructura societaria con la información de todos los socios y el gerente general.",
                  "Todos los socios y el gerente general deberán contar con su documento de identidad vigente (DNI). En caso de contar con multas en la ONPE, nuestro equipo le orientará sobre cómo regularizar su situación.",
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed text-[15px]">{req}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <button
                  onClick={() => openModal()}
                  className="inline-flex items-center justify-center gap-2 bg-emerald hover:bg-emerald/90 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-emerald/25 hover:shadow-xl active:scale-[0.98]"
                >
                  Constituir mi Empresa
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <SectionDivider from="#f9fafb" to="#ffffff" />
      <section id="paquetes-precios" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">Paquetes y Precios</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Elige el tipo de empresa <span className="text-purple">ideal para ti</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className={`relative flex flex-col justify-between h-full bg-white rounded-2xl p-6 lg:p-8 shadow-sm border transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] ${
                  pkg.recommended ? "pricing-recommended border-emerald shadow-md lg:scale-[1.03]" : "border-gray-200"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-emerald text-white text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1 shadow-lg whitespace-nowrap">
                      <Star className="w-3 h-3 fill-current" /> MÁS POPULAR
                    </span>
                  </div>
                )}

                {/* CONTENEDOR SUPERIOR: Título, Inversión y Lista de Checks */}
                <div className="flex-grow flex flex-col justify-between">
                  {/* Header: name + price */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-navy">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{pkg.fullName}</p>
                    <div className="mt-4">
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Inversión</p>
                      <span className="text-2xl sm:text-3xl font-extrabold text-navy">A Consultar</span>
                      <p className="text-[11px] text-muted-foreground mt-1 italic">Tarifa adaptada según el capital social de tu empresa</p>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3 pb-6 mt-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${pkg.recommended ? "text-emerald" : "text-navy/40"}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CONTENEDOR CENTRAL: "Ideal para" alineado obligatoriamente */}
                <div className="min-h-[120px] flex flex-col justify-start bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-xs font-semibold text-navy mb-1">Ideal para:</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pkg.idealFor}</p>
                </div>

                {/* CONTENEDOR INFERIOR: Botón CTA al fondo */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <button
                    onClick={() => openModal(pkg.serviceId)}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                      pkg.recommended ? "bg-emerald hover:bg-emerald-dark text-white shadow-md hover:shadow-lg" : "bg-navy hover:bg-navy-light text-white"
                    }`}
                  >
                    Constituir mi {pkg.name}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <SectionDivider from="#ffffff" to="#f9fafb" />
      <section id="proceso" className="py-20 lg:py-28 bg-gray-50/50">
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
      <section id="preguntas-frecuentes" className="py-20 lg:py-28 bg-white">
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
      <section id="contacto" className="py-20 lg:py-28 bg-gradient-to-r from-navy to-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ¿Listo para gestionar tu contabilidad?
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
