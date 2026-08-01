import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import FAQClient from "./FAQClient";

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
    url: "https://medinaalmonte.com/faq",
  },
};

export default function FAQPage() {
  return (
    <SiteLayout>
      <FAQClient />
    </SiteLayout>
  );
}