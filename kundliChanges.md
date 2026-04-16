# Kundli matching — file change log

Summary of files touched for the Kundli matching / Guna Milan feature (frontend route, UI, API, and tooling). Paths are relative to the repo root `Dr-Kunwar-Harshit-Rajveer/`.

---

## Client (`Aacharya-website/client/`)

| File | What changed |
|------|----------------|
| **`src/pages/KundliMatchingPage.jsx`** | New page for `/services/kundli-matching`: hero (title, stats, CTAs), services grid, Guna Milan card/table, booking modal, API wiring to `POST /api/guna-milan/calculate`, labels for Rashi/Nakshatra, etc. Imports hero art **`src/assets/heroKundliM.png`** and renders it in the hero right column. |
| **`src/pages/KundliMatchingPage.css`** | Styles for the whole Kundli page: hero (gradients, full-bleed right image with `margin-right: calc(50% - 50vw)`), hero image sizing/masks, text vs image stacking (`z-index` on copy vs art), hero bottom padding removed so the image aligns with the hero section bottom, `.km-divider` padding adjusted, responsive rules, and existing wheel styles if present. |
| **`src/assets/heroKundliM.png`** | Hero illustration asset (Kundali matching visual). |
| **`src/App.jsx`** | Registers the route **`/services/kundli-matching`** and lazy/regular import for **`KundliMatchingPage`**. |
| **`src/main.jsx`** | Imports **`./tailwind.css`** (Tailwind entry) alongside **`./App.css`**. |
| **`src/components/ui/OrbitingSkills.jsx`** | Optional orbit-style UI component (may be experimental or unused depending on current hero markup). |
| **`tailwind.config.js`** | Tailwind v4 config scaffold for the client. |
| **`postcss.config.js`** | PostCSS config using `@tailwindcss/postcss` for Tailwind v4. |
| **`src/tailwind.css`** | Tailwind `@tailwind` directives / theme entry file. |
| **`package.json`** | Adds Tailwind v4-related dev dependencies (`tailwindcss`, `@tailwindcss/postcss`, `postcss`, `autoprefixer`) and any other deps added for the feature. |
| **`package-lock.json`** | Lockfile updates matching `package.json`. |

---

## Server (`Aacharya-website/server/`)

| File | What changed |
|------|----------------|
| **`index.js`** | Mounts **`/api/guna-milan`** via `gunaMilanRoutes`. |
| **`routes/gunaMilanRoutes.js`** | Defines routes for Guna Milan (e.g. calculate endpoint). |
| **`controllers/gunaMilanController.js`** | Request handling for Guna Milan calculations. |
| **`utils/gunaMilanCalculator.js`** | Core Ashtakoot / Guna Milan logic (birth data → kootas, totals, etc.), using **`astronomy-engine`** (or similar) for planetary positions when applicable. |
| **`package.json`** | Dependency add for ephemeris/astronomy (e.g. `astronomy-engine`) if listed. |
| **`package-lock.json`** | Lockfile updates for server deps. |

---

## Hero image & layout (recent UI tweaks)

These behaviors are implemented mainly in **`KundliMatchingPage.css`** / **`KundliMatchingPage.jsx`**:

- Image anchored **bottom-right**, larger max dimensions, **flush to viewport right** using `calc(50% - 50vw)`.
- **Copy above image** in stacking order (`z-index` on `.km-hero-text` vs `.km-hero-visual`).
- **Hero section bottom** aligned with **image bottom** by removing extra hero bottom padding; spacing before the next block handled via **`.km-divider`** padding.
- Soft **CSS masks** on the image for left/top blend; **`.km-hero::after`** for a light bottom wash.

---

## Notes

- If **`OrbitingSkills.jsx`** is not imported anywhere, it can be removed later to reduce dead code.
- **`swisseph`** was not used on Windows in favor of a pure-JS ephemeris where applicable (per project notes).

*Generated to document the Kundli matching workstream; adjust rows if you trim Tailwind or unused components.*
