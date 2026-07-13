import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Medina Almonte Firma Legal",
  description:
    "Encuentra respuestas a las consultas más comunes sobre nuestros servicios legales en Perú. Consultas gratuitas, áreas de práctica, tiempos de proceso y más.",
  keywords: [
    "preguntas frecuentes",
    "FAQ abogados",
    "consulta legal Perú",
    "dudas legales",
    "abogados Lima FAQ",
  ],
  openGraph: {
    title: "Preguntas Frecuentes | Medina Almonte Firma Legal",
    description:
      "Resuelve tus dudas sobre nuestros servicios legales. Tu primera consulta es gratuita.",
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