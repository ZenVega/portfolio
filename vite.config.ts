import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// The build writes a page per project (scripts/prerender.js); in dev they all
// share project/index.html, which reads the slug from the URL
const projectPages: Plugin = {
  name: 'project-pages',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url && /^\/project\/[^/?]+\/?(\?|$)/.test(req.url)) req.url = '/project/index.html'
      next()
    })
  },
}

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), projectPages],
  build: {
    rollupOptions: {
      // One HTML entry per page; the SSR build takes its entry from the CLI
      input: isSsrBuild
        ? undefined
        : {
            main: resolve(import.meta.dirname, 'index.html'),
            web: resolve(import.meta.dirname, 'web/index.html'),
            hardware: resolve(import.meta.dirname, 'hardware/index.html'),
            project: resolve(import.meta.dirname, 'project/index.html'),
            workshops: resolve(import.meta.dirname, 'workshops/index.html'),
          },
    },
  },
}))
