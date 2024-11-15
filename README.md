# EgyptEAT

Egyptian food restaurant website built with React showcasing traditional cuisine.

## Technologies Used

- **React 18** - UI library
- **Tailwind CSS** - Styling framework
- **React Icons** - Icon library
- **Vite** - Build tool

## Main Components

### Navbar
Fixed navigation bar features:
- Sticky scroll behavior with background change
- Smooth scroll to sections
- Responsive mobile menu
- Profile avatar with dropdown indicator
- Active section underline animation

### Hero
Landing section displays:
- Restaurant tagline and description
- Egyptian Koshary image with slow spin animation
- Two CTA buttons (Food Menu & Our Table)
- Animated scroll down arrow
- Smooth navigation to sections

### TopList
Menu showcase with:
- 3 featured Egyptian dishes (Falafel, Salad, Um Ali)
- Star ratings and prices
- Hover effects with scale and shadow
- Order button for each dish

### Banner
About section includes:
- Large background image
- Restaurant description
- Two-column responsive layout

### OurServices
Services section features:
- 4 service cards with icons
- Hover animations with scale and color change
- Footer with designer credit and copyright

## Features

- Fully responsive design
- Smooth scroll navigation
- Background blur effects
- Custom animations (spin, bounce, hover)
- Section-based navigation with offset
- Backdrop blur overlay

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The app will run on `http://localhost:2025`

## Project Structure

```
src/
├── components/
│   ├── Hero/
│   │   └── Hero.jsx
│   ├── Navbar/
│   │   └── Navbar.jsx
│   ├── TopList/
│   │   └── TopList.jsx
│   ├── Banner/
│   │   └── Banner.jsx
│   └── OurServices/
│       └── OurServices.jsx
├── assets/
├── App.jsx
├── main.jsx
└── index.css
```

## Configuration

### Tailwind Config
- **Primary Color**: `#f97316` (orange)
- **Font**: Poppins from Google Fonts
- **Container**: centered with responsive padding
  - Default: 1rem
  - SM: 2rem
  - LG: 4rem
  - XL: 5rem
  - 2XL: 6rem
- **Custom Animations**:
  - `spin-slow`: 20s rotation
- **Custom Classes**:
  - `.primary-btn`: Orange button style
  - `.secondary-btn`: Gray button style
  - `.img-shadow`: Drop shadow effect

### Vite Config
- **Port**: 2025
- **Host**: available on all networks (::)

## Design Features

- Background image with blur overlay
- Smooth section transitions
- Hover animations on cards
- Icon color transitions
- Underline animations on nav items
- Animated profile dropdown
- Pulse animation on heart icon

## Notes

- Smooth scroll offset accounts for fixed navbar (80px)
- Mobile menu with slide animation
- All sections have unique IDs for navigation
- Footer includes designer attribution