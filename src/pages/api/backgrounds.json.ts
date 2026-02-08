import fs from 'fs';
import path from 'path';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const bkgdDir = path.join(process.cwd(), 'public', 'bkgd');
    
    // Check if directory exists
    if (!fs.existsSync(bkgdDir)) {
      return new Response(JSON.stringify({ images: [] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Read files from directory
    const files = fs.readdirSync(bkgdDir);
    
    // Filter for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const images = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    return new Response(JSON.stringify({ images }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ images: [], error: 'Failed to read backgrounds' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
