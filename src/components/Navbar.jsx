import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { navLinks, profile } from '../data/portfolio';

const socials = [
  { href: profile.github, label: 'GitHub', Icon: FaGithub },
  { href: profile.linkedin, label: 'LinkedIn', Icon: FaLinkedinIn },
];

export function Monogram({ className = '' }) {
  return (
    <span
      className={`grid h-9 w-9 place-items-center rounded-full border border-gold-line font-display text-[11px] font-semibold tracking-[0.12em] text-gold ${className}`}
    >
      RK
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link for the section currently in view
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        solid ? 'border-b border-line-soft bg-ink/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Monogram className="transition-colors duration-300 group-hover:border-gold" />
          <span className="font-display text-[0.9375rem] font-semibold tracking-[-0.01em] text-fg">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`relative py-2 text-sm transition-colors duration-300 ${
                  active === link.id ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-300 ${
                    active === link.id ? 'w-4' : 'w-0'
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-1 lg:flex">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label} profile`}
              className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors duration-300 hover:text-gold"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a href="#contact" className="btn btn-outline ml-3 min-h-10 px-5 text-sm">
            Let's Talk
          </a>
        </div>

        <button
          type="button"
          className="relative grid h-11 w-11 place-items-center rounded-full border border-line text-fg lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span
            className={`absolute h-px w-4 bg-current transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-[3px]'}`}
            aria-hidden="true"
          />
          <span
            className={`absolute h-px w-4 bg-current transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-[3px]'}`}
            aria-hidden="true"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 72px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto border-t border-line-soft bg-ink lg:hidden"
          >
            <ul className="flex flex-col px-5 pt-6 sm:px-8">
              {navLinks.map((link, i) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line-soft py-5 font-display text-2xl font-medium tracking-[-0.02em] text-fg"
                  >
                    <span className="label label-gold tabular-nums">0{i + 1}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 px-5 pt-8 pb-10 sm:px-8">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Let's Talk <ArrowRight className="h-4 w-4" />
              </a>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="btn btn-outline">
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
