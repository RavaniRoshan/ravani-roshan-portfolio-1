<template>
  <section id="contact" class="contact-section" aria-labelledby="contact-title">
    <div class="container">
      <h2 id="contact-title" class="section-title">GET IN TOUCH</h2>
      <div class="contact-content">
        <div class="contact-info">
          <p class="contact-text">
            I'm always open to discussing new opportunities, creative projects, or potential collaborations.
          </p>
          <div class="contact-details">
            <div class="contact-item">
              <strong>Email:</strong> ravani.roshan@example.com
            </div>
            <div class="contact-item">
              <strong>Location:</strong> Silver Oak University, India
            </div>
          </div>
          <div class="social-links">
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">GitHub</a>
            <a href="#" class="social-link">Twitter</a>
          </div>
        </div>
        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input type="text" v-model="form.name" placeholder="Your Name" required class="form-input">
            </div>
            <div class="form-group">
              <input type="email" v-model="form.email" placeholder="Your Email" required class="form-input">
            </div>
            <div class="form-group">
              <textarea v-model="form.message" placeholder="Your Message" required class="form-textarea"></textarea>
            </div>
            <button type="submit" class="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Contact section component
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  // Form submission logic would go here
  console.log('Form submitted:', form.value);
  
  // Show success message
  alert(`Thank you for your message, ${form.value.name}! I will get back to you soon.`);
  
  // Reset form
  form.value = { name: '', email: '', message: '' };
};
</script>

<style scoped>
.contact-section {
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

.contact-content {
  display: flex;
  gap: 3rem;
}

.contact-info {
  flex: 1;
}

.contact-text {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.contact-details {
  margin-bottom: 2rem;
}

.contact-item {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  background-color: var(--card-black);
  color: var(--text-white);
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-family: monospace;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--background-blue);
}

.contact-form {
  flex: 1;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--card-gray);
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
}

.form-textarea {
  height: 150px;
  resize: vertical;
}

.submit-button {
  background-color: var(--background-blue);
  color: var(--text-white);
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background-color: var(--text-blue);
  transform: translateY(-2px);
}

/* Responsive styles for mobile */
@media (max-width: 768px) {
  .contact-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .contact-content {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>