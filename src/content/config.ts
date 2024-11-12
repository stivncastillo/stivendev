import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    category: reference("categories"),
    description: z.string().optional(),
    publishedAt: z.date(),
    updatedAt: z.date(),
    heroImage: z.string().optional(),
    published: z.boolean(),
    tags: z.array(z.string()),
    lang: z.enum(["en", "es"]),
  }),
});

const categories = defineCollection({
  type: "data",
  schema: z.object({
    slug: z.string(),
    name: z.string(),
  }),
});

export const collections = { blog, categories };
