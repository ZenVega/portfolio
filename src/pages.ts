import { hardwareProjects, webProjects } from './content'

// The site's separate HTML pages (see vite.config.ts)
export type Page = 'home' | 'web' | 'hardware' | 'workshops'

export const base = import.meta.env.BASE_URL

export const projectHref = (slug: string) => `${base}project/?id=${slug}`

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
