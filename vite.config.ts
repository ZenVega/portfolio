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
        workshops: resolve(import.meta.dirname, 'workshops/index.html'),
      },
    },
  },
})
