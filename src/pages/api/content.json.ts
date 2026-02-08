import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const verses = await getCollection('verses');
  const posts = await getCollection('posts');
  const pages = await getCollection('pages');

  const versesData = await Promise.all(
    verses.map(async verse => ({
      type: 'verse',
      slug: verse.slug,
      title: verse.data.title,
      description: verse.data.description,
      date: verse.data.date.toISOString(),
      updated: verse.data.updated?.toISOString(),
      status: verse.data.status,
      tags: verse.data.tags || [],
      influences: verse.data.influences || [],
      body: verse.body,
    }))
  );

  const postsData = await Promise.all(
    posts.map(async post => ({
      type: 'post',
      slug: post.slug,
      title: post.data.title,
      description: post.data.description,
      author: post.data.author,
      date: post.data.date.toISOString(),
      updated: post.data.updated?.toISOString(),
      category: post.data.category,
      tags: post.data.tags || [],
      draft: post.data.draft,
      featured: post.data.featured,
      body: post.body,
    }))
  );

  const pagesData = pages.map(page => ({
    type: 'page',
    slug: page.slug,
    title: page.data.title,
    description: page.data.description,
    body: page.body,
  }));

  return new Response(
    JSON.stringify({
      metadata: {
        siteTitle: 'orfx',
        description: 'Witness to constellation. Beautiful in ruin.',
        lastUpdated: new Date().toISOString(),
        url: 'https://orfx.kerry.ink',
      },
      content: {
        verses: versesData
          .filter(v => v.status === 'published')
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
        posts: postsData
          .filter(p => !p.draft)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
        pages: pagesData,
      },
      stats: {
        totalVerses: versesData.filter(v => v.status === 'published').length,
        totalPosts: postsData.filter(p => !p.draft).length,
        totalPages: pagesData.length,
      },
    }, null, 2)
  );
};
