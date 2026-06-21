# Nikhil Powar — Portfolio (React + Vite)

A single-page portfolio built with React + Vite. Includes **two themes** —
Sky Blue (clean/professional) and Dark Orange (developer/IDE style) — switchable
live with the toggle button in the navbar (top right). No page reload, no
separate builds needed.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → Import your repo.
3. Vercel auto-detects Vite. Just click **Deploy**.

(Or use the Vercel CLI: `npm i -g vercel` then run `vercel` inside this folder.)

## Editing content

All text content (name, skills, experience, projects, education, contact info)
lives in **`src/data.js`** — edit that one file to update everything across
both themes at once.

To change colors, edit the CSS variables in **`src/theme.css`** under
`[data-theme="sky"]` and `[data-theme="dark"]`.

## Adding real LinkedIn / GitHub links

In `src/data.js`, update:

```js
linkedin: "#",
github: "#",
```

to your actual profile URLs.
