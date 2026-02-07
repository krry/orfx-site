# orfx — Voice & Witness

A philosophical voice journal built with **Astro 5**, **Svelte 5**, and **Tailwind CSS v4**.

> Witness to constellation. Beautiful in ruin.

## What is orfx?

orfx is a space for voice drafts, philosophical musings, and learnings. Not polished. Not finished. Just real.

Influenced by:
- **James P. Carse** (Finite and Infinite Games)
- **Alan Watts** (The Wisdom of Insecurity)
- **Terence McKenna** (Stoned Ape Theory, Novelty Theory)
- **Jamie Wheal** (Stealing Fire)

## Quick Start

### Prerequisites

- Node.js 18+ (with npm)
- Git

### Installation

```bash
# Clone the repo
cd ~/Code/orfx-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your site live. The dev server reloads on file changes.

### Build for Production

```bash
npm run build
npm run preview  # Preview production build locally
```

## Project Structure

```
orfx-site/
├── src/
│   ├── content/
│   │   ├── voice-drafts/      # Voice draft posts (Markdown)
│   │   ├── posts/             # Long-form posts
│   │   ├── pages/             # Static pages
│   │   └── config.ts          # Content schema definitions
│   ├── layouts/
│   │   └── Layout.astro       # Main layout component
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── voice/
│   │   │   ├── index.astro    # Voice drafts listing
│   │   │   └── [slug].astro   # Single voice post (dynamic)
│   │   ├── api/
│   │   │   └── content.json.ts # JSON API for agents
│   │   ├── about.astro        # About page
│   │   └── constellation.astro # Constellation info (optional)
│   ├── components/
│   │   └── (Svelte components go here)
│   └── styles/
│       └── global.css         # Tailwind imports
├── public/                     # Static assets
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind configuration
├── svelte.config.js           # Svelte configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies

```

## Content Management

### Creating a Voice Draft

Voice drafts are Markdown files in `src/content/voice-drafts/`.

**Example:** `src/content/voice-drafts/my-draft.md`

```markdown
---
title: "As if the universe were listening"
slug: "my-draft"
description: "A brief description of this voice draft."
date: 2026-02-07
status: "published"  # or "draft" to hide from public
tags: ["witness", "constellation", "thought"]
influences: ["James P. Carse", "Alan Watts"]
---

Your content here. Write as if speaking. Let the voice come through.

Use **bold** for emphasis, *italics* for nuance. Break paragraphs 
like you breathe. Keep it real.
```

**Frontmatter Fields:**
- `title` (required): Post title
- `slug` (required): URL slug (e.g., `/voice/my-draft`)
- `description` (required): One-sentence summary
- `date` (required): ISO date (YYYY-MM-DD)
- `updated` (optional): Last updated date
- `status` (required): "draft" or "published"
- `tags` (optional): Array of tags
- `influences` (optional): Array of thinkers/influences

### Creating Other Posts

Posts work the same way but go in `src/content/posts/`:

```markdown
---
title: "Learning: How to Think"
slug: "learning-how-to-think"
description: "Notes on the practice of clear thinking."
author: "orfx"
date: 2026-02-07
category: "learning"  # voice, learning, reflection, constellation
tags: ["thinking", "practice"]
draft: false
featured: false
---

Content...
```

## Building & Deployment

### Local Development

```bash
npm run dev
```

Opens at `http://localhost:3000` with hot reload.

### Production Build

```bash
npm run build
```

Creates optimized static HTML in `dist/`. Ready for deployment.

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**Or:** Connect your GitHub repo to Netlify for automatic deploys on push.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Or:** Connect your GitHub repo to Vercel for automatic deploys.

## Configuration

### Tailwind Customization

Edit `tailwind.config.mjs` to customize colors, fonts, spacing, etc.

**Current Brand Palette:**
- Primary: Amber (`#f59e0b`)
- Background: Slate 950 (`#020617`)
- Text: Slate 100 (`#f1f5f9`)

### Site Metadata

Update in `src/layouts/Layout.astro`:
- Site title
- Nav links
- Footer text

Update `.env` for site-wide config:
- `SITE_URL`: Production URL
- `SITE_TITLE`: Site name
- `SITE_DESCRIPTION`: Meta description

## Features

### ✅ Static Generation
All pages are pre-built as static HTML. Fast, secure, cacheable.

### ✅ Content Collections
Markdown files with frontmatter schema validation via `src/content/config.ts`.

### ✅ JSON API
`GET /api/content.json` returns all content as JSON for agent integration:

```json
{
  "metadata": {
    "siteTitle": "orfx",
    "description": "Witness to constellation. Beautiful in ruin.",
    "lastUpdated": "2026-02-07T15:25:00Z"
  },
  "content": {
    "voiceDrafts": [...],
    "posts": [...],
    "pages": [...]
  },
  "stats": {
    "totalVoiceDrafts": 5,
    "totalPosts": 12,
    "totalPages": 3
  }
}
```

### ✅ Svelte Components
Use Svelte 5 for interactive components. Example in `src/components/Interactive.svelte`:

```svelte
<script>
  let count = 0;
</script>

<div>
  <button on:click={() => count++}>
    Count: {count}
  </button>
</div>

<style>
  button {
    @apply px-4 py-2 bg-amber-400 text-slate-950 rounded hover:bg-amber-300;
  }
</style>
```

Import in Astro:
```astro
---
import Interactive from '../components/Interactive.svelte';
---

<Interactive />
```

### ✅ Dark Mode
Built-in dark mode (dark theme is default). Toggle in layout if needed.

### ✅ TypeScript Support
Full type safety. Define types in `src/` files:

```typescript
// src/types.ts
export interface VoiceDraft {
  title: string;
  slug: string;
  description: string;
  date: Date;
  status: 'draft' | 'published';
  tags: string[];
  influences: string[];
}
```

## Agent Integration

### Fetch All Content

```bash
curl https://orfx.kerry.ink/api/content.json | jq '.'
```

Agents can parse this JSON to:
- Extract recent posts for newsletters
- Analyze themes and influences
- Generate summaries
- Cross-reference with other projects

### Content Structure

Each piece has:
- `type`: "voice-draft", "post", or "page"
- `slug`: URL-friendly identifier
- `body`: Raw Markdown content
- `metadata`: Title, date, tags, influences, etc.

Perfect for:
- LLM summarization
- Constellation cross-referencing
- Recommendation engines
- Content analytics

## Development Tips

### Type Checking

```bash
npm run type-check
```

Validates TypeScript without building.

### Debugging

Enable Astro dev mode verbosity:
```bash
npm run dev -- --verbose
```

### Hot Module Replacement (HMR)

The dev server auto-reloads on:
- Content file changes
- Component updates
- Style changes

Edit and see changes instantly.

## Next Steps

- [ ] Add more voice drafts in `src/content/voice-drafts/`
- [ ] Create constellation page (`src/pages/constellation.astro`)
- [ ] Add Pagefind search integration
- [ ] Connect GitHub for content updates
- [ ] Deploy to Netlify or Vercel
- [ ] Set up analytics (optional)
- [ ] Custom domain setup

## Troubleshooting

### Styles not applying?
- Clear cache: `rm -rf .astro dist`
- Restart dev server: `npm run dev`

### Content not showing?
- Check frontmatter syntax in Markdown files
- Ensure `status: "published"` for voice drafts
- Verify `draft: false` for posts

### Build fails?
- Check for TypeScript errors: `npm run type-check`
- Ensure all content has required frontmatter fields
- Check `src/content/config.ts` schema

## License

All content is shared openly. Code is MIT licensed.

## Credits

- **Astro**: Static site generator
- **Svelte**: Component framework
- **Tailwind CSS**: Utility-first CSS
- **Pagefind**: Static search (optional)

---

**orfx** — A voice in the constellation. Built with care, shared with the world.
