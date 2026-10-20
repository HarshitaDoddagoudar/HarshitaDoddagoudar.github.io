import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, ArrowRight, Code2, CheckCircle2, Lock, Sparkles, Smartphone, ShoppingCart, Pill, TrendingUp } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { PROJECTS } from '../../data/portfolioData';
import NnotesDemo from './NnotesDemo';
import HMartDemo from './HMartDemo';
import TabRemindDemo from './TabRemindDemo';
import P2PCompanionDemo from './P2PCompanionDemo';

export default function ProjectsSection({ setCursorVariant, setCursorText }) {
  // Nnotes is displayed first as requested
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS[0].id);

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  const renderMicroInteraction = (project) => {
    switch (project.id) {
      case 'nnotes':
        return <NnotesDemo project={project} />;
      case 'h-mart':
        return <HMartDemo project={project} />;
      case 'tab-remind':
        return <TabRemindDemo project={project} />;
      case 'p2p-companion':
        return <P2PCompanionDemo project={project} />;
      default:
        return null;
    }
  };

  const getProjectIcon = (id) => {
    switch (id) {
      case 'nnotes':
        return <Smartphone className="w-4 h-4 text-emerald-400" />;
      case 'h-mart':
        return <ShoppingCart className="w-4 h-4 text-accent-blue" />;
      case 'tab-remind':
        return <Pill className="w-4 h-4 text-accent-warm" />;
      case 'p2p-companion':
        return <TrendingUp className="w-4 h-4 text-amber-400" />;
      default:
        return <Code2 className="w-4 h-4 text-accent-blue" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-accent-blue font-mono text-xs uppercase tracking-widest mb-3">
              <Layers className="w-4 h-4" />
              <span>Portfolio Works</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-starlight tracking-tight">
              FEATURED PROJECTS.
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-lunardust max-w-md leading-relaxed">
            Real projects built across Android, web development, and client interfaces. Hover or tap to inspect key features and live demos.
          </p>
        </div>

        {/* Row of Project Thumbnails (Interactive Expanding Accordion) */}
        <div
          className="flex flex-col md:flex-row gap-3 sm:gap-4 w-full h-[460px] md:h-[290px] lg:h-[320px] mb-12"
          role="tablist"
          aria-label="Project works row"
        >
          {PROJECTS.map((project, index) => {
            const isActive = project.id === activeProjectId;

            return (
              <motion.button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${project.id}`}
                onClick={() => setActiveProjectId(project.id)}
                onMouseEnter={() => {
                  setCursorVariant('project');
                  setCursorText('VIEW');
                }}
                onMouseLeave={() => {
                  setCursorVariant('default');
                  setCursorText('');
                }}
                layout
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                className={`relative rounded-2xl p-5 sm:p-6 text-left flex flex-col justify-between overflow-hidden transition-all duration-300 border focus:outline-none ${
                  isActive
                    ? 'flex-[3.5] bg-space-850 border-accent-blue/60 shadow-subtle'
                    : 'flex-[1] bg-space-900 border-white/10 hover:border-white/20 hover:bg-space-850/60 opacity-80 hover:opacity-100'
                }`}
              >
                {/* Top Card Bar: Index + Status Badge */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs sm:text-sm font-bold text-accent-blue">
                      0{index + 1}
                    </span>
                    {getProjectIcon(project.id)}
                  </div>

                  {project.isPublished ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Google Play
                    </span>
                  ) : project.isInDevelopment ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-accent-warm/15 border border-accent-warm/40 text-accent-warm font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      In Development
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-lunardust font-mono text-[10px] uppercase">
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Card Title & Subtitle */}
                <div className="relative z-10">
                  <h3
                    className={`font-display font-bold tracking-tight transition-all text-starlight ${
                      isActive ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-lg sm:text-xl'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-1 text-xs font-mono text-lunardust line-clamp-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Bottom hint for active */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                  <span className="text-accent-blue font-bold flex items-center gap-1">
                    {isActive ? 'Active Project' : 'Select'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-cosmicmuted text-[10px] hidden sm:inline">
                    {project.technologies[0]}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ACTIVE PROJECT DETAILS SHOWCASE */}
        <div
          id={`panel-${activeProject.id}`}
          role="tabpanel"
          className="rounded-3xl glass-card p-6 sm:p-10 border border-white/10 relative overflow-hidden"
        >
          {/* GIANT EXPRESSIVE TITLE (Clickable to Repository where available) */}
          <div className="overflow-hidden mb-2">
            {activeProject.links.repository ? (
              <a
                href={activeProject.links.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3"
                title="Open GitHub Repository"
              >
                <h3
                  key={activeProject.id}
                  className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-starlight group-hover:text-accent-blue transition-colors leading-none flex flex-wrap"
                >
                  {activeProject.title.split('').map((char, i) => (
                    <motion.span
                      key={`${activeProject.id}-${i}`}
                      initial={{ y: 35, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.03,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block whitespace-pre"
                    >
                      {char}
                    </motion.span>
                  ))}
                </h3>
                <ExternalLink className="w-6 h-6 text-cosmicmuted group-hover:text-accent-blue transition-colors" />
              </a>
            ) : (
              <h3
                key={activeProject.id}
                className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-starlight leading-none flex flex-wrap"
              >
                {activeProject.title.split('').map((char, i) => (
                  <motion.span
                    key={`${activeProject.id}-${i}`}
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.03,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block whitespace-pre"
                  >
                    {char}
                  </motion.span>
                ))}
              </h3>
            )}
          </div>

          <p className="font-mono text-sm text-accent-blue font-semibold mb-6">
            {activeProject.subtitle}
          </p>

          {/* Description and Key Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-base sm:text-lg text-lunardust leading-relaxed font-normal">
                {activeProject.description}
              </p>

              {/* Technologies Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-xl bg-space-900 border border-white/10 text-xs font-mono text-starlight flex items-center gap-1.5"
                  >
                    <Code2 className="w-3 h-3 text-accent-blue" />
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                {activeProject.links.googlePlay && (
                  <a
                    href={activeProject.links.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2"
                  >
                    <span>View on Google Play</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {activeProject.links.liveDemo && (
                  <a
                    href={activeProject.links.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-accent-blue hover:bg-accent-blue-dark text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-2"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {activeProject.links.repository ? (
                  <a
                    href={activeProject.links.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-space-900 hover:bg-space-850 text-starlight border border-white/10 hover:border-white/20 font-mono text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Repository</span>
                  </a>
                ) : (
                  <span className="px-5 py-2.5 rounded-full bg-space-900 text-cosmicmuted border border-white/10 font-mono text-xs tracking-wider uppercase flex items-center gap-2 cursor-default select-none">
                    <Lock className="w-3.5 h-3.5" />
                    <span>In Development (Private Repo)</span>
                  </span>
                )}
              </div>
            </div>

            {/* Key Features List */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-space-900 border border-white/10">
              <h4 className="font-mono text-xs uppercase tracking-wider text-starlight font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Key Features & Architecture</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm font-light text-lunardust">
                {activeProject.keyFeatures?.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent-blue font-bold mt-0.5">❯</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Project Preview Stage */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {renderMicroInteraction(activeProject)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
