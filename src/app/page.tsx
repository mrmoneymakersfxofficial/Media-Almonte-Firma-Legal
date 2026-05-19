"use client";

import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Calculator, Shield, CheckCircle2, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useWhatsAppStore } from "@/lib/whatsapp";
import { SectionDivider } from "@/components/SectionDivider";

function QuickSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { openModal } = useWhatsAppStore();

  const pages = [
    {
      href: "/constitucion-de-empresas",
      icon: Building2,
      title: "Constitución de Empresas",
      desc: "Formaliza tu negocio desde S/380. SAC, EIRL, SRL con todo incluido: minuta, RUC, Clave SOL.",
      color: "bg-emerald/10 text-emerald",
      price: "Desde S/ 380",
    },
    {
      href: "/contabilidad-tributacion",
      icon: Calculator,
      title: "Contabilidad y Tributación",
      desc: "Tercerización contable completa. Libros electrónicos, SIRE, declaraciones y estados financieros.",
      color: "bg-navy/10 text-navy",
      price: "Desde S/ 350/mes",
    },
    {
      href: "/defensa-tributaria-sunat",
      icon: Shield,
      title: "Defensa Tributaria y SUNAT",
      desc: "Atención urgente de cartas inductivas, fiscalizaciones y cobranzas coactivas de SUNAT.",
      color: "bg-urgent/10 text-urgent",
      price: "Atención inmediata",
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-emerald font-semibold text-sm tracking-wider uppercase mb-4">
            Nuestros Servicios Especializados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
            Soluciones integrales para tu{" "}
            <span className="text-purple">empresa</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Haz clic en cada servicio para ver el detalle completo, precios y proceso de contratación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pages.map((page, i) => {
            const Icon = page.icon;
            return (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              >
                <Link href={page.href} className="group block bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-emerald/30 hover:shadow-lg transition-all h-full">
                  <div className={`w-14 h-14 ${page.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{page.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{page.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-emerald">{page.price}</span>
                    <span className="inline-flex items-center text-emerald font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Ver más <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 rounded-2xl p-8 lg:p-12 text-white text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #002350 0%, #481180 50%, #008775 100%)" }}
        >
          {/* Decorative */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 relative">¿Necesitas orientación personalizada?</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto text-sm sm:text-base relative">
            Conversemos por WhatsApp y te recomendamos el servicio ideal según tu situación.
            Sin costo, sin compromiso.
          </p>
          <button
            onClick={() => openModal()}
            className="relative inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-[15px] sm:text-lg font-bold transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-xl active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            Consultoría Gratuita por WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <SectionDivider from="#001528" to="#f9fafb" />
      <Services />
      <SectionDivider from="#f9fafb" to="#ffffff" />
      <QuickSection />
    </SiteLayout>
  );
}
