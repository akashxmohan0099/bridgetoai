# Bridge To AI — Brand Guidelines

## Brand

- **Name**: Bridge To AI
- **Tagline**: Making AI work for your business
- **Audience**: Small to medium Australian businesses
- **Tone**: Confident, clear, no jargon. Like a smart friend who happens to know AI.

---

## Color Palette

| Token        | Hex       | Usage                                    |
|--------------|-----------|------------------------------------------|
| `bg`         | `#f8f7f4` | Page background (warm off-white)         |
| `surface`    | `#ffffff` | Cards, form fields                       |
| `card`       | `#f1f0ec` | Secondary surfaces, icon backgrounds     |
| `text`       | `#1a1a1a` | Primary text, primary buttons            |
| `text-muted` | `#71717a` | Secondary text, descriptions             |
| `text-light` | `#a1a1aa` | Placeholders, tertiary text              |
| `border`     | `#e4e4e0` | Card borders, dividers                   |
| `accent`     | `#c8e040` | Sparingly — checkmarks, active states    |
| `hero-from`  | `#7eaec4` | Hero gradient start                      |
| `hero-via`   | `#5a94ad` | Hero gradient middle                     |
| `hero-to`    | `#3b7a96` | Hero gradient end                        |

### Rules
- Accent (`#c8e040`) is NEVER used as a button color or large background. Only small highlights (dots, checkmarks, active tab indicators).
- Primary buttons are always `bg-text text-white` (dark) or `bg-white text-text` (on dark backgrounds).
- Hero is the ONLY section with a colored background. Everything else is `bg` or `surface`.

---

## Typography

**Font**: Plus Jakarta Sans (Google Fonts) — all weights via `--font-jakarta`

| Element          | Size    | Weight | Color        | Tracking       |
|------------------|---------|--------|--------------|----------------|
| Hero H1          | clamp(2.4rem, 5.5vw, 4rem) | 700 | white | -0.03em |
| Section H2       | clamp(1.8rem, 3.5vw, 2.6rem) | 700 | text | -0.02em |
| Card title       | 17px    | 700    | text         | normal         |
| Body / card desc | 15px    | 400    | text-muted   | normal         |
| Small labels     | 13px    | 600    | text-muted   | normal         |
| Nav links        | 14px    | 500    | text-muted   | normal         |
| Buttons          | 15px    | 600    | white/text   | normal         |

### Rules
- MINIMUM body text size: 15px. Nothing smaller except labels (13px).
- No uppercase tracking on section labels. Keep it natural.
- All section headings are LEFT-aligned, not centered.
- line-height: 1.1 for headings, 1.6 for body.

---

## Spacing

| Token             | Value    |
|-------------------|----------|
| Section padding   | `py-24`  |
| Section divider   | `border-t border-border` between sections |
| Card padding      | `p-7`    |
| Card gap          | `gap-4`  |
| Max width         | `1200px` |
| Side padding      | `px-6 sm:px-10` |
| Heading to content| `mb-14`  |

---

## Components

### Buttons
- Shape: `rounded-lg` (NOT rounded-full pills)
- Primary: `bg-text text-white px-6 py-3 text-[15px] font-semibold`
- Primary on dark: `bg-white text-text`
- No icon circles, no arrows, no uppercase. Just clean text.
- Hover: `hover:bg-text/85` or `hover:bg-white/90`

### Cards
- Shape: `rounded-2xl`
- Background: `bg-surface`
- Border: `border border-border`
- Padding: `p-7`
- Hover: `hover:shadow-md hover:border-text/12` (subtle)

### Icons
- Library: `@phosphor-icons/react`
- Weight: `duotone` for cards, `bold` for UI elements
- Size: 22px in cards
- Container: `h-11 w-11 rounded-lg bg-card` (square, not circle)

### Section structure
```
<section className="py-24 border-t border-border">
  <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
    <div className="max-w-xl mb-14">
      <h2>Left-aligned heading</h2>
      <p>One line of description</p>
    </div>
    {/* Content */}
  </div>
</section>
```

---

## Page Structure

1. **Navbar** — Logo left, 4 text links center, dark CTA button right
2. **Hero** — Full-viewport, blue gradient, headline + subtitle + CTA + risk reversal, stat strip at bottom
3. **Marquee** — Subtle scrolling service names
4. **Three Service Offerings** — The 3 delivery methods (Training Day, Setup & Integration, Custom Build)
5. **Six Service Areas** — The 6 capability buckets with full headings, taglines, and feature lists
6. **How It Works** — 4 numbered steps
7. **FAQ** — Accordion, 6 questions
8. **Contact Form** — Left copy with trust builders, right form
9. **Footer** — 3-column (brand, nav, contact)

---

## Content Architecture

### Three Service Offerings (HOW we deliver)
These are the engagement models. Brief cards, one line each.

1. **AI Training Day** — We identify gaps and run a tailored one-day session
2. **AI Setup & Integration** — We find the right tools (ours or third-party) and set them up
3. **Custom AI Build** — We build a complete platform from scratch

### Six Service Areas (WHAT we deliver)
These are the capability domains. Each gets a card with:
- Heading (exact from copy doc)
- Tagline (exact from copy doc)  
- Feature list (exact items from copy doc)

These headings, taglines, and feature names must match the original copy document EXACTLY.
