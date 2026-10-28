import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Container } from './ui';
import { Monogram } from './Navbar';
import { profile } from '../data/portfolio';

const iconLink =
  'grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-gold-line hover:text-gold';

export default function Footer() {
  return (
    <footer className="tone-footer relative">
      <div className="gold-hairline" aria-hidden="true" />
      <Container className="flex flex-col items-center gap-8 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-4">
          <Monogram />
          <div>
            <p className="font-display text-sm font-semibold text-fg">{profile.name}</p>
            <p className="mt-0.5 text-xs text-subtle">{profile.role}</p>
          </div>
        </div>

        <p className="order-last text-xs text-subtle sm:order-none">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

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
