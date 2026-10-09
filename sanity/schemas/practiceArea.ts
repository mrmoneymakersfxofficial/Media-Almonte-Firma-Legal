import { defineType, defineField } from "sanity";

export default defineType({
  name: "practiceArea",
  title: "Áreas de Práctica",
  type: "document",
  icon: () => "⚖️",
  fields: [
    defineField({ name: "title", title: "Título del Área", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "shortDescription",
      title: "Descripción Corta (Tarjetas)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "fullDescription",
      title: "Descripción Completa",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "iconType",
      title: "Ícono",
      type: "string",
      options: {
        list: [
          { title: "Escudo (Penal)", value: "shield" },
          { title: "Balanza (Civil)", value: "scale" },
          { title: "Familia / Usuarios", value: "users" },
          { title: "Mazo de Juez", value: "gavel" },
          { title: "Documento Legal", value: "fileText" },
        ],
      },
    }),
    defineField({
      name: "services",
      title: "Servicios Incluidos",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "order", title: "Orden de Aparición", type: "number" }),
  ],
  preview: {
    select: { title: "title", subtitle: "shortDescription" },
  },
});
