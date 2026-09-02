# React Bits Animations Used

Reference list of [React Bits](https://reactbits.dev) components used in this portfolio, with source links and where they appear on the site.

Library: [https://reactbits.dev](https://reactbits.dev)

---

## Summary

| Component | React Bits link | Used on | Local file |
| --- | --- | --- | --- |
| **Iridescence** | [Backgrounds → Iridescence](https://reactbits.dev/backgrounds/iridescence) | Hero background | `src/components/Iridescence.tsx` |
| **Shiny Text** | [Text Animations → Shiny Text](https://reactbits.dev/text-animations/shiny-text) | Hero name (“Chandan Chakraborty”) | `src/components/ShinyText.tsx` |
| **Dot Field** | [Backgrounds → Dot Field](https://reactbits.dev/backgrounds/dot-field) | Skills section background | `src/components/DotField.tsx` |
| **Click Spark** | [Animations → Click Spark](https://reactbits.dev/animations/click-spark) | Entire homepage (page-wide click effect) | `src/components/ClickSpark.tsx` |
| **Star Border** | [Animations → Star Border](https://reactbits.dev/animations/star-border) | Featured Projects cards | `src/components/StarBorder.tsx` + `StarBorder.css` |

---

## By page / section

### Home shell (`src/Home.tsx`)

- **Click Spark** — wraps the whole page so clicks spark anywhere.
  - Docs: https://reactbits.dev/animations/click-spark

### Hero (`src/components/Hero.tsx`)

- **Iridescence** — animated shader background behind the hero.
  - Docs: https://reactbits.dev/backgrounds/iridescence
- **Shiny Text** — metallic shine on the name.
  - Docs: https://reactbits.dev/text-animations/shiny-text

### Skills (`src/components/Skills.tsx`)

- **Dot Field** — interactive dot-grid background.
  - Docs: https://reactbits.dev/backgrounds/dot-field

### Featured Projects (`src/components/Projects.tsx`)

- **Star Border** — animated border on each project card.
  - Docs: https://reactbits.dev/animations/star-border

### About / Awards / Contact / Footer

- No React Bits animation components on these sections currently.

---

## Notes

- Components are **copy-adapted** into this repo (not installed as an npm package).
- Theme-aware colors are applied in places (e.g. Click Spark blue in light mode, cyan in dark mode).
- Official catalog / install options: https://reactbits.dev/get-started/installation

If you add another React Bits effect later, update this table so the source link and section stay documented.
