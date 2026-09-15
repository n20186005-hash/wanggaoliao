import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guides = defineCollection({
  loader: glob({
    base: "./src/content/guides",
    pattern: "**/*.{md,mdx}",
  }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string(),
      description: z.string(),
      category: z.enum([
        "夜景",
        "交通",
        "攝影",
        "設施",
        "行程",
        "周邊",
        "服務",
        "氣象與",
        "歷史・人文・責任",
      ]),
      featured: z.boolean().default(false),
      order: z.number().default(999),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      heroCredit: z.string().optional(),
      noindex: z.boolean().default(false),
      related: z
        .array(z.object({ label: z.string(), href: z.string() }))
        .default([]),
    }),
});

export const collections = {
  guides,
};
