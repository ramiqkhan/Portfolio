import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#07070c]" />

      {/* Cyan Blob */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -120, 80, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-20 w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 120, -80, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/20 blur-[160px]"
      />

      {/* Blue Blob */}
      <motion.div
        animate={{
          x: [0, 100, -80, 0],
          y: [0, 80, -120, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[120px]"
      />
    </div>
  );
}