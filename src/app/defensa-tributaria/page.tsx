import type { Metadata } from "next";
import { DefensaPage } from "@/components/pages/DefensaPage";

export const metadata: Metadata = {
  title: "Defensa Tributaria y SUNAT | Cartas Inductivas, Fiscalizaciones | Jhon & Asociados",
  description:
    "¿SUNAT te fiscalizó? Actuamos con urgencia. Atención de cartas inductivas, defensa en fiscalizaciones y negociación de cobranzas coactivas. Protege tu patrimonio.",
  keywords: [
    "defensa tributaria",
    "cartas inductivas SUNAT",
    "fiscalización SUNAT",
    "cobranza coactiva",
    "multas SUNAT",
    "reclamos tributarios",
    "defensa ante SUNAT",
  ],
};

export default function Page() {
  return <DefensaPage />;
}
