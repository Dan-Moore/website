import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { glob } from "astro/loaders";

const ContentSchema = z.object({
  uuid: z.string().uuid(),
  draft: z.boolean().default(true),
  published: z.coerce.date().optional(),
  modified: z.coerce.date().optional(),
});

/* Posts Collection */
const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  // Type-check front-matter using a schema
  schema: () =>
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

/* Starlight Document Collection */
const docs = defineCollection({
  loader: docsLoader(), // Omit this line if you are using Astro 4.x
  schema: docsSchema(),
});

export const collections = { posts, docs };
