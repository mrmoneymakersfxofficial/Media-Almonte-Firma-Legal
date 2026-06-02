import type { Metadata } from "next";
import { NosotrosPage } from "@/components/pages/NosotrosPage";

export const metadata: Metadata = {
  title: "Nosotros | Jhon&Asociados - Firma de Asesoría Tributaria en Perú",
  description:
    "Conoce a Jhon&Asociados, firma líder en asesoría tributaria y contable en Perú. Transparencia, tecnología y resultados medibles. Más de 20 años de experiencia.",
  keywords: [
    "Jhon y Asociados",
    "firma contable Perú",
    "asesores tributarios Lima",
    "contadores profesionales Perú",
    "estudio contable",
  ],
  openGraph: {
    title: "Nosotros | Jhon&Asociados",
    description: "Más de 20 años protegiendo patrimonios en el Perú. Transparencia, tecnología y resultados medibles. Agenda tu consulta gratuita.",
    url: "https://jhonyasociados.com/nosotros-contacto",
    images: [{ url: "/og-banner-jhon.png?v=2.1", width: 1200, height: 630, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros | Jhon&Asociados",
    description: "Firma líder en asesoría tributaria y contable en Perú. Más de 20 años de experiencia. Consulta gratuita.",
    images: ["/og-banner-jhon.png?v=2.1"],
  },
};

export default function Page() {
  return <NosotrosPage />;
}
