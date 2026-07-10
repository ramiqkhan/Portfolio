import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Smartphone, Monitor } from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const projectsData = [
    // --- TOP FEATURED DEPLOYMENTS ---
    {
      title: "Iqra Traders",
      category: "web",
      domain: "iqratraders.com",
      link: "https://iqratraders.com/",
      tags: ["React.js", "Tailwind CSS"],
      badgeTags: ["ENTERPRISE", "DISTRIBUTION"],
      description: "High-performance enterprise tech distribution platform featuring automated transactional email pipelines and real-time product inventory architectures."
    },
    {
      title: "Houston Easy Repairs",
      category: "web",
      domain: "houstoneasyrepairs.com",
      link: "https://houstoneasyrepairs.com/",
      tags: ["Node.js", "SMTP Routing"],
      badgeTags: ["CONSUMER SERVICES", "DISPATCH"],
      description: "Consumer services dispatch deployment with robust multi-channel custom email alert systems and fluid client communication pipelines."
    },
    {
      title: "Herbalize",
      category: "web",
      domain: "theherbalyze.com",
      link: "https://www.theherbalyze.com/",
      tags: ["React.js", "SEO Management"],
      badgeTags: ["PURE REMEDIES", "E-COMMERCE"],
      description: "A specialized e-commerce and wellness blogging ecosystem delivering rich product architectures, optimized search index structures, and pure botanical catalog grids."
    },
    {
      title: "Craft Tech",
      category: "web",
      domain: "crafttech.crafttechco.com",
      link: "https://crafttech.crafttechco.com",
      tags: ["System Architecture", "Node.js"],
      badgeTags: ["AGENCY", "CORPORATE"],
      description: "Official agency portal and core corporate engine driving automated developer workflows, custom API integrations, and premium client dashboards."
    },

    // --- OTHER COMPLETED DEPLOYMENTS ---
    {
      title: "Lula's Garden",
      category: "web",
      domain: "garden-plum-sigma.vercel.app",
      link: "https://garden-plum-sigma.vercel.app/",
      tags: ["React.js", "Tailwind CSS"],
      badgeTags: ["E-COMMERCE", "UX DESIGN"],
      description: "A premium boutique botanical shop experience utilizing modern masonry layouts, sticky global interactive headers, and sleek glassmorphic product catalog matrices."
    },
    {
      title: "Apex Construction Hub",
      category: "web",
      domain: "construction-liard-two.vercel.app",
      link: "https://construction-liard-two.vercel.app/",
      tags: ["React.js", "Tailwind CSS"],
      badgeTags: ["HEAVY INDUSTRY", "PORTFOLIO"],
      description: "A heavy-industry presentation application featuring dense, high-performance portfolio filters, spatial layouts, and silky asynchronous load transitions."
    },
    {
      title: "Velocity Motor Hub",
      category: "web",
      domain: "sports-amber-eight.vercel.app",
      link: "https://sports-amber-eight.vercel.app/",
      tags: ["React.js", "Tailwind CSS"],
      badgeTags: ["NAKED STREETFIGHTERS", "DARK THEME"],
      description: "A tracking and spec-comparison portal specialized for high-velocity street bikes, rendered entirely using stealth-black matte aesthetics and neon interactive overlays."
    },
    {
      title: "Da Cake Store",
      category: "web",
      domain: "da-cake.vercel.app/same-day",
      link: "https://da-cake.vercel.app/same-day",
      tags: ["React.js", "Express.js"],
      badgeTags: ["E-COMMERCE", "ORDER ROUTING"],
      description: "An on-demand e-commerce portal optimizing dynamic same-day confectionery order placements, delivery configurations, and structured checkouts."
    },
    {
      title: "Ventura Corporate Suite",
      category: "web",
      domain: "ventura-fawn-gamma.vercel.app",
      link: "https://ventura-fawn-gamma.vercel.app/",
      tags: ["React.js", "Framer Motion"],
      badgeTags: ["MODULAR UI", "CORPORATE"],
      description: "A high-end corporate presentation interface delivering performance-optimized layout modules, sticky headers, and smooth viewport transitions."
    },
    {
      title: "ZAK Solutions Portal",
      category: "web",
      domain: "zak-seven.vercel.app",
      link: "https://zak-seven.vercel.app/",
      tags: ["React.js", "REST APIs"],
      badgeTags: ["DASHBOARD UI", "PROFESSIONAL"],
      description: "Tailored professional software platform structuring complex dataset representations into highly clear, responsive layouts for fast client tracking."
    },
    {
      title: "FBR Invoice App",
      category: "mobile",
      domain: "React Native Mobile App",
      link: "#",
      tags: ["React Native", "Expo"],
      badgeTags: ["FINANCIAL", "LOCAL SCHEMA"],
      description: "A tactical financial logging platform built natively for mobile systems, featuring fast forms and local data compilation schemas."
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-32 max-w-6xl mx-auto px-4 border-t border-slate-900/40 relative">
      
      {/* Background Ambient Flare */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/[0.02] rounded-full blur-[150px] pointer-events-none" />

      {/* HEADER SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-6 relative z-10">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 mb-3">SELECTED WORKS</h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight text-slate-800 uppercase select-none">
            <span className="text-white font-black">{activeTab === 'all' ? 'WEB' : activeTab}</span> PROJECTS
          </h3>
        </div>
        <div className="lg:max-w-xs border-l border-cyan-500/30 pl-4 py-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 leading-relaxed">
            Building digital experiences that combine aesthetic beauty with technical excellence.
          </p>
        </div>
      </div>

      {/* FILTER BUTTONS NAVIGATION */}
      <div className="flex gap-2 mb-20 bg-slate-950/60 p-1 rounded-xl border border-slate-900 w-fit backdrop-blur-md relative z-10">
        {['all', 'web', 'mobile'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-widest transition-all relative ${
              activeTab === tab ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <span className="relative z-10">{tab}</span>
            {activeTab === tab && (
              <motion.div
                layoutId="activePremiumDesignTab"
                className="absolute inset-0 bg-slate-900 border border-slate-800/80 rounded-lg shadow-inner"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ALTERNATING ROW DEPLOYMENTS */}
      <div className="space-y-36 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid lg:grid-cols-12 gap-12 items-center"
              >
                {/* Embedded Glow Canvas */}
                <div className="absolute -z-10 w-80 h-80 bg-cyan-500/[0.015] rounded-full blur-[100px] pointer-events-none left-1/3" />

                {/* Interactive Premium Frame Wrapper */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.015,
                    borderColor: "rgba(34, 211, 238, 0.25)",
                    boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px -10px rgba(6, 182, 212, 0.05)"
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  className={`lg:col-span-7 relative w-full aspect-video rounded-2xl border border-slate-900 bg-slate-950/80 shadow-2xl overflow-hidden group ${
                    !isEven ? 'lg:order-2' : ''
                  }`}
                >
                  {/* Top Window Chrome Controls */}
                  <div className="h-10 w-full bg-slate-900/60 border-b border-slate-900 px-4 flex items-center justify-between backdrop-blur-sm">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/40 group-hover:bg-red-500/70 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40 group-hover:bg-amber-500/70 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-500/70 transition-colors" />
                    </div>
                    
                    {/* Active Live Domain Address Bar */}
                    <div className="bg-slate-950/80 px-4 py-0.5 rounded-md text-[10px] font-mono text-slate-400 w-3/5 md:w-1/2 flex items-center justify-center gap-2 border border-slate-900/60 shadow-inner">
                      {project.link !== "#" && (
                        <span className="relative flex h-1.5 w-1.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                        </span>
                      )}
                      <span className="truncate tracking-wide">{project.domain}</span>
                    </div>
                    <div className="w-12" />
                  </div>

                  {/* Window Content Matrix Viewport */}
                  <div className="w-full h-[calc(100%-40px)] relative bg-slate-950">
                    {project.link !== "#" ? (
                      <iframe 
                        src={project.link} 
                        title={project.title}
                        loading="lazy"
                        className="w-full h-full border-none opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none select-none grayscale-[20%] group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-[#09090f] text-slate-600">
                        <Smartphone className="w-10 h-10 mb-2 text-slate-800" />
                        <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500">NATIVE APP DEPLOYMENT</span>
                      </div>
                    )}
                    
                    {/* Frame Shield blocking dynamic cursor trapping inside iframes */}
                    <div className="absolute inset-0 bg-transparent" />
                  </div>
                </motion.div>

                {/* Text Content and Metadata Architecture Columns */}
                <div className={`lg:col-span-5 flex flex-col justify-center space-y-5 ${
                  !isEven ? 'lg:order-1 lg:pr-10' : 'lg:pl-10'
                }`}>
                  {/* Category Badge Pill Assemblies */}
                  <div className="flex flex-wrap gap-2">
                    {project.badgeTags?.map((bTag) => (
                      <span key={bTag} className="px-2.5 py-0.5 bg-cyan-500/[0.03] border border-cyan-500/20 text-[9px] font-mono font-bold tracking-[0.15em] text-cyan-400 rounded-md shadow-sm">
                        {bTag}
                      </span>
                    ))}
                  </div>

                  {/* Heading & Target Link Trigger */}
                  <div className="flex items-center gap-3 group">
                    <h4 className="text-2xl font-bold tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    {project.link !== "#" && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-1 text-slate-600 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Structural Text Descriptions */}
                  <p className="text-sm text-slate-400 font-normal leading-relaxed text-left">
                    {project.description}
                  </p>

                  <hr className="border-slate-900/60 my-1" />

                  {/* Architecture Badging Footer */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[11px] font-mono text-slate-500">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-3.5 h-3.5 text-cyan-500/60" />
                      <span className="tracking-wide text-slate-400">{project.tags.join(' / ').toUpperCase()}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-cyan-500/60" />
                      <span className="text-[10px] tracking-wider uppercase text-slate-500">RESPONSIVE</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

    </section>
  );
}