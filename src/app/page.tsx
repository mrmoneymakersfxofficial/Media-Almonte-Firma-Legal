import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SectionDivider } from "@/components/SectionDivider";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Scale,
  ShieldCheck,
  FileText,
  Handshake,
  Heart,
  ArrowRight,
  Shield,
  Landmark,
  BookOpen,
  ScaleIcon,
  TrendingUp,
  UserCheck,
  Clock,
  DollarSign,
} from "lucide-react";
import { sanityFetch } from "@/sanity/live";
import {
  SITE_SETTINGS_QUERY,
  HERO_SETTINGS_QUERY,
  ABOUT_SECTION_QUERY,
  PRACTICE_AREAS_QUERY,
  TESTIMONIALS_QUERY,
} from "@/sanity/queries";
import { ve } from "@/lib/ve";
import type {
  SiteSettings,
  HeroSettings,
  AboutSection,
  PracticeArea,
  Testimonial,
} from "@/sanity/types";

/* ════════════════════════════════════════════════════════════════
   SECTION: ¿QUIÉNES SOMOS?
   ════════════════════════════════════════════════════════════════ */
function WhoWeAre({ aboutSection }: { aboutSection?: AboutSection }) {
  const badge = aboutSection?.badge || "Sobre Nosotros";
  const heading = aboutSection?.heading || "Más que Abogados,";
  const subheading = aboutSection?.subheading || "tu Principal Estratega Legal";
  const content =
    aboutSection?.content ||
    "En MEDINA ALMONTE — Lawyers Firm entendemos que cada caso es único. Por eso, diseñamos defensas a medida, con un enfoque humano y una estrategia jurídica impecable. Representamos tus intereses con la firmeza y la ética que tu situación requiere.";

  const defaultValues = [
    {
      icon: Scale,
      title: "Ética y Transparencia",
      description:
        "Actuamos con honestidad en cada paso. Sin letras chicas ni sorpresas. Cada decisión la tomamos contigo, con total claridad sobre costos, plazos y probabilidades de éxito en tu caso.",
    },
    {
      icon: ShieldCheck,
      title: "Defensa Agresiva",
      description:
        "Protegemos tus derechos sin titubeos, con la firmeza que tu caso requiere. Nuestro equipo litiga con estrategia probada, preparación exhaustiva y una red de contactos profesionales (peritos especializados: Medicina Legal, Grafotecnico, Antrometrica, psicologica y otros) que fortalece tu posición.",
    },
    {
      icon: Handshake,
      title: "Cercanía y Confianza",
      description:
        "Estamos contigo en cada etapa del proceso, comunicando cada avance. No quedas solo en ningún momento — recibes actualizaciones periódicas y acceso directo a tu abogado asignado.",
    },
  ];

  const pillars =
    aboutSection?.pillars && aboutSection.pillars.length > 0
      ? aboutSection.pillars.map((p, i) => ({
          icon: i === 0 ? Scale : i === 1 ? ShieldCheck : Handshake,
          title: p.title,
          description: p.description,
        }))
      : defaultValues;

  return (
    <section id="nosotros" className="py-20 lg:py-28 section-dark-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <ScrollReveal>
            <div>
              <span
                className="inline-block text-[#8B6F47] font-semibold text-sm tracking-wider uppercase mb-4 cursor-pointer"
                {...ve("aboutSection", "aboutSection", "badge")}
              >
                {badge}
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.15] mb-6"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                <span
                  className="cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #D4C4B0, #C9A961)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  {...ve("aboutSection", "aboutSection", "heading")}
                >
                  {heading}
                </span>
                <br />
                <span
                  className="text-white cursor-pointer"
                  {...ve("aboutSection", "aboutSection", "subheading")}
                >
                  {subheading}
                </span>
              </h2>
              <p
                className="text-gray-400 leading-relaxed mb-8 text-base sm:text-lg cursor-pointer"
                {...ve("aboutSection", "aboutSection", "content")}
              >
                {content}
              </p>
              <Link
                href="/abogados"
                className="btn-gold-primary inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-[15px] font-bold gpu-accelerated cursor-pointer"
              >
                Conoce a Nuestro Equipo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Valores / Pilares */}
          <div className="space-y-5">
            {pillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={0.12 * i} duration={0.6}>
                  <div className="card-premium gold-border-gradient rounded-2xl p-6 sm:p-7 flex items-start gap-5 group">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-[#C9A961]/10 flex items-center justify-center icon-glow transition-all duration-300 group-hover:bg-[#C9A961]/15 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-[#C9A961]" />
                    </div>
                    <div>
                      <h3
                        className="text-white font-bold text-lg mb-1.5 cursor-pointer"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                        {...ve("aboutSection", "aboutSection", `pillars[${i}].title`)}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-gray-400 text-sm sm:text-[15px] leading-relaxed cursor-pointer"
                        {...ve("aboutSection", "aboutSection", `pillars[${i}].description`)}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION: ÁREAS DE PRÁCTICA (GRID) — Premium Cards
   ════════════════════════════════════════════════════════════════ */
function PracticeAreas({ practiceAreas }: { practiceAreas?: PracticeArea[] }) {
  const defaultAreas = [
    {
      _id: "practiceArea-civil",
      icon: FileText,
      title: "Derecho Civil",
      shortDescription:
        "Defendemos tus derechos en conflictos contractuales, propiedad, herencias y responsabilidad civil con estrategia probada.",
      cta: "Asesoría Civil",
      href: "/areas/civil",
    },
    {
      _id: "practiceArea-penal",
      icon: ShieldCheck,
      title: "Derecho Penal",
      shortDescription:
        "Te representamos ante cualquier imputación o investigación penal. Defendemos tu libertad y tu buen nombre.",
      cta: "Defensa Penal",
      href: "/areas/penal",
    },
    {
      _id: "practiceArea-familia",
      icon: Heart,
      title: "Derecho de Familia",
      shortDescription:
        "Te acompañamos en procesos de divorcio, custodia, pensiones alimenticias y sucesiones con total discreción.",
      cta: "Familia y Sucesiones",
      href: "/areas/familia",
    },
  ];

  const items =
    practiceAreas && practiceAreas.length > 0
      ? practiceAreas.map((pa, idx) => ({
          _id: pa._id,
          icon: idx === 0 ? FileText : idx === 1 ? ShieldCheck : Heart,
          title: pa.title,
          shortDescription:
            pa.shortDescription ||
            "Defensa y asesoría legal personalizada con enfoque estratégico y ético.",
          cta: `Asesoría en ${pa.title}`,
          href: `/areas/${pa.slug || "civil"}`,
        }))
      : defaultAreas;

  return (
    <section id="areas" className="py-20 lg:py-28 section-navy-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#8B6F47] font-semibold text-sm tracking-wider uppercase mb-4">
              Áreas de Práctica
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.15] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-white">Defendemos tus Derechos en</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D4C4B0, #C9A961)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Todas las Áreas
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {items.map((area, i) => {
            const Icon = area.icon;
            return (
              <ScrollReveal key={area._id || area.title} delay={0.08 * i} duration={0.6}>
                <Link href={area.href} className="block group h-full">
                  <div className="practice-card-premium gold-border-gradient rounded-2xl p-7 sm:p-8 h-full relative">
                    <div className="w-14 h-14 rounded-xl bg-[#C9A961]/10 flex items-center justify-center mb-5 icon-glow transition-all duration-300 group-hover:bg-[#C9A961]/15 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-[#C9A961]" />
                    </div>
                    <h3
                      className="text-white font-bold text-lg sm:text-xl mb-3 cursor-pointer"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                      {...ve(area._id, "practiceArea", "title")}
                    >
                      {area.title}
                    </h3>
                    <p
                      className="text-gray-400 text-sm leading-relaxed mb-6 cursor-pointer"
                      {...ve(area._id, "practiceArea", "shortDescription")}
                    >
                      {area.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#C9A961] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      {area.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION: MEMBRESÍAS Y CERTIFICACIONES
   ════════════════════════════════════════════════════════════════ */
const memberships = [
  { icon: ScaleIcon, name: "Colegio de Abogados del Callao", short: "CAC", url: "https://www.cacallao.org.pe/" },
  { icon: Landmark, name: "Ministerio de Justicia", short: "MINJUS", url: "https://www.gob.pe/minjus" },
  { icon: Shield, name: "Tribunal Constitucional", short: "TC", url: "https://www.tc.gob.pe/" },
  { icon: BookOpen, name: "Poder Judicial del Perú", short: "PJ", url: "https://www.pj.gob.pe/" },
  { icon: Scale, name: "Colegio de Abogados del Callao", short: "CAC", url: "https://www.cacallao.org.pe/" },
];

function MembershipsBar() {
  return (
    <section className="py-16 lg:py-20 section-navy-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-[#8B6F47] font-semibold text-sm tracking-wider uppercase mb-4">
              Confían en Nosotros
            </span>
            <h2
              className="text-2xl sm:text-3xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-white">Membresías y</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D4C4B0, #C9A961)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Certificaciones
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-14 justify-center flex-wrap md:flex-nowrap overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide">
            {memberships.map((m, idx) => {
              const Icon = m.icon;
              return (
                <a
                  key={`${m.short}-${idx}`}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 min-w-[120px] shrink-0 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center transition-all duration-300 group-hover:scale-105 gpu-accelerated">
                    <Icon className="w-7 h-7 text-[#C9A961]" />
                  </div>
                  <p className="text-white/70 text-sm font-medium leading-tight text-center group-hover:text-white transition-colors">
                    {m.name}
                  </p>
                </a>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   SECTION: ¿POR QUÉ ELEGIRNOS? — Lucide Icons
   ════════════════════════════════════════════════════════════════ */
function WhyChooseUs() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Experiencia en Litigios",
      description:
        "Hemos representado a cientos de clientes en cortes y tribunales, obteniendo resoluciones favorables en el 92% de los casos. Nuestra experiencia se traduce en estrategia y resultados.",
    },
    {
      icon: UserCheck,
      title: "Equipo Multidisciplinario",
      description:
        "Abogados especializados trabajando de forma coordinada para abordar cada caso desde todas las perspectivas jurídicas. Colaboración que marca la diferencia.",
    },
    {
      icon: Clock,
      title: "Acompañamiento Constante",
      description:
        "Te explicamos cada paso y te damos certeza jurídica. No quedas solo en ningún momento del proceso — comunicación transparente y constante.",
    },
    {
      icon: DollarSign,
      title: "Honorarios Transparentes",
      description:
        "Sin letras chicas ni costos ocultos. Sabes desde el primer momento cuánto invertirás en tu defensa. Opciones de pago flexibles disponibles.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0F0F0F] relative overflow-hidden">
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] gpu-accelerated"
        style={{
          background: "radial-gradient(circle, rgba(11,26,46,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] gpu-accelerated"
        style={{
          background: "radial-gradient(circle, rgba(184,115,51,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-[#8B6F47] font-semibold text-sm tracking-wider uppercase mb-4">
              Nuestra Diferencia
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.15]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-white">Una Firma Legal con</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D4C4B0, #C9A961)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Enfoque Estratégico
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={reason.title} delay={0.08 * i} duration={0.6}>
                <div className="card-premium gold-border-gradient rounded-2xl p-7 sm:p-8 h-full group relative overflow-hidden">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A961]/10 flex items-center justify-center mb-5 icon-glow transition-all duration-300 group-hover:bg-[#C9A961]/15 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-[#C9A961]" />
                  </div>
                  <h3
                    className="text-white font-bold text-lg sm:text-xl mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Final — Premium Gradient Button */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <Link
              href="/contacto"
              className="btn-gold-primary inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-xl text-[15px] sm:text-lg font-bold gpu-accelerated cursor-pointer"
            >
              Agenda una Cita
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   HOME PAGE (Server Component)
   ════════════════════════════════════════════════════════════════ */
export default async function Home() {
  const [
    { data: siteSettings },
    { data: heroSettings },
    { data: aboutSection },
    { data: practiceAreas },
    { data: testimonials },
  ] = await Promise.all([
    sanityFetch<SiteSettings>({ query: SITE_SETTINGS_QUERY }),
    sanityFetch<HeroSettings>({ query: HERO_SETTINGS_QUERY }),
    sanityFetch<AboutSection>({ query: ABOUT_SECTION_QUERY }),
    sanityFetch<PracticeArea[]>({ query: PRACTICE_AREAS_QUERY }),
    sanityFetch<Testimonial[]>({ query: TESTIMONIALS_QUERY }),
  ]);

  return (
    <SiteLayout siteSettings={siteSettings}>
      <Hero heroSettings={heroSettings} />
      <SectionDivider from="#0F0F0F" to="#0F0F0F" />

      {/* ¿Quiénes Somos? */}
      <WhoWeAre aboutSection={aboutSection} />

      <SectionDivider from="#0F0F0F" to="#1B2A49" />

      {/* Áreas de Práctica (Grid) */}
      <PracticeAreas practiceAreas={practiceAreas} />

      <SectionDivider from="#1B2A49" to="#0F0F0F" />

      {/* Testimonios */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Membresías y Certificaciones */}
      <MembershipsBar />

      <SectionDivider from="#1B2A49" to="#0F0F0F" />

      {/* ¿Por qué Elegirnos? */}
      <WhyChooseUs />
    </SiteLayout>
  );
}