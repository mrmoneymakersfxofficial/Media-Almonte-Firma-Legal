import { defineType, defineField } from "sanity";

export default defineType({
  name: "lawyer",
  title: "Equipo Legal / Abogados",
  type: "document",
  icon: () => "👨‍⚖️",
  fields: [
    defineField({ name: "name", title: "Nombre Completo", type: "string" }),
    defineField({ name: "role", title: "Cargo (ej. Socio Fundador)", type: "string" }),
    defineField({ name: "specialty", title: "Especialidad Jurídica", type: "string" }),
    defineField({ name: "colegiateNumber", title: "Registro de Colegiatura", type: "string" }),
    defineField({ name: "bio", title: "Biografía / Trayectoria", type: "text", rows: 4 }),
    defineField({ name: "image", title: "Fotografía Profesional", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Orden", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "image" },
  },
});
