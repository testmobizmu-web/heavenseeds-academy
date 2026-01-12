import { type SchemaTypeDefinition } from "sanity";

import { authorType } from "./authorType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { blockContentType } from "./blockContentType";

import { courseType } from "./courseType";
import { lessonType } from "./lessonType";
import { testimonialType } from "./testimonialType";
import { leadType } from "./leadType";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Blog template types
  authorType,
  categoryType,
  postType,
  blockContentType,

  // Academy types
  courseType,
  lessonType,
  testimonialType,
  leadType,
];

export const schema = {
  types: schemaTypes,
};
