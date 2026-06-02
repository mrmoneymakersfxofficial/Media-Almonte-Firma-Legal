import type { Metadata } from "next";
import { ConstitucionPage } from "@/components/pages/ConstitucionPage";

export const metadata: Metadata = {
  title: "Constitución de Empresas en Perú | SAC, EIRL, SRL | Jhon&Asociados",
  description:
    "Constituye tu empresa con tarifas a consultar. Formamos SAC, EIRL y SRL con todo incluido: minuta, escritura pública, SUNARP, RUC, Clave SOL y libro de actas. Trámites rápidos y sin complicaciones.",
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
  openGraph: {
    title: "Constitución de Empresas | Jhon&Asociados",
    description: "Formaliza tu negocio con SAC, EIRL o SRL. Todo incluido: minuta, escritura pública, SUNARP, RUC y Clave SOL. Tarifas a consultar.",
    url: "https://jhonyasociados.com/constitucion-de-empresas",
    images: [{ url: "/og-banner-jhon.png?v=2.1", width: 1200, height: 630, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Constitución de Empresas | Jhon&Asociados",
    description: "Constituye tu empresa SAC, EIRL o SRL con todo incluido. Minuta, SUNARP, RUC y Clave SOL.",
    images: ["/og-banner-jhon.png?v=2.1"],
  },
};

export default function Page() {
  return <ConstitucionPage />;
}
