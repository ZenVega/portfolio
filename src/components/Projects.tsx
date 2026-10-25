import { hardwareProjects, moreBuilds, webProjects, type Project } from '../content'
import { ExternalLink } from './ExternalLink'
import { ProjectCard } from './ProjectCard'

function PageHero({ eyebrow, title, tagline }: { eyebrow: string; title: string; tagline: string }) {
  return (
    <section className="hero">
      <p className="eyebrow">
        <span aria-hidden="true">&gt; </span>
        {eyebrow}
      </p>
      <h1>
        <span className="glitch" data-text={title}>
          {title}
        </span>
      </h1>
      <p className="tagline">{tagline}</p>
    </section>
  )
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}

export function WebProjects() {
  return (
    <>
      <PageHero
        eyebrow="Things for browsers"
        title="Web Projects"
        tagline="Websites and web apps I built."
      />
      <section className="project-list">
        <ProjectGrid projects={webProjects} />
      </section>
    </>
  )
}

export function HardwareProjects() {
  return (
    <>
      <PageHero
        eyebrow="Things with solder"
        title="Hardware Projects"
        tagline="Macropads, noise makers, espresso hacks and other things that blink or buzz."
      />
      <section className="project-list">
        <ProjectGrid projects={hardwareProjects} />
        <p className="more-builds">
          More builds on{' '}
          {moreBuilds.map((link, index) => (
            <span key={link.href}>
              {index > 0 && ' and '}
              <ExternalLink href={link.href}>{link.label}</ExternalLink>
            </span>
          ))}
          .
        </p>
      </section>
    </>
  )
}
