import type { Project } from '../content'
import { projectHref } from '../pages'
import { ExternalLink } from './ExternalLink'

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.images?.[0]

  return (
    <article className="card">
      <h2>
        {project.slug ? <a href={projectHref(project.slug)}>{project.title}</a> : project.title}
      </h2>
      {cover && <img className="card-image" src={cover.src} alt="" loading="lazy" />}
      {project.description && <p>{project.description}</p>}
      {project.tags && (
        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <div className="card-links">
        {project.slug && (
          <a href={projectHref(project.slug)} className="card-more">
            Details<span className="sr-only"> about {project.title}</span>
          </a>
        )}
        {project.links?.map((link) => (
          <ExternalLink key={link.href} href={link.href}>
            {link.label}
            <span className="link-icon" aria-hidden="true">↗</span>
          </ExternalLink>
        ))}
      </div>
    </article>
  )
}
