import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ArrowDown, Plus, Smartphone } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Section, Reveal } from './ui';
import { featuredProjects, projects, profile } from '../data/portfolio';

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const filters = [
  { key: 'all', label: 'All' },
  { key: 'Full stack', label: 'Full stack' },
  { key: 'Frontend', label: 'Frontend' },
  { key: 'Mobile app', label: 'Mobile' },
];

// Pointer-driven perspective for the showroom previews. Writes --tx / --ty
// (-1..1) on the element; CSS turns them into tilt, image drift and light.
// Only active on hover-capable fine pointers without reduced motion.
function usePointerTilt() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const tick = () => {
      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;
      el.style.setProperty('--tx', current.x.toFixed(4));
      el.style.setProperty('--ty', current.y.toFixed(4));
      const moving = Math.abs(target.x - current.x) + Math.abs(target.y - current.y) > 0.001;
      frame = moving ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      target.x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1));
      target.y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1));
      kick();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      kick();
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return ref;
}

function ShowroomPreview({ project, side }) {
  const ref = usePointerTilt();

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Explore the ${project.title} live website (opens in a new tab)`}
      className={`showroom showroom--${side} showroom--${project.theme} group`}
    >
      <span className="showroom-light" aria-hidden="true" />
      <span className="showroom-lift">
        <span className="showroom-body">
          <span className="showroom-frame">
            <span className="flex h-9 items-center gap-3 border-b border-line-soft bg-elevated/95 px-4">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-fg/15" />
                <span className="h-2 w-2 rounded-full bg-fg/15" />
                <span className="h-2 w-2 rounded-full bg-gold/50" />
              </span>
              <span className="mx-auto max-w-[70%] truncate rounded-md bg-fg/5 px-3 py-0.5 text-[11px] tracking-wide text-subtle">
                {project.domain}
              </span>
              <span className="w-[38px]" aria-hidden="true" />
            </span>
            <span className="showroom-viewport">
              <img
                src={project.image}
                alt={`${project.title} live website homepage`}
                width="1440"
                height="900"
                loading="lazy"
                decoding="async"
                className="showroom-image"
              />
              <span className="showroom-sheen" aria-hidden="true" />
              <span className="showroom-cta">
                Explore Live Project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className="showroom-floor" aria-hidden="true" />
    </a>
  );
}

function FeaturedProject({ project, index }) {
  const reverse = index % 2 === 1;
  const number = String(index + 1).padStart(2, '0');

  return (
    <article id={`project-${slug(project.title)}`} className={`showcase showcase--${project.theme} scroll-mt-28`}>
      <div className="showcase-backdrop" aria-hidden="true" />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        {/* Preview bleeds into the page margin and stays in view while the details scroll */}
        <Reveal className={`lg:col-span-7 ${reverse ? 'lg:order-2 lg:-mr-6 xl:-mr-16' : 'lg:-ml-6 xl:-ml-16'}`}>
          <div className="lg:sticky lg:top-28">
            <ShowroomPreview project={project} side={reverse ? 'right' : 'left'} />
          </div>
        </Reveal>

        <Reveal delay={0.12} className={`lg:col-span-5 lg:py-2 ${reverse ? 'lg:order-1' : ''}`}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gold tabular-nums">{number}</span>
            <span className="h-px w-8 bg-gold-line" aria-hidden="true" />
            <span className="label">{project.category}</span>
          </div>

          <h3 className="mt-5 text-[2.5rem] leading-none font-semibold tracking-[-0.04em] text-fg sm:text-6xl">{project.title}</h3>
          <p className="label mt-4 text-subtle">{project.subtitle}</p>

          <p className="mt-7 font-serif text-xl leading-[1.45] text-fg/90 italic sm:text-[1.375rem]">“{project.tagline}”</p>

          <ul className="mt-8 space-y-2.5">
            {project.contributions.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-[0.6rem] h-px w-4 shrink-0 bg-gold" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>

          <ul className="mt-7 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.stack.map((s) => (
              <li key={s} className="tag text-[11px]">
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-primary">
              Explore Live Project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <details className="group/cs mt-6 border-t border-line-soft">
            <summary className="flex min-h-12 items-center justify-between gap-4 py-3 text-sm text-muted transition-colors hover:text-fg">
              <span>
                Technical details <span className="text-subtle">— architecture, data, integrations</span>
              </span>
              <Plus className="chevron h-4 w-4 shrink-0 text-gold transition-transform duration-300" aria-hidden="true" />
            </summary>
            <dl className="grid grid-cols-1 gap-x-6 gap-y-5 pt-2 pb-4 sm:grid-cols-2">
              {project.caseStudy.map((c) => (
                <div key={c.label}>
                  <dt className="label label-gold mb-1.5">{c.label}</dt>
                  <dd className="text-[13px] leading-relaxed text-muted">{c.text}</dd>
                </div>
              ))}
            </dl>
          </details>
        </Reveal>
      </div>
    </article>
  );
}

// Archive gallery layout: curated rows on a 12-column grid. The patterns fill
// the full archive exactly; a filtered list falls back to balanced rows.
const rowPatterns = [[7, 5], [4, 4, 4], [5, 7], [12], [4, 4, 4]];
const remainderRows = { 1: [12], 2: [6, 6], 3: [4, 4, 4] };

function gallerySpans(count) {
  const spans = [];
  for (let row = 0; spans.length < count; row++) {
    const left = count - spans.length;
    const pattern = rowPatterns[row % rowPatterns.length];
    spans.push(...(pattern.length > left ? remainderRows[left] : pattern));
  }
  return spans;
}

// Static class names so Tailwind can see them
const spanClass = {
  4: 'md:col-span-3 lg:col-span-4',
  5: 'md:col-span-3 lg:col-span-5',
  6: 'md:col-span-3 lg:col-span-6',
  7: 'md:col-span-6 lg:col-span-7',
  12: 'md:col-span-6 lg:col-span-12',
};

// Desktop image ratios: in a 7 + 5 row the screenshots get matching heights
const mediaRatio = { 7: '16 / 9', 5: '5 / 4' };

function MobilePlaceholder() {
  return (
    <span className="gallery-placeholder" aria-hidden="true">
      <span className="gallery-phone">
        <Smartphone className="h-7 w-7 text-gold/80" strokeWidth={1.1} />
      </span>
      <span className="label mt-5">Native mobile app</span>
    </span>
  );
}

function GalleryCard({ project, span, index }) {
  const ref = usePointerTilt();
  const wide = span === 12;
  const Tag = project.url ? 'a' : 'div';
  const linkProps = project.url
    ? {
        href: project.url,
        target: '_blank',
        rel: 'noreferrer',
        'aria-label': `Explore ${project.title} — ${project.type} project (opens the live website in a new tab)`,
      }
    : {};

  return (
    <Tag
      ref={ref}
      {...linkProps}
      className={`gallery-card group ${wide ? 'gallery-card--wide' : ''} ${index % 2 ? 'gallery-card--glow-left' : ''} ${
        project.url ? '' : 'gallery-card--static'
      }`}
    >
      <span className="gallery-tilt">
        <span className="gallery-media" style={{ '--media-ar': mediaRatio[span] }}>
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} homepage`}
              width="1200"
              height="750"
              loading="lazy"
              decoding="async"
              className="gallery-image"
            />
          ) : (
            <MobilePlaceholder />
          )}
          <span className="gallery-shade" aria-hidden="true" />
          <span className="gallery-chip">{project.type}</span>
          {project.url && (
            <span className="gallery-arrow" aria-hidden="true">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </span>

        <span className="gallery-info">
          <span className="flex items-baseline justify-between gap-4">
            <span className={`font-display font-semibold tracking-[-0.025em] text-fg ${wide ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
              {project.title}
            </span>
            <span className="text-[11px] text-subtle tabular-nums">{String(index + 1).padStart(2, '0')}</span>
          </span>
          <span className={`mt-2 block text-sm leading-relaxed text-muted ${wide ? '' : 'line-clamp-2'}`}>{project.description}</span>
          <span className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="tag text-[11px]">
                {t}
              </span>
            ))}
          </span>
          {project.url && (
            <span className="gallery-reveal">
              Explore project <span className="text-subtle">— {project.domain}</span>
            </span>
          )}
        </span>
      </span>
    </Tag>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.type === filter);
  const spans = gallerySpans(visible.length);

  return (
    <Section id="projects" tone="work" pattern="grid-top">
      {/* Editorial introduction */}
      <div className="work-intro">
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-center gap-4">
              <span className="label">Selected Work</span>
              <span className="h-px w-10 bg-gold-line" aria-hidden="true" />
              <span className="label label-gold tabular-nums">01</span>
            </div>
            <h2 className="text-[2.5rem] leading-[1.02] font-semibold tracking-[-0.045em] text-balance text-fg sm:text-6xl lg:text-[4.25rem]">
              <span className="serif-accent pr-1">Digital experiences,</span> built for the{' '}
              <span className="serif-accent pr-1">real world.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-base leading-[1.75] text-pretty text-muted">
              From luxury commerce to conversion-focused booking experiences, explore the products I've designed,
              engineered, and brought to production.
            </p>
            <a
              href={`#project-${slug(featuredProjects[0].title)}`}
              className="group mt-6 inline-flex items-center gap-3 text-xs text-subtle transition-colors hover:text-fg"
            >
              <span className="scroll-cue grid h-9 w-9 place-items-center rounded-full border border-line transition-colors group-hover:border-gold-line">
                <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Enter the showroom
            </a>
          </div>
        </Reveal>
      </div>

      {/* Featured showroom */}
      <div className="mt-20 space-y-28 sm:mt-28 sm:space-y-36">
        {featuredProjects.map((p, i) => (
          <FeaturedProject key={p.title} project={p} index={i} />
        ))}
      </div>

      {/* Archive gallery */}
      <section aria-labelledby="archive-title" className="archive relative mt-32 sm:mt-40">
        <div className="archive-backdrop" aria-hidden="true" />

        <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-7 flex items-center gap-4">
              <span className="label">Selected Archive</span>
              <span className="h-px w-10 bg-gold-line" aria-hidden="true" />
              <span className="label label-gold tabular-nums">{projects.length} Projects</span>
            </div>
            <h3
              id="archive-title"
              className="text-[2.25rem] leading-[1.04] font-semibold tracking-[-0.04em] text-balance text-fg sm:text-5xl lg:text-[3.5rem]"
            >
              More than projects. <span className="serif-accent pr-1">Real products.</span>
            </h3>
          </div>
          <p className="text-base leading-[1.75] text-pretty text-muted lg:col-span-5 lg:pb-2">
            A collection of digital experiences spanning e-commerce, business websites, responsive interfaces, and
            full-stack applications.
          </p>
        </Reveal>

        <Reveal className="mt-10 sm:mt-12">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="-mx-5 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0"
          >
            <div className="inline-flex gap-1 rounded-full border border-line bg-ink/60 p-1">
              {filters.map((f) => {
                const active = filter === f.key;
                const count = f.key === 'all' ? projects.length : projects.filter((p) => p.type === f.key).length;
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setFilter(f.key)}
                    aria-pressed={active}
                    className={`relative flex min-h-10 items-center gap-2 rounded-full px-4 text-sm whitespace-nowrap transition-colors duration-300 sm:px-5 ${
                      active ? 'text-fg' : 'text-subtle hover:text-fg'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="archive-filter"
                        className="absolute inset-0 rounded-full border border-gold-line bg-elevated"
                        transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                      />
                    )}
                    <span className="relative">{f.label}</span>
                    <span className={`relative text-[11px] tabular-nums ${active ? 'text-gold' : 'text-subtle'}`}>
                      {String(count).padStart(2, '0')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {visible.length === 0 ? (
          <p className="mt-10 rounded-2xl border border-line px-6 py-10 text-center text-sm text-muted">
            No projects in this category yet.
          </p>
        ) : (
          <motion.ul layout className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-6 md:gap-6 lg:grid-cols-12">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((p, i) => (
                <motion.li
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={spanClass[spans[i]]}
                >
                  <GalleryCard project={p} span={spans[i]} index={projects.indexOf(p)} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </section>

      {/* Closing invitation */}
      <Reveal className="mt-20 sm:mt-24">
        <div className="work-cta relative overflow-hidden rounded-[24px] border border-line px-6 py-10 sm:px-12 sm:py-12">
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-3xl leading-tight font-semibold tracking-[-0.035em] text-balance text-fg sm:text-4xl">
                Have a project <span className="serif-accent">in mind?</span>
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Let's build something useful, thoughtful, and ready for the real world.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn btn-primary">
                Start a conversation <ArrowRight className="h-4 w-4" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                <FaGithub className="h-4 w-4" /> View GitHub
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
