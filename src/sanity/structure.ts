
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // ===============================
      // 🎓 Academy
      // ===============================
      S.listItem()
        .title("Academy")
        .child(
          S.list()
            .title("Academy")
            .items([
              S.documentTypeListItem("course").title("Courses"),
              S.documentTypeListItem("lesson").title("Lessons"),
              S.documentTypeListItem("testimonial").title("Testimonials"),
            ])
        ),

      S.divider(),

      // ===============================
      // 📰 Blog
      // ===============================
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("author").title("Authors"),
            ])
        ),

      S.divider(),

      // ===============================
      // 📥 Leads (Contact form inbox)
      // ===============================
      S.listItem()
        .title("Leads")
        .schemaType("lead")
        .child(
          S.documentTypeList("lead")
            .title("Leads")
            .filter("_type == 'lead'")
            .defaultOrdering([{ field: "createdAt", direction: "desc" }])
        ),
    ]);
