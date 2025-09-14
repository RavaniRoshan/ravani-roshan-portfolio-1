<template>
  <section id="about" class="about-section" aria-labelledby="about-title">
    <div class="container">
      <h2 id="about-title" class="section-title">ABOUT ME</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            I'm a passionate Computer Science Engineering student with a strong focus on full-stack development and artificial intelligence. 
            My journey in technology has been driven by a desire to solve complex problems and create meaningful digital experiences.
          </p>
          <p>
            With expertise in Python, JavaScript, and Rust, I've worked on diverse projects ranging from AI-powered platforms to immersive web applications. 
            My approach combines technical excellence with creative problem-solving to deliver innovative solutions.
          </p>
          <p>
            As an active open-source contributor and hackathon participant, I'm constantly exploring new technologies and methodologies. 
            I believe in continuous learning and staying at the forefront of technological advancement.
          </p>
        </div>
        <div class="about-image">
          <!-- Placeholder for profile image -->
          <div class="image-placeholder"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// About section component
</script>

<style scoped>
.about-section {
  background-color: var(--text-white);
  padding: 5rem 2rem;
  color: var(--background-dark);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  color: var(--text-blue);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
}

.about-content {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.about-text {
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.8;
}

.about-text p {
  margin-bottom: 1.5rem;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background-color: var(--card-gray);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-black);
  font-weight: bold;
}

/* Responsive styles for mobile */
@media (max-width: 768px) {
  .about-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .about-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .about-text {
    font-size: 1rem;
  }
  
  .image-placeholder {
    width: 200px;
    height: 200px;
  }
}

/* Responsive styles for small mobile devices */
@media (max-width: 480px) {
  .about-section {
    padding: 2rem 1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .image-placeholder {
    width: 150px;
    height: 150px;
  }
}
</style>