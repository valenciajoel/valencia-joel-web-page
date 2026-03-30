# Design Specs: The Architectural Mission Control (v2.0)

## 🎨 Palette (HSL - Dark Mode Only)
*   **Deepspace (Background):** `hsl(230, 15%, 4%)` (Ultra-low dark blue-black).
*   **Mission Blue (Primary):** `hsl(199, 100%, 50%)` (Brilliant Cyan/Antigravity Blue).
*   **Panel Grey (Secondary):** `hsl(230, 15%, 8%)` (Darker panel backgrounds).
*   **Ghost Slate (Accent):** `hsl(215, 20%, 65%)` (Faded professional grey-blue for accents).
*   **Void Line (Border/Grid):** `hsla(215, 20%, 65%, 0.08)` (Subtle grid lines).
*   **Pure Text:** `hsl(0, 0%, 98%)`.

## 🖋️ Typography (The Technical Stack)
*   **Headings (H1-H3):** `Space Grotesk`, Bold. `tracking-tight`. (Futuristic, technical character).
*   **Body & Descriptions:** `Inter`, Regular/Medium. `leading-relaxed`. (Legibility first).
*   **Technical Labels & Data:** `JetBrains Mono`. (Precision labels, stats, breadcrumbs).

## 🚀 Layout & Components
*   **Modular Navbar:** 
    *   Centralized, floating bar.
    *   `backdrop-blur-lg` with `bg-background/20`.
    *   Border: `1px solid hsla(0, 0%, 100%, 0.1)`.
*   **Project Cards:**
    *   No box-shadow.
    *   Border illumination: Glow effect on hover using `linear-gradient` and `box-shadow: 0 0 20px -5px hsl(199, 100%, 50%)`.
    *   Background: `linear-gradient(to bottom right, hsl(230, 15%, 6%), hsl(230, 15%, 4%))`.
*   **Neural Grid:** Hero background features a subtle 80px x 80px grid. Each intersection should have a 1px "node" that pulses irregularly.

## ✨ Animation Logic (GSAP + Lenis)
*   **Neural Connect:** SVG Path "Connection Line" that follows the scroll position, literally connecting sections from the Hero down to the Footer.
*   **Hero Sequence:** A "Network Boot" animation where the grid nodes light up before the text reveals.
*   **Smoothing:** `Lenis` for core scrolling at 1.2s lerp.
*   **Interactives:** Hovering Project Cards triggers a glow pulse and subtle scale (1.01).

## 🖼️ Iconography & Visual Assets
*   **Icons:** Lucide-react (using `Primary` color for strokes, 1.5px weight).
*   **Data Motifs:** Use "Architectural Blueprints" (thin white lines with low opacity) as background textures for section transitions.
*   **Connection Lines:** SVG paths with animated `dash-offset` representing data flow.
