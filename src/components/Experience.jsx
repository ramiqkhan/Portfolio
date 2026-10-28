import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Section, Reveal } from './ui';
import { experience, education } from '../data/portfolio';

// Technical terms set in brighter type inside each bullet
const terms = ['React Native', 'React.js', 'Node.js', 'Express.js', 'Express', 'MongoDB', 'REST APIs', 'JWT', 'Tailwind CSS', 'Vercel'];
const termPattern = new RegExp(`(${terms.map((t) => t.replace('.', '\\.')).join('|')})`, 'g');

function Emphasized({ text }) {
  return text.split(termPattern).map((part, i) =>
    terms.includes(part) ? (
      <strong key={i} className="font-medium text-fg">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

const roleCount = experience.reduce((n, e) => n + e.roles.length, 0);

export default function Experience() {
  return (
    <Section id="experience" tone="experience" pattern="ledger">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Sticky narrow column: heading, summary, education */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="label label-gold tabular-nums">04</span>
                <span className="h-px w-10 bg-gold-line" aria-hidden="true" />
                <span className="label">Experience</span>
              </div>
              <h2 className="text-[2rem] leading-[1.1] font-semibold tracking-[-0.03em] text-balance text-fg sm:text-5xl lg:text-[2.75rem]">
                Where I've been <span className="serif-accent">building.</span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                A record of the teams and products I've worked on — newest first.
              </p>

              <dl className="mt-10 grid max-w-sm grid-cols-2 border-y border-line-soft">
                {[
                  ['Roles', `0${roleCount}`],
                  ['Building since', '2025'],
                ].map(([label, value], i) => (
                  <div key={label} className={`py-4 ${i > 0 ? 'border-l border-line-soft pl-4' : ''}`}>
                    <dt className="label">{label}</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold text-fg tabular-nums">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 hidden lg:block">
              <EducationCard />
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-8">
          <ol className="relative pl-10 sm:pl-14">
            <motion.span
              className="timeline-line"
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {experience.map((company) => (
              <li key={company.org} className="relative pb-16 last:pb-0 sm:pb-20">
                <span
                  className={`timeline-marker -ml-10 sm:-ml-14 ${company.current ? 'timeline-marker--current' : ''}`}
                  aria-hidden="true"
                />
                <Reveal>
                  <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.025em] text-fg sm:text-3xl">{company.org}</h3>
                    <p className="label label-gold">{company.period}</p>
                  </header>
                  {company.note && (
                    <p className="mt-3 font-serif text-lg text-gold-soft italic">— {company.note}</p>
                  )}
                </Reveal>

                <div className="mt-8 space-y-10">
                  {company.roles.map((role) => (
                    <Reveal key={role.title}>
                      <article className="relative">
                        {company.roles.length > 1 && <span className="timeline-sub -ml-10 sm:-ml-14" aria-hidden="true" />}
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                          <h4 className="text-lg font-semibold text-fg sm:text-xl">{role.title}</h4>
                          <p className="shrink-0 text-xs text-subtle tabular-nums">{role.period}</p>
                        </div>
                        <ul className="mt-5 space-y-3 border-l border-line-soft pl-5">
                          {role.points.map((p) => (
                            <li key={p} className="text-[0.9375rem] leading-relaxed text-muted">
                              <Emphasized text={p} />
                            </li>
                          ))}
                        </ul>
                        <p className="mt-5 text-xs text-subtle">
                          <span className="label mr-2">Stack</span>
                          {role.stack.join(' · ')}
                        </p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <Reveal className="mt-16 lg:hidden">
            <EducationCard />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function EducationCard() {
  return (
    <div className="max-w-sm rounded-2xl border border-line bg-surface/50 p-6">
      <div className="flex items-center gap-3">
        <GraduationCap className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
        <p className="label label-gold">Education</p>
      </div>
      <p className="mt-4 font-display text-lg font-semibold text-fg">{education.degree}</p>
      <p className="text-sm text-muted">{education.school}</p>
      <p className="mt-4 text-sm leading-relaxed text-subtle">{education.note}</p>
    </div>
  );
}
