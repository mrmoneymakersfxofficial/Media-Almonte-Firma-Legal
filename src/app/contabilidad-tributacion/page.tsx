import type { Metadata } from "next";
import { ContabilidadPage } from "@/components/pages/ContabilidadPage";

export const metadata: Metadata = {
  title: "Contabilidad Integral y Tributación | Tercerización Contable | Jhon&Asociados",
  description:
    "Terceriza tu contabilidad con expertos. Libros electrónicos, SIRE, declaraciones IGV/Renta, planillas, conciliaciones bancarias y estados financieros. Tarifas a consultar.",
  keywords: [
    "contabilidad Perú",
    "tercerización contable",
    "libros electrónicos SUNAT",
    "SIRE",
    "declaración IGV",
    "declaración de renta",
    "planilla electrónica",
    "contador tributario",
  ],
  openGraph: {
    title: "Contabilidad Integral | Jhon & Asociados",
    description: "Terceriza tu contabilidad con expertos. Libros electrónicos, declaraciones mensuales, planillas y cumplimiento tributario completo.",
    url: "https://jhonyasociados.com/contabilidad-tributacion",
    images: [{ url: "/og-banner-jhon.png?v=2.1", width: 1200, height: 630, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contabilidad Integral | Jhon & Asociados",
    description: "Terceriza tu contabilidad. Libros electrónicos, SIRE, declaraciones IGV/Renta y planillas.",
    images: ["/og-banner-jhon.png?v=2.1"],
  },
};

export default function Page() {
  return <ContabilidadPage />;
}
