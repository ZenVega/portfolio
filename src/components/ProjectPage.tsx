import type { Project } from '../content'
import { base, pages } from '../pages'
import { ExternalLink } from './ExternalLink'
import { Lightbox } from './Lightbox'

type Props = { project?: Project; kind: 'web' | 'hardware' }

export function ProjectPage({ project, kind }: Props) {
  const parent = pages.find((page) => page.id === kind)!
  const backLink = (
    <a className="back-link" href={`${base}${kind}/`}>
      <span className="link-icon" aria-hidden="true">&lt;</span>
      Back to {parent.label}
    </a>
  )

  if (!project) {
    return (
      <section className="hero">
        {backLink}
        <h1>Project not found</h1>
        <p className="tagline">This project doesn't exist (anymore).</p>
      </section>
    )
  }

  return (
    <>
      <section className="hero project-hero">
        {backLink}
        <h1>
          <span className="glitch" data-text={project.title}>
            {project.title}
          </span>
        </h1>
        {project.tags && (
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="project-body">
        {project.images && (
          <div className="project-images">
            <Lightbox photos={project.images} />
          </div>
        )}
        {(project.details ?? (project.description ? [project.description] : [])).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {project.links && (
          <>
            <h2>Links</h2>
            <ul className="project-links">
              {project.links.map((link) => (
                <li key={link.href}>
                  <ExternalLink href={link.href}>{link.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  )
}
