import { defineArrayMember, defineField, defineType } from "sanity";

export const courseType = defineType({
  name: "course",
  title: "Course",
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
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: true,
      description: "Turn off to hide this course from the website.",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required().min(3),
    }),

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
      initialValue: "international",
    }),

    defineField({
      name: "audience",
      title: "Audience",
      type: "string",
      options: {
        list: [
          { title: "Kids", value: "kids" },
          { title: "Adults", value: "adults" },
          { title: "Parents", value: "parents" },
          { title: "Mixed / Family", value: "mixed" },
        ],
        layout: "radio",
      },
      initialValue: "mixed",
    }),

    defineField({
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
        ],
        layout: "dropdown",
      },
    }),

    defineField({
      name: "durationMinutes",
      title: "Estimated Duration (minutes)",
      type: "number",
      description: "Optional — helps learners understand the time commitment.",
      validation: (r) => r.min(0),
    }),

    defineField({
      name: "excerpt",
      title: "Short Description (SEO summary)",
      type: "text",
      rows: 3,
      validation: (r) => r.max(220),
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Required for accessibility & SEO.",
          validation: (r) => r.required().min(3),
        }),
      ],
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Leave empty for free / enquiry.",
      validation: (r) => r.min(0),
    }),

    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      options: {
        list: [
          { title: "MUR", value: "MUR" },
          { title: "USD", value: "USD" },
          { title: "EUR", value: "EUR" },
        ],
      },
      initialValue: "USD",
    }),

    defineField({
      name: "features",
      title: "Course Features",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description:
        "Examples: Certificate, Downloadables, Lifetime access, Parent guidance, Support included",
    }),

    defineField({
      name: "learningOutcomes",
      title: "Learning Outcomes (What you’ll learn)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (r) => r.max(12),
    }),

    defineField({
      name: "overview",
      title: "Course Overview",
      type: "blockContent",
    }),

    // Optional: link EN <-> FR pair
    defineField({
      name: "translationOf",
      title: "Translation Of (optional)",
      type: "reference",
      to: [{ type: "course" }],
      description: "Link the EN course to the FR version (or vice-versa).",
    }),
  ],

  preview: {
    select: {
      title: "title",
      lang: "language",
      market: "market",
      published: "isPublished",
      media: "coverImage",
    },
    prepare({ title, lang, market, published, media }) {
      const badge = `${(lang || "en").toUpperCase()} • ${market || ""} • ${
        published ? "Published" : "Hidden"
      }`;
      return { title, subtitle: badge, media };
    },
  },
});
