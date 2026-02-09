import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/OPUC-Energy-Burden-Metrics-Report-Dashboard/',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
