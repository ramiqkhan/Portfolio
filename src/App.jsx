import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Terminal, Layers, BookOpen, Award, CheckCircle } from 'lucide-react'; // Removed Github

// Component Imports
import WelcomePage from './components/WelcomePage';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Common Animations
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 16 } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const skillsData = [
    { category: "Frontend", icon: <Code className="w-5 h-5 text-cyan-400" />, items: ["React.js", "React Native", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"] },
    { category: "Backend & DB", icon: <Database className="w-5 h-5 text-emerald-400" />, items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "MongoDB", "Mongoose", "Nodemailer"] },
    { category: "Tools & DevOps", icon: <Terminal className="w-5 h-5 text-purple-400" />, items: ["Git", "GitHub", "Postman", "Expo", "Agile/Scrum", "SMTP", "SendGrid / Mailgun"] },
    { category: "Core & Languages", icon: <Layers className="w-5 h-5 text-amber-400" />, items: ["Data Structures & Algorithms", "OOP", "DBMS", "Java", "C++", "C#", "Python"] }
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <WelcomePage onComplete={() => setLoading(false)} />}
      </AnimatePresence>

  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: loading ? 0 : 1 }}
  transition={{ duration: 0.5 }}
  className="relative isolate min-h-screen overflow-x-hidden bg-[#07070c] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black"
>
  {/* ================= Animated Background ================= */}

{/* ================= PREMIUM ANIMATED BACKGROUND ================= */}

<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">

  {/* Animated Grid */}
  <div className="grid-bg"></div>

  {/* Aurora Gradient */}
  <motion.div
    animate={{
      rotate: [0, 360],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute left-1/2 top-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full
      bg-[conic-gradient(from_0deg,#06b6d4,transparent,#8b5cf6,transparent,#3b82f6,#06b6d4)]
      opacity-[0.08] blur-[180px]"
  />

  {/* Floating Blob 1 */}
  <motion.div
    animate={{
      x: [-150, 120, -150],
      y: [-100, 80, -100],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-0 left-0
      w-[450px] h-[450px]
      rounded-full
      bg-cyan-500/20
      blur-[160px]"
  />

  {/* Floating Blob 2 */}
  <motion.div
    animate={{
      x: [120, -100, 120],
      y: [0, 180, 0],
      scale: [1.2, 1, 1.2],
    }}
    transition={{
      duration: 22,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-0 top-40
      w-[500px] h-[500px]
      rounded-full
      bg-purple-500/20
      blur-[170px]"
  />

  {/* Floating Blob 3 */}
  <motion.div
    animate={{
      x: [0, -150, 0],
      y: [0, -120, 0],
      scale: [1, 1.25, 1],
    }}
    transition={{
      duration: 26,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-0 left-1/2
      w-[420px] h-[420px]
      rounded-full
      bg-blue-500/20
      blur-[150px]"
  />

  {/* Moving Stars */}
  {Array.from({ length: 70 }).map((_, i) => (
    <motion.span
      key={i}
      className="absolute w-[2px] h-[2px] rounded-full bg-cyan-300"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.8,
      }}
      animate={{
        opacity: [0.2, 1, 0.2],
        scale: [1, 2, 1],
      }}
      transition={{
        duration: 2 + Math.random() * 4,
        repeat: Infinity,
      }}
    />
  ))}

  {/* Noise Layer */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "url('https://grainy-gradients.vercel.app/noise.svg')",
      backgroundSize: "200px",
    }}
  />

</div>

{/* ================= END BACKGROUND ================= */}

  {/* ================= End Background ================= */}
      <div className="relative z-10">
        <Navbar 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
          scrollToSection={scrollToSection} 
          loading={loading} 
        />

        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center pt-24 px-4">
          <div className="max-w-5xl w-full text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={loading ? {} : { opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 border border-slate-800 rounded-full text-xs text-cyan-400 font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse inline-block" /> Head Developer at Craft Tech
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={loading ? {} : { opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
              Hi, I am <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">Muhammad Ramiq Khan</span>
            </motion.h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Full Stack Engineer specializing in building scalable web and mobile applications.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => scrollToSection('projects')} className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold rounded-xl shadow-lg transition-transform transform hover:scale-[1.02]">
                View Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 font-semibold rounded-xl transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants} className="py-24 max-w-5xl mx-auto px-4 border-t border-slate-900">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-2">About Me</h2>
              <h3 className="text-3xl font-bold text-slate-100">Engineering with Scalable Intent.</h3>
            </div>
            <div className="md:col-span-2 text-slate-400 space-y-6 leading-relaxed">
              <p>I am a results-driven Full Stack Engineer with nearly 2 years of professional experience designing, building, and deploying production-ready applications. My expertise lies across the MERN Stack ecosystem and cross-platform mobile compilation via React Native.</p>
            </div>
          </div>
        </motion.section>

        {/* SKILLS MATRIX */}
        <section id="skills" className="py-24 max-w-5xl mx-auto px-4 border-t border-slate-900">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-2">Capabilities</h2>
            <h3 className="text-3xl font-bold">Technical Stack Architecture</h3>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div key={index} variants={fadeInUpVariants} className="p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-950 rounded-xl">{skill.icon}</div>
                  <h4 className="font-bold text-slate-200">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-950/80 border border-slate-800/60 rounded-lg text-xs font-mono text-slate-400">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="py-24 max-w-5xl mx-auto px-4 border-t border-slate-900">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-2">History</h2>
            <h3 className="text-3xl font-bold">Professional Timeline</h3>
          </div>
          <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
            <div className="relative pl-8">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#07070c]" />
              <div className="bg-slate-900/20 border border-slate-800/60 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-slate-100">Full Stack Head Developer</h4>
                <p className="text-sm text-cyan-400 font-medium mb-4">Craft Tech (Nov 2025 – Present)</p>
                <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
                  <li>Oversaw system architecture for core business dashboards and dev workflows.</li>
                  <li>Deployed scalable endpoints in Node.js, directly optimizing reporting pipelines.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        {/* EDUCATION */}
        <section className="py-24 max-w-5xl mx-auto px-4 border-t border-slate-900">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-cyan-400" /><h3 className="text-2xl font-bold">Academic Base</h3></div>
              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
                <h4 className="font-bold text-slate-200 text-lg">SZABIST</h4>
                <p className="text-sm text-cyan-400 font-medium mt-1 mb-3">BS Software Engineering</p>
                <span className="px-2.5 py-1 bg-slate-950 rounded-md text-xs font-mono text-slate-400 border border-slate-800">2023 – Present</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3"><Award className="w-6 h-6 text-purple-400" /><h3 className="text-2xl font-bold">Industry Recognitions</h3></div>
              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><p className="text-sm text-slate-300 font-medium">Selected as Head Developer at Craft Tech within 9 months of entry.</p></div>
              </div>
            </div>
          </div>
        </section>

        <Contact 
          formSubmitted={formSubmitted} 
          setFormSubmitted={setFormSubmitted} 
          fadeInUpVariants={fadeInUpVariants} 
          staggerContainer={staggerContainer} 
        />
        <footer className="border-t border-slate-900/60 bg-slate-950 py-8 text-center text-xs text-slate-600 font-mono">
          &copy; 2026 MUHAMMAD RAMIQ KHAN. All rights reserved.
        </footer>
        </div>

      </motion.div>
    </>
  );
}