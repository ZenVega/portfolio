import type { Project } from '../content'
import { projectHref } from '../pages'
import { ExternalLink } from './ExternalLink'

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.thumbnail ?? project.images?.[0]

  return (
    <article className={project.slug ? 'card card-linked' : 'card'}>
      <h2>
        {project.slug ? (
          <a href={projectHref(project.slug)} className="card-link">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h2>
      {cover && <img className="card-image" src={cover.src} alt="" loading="lazy" />}
      {project.description && <p>{project.description}</p>}
      {project.links && project.links.length > 0 && (
        <div className="card-links">
          {project.links.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
              <span className="link-icon" aria-hidden="true">↗</span>
            </ExternalLink>
          ))}
        </div>
      )}
    </article>
  )
}
