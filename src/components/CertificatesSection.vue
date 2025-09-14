<template>
  <section id="certificates" class="certificates-section" aria-labelledby="certificates-title">
    <div class="container">
      <h2 id="certificates-title" class="section-title">CERTIFICATES</h2>
      <div class="certificates-grid">
        <div class="certificate-card" v-for="certificate in certificates" :key="certificate.id">
          <div class="certificate-icon">
            <div class="icon-placeholder">{{ certificate.icon }}</div>
          </div>
          <div class="certificate-info">
            <h3 class="certificate-title">{{ certificate.title }}</h3>
            <p class="certificate-issuer">{{ certificate.issuer }}</p>
            <p class="certificate-date">{{ certificate.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Certificates section component
import { ref } from 'vue';

const certificates = ref([
  {
    id: 1,
    title: "Advanced Front-End Development",
    issuer: "Google",
    date: "March 2023",
    icon: "🏆"
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "Stanford University",
    date: "August 2023",
    icon: "🎓"
  },
  {
    id: 3,
    title: "Prompt Engineering for AI",
    issuer: "OpenAI",
    date: "November 2023",
    icon: "🤖"
  },
  {
    id: 4,
    title: "Generative AI Fundamentals",
    issuer: "DeepLearning.AI",
    date: "January 2024",
    icon: "🧠"
  }
]);
</script>

<style scoped>
.certificates-section {
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

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.certificate-card {
  background-color: var(--card-gray);
  border-radius: 20px;
  padding: 2rem;
  color: var(--text-black);
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.certificate-icon {
  font-size: 2rem;
}

.icon-placeholder {
  width: 60px;
  height: 60px;
  background-color: var(--background-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
}

.certificate-info {
  flex: 1;
}

.certificate-title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--text-black);
}

.certificate-issuer {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.certificate-date {
  color: var(--background-dark);
  font-size: 0.9rem;
}

/* Responsive styles for mobile */
@media (max-width: 768px) {
  .certificates-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .certificates-grid {
    grid-template-columns: 1fr;
  }
  
  .certificate-card {
    font-size: 0.9rem;
    padding: 1.5rem;
  }
  
  .certificate-title {
    font-size: 1.1rem;
  }
  
  .icon-placeholder {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
}

/* Responsive styles for small mobile devices */
@media (max-width: 480px) {
  .certificates-section {
    padding: 2rem 0.5rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .certificate-card {
    padding: 1rem;
  }
}
</style>