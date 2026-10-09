import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configuración General",
  type: "document",
  icon: () => "⚙️",
  fields: [
    defineField({ name: "title", title: "Título del Sitio / SEO", type: "string" }),
    defineField({ name: "companyName", title: "Nombre de la Firma", type: "string" }),
    defineField({ name: "tagline", title: "Lema Principal", type: "string" }),
    defineField({ name: "description", title: "Descripción SEO", type: "text", rows: 3 }),
    defineField({ name: "phone", title: "Teléfono", type: "string" }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp (con código de país)",
      type: "string",
      description: "Ej: +51 977 186 734 o 51977186734",
    }),
    defineField({ name: "email", title: "Correo Electrónico Oficial", type: "string" }),
    defineField({ name: "address", title: "Dirección / Ubicación", type: "string" }),
    defineField({ name: "schedule", title: "Horario de Atención", type: "string" }),
    defineField({
      name: "nav",
      title: "Menú de Navegación",
      type: "array",
      of: [
        {
          type: "object",
          name: "navItem",
          title: "Ítem de Navegación",
          fields: [
            { name: "label", title: "Etiqueta", type: "string" },
            { name: "url", title: "Enlace (URL)", type: "string" },
          ],
          preview: {
            select: { title: "label", subtitle: "url" },
          },
        },
      ],
    }),
    defineField({
      name: "social",
      title: "Redes Sociales",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialItem",
          title: "Red Social",
          fields: [
            { name: "platform", title: "Plataforma (Instagram, Facebook, etc.)", type: "string" },
            { name: "url", title: "Enlace URL", type: "url" },
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        },
      ],
    }),
    defineField({ name: "logo", title: "Logo de la Firma", type: "image", options: { hotspot: true } }),
    defineField({ name: "ogImage", title: "Banner Open Graph", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    prepare() {
      return { title: "Configuración General del Sitio" };
    },
  },
});
