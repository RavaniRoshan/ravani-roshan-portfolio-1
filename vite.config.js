import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'animejs': path.resolve(__dirname, 'node_modules/animejs/lib/anime.esm.js')
    }
  }
});