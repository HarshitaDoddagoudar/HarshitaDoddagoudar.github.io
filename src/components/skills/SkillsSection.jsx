import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-4 h-4 text-accent-blue" />;
      case 'Web Development':
        return <Globe className="w-4 h-4 text-accent-blue" />;
      case 'Mobile Development':
        return <Smartphone className="w-4 h-4 text-emerald-400" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-amber-400" />;
      case 'Tools':
        return <Wrench className="w-4 h-4 text-accent-warm" />;
      default:
        return <Code2 className="w-4 h-4 text-accent-blue" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-accent-blue font-mono text-xs uppercase tracking-widest mb-3">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-starlight tracking-tight">
              SKILLS & TOOLS.
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1 rounded-full bg-space-900 border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-accent-blue text-white font-bold'
                    : 'text-lunardust hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <motion.div
              layout
              key={group.category}
              className="glass-card rounded-3xl p-6 border border-white/10 hover:border-accent-blue/40 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-space-850 border border-white/10">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="font-display font-bold text-lg text-starlight">
                      {group.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-cosmicmuted">
                    {group.skills.length} Items
                  </span>
                </div>

                {/* Skill Badges (No percentage bars, honest list of technologies worked with) */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, index) => {
                    const animClass = index % 2 === 0 ? 'animate-drift-1' : 'animate-drift-2';
                    return (
                      <div
                        key={skill}
                        className={`${animClass} hover:!animation-play-state-paused`}
                        style={{ animationDelay: `${index * 0.7}s` }}
                      >
                        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-space-900/90 border border-white/10 hover:border-accent-blue/50 text-starlight hover:text-white transition-all duration-200 select-none">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                          <span className="font-mono text-xs sm:text-sm font-semibold">
                            {skill}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cosmicmuted">
                <span>Hands-on practice & project work</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on approach */}
        <div className="mt-8 text-center text-xs font-mono text-cosmicmuted">
          ✦ Technologies I have worked with or am currently learning through hands-on projects.
        </div>
      </div>
    </section>
  );
}
