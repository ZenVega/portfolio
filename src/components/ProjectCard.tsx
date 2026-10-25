import type { Project } from '../content'
import { ExternalLink } from './ExternalLink'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <h2>{project.title}</h2>
      {project.description && <p>{project.description}</p>}
      {project.tags && (
        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      {project.links && (
        <div className="card-links">
          {project.links.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
              <span aria-hidden="true"> ↗</span>
            </ExternalLink>
          ))}
        </div>
      )}
    </article>
  )
}
