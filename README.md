# NDG Pharmaceutical Pvt. Ltd. — Landing Page

A modern, premium, enterprise-grade single-page website for **NDG Pharmaceutical Pvt. Ltd.**
_"Your Partner in Health & Wellness"_

Built to communicate trust, reliability, quality, innovation, and healthcare
excellence — with a corporate visual language inspired by leading pharmaceutical
companies, while remaining unique to NDG.

## Tech Stack

- **React 18** + **Vite** — fast, modern build tooling
- **Tailwind CSS** — utility-first styling with a custom brand design system
- **Framer Motion** — premium scroll/hover/counter animations
- **Lucide React** — clean, consistent iconography

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Project Structure

```
src/
├── App.jsx                 # Page composition
├── main.jsx                # React entry point
├── index.css               # Tailwind layers + global styles
├── data/
│   └── content.js          # Centralized copy, stats, products, nav, etc.
├── hooks/
│   └── useCountUp.js       # rAF-based animated counter
├── utils/
│   └── motion.js           # Shared Framer Motion variants
└── components/
    ├── Navbar.jsx          # Sticky nav (transparent → solid on scroll)
    ├── Hero.jsx            # Full-viewport gradient hero + floating cards
    ├── Stats.jsx           # Animated statistic counters
    ├── About.jsx           # Mission + feature points
    ├── CoreValues.jsx      # Four value cards
    ├── Products.jsx        # Top products (placeholder cards)
    ├── WhyChooseUs.jsx     # Trust checklist
    ├── ContactCTA.jsx      # Full-width contact call-to-action
    ├── Footer.jsx          # Corporate footer
    └── ui/
        ├── SectionHeading.jsx   # Reusable eyebrow + title + subtitle
        └── ImagePlaceholder.jsx # Branded image placeholder
```

## Design System

Defined in [`tailwind.config.js`](tailwind.config.js):

| Token              | Value     | Usage                  |
| ------------------ | --------- | ---------------------- |
| `brand-blue`       | `#0B3C5D` | Primary deep blue      |
| `brand-dark`       | `#072C45` | Dark blue              |
| `brand-teal`       | `#14B8A6` | Teal accent            |
| `brand-teal-dark`  | `#0F8F82` | Dark teal              |
| `surface-light`    | `#F8FAFC` | Light section bg       |
| `surface-border`   | `#E5E7EB` | Borders                |
| `ink-primary`      | `#1F2937` | Primary text           |
| `ink-secondary`    | `#6B7280` | Secondary text         |

Color distribution targets **60% white / 30% deep blue / 10% teal**.
Typography uses **Inter** (headings 700–800, body 400–500).

## Customizing Content

All copy, statistics, products, and contact details live in
[`src/data/content.js`](src/data/content.js) — update there and the UI follows.
Image placeholders (`ui/ImagePlaceholder.jsx`) mark where the client's real
photography (manufacturing, labs, packaging, research, healthcare
professionals, products) should be dropped in.

## Accessibility & Performance

- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`) and a skip link
- Keyboard-visible focus rings; `prefers-reduced-motion` respected
- Responsive, mobile-first layouts across all breakpoints
- Lazy, scroll-triggered animations that run once

---

© 2026 NDG Pharmaceutical Pvt. Ltd. All Rights Reserved.
