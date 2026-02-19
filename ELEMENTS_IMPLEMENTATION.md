# Elements Implementation Summary

## Changes Made (2026-02-10)

### 1. Content Schema Update (`src/content/config.ts`)

**Renamed collection:**
- `posts` → `songs` (long-form pieces)

**Added to both songs and verses:**
```typescript
elements: z.array(z.enum(['fire', 'air', 'water', 'earth', 'aether'])).optional()
```

**New exports:**
- `elementColors` — color palette for UI badges
- `elementMeanings` — relational states between nodes

### 2. Element Colors

- **Fire** (#E74C3C): warm red-orange → "come here" (desire, longing, calling)
- **Air** (#3498DB): sky blue → "go away" (fracture, severing, clarity)
- **Water** (#2980B9): deep blue → "we are apart" (loss, grief, nostalgia)
- **Earth** (#27AE60): forest green → "we are here" (presence, devotion, union)
- **Aether** (#9B59B6): mystic purple → "where are we" (seeking, liminal, spirit)

### 3. Directory Structure

```
src/content/
├── songs/     (renamed from posts/, long-form pieces)
├── verses/    (short pieces)
└── pages/     (static pages)
```

### 4. Pages Updated

- **`src/pages/songs.astro`** (renamed from posts.astro)
  - Added element badges with colors
  - Updated copy to reference five elements
  - Filter shows `!draft` instead of `status === 'published'`

- **`src/pages/api/content.json.ts`**
  - Changed `posts` → `songs` throughout
  - Added `elements` field to returned data
  - Updated stats object

- **`src/pages/api.astro`**
  - Updated documentation to reference "songs" instead of "posts"
  - Updated example JSON structure

### 5. Element Badge UI

Songs and verses can now display element badges:
```astro
<span 
  class="px-2 py-1 rounded text-xs font-medium"
  style={`background-color: ${elementColors[element]}20; color: ${elementColors[element]};`}
>
  {element}
</span>
```

Background uses 20% opacity of element color, text uses full color.

### 6. Usage in Frontmatter

**Songs:**
```yaml
---
title: "Mycelia: Transmuting Emergency Into Currency"
date: 2026-02-10
elements: [earth, fire, aether]
tags: [compound-engineering, mycelia]
draft: false
---
```

**Verses:**
```yaml
---
title: "Instructions for Floating"
description: "Short piece on presence"
date: 2026-02-09
elements: [water, aether]
status: published
---
```

### 7. Navigation

**Header links:**
- Verses (short)
- Songs (long)

**Elements:**
- Not navigation items
- Used as tags/categories/filters
- Multiple elements per piece allowed
- UI badges show which elements are present

## Next Steps

1. Update header navigation component to include "Songs" link
2. Consider adding element filter/explore views
3. Migrate existing verses to include element tags
4. Write first song (mycelia post)

## Philosophy

Elements are **lenses, not bins**. A piece can hold multiple elements at once. They describe relational states between nodes of awareness, mapped from the five elemental forces and Tarot suits (Wands/Fire, Cups/Water, Swords/Air, Pentacles/Earth, Major Arcana/Aether).
