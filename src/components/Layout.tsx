import type { ReactNode } from 'react'
import { profile } from '../content'
import { base, pages, type Page } from '../pages'
import { ExternalLink } from './ExternalLink'
import { Lightning } from './Lightning'

const sections = ['about', 'skills', 'experience', 'contact']
const year = new Date().getFullYear()

export function Shell({ page, children }: { page: Page; children: ReactNode }) {
  return (
    <div className="layout">
      <Lightning />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {/* The sidebar is the start page's intro; subpages use the full width */}
      {page === 'home' && <Sidebar />}
      <div className="main-column">
        <Nav page={page} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <footer>
          © {year} {profile.name}
        </footer>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="alias">{profile.alias}</p>
      <a href="#top" className="logo aberration">
        {profile.name}
      </a>
      <div className="line" />
      <ul className="focus" aria-label="Focus areas">
        {profile.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <nav aria-label="Profiles">
        <ul className="sidebar-links">
          {profile.links.map((link) => (
            <li key={link.label}>
              <ExternalLink href={link.href}>{link.label}</ExternalLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

function Nav({ page }: { page: Page }) {
  // Section anchors stay on-page at home and point back to home elsewhere
  const sectionHref = (id: string) => (page === 'home' ? `#${id}` : `${base}#${id}`)

  return (
    <nav className="nav" aria-label="Main">
      <ul className="nav-row" aria-label="Sections">
        {sections.map((id) => (
          <li key={id}>
            <a href={sectionHref(id)}>{id}</a>
          </li>
        ))}
      </ul>
      <ul className="nav-row nav-pages" aria-label="Pages">
        {pages.map(({ id, label }) => (
          <li key={id}>
            <a href={`${base}${id}/`} aria-current={page === id ? 'page' : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
