import type { Metadata } from "next";
import { ContabilidadPage } from "@/components/pages/ContabilidadPage";

export const metadata: Metadata = {
  title: "Contabilidad Integral y Tributación | Tercerización Contable | Jhon & Asociados",
  description:
    "Terceriza tu contabilidad con expertos. Libros electrónicos, SIRE, declaraciones IGV/Renta, planillas, conciliaciones bancarias y estados financieros. Desde S/350 mensuales.",
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
};

export default function Page() {
  return <ContabilidadPage />;
}
