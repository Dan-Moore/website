import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const ContentSchema = z.object({
  uuid: z.string().uuid(),
  draft: z.boolean().default(true),
  published: z.coerce.date().optional(),
  modified: z.coerce.date().optional(),
});

const guides = defineCollection({
  loader: glob({ base: "./src/content/guides", pattern: "**/*.{md,mdx}" }),
  schema: ({}) => ContentSchema,
});

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  // Type-check front-matter using a schema
  schema: ({}) =>
    ContentSchema.extend({
      title: z.string(),
      description: z.string(),
    }).transform((data) => {
      // If a published date exists, setting default draft value to false.
      if (data.published) {
        return {
          ...data,
          draft: false,
        };
      }
      return data;
    }),
});

export const collections = { posts, guides };
