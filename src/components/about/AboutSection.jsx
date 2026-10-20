import React from 'react';
import { User, GraduationCap, Shield, Sparkles, BookOpen, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-accent-blue font-mono text-xs uppercase tracking-widest mb-3">
            <User className="w-4 h-4" />
            <span>Background & Perspective</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-starlight tracking-tight">
            ABOUT ME.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-8 glass-card rounded-3xl p-6 sm:p-10 border border-white/10 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
              <span className="font-mono text-xs text-starlight font-bold uppercase tracking-wider">
                Third-Year CSE Student • New Horizon College of Engineering
              </span>
            </div>

            {PERSONAL_INFO.about.story.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg text-lunardust leading-relaxed font-light"
              >
                {paragraph}
              </p>
            ))}

            {/* Quiet, genuine motto */}
            <div className="p-4 rounded-2xl bg-space-900 border border-white/10 text-sm font-mono text-starlight flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
              <div>
                <span className="text-cosmicmuted block text-xs uppercase tracking-wider">Guiding Thought</span>
                "Curiosity starts the idea. Code brings it to life."
              </div>
            </div>
          </div>

          {/* Side Cards: Quick Facts & NCC */}
          <div className="lg:col-span-4 space-y-6">
            {/* Academic Snapshot Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-blue font-bold mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>Education At A Glance</span>
              </div>
              <div className="space-y-3 font-mono text-xs sm:text-sm text-lunardust">
                <div>
                  <span className="text-cosmicmuted text-[11px] block">Institution</span>
                  <span className="text-starlight font-medium">{PERSONAL_INFO.college}</span>
                </div>
                <div>
                  <span className="text-cosmicmuted text-[11px] block">Degree & Major</span>
                  <span className="text-starlight font-medium">B.E. in Computer Science & Engineering</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div>
                    <span className="text-cosmicmuted text-[11px] block">Expected Graduation</span>
                    <span className="text-starlight font-bold">{PERSONAL_INFO.graduationYear}</span>
                  </div>
                  <div>
                    <span className="text-cosmicmuted text-[11px] block">Current CGPA</span>
                    <span className="text-accent-blue font-bold text-base">{PERSONAL_INFO.cgpa}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* NCC Highlight Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 bg-space-900">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-warm font-bold mb-3">
                <Shield className="w-4 h-4" />
                <span>National Cadet Corps (NCC)</span>
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-accent-warm/15 border border-accent-warm/30 text-accent-warm font-mono text-xs font-bold mb-3">
                Rank: Sergeant
              </div>
              <p className="text-xs sm:text-sm text-lunardust leading-relaxed">
                An important part of my journey beyond academics, where I've developed discipline, teamwork, leadership, and responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
