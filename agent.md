agent.md
Project Objective
Build a pixel-perfect, animated developer portfolio website matching the attached Figma image.
Tech stack: Vue 3 + Vite + anime.js (for all major animations).

Design/UX Specifications
STRICT Fidelity:

Fonts, color palette, component shapes, and overall structure must exactly match the attached design.

Color Scheme:

Background: Deep navy / near-black.

Foreground: White.

Highlights: Vivid blue (match Figma swatch exactly).

Sections: Black and gray cards.

All rounded corners and spacings per Figma.

Typography:

Sans-serif font (Montserrat, Google Sans, or closest match).

Title "RAVANI ROSHAN": Large, blue, precise letter spacing.

Layout:

Fixed-width, centered main container, luxury white margin.

Two top buttons: "HOME" (top-left), "FIND ME" (top-right)—small, black with white mono text, rounded.

Major blocks:

White section (title)

Black bar with two light gray rounded cards

Vivid blue section with stacked rounded rectangles

Responsiveness:

Stacks blocks vertically on small screens.

Responsive font scaling, margin/padding adapts on mobile.

Animations
Library: anime.js for all sequence/entrance and hover effects.

On page load:

Stepwise fade/slide in for header, black card row, blue section (use anime timelines).

Title:

Text highlight or subtle per-letter entrance themed animation.

Hover states:

Buttons and cards: scale, shadow, or color accent on hover.

Content
Name: Ravani Roshan

Bio:
Highly motivated Computer Science Engineering student specializing in full-stack development and artificial intelligence. Excels at transforming complex technical challenges into scalable, elegant solutions using Python, JavaScript, Rust, advanced AI frameworks. Passionate about building innovative applications, from AI-powered platforms to immersive web experiences. Currently studying for a B.Tech at Silver Oak University, contributes to open source, frequent hackathon winner. Skills: architectural problem-solving, system optimization, impactful technology. Earned many certificates in front-end, ML, prompt engineering, generative AI. Strong commitment to learning and technological excellence.

Cards/Sections:

Features, certificates, skills (as per Figma layout).

Placeholder sections for “About,” “Projects,” “Contact,” etc.

Technical Requirements
Project setup: Vite + Vue 3 (Composition API).

Directory structure:

/src/components/ for NavBar, Section, Card, etc.

/src/assets/ for images, fonts, styles.

Global CSS:

Variables for colors, fonts, spacings.

Import Google Fonts (if applicable).

Components:

NavBar, TitleSection, BlackSection, BlueSection, Card components for max reusability.

Responsive, flexible grid/flex layouts.

Animation hooks:

anime.js and Vue lifecycle for all entrance/hover animations.

Constraints
No deviating from Figma design.

No default/bare styles—add all border-radii, paddings, spacings, and sizing per pixel spec.

Only use colors and fonts from the Figma.

All markup must use semantic, accessible HTML.

Comment key sections and animation logic.

Deliverables
Complete, ready-to-deploy Vue 3 + Vite project.

Modular, reusable component code.

Inline comments and TODO notes for content editing (where applicable).

Example:

App.vue — shell/layout/root styles

components/NavBar.vue, components/TitleSection.vue, etc.

All colors/fonts via CSS variables or modules.

Animated sequence via anime.js in main sections.

Example User Story
“As the agent, take the attached design as the sole source of visual truth. Build a developer portfolio that is visually identical, fully responsive, and delightfully animated. Use only Vue 3/Vite/anime.js as specified. Modularize all sections as components. Populate all bio and section content with provided text and placeholders. All code should be commented and packaged for direct deployment.”

