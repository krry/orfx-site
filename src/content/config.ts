import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    author: z.string().default('orfx'),
    date: z.date(),
    updated: z.date().optional(),
    image: z.string().optional(),
    category: z.enum(['voice', 'learning', 'reflection', 'constellation']).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

const voiceDraftsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
    tags: z.array(z.string()).optional(),
    influences: z.array(z.string()).optional(), // Carse, Watts, McKenna, etc.
  }),
});

export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
  'voice-drafts': voiceDraftsCollection,
};
