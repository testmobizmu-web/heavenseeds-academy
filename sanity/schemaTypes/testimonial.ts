import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role (Parent/Student/etc.)", type: "string" }),
    defineField({ name: "quote", title: "Quote", type: "text", validation: (r) => r.required() }),
    defineField({
      name: "market",
      title: "Market",
      type: "string",
      options: {
        list: [
          { title: "Mauritius", value: "mauritius" },
          { title: "International", value: "international" },
        ],
      },
    }),
    defineField({ name: "language", title: "Language", type: "string", initialValue: "en" }),
  ],
});
