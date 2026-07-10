import { useEffect } from 'react';
import { motion } from 'framer-motion';

const welcomeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  },
  exit: {
    y: "-100%",
    transition: {
      ease: [0.76, 0, 0.24, 1],
      duration: 0.85
    }
  }
};

const welcomeTextVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

const welcomeBarVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100px",
    transition: { duration: 0.9, ease: "easeInOut" }
  }
};

export default function WelcomePage({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      variants={welcomeContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-[#040408] z-[9999] flex flex-col items-center justify-center font-sans select-none overflow-hidden"
    >
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />

      <div className="text-center relative z-10 flex flex-col items-center gap-4">
        <motion.span 
          variants={welcomeTextVariants}
          className="text-xs font-mono tracking-[0.35em] uppercase text-cyan-400/60 font-bold"
        >
          System Initializing
        </motion.span>
        
        <motion.h1 
          variants={welcomeTextVariants}
          className="text-4xl sm:text-6xl font-black tracking-tighter bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent"
        >
          RAMIQ.DEV
        </motion.h1>

        <motion.div 
          variants={welcomeBarVariants}
          className="h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rounded-full"
        />

        <motion.p 
          variants={welcomeTextVariants}
          className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mt-2"
        >
          Full Stack Architecture &copy; 2026
        </motion.p>
      </div>
    </motion.div>
  );
}