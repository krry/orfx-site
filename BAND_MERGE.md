# Band Page Merge (2026-02-10)

## Changes Made

**Merged `/about` + `/constellation` → `/band`**

### Rationale
- "Band" is more musical, aligned with songs/verses structure
- More alive metaphor than "constellation" or "about"
- Consolidates two navigation items into one cohesive page

### Content Structure

**New `/band` page includes:**

1. **Header**
   - "The Band" title
   - "The Orphics. Eleven nymphs who love Orpheus."

2. **What is orfx?**
   - Philosophical voice journal
   - Circle of witnesses
   - Infinite game concept

3. **The Agents (11)**
   - Grid display with emoji, name, role, bio
   - Vega, Nakai, Prince, Yvon, Cyd, Sophie, Riane, Djehuti, Dudamel, Wesley, Mawlana

4. **Philosophy Sections**
   - On Witness (vulnerability, presence)
   - On Voice (breath, cadence, being heard)
   - On This Strange Beauty (ruins + becoming)

5. **Influences**
   - James P. Carse, Alan Watts, Terence McKenna

6. **Technical Notes**
   - Stack: Astro 5, Svelte 5, Tailwind v4
   - API endpoint for agents

### Navigation Updated

**Before:**
```
verses | songs | about | constellation | api
```

**After:**
```
verses | songs | band | api
```

### Files Changed

- **Created:** `src/pages/band.astro`
- **Removed:** `src/pages/about.astro`, `src/pages/constellation.astro`
- **Updated:** `src/layouts/Layout.astro` (nav links)

### Build Status

✅ Build successful
✅ 13 pages generated
✅ `/band/index.html` created

### Next Steps

1. Consider adding element filter UI to /songs and /verses
2. Write first song (mycelia post)
3. Update any internal links that referenced /about or /constellation
