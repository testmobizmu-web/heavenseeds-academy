import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
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
      initialValue: "en",
      validation: (r) => r.required(),
    }),

    defineField({
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: true,
      description: "Turn off to hide this post from the website.",
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
      name: "excerpt",
      title: "Excerpt (SEO summary)",
      type: "text",
      rows: 3,
      description: "Short summary used for SEO meta description and cards.",
      validation: (r) => r.max(200),
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Important for accessibility and SEO.",
          validation: (r) => r.required().min(3),
        }),
      ],
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    /**
     * NEW: content (Portable Text) — use this going forward.
     * (Your blog detail page fetches `content`.)
     */
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    /**
     * LEGACY: keep body so existing content doesn't break.
     * You can migrate later or keep it for backward compatibility.
     */
    defineField({
      name: "body",
      title: "Body (legacy)",
      type: "blockContent",
      hidden: true,
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      lang: "language",
      published: "isPublished",
    },
    prepare(selection) {
      const { author, lang, published } = selection as any;
      const badge = `${(lang || "en").toUpperCase()} • ${published ? "Published" : "Hidden"}`;
      return {
        ...selection,
        subtitle: author ? `${badge} • by ${author}` : badge,
      };
    },
  },
});
