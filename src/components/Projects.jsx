import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Smartphone } from 'lucide-react';
import { Section, SectionHeading, Reveal, BrowserFrame } from './ui';
import { featuredProjects, projects } from '../data/portfolio';

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const filters = [
  { key: 'all', label: 'All' },
  { key: 'Full stack', label: 'Full stack' },
  { key: 'Frontend', label: 'Frontend' },
  { key: 'Mobile app', label: 'Mobile' },
];

function FeaturedProject({ project, index }) {
  const reverse = index % 2 === 1;

  return (
    <article id={`project-${slug(project.title)}`} className="scroll-mt-28">
      <Reveal>
        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-6">
          <span className="label label-gold tabular-nums">0{index + 1}</span>
          <span className="label">{project.category}</span>
          <span className="label ml-auto hidden sm:inline">{project.location}</span>
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit the ${project.title} live website`}
          className="group block"
        >
          <BrowserFrame
            src={project.image}
            alt={`${project.title} live website homepage`}
            domain={project.domain}
            aspect="aspect-[16/10] lg:aspect-[16/8]"
          />
        </a>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
        <Reveal className={`lg:col-span-5 ${reverse ? 'lg:order-2' : ''}`}>
          <h3 className="text-4xl font-semibold tracking-[-0.035em] text-fg sm:text-5xl">{project.title}</h3>
          <p className="mt-6 text-base leading-[1.75] text-pretty text-muted sm:text-[1.0625rem]">{project.summary}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-primary">
              Visit Live Website <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className={`lg:col-span-7 ${reverse ? 'lg:order-1' : ''}`}>
          <p className="label mb-3">The brief</p>
          <p className="font-serif text-[1.375rem] leading-[1.45] text-fg italic sm:text-2xl">{project.challenge}</p>

          <p className="label mt-10 mb-5">What I built</p>
          <ol className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {project.highlights.map((h, i) => (
              <li key={h} className="flex gap-4 border-t border-line-soft py-4 text-sm leading-relaxed text-muted">
                <span className="pt-px text-[11px] text-gold tabular-nums">0{i + 1}</span>
                {h}
              </li>
            ))}
          </ol>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {project.stack.map((s) => (
              <li key={s} className="tag">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <details className="group/cs rounded-2xl border border-line bg-ink-2 open:border-gold-line">
          <summary className="flex min-h-16 items-center justify-between gap-4 px-6 py-4 sm:px-8">
            <span className="flex items-baseline gap-4">
              <span className="font-display text-base font-semibold text-fg">Case study</span>
              <span className="hidden text-sm text-subtle sm:inline">Architecture, data and integrations</span>
            </span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-gold transition-colors group-hover/cs:border-gold-line">
              <Plus className="chevron h-4 w-4 transition-transform duration-300" aria-hidden="true" />
            </span>
          </summary>
          <dl className="grid grid-cols-1 gap-px border-t border-line-soft bg-line-soft sm:grid-cols-2 lg:grid-cols-4">
            {project.caseStudy.map((c) => (
              <div key={c.label} className="bg-ink-2 px-6 py-6 sm:px-8">
                <dt className="label label-gold mb-3">{c.label}</dt>
                <dd className="text-sm leading-relaxed text-muted">{c.text}</dd>
              </div>
            ))}
          </dl>
        </details>
      </Reveal>
    </article>
  );
}

function ProjectCard({ project }) {
  const media = project.image ? (
    <img
      src={project.image}
      alt={`${project.title} homepage`}
      width="1200"
      height="750"
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
    />
  ) : (
    <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_50%_45%,rgb(216_184_120/0.08),transparent_60%)]">
      <div className="flex flex-col items-center gap-3">
        <Smartphone className="h-9 w-9 text-gold/80" strokeWidth={1.25} aria-hidden="true" />
        <span className="label">Native mobile app</span>
      </div>
    </div>
  );

  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface">{media}</div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="label label-gold">{project.type}</span>
        {project.url && (
          <ArrowUpRight
            className="h-4 w-4 text-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
            aria-hidden="true"
          />
        )}
      </div>
      <h4 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-fg">{project.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
      <p className="mt-4 text-xs text-subtle">
        {project.tags.join(' · ')}
        {project.url && (
          <>
            <span className="mx-2 text-line" aria-hidden="true">|</span>
            {project.domain}
          </>
        )}
      </p>
    </>
  );

  return project.url ? (
    <a href={project.url} target="_blank" rel="noreferrer" className="group block">
      {body}
    </a>
  ) : (
    <div className="group">{body}</div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.type === filter);

  return (
    <Section id="projects" className="light-work">
      <SectionHeading
        index="01"
        label="Selected Work"
        title={
          <>
            Real products, live in <span className="serif-accent">production.</span>
          </>
        }
        description="Two recent full stack builds presented in depth, followed by a selection of client and personal projects — each linked to the live site."
      />

      <div className="space-y-28 sm:space-y-36">
        {featuredProjects.map((p, i) => (
          <FeaturedProject key={p.title} project={p} index={i} />
        ))}
      </div>

      <div className="mt-32 sm:mt-40">
        <Reveal className="mb-12 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label mb-4">Archive</p>
            <h3 className="text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl">More projects</h3>
          </div>

          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-x-6 gap-y-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={`relative min-h-10 text-sm transition-colors duration-300 ${
                  filter === f.key ? 'text-fg' : 'text-subtle hover:text-fg'
                }`}
              >
                {f.label}
                {filter === f.key && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-x-0 bottom-1 h-px bg-gold"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul layout className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) => (
              <motion.li
                key={p.title}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={p} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </Section>
  );
}
