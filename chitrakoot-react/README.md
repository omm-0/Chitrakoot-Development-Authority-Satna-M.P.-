# Chitrakoot Development Authority — React

Official tourism portal for Chitrakoot Dham, Satna District, Madhya Pradesh.
React 18 + Vite + React Router v6 migration of the original single-file SPA.

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Image assets

Place all images inside `public/images/` using the exact filenames referenced
in the `data/` modules and components (e.g. `logo.png`, `card-kamadgiri-parikrama.jpg`,
`gallery-1.jpg`, `C1.png`, `C2.png`, `C3.png`, etc.). Anything inside
`public/` is served as-is from the site root, so a file at
`public/images/logo.png` is referenced as `/images/logo.png` in the code.

## Project structure

```
src/
  main.jsx              React entry
  App.jsx               Routes + Layout
  App.css               Global styles, design tokens, animations
  components/
    layout/             AnnouncementBar, Header, Footer, BackToTop, Layout
    home/               Hero, About intro, Experiences, Facilities preview, etc.
    shared/             Reusable cards, page hero, lightbox
    ui/                 Button
  pages/                One file per route
  data/                 Static content arrays
  hooks/                Custom hooks (scroll, fade-in, route reset)
```

## Routes

| Path           | Page              |
| -------------- | ----------------- |
| `/`            | Home              |
| `/about`       | About             |
| `/places`      | Sacred Places     |
| `/facilities`  | Facilities        |
| `/festivals`   | Festivals         |
| `/gallery`     | Gallery           |
| `/contact`     | Contact           |
