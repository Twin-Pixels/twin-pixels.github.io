import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'devlog'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('devlog', ({ data }) => !import.meta.env.PROD || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const projectNames: Record<string, string> = { kindred: 'Kindred', driftstone: 'Driftstone' };

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
