"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useWhatsAppStore } from "@/lib/whatsapp";

const packages = [
  {
    name: "SAC",
    fullName: "Sociedad Anónima Cerrada",
    price: "S/ 450",
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
  },
  {
    name: "EIRL",
    fullName: "Empresa Individual de Responsabilidad Limitada",
    price: "S/ 380",
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
  },
  {
    name: "SRL",
    fullName: "Sociedad de Responsabilidad Limitada",
    price: "S/ 550",
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Constitution() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();

  return (
    <section id="constitucion" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Constitución de Empresas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy"
          >
            Empieza con pie derecho.{" "}
            <span className="text-purple">Paquetes claros</span>, sin letra pequeña.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Formaliza tu empresa de manera rápida, segura y al mejor precio.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              className={`relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm border transition-all hover:shadow-lg ${
                pkg.recommended
                  ? "pricing-recommended border-emerald shadow-md scale-[1.02] lg:scale-105"
                  : "border-gray-200"
              }`}
            >
              {/* Badge */}
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-navy">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{pkg.fullName}</p>
                <div className="mt-4">
                  <span className="text-sm text-muted-foreground">Desde</span>
                  <div className="text-4xl lg:text-5xl font-bold text-navy">{pkg.price}</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${pkg.recommended ? "text-emerald" : "text-navy/40"}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => openModal(pkg.serviceId)}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  pkg.recommended
                    ? "bg-emerald hover:bg-emerald-dark text-white shadow-md hover:shadow-lg"
                    : "bg-navy hover:bg-navy-light text-white"
                }`}
              >
                Constituir mi {pkg.name}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
