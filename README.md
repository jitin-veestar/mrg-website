# MRG Website

Website for **Mundra Electrical Industries (MEI)** / MRG — electrical wires, cables, and switchgear for domestic, agricultural, and industrial sectors.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** (dev server and build)
- **React Router** (client-side routing)
- **Tailwind CSS** (styling)
- **Material Symbols** (icons)

## Prerequisites

- **Node.js** 20.19+ or 22.12+ (Vite 7 requirement)
- npm, yarn, or pnpm

## Commands

| Command        | Description              |
|----------------|--------------------------|
| `npm install`  | Install dependencies     |
| `npm run dev`  | Start dev server (HMR)    |
| `npm run build`| Type-check + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint               |

## Project structure

```
src/
├── api/          # API helpers (e.g. product list)
├── components/   # Shared UI (Header, Footer, Hero, etc.)
├── pages/        # Route-level pages (Home, About, Support, Products)
├── types/        # TypeScript types
├── app.tsx       # App shell and routes
├── main.tsx      # Entry point
└── index.css     # Global + Tailwind styles
```

## Main features

- **Home** — Hero, features, product highlights, heritage, testimonials, stats
- **Our Story** — About company, mission, quality, distribution
- **Support** — Contact form, business hours, address, phone, email
- **Products** — Full catalog from [product catalogue API](https://product-catalogue-api-ivvhc.ondigitalocean.app) (company id in header, list endpoint)

## Environment

No env vars required for the current setup. The product API uses a fixed company id in the client; if you later need config (e.g. API base URL), add a `.env` file and reference it in the app (and keep `.env*.local` out of version control via `.gitignore`).

## License

Private — MRG Products. All rights reserved.
