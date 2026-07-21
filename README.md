# Lakshan — Portfolio

A Next.js 15 + TypeScript + Tailwind CSS 4 portfolio, built in the
"minimal, premium, motion-everywhere" direction (Linear / Vercel / Framer style),
with a WebGL 3D tech-stack ring and depth-scroll section transitions.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included

- **Smooth scroll** via Lenis, respecting `prefers-reduced-motion`
- **Custom cursor** with a glow ring that grows over links/buttons (fine-pointer devices only)
- **Magnetic buttons** — primary CTAs pull slightly toward the cursor
- **3D flip-card role rotator** in the hero — each role has its own icon and accent color
- **Hero illustration** (`components/hero-avatar.tsx`) — your uploaded portrait
  (`public/avatar.png`) floats gently, tilts toward the cursor, and sits inside
  a soft gradient glow with a couple of floating context badges ("Clean code",
  project count pulled straight from `stats` in `data.ts`). Stacks above the
  text on mobile, sits beside it on desktop.
- **Scramble-text reveal** on the hero name, plus a staggered fade/slide-in for
  the rest of the hero content
- **Interactive grid background** that drifts with the mouse
- **Per-section 3D depth reveal** — most sections scale up from a slight
  zoom-out with a subtle rotateX tilt as they enter the viewport
  (`components/reveal-3d.tsx`), built on Framer Motion's scroll-linked
  transforms so it stays in sync with Lenis's smooth scroll. Skips itself
  entirely if the visitor has `prefers-reduced-motion` on.
- **Pinned horizontal-scroll tech stack** (`components/tech-stack.tsx`) — the
  section sticks in place while the tech cards glide smoothly left as you keep
  scrolling down (no rotation, spring-smoothed, distance computed from the
  actual card count so it never over- or under-shoots). Falls back to a plain
  scrollable row if the visitor prefers reduced motion.
- **Dark/light theme toggle**, persisted to `localStorage`
- **Category-filtered project grid** with Framer Motion layout transitions
- Separate **Experience** (vertical timeline) and **Education** (card grid) sections
  with distinct visual treatments
- **Animated stat counters**
- Fonts: Space Grotesk (display), Inter (body), IBM Plex Mono (numbers/labels)


## Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lenis · lucide-react
