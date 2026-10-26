import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Container } from './ui';
import { Monogram } from './Navbar';
import { navLinks, profile } from '../data/portfolio';

const iconLink =
  'grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-gold-line hover:text-gold';

export default function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <Container className="flex flex-col gap-10 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Monogram />
          <div>
            <p className="font-display text-sm font-semibold text-fg">{profile.name}</p>
            <p className="mt-0.5 text-xs text-subtle">
              {profile.role} · © {new Date().getFullYear()}
            </p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="link-underline transition-colors hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={iconLink}>
            <FaGithub className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={iconLink}>
            <FaLinkedinIn className="h-4 w-4" />
          </a>
          <a href="#top" aria-label="Back to top" className={iconLink}>
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
