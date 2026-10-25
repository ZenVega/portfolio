import {
  beforeCoding,
  experience,
  profile,
  projects,
  skills,
  type Experience as Job,
} from '../content'
import { ExternalLink } from './ExternalLink'

export function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">
        <span aria-hidden="true">&gt; </span>Greetings
      </p>
      <h1>
        <span className="glitch" data-text={profile.role}>
          {profile.role}
        </span>
      </h1>
      <p className="tagline">
        {profile.tagline}
        <span className="cursor" aria-hidden="true" />
      </p>
      <div className="actions">
        <a className="button primary" href="#projects">
          View my work
        </a>
        <a className="button" href={`mailto:${profile.email}`}>
          Send me an email
        </a>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about">
      <h2>About</h2>
      {profile.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill.name}>
            <strong>{skill.name}</strong>
            {skill.note && <span className="comment">// {skill.note}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Projects() {
  return (
    <section id="projects">
      <h2>Side Projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3>{project.title}</h3>
            {project.description && <p>{project.description}</p>}
            {project.tags && (
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
            <div className="card-links">
              {project.link && (
                <ExternalLink href={project.link}>
                  {project.link.replace(/^https?:\/\//, '')}
                  <span aria-hidden="true"> ↗</span>
                </ExternalLink>
              )}
              {project.repo && (
                <ExternalLink href={project.repo}>
                  Code<span aria-hidden="true"> ↗</span>
                </ExternalLink>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Timeline({ jobs }: { jobs: Job[] }) {
  return (
    <ol className="timeline">
      {jobs.map((job) => (
        <li key={`${job.company}-${job.role}`}>
          <span className="period">{job.period}</span>
          <div>
            <h4>
              {job.role} <span className="muted">· {job.company}</span>
            </h4>
            {job.summary && <p>{job.summary}</p>}
          </div>
        </li>
      ))}
    </ol>
  )
}

export function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <h3 className="subheading">Web Development</h3>
      <Timeline jobs={experience} />
      <h3 className="subheading">Before Coding</h3>
      <Timeline jobs={beforeCoding} />
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>
      <a className="button primary" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <ul className="social">
        {profile.links.map((link) => (
          <li key={link.label}>
            <ExternalLink href={link.href}>{link.label}</ExternalLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
