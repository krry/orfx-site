import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const verses = await getCollection('verses');
  const songs = await getCollection('songs');
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
      elements: verse.data.elements || [],
      tags: verse.data.tags || [],
      influences: verse.data.influences || [],
      body: verse.body,
    }))
  );

  const songsData = await Promise.all(
    songs.map(async song => ({
      type: 'song',
      slug: song.slug,
      title: song.data.title,
      description: song.data.description,
      author: song.data.author,
      date: song.data.date.toISOString(),
      updated: song.data.updated?.toISOString(),
      elements: song.data.elements || [],
      tags: song.data.tags || [],
      draft: song.data.draft,
      featured: song.data.featured,
      body: song.body,
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
        songs: songsData
          .filter(s => !s.draft)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
        pages: pagesData,
      },
      stats: {
        totalVerses: versesData.filter(v => v.status === 'published').length,
        totalSongs: songsData.filter(s => !s.draft).length,
        totalPages: pagesData.length,
      },
    }, null, 2)
  );
};
