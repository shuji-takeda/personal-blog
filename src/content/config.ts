import { defineCollection, z } from "astro:content";
import { OTHER_SUBCATEGORY_SLUGS } from "../data/categories";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      category: z.enum(["tech", "other"]),
      subcategory: z.enum(OTHER_SUBCATEGORY_SLUGS).optional(),
      tags: z.array(z.string()).default([]),
      // 収益化・ステマ規制対応フラグ
      isAffiliate: z.boolean().default(false),
    }),
});

export const collections = { blog };
