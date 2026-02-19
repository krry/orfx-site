# Element Colors — Final Palette (2026-02-10)

## Light Mode Colors (Tailwind)

- 🪄 **æther** = `fuchsia-600` (#C026D3)
- 🔥 **fire** = `rose-600` (#E11D48)
- 💧 **water** = `cyan-600` (#0891B2)
- 🌬️ **air** = `zinc-600` (#52525B)
- 🌍 **earth** = `emerald-600` (#059669)

## Rationale

**æther (fuchsia):**
- Mother tone, extraspectral boundary
- Use 'æther' with æsh character in display
- Code uses 'aether' for schema compatibility

**90° cross spacing from æther:**
- Perfect alignment with Tailwind palette
- Three exact matches (rose, emerald, cyan)
- Air as achromatic (zinc) = clarity, cutting, colorless

## HSL Wheel Positions (approximate)

- æther: ~295° (fuchsia)
- fire: ~350° (rose, close to red)
- earth: ~160° (emerald, green)
- water: ~190° (cyan, blue-green)
- air: achromatic (desaturated gray)

## Usage

**In frontmatter:**
```yaml
elements: [fire, water, aether]
```

**Display names:**
- fire → fire
- water → water
- air → air
- earth → earth
- aether → æther (with æsh)

**Badge colors:**
- Background: element color at 20% opacity
- Text: element color at 100%

## Future: Dark Mode

Color adjustments planned for dark mode (lighter shades: 400 or 500 range).

## Color Mixing

When multiple elements present:
- Consider gradient approach (multi-stop)
- Or average/blend in HSL space
- Or dominant element accent

To be determined during theming implementation.
