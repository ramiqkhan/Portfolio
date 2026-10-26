import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Container } from './ui';
import HeroStage from './hero/HeroStage';
import { featuredProjects, profile } from '../data/portfolio';

const ease = [0.22, 1, 0.36, 1];
const rise = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease, delay },
});

const highlights = ['React.js', 'Node.js', 'Express', 'MongoDB', 'React Native'];

export default function Hero() {
  const [limo, watches] = featuredProjects;

  return (
    <section id="top" className="relative pt-32 pb-12 sm:pt-40 lg:pt-44 lg:pb-16">
      <div className="hero-lighting -z-20" aria-hidden="true" />
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <motion.p
            {...rise(0)}
            className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-gold-line px-3.5 py-1.5 text-xs text-muted"
          >
            <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
            {profile.currentRole}
          </motion.p>

          <motion.p {...rise(0.05)} className="label mb-5">
            {profile.name} <span className="text-gold">/</span> {profile.role}
          </motion.p>

          <motion.h1
            {...rise(0.12)}
            className="text-[2.6rem] leading-[1.04] font-semibold tracking-[-0.04em] text-balance text-fg sm:text-6xl lg:text-[4rem] xl:text-[4.6rem]"
          >
            I build digital products that work in the{' '}
            <span className="serif-accent pr-1 text-[1.12em] leading-none">real world.</span>
          </motion.h1>

          <motion.p {...rise(0.22)} className="mt-8 max-w-[34rem] text-base leading-[1.75] text-pretty text-muted sm:text-[1.0625rem]">
            I build production-ready websites, e-commerce platforms, booking systems, and digital applications — combining
            refined frontend experiences with robust backend architecture.
          </motion.p>

          <motion.div {...rise(0.32)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn btn-primary">
              Explore My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </motion.div>

          <motion.div {...rise(0.42)} className="mt-14 border-t border-line-soft pt-6">
            <p className="label mb-3">Selected stack</p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-gold/70" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Cinematic 3D stage: graphite sculpture between the two featured sites */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.3 }}
          className="relative lg:col-span-6"
        >
          <HeroStage back={limo} front={watches} />
        </motion.div>
      </Container>

      <Container className="mt-12 hidden lg:block">
        <a href="#projects" className="group inline-flex items-center gap-3 text-xs text-subtle transition-colors hover:text-fg">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-colors group-hover:border-gold-line">
            <ArrowDown className="h-3.5 w-3.5" />
          </span>
          Scroll to selected work
        </a>
      </Container>
    </section>
  );
}
