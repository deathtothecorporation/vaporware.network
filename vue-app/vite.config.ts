import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: '.', // Set the root to the project root
  build: {
    outDir: '../_site/assets', // Build assets directly into Jekyll's output directory
    rollupOptions: {
      input: './src/main.ts' // Use the main.js as the build entry point
    }
  },
  server: {
    cors: {
      origin: '*',
      credentials: true,
    },
    proxy: {
      // Forward requests to Jekyll's server during development
      '/@vite/*': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
      '/src/*': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
      '/': {
        target: 'http://localhost:4000', // Jekyll's address
        changeOrigin: true
      }
    }
  }
})
