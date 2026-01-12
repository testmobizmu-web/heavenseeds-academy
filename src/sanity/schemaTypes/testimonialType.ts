import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English (EN)", value: "en" },
          { title: "French (FR)", value: "fr" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
      initialValue: "en",
    }),

    defineField({
      name: "market",
      title: "Market",
      type: "string",
      options: {
        list: [
          { title: "Mauritius", value: "mauritius" },
          { title: "International", value: "international" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),

    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role (Parent/Student/etc.)", type: "string" }),
    defineField({ name: "quote", title: "Quote", type: "text", validation: (r) => r.required() }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "role",
      lang: "language",
      market: "market",
    },
    prepare({ title, subtitle, lang, market }) {
      const badge = `${(lang || "en").toUpperCase()} • ${market || ""}`;
      return { title, subtitle: subtitle ? `${badge} • ${subtitle}` : badge };
    },
  },
});
