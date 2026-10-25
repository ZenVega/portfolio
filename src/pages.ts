// The site's separate HTML pages (see vite.config.ts)
export type Page = 'home' | 'web' | 'hardware' | 'workshops'

export const base = import.meta.env.BASE_URL

export const pages: { id: Exclude<Page, 'home'>; label: string }[] = [
  { id: 'web', label: 'web projects' },
  { id: 'hardware', label: 'hardware projects' },
  { id: 'workshops', label: 'workshops' },
]
