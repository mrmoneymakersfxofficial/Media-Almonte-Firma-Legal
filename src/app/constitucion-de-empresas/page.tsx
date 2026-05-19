import type { Metadata } from "next";
import { ConstitucionPage } from "@/components/pages/ConstitucionPage";

export const metadata: Metadata = {
  title: "Constitución de Empresas en Perú | SAC, EIRL, SRL | Jhon & Asociados",
  description:
    "Constituye tu empresa desde S/380. Formamos SAC, EIRL y SRL con todo incluido: minuta, escritura pública, SUNARP, RUC, Clave SOL y libro de actas. Trámites rápidos y sin complicaciones.",
  keywords: [
    "constitución de empresas Perú",
    "constituir SAC",
    "constituir EIRL",
    "constituir SRL",
    "creación de empresa",
    "RUC",
    "SUNARP",
    "minuta de constitución",
    "formalización de negocio",
  ],
};

export default function Page() {
  return <ConstitucionPage />;
}
