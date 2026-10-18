import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const devlog = defineCollection({
  // Dated files only, so the folder's README is not treated as a post.
  loader: glob({ pattern: '[0-9]*.md', base: './src/content/devlog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    projects: z.array(z.enum(['kindred', 'driftstone'])).min(1),
    summary: z.string(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    // Drafts show in `yarn dev` only and are left out of the built site and feed.
    draft: z.boolean().default(false),
  }),
});

export const collections = { devlog };
