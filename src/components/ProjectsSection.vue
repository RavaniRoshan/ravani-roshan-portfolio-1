<template>
  <section id="projects" class="projects-section" aria-labelledby="projects-title">
    <div class="container">
      <h2 id="projects-title" class="section-title">PROJECTS</h2>
      <div class="projects-grid">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <div class="project-image">
            <div class="image-placeholder">{{ project.title }}</div>
          </div>
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Projects section component
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "A comprehensive analytics platform leveraging machine learning to provide actionable insights from complex datasets.",
    tags: ["Python", "TensorFlow", "Vue.js"]
  },
  {
    id: 2,
    title: "E-Commerce Web Application",
    description: "Full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    tags: ["JavaScript", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting system built on blockchain technology to ensure integrity and verifiability.",
    tags: ["Rust", "Blockchain", "Web3.js"]
  }
]);
</script>

<style scoped>
.projects-section {
  background-color: var(--card-black);
  padding: 5rem 2rem;
  color: var(--text-white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  color: var(--text-white);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--card-gray);
  border-radius: 20px;
  overflow: hidden;
  color: var(--text-black);
  display: flex;
  flex-direction: column;
}

.project-image {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background-color: var(--background-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
  font-weight: bold;
  font-size: 1.2rem;
}

.project-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-black);
}

.project-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: var(--background-dark);
  color: var(--text-white);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

/* Responsive styles for mobile */
@media (max-width: 768px) {
  .projects-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    font-size: 0.9rem;
  }
  
  .project-title {
    font-size: 1.3rem;
  }
  
  .tag {
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
  }
}

/* Responsive styles for small mobile devices */
@media (max-width: 480px) {
  .projects-section {
    padding: 2rem 0.5rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .project-info {
    padding: 1rem;
  }
}
</style>