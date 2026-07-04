import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const ContentSchema = z.object({
  uuid: z.uuid(),
  draft: z.boolean().default(true),
  published: z.coerce.date().optional(),
  modified: z.coerce.date().optional(),
});

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  // Type-check front-matter using a schema
  schema: ({}) =>
    z.object({
      title: z.string(),
      description: z.string(),
      published: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
    }),
});

const guides = defineCollection({
  loader: glob({ base: "./src/content/guides", pattern: "**/*.{md,mdx}" }),
  schema: ({}) =>
    z.object({
      title: z.string(),
      description: z.string(),
      published: z.coerce.date(),
      modified: z.coerce.date().optional(),
    }),
});

export const collections = { posts, guides };
