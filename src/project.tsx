import { ProjectPage } from './components/ProjectPage'
import { findProject } from './pages'
import { renderPage } from './renderPage'

const match = findProject(new URLSearchParams(window.location.search).get('id'))
const kind = match?.kind ?? 'hardware'

renderPage(kind, <ProjectPage project={match?.project} kind={kind} />)
