import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonios / Casos de Éxito",
  type: "document",
  icon: () => "⭐",
  fields: [
    defineField({ name: "clientName", title: "Nombre del Cliente", type: "string" }),
    defineField({ name: "caseType", title: "Tipo de Caso", type: "string" }),
    defineField({ name: "quote", title: "Testimonio / Reseña", type: "text", rows: 3 }),
    defineField({
      name: "rating",
      title: "Calificación (Estrellas)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({ name: "order", title: "Orden", type: "number" }),
  ],
  preview: {
    select: { title: "clientName", subtitle: "caseType" },
  },
});
