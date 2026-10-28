import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeXml, Server, Database, Smartphone, Wrench, Network, Mail, CalendarCheck } from 'lucide-react';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReactrouter,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiExpo,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiCloudinary,
  SiMailgun,
} from 'react-icons/si';
import { Section, Reveal } from './ui';
import { skillCategories, foundations, featuredProjects, projects, experience } from '../data/portfolio';

const categoryIcons = {
  frontend: CodeXml,
  backend: Server,
  database: Database,
  mobile: Smartphone,
  tools: Wrench,
};

const techIcons = {
  react: SiReact,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  tailwind: SiTailwindcss,
  router: SiReactrouter,
  framer: SiFramer,
  node: SiNodedotjs,
  express: SiExpress,
  api: Network,
  jwt: SiJsonwebtokens,
  mail: Mail,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  expo: SiExpo,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  vercel: SiVercel,
  cloudinary: SiCloudinary,
  booking: CalendarCheck,
  mailgun: SiMailgun,
};

// Where each technology actually appears: project stacks and role stacks
const sources = [
  ...featuredProjects.map((p) => ({ name: p.title, stack: p.stack })),
  ...projects.map((p) => ({ name: p.title, stack: p.tags })),
  ...experience.map((e) => ({ name: e.org, stack: e.roles.flatMap((r) => r.stack) })),
];

function usedIn(item) {
  if (item.usedIn) return item.usedIn;
  if (!item.aliases) return [];
  return sources.filter((s) => s.stack.some((t) => item.aliases.includes(t))).map((s) => s.name);
}

const totalTech = skillCategories.reduce((n, c) => n + c.items.length, 0);

function TechRow({ item }) {
  const Icon = techIcons[item.icon];
  const places = usedIn(item);
  const shown = places.slice(0, 3);
  const more = places.length - shown.length;

  return (
    <li className="group flex items-start gap-4 border-b border-line-soft py-4 transition-colors duration-300 hover:border-gold-line">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-ink-2 text-muted transition-colors duration-300 group-hover:border-gold-line group-hover:text-gold">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      <div className="min-w-0 pt-0.5">
        <p className="text-[0.9375rem] font-medium text-fg">{item.name}</p>
        {places.length > 0 && (
          <p className="mt-1 text-xs leading-relaxed text-subtle">
            <span className="text-gold/80">Used in</span> {shown.join(', ')}
            {more > 0 && ` +${more} more`}
          </p>
        )}
      </div>
    </li>
  );
}

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const tabRefs = useRef([]);
  const current = skillCategories.find((c) => c.id === active);
  const currentIndex = skillCategories.indexOf(current);

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern)
  const onKeyDown = (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next = null;
    if (e.key in keys) next = (currentIndex + keys[e.key] + skillCategories.length) % skillCategories.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = skillCategories.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(skillCategories[next].id);
    tabRefs.current[next]?.focus();
  };

  const CurrentIcon = categoryIcons[current.id];

  return (
    <Section id="skills" tone="skills" pattern="blueprint">
      {/* Heading: title left, live counts right */}
      <Reveal className="mb-14 grid grid-cols-1 gap-8 sm:mb-16 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <div className="mb-8 flex items-center gap-4">
            <span className="label label-gold tabular-nums">03</span>
            <span className="h-px w-10 bg-gold-line" aria-hidden="true" />
            <span className="label">Skills — Technical stack</span>
          </div>
          <h2 className="text-[2rem] leading-[1.1] font-semibold tracking-[-0.03em] text-balance text-fg sm:text-5xl">
            A full stack toolkit, <span className="serif-accent">proven</span> in production.
          </h2>
        </div>
        <dl className="flex gap-10 lg:col-span-4 lg:justify-end">
          <div>
            <dt className="label">Categories</dt>
            <dd className="mt-1 font-display text-4xl font-semibold text-fg tabular-nums">0{skillCategories.length}</dd>
          </div>
          <div>
            <dt className="label">Technologies</dt>
            <dd className="mt-1 font-display text-4xl font-semibold text-fg tabular-nums">{totalTech}</dd>
          </div>
        </dl>
      </Reveal>

      <Reveal>
        <div className="overflow-hidden rounded-[22px] border border-line bg-ink/70 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.8)] backdrop-blur-[2px]">
          {/* Console title bar */}
          <div className="flex items-center justify-between gap-4 border-b border-line-soft bg-surface/60 px-5 py-3 sm:px-6">
            <span className="text-xs text-subtle">
              <span className="text-gold">~/ramiq</span> / stack / {current.id}
            </span>
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-fg/15" />
              <span className="h-2 w-2 rounded-full bg-fg/15" />
              <span className="h-2 w-2 rounded-full bg-gold/60" />
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Category selector */}
            <div
              role="tablist"
              aria-label="Skill categories"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="flex gap-2 overflow-x-auto border-b border-line-soft p-3 [mask-image:linear-gradient(90deg,black_80%,transparent)] [scrollbar-width:none] lg:col-span-4 lg:flex-col lg:gap-1 lg:overflow-visible lg:border-r lg:border-b-0 lg:p-4 lg:[mask-image:none]"
            >
              {skillCategories.map((c, i) => {
                const Icon = categoryIcons[c.id];
                const selected = c.id === active;
                return (
                  <button
                    key={c.id}
                    ref={(el) => (tabRefs.current[i] = el)}
                    type="button"
                    role="tab"
                    id={`skill-tab-${c.id}`}
                    aria-selected={selected}
                    aria-controls={`skill-panel-${c.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(c.id)}
                    className={`relative flex min-h-12 shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors duration-300 lg:w-full ${
                      selected ? 'bg-elevated text-fg' : 'text-muted hover:bg-surface hover:text-fg'
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="skill-indicator"
                        className="absolute inset-y-3 left-0 hidden w-px bg-gold lg:block"
                        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      />
                    )}
                    <span className={`text-[11px] tabular-nums ${selected ? 'text-gold' : 'text-subtle'}`}>0{i + 1}</span>
                    <Icon className={`h-4 w-4 ${selected ? 'text-gold' : ''}`} strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-sm font-medium whitespace-nowrap">{c.title}</span>
                    <span className="ml-auto hidden text-xs text-subtle tabular-nums lg:inline">{c.items.length}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected category */}
            <div className="relative min-h-[420px] p-6 sm:p-8 lg:col-span-8 lg:p-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.id}
                  role="tabpanel"
                  id={`skill-panel-${current.id}`}
                  aria-labelledby={`skill-tab-${current.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.025em] text-fg sm:text-3xl">{current.title}</h3>
                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">{current.summary}</p>
                    </div>
                    <CurrentIcon className="hidden h-12 w-12 shrink-0 text-gold/25 sm:block" strokeWidth={1} aria-hidden="true" />
                  </div>
                  <ul className="mt-8 grid grid-cols-1 gap-x-8 border-t border-line md:grid-cols-2">
                    {current.items.map((item) => (
                      <TechRow key={item.name} item={item} />
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <p className="text-sm leading-relaxed text-subtle">
          <span className="label mr-3 inline-block">Foundations</span>
          {foundations.join(' · ')}
        </p>
      </Reveal>
    </Section>
  );
}
