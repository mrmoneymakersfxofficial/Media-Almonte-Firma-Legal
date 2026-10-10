import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import ContactFormClient from "./ContactFormClient";
import { sanityFetch } from "@/sanity/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries";
import type { SiteSettings } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Contacto | MEDINA ALMONTE — Lawyers Firm",
  description:
    "Contáctanos para una consulta legal inicial. Estamos disponibles para atenderte y brindarte la asesoría que necesitas en Derecho Civil, Penal, Laboral, Corporativo y de Familia.",
  keywords: [
    "contacto abogados",
    "consulta legal",
    "abogados Perú",
    "cita jurídica",
    "abogado Lima",
    "asesoría legal",
  ],
  openGraph: {
    title: "Contacto | MEDINA ALMONTE — Lawyers Firm",
    description:
      "Escríbenos y recibe asesoría legal profesional. Ofrecemos consultas legales ilimitadas luego de la contratación profesional.",
    url: "https://medinaalmontelawyers.com/contacto",
  },
};

export default async function ContactoPage() {
  const { data: siteSettings } = await sanityFetch<SiteSettings>({
    query: SITE_SETTINGS_QUERY,
  });

  return (
    <SiteLayout siteSettings={siteSettings}>
      <ContactFormClient siteSettings={siteSettings} />
    </SiteLayout>
  );
}