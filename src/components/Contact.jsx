import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Section, Reveal } from './ui';
import { profile } from '../data/portfolio';

const mailto = `mailto:${profile.email}?subject=${encodeURIComponent('Opportunity for Muhammad Ramiq Khan')}`;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = mailto;
    }
  };

  const channels = [
    { label: 'GitHub', value: `github.com/${profile.githubHandle}`, href: profile.github, Icon: FaGithub },
    { label: 'LinkedIn', value: `in/${profile.linkedinHandle}`, href: profile.linkedin, Icon: FaLinkedinIn },
    { label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { label: 'Location', value: profile.location },
  ];

  return (
    <Section id="contact" className="light-contact border-t border-line-soft">
      <Reveal>
        <div className="relative overflow-hidden lit-surface rounded-[28px] border border-line px-6 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(216_184_120/0.09),transparent)]"
            aria-hidden="true"
          />

          <div className="relative mb-10 flex items-center gap-4">
            <span className="label label-gold tabular-nums">05</span>
            <span className="h-px w-10 bg-gold-line" aria-hidden="true" />
            <span className="label">Contact</span>
          </div>

          <h2 className="relative max-w-4xl text-[2.25rem] leading-[1.08] font-semibold tracking-[-0.04em] text-balance text-fg sm:text-6xl lg:text-7xl">
            Have a project or <span className="serif-accent">opportunity</span> in mind?
          </h2>
          <p className="relative mt-7 max-w-xl text-base leading-[1.75] text-muted sm:text-lg">
            Let's build something thoughtful, reliable, and ready for the real world.
          </p>

          <div className="relative mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={mailto} className="btn btn-primary">
              Let's Talk <ArrowRight className="h-4 w-4" />
            </a>
            <button type="button" onClick={copyEmail} className="btn btn-outline">
              {copied ? <Check className="h-4 w-4 text-gold" /> : <Copy className="h-4 w-4" />}
              <span aria-live="polite">{copied ? 'Email copied' : 'Copy email'}</span>
            </button>
          </div>

          <div className="relative mt-16 border-t border-line pt-10">
            <p className="label mb-3">Email</p>
            <a
              href={mailto}
              className="link-underline font-display text-xl font-medium tracking-[-0.02em] break-all text-fg hover:text-gold-soft sm:text-3xl lg:text-4xl"
            >
              {profile.email}
            </a>

            <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-soft bg-line-soft sm:grid-cols-2 lg:grid-cols-4">
              {channels.map(({ label, value, href, Icon }) => {
                const inner = (
                  <>
                    <span className="label flex items-center gap-2">
                      {Icon && <Icon className="h-3 w-3" aria-hidden="true" />}
                      {label}
                    </span>
                    <span className="mt-2 flex items-center justify-between gap-2 text-[0.9375rem] text-fg">
                      <span className="truncate">{value}</span>
                      {href && (
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-subtle transition-colors group-hover:text-gold" aria-hidden="true" />
                      )}
                    </span>
                  </>
                );
                return (
                  <li key={label} className="bg-surface">
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                        className="group block px-5 py-5 transition-colors hover:bg-elevated"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="px-5 py-5">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
