# Kando E-commerce Homepage

A modern, conversion-focused e-commerce homepage built with Next.js, React, and Tailwind CSS.

## Features

- **Credible & Trustworthy**: Trust bar, secure payment indicators, and clear value propositions
- **Mobile-First Design**: Fully responsive across all device sizes
- **High Discovery**: Trending sections, flash deals, best sellers, and personalized recommendations
- **Fast & Performant**: Lazy-loaded images, optimized animations, minimal layout shift
- **Accessible**: WCAG-friendly contrast, keyboard navigation, ARIA labels

## Design System

- **Colors**: Deep trust blue (#1e40af) primary, light blue accents, cool grays
- **Typography**: Modern sans-serif system font stack
- **Spacing**: 8px grid system
- **Corners**: 14-18px rounded corners on cards and buttons
- **Shadows**: Subtle, consistent elevation

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
kando_visuals/
├── app/
│   ├── globals.css          # Global styles and design system
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── TrustBar.tsx         # Top trust indicators
│   ├── Header.tsx           # Navigation and search
│   ├── HeroCarousel.tsx     # Rotating hero banners
│   ├── CategoryStrip.tsx    # Horizontal category navigation
│   ├── ProductCard.tsx      # Individual product card
│   ├── ProductCarousel.tsx  # Horizontal product scrolling
│   ├── ProductGridSection.tsx # Product grid layouts
│   ├── FlashDeals.tsx       # Countdown deals section
│   ├── ValueProps.tsx       # Trust/value propositions
│   ├── Footer.tsx           # Site footer
│   └── BackToTop.tsx        # Scroll to top button
└── lib/
    └── mockData.ts          # Mock product and category data
```

## Components

All components are built with:
- TypeScript for type safety
- Tailwind CSS for styling
- Accessibility best practices
- Mobile-first responsive design
- Performance optimizations

## Mock Data

The project includes mock data structures for:
- Products (with images, prices, ratings, discounts)
- Categories (with icons and slugs)
- Hero slides (with CTAs and images)
- Promo tiles

Replace with your actual data sources when integrating with a backend.

