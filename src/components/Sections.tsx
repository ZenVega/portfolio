import {
  beforeCoding,
  education,
  experience,
  profile,
  skillsOverview,
  type Experience as Job,
} from '../content'
import { ExternalLink } from './ExternalLink'
import { base } from '../pages'

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
        <a className="button primary" href={`${base}web/`}>
          Web projects
        </a>
        <a className="button primary" href={`${base}hardware/`}>
          Hardware projects
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
      {skillsOverview.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
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
            {job.details && (
              <ul className="details">
                {job.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
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
      <h3 className="subheading">Work</h3>
      <Timeline jobs={experience} />
      <h3 className="subheading">Education</h3>
      <Timeline jobs={education} />
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
