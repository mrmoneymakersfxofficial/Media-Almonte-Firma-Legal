import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool, defineLocations } from "sanity/presentation";
import { schemaTypes } from "./sanity/schema";
import { STUDIO_TITLE } from "./sanity/lib/constants";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2s166aaj";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

function getSiteUrl(): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  return "http://localhost:5000";
}

const siteUrl = getSiteUrl();

const SINGLETON_TYPES = ["siteSettings", "heroSettings", "aboutSection"];

export default defineConfig({
  basePath: "/admin",
  name: "medina-almonte-cms",
  title: STUDIO_TITLE || "Medina Almonte CMS",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) => {
        return S.list()
          .title("Panel de Control")
          .items([
            // ── Singletons de Secciones Principales ──
            S.listItem()
              .title("Configuración General")
              .id("siteSettings-item")
              .icon(() => "⚙️")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Configuración General del Sitio")
              ),
            S.listItem()
              .title("Inicio / Hero Principal")
              .id("heroSettings-item")
              .icon(() => "🏛️")
              .child(
                S.document()
                  .schemaType("heroSettings")
                  .documentId("heroSettings")
                  .title("Hero y Portada")
              ),
            S.listItem()
              .title("Nosotros / La Firma")
              .id("aboutSection-item")
              .icon(() => "📜")
              .child(
                S.document()
                  .schemaType("aboutSection")
                  .documentId("aboutSection")
                  .title("Nosotros y Misión")
              ),
            S.divider(),
            // ── Colecciones de Documentos ──
            S.documentTypeListItem("practiceArea").title("Áreas de Práctica").icon(() => "⚖️"),
            S.documentTypeListItem("lawyer").title("Equipo de Abogados").icon(() => "👨‍⚖️"),
            S.documentTypeListItem("testimonial").title("Testimonios / Casos").icon(() => "⭐"),
            S.documentTypeListItem("faqItem").title("Preguntas Frecuentes").icon(() => "❓"),
          ]);
      },
    }),
    presentationTool({
      name: "presentation",
      title: "Edición Visual",
      previewUrl: {
        initial: siteUrl,
        previewMode: { enable: "/api/draft-mode/enable" },
      },
      resolve: {
        locations: {
          siteSettings: defineLocations({
            select: {},
            resolve: () => ({
              locations: [
                { title: "Inicio", href: "/" },
                { title: "Contacto", href: "/contacto" },
              ],
            }),
          }),
          heroSettings: defineLocations({
            select: {},
            resolve: () => ({
              locations: [{ title: "Inicio (Hero)", href: "/" }],
            }),
          }),
          aboutSection: defineLocations({
            select: {},
            resolve: () => ({
              locations: [
                { title: "Inicio (Nosotros)", href: "/#nosotros" },
                { title: "La Firma", href: "/firma" },
              ],
            }),
          }),
          practiceArea: defineLocations({
            select: { title: "title", slug: "slug.current" },
            resolve: (doc) => ({
              locations: [
                { title: doc?.title || "Área", href: `/areas-de-practica` },
                { title: "Inicio", href: "/#areas" },
              ],
            }),
          }),
          lawyer: defineLocations({
            select: { name: "name" },
            resolve: (doc) => ({
              locations: [{ title: doc?.name || "Abogados", href: "/abogados" }],
            }),
          }),
          testimonial: defineLocations({
            select: { clientName: "clientName" },
            resolve: (doc) => ({
              locations: [{ title: doc?.clientName || "Resultados", href: "/resultados" }],
            }),
          }),
          faqItem: defineLocations({
            select: { question: "question" },
            resolve: (doc) => ({
              locations: [{ title: doc?.question || "Preguntas", href: "/faq" }],
            }),
          }),
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
