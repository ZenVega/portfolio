import { hardwareProjects, webProjects } from './content'

// The site's separate HTML pages (see vite.config.ts)
export type Page = 'home' | 'web' | 'hardware' | 'workshops'

export const base = import.meta.env.BASE_URL

// Used for canonical URLs and the sitemap; keep in sync with the HTML heads
export const siteUrl = 'https://thenotsodistantfuture.com'

// Each project gets a prerendered page at /project/<slug>/ (see scripts/prerender.js)
export const projectHref = (slug: string) => `${base}project/${slug}/`

// Reads the slug from /project/<slug>/
export const slugFromPath = (path: string) => path.match(/\/project\/([^/]+)/)?.[1] ?? null

export const pages: { id: Exclude<Page, 'home'>; label: string }[] = [
  { id: 'web', label: 'web projects' },
  { id: 'hardware', label: 'hardware projects' },
  { id: 'workshops', label: 'workshops' },
]

export function findProject(slug: string | null) {
  const web = webProjects.find((project) => project.slug === slug)
  if (web) return { project: web, kind: 'web' as const }
  const hardware = hardwareProjects.find((project) => project.slug === slug)
  if (hardware) return { project: hardware, kind: 'hardware' as const }
  return undefined
}
