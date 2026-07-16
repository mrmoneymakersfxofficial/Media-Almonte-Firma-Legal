import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Shield, Users, Target, Award, Scale, BookOpen,
  Crown, Briefcase, GraduationCap, Landmark, Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "La Firma | Medina Almonte — Lawyers Firm",
  description:
    "Conoce Medina Almonte — Lawyers Firm. Especialistas en Derecho Penal, Familia y Civil en Perú.",
  keywords: [
    "Medina Almonte",
    "firma legal Perú",
    "Eduardo Medina Almonte",
    "abogado penal Perú",
    "estudio jurídico Lima",
  ],
};

const values = [
  {
    icon: Shield,
    title: "Ética Profesional",
    description: "Cada acción se rige por los más altos estándares éticos, garantizando transparencia y confianza en la relación con nuestros clientes.",
  },
  {
    icon: Target,
    title: "Enfoque Estratégico",
    description: "Diseñamos estrategias legales personalizadas que maximizan las probabilidades de éxito en cada caso, con una visión integral del derecho.",
  },
  {
    icon: Users,
    title: "Compromiso con el Cliente",
    description: "Cada caso recibe atención dedicada y seguimiento constante. Mantenemos comunicación transparente durante todo el proceso.",
  },
  {
    icon: Award,
    title: "Formación y Experiencia",
    description: "Más de 10 años de servicio en el Poder Judicial y el Ministerio Público del Perú, complementados con estudios de posgrado en materia penal.",
  },
  {
    icon: Scale,
    title: "Justicia Accesible",
    description: "Ofrecemos planes de pago flexibles y la primera consulta sin costo, porque creemos que todos merecen una defensa de calidad.",
  },
  {
    icon: BookOpen,
    title: "Actualización Permanente",
    description: "Combinamos la experiencia institucional con formación continua, pasantías nacionales e internacionales, y docencia universitaria.",
  },
];

export default function FirmaPage() {
  return (
    <SiteLayout>
      {/* ═══════════════════════════════════════════════════════════════
          FUNDADOR — Eduardo Medina Almonte
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #0A0A0A 0%, #0d1117 40%, #0B1A2E 70%, #0A0A0A 100%)",
        }}
      >
        {/* Decorative ambient */}
        <div
          className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full blur-[160px] gpu-accelerated"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full blur-[120px] gpu-accelerated"
          style={{
            background:
              "radial-gradient(circle, rgba(184,115,51,0.04) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
              {/* Avatar */}
              <div className="shrink-0">
                <div className="relative">
                  {/* Outer glow ring */}
                  <div
                    className="absolute -inset-4 rounded-full gpu-accelerated"
                    style={{
                      background:
                        "conic-gradient(from 0deg, rgba(212,175,55,0.3), rgba(184,115,51,0.1), rgba(212,175,55,0.3))",
                      filter: "blur(20px)",
                    }}
                    aria-hidden="true"
                  />
                  {/* Gold border ring */}
                  <div
                    className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(184,115,51,0.1))",
                      border: "2px solid rgba(212,175,55,0.3)",
                    }}
                  >
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#0A0A0A] flex items-center justify-center">
                      <span
                        className="text-5xl sm:text-6xl font-bold"
                        style={{
                          fontFamily: "var(--font-playfair), serif",
                          background:
                            "linear-gradient(135deg, #c9a961, #d4af37, #B87333)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        EM
                      </span>
                    </div>
                  </div>
                  {/* CEO badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                    <div
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg gpu-accelerated"
                      style={{
                        background:
                          "linear-gradient(135deg, #D4AF37, #B87333)",
                        color: "#0A0A0A",
                        boxShadow: "0 4px 20px rgba(212,175,55,0.3)",
                      }}
                    >
                      <Crown className="w-3 h-3" />
                      Fundador
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="text-center lg:text-left flex-1">
                <ScrollReveal delay={0.1}>
                  <h1
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-2"
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      background:
                        "linear-gradient(135deg, #c9a961, #d4af37, #B87333)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Dr. Eduardo Medina Almonte
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                  <p className="text-[#B87333] font-semibold text-base sm:text-lg mb-6 tracking-wide">
                    Fundador — Medina Almonte Lawyers Firm
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="subtle-divider mb-6" />
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                    Abogado que actualmente ejerce la profesión legal, tras una
                    destacada trayectoria como servidor público del{" "}
                    <strong className="text-white">Poder Judicial</strong> y del{" "}
                    <strong className="text-white">Ministerio Público</strong>,
                    donde desempeñó funciones durante más de 10 años. Es miembro
                    activo del Colegio de Abogados del Callao. Cuenta con estudios
                    de posgrado en materia penal y ha realizado pasantías
                    nacionales e internacionales, incluyendo una en Colombia.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <p className="text-gray-400 text-base leading-relaxed mb-8">
                    Ha impartido clases en la Pontificia Universidad Católica del
                    Perú (PUCP). Su enfoque profesional se centra en Derecho
                    Penal, Derecho de Familia y Derecho Civil.
                  </p>
                </ScrollReveal>

                {/* Credentials */}
                <ScrollReveal delay={0.35}>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {[
                      { icon: GraduationCap, text: "Posgrado en Materia Penal" },
                      { icon: Landmark, text: "Poder Judicial — 10+ Años" },
                      { icon: Scale, text: "Ministerio Público" },
                      { icon: GraduationCap, text: "Docencia PUCP" },
                      { icon: Globe, text: "Pasantía Internacional (Colombia)" },
                      { icon: Award, text: "Colegio de Abogados del Callao" },
                    ].map((cred) => {
                      const Icon = cred.icon;
                      return (
                        <div
                          key={cred.text}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-white/70 border border-white/[0.08] bg-white/[0.03]"
                        >
                          <Icon className="w-3.5 h-3.5 text-[#D4AF37]/70" />
                          {cred.text}
                        </div>
                      );
                    })}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ABOUT THE FIRM
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-dark-gradient py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-8">
                Sobre Nosotros
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1
                className="immersive-title font-bold mb-6"
                style={{
                  color: "#D4AF37",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Medina Almonte — Lawyers Firm
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="section-divider-gold mb-6" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2
                className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-10"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Más que Abogados, tu Principal Estratega Legal
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Medina Almonte — Lawyers Firm es un estudio jurídico con sede
                en Lima, Perú, dedicado a brindar soluciones legales
                estratégicas en Derecho Penal, Derecho de Familia y Derecho
                Civil. Fundada por el Dr. Eduardo Medina Almonte, quien
                aporta más de una década de experiencia como servidor público
                del Poder Judicial y del Ministerio Público, la firma combina
                una profunda conocimiento institucional con un enfoque
                moderno del ejercicio profesional privado.
              </p>
            </ScrollReveal>
          </div>

          {/* Values */}
          <ScrollReveal delay={0.2}>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium tracking-wider uppercase">
                Nuestros Valores
              </span>
            </div>
          </ScrollReveal>

          <div className="firma-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={0.1 * (index + 1)}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mt-0.5">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className="text-white font-bold text-base mb-2"
                        style={{
                          fontFamily: "var(--font-playfair), serif",
                        }}
                      >
                        {value.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Stats */}
          <ScrollReveal delay={0.3}>
            <div className="mt-20">
              <hr className="subtle-divider mb-12" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {[
                  {
                    number: "10+",
                    label: "Años de Servicio Público (PJ y MP)",
                  },
                  { number: "92%", label: "Casos Resueltos Favorablemente" },
                  { number: "500+", label: "Clientes Atendidos" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="immersive-stat-number mb-2">
                      {stat.number}
                    </div>
                    <p className="immersive-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}