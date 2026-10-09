import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "Nosotros / La Firma",
  type: "document",
  icon: () => "📜",
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string", description: "Ej: QUIÉNES SOMOS" }),
    defineField({ name: "heading", title: "Título Principal", type: "string" }),
    defineField({ name: "subheading", title: "Subtítulo / Misión", type: "string" }),
    defineField({ name: "content", title: "Contenido / Historia", type: "text", rows: 6 }),
    defineField({ name: "founderName", title: "Nombre del Fundador", type: "string" }),
    defineField({ name: "founderRole", title: "Cargo del Fundador", type: "string" }),
    defineField({ name: "founderImage", title: "Foto del Fundador", type: "image", options: { hotspot: true } }),
    defineField({
      name: "pillars",
      title: "Pilares / Valores",
      type: "array",
      of: [
        {
          type: "object",
          name: "pillar",
          fields: [
            { name: "title", title: "Título", type: "string" },
            { name: "description", title: "Descripción", type: "text", rows: 2 },
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Sección Nosotros / La Firma" };
    },
  },
});
