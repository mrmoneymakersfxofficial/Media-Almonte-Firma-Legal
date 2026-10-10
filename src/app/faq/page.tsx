import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import FAQClient from "./FAQClient";
import { sanityFetch } from "@/sanity/live";
import { FAQ_ITEMS_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/queries";
import type { FaqItem, SiteSettings } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | MEDINA ALMONTE — Lawyers Firm",
  description:
    "Encuentra respuestas a las consultas más comunes sobre nuestros servicios legales en Perú. Consultas legales ilimitadas luego de la contratación, áreas de práctica, tiempos de proceso y más.",
  keywords: [
    "preguntas frecuentes",
    "FAQ abogados",
    "consulta legal Perú",
    "dudas legales",
    "abogados Lima FAQ",
  ],
  openGraph: {
    title: "Preguntas Frecuentes | MEDINA ALMONTE — Lawyers Firm",
    description:
      "Resuelve tus dudas sobre nuestros servicios legales. Ofrecemos consultas legales ilimitadas luego de la contratación profesional.",
    url: "https://medinaalmontelawyers.com/faq",
  },
};

export default async function FAQPage() {
  const [{ data: faqs }, { data: siteSettings }] = await Promise.all([
    sanityFetch<FaqItem[]>({ query: FAQ_ITEMS_QUERY }),
    sanityFetch<SiteSettings>({ query: SITE_SETTINGS_QUERY }),
  ]);

  return (
    <SiteLayout siteSettings={siteSettings}>
      <FAQClient faqs={faqs} />
    </SiteLayout>
  );
}