# Local Trades Website Template

A premium, high-converting local trades business website built with:

- **Next.js 15** – App Router
- **TypeScript** – Full type safety
- **React 18** – Client-side interactivity
- **Tailwind CSS** – Utility classes + custom breakpoints
- **Separate CSS files** – Each section has its own stylesheet

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout - imports all CSS files
│   └── page.tsx            # Home page - assembles all sections
│
├── components/
│   ├── Navbar.tsx          # Sticky nav + mobile hamburger menu
│   ├── Hero.tsx            # Hero section with image placeholder
│   ├── TrustIndicators.tsx # 4-card dark trust bar
│   ├── Services.tsx        # 6-card services grid
│   ├── About.tsx           # About section with stats
│   ├── WhyChooseUs.tsx     # 4 benefit cards
│   ├── Process.tsx         # 4-step process timeline
│   ├── Gallery.tsx         # 6-image responsive gallery
│   ├── BeforeAfter.tsx     # Before / after showcase
│   ├── Reviews.tsx         # Horizontally scrolling review carousel
│   ├── FAQ.tsx             # Accordion FAQ
│   ├── CTABanner.tsx       # Full-width gradient CTA
│   ├── Contact.tsx         # Contact form (demo only - no backend)
│   ├── Footer.tsx          # Full site footer
│   ├── ImagePlaceholder.tsx # Reusable image placeholder box
│   └── AnimateOnScroll.tsx  # IntersectionObserver animation wrapper
│
└── styles/
    ├── globals.css          # CSS variables, resets, fonts
    ├── components.css       # Shared utilities (buttons, cards, forms)
    ├── navbar.css           # Navbar styles
    ├── hero.css             # Hero section styles
    ├── sections.css         # Trust, Services, About, Why, Process
    ├── gallery-reviews.css  # Gallery, Before/After, Reviews, FAQ, CTA
    └── contact-footer.css   # Contact form + Footer
```

---

## How to Customise

### 1. Change the accent colour
Open `src/styles/globals.css` and update one line:

```css
--color-accent: #1d4ed8; /* ← swap to any hex colour */
```

All buttons, icons, highlights and hover states update automatically.

---

### 2. Replace placeholder text
Every section's content is stored in a constant at the top of each component file. For example, in `Services.tsx`:

```ts
const SERVICES = [
  { icon: "🔧", title: "Service One", desc: "..." },
  // ← replace with real services
];
```

---

### 3. Replace image placeholders
Search for `<ImagePlaceholder` in any component and replace with Next.js `<Image />`:

```tsx
// Before
<ImagePlaceholder label="Hero Image" className="hero__img-placeholder" />

// After
import Image from "next/image";
<Image
  src="/images/hero.jpg"
  alt="Description of image"
  fill
  className="hero__img-placeholder"
/>
```

---

### 4. Connect the contact form
In `Contact.tsx`, find the `handleSubmit` function and replace the placeholder with a real API call:

```ts
// Replace this:
await new Promise((r) => setTimeout(r, 1000));

// With your real submission:
await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' },
});
```

---

### 5. Add real Google reviews
In `Reviews.tsx`, update the `REVIEWS` array with real customer review data.

---

## Responsive Breakpoints

| Name  | Width      | Target device       |
|-------|-----------|---------------------|
| xs    | ≥ 480px   | Large phones        |
| sm    | ≥ 640px   | Small tablets       |
| md    | ≥ 768px   | Tablets             |
| lg    | ≥ 1024px  | Laptops             |
| xl    | ≥ 1280px  | Desktops            |
| 2xl   | ≥ 1536px  | Large screens       |

The layout is **mobile-first** - base styles target small phones and scale up.

---

## Suitable for

- Plumbers
- Electricians
- Builders
- Roofers
- Landscapers
- Decorators
- Any local service business
