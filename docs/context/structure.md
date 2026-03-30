# Technical Structure: Screaming Architecture (Portfolio)

## 🏗️ Folder Philosophy
Following the **Scope Rule** and **Screaming Architecture**:
- `src/features/*`: Business functionality (Hero, Projects, Skills, Contact).
- `src/components/*`: Global/Reusable UI components (Shared by 2+ features).
- `src/lib/*`: Core logic (GSAP configs, Lenis setup, Metadata).
- `src/actions/*`: Server actions for messaging (Email/WhatsApp).

## 🗺️ Data Architecture (Architect-First)
- **Source of Truth:** Content files in `src/data/` (JSON/Markdown) to separate content from presentation.
- **Domain Modeling:** Define Types in `@/types/portfolio.d.ts` (Project, Experience, Skill).

## ⚡ Server & Client Boundaries
- **Server Components (Default):** SEO-heavy sections (Hero, About, Projects).
- **Client Components (Interactive):** Navigation Bar (for GSAP/Lenis), Project Hover-effects, Contact Forms.
- **Data Fetching:** Static Generation (SSG) for high performance (Next.js 15).

## 📨 Mutation & Effects
- **Communication Action:** `src/actions/send-contact.ts` (Server-side validation with Zod).
- **GSAP Context:** Centrally managed in `src/lib/animations/gsap-context.tsx` to handle window Resize and Cleanups.

## 📦 Dynamic Performance
- **Image Optimization:** Next.js `<Image />` with `priority` for Hero and proper sizing (WebP).
- **Streaming:** Use `loading.tsx` for section transitions if necessary (Suspense boundaries).
