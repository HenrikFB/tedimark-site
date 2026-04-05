# TeDiMark — Technology. Digitalization. Marketing.

A high-end consultancy website built with Next.js 15, featuring GSAP-powered scroll animations, physics-based interactions, and colorful page transitions.

## Tech Stack

- **Next.js 15** (App Router)
- **GSAP + ScrollTrigger** — scroll-driven animations, sticky cards, SVG transitions
- **Tailwind CSS 4** — utility-first styling
- **Lenis** — smooth scrolling
- **next-transition-router** — SVG stroke page transitions
- **Matter.js** — physics-based hover tags
- **Lottie-web** — cursor-following fire animation

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with hero, services, process cards, CTA |
| `/about` | Pinned scroll sections with rotation |
| `/projects` | Project cards grid |
| `/services` | Services overview grid |
| `/services/[slug]` | Individual service pages (7 total) |
| `/contact` | Full-page cursor spotlight CTA |

## Animation Elements

Adapted from collected YouTube tutorials:

1. **SVG Page Transitions** — bezier paths draw and fill between routes
2. **Layered Menu** — 4-color scaleY reveal with staggered link animations
3. **Hero Text Reveal** — per-character animation with brand colors
4. **Services Hover** — elastic expand + Matter.js physics tags
5. **SVG Scroll Swap** — stroke-dashoffset curves fill viewport on scroll
6. **Sticky Cards** — 3D card stack peels off one by one
7. **Cursor Spotlight** — radial-gradient mask follows cursor with Lottie fire
8. **Pinned Sections** — full-viewport sections with rotation on scroll
