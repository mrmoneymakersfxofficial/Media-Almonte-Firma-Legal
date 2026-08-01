import type { Metadata } from "next";
import { LibroDeReclamacionesClient } from "./LibroDeReclamacionesClient";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones | Medina Almonte — Lawyers Firm",
  description:
    "Libro de Reclamaciones de Medina Almonte — Lawyers Firm. Ejercer su derecho a presentar una queja o reclamo conforme a la legislación peruana.",
  robots: { index: true, follow: true },
};

export default function LibroDeReclamacionesPage() {
  return <LibroDeReclamacionesClient />;
}