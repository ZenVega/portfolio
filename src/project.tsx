import { projectHref, slugFromPath } from './pages'
import { renderPage } from './renderPage'

// Old links used /project/?id=<slug>
const legacySlug = new URLSearchParams(window.location.search).get('id')

if (legacySlug) window.location.replace(projectHref(legacySlug))
else renderPage({ page: 'project', slug: slugFromPath(window.location.pathname) })
