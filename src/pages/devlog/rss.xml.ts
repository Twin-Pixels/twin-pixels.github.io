import type { APIRoute } from 'astro';
import { getPosts } from '../../lib/devlog';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://twinpixels.gg');
  const posts = await getPosts();
  const items = posts
    .map((post) => {
      const url = new URL(`/devlog/${post.id}/`, base).href;
      return `<item><title>${escape(post.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${post.data.date.toUTCString()}</pubDate><description>${escape(post.data.summary)}</description></item>`;
    })
    .join('');
  const feed = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Twin Pixels devlog</title><link>${new URL('/devlog/', base).href}</link><description>What changed in Kindred and Driftstone, week by week.</description>${items}</channel></rss>`;
  return new Response(feed, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
