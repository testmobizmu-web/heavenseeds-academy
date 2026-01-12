import { defineField, defineType } from "sanity";

export const leadType = defineType({
  name: "lead",
  title: "Leads",
  type: "document",
  fields: [
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "In progress", value: "in_progress" },
          { title: "Closed", value: "closed" },
        ],
      },
      initialValue: "new",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "locale",
      title: "Locale",
      type: "string",
      options: { list: ["en", "fr"] },
      initialValue: "en",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Tour (Mauritius)", value: "tour" },
          { title: "Online learning", value: "online" },
          { title: "Pricing", value: "pricing" },
          { title: "General", value: "general" },
        ],
      },
      initialValue: "general",
      validation: (r) => r.required(),
    }),
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "email", title: "Email", type: "string", validation: (r) => r.required() }),
    defineField({ name: "phone", title: "Phone/WhatsApp", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text", rows: 6, validation: (r) => r.required() }),
    defineField({ name: "sourceUrl", title: "Source URL", type: "url" }),
  ],
  preview: {
    select: { title: "name", subtitle: "email" },
  },
});

