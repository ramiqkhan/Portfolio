import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Copy, Check, Phone, MapPin } from 'lucide-react';
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
    { label: 'Phone', value: profile.phone, href: profile.phoneHref, Icon: Phone },
    { label: 'Location', value: profile.location, Icon: MapPin },
  ];

  return (
    <Section id="contact" tone="contact" pattern="rings">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <div className="mb-10 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold-line" aria-hidden="true" />
            <span className="label label-gold tabular-nums">05</span>
            <span className="label">Contact</span>
            <span className="h-px w-10 bg-gold-line" aria-hidden="true" />
          </div>

          <h2 className="text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.045em] text-balance text-fg sm:text-7xl lg:text-[5.5rem]">
            Let's build something <span className="serif-accent pr-1">remarkable.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-[1.75] text-pretty text-muted sm:text-lg">
            Have a project, a technical challenge, or an opportunity in mind? I'd love to hear from you.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={mailto} className="btn btn-primary">
              Let's Talk <ArrowRight className="h-4 w-4" />
            </a>
            <button type="button" onClick={copyEmail} className="btn btn-outline">
              {copied ? <Check className="h-4 w-4 text-gold" /> : <Copy className="h-4 w-4" />}
              <span aria-live="polite">{copied ? 'Email copied' : 'Copy email'}</span>
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-20">
          <p className="label mb-4">Write to me directly</p>
          <a
            href={mailto}
            className="link-underline font-display text-[1.35rem] font-medium tracking-[-0.02em] break-all text-fg transition-colors hover:text-gold-soft sm:text-4xl"
          >
            {profile.email}
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mx-auto mt-20 max-w-5xl">
        <ul className="grid grid-cols-1 border-y border-line sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href, Icon }, i) => {
            const inner = (
              <>
                <Icon className="h-4 w-4 shrink-0 text-gold/80" aria-hidden="true" />
                <span className="min-w-0 flex-1 text-left">
                  <span className="label block">{label}</span>
                  <span className="mt-1 block truncate text-sm text-fg">{value}</span>
                </span>
                {href && (
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-subtle transition-colors group-hover:text-gold"
                    aria-hidden="true"
                  />
                )}
              </>
            );
            const cell = `flex items-center gap-4 px-5 py-5 ${i > 0 ? 'border-t border-line-soft sm:border-t-0' : ''} ${
              i % 2 === 1 ? 'sm:border-l sm:border-line-soft' : ''
            } ${i > 1 ? 'sm:border-t sm:border-line-soft lg:border-t-0' : ''} ${i > 0 ? 'lg:border-l lg:border-line-soft' : ''}`;
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    {...(href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                    className={`group ${cell} transition-colors hover:bg-fg/[0.03]`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cell}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
