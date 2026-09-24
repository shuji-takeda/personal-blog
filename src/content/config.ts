import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      category: z.enum(['tech', 'other']),
      tags: z.array(z.string()).default([]),
      // 収益化・ステマ規制対応フラグ
      isAffiliate: z.boolean().default(false),
    }),
});

export const collections = { blog };
