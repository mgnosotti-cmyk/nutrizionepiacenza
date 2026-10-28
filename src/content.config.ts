
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const approfondimenti = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/approfondimenti',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    date: z.coerce.date().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { approfondimenti };
