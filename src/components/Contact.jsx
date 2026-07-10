import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, Send } from 'lucide-react';

export default function Contact({ formSubmitted, setFormSubmitted, fadeInUpVariants, staggerContainer }) {
  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto px-4 border-t border-slate-900 mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-500 mb-2">Connect</h2>
        <h3 className="text-3xl font-bold">Initiate Communication</h3>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-2 space-y-4"
        >
          <motion.div variants={fadeInUpVariants} className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl flex items-center gap-4">
            <Mail className="w-5 h-5 text-cyan-400" />
            <div className="text-xs font-mono">
              <p className="text-slate-500 text-[10px] uppercase">Email Link</p>
              <a href="mailto:mramiqkhan66@gmail.com" className="text-slate-300 hover:text-cyan-400">mramiqkhan66@gmail.com</a>
            </div>
          </motion.div>
          <motion.div variants={fadeInUpVariants} className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl flex items-center gap-4">
            <Phone className="w-5 h-5 text-purple-400" />
            <div className="text-xs font-mono">
              <p className="text-slate-500 text-[10px] uppercase">Voice Protocol</p>
              <p className="text-slate-300">+92 346 1112148</p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUpVariants} className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl flex items-center gap-4">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <div className="text-xs font-mono">
              <p className="text-slate-500 text-[10px] uppercase">HQ Location</p>
              <p className="text-slate-300">Karachi, Pakistan</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 bg-slate-900/20 border border-slate-800 rounded-2xl p-6"
        >
          <AnimatePresence mode="wait">
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0 }}
                className="py-12 text-center space-y-3"
              >
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold">Transmission Dispatched</h4>
                <p className="text-sm text-slate-400">Your message was processed successfully. I will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Identity</label>
                    <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50" placeholder="Name" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Return Endpoint</label>
                    <input required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50" placeholder="Email" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Message Body</label>
                  <textarea required rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50 resize-none" placeholder="Write message here..." />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit" 
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" /> Send Message
                </motion.button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}