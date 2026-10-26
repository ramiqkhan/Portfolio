import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

// Gently fades content up once it scrolls into view
export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      {/* Same architectural grid as the hero, kept behind section content */}
      <div className="section-grid -z-20" aria-hidden="true" />
      <Container>{children}</Container>
    </section>
  );
}

// Editorial section header: index + label on a hairline, then the title
export function SectionHeading({ index, label, title, description, aside }) {
  return (
    <Reveal className="mb-14 sm:mb-20">
      <div className="mb-8 flex items-center gap-4">
        <span className="label label-gold tabular-nums">{index}</span>
        <span className="h-px w-10 bg-gold-line" aria-hidden="true" />
        <span className="label">{label}</span>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
        <h2 className="text-[2rem] leading-[1.1] font-semibold tracking-[-0.03em] text-balance text-fg sm:text-5xl lg:col-span-8">
          {title}
        </h2>
        {(description || aside) && (
          <div className="lg:col-span-4">
            {description && <p className="text-base leading-relaxed text-pretty text-muted">{description}</p>}
            {aside}
          </div>
        )}
      </div>
    </Reveal>
  );
}

// Thin graphite browser chrome around a real site screenshot
export function BrowserFrame({ src, alt, domain, eager = false, aspect = 'aspect-[16/10]', className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-[14px] border border-line bg-surface shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7),0_0_0_1px_rgb(0_0_0/0.4)] ${className}`}
    >
      <div className="flex h-8 items-center gap-3 border-b border-line-soft bg-elevated px-3.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-fg/15" />
          <span className="h-2 w-2 rounded-full bg-fg/15" />
          <span className="h-2 w-2 rounded-full bg-fg/15" />
        </div>
        <div className="mx-auto max-w-[70%] truncate text-[10.5px] tracking-wide text-subtle">{domain}</div>
        <span className="w-[34px]" aria-hidden="true" />
      </div>
      <div className={`relative overflow-hidden bg-ink-2 ${aspect}`}>
        <img
          src={src}
          alt={alt}
          width="1440"
          height="900"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : 'auto'}
          className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
        />
      </div>
    </div>
  );
}
