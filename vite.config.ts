import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // One HTML entry per page
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        web: resolve(import.meta.dirname, 'web/index.html'),
        hardware: resolve(import.meta.dirname, 'hardware/index.html'),
        workshops: resolve(import.meta.dirname, 'workshops/index.html'),
      },
    },
  },
})
