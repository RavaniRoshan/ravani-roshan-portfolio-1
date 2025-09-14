# Ravani Roshan - Developer Portfolio

A pixel-perfect, animated developer portfolio website built with Vue 3, Vite, and anime.js.

## Features

- Responsive design that works on all devices
- Advanced animations and transitions using anime.js
- Modern UI with a dark theme
- Sections for About, Projects, Skills, Certificates, and Contact
- Smooth scrolling navigation
- Form validation and submission
- **Particle background system with physics**
- **3D tilt effects on interactive elements**
- **Custom cursor with trailing effect**
- **Loading screen with animated transition**
- **Animation showcase demonstrating all effects**
- **Performance-optimized animations**

## Technologies Used

- Vue 3 (Composition API)
- Vite
- anime.js for advanced animations
- CSS3 for styling

## Project Structure

```
src/
├── components/
│   ├── Header.vue
│   ├── HeroSection.vue
│   ├── BlackSection.vue
│   ├── BlueSection.vue
│   ├── AboutSection.vue
│   ├── ProjectsSection.vue
│   ├── SkillsSection.vue
│   ├── CertificatesSection.vue
│   ├── ContactSection.vue
│   ├── Footer.vue
│   ├── LoadingScreen.vue
│   └── AnimationShowcase.vue
├── pages/
│   └── Home.vue
├── assets/
│   └── main.css
├── App.vue
└── main.js
```

## Advanced Animation Features

### Hero Section
- 3D flip text animation for the name
- Particle background system with connecting lines
- Staggered word reveal for the bio

### Interactive Elements
- 3D tilt effects that respond to mouse movement
- Spring physics for natural button interactions
- Custom cursor with trailing effect
- Loading screen with animated transition

### Section Animations
- Elastic reveal effects for section titles
- Bounce animations for cards
- Scroll-triggered animations for progressive content reveal

### Performance Optimizations
- Hardware-accelerated animations
- Throttled event handling
- CSS containment for better rendering
- Reduced motion support for accessibility

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Customization

To customize the content:

1. Update the bio in `src/components/HeroSection.vue`
2. Modify project details in `src/components/ProjectsSection.vue`
3. Update skills in `src/components/SkillsSection.vue`
4. Change certificates in `src/components/CertificatesSection.vue`
5. Update contact information in `src/components/ContactSection.vue`

## Animation Showcase

The portfolio includes an interactive animation showcase demonstrating all the advanced effects:
- 3D Flip
- Bounce
- Elastic
- Spring
- Glow
- Morph

## Deployment

The portfolio can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## License

This project is open source and available under the MIT License.