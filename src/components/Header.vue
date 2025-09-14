<template>
  <header class="app-header" role="banner">
    <div class="nav-left">
      <a href="#home" class="nav-button home-button" aria-label="Home">HOME</a>
    </div>
    <div class="nav-right">
      <a href="#contact" class="nav-button find-me-button" aria-label="Find me on social media">FIND ME</a>
    </div>
  </header>
</template>

<script setup>
// Header component with navigation buttons
// Hover animations implemented with anime.js in Home.vue
</script>

<style scoped>
.app-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 10;
}

.nav-left {
  margin-left: 1.5rem;
}

.nav-right {
  margin-right: 1.5rem;
}

.nav-button {
  background-color: var(--card-black);
  color: var(--text-white);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-family: monospace;
  display: inline-block;
}

/* Hover effects will be implemented with anime.js */

/* Responsive styles for mobile */
@media (max-width: 768px) {
  .app-header {
    padding: 1rem;
  }
  
  .nav-left {
    margin-left: 1rem;
  }
  
  .nav-right {
    margin-right: 1rem;
  }
  
  .nav-button {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
}
</style>