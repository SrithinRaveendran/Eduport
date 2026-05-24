# Eduport – React Landing Page

A clean React clone of the Eduport LMS landing page.

## Tech Stack
- **React 18** + **Vite**
- **React-Bootstrap** (Bootstrap 5) for layout & components
- **Separate CSS files** per component (no inline styles)
- Google Fonts: Nunito + Manrope

## Project Structure

```
eduport/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              ← App entry point
    ├── App.jsx               ← Root component
    ├── styles/
    │   ├── App.css           ← Global variables, shared button/section styles
    │   ├── Navbar.css
    │   ├── Hero.css
    │   ├── Stats.css
    │   ├── PopularCourses.css
    │   ├── BecomeInstructor.css
    │   ├── TrendingCourses.css
    │   ├── Testimonials.css
    │   └── Footer.css
    └── components/
        ├── Navbar.jsx        ← Sticky nav with dropdowns
        ├── Hero.jsx          ← Hero with floating cards
        ├── Stats.jsx         ← Animated count-up stats
        ├── PopularCourses.jsx ← Filterable course grid
        ├── BecomeInstructor.jsx
        ├── TrendingCourses.jsx ← Detailed course cards
        ├── Testimonials.jsx  ← Reviews + mentor panel
        └── Footer.jsx        ← Multi-column footer
```

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```
