# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16 project that converts the Canvas HTML5 yoga template into a modern React application. The project uses TypeScript and maintains all original Canvas template styling through static CSS files in `/public`.

## Architecture

### Hybrid Approach: Next.js + Legacy Template Assets

This project bridges traditional HTML templates with modern Next.js. The architecture intentionally preserves the original Canvas template's CSS and JavaScript rather than fully converting to React-style components.

**Key architectural decisions:**

1. **Static Assets in Public**: All Canvas CSS (`style.css`, `font-icons.css`, `swiper.css`, `yoga.css`) and JavaScript (`plugins.min.js`, `functions.bundle.js`) are loaded via `<link>` and `<Script>` tags in `layout.tsx`. These files control most styling and interactive behavior.

2. **Layout Pattern**: `app/layout.tsx` serves as the shell that:
   - Loads all Canvas CSS files in `<head>`
   - Includes `Header` and `Footer` components automatically on every page
   - Wraps content in `<div id="wrapper">` to maintain Canvas's expected DOM structure
   - Loads Canvas JavaScript with `strategy="beforeInteractive"` to ensure proper initialization

3. **Component Structure**:
   - `app/components/Header.tsx` - Converted from HTML header, uses Next.js `<Link>` but maintains Canvas classes
   - `app/components/Footer.tsx` - Converted from HTML footer, uses Next.js `<Link>` and `<Image>`
   - Page components in `app/*/page.tsx` - Content sections without header/footer

4. **Styling Philosophy**: Do NOT convert Canvas classes to Tailwind or CSS modules. Pages must use the original Canvas class names (e.g., `slider-element`, `hero-diagonal`, `content-wrap`) to work with the loaded stylesheets.

### Font Loading

Google Fonts (Sansita and Roboto) are loaded via `next/font/google` and applied as CSS variables (`--font-sansita`, `--font-roboto`). The `body` also includes Canvas classes `stretched` and `sticky-footer`.

## Development Commands

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Production server (run after build)
npm start

# Lint check
npm run lint
```

The dev server runs on `http://localhost:3000` by default.

## Adding New Pages

When converting HTML template pages to Next.js:

1. Create route directory: `app/[page-name]/page.tsx`
2. Extract content between `<!-- Content -->` and `<!-- #content end -->` from original HTML
3. Maintain Canvas DOM structure: Use `<section id="content">` with `<div className="content-wrap">`
4. Header/Footer are automatic—do not include them in page files

### HTML to JSX Conversion Rules

**Critical transformations:**
- `class="..."` → `className="..."`
- `style="prop: value;"` → `style={{ prop: 'value' }}`
- Self-closing tags: `<img>` → `<img />`
- Inline event handlers need conversion to React patterns
- `for` attribute → `htmlFor`

**Do not change:**
- Canvas-specific class names (they must match loaded CSS)
- Data attributes like `data-animate`, `data-scrollto` (Canvas JS expects these)
- DOM structure that Canvas JavaScript depends on (IDs, wrapper divs, etc.)

### Example Page Structure

```typescript
export default function PageName() {
  return (
    <section id="content" className="bg-white">
      <div className="content-wrap pt-0">
        <div className="container">
          {/* Canvas HTML content converted to JSX */}
        </div>
      </div>
    </section>
  );
}
```

## Original Template Reference

Source HTML files are in parent directory (`../`):
- `demo-yoga.html` - Main home page reference
- `demo-yoga-about-us.html` - About page
- `demo-yoga-contact-us.html` - Contact page
- `demo-yoga-pricing.html` - Pricing page
- `demo-yoga-login.html` - Login page

These files contain the original markup to reference when creating new Next.js pages.

## Static Asset Organization

```
public/
├── style.css              # Main Canvas stylesheet (794KB)
├── css/                   # Additional Canvas stylesheets
│   ├── font-icons.css     # Icon fonts
│   ├── swiper.css         # Slider library
│   └── custom.css
├── js/                    # Canvas JavaScript libraries
│   ├── plugins.min.js     # jQuery plugins bundle
│   └── functions.bundle.js # Canvas core functions
├── images/                # Template images
└── demos/yoga/            # Yoga-specific assets
    ├── yoga.css           # Yoga theme styles
    └── images/            # Yoga theme images
```

When referencing assets in JSX, use paths relative to `/public` (e.g., `/images/logo.png`, `/demos/yoga/images/hero-1.jpg`).

## TypeScript Configuration

- Import alias: `@/*` maps to project root
- Strict mode enabled
- JSX transform: `react-jsx`

## Interactive Features

Canvas JavaScript files handle most interactive behavior:
- Slider/carousel functionality (Swiper)
- Sticky headers
- Mobile menu toggles
- Scroll animations (`data-animate` attributes)
- Lightbox modals

If these features don't work after conversion, verify:
1. Canvas JS files load before page content
2. DOM structure matches Canvas expectations (IDs, classes)
3. Data attributes are preserved (e.g., `data-effect="fade"`)

## Deployment Considerations

When building for production:
- Large CSS file (794KB) is served statically—consider CDN
- Canvas JavaScript requires jQuery (bundled in plugins.min.js)
- All `/public` assets are copied to build output
- Next.js handles code splitting for React components only, not Canvas assets
