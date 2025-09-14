<template>
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <h3 class="footer-title">RAVANI ROSHAN</h3>
          <p class="footer-text">
            Building innovative solutions with cutting-edge technology.
          </p>
        </div>
        <div class="footer-links">
          <a href="#home" class="footer-link">Home</a>
          <a href="#about" class="footer-link">About</a>
          <a href="#projects" class="footer-link">Projects</a>
          <a href="#contact" class="footer-link">Contact</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Ravani Roshan. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>

<style scoped>
.site-footer {
  background-color: var(--card-black);
  color: var(--text-white);
  padding: 3rem 2rem 2rem;
  border-top: 1px solid var(--card-gray);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.footer-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.footer-text {
  color: var(--card-gray);
  max-width: 300px;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  color: var(--text-white);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--text-blue);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--card-gray);
  color: var(--card-gray);
}

/* Responsive styles for mobile */
@media (max-width: 768px) {
  .site-footer {
    padding: 2rem 1rem 1rem;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-text {
    max-width: 100%;
  }
  
  .footer-links {
    justify-content: center;
  }
}
</style>