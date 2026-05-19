"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Shield, Gavel, MessageCircle, Clock, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useWhatsAppStore } from "@/lib/whatsapp";

const urgentCards = [
  {
    icon: AlertTriangle,
    title: "Cartas Inductivas",
    description:
      "Recibiste una carta inductiva de SUNAT. Te ayudamos a responder a tiempo y evitar multas.",
    cta: "Atender Ahora",
    serviceId: 5,
    urgency: "Actúa rápido: Tienes un plazo limitado para responder.",
  },
  {
    icon: Shield,
    title: "Fiscalizaciones",
    description:
      "SUNAT seleccionó tu empresa para auditoría. Preparamos tu defensa con documentación completa.",
    cta: "Defender mi Empresa",
    serviceId: 6,
    urgency: "No esperes: Cada día cuenta para tu defensa.",
  },
  {
    icon: Gavel,
    title: "Cobranza Coactiva",
    description:
      "Tienes deudas con SUNAT en cobranza coactiva. Fraccionamos y negociamos tu deuda.",
    cta: "Negociar mi Deuda",
    serviceId: 7,
    urgency: "Urgente: Evita embargos y afectaciones patrimoniales.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

export function TaxDefense() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();

  return (
    <section id="defensa" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle urgent background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-red-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-urgent/10 border border-urgent/20 rounded-full px-4 py-2 mb-4"
          >
            <span className="w-2.5 h-2.5 bg-urgent rounded-full urgent-pulse" />
            <span className="text-urgent font-semibold text-sm uppercase tracking-wider">
              Situación Urgente
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy"
          >
            ¿SUNAT te fiscalizó?{" "}
            <span className="text-urgent">Actuamos con urgencia.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            No dejes pasar el plazo. Cada día cuenta para defender tu patrimonio.
          </motion.p>
        </div>

        {/* Urgent Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {urgentCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="relative bg-white rounded-2xl border-2 border-urgent/20 p-6 lg:p-8 shadow-sm hover:shadow-lg hover:border-urgent/40 transition-all group"
              >
                {/* Urgency strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-urgent to-gold rounded-t-2xl" />

                <div className="w-14 h-14 bg-urgent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-urgent/20 transition-colors">
                  <Icon className="w-7 h-7 text-urgent" />
                </div>

                <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {card.description}
                </p>

                {/* Urgency message */}
                <div className="flex items-center gap-2 text-urgent bg-urgent/5 rounded-lg p-3 mb-5">
                  <Clock className="w-4 h-4 shrink-0 urgent-pulse" />
                  <span className="text-sm font-medium">{card.urgency}</span>
                </div>

                <button
                  onClick={() => openModal(card.serviceId)}
                  className="w-full flex items-center justify-center gap-2 bg-urgent hover:bg-urgent/90 text-white py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            ¿No sabes qué situación tienes? Cuéntanos tu caso y te orientamos de inmediato.
          </p>
          <button
            onClick={() => openModal(5)}
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-xl font-semibold transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Consulta Urgente por WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}
