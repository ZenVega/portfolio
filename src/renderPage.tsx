import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import { App, type Route } from './App'

export function renderPage(route: Route) {
  const root = document.getElementById('root')!
  const app = <App route={route} />
  // Built pages arrive prerendered; the dev server serves an empty root
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
}
