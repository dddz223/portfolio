import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://dddz223.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
