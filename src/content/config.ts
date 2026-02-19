import { defineCollection, z } from 'astro:content';

// Five elements as lenses for understanding relationship between nodes
// (use 'aether' in code, 'æther' in display)
const elementsEnum = z.enum(['fire', 'air', 'water', 'earth', 'aether']);

// Songs: longer pieces
const songsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    author: z.string().default('orfx'),
    date: z.date(),
    updated: z.date().optional(),
    image: z.string().optional(),
    elements: z.array(elementsEnum).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Verses: shorter pieces
const versesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
    elements: z.array(elementsEnum).optional(),
    tags: z.array(z.string()).optional(),
    influences: z.array(z.string()).optional(),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  songs: songsCollection,
  verses: versesCollection,
  pages: pagesCollection,
};

// Element colors (Tailwind palette, light mode)
export const elementColors = {
  fire: '#E11D48',    // rose-600
  water: '#0891B2',   // cyan-600
  air: '#52525B',     // zinc-600
  earth: '#059669',   // emerald-600
  aether: '#C026D3',  // fuchsia-600 (æther)
} as const;

// Element meanings (relational states between nodes)
export const elementMeanings = {
  fire: 'come here — desire, longing, calling, spark',
  water: 'we are apart — loss, grief, nostalgia, flow',
  air: 'go away — fracture, severing, clarity, cutting',
  earth: 'we are here — presence, devotion, grounded union',
  aether: 'where are we — seeking, liminal, void, spirit (æther)',
} as const;
