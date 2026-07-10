import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, scrollToSection, loading }) {
  return (
    <>
      <motion.nav 
        initial={{ y: -30, opacity: 0, x: "-50%" }}
        animate={loading ? {} : { y: 0, opacity: 1, x: "-50%" }}
        transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
        className="fixed top-4 left-1/2 w-[92%] max-w-6xl h-16 bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl flex items-center justify-between px-6 z-50 shadow-2xl"
      >
        <div 
          className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          RAMIQ.DEV
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())} 
              className="hover:text-cyan-400 transition-colors duration-200 relative group py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 rounded" />
            </button>
          ))}
        </div>

        {/* Desktop Actions Wrapper */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/ramiqkhan"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/30 rounded-xl bg-slate-950/40 backdrop-blur-sm transition-all duration-300"
          >
<FaGithub className="w-[18px] h-[18px]" />          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:mramiqkhan66@gmail.com" 
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-slate-800 text-cyan-400 border border-cyan-500/30 rounded-xl hover:bg-cyan-500 hover:text-black transition-all duration-300 block"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Trigger */}
        <button className="md:hidden text-slate-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <IoClose className="w-6 h-6" />: <HiMenuAlt3 className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.98 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -15, scale: 0.98 }} 
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] bg-slate-900/95 backdrop-blur-lg border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 z-50 md:hidden shadow-2xl"
          >
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMobileMenuOpen(false); // Clean UX closing action
                }} 
                className="text-left py-2 text-lg font-medium text-slate-300 border-b border-slate-800/50 last:border-0 hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}

            {/* Mobile Footer Actions Integration */}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-800/80">
              <a
                href="https://github.com/ramiqkhan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors py-2"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Profile</span>
              </a>
              <a 
                href="mailto:mramiqkhan66@gmail.com"
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-slate-800 text-cyan-400 border border-cyan-500/20 rounded-xl"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}