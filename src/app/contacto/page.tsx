import type { Metadata } from "next";
import { SiteLayout } from "@/components/SiteLayout";
import ContactFormClient from "./ContactFormClient";

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
      "Escríbenos y recibe asesoría legal profesional. Tu primera consulta es gratuita.",
    url: "https://medinaalmonte.com/contacto",
  },
};

export default function ContactoPage() {
  return (
    <SiteLayout>
      <ContactFormClient />
    </SiteLayout>
  );
}