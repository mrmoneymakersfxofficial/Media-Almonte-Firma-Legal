import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { sanityFetch } from "@/sanity/live";
import { PRACTICE_AREAS_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/queries";
import { ve } from "@/lib/ve";
import type { PracticeArea, SiteSettings } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Áreas de Práctica | MEDINA ALMONTE — Lawyers Firm",
  description: "Conoce nuestras áreas de especialización: Derecho Civil, Penal y Familia. Soluciones legales integrales en Perú.",
  keywords: ["áreas de práctica", "derecho civil", "derecho penal", "derecho de familia"],
};

const DEFAULT_AREAS = [
  { _id: "practiceArea-civil", name: "Derecho Civil", slug: "civil", description: "Contratos, responsabilidad civil, propiedad y resoluciones de conflictos contractuales.", icon: "⚖️" },
  { _id: "practiceArea-penal", name: "Derecho Penal", slug: "penal", description: "Defensa penal desde la detención en flagrancia, delitos de corrupción de funcionarios, lavado de activos y crimen organizado.", icon: "🛡️" },
  { _id: "practiceArea-familia", name: "Derecho de Familia", slug: "familia", description: "Divorcios, custodia, pensiones alimenticias, herencias y sucesiones.", icon: "👨‍👩‍👧‍👦" },
];

export default async function AreasDePracticaPage() {
  const [{ data: practiceAreas }, { data: siteSettings }] = await Promise.all([
    sanityFetch<PracticeArea[]>({ query: PRACTICE_AREAS_QUERY }),
    sanityFetch<SiteSettings>({ query: SITE_SETTINGS_QUERY }),
  ]);

  const items =
    practiceAreas && practiceAreas.length > 0
      ? practiceAreas.map((pa, idx) => ({
          _id: pa._id,
          name: pa.title,
          slug: pa.slug,
          description: pa.shortDescription || pa.fullDescription || "",
          icon: idx === 0 ? "⚖️" : idx === 1 ? "🛡️" : "👨‍👩‍👧‍👦",
        }))
      : DEFAULT_AREAS;

  return (
    <SiteLayout siteSettings={siteSettings}>
      <section className="section-dark-gradient min-h-screen py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A961]/30 text-[#C9A961] text-sm font-medium tracking-wider uppercase mb-8">Especialidades</span>
              <h1 className="immersive-title font-bold mb-6" style={{ color: "#C9A961", fontFamily: "var(--font-playfair), serif" }}>
                Áreas de Práctica
              </h1>
              <div className="section-divider-gold mb-6" />
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Nuestro equipo de abogados especializados cubre las principales ramas del derecho para ofrecerte una defensa legal integral.
              </p>
            </div>
          </ScrollReveal>

          {/* Areas — vertical list with spacing and visual editing */}
          <div className="space-y-10 md:space-y-14">
            {items.map((area, index) => (
              <ScrollReveal key={area._id || area.slug} delay={index * 0.08}>
                <Link href={`/areas/${area.slug}`} className="block group">
                  <div className="flex items-start gap-5 md:gap-8">
                    <span className="text-3xl md:text-4xl shrink-0 mt-1">{area.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="immersive-title font-semibold mb-2 group-hover:text-[#C9A961] transition-colors cursor-pointer"
                        style={{ color: "#fff", fontFamily: "var(--font-playfair), serif", WebkitLineClamp: 2 }}
                        {...ve(area._id, "practiceArea", "title")}
                      >
                        {area.name}
                      </h3>
                      <p
                        className="immersive-desc text-gray-400 leading-relaxed cursor-pointer"
                        {...ve(area._id, "practiceArea", "shortDescription")}
                      >
                        {area.description}
                      </p>
                      <span className="inline-flex items-center text-[#C9A961] text-sm font-medium mt-3 gap-2 group-hover:gap-3 transition-all duration-300">
                        Conocer más
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {index < items.length - 1 && <hr className="subtle-divider mt-10 md:mt-14" />}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}