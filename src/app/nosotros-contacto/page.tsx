import type { Metadata } from "next";
import { NosotrosPage } from "@/components/pages/NosotrosPage";

export const metadata: Metadata = {
  title: "Nosotros | Jhon & Asociados - Firma de Asesoría Tributaria en Perú",
  description:
    "Conoce a Jhon & Asociados, firma líder en asesoría tributaria y contable en Perú. Transparencia, tecnología y resultados medibles. +500 empresas confían en nosotros.",
  keywords: [
    "Jhon y Asociados",
    "firma contable Perú",
    "asesores tributarios Lima",
    "contadores profesionales Perú",
    "estudio contable",
  ],
};

export default function Page() {
  return <NosotrosPage />;
}
