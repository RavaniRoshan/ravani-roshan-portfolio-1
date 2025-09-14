<template>
  <section id="home" class="hero-section" aria-labelledby="hero-title">
    <div class="particles-container" ref="particlesContainer"></div>
    <div class="hero-content">
      <h1 id="hero-title" class="hero-title">
        <span class="line-wrapper" v-for="(line, index) in titleLines" :key="index">
          <span 
            v-for="(char, charIndex) in line" 
            :key="charIndex" 
            class="title-char"
            :data-char="char"
            :style="{ '--char-index': charIndex, '--line-index': index }"
          >{{ char }}</span>
        </span>
      </h1>
      <p class="hero-subtitle">
        <span 
          v-for="(word, wordIndex) in subtitleWords" 
          :key="wordIndex" 
          class="subtitle-word"
          :style="{ '--word-index': wordIndex }"
        >{{ word }}</span>
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const particlesContainer = ref(null);
const titleLines = ["RAVANI", "ROSHAN"];
const subtitleWords = [
  "Highly", "motivated", "Computer", "Science", "Engineering", "student", "specializing", "in", 
  "full-stack", "development", "and", "artificial", "intelligence.", "Excels", "at", "transforming", 
  "complex", "technical", "challenges", "into", "scalable,", "elegant", "solutions", "using", 
  "Python,", "JavaScript,", "Rust,", "advanced", "AI", "frameworks.", "Passionate", "about", 
  "building", "innovative", "applications,", "from", "AI-powered", "platforms", "to", "immersive", 
  "web", "experiences.", "Currently", "studying", "for", "a", "B.Tech", "at", "Silver", "Oak", 
  "University,", "contributes", "to", "open", "source,", "frequent", "hackathon", "winner.", 
  "Skills:", "architectural", "problem-solving,", "system", "optimization,", "impactful", 
  "technology.", "Earned", "many", "certificates", "in", "front-end,", "ML,", "prompt", 
  "engineering,", "generative", "AI.", "Strong", "commitment", "to", "learning", "and", 
  "technological", "excellence."
];

let particles = [];
let animationFrameId = null;

// Particle class for background effect
class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = `rgba(41, 138, 251, ${Math.random() * 0.5 + 0.1})`;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > this.canvas.width || this.x < 0) this.speedX = -this.speedX;
    if (this.y > this.canvas.height || this.y < 0) this.speedY = -this.speedY;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Initialize particles
const initParticles = () => {
  if (!particlesContainer.value) return;
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.className = 'particles-canvas';
  
  const resizeCanvas = () => {
    canvas.width = particlesContainer.value.clientWidth;
    canvas.height = particlesContainer.value.clientHeight;
  };
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  particlesContainer.value.appendChild(canvas);
  
  // Create particles
  particles = [];
  const particleCount = Math.floor((canvas.width * canvas.height) / 5000);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvas));
  }
  
  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    particles.forEach(particle => {
      particle.update();
      particle.draw(ctx);
    });
    
    // Draw connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const opacity = 1 - distance / 100;
          ctx.strokeStyle = `rgba(41, 138, 251, ${opacity * 0.2})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    
    animationFrameId = requestAnimationFrame(animate);
  };
  
  animate();
};

// Clean up
onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});

onMounted(() => {
  initParticles();
});
</script>

<style scoped>
.hero-section {
  background-color: var(--text-white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 2rem;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  will-change: transform;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  contain: strict;
}

.particles-canvas {
  width: 100%;
  height: 100%;
  transform: translateZ(0);
  will-change: transform;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1200px;
}

.hero-title {
  color: var(--text-blue);
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
  line-height: 1.2;
  perspective: 1000px;
}

.line-wrapper {
  display: block;
}

.title-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(100%) rotateX(90deg);
  transform-origin: bottom center;
  text-shadow: 0 0 10px rgba(41, 138, 251, 0.5);
}

.hero-subtitle {
  color: var(--background-dark);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 2rem auto 0;
  line-height: 1.8;
  font-weight: 400;
}

.subtitle-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
}

/* Responsive styles for mobile */
@media (max-width: 768px) {
  .hero-section {
    padding: 5rem 1rem;
    min-height: 80vh;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    max-width: 90%;
  }
}

/* Responsive styles for small mobile devices */
@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
  }
}
</style>