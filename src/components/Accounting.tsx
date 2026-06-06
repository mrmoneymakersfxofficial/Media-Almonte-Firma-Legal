"use client";

import { motion } from "framer-motion";
import { CheckCircle2, BookOpen, FileText, Calculator, BarChart3, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useWhatsAppStore } from "@/lib/whatsapp";

const features = [
  "Libros electrónicos (Registro de Compras, Ventas, Inventarios, Caja y Bancos, Diario, Mayor, Planilla)",
  "Sistema SIRE (Registro Electrónico)",
  "Declaraciones mensuales (IGV, Renta, IES, Retenciones, ITAN)",
  "PDTs y Formularios vigentes",
  "Conciliaciones bancarias",
  "Estados financieros mensuales",
  "Asesoría tributaria permanente",
];

const stats = [
  { value: "200+", label: "Empresas confiadas" },
  { value: "99%", label: "Declaraciones a tiempo" },
  { value: "0", label: "Multas por retraso" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function Accounting() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();

  return (
    <section id="contabilidad" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Contabilidad Integral
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy"
          >
            Terceriza tu contabilidad con{" "}
            <span className="text-emerald">expertos</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Enfócate en hacer crecer tu negocio. Nosotros nos encargamos de los números y el cumplimiento tributario.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-navy rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald/30 rounded-full blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald/20 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-emerald-light" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Desde S/300 al mes</h3>
                    <p className="text-white/60 text-sm">Contabilidad completa</p>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed mb-8">
                  Incluye todos los libros electrónicos, declaraciones mensuales,
                  conciliaciones y estados financieros. Todo lo que necesitas para
                  estar al día con SUNAT.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-emerald-light">{stat.value}</div>
                      <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Features */}
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="space-y-4"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <button
                onClick={() => openModal(4)}
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Cotización Personalizada
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
