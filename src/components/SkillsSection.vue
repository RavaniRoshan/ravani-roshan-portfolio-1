<template>
  <section id="skills" class="skills-section" aria-labelledby="skills-title">
    <div class="container">
      <h2 id="skills-title" class="section-title">SKILLS</h2>
      <div class="skills-grid">
        <div class="skill-category" v-for="category in skills" :key="category.name">
          <h3 class="category-title">{{ category.name }}</h3>
          <div class="skills-list">
            <div class="skill-item" v-for="skill in category.items" :key="skill">
              {{ skill }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Skills section component
import { ref } from 'vue';

const skills = ref([
  {
    name: "Frontend Development",
    items: ["Vue.js", "React", "HTML5", "CSS3", "JavaScript", "TypeScript"]
  },
  {
    name: "Backend Development",
    items: ["Node.js", "Python", "Rust", "Express", "Django", "FastAPI"]
  },
  {
    name: "AI & Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Prompt Engineering"]
  },
  {
    name: "Database & Cloud",
    items: ["MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes"]
  }
]);
</script>

<style scoped>
.skills-section {
  background-color: var(--background-blue);
  padding: 5rem 2rem;
  color: var(--text-white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category {
  background-color: var(--card-dark-blue);
  border-radius: 20px;
  padding: 2rem;
}

.category-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--text-white);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  background-color: var(--text-white);
  color: var(--text-black);
  padding: 0.8rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
}

/* Responsive styles for mobile */
@media (max-width: 768px) {
  .skills-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-category {
    padding: 1.5rem;
  }
  
  .category-title {
    font-size: 1.3rem;
  }
  
  .skill-item {
    font-size: 0.9rem;
    padding: 0.6rem;
  }
}

/* Responsive styles for small mobile devices */
@media (max-width: 480px) {
  .skills-section {
    padding: 2rem 0.5rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .skill-category {
    padding: 1rem;
  }
}
</style>