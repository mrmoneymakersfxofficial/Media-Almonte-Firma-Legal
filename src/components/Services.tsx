"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Calculator, Shield, Users, TrendingUp, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/ScrollReveal";

const serviceCards = [
  {
    icon: Building2,
    title: "Constitución de Empresas",
    description: "Formaliza tu negocio desde S/380. SAC, EIRL, SRL. Incluye minuta, partida, RUC y Clave SOL.",
    href: "/constitucion-de-empresas",
    serviceId: 1,
  },
  {
    icon: Calculator,
    title: "Contabilidad Integral",
    description: "Tercerización contable completa. Libros electrónicos, SIRE, planillas y declaraciones mensuales.",
    href: "/contabilidad-tributacion",
    serviceId: 4,
  },
  {
    icon: Shield,
    title: "Defensa Tributaria",
    description: "Atención urgente de cartas inductivas, fiscalizaciones y cobranzas coactivas de SUNAT.",
    href: "/defensa-tributaria-sunat",
    serviceId: 5,
  },
  {
    icon: Users,
    title: "Planillas y Laboral",
    description: "Administración de planillas, T-REGISTRO, PDT 601 y cumplimiento laboral total.",
    href: "/contabilidad-tributacion",
    serviceId: 8,
  },
  {
    icon: TrendingUp,
    title: "Asesoría al Inversionista",
    description: "Orientación integral para inversores nacionales y extranjeros. Planificación fiscal estratégica.",
    href: "/contabilidad-tributacion",
    serviceId: 9,
  },
  {
    icon: GraduationCap,
    title: "Capacitaciones",
    description: "Programas de formación tributaria y empresarial para dueños y personal contable.",
    href: "/contabilidad-tributacion",
    serviceId: 10,
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Soluciones integrales para proteger tu patrimonio y hacer crecer tu negocio con tranquilidad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal
                key={card.title}
                delay={0.08 * i}
                duration={0.7}
                threshold={0.05}
                className="service-card bg-white rounded-2xl p-6 lg:p-8 cursor-pointer"
              >
                <div className="service-card-icon mb-5">
                  <Icon className="w-5 h-5 text-[#002350]" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{card.description}</p>
                <Link href={card.href} className="service-card-link">
                  Ver detalles
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
