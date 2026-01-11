import { defineField, defineType } from "sanity";

export default defineType({
  name: "lesson",
  title: "Lesson",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "course",
      title: "Course",
      type: "reference",
      to: [{ type: "course" }],
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 1 }),
    defineField({
      name: "content",
      title: "Lesson Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL (optional)",
      type: "url",
    }),
  ],
});
