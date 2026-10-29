import { StrictMode } from 'react'
import { Shell } from './components/Layout'
import { ProjectPage } from './components/ProjectPage'
import { HardwareProjects, WebProjects } from './components/Projects'
import { About, Contact, Experience, Hero, Skills } from './components/Sections'
import { Workshops } from './components/Workshops'
import { findProject, type Page } from './pages'

// Every page of the site. The browser entries hydrate these, and
// scripts/prerender.js renders the same tree to static HTML at build time.
export type Route = { page: Page } | { page: 'project'; slug: string | null }

export function App({ route }: { route: Route }) {
  if (route.page === 'project') {
    const match = findProject(route.slug)
    const kind = match?.kind ?? 'hardware'
    return (
      <StrictMode>
        <Shell page={kind}>
          <ProjectPage project={match?.project} kind={kind} />
        </Shell>
      </StrictMode>
    )
  }

  return (
    <StrictMode>
      <Shell page={route.page}>{content[route.page]}</Shell>
    </StrictMode>
  )
}

const content = {
  home: (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  ),
  web: <WebProjects />,
  hardware: <HardwareProjects />,
  workshops: <Workshops />,
}
