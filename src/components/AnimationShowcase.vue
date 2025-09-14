<template>
  <div class="animation-showcase">
    <h2 class="showcase-title">Animation Showcase</h2>
    <div class="showcase-grid">
      <div class="showcase-item" v-for="item in animations" :key="item.name">
        <div class="animation-demo" :class="item.class" @click="triggerAnimation(item)">
          <div class="demo-element">{{ item.name }}</div>
        </div>
        <p class="animation-name">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import * as anime from 'animejs';

const animations = ref([
  { name: '3D Flip', class: 'flip-demo' },
  { name: 'Bounce', class: 'bounce-demo' },
  { name: 'Elastic', class: 'elastic-demo' },
  { name: 'Spring', class: 'spring-demo' },
  { name: 'Glow', class: 'glow-demo' },
  { name: 'Morph', class: 'morph-demo' }
]);

const triggerAnimation = (item) => {
  const element = document.querySelector(`.${item.class} .demo-element`);
  
  switch (item.name) {
    case '3D Flip':
      anime.default({
        targets: element,
        rotateY: [0, 360],
        duration: 1000,
        easing: 'easeInOutQuad'
      });
      break;
    case 'Bounce':
      anime.default({
        targets: element,
        translateY: [0, -50, 0],
        duration: 800,
        elasticity: 600
      });
      break;
    case 'Elastic':
      anime.default({
        targets: element,
        scale: [1, 1.5, 1],
        duration: 1000,
        easing: 'easeOutElastic(1, .8)'
      });
      break;
    case 'Spring':
      anime.default({
        targets: element,
        translateX: [0, 100, 0],
        duration: 1200,
        easing: 'spring(1, 80, 10, 0)'
      });
      break;
    case 'Glow':
      anime.default({
        targets: element,
        boxShadow: [
          '0 0 0 rgba(41, 138, 251, 0)',
          '0 0 20px rgba(41, 138, 251, 0.8)',
          '0 0 0 rgba(41, 138, 251, 0)'
        ],
        duration: 1500,
        easing: 'easeInOutQuad'
      });
      break;
    case 'Morph':
      anime.default({
        targets: element,
        borderRadius: ['0%', '50%'],
        duration: 1000,
        direction: 'alternate',
        easing: 'easeInOutQuad'
      });
      break;
  }
};
</script>

<style scoped>
.animation-showcase {
  background-color: var(--card-black);
  padding: 4rem 2rem;
  color: var(--text-white);
}

.showcase-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-white);
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.showcase-item {
  text-align: center;
}

.animation-demo {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  border-radius: 10px;
  background-color: var(--card-gray);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.animation-demo:hover {
  transform: translateY(-5px);
}

.demo-element {
  padding: 1rem 2rem;
  background-color: var(--background-blue);
  color: var(--text-white);
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}

.animation-name {
  font-size: 1.1rem;
  font-weight: 500;
}

/* Specific demo styles */
.flip-demo .demo-element {
  transform-style: preserve-3d;
}

.bounce-demo .demo-element {
  transform-origin: center bottom;
}

.glow-demo .demo-element {
  transition: box-shadow 0.3s ease;
}

.morph-demo .demo-element {
  transition: border-radius 0.5s ease;
}
</style>