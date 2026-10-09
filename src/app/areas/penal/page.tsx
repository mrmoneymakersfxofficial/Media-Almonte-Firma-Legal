import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { sanityFetch } from "@/sanity/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries";
import { ve } from "@/lib/ve";
import type { PracticeArea, SiteSettings } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Derecho Penal | MEDINA ALMONTE — Lawyers Firm",
  description:
    "Defensa penal especializada: detención en flagrancia, investigación preliminar, proceso penal, delitos de corrupción de funcionarios, lavado de activos y crimen organizado en Perú.",
  keywords: [
    "derecho penal Perú",
    "defensa penal",
    "delitos corrupción funcionarios",
    "lavado de activos",
    "crimen organizado",
    "abogado penalista",
    "proceso penal",
  ],
};

const PENAL_QUERY = `*[_type == "practiceArea" && slug.current == "penal"][0]{
  _id,
  _type,
  title,
  "slug": slug.current,
  shortDescription,
  fullDescription,
  services
}`;

export default async function PenalPage() {
  const [{ data: area }, { data: siteSettings }] = await Promise.all([
    sanityFetch<PracticeArea>({ query: PENAL_QUERY }),
    sanityFetch<SiteSettings>({ query: SITE_SETTINGS_QUERY }),
  ]);

  const docId = area?._id || "practiceArea-penal";
  const title = area?.title || "Derecho Penal";
  const description =
    area?.fullDescription ||
    area?.shortDescription ||
    "En el área de Derecho Penal brindamos una defensa agresiva, práctica y estratégica, desde la detención en casos de flagrancia, como en la investigación durante las etapas de los diferentes procesos penales. Otorgamos asesoría integral en delitos de corrupción de funcionarios, lavado de activos, crimen organizado, así como los diferentes tipos penales, aplicando la reserva de la información, protección de datos así como la confidencialidad y lealtad que nos caracteriza para con nuestros clientes.";

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
              href="https://api.whatsapp.com/send?phone=51977186734&text=Hola%2C%20necesito%20una%20consulta%20legal%20en%20Derecho%20Penal%20-%20MEDINA%20ALMONTE%20Lawyers%20Firm."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold gpu-accelerated cursor-pointer"
            >
              Consulta Legal en Derecho Penal
            </a>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}