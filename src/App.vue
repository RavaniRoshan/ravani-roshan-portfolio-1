
<template>
  <div id="app-container">
    <LoadingScreen ref="loadingScreen" />
    <Home />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LoadingScreen from './components/LoadingScreen.vue';
import Home from './pages/Home.vue';

const loadingScreen = ref(null);

onMounted(() => {
  // Hide loading screen when app is ready
  setTimeout(() => {
    if (loadingScreen.value) {
      loadingScreen.value.hideLoading();
    }
  }, 2000);
});
</script>

<style>
#app-container {
  background-color: var(--background-dark);
  min-height: 100vh;
}
</style>
