import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("course").title("Courses"),
      S.documentTypeListItem("lesson").title("Lessons"),
      S.documentTypeListItem("post").title("Blog Posts"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);
