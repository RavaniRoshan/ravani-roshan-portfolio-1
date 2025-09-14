
<template>
  <div class="home-container">
    <Header />
    
    <!-- Section 1: Hero -->
    <HeroSection />
    
    <!-- Section 2: Black with Gray Cards -->
    <BlackSection />
    
    <!-- Section 3: Blue with Mixed Cards -->
    <BlueSection />
    
    <!-- Section 4: About -->
    <AboutSection />
    
    <!-- Section 5: Projects -->
    <ProjectsSection />
    
    <!-- Section 6: Skills -->
    <SkillsSection />
    
    <!-- Section 7: Certificates -->
    <CertificatesSection />
    
    <!-- Animation Showcase -->
    <AnimationShowcase />
    
    <!-- Section 8: Contact -->
    <ContactSection />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import HeroSection from '../components/HeroSection.vue';
import BlackSection from '../components/BlackSection.vue';
import BlueSection from '../components/BlueSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
import CertificatesSection from '../components/CertificatesSection.vue';
import ContactSection from '../components/ContactSection.vue';
import Footer from '../components/Footer.vue';
import AnimationShowcase from '../components/AnimationShowcase.vue';
import { onMounted } from 'vue';
import * as anime from 'animejs';

// Optimize all animations for performance
const optimizeAnimations = () => {
  // Use requestAnimationFrame for smooth animations
  const optimizeAnimation = (callback) => {
    return requestAnimationFrame(callback);
  };
  
  // Reduce motion for users who prefer it
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    // Reduce animation intensity
    document.documentElement.style.setProperty('--animation-intensity', '0.5');
  } else {
    document.documentElement.style.setProperty('--animation-intensity', '1');
  }
  
  // Throttle scroll events for better performance
  let ticking = false;
  const updateScrollAnimations = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Scroll animation logic here
        ticking = false;
      });
      ticking = true;
    }
  };
  
  // Add scroll event listener
  window.addEventListener('scroll', updateScrollAnimations, { passive: true });
  
  // Use CSS containment for better rendering performance
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.contain = 'layout style paint';
  });
};

// Main home page component
// Implements all timeline animations and hover effects using anime.js
onMounted(() => {
  // Optimize animations for performance
  optimizeAnimations();
  
  // Wait for DOM to be ready
  setTimeout(() => {
    // Initialize advanced animations
    initHeroAnimations();
    initSectionAnimations();
    initScrollAnimations();
    initHoverEffects();
    initCustomCursor();
    initInteractiveElements();
  }, 100);
});

// Initialize hero section animations
const initHeroAnimations = () => {
  // Animate title characters with 3D flip effect
  anime.default({
    targets: '.title-char',
    opacity: [0, 1],
    translateY: ['100%', '0%'],
    rotateX: [90, 0],
    delay: anime.default.stagger(50, { start: 500 }),
    duration: 1200,
    easing: 'easeOutQuint',
    complete: () => {
      // Add subtle glow effect after animation
      document.querySelectorAll('.title-char').forEach(char => {
        char.style.textShadow = '0 0 15px rgba(41, 138, 251, 0.8)';
      });
    }
  });

  // Animate subtitle words with staggered fade-in
  anime.default({
    targets: '.subtitle-word',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.default.stagger(30, { start: 1500 }),
    duration: 800,
    easing: 'easeOutQuint'
  });
};

// Initialize section animations
const initSectionAnimations = () => {
  // Animate section titles with elastic effect
  anime.default({
    targets: '.section-title',
    opacity: [0, 1],
    translateX: ['-100px', '0px'],
    scale: [0.8, 1],
    delay: anime.default.stagger(200, { start: 2000 }),
    duration: 1500,
    easing: 'spring(1, 80, 10, 0)'
  });

  // Animate black section cards with bounce effect
  anime.default({
    targets: '.black-section .card',
    opacity: [0, 1],
    translateX: ['-150px', '0px'],
    scale: [0.5, 1],
    delay: anime.default.stagger(150, { start: 2500 }),
    duration: 1200,
    easing: 'spring(1, 80, 10, 0)'
  });

  // Animate blue section cards with staggered slide-up
  anime.default({
    targets: '.blue-section .card',
    opacity: [0, 1],
    translateY: ['100px', '0px'],
    skewY: [10, 0],
    delay: anime.default.stagger(100, { start: 3000 }),
    duration: 1000,
    easing: 'easeOutExpo'
  });
};

// Create interactive elements with advanced physics
const initInteractiveElements = () => {
  // Add interactive buttons with spring physics
  const buttons = document.querySelectorAll('.social-link, .submit-button');
  buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
      anime.default({
        targets: button,
        scale: 0.95,
        duration: 100,
        easing: 'easeOutQuad'
      });
    });
    
    button.addEventListener('mouseup', () => {
      anime.default({
        targets: button,
        scale: 1,
        duration: 300,
        easing: 'spring(1, 80, 10, 0)'
      });
    });
    
    button.addEventListener('mouseleave', () => {
      anime.default({
        targets: button,
        scale: 1,
        duration: 300,
        easing: 'spring(1, 80, 10, 0)'
      });
    });
  });
  
  // Add interactive form elements
  const formInputs = document.querySelectorAll('.form-input, .form-textarea');
  formInputs.forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', () => {
      anime.default({
        targets: input,
        borderColor: '#298AFB',
        borderWidth: '3px',
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
    
    input.addEventListener('blur', () => {
      anime.default({
        targets: input,
        borderColor: '#D9D9D9',
        borderWidth: '2px',
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
  });
};

// Initialize hover effects
const initHoverEffects = () => {
  // Add hover animations for header buttons
  const homeButton = document.querySelector('.home-button');
  const findMeButton = document.querySelector('.find-me-button');
  
  if (homeButton) {
    homeButton.addEventListener('mouseenter', () => {
      anime.default({
        targets: homeButton,
        scale: 1.1,
        translateY: -5,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
        duration: 400,
        easing: 'easeOutQuint'
      });
    });
    
    homeButton.addEventListener('mouseleave', () => {
      anime.default({
        targets: homeButton,
        scale: 1,
        translateY: 0,
        boxShadow: 'none',
        duration: 400,
        easing: 'easeOutQuint'
      });
    });
  }
  
  if (findMeButton) {
    findMeButton.addEventListener('mouseenter', () => {
      anime.default({
        targets: findMeButton,
        scale: 1.1,
        translateY: -5,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
        duration: 400,
        easing: 'easeOutQuint'
      });
    });
    
    findMeButton.addEventListener('mouseleave', () => {
      anime.default({
        targets: findMeButton,
        scale: 1,
        translateY: 0,
        boxShadow: 'none',
        duration: 400,
        easing: 'easeOutQuint'
      });
    });
  }
  
  // Add 3D tilt effect and hover animations for cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    // Add perspective for 3D effect
    card.style.perspective = '1000px';
    card.style.transformStyle = 'preserve-3d';
    
    // Mouse move event for tilt effect
    card.addEventListener('mousemove', (e) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;
      
      const rotateY = (mouseX / cardRect.width) * 10;
      const rotateX = -(mouseY / cardRect.height) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    // Mouse enter event for elevation
    card.addEventListener('mouseenter', () => {
      anime.default({
        targets: card,
        translateY: -15,
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
        duration: 500,
        easing: 'easeOutQuint'
      });
    });
    
    // Mouse leave event to reset
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      anime.default({
        targets: card,
        translateY: 0,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        duration: 500,
        easing: 'easeOutQuint'
      });
    });
  });
};

// Initialize custom cursor
const initCustomCursor = () => {
  // Create custom cursor elements
  const cursor = document.createElement('div');
  const cursorFollower = document.createElement('div');
  
  cursor.className = 'custom-cursor';
  cursorFollower.className = 'cursor-follower';
  
  document.body.appendChild(cursor);
  document.body.appendChild(cursorFollower);
  
  // Cursor animation
  const animateCursor = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Main cursor
    anime.default({
      targets: cursor,
      translateX: x - 10,
      translateY: y - 10,
      duration: 50,
      easing: 'easeOutQuad'
    });
    
    // Follower cursor with delay
    anime.default({
      targets: cursorFollower,
      translateX: x - 20,
      translateY: y - 20,
      duration: 1000,
      easing: 'easeOutQuint'
    });
  };
  
  // Add event listeners
  document.addEventListener('mousemove', animateCursor);
  
  // Hide cursor on mobile
  if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Custom cursor styles */
.custom-cursor {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--text-blue);
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
}

.cursor-follower {
  width: 40px;
  height: 40px;
  border: 2px solid var(--text-blue);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
</style>
