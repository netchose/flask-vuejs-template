import { defineConfig } from 'vite'
import vue from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    assetsDir: 'static'
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
})
