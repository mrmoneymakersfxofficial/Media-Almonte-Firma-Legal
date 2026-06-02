import type { Metadata } from "next";
import { DefensaPage } from "@/components/pages/DefensaPage";

export const metadata: Metadata = {
  title: "Asesoría Tributaria y SUNAT | Cartas Inductivas, Fiscalizaciones | Jhon&Asociados",
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
  openGraph: {
    title: "Defensa Tributaria Urgente | Jhon&Asociados",
    description: "Atención urgente de cartas inductivas, fiscalizaciones SUNAT y cobranzas coactivas. Escudo legal y tributario para proteger tu patrimonio.",
    url: "https://jhonyasociados.com/defensa-tributaria-sunat",
    images: [{ url: "/og-banner-jhon.png?v=2.1", width: 1200, height: 630, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Defensa Tributaria Urgente | Jhon&Asociados",
    description: "¿SUNAT te fiscalizó? Atención urgente de cartas inductivas, fiscalizaciones y cobranza coactiva.",
    images: ["/og-banner-jhon.png?v=2.1"],
  },
};

export default function Page() {
  return <DefensaPage />;
}
