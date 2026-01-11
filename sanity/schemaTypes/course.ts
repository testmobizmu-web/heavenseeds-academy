import { defineField, defineType } from "sanity";

export default defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "market",
      title: "Market",
      type: "string",
      options: {
        list: [
          { title: "International (Online Learning)", value: "international" },
          { title: "Mauritius (Pre-Primary Program)", value: "mauritius" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "language", title: "Language", type: "string", initialValue: "en" }),
    defineField({ name: "excerpt", title: "Short Description", type: "text" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "price", title: "Price", type: "number", description: "Leave empty if not paid." }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      options: { list: ["MUR", "USD", "EUR"] },
      initialValue: "USD",
    }),
    defineField({
      name: "content",
      title: "Course Overview",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
