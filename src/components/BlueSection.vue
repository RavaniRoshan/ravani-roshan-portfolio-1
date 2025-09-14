<template>
  <section class="blue-section" aria-labelledby="blue-section-title">
    <h2 id="blue-section-title" class="visually-hidden">Skills and Projects</h2>
    <div class="card black" role="article" aria-label="Skills">
      <h3 class="card-title">SKILLS</h3>
      <p class="card-content">Python, JavaScript, Rust, Vue.js, TensorFlow, AWS</p>
    </div>
    <div class="card gray" role="article" aria-label="Projects">
      <h3 class="card-title">PROJECTS</h3>
      <p class="card-content">AI Analytics Platform, E-Commerce App, Blockchain Voting</p>
    </div>
    <div class="card dark-blue" role="article" aria-label="Experience">
      <h3 class="card-title">EXPERIENCE</h3>
      <p class="card-content">Open Source Contributor, Hackathon Winner, Student Developer</p>
    </div>
  </section>
</template>

<script setup>
// Blue section with three stacked cards (black, gray, dark blue)
// Animation implemented in Home.vue using anime.js timeline
</script>

<style scoped>
/* Section Three */
.blue-section {
  background-color: var(--background-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 5rem 2rem;
}

.blue-section .card {
  width: 80%;
  max-width: 700px;
  height: 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  color: var(--text-white);
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-right: 1rem;
  min-width: 100px;
  text-align: center;
}

.card-content {
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.4;
}

.blue-section .black { background-color: var(--card-black); }
.blue-section .gray { background-color: var(--card-gray); }
.blue-section .dark-blue { background-color: var(--card-dark-blue); }

/* Responsive styles for mobile */
@media (max-width: 768px) {
  .blue-section {
    gap: 1.5rem;
    padding: 3rem 1rem;
  }
  
  .blue-section .card {
    width: 90%;
    height: 80px;
  }
}
</style>