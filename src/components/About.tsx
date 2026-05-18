"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Monitor, Award, Users, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const columns = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Brindar soluciones tributarias y contables de excelencia que protejan el patrimonio de nuestros clientes y contribuyan al crecimiento sostenible de sus negocios.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Ser la firma de asesoría tributaria líder en Perú, reconocida por nuestra innovación tecnológica, especialización y compromiso con resultados medibles.",
  },
  {
    icon: Heart,
    title: "Valores",
    description: null,
  },
];

const values = [
  { label: "Honestidad", description: "Transparencia total en cada proceso y decisión." },
  { label: "Compromiso", description: "Nos dedicamos al 100% a cada caso." },
  {
    label: "Innovación Tecnológica",
    description: "Herramientas de última generación para mayor eficiencia.",
  },
  {
    label: "Especialización Permanente",
    description: "Capacitación continua para estar siempre actualizados.",
  },
];

const credentials = [
  { icon: Monitor, label: "Software contable de última generación" },
  { icon: Award, label: "Equipo certificado y especializado" },
  { icon: Users, label: "Atención personalizada y dedicada" },
  { icon: CheckCircle2, label: "Licencias y certificaciones actualizadas" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4"
          >
            Sobre Nosotros
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy"
          >
            Jhon & <span className="text-emerald">Asociados</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Transparencia, tecnología y resultados. Así trabajamos.
          </motion.p>
        </div>

        {/* Mission, Vision, Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {columns.map((col) => {
            const Icon = col.icon;
            return (
              <motion.div
                key={col.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{col.title}</h3>
                {col.description ? (
                  <p className="text-muted-foreground leading-relaxed">{col.description}</p>
                ) : (
                  <div className="space-y-3">
                    {values.map((v) => (
                      <div key={v.label} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                        <div>
                          <span className="text-sm font-semibold text-navy">{v.label}</span>
                          <p className="text-xs text-muted-foreground mt-0.5">{v.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-navy rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Contamos con:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred) => {
              const Icon = cred.icon;
              return (
                <div
                  key={cred.label}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 bg-emerald/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-light" />
                  </div>
                  <p className="text-white/80 text-sm font-medium">{cred.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
