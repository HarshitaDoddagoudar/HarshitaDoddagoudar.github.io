import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, GraduationCap, Sparkles, Send, Code2, Award } from 'lucide-react';
import { PERSONAL_INFO, HERO_HIGHLIGHT_SKILLS } from '../../data/portfolioData';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full z-10">
        {/* Top Academic & Status Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-900 border border-white/10 text-xs font-mono text-starlight">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for SWE Internships & Collaborations</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-lunardust">
            <span className="flex items-center gap-1.5 text-starlight">
              <GraduationCap className="w-4 h-4 text-accent-blue" />
              <span>{PERSONAL_INFO.college}</span>
            </span>
            <span className="text-cosmicmuted hidden sm:inline">•</span>
            <span className="px-2 py-0.5 rounded bg-space-850 border border-white/10 text-accent-blue font-bold">
              CGPA {PERSONAL_INFO.cgpa}
            </span>
            <span className="text-cosmicmuted hidden sm:inline">•</span>
            <span className="text-cosmicmuted">
              Class of {PERSONAL_INFO.graduationYear}
            </span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="max-w-4xl text-left mb-10">
          {/* Supporting Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-accent-blue font-mono text-xs sm:text-sm tracking-widest uppercase mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>{PERSONAL_INFO.tagline}</span>
          </motion.div>

          {/* Huge Name Display */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-starlight leading-[0.95]"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl sm:text-3xl text-starlight font-semibold max-w-3xl leading-snug tracking-tight"
          >
            "{PERSONAL_INFO.headline}"
          </motion.h2>

          {/* Short Introduction Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 space-y-3 text-base sm:text-lg text-lunardust leading-relaxed font-light max-w-3xl"
          >
            <p className="text-starlight font-medium">
              {PERSONAL_INFO.intro.greeting}
            </p>
            {PERSONAL_INFO.intro.paragraphs.map((p, idx) => (
              <p key={idx}>
                {p}
              </p>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue-dark text-white font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-card flex items-center gap-2 group"
            >
              <span>Explore My Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-space-850 hover:bg-space-800 border border-white/10 hover:border-white/20 text-starlight font-mono text-xs sm:text-sm tracking-wider uppercase transition-colors flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-accent-blue" />
              <span>Get in Touch</span>
            </a>
          </motion.div>
        </div>

        {/* Quick Tech Badges Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="pt-6 border-t border-white/5"
        >
          <div className="flex items-center gap-2 mb-3 font-mono text-xs text-cosmicmuted uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5 text-accent-blue" />
            <span>Technologies I Build & Experiment With</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {HERO_HIGHLIGHT_SKILLS.map((skill) => (
              <span
                key={skill.label}
                className="px-3 py-1.5 rounded-xl bg-space-900 border border-white/10 text-xs font-mono text-starlight hover:border-accent-blue/40 transition-colors flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                <span>{skill.label}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
