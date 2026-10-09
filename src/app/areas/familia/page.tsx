import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { sanityFetch } from "@/sanity/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries";
import { ve } from "@/lib/ve";
import type { PracticeArea, SiteSettings } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Derecho de Familia | MEDINA ALMONTE — Lawyers Firm",
  description:
    "Derecho de Familia: divorcios, custodia, pensiones alimenticias, tenencia, herencias y sucesiones en Perú.",
  keywords: [
    "derecho de familia Perú",
    "divorcio",
    "custodia",
    "pensión alimenticia",
    "herencias",
    "sucesiones",
  ],
};

const FAMILIA_QUERY = `*[_type == "practiceArea" && slug.current == "familia"][0]{
  _id,
  _type,
  title,
  "slug": slug.current,
  shortDescription,
  fullDescription,
  services
}`;

export default async function FamiliaPage() {
  const [{ data: area }, { data: siteSettings }] = await Promise.all([
    sanityFetch<PracticeArea>({ query: FAMILIA_QUERY }),
    sanityFetch<SiteSettings>({ query: SITE_SETTINGS_QUERY }),
  ]);

  const docId = area?._id || "practiceArea-familia";
  const title = area?.title || "Derecho de Familia";
  const description =
    area?.fullDescription ||
    area?.shortDescription ||
    "Entendemos que los asuntos de familia requieren sensibilidad, confidencialidad y un trato humano. Acompañamos a nuestros clientes en procesos de divorcio, separación, custodia de menores, pensiones alimenticias, régimen de visitas y sucesiones testamentarias. Nuestro equipo busca siempre soluciones que protejan el bienestar de todas las partes involucradas.";

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
              href="https://api.whatsapp.com/send?phone=51977186734&text=Hola%2C%20necesito%20una%20consulta%20legal%20en%20Derecho%20de%20Familia%20-%20MEDINA%20ALMONTE%20Lawyers%20Firm."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold gpu-accelerated cursor-pointer"
            >
              Consulta Legal en Derecho de Familia
            </a>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}