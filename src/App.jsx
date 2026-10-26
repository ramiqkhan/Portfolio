import { MotionConfig } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="page-bg relative isolate min-h-screen overflow-x-clip">
        {/* Fixed backdrop layers; hero and section lighting live in their components */}
        <div className="backdrop-vignette -z-10" aria-hidden="true" />
        <div className="backdrop-grain -z-10" aria-hidden="true" />

        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-fg px-5 py-2.5 text-sm text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
