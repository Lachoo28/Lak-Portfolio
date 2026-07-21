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

## Where to edit content

Everything editable lives in **`src/lib/data.ts`**:
- `profile` — name, tagline, email, social links, resume URL
- `roles` — the rotating hero roles, each with an icon (`code`/`palette`/`layout`/`server`/`globe`) and accent color
- `projects` — title, description, tags, category, links, gradient
- `techStack` — labels shown in the 3D ring
- `experience` — jobs/roles (vertical timeline)
- `education` — degrees/certifications (card grid)
- `stats` — the animated counters

Swap the "Photo placeholder" box in `src/components/about.tsx` for a real
`<Image />` once you have a photo.

## Structure

```
src/
  app/
    layout.tsx       → fonts, theme + smooth-scroll + cursor providers
    page.tsx          → assembles all sections, wraps most in <Reveal3D>
    globals.css       → design tokens (colors, fonts, grid background, tech-ring chip styles)
  components/
    nav.tsx, hero.tsx, hero-avatar.tsx, role-flip.tsx, projects.tsx,
    tech-stack.tsx,
    experience.tsx, education.tsx, stats.tsx, about.tsx, contact.tsx, footer.tsx
    custom-cursor.tsx, magnetic.tsx, scramble-text.tsx, reveal-3d.tsx
    theme-provider.tsx, smooth-scroll.tsx
  lib/
    data.ts           → all placeholder content
public/
  avatar.png           → your hero illustration
```

## Next steps (from your original brief, not yet built)

- Dedicated **case study pages** (`/projects/[slug]`) with problem → research → wireframes → design → prototype → development → results
- Separate **Design Showcase** (Pinterest-style masonry, Figma links) and **Development Showcase** galleries
- **Command palette** (⌘K) for searching projects/skills/pages
- **Testimonials** section
- **Blog** for write-ups
- Real project images/screenshots (currently gradient placeholders)
- Swap the `<input>` in Contact for a real form handler (e.g. Resend, Formspree, or an API route)

## Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lenis · lucide-react
