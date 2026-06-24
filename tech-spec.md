# Technical Specification -- Dharun Kumar S Portfolio

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.1.0 | UI framework |
| react-dom | ^19.1.0 | React DOM renderer |
| typescript | ^5.8.0 | Type safety |
| vite | ^6.3.0 | Build tool / dev server |
| @vitejs/plugin-react | ^4.5.0 | Vite React plugin |
| tailwindcss | ^4.1.0 | Utility-first CSS |
| @tailwindcss/vite | ^4.1.0 | Tailwind Vite integration |
| framer-motion | ^12.38.0 | Scroll animations, viewport triggers, useScroll, useTransform, motion.create |
| lucide-react | ^0.344.0 | Icon library (if needed) |

No shadcn/ui components needed -- this is a fully custom portfolio with no standard UI patterns (forms, dialogs, tables, etc.). All components are bespoke.

No additional animation libraries beyond Framer Motion. No Three.js, no GSAP. The design specifically uses lightweight CSS transforms and Framer Motion for all effects.

## Component Inventory

### Layout

| Component | Source | Notes |
|-----------|--------|-------|
| **App** | Custom | Root component: sets up Google Font (Kanit), global dark background, renders all sections in order |
| **PageWrapper** | Custom | Main wrapper div with `overflowX: 'clip'` and `#0C0C0C` background |

### Sections

| Component | Source | Notes |
|-----------|--------|-------|
| **HeroSection** | Custom | Full-viewport hero: navbar, gradient heading, tagline, contact CTA, centered portrait with Magnet |
| **MarqueeSection** | Custom | Dual-row horizontal scrolling image gallery driven by scroll position |
| **AboutSection** | Custom | Gradient heading, 4 decorative corner images, AnimatedText paragraph, contact CTA |
| **ServicesSection** | Custom | White bg with rounded top corners, 5 numbered service items with staggered fade-in |
| **ExperienceSection** | Custom | Warm off-white bg, 3D cube decoration, 2 experience items with tech tags |
| **ProjectsSection** | Custom | Dark bg with rounded top corners, 3 sticky-stacking project cards with image grids |
| **AchievementsSection** | Custom | Warm off-white bg, 3 achievement cards with alternating image/content layout |
| **ContactSection** | Custom | Dark bg, gradient heading, contact grid, certification badges, skills pills, CTA, footer |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| **FadeIn** | Custom | All sections -- Framer Motion wrapper for scroll-triggered entrance animations |
| **Magnet** | Custom | Hero portrait -- mouse-following magnetic hover effect |
| **AnimatedText** | Custom | About section paragraph -- character-by-character scroll-driven opacity reveal |
| **ContactButton** | Custom | Hero, About, Contact sections -- gradient pill CTA button |
| **LiveProjectButton** | Custom | Project cards -- ghost/outline pill button |

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **FadeIn (viewport entrance)** | Framer Motion | `whileInView` with `once: true, margin: "50px"`, configurable delay/duration/x/y via props. Use `motion.create()` for dynamic element tag. | Low |
| **Magnetic hover** | Custom hook + CSS | `useRef` for element bounds, mousemove listener on padded zone, `translate3d` transform divided by strength factor. CSS transitions for smooth in/out. | Medium |
| **Character-by-character text reveal** | Framer Motion `useScroll` | `useScroll` targeting paragraph with offset `['start 0.8', 'end 0.2']`. Map scroll progress to per-character opacity. Each char: invisible placeholder + absolute animated span. | High |
| **Scroll-driven parallax marquee** | Native scroll listener | Passive `scroll` event on window. Calculate offset from sectionTop, apply CSS `translateX` to both rows (opposite directions). Triple images for seamless loop. | Medium |
| **Sticky card stacking** | Framer Motion `useScroll` + `useTransform` | Cards are `position: sticky`. Use `useScroll` + `useTransform` to interpolate scale based on scroll progress within each card's container. `targetScale = 1 - (totalCards - 1 - index) * 0.03`. | High |
| **Section load sequence** | Framer Motion `initial`/`animate` | Staggered delays on hero elements (0ms, 150ms, 350ms, 500ms, 600ms). No scroll trigger needed -- plays on mount. | Low |
| **Hover states** | Tailwind CSS | `hover:opacity-70`, `hover:bg-[#D7E2EA]/10`, `transition-opacity duration-200`. Pure CSS, no JS needed. | Low |

## State & Logic

This is a presentation portfolio with no complex state management. No global state library needed.

### Local State

| Component | State | Type | Purpose |
|-----------|-------|------|---------|
| **MarqueeSection** | `scrollOffset` | `number` | Derived from window.scrollY, drives translateX on both rows. Updated via passive scroll listener. |
| **Magnet** | `position` | `{ x: number, y: number }` | Mouse position offset relative to element center. Updated via mousemove/mouseleave listeners. |

### Refs (no re-render needed)

| Component | Ref | Purpose |
|-----------|-----|---------|
| **MarqueeSection** | `sectionRef` | Measure section top position for scroll offset calculation |
| **Magnet** | `elementRef` | Get element bounds for mouse position calculation |
| **AnimatedText** | `paragraphRef` | Target element for Framer Motion `useScroll` |
| **ProjectsSection** | Card refs | Target elements for individual `useScroll` instances per card |

## Other Key Decisions

### Google Fonts Loading

Load Kanit (weights 300-900) via `<link>` in `index.html` rather than npm package. Simpler setup, no font-loading library needed.

### Image Assets

All images are served from external URLs (Figma assets, CloudFront, motionsites.ai). No local image files needed. Use standard `<img>` tags with `loading="lazy"` for performance.

### Scroll Listener Strategy

The marquee uses a native `addEventListener('scroll', handler, { passive: true })` rather than Framer Motion's scroll utilities. This is because the marquee needs continuous real-time updates mapped directly to scrollY for smooth parallax -- Framer Motion's higher-level scroll APIs are better suited for the discrete trigger-based animations elsewhere.

### CSS Gradient Text

The `.hero-heading` class uses `background-clip: text` with `text-fill-color: transparent`. Define as a utility class in the global CSS or via Tailwind arbitrary values: `bg-gradient-to-b from-[#646973] to-[#BBCCD7] bg-clip-text text-transparent`.

### Section Overlap Transitions

Sections overlap using negative margins (`-mt-10` to `-mt-14`) and `z-index: 10` on the upper layer. Rounded top corners (`rounded-t-[40-60px]`) create the card-lifting visual effect. No JS needed -- pure CSS positioning.

### Responsive Breakpoints

Use Tailwind's default breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`) with mobile-first approach. Heavy use of `clamp()` for fluid typography. All sizes specified in design tokens map to Tailwind utilities or arbitrary values.

### Contact Button Gradient

The gradient background, inner box-shadow, and outline offset cannot be achieved with pure Tailwind utilities. Use inline styles or a dedicated CSS class for this component.
