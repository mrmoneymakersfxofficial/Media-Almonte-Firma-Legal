import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroSettings",
  title: "Inicio / Hero Principal",
  type: "document",
  icon: () => "🏛️",
  fields: [
    defineField({
      name: "badge",
      title: "Badge Superior",
      type: "string",
      description: "Ej: MEDINA ALMONTE — Lawyers Firm",
    }),
    defineField({
      name: "titlePart1",
      title: "Título (Parte 1 - Dorado)",
      type: "string",
      description: "Ej: Medina Almonte",
    }),
    defineField({
      name: "titlePart2",
      title: "Título (Parte 2 - Blanco)",
      type: "string",
      description: "Ej: Firma Legal",
    }),
    defineField({
      name: "tagline",
      title: "Línea de Valor / Subtítulo",
      type: "string",
      description: "Ej: Especialistas en Derecho Penal, Familia y Civil.",
    }),
    defineField({
      name: "description",
      title: "Descripción Principal",
      type: "text",
      rows: 3,
      description: "Ej: Protegemos tus intereses con excelencia y estrategia...",
    }),
    defineField({
      name: "ctaPrimaryText",
      title: "Texto Botón Principal",
      type: "string",
      description: "Ej: Agenda tu Consulta",
    }),
    defineField({
      name: "ctaSecondaryText",
      title: "Texto Botón Secundario",
      type: "string",
      description: "Ej: Conoce Más",
    }),
    defineField({
      name: "trustBadges",
      title: "Insignias de Confianza",
      type: "array",
      of: [{ type: "string" }],
      description: "Ej: Confianza, Autoridad legal, Resultados comprobados",
    }),
    defineField({
      name: "statCounters",
      title: "Contadores de Impacto",
      type: "array",
      of: [
        {
          type: "object",
          name: "counterItem",
          title: "Contador",
          fields: [
            { name: "value", title: "Valor Numérico", type: "number" },
            { name: "suffix", title: "Sufijo (+, %, etc.)", type: "string" },
            { name: "label", title: "Etiqueta", type: "string" },
            {
              name: "icon",
              title: "Ícono",
              type: "string",
              options: {
                list: [
                  { title: "Reloj (Años)", value: "clock" },
                  { title: "Gráfica (Casos)", value: "trending" },
                  { title: "Usuarios (Clientes)", value: "users" },
                ],
              },
            },
          ],
          preview: {
            select: { title: "label", value: "value", suffix: "suffix" },
            prepare({ title, value, suffix }) {
              return { title: `${value}${suffix || ""} - ${title}` };
            },
          },
        },
      ],
    }),
    defineField({
      name: "backgroundVideoUrl",
      title: "URL del Video de Fondo",
      type: "string",
      description: "Ruta local (/video-1.mp4) o URL remota del video MP4",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Inicio / Hero Principal" };
    },
  },
});
