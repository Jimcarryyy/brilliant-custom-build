# Grace Rings

A custom engagement ring storefront and portfolio case study — built as a polished demo SPA showcasing editorial design, live product configuration, and multi-step inquiry flows.

**Live demo:** Deploy to Vercel (see [Deployment](#deployment))

---

## Overview

Grace Rings is a fictional atelier brand for lab-grown diamond engagement rings. The site demonstrates:

- Editorial, brand-specific UI (not a generic landing template)
- A three-style collection with live price calculator
- Multi-page IA: collection, process, about, design wizard, contact, and care guide
- Demo form submissions (toast notifications — no backend required)

This project doubles as a **portfolio piece** for employers and freelance clients.

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Build | [Vite 5](https://vitejs.dev/) |
| UI | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Routing | [React Router 6](https://reactrouter.com/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Components | [shadcn/ui](https://ui.shadcn.com/) (Radix primitives) |
| Icons | [Lucide React](https://lucide.dev/) |

---

## Getting started

### Prerequisites

- Node.js 18 or later
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:8080](http://localhost:8080)

### Production build

```bash
npm run build
npm run preview
```

Build output: `dist/`

### Lint

```bash
npm run lint
```

---

## Environment variables

None required for the current demo. Forms show toast confirmations only.

To wire real submissions later, add a service such as Formspree or Resend:

1. Create `.env` with `VITE_FORM_ENDPOINT=your-url`
2. Update form handlers in `src/pages/Contact.tsx` and `src/pages/Design.tsx`

---

## Deployment

### Vercel (recommended)

| Setting | Value |
|---------|-------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

The repo includes `vercel.json` with SPA rewrites so client-side routes (`/shop`, `/rings/solitaire`, etc.) work on direct navigation.

### Security note

If cloning an older version of this repo, verify `postcss.config.js` contains only the Tailwind/Autoprefixer config — a prior commit contained injected malicious code that has been removed.

---

## Routes

| Path | Page | Purpose |
|------|------|---------|
| `/` | Home | Hero, collection, case studies, FAQ preview |
| `/shop` | Collection | Filterable product grid |
| `/rings/:slug` | Product detail | Live price calculator (`solitaire`, `hidden-halo`, `vintage`) |
| `/work` | Recent work | Commission case studies with specs |
| `/materials` | Materials | Stones, metals, and included documentation |
| `/process` | Process | Design-to-delivery timeline |
| `/about` | About | Studio story and lab-grown explainer |
| `/design` | Design wizard | Three-step custom ring brief |
| `/contact` | Contact | Short inquiry form |
| `/faq` | FAQ | Common ordering and care questions |
| `/guide` | Ring guide | Sizing and care instructions |
| `/product/:id` | — | Redirects to `/rings/:id` |
| `/custom-design` | — | Redirects to `/design` |

---

## Folder structure

```
src/
├── assets/           # Ring photography (JPG)
├── components/       # Layout, Navigation, Footer, Reveal, ScrollToTop, UI
├── data/
│   └── products.ts   # Catalog, options, price calculator logic
├── hooks/
│   └── use-in-view.ts # Intersection observer hook for scroll reveals
├── pages/            # Route pages
├── lib/utils.ts      # cn() helper
├── App.tsx           # Router setup
├── index.css         # Design tokens and typography
└── main.tsx          # Entry point
```

---

## Customization

| What to edit | Where |
|--------------|-------|
| Products, prices, options | `src/data/products.ts` |
| Colors, fonts, spacing tokens | `src/index.css`, `tailwind.config.ts` |
| Page copy | Individual files in `src/pages/` |
| Navigation / footer links | `src/components/Navigation.tsx`, `Footer.tsx` |
| Meta / OG tags | `index.html` |

**Typography:** System UI stack (Segoe UI, Roboto, Helvetica Neue, etc.) — no display serif

**Accent color:** Muted copper/rose (`--luxury-rose-gold`) on buttons and links only

---

## Known follow-ups

- [ ] Connect forms to a real backend (Formspree, Resend, etc.)
- [ ] Replace placeholder contact details with real studio info
- [ ] Add real social links when available
- [ ] Optional: squash git history to remove scaffold commits (requires explicit approval + force push)
- [ ] Swap photography if higher-resolution assets become available

---

## License

ISC
