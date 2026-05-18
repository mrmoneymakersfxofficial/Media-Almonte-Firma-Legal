"use client";

import { motion } from "framer-motion";
import { Building2, Calculator, Shield, Users, TrendingUp, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useWhatsAppStore } from "@/lib/whatsapp";

const serviceCards = [
  {
    icon: Building2,
    title: "Constitución de Empresas",
    description:
      "Formaliza tu negocio desde S/450. SAC, EIRL, SRL. Incluye minuta, partida, RUC y Clave SOL.",
    serviceId: 1,
  },
  {
    icon: Calculator,
    title: "Contabilidad Integral",
    description:
      "Tercerización contable completa. Libros electrónicos, SIRE, planillas y declaraciones mensuales.",
    serviceId: 4,
  },
  {
    icon: Shield,
    title: "Defensa Tributaria",
    description:
      "Atención urgente de cartas inductivas, fiscalizaciones y cobranzas coactivas de SUNAT.",
    serviceId: 5,
  },
  {
    icon: Users,
    title: "Planillas y Laboral",
    description:
      "Administración de planillas, T-REGISTRO, PDT 601 y cumplimiento laboral total.",
    serviceId: 8,
  },
  {
    icon: TrendingUp,
    title: "Asesoría al Inversionista",
    description:
      "Orientación integral para inversores nacionales y extranjeros. Planificación fiscal estratégica.",
    serviceId: 9,
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones",
    description:
      "Programas de formación tributaria y empresarial para dueños y personal contable.",
    serviceId: 10,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy"
          >
            ¿Por qué elegir{" "}
            <span className="text-emerald">Jhon & Asociados</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Soluciones integrales para proteger tu patrimonio y hacer crecer tu
            negocio con tranquilidad.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="service-card bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm group cursor-pointer"
              >
                <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald/20 transition-colors">
                  <Icon className="w-7 h-7 text-emerald" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {card.description}
                </p>
                <button
                  onClick={() => openModal(card.serviceId)}
                  className="inline-flex items-center text-emerald font-semibold text-sm hover:text-emerald-dark transition-colors group/btn"
                >
                  Cotizar ahora
                  <svg
                    className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
