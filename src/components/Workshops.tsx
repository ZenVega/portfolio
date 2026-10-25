import { workshops } from '../content'
import { ExternalLink } from './ExternalLink'

export function Workshops() {
  return (
    <section className="hero workshops">
      <p className="eyebrow">
        <span aria-hidden="true">&gt; </span>Learn by soldering
      </p>
      <h1>
        <span className="glitch" data-text="Workshops">
          Workshops
        </span>
      </h1>
      <p className="tagline">
        Hands-on sessions on electronics, microcontrollers and making noise.
      </p>

      <ol className="workshop-list">
        {workshops.map((workshop) => (
          <li key={workshop.title}>
            <article className="workshop">
              <h2>{workshop.title}</h2>
              <dl className="workshop-meta">
                <div>
                  <dt>Event</dt>
                  <dd>{workshop.event}</dd>
                </div>
                <div>
                  <dt>When</dt>
                  <dd>{workshop.date}</dd>
                </div>
                <div>
                  <dt>Where</dt>
                  <dd>{workshop.location}</dd>
                </div>
                {workshop.cohosts && (
                  <div>
                    <dt>With</dt>
                    <dd>{workshop.cohosts.join(', ')}</dd>
                  </div>
                )}
              </dl>
              {workshop.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {workshop.links && (
                <ul className="workshop-links">
                  {workshop.links.map((link) => (
                    <li key={link.href}>
                      <ExternalLink href={link.href}>{link.label}</ExternalLink>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
