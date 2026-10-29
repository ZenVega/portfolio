import { renderToString } from 'react-dom/server'
import { App, type Route } from './App'
import { hardwareProjects, webProjects } from './content'
import { siteUrl } from './pages'

// Build-time entry for scripts/prerender.js

export const render = (route: Route) => renderToString(<App route={route} />)

export const projects = [...webProjects, ...hardwareProjects]
  .filter((project) => project.slug)
  .map((project) => ({
    slug: project.slug!,
    title: project.title,
    description: project.description ?? project.details?.[0] ?? '',
  }))

export { siteUrl }
