# Visions of Judgment — Dante's Inferno in Art

An honors thesis in Art History presented as a web exhibition. This project examines how four artists — William Blake, Gustave Doré, Alberto Martini, and Salvador Dalí — interpreted the same three cantos of Dante's *Inferno* across seven centuries, arguing that visual interpretation is always argumentation.

**Gabriela Sierocka · University of Notre Dame · Glynn Family Honors Program · Spring 2026**
Advisor: Professor Theodore J. Cachey Jr.

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Images

Place artwork image files in `public/images/` using the following exact filenames:

| File | Artwork |
|------|---------|
| `blake-canto-v.jpg` | Blake — The Whirlwind of Lovers |
| `blake-canto-xiii.jpg` | Blake — The Wood of the Self-Murderers |
| `blake-canto-xxxiv.jpg` | Blake — Dante and Virgil Escaping from Hell |
| `dore-canto-v.jpg` | Doré — Paolo and Francesca da Rimini |
| `dore-canto-xiii.jpg` | Doré — The Forest of Suicides |
| `dore-canto-xxxiv.jpg` | Doré — Lucifer, King of Hell |
| `martini-canto-v.jpg` | Martini — Canto V (Minos) |
| `martini-canto-xiii.jpg` | Martini — The Wood of the Suicides |
| `martini-canto-xxxiv.jpg` | Martini — Lucifer (Canto XXXIV) |
| `dali-canto-v.jpg` | Dalí — Paolo and Francesca |
| `dali-canto-xiii.jpg` | Dalí — The Wood of Self-Destroyers |
| `dali-canto-xxxiv.jpg` | Dalí — Lucifer |

Images must be `.jpg`. If a file is missing, a dark placeholder showing the artwork title is displayed automatically.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) + [Inter](https://fonts.google.com/specimen/Inter) via `next/font`
- TypeScript, strict mode

## Deploying

Push to GitHub and import into [Vercel](https://vercel.com). No environment variables required.
