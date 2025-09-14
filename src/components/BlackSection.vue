<template>
  <section class="black-section" aria-labelledby="black-section-title">
    <h2 id="black-section-title" class="visually-hidden">Features and Certificates</h2>
    <div class="card card-1" role="article" aria-label="Key Features">
      <h3 class="card-title">KEY FEATURES</h3>
      <ul class="features-list">
        <li>Full-stack development expertise</li>
        <li>AI and machine learning implementation</li>
        <li>System optimization and architecture</li>
      </ul>
    </div>
    <div class="card card-2" role="article" aria-label="Certificates">
      <h3 class="card-title">CERTIFICATES</h3>
      <ul class="certificates-list">
        <li>Front-End Development</li>
        <li>Machine Learning</li>
        <li>Prompt Engineering</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
// Black section with two gray cards
// Animation implemented in Home.vue using anime.js timeline
</script>

<style scoped>
/* Section Two */
.black-section {
  background-color: var(--card-black);
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 5rem 2rem;
  border-radius: 25px 25px 0 0; /* Rounded top corners */
  margin-top: -20px; /* Pull up to overlap with hero */
  position: relative;
}

.black-section .card {
  width: 250px;
  height: 180px;
  background-color: var(--card-gray);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  color: var(--text-black);
  transform: translateZ(0);
  will-change: transform;
  transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  transform: translateZ(0);
}

.features-list,
.certificates-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
}

.features-list li,
.certificates-list li {
  margin-bottom: 0.5rem;
}

/* Responsive styles for mobile */
@media (max-width: 768px) {
  .black-section {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 3rem 1rem;
    border-radius: 15px 15px 0 0; /* Adjusted border radius */
    margin-top: -10px; /* Reduced overlap */
  }
  
  .black-section .card {
    width: 200px;
    height: 150px;
  }
}
</style>