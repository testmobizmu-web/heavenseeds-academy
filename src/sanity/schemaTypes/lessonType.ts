import { defineField, defineType } from "sanity";

export const lessonType = defineType({
  name: "lesson",
  title: "Lesson",
  type: "document",
  fields: [
    defineField({
      name: "course",
      title: "Course",
      type: "reference",
      to: [{ type: "course" }],
      validation: (r) => r.required(),
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required().min(3),
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 1,
      validation: (r) => r.min(1),
    }),

    defineField({
      name: "videoUrl",
      title: "Video URL (optional)",
      type: "url",
    }),

    defineField({
      name: "content",
      title: "Lesson Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "isFreePreview",
      title: "Free Preview",
      type: "boolean",
      initialValue: false,
    }),
  ],

  orderings: [
    {
      title: "Course, then Order",
      name: "courseOrderAsc",
      by: [
        { field: "course._ref", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      order: "order",
      courseTitle: "course.title",
    },
    prepare({ title, order, courseTitle }) {
      return {
        title,
        subtitle: `${courseTitle || "Course"} • Lesson ${order || 0}`,
      };
    },
  },
});
