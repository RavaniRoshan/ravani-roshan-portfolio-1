<template>
  <div v-if="isLoading" class="loading-screen">
    <div class="loader">
      <div class="loader-circle"></div>
      <div class="loader-text">RAVANI ROSHAN</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
  // Hide loading screen after 3 seconds or when content is ready
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});

// Function to hide loading screen programmatically
const hideLoading = () => {
  isLoading.value = false;
};

// Expose function to parent component
defineExpose({ hideLoading });
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  text-align: center;
}

.loader-circle {
  width: 80px;
  height: 80px;
  border: 5px solid rgba(41, 138, 251, 0.2);
  border-top: 5px solid var(--text-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

.loader-text {
  color: var(--text-white);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  animation: pulse 2s infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}
</style>