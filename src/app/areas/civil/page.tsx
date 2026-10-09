import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { sanityFetch } from "@/sanity/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries";
import { ve } from "@/lib/ve";
import type { PracticeArea, SiteSettings } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Derecho Civil | MEDINA ALMONTE — Lawyers Firm",
  description:
    "Especialistas en Derecho Civil: contratos, responsabilidad civil, propiedad, obligaciones y resoluciones de conflictos contractuales en Perú.",
  keywords: [
    "derecho civil Perú",
    "contratos",
    "responsabilidad civil",
    "propiedad",
    "obligaciones",
  ],
};

const CIVIL_QUERY = `*[_type == "practiceArea" && slug.current == "civil"][0]{
  _id,
  _type,
  title,
  "slug": slug.current,
  shortDescription,
  fullDescription,
  services
}`;

export default async function CivilPage() {
  const [{ data: area }, { data: siteSettings }] = await Promise.all([
    sanityFetch<PracticeArea>({ query: CIVIL_QUERY }),
    sanityFetch<SiteSettings>({ query: SITE_SETTINGS_QUERY }),
  ]);

  const docId = area?._id || "practiceArea-civil";
  const title = area?.title || "Derecho Civil";
  const description =
    area?.fullDescription ||
    area?.shortDescription ||
    "Nuestro equipo de Derecho Civil cuenta con amplia experiencia en la redacción, revisión y negociación de contratos, así como en la resolución de controversias vinculadas a obligaciones, derechos reales, responsabilidad civil extracontractual y todo tipo de litigios civiles. Protegemos los intereses patrimoniales y personales de nuestros clientes con un enfoque estratégico y personalizado.";

  return (
    <SiteLayout siteSettings={siteSettings}>
      <section className="section-navy-gradient min-h-screen py-24 px-4">
        <div className="max-w-4xl mx-auto text-center glass-card gold-border-gradient rounded-2xl p-6 sm:p-8">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A961]/30 text-[#C9A961] text-sm font-medium tracking-wider uppercase mb-8">
              Área de Práctica
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cursor-pointer"
              style={{
                color: "#C9A961",
                fontFamily: "var(--font-playfair), serif",
              }}
              {...ve(docId, "practiceArea", "title")}
            >
              {title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 cursor-pointer"
              {...ve(docId, "practiceArea", "fullDescription")}
            >
              {description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a
              href="https://api.whatsapp.com/send?phone=51977186734&text=Hola%2C%20necesito%20una%20consulta%20legal%20en%20Derecho%20Civil%20-%20MEDINA%20ALMONTE%20Lawyers%20Firm."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold gpu-accelerated cursor-pointer"
            >
              Consulta Legal en Derecho Civil
            </a>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}