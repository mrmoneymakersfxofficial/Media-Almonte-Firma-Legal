import { defineType, defineField } from "sanity";

export default defineType({
  name: "faqItem",
  title: "Preguntas Frecuentes",
  type: "document",
  icon: () => "❓",
  fields: [
    defineField({ name: "question", title: "Pregunta", type: "string" }),
    defineField({ name: "answer", title: "Respuesta", type: "text", rows: 4 }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "General", value: "general" },
          { title: "Penal", value: "penal" },
          { title: "Civil", value: "civil" },
          { title: "Familia", value: "familia" },
        ],
      },
    }),
    defineField({ name: "order", title: "Orden", type: "number" }),
  ],
  preview: {
    select: { title: "question", subtitle: "category" },
  },
});
