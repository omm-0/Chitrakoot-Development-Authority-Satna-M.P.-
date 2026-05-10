# Chitrakoot Development Authority — Official Tourism Portal

> **चित्रकूट विकास प्राधिकरण** — Official tourism and information portal for
> **Chitrakoot Dham**, Satna District, Madhya Pradesh.
>
> *"The Hill of Many Wonders — the sacred land where Lord Rama, Sita and Lakshman
> spent eleven and a half years of their fourteen-year exile."*

This repository contains the React 18 + Vite single-page application that powers
the public-facing website of the **Chitrakoot Development Authority (CDA)**.
The site introduces visitors to the religious, historic and natural heritage of
Chitrakoot, lists the Authority's ongoing development projects, publishes
tender / public notices, and provides practical visitor information.

---

## Table of Contents

1. [About the Project](#1-about-the-project)
2. [Tech Stack](#2-tech-stack)
3. [Quick Start](#3-quick-start)
4. [Available Scripts](#4-available-scripts)
5. [Project Structure](#5-project-structure)
6. [Routing & Pages](#6-routing--pages)
7. [Component Architecture](#7-component-architecture)
8. [Data Layer](#8-data-layer)
9. [Custom Hooks](#9-custom-hooks)
10. [Styling System](#10-styling-system)
11. [Assets & Images](#11-assets--images)
12. [Build & Deployment](#12-build--deployment)
13. [Development Workflow](#13-development-workflow)
14. [Browser Support](#14-browser-support)
15. [Future Roadmap](#15-future-roadmap)

---

## 1. About the Project

### 1.1 What is this?

This is the **official web portal** of the **Chitrakoot Development Authority**,
the government body responsible for the tourism, heritage and infrastructure
development of the Chitrakoot Special Area in Satna district, Madhya Pradesh.

The site serves three primary audiences:

| Audience | What they need |
|---|---|
| **Pilgrims & tourists** | Information about sacred sites, festivals, how to reach Chitrakoot, accommodation and travel tips |
| **Citizens & contractors** | Public tender notices, project status, official contact information |
| **General public** | Background on the mythology, history and cultural significance of Chitrakoot Dham |

### 1.2 Why Chitrakoot?

Chitrakoot lies in the northern Vindhya Range and spans both Uttar Pradesh and
Madhya Pradesh; the MP side falls under Satna district. The name comes from
Sanskrit — *Chitra* (Ashoka tree) + *Koot* (peak). It is one of the most
spiritually important pilgrimage sites in India:

- The land where **Lord Rama, Sita and Lakshman** spent the major portion of
  their fourteen-year exile.
- The site of the historic **Bharat Milap**, where Bharata came to plead with
  Rama to return to Ayodhya.
- Where **Goswami Tulsidas** composed major portions of the *Ramcharitmanas*
  at Ramghat on the Mandakini.
- The tapasya-bhoomi of sages **Atri, Sati Anusuya** and **Agastya**.

### 1.3 History of this codebase

The project began as a **single-file static HTML SPA** (one big `index.html`
with inline CSS/JS). It was later migrated to a modern **React 18 + Vite**
architecture with React Router v6, splitting concerns into pages, components,
hooks and data modules. This README documents the current React-based version.

---

## 2. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **React 18** | Component model, ecosystem, hooks |
| Build tool | **Vite 5** | Fast HMR, native ESM, simple config |
| Routing | **React Router v6** | Declarative client-side routing |
| Styling | **Plain CSS + CSS variables** | No CSS framework — custom design tokens, full control |
| Icons | Inline SVG / emoji | No icon-library dependency |
| Fonts | **Google Fonts** (Cinzel, Cinzel Decorative, Cormorant Garamond, Raleway, Tiro Devanagari Hindi) | Mix of devotional serif + clean sans + Devanagari |
| Animations | CSS transitions + `IntersectionObserver` | Lightweight scroll-triggered fade-ins |
| State | Local `useState` + props | No global store needed — content is largely static |

**Production dependencies are intentionally minimal:**

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0"
}
```

That is the entire runtime — no UI kit, no CSS-in-JS, no animation library.

---

## 3. Quick Start

### 3.1 Prerequisites

- **Node.js 18+** (Vite 5 requires Node 18 or higher)
- **npm 9+** (or any equivalent: pnpm / yarn / bun)
- A modern browser (Chrome, Firefox, Edge, Safari)

### 3.2 Install & run

```bash
# 1. Move into the project folder
cd chitrakoot-react

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

By default Vite opens [http://localhost:5173](http://localhost:5173)
automatically (configured via [vite.config.js](vite.config.js)).

The dev server supports **hot module replacement** — saving any file in `src/`
will instantly reflect in the browser.

---

## 4. Available Scripts

Defined in [package.json](package.json):

| Script | Purpose |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR on port 5173 |
| `npm run build` | Produce an optimized production bundle in `dist/` |
| `npm run preview` | Locally preview the production build (serves `dist/`) |

---

## 5. Project Structure

```
chitrakoot-react/
├── public/
│   └── images/                    # All static images — served as /images/<file>
├── src/
│   ├── main.jsx                   # React entry — mounts <BrowserRouter><App /></BrowserRouter>
│   ├── App.jsx                    # Route definitions + Layout wrapper
│   ├── App.css                    # Global styles, design tokens, fade-in keyframes
│   │
│   ├── components/
│   │   ├── layout/                # Site chrome (announcement bar, header, footer, back-to-top, layout)
│   │   ├── home/                  # Sections that compose the home page
│   │   ├── shared/                # Reusable cards, page hero, lightbox, section header
│   │   └── ui/                    # Generic UI primitives (Button)
│   │
│   ├── pages/                     # One file per route (HomePage, AboutPage, …)
│   │
│   ├── data/                      # Static content arrays imported by pages/components
│   │
│   └── hooks/                     # Custom React hooks (scroll position, fade-in, route reset)
│
├── index.html                     # Vite HTML template (loads fonts + mounts #root)
├── vite.config.js                 # Vite config (React plugin, port 5173, dist/ output)
├── package.json
└── README.md
```

### 5.1 Folder responsibilities

- **`public/`** — Anything here is copied verbatim into the build root.
  A file at `public/images/logo.png` is referenced as `/images/logo.png` in code.
- **`src/components/layout/`** — Components that appear on **every** page
  (Header, Footer, AnnouncementBar, BackToTop button, Layout wrapper).
- **`src/components/home/`** — Sections that **only** appear on the home page
  (HeroSlider, AboutIntro, SacredExperiences, FacilitiesPreview,
  NearbyPlaces, FestivalsPreview, HowToReach, QuoteDivider).
- **`src/components/shared/`** — Reusable building blocks used by multiple
  pages (PageHero, SectionHeader, ExperienceCard, FacilityCard, FestivalCard,
  PlaceCard, Lightbox).
- **`src/components/ui/`** — Truly generic primitives with no domain knowledge
  (currently just `Button`).
- **`src/pages/`** — One component per route. Pages are thin: they compose
  sections and pass data; they do not contain markup beyond layout.
- **`src/data/`** — Static content (places, facilities, festivals, projects,
  tender notices, gallery URLs). Treat these as the **content CMS** of the
  site — editing copy means editing a data file, not a component.
- **`src/hooks/`** — Three small custom hooks used across pages.

---

## 6. Routing & Pages

All routes are defined in [src/App.jsx](src/App.jsx) using React Router v6.

| Path | Page component | Purpose |
|---|---|---|
| `/` | `HomePage` | Hero slider + all home sections (about intro, experiences, facilities preview, nearby places, festivals preview, how to reach) |
| `/about` | `AboutPage` | Detailed history & mythology + spiritual significance grid |
| `/projects` | `ProjectsPage` | Card grid of CDA development projects with status badges (Ongoing / Upcoming / Completed) |
| `/tourism` | `TourismPage` | Catalogue of tourist destinations (sacred / historic / natural) with category chips |
| `/tender-notice` | `TenderNoticePage` | Public tender & notice table (desktop) + card list (mobile) with start/end dates |
| `/gallery` | `GalleryPage` | Click-to-zoom photo gallery powered by the `Lightbox` component |
| `/contact` | `ContactPage` | Address, emergency numbers, embedded map, visitor tips |
| `*` | `HomePage` | Catch-all — any unknown path falls back to the home page |

### 6.1 Scroll-to-top on navigation

The `App` component calls [`useScrollToTop()`](src/hooks/useScrollToTop.js)
which listens to `useLocation()` and resets `window.scrollY` to `0` on every
route change — so visitors always start a new page at the top.

---

## 7. Component Architecture

The component tree is intentionally flat and pragmatic.

```
<BrowserRouter>
  <App>
    useScrollToTop()
    <Layout>
      <AnnouncementBar />
      <Header />
      <main>
        <Routes>
          <HomePage />        ← composed of HeroSlider, AboutIntro, … etc.
          <AboutPage />
          <ProjectsPage />
          <TourismPage />
          <TenderNoticePage />
          <GalleryPage />
          <ContactPage />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </Layout>
  </App>
</BrowserRouter>
```

### 7.1 Layout components

- **`AnnouncementBar`** — Top strip for time-sensitive announcements / emergency contacts.
- **`Header`** — Logo, primary nav, mobile hamburger menu.
- **`Footer`** — Authority info, quick links, social/contact details.
- **`BackToTop`** — Floating button that appears after a scroll threshold; wired to [`useScrollPosition`](src/hooks/useScrollPosition.js).
- **`Layout`** — Wraps every page so the chrome is rendered exactly once.

### 7.2 Shared components

- **`PageHero`** — Used by every non-home page. Accepts `title`, `subtitle`, optional `backgroundImage`, and a `compact` flag for shorter heroes (e.g. on `/projects`, `/gallery`, `/tender-notice`).
- **`SectionHeader`** — Eyebrow + title + optional subtitle + decorative divider, for consistent section intros.
- **`ExperienceCard`, `FacilityCard`, `FestivalCard`, `PlaceCard`** — Domain-specific cards that render items from the corresponding data array.
- **`Lightbox`** — Modal image viewer used by `GalleryPage`. Manages open/close state via props.
- **`Button`** — Generic CTA. Variants include `outline-dark`; supports a `to` prop that renders a `react-router` link.

### 7.3 Home page composition

`HomePage.jsx` simply stacks home-only sections in vertical order:

```
HeroSlider
  ↓
QuoteDivider          ← Sanskrit / devotional pull-quote
  ↓
AboutIntro            ← Short intro to Chitrakoot
  ↓
SacredExperiences     ← Card grid of pilgrim experiences
  ↓
FacilitiesPreview     ← Preview of facilities (food, stay, transport)
  ↓
NearbyPlaces          ← Card grid of nearby sacred places
  ↓
FestivalsPreview      ← Preview of major festivals
  ↓
HowToReach            ← Travel info (rail / road / air)
```

---

## 8. Data Layer

All content arrays live in [src/data/](src/data/). Pages and components import
from these modules so that **editing copy never requires touching JSX**.

| File | Exports | Used by |
|---|---|---|
| `significanceData.js` | `significance` — array of significance bullets | `AboutPage` |
| `nearbyPlacesData.js` | `nearbyPlaces` — array of `{ id, name, image, description, … }` | `NearbyPlaces`, `PlaceCard` |
| `facilitiesData.js` | `facilities` — array of facility objects | `FacilitiesPreview`, `FacilityCard` |
| `festivalsData.js` | `festivals` — array of festival objects | `FestivalsPreview`, `FestivalCard` |
| `galleryData.js` | `gallery` — array of image URLs | `GalleryPage` |
| `projectsData.js` | `projects` — `{ id, title, description, category, status }[]` | `ProjectsPage` |
| `tourismData.js` | `tourism` — `{ id, name, image, description, category }[]` | `TourismPage` |
| `tenderNoticeData.js` | `tenderNotices`, `tenderDisclaimer` | `TenderNoticePage` |

> **To update content** (e.g. add a new tender notice or replace a festival
> photo), edit the relevant data file. No component changes required.

---

## 9. Custom Hooks

Three small hooks in [src/hooks/](src/hooks/):

### `useScrollToTop()`
Used once at the top of `App`. Watches `pathname` and resets the window scroll
to `0` on every route change.

### `useScrollPosition()`
Returns the current `window.scrollY`. Used by `BackToTop` to decide when to
show the floating button. Adds a passive scroll listener and cleans up on
unmount.

### `useFadeInUp()`
Returns a `ref` to attach to a page container. On mount (and on every
`pathname` change), it:

1. Finds every descendant with the `fade-in-up` class.
2. Removes the `visible` class from all of them (resets state on navigation).
3. Sets up an `IntersectionObserver` (threshold `0.15`) that adds the
   `visible` class to each element as it scrolls into view.
4. Falls back to immediate visibility if `IntersectionObserver` is unsupported.
5. Disconnects the observer on unmount.

The actual transition (translate + opacity) lives in [src/App.css](src/App.css)
under the `.fade-in-up` and `.fade-in-up.visible` rules.

To animate a section, just add `className="fade-in-up"` and make sure its page
component calls `const ref = useFadeInUp()` and attaches `ref` to its root
`<div>`.

---

## 10. Styling System

### 10.1 Approach

- **Plain CSS** — no Tailwind, no styled-components. Every component has a
  sibling `.css` file (e.g. `Header.jsx` + `Header.css`).
- **CSS variables (custom properties)** for theme tokens — colors, spacing,
  shadows, typography — defined in [src/App.css](src/App.css).
- Global utility classes such as `.section`, `.section-cream`, `.section-warm`,
  `.container`, `.fade-in-up` for consistent page rhythm.

### 10.2 Typography

The fonts are loaded once in [index.html](index.html):

| Family | Use |
|---|---|
| **Cinzel** / **Cinzel Decorative** | Display headings — gives the devotional, monumental feel |
| **Cormorant Garamond** | Long-form body copy and pull quotes |
| **Raleway** | UI text, navigation, buttons |
| **Tiro Devanagari Hindi** | Hindi / Sanskrit script (e.g. चित्रकूट विकास प्राधिकरण) |

### 10.3 Responsive design

- Layout uses CSS Grid + Flexbox with `minmax()` and `auto-fit`.
- The tender table at `/tender-notice` ships **two markup variants** — a desktop `<table>` and a mobile card list — toggled via media queries to ensure usability on phones.

---

## 11. Assets & Images

All images live in **`public/images/`** and are referenced from the site root:

```jsx
<img src="/images/logo.png" alt="…" />
<img src="/images/hero-kamadgiri-temple.jpg" alt="…" />
```

### 11.1 Naming conventions

The data files reference very specific filenames. When adding a new image,
match the convention used by existing entries:

| Pattern | Example | Where used |
|---|---|---|
| `logo.png`, `favicon.ico` | brand assets | header, browser tab |
| `hero-<slug>.jpg` | `hero-kamadgiri-temple.jpg` | page heroes, slider |
| `card-<slug>.jpg` | `card-kamadgiri-parikrama.jpg` | card grids |
| `gallery-N.jpg` | `gallery-1.jpg`, `gallery-2.jpg` | gallery page |
| `about-<slug>.jpg` | `about-temple-history.jpg` | about page |
| `map-chitrakoot.jpg` | static map image | contact page |
| `C1.png`, `C2.png`, `C3.png` | hero slider frames | home page |

> Anything inside `public/` is served verbatim by Vite at build & dev time, so
> the leading `/` in src URLs always resolves to that folder.

---

## 12. Build & Deployment

### 12.1 Production build

```bash
npm run build
```

This produces a static bundle in **`dist/`**:

```
dist/
├── index.html
├── assets/
│   ├── index-<hash>.js
│   ├── index-<hash>.css
│   └── … (chunked vendor bundles, hashed)
└── images/                ← copied from public/
```

### 12.2 Preview locally

```bash
npm run preview
```

Serves `dist/` on a local port so you can sanity-check the production build
before deploying.

### 12.3 Deploying

Because the output is **fully static**, you can host it on any static host:

- Netlify / Vercel / Cloudflare Pages (drag-and-drop or git-connected)
- GitHub Pages
- Nginx / Apache on a government server (just copy `dist/` into the document root)
- Any S3-style object storage with a CDN in front

> **SPA routing note:** This app uses `BrowserRouter`, so the host must
> rewrite **all unknown paths to `/index.html`**. Otherwise visiting
> `/about` directly will 404. On Netlify add a `_redirects` file with
> `/* /index.html 200`. On Nginx use `try_files $uri $uri/ /index.html;`.

### 12.4 Build configuration

[vite.config.js](vite.config.js):

```js
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
  build: { outDir: 'dist', sourcemap: false }
});
```

`sourcemap: false` keeps the production bundle small; flip it to `true` while
debugging a release build.

---

## 13. Development Workflow

### 13.1 Adding a new page

1. Create `src/pages/MyPage.jsx` and `src/pages/MyPage.css`.
2. Use `<PageHero>` for the top banner and `<SectionHeader>` for section intros to keep visual consistency.
3. If the page has scroll animations, call `const ref = useFadeInUp()` and attach `ref` to the root `<div>`. Tag animated children with `className="fade-in-up"`.
4. Add the route in [src/App.jsx](src/App.jsx).
5. Add a navigation link in `src/components/layout/Header.jsx` (and the footer if appropriate).

### 13.2 Adding new content (no code changes)

- **New project** → push a new entry into `src/data/projectsData.js`.
- **New tender notice** → add to `src/data/tenderNoticeData.js`.
- **New gallery photo** → drop the image in `public/images/` and add the URL string to `src/data/galleryData.js`.
- **New tourist place** → add to `src/data/tourismData.js` with `id`, `name`, `image`, `description`, `category`.

### 13.3 Adding a new shared component

1. Create `src/components/shared/MyThing.jsx` + `MyThing.css`.
2. Import the CSS at the top of the JSX file: `import './MyThing.css';`.
3. Keep components presentational — pass content via props, not by importing data files (data should be wired up by pages).

### 13.4 Code conventions

- **Function components only**, default-exported.
- **One component per file**; sibling CSS file with the same name.
- Prefer **CSS custom properties** over hard-coded color/spacing values.
- Keep pages thin: pages compose sections, sections render data via cards.
- Use the `fade-in-up` class for consistent scroll animations rather than rolling new ones.

---

## 14. Browser Support

Targets all evergreen browsers:

- Chrome / Edge (latest 2)
- Firefox (latest 2)
- Safari 14+
- Mobile Safari & Chrome on Android

Uses `IntersectionObserver`; falls back gracefully (elements appear immediately
without animation) on browsers that lack it.

---

## 15. Future Roadmap

Ideas / nice-to-haves not yet built:

- [ ] Hindi / English language toggle (i18n)
- [ ] Headless CMS integration so authority staff can edit content without code
- [ ] PDF download links wired up on tender notices (currently a placeholder action button)
- [ ] Pagination / filtering on the projects and tender pages
- [ ] Dedicated detail pages for individual sacred places
- [ ] SEO improvements: per-route `<title>` / `<meta>` (e.g. via `react-helmet-async`)
- [ ] Sitemap and robots.txt for search-engine visibility

---

### Maintainers

Maintained by the **Chitrakoot Development Authority** technical team,
Satna District, Madhya Pradesh — 485331.

For tourism queries: MPSTDC Chitrakoot Tourism
For administration: District Collector Office, Satna · [satna.nic.in](https://satna.nic.in)
Emergency: **112**
