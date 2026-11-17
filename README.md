# VizNerd — Digital Visibility & Growth Agency

A production-ready marketing site for **VizNerd**, an agency that helps companies and
organizations gain visibility and a stronger online presence — and convert visitors into
clients. Built with **React**, **Tailwind CSS** and **Framer Motion**, deployed on Vercel.

## Built with

- **React 19** (Vite) — component-driven architecture
- **Tailwind CSS 4** — utility-first styling; blue theme (`brand` palette + `ink` navy) defined in `src/index.css` via `@theme`
- **Framer Motion** — scroll reveals, accordions, animated counters, hero motion
- **Fonts:** Inter (body) + Outfit (display) via Google Fonts

## Features

- Fully responsive, single-page layout: hero, client marquee, about + animated stats, values accordion, numbered services, case studies (cards link to live client sites), testimonials, team, FAQ, blog, careers (empty state — no open roles yet), CTA and footer
- Scroll-triggered animations with Framer Motion (`whileInView`, staggered children, `AnimatePresence` accordions)
- SEO-ready `index.html` (title, description, Open Graph) and SVG favicon

## Project structure

```
src/
  data/content.js      All editable copy: nav, hero, stats, services, projects, FAQ, blog, footer
  components/          One file per section (Navbar, Hero, About, Services, Work, ...)
  App.jsx              Section assembly
  index.css            Tailwind v4 theme (@theme colors/fonts/shadows) + custom utilities
public/case-studies/   Live-site snapshots shown in the Case Studies cards (blue gradient overlay applied in Work.jsx)
index.html             SEO meta + font loading
```

## Run locally

```bash
npm ci
npm run dev      # dev server
npm run build    # production build
npm run preview  # serve the build
npm run lint     # eslint
```

## Customize

Edit `src/data/content.js` for all text and lists; tweak colors/fonts in the `@theme`
block of `src/index.css`; each section is an isolated component in `src/components/`.
