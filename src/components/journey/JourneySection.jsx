import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Shield, Users, BookOpen, CheckCircle, Globe2 } from 'lucide-react';
import { EDUCATION, EXPERIENCE_ACTIVITIES, CERTIFICATIONS, SPOKEN_LANGUAGES } from '../../data/portfolioData';

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-accent-blue font-mono text-xs uppercase tracking-widest mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Path, Activities & Certifications</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-starlight tracking-tight">
            EDUCATION & JOURNEY.
          </h2>
        </div>

        {/* Section 1: Education (Compact Timeline Cards) */}
        <div className="mb-16">
          <h3 className="font-mono text-xs uppercase tracking-wider text-cosmicmuted mb-6 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-accent-blue" />
            <span>Academic Background</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-accent-blue/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-accent-blue font-bold">
                      {edu.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-space-850 border border-white/10 text-xs font-mono text-starlight font-bold">
                      {edu.score}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-xl text-starlight mb-1">
                    {edu.institution}
                  </h4>
                  <p className="font-mono text-xs text-lunardust">
                    {edu.degree}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-cosmicmuted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  <span>{edu.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Experience & Activities (NCC, Hackathons, Tutoring) */}
        <div className="mb-16">
          <h3 className="font-mono text-xs uppercase tracking-wider text-cosmicmuted mb-6 flex items-center gap-2">
            <Shield className="w-4 h-4 text-accent-warm" />
            <span>Experience & Extracurriculars</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCE_ACTIVITIES.map((act, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-850 text-cosmicmuted uppercase">
                      {act.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-accent-blue">
                      {act.role}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-starlight mb-2">
                    {act.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-lunardust leading-relaxed font-light">
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 & 4: Certifications & Spoken Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Certifications (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="font-mono text-xs uppercase tracking-wider text-cosmicmuted mb-5 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Certifications</span>
            </h3>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-space-900 border border-white/5 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-display font-semibold text-sm text-starlight block">
                        {cert.name}
                      </span>
                      <span className="font-mono text-xs text-cosmicmuted block">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-space-850 text-[11px] font-mono text-lunardust border border-white/10">
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages (5 cols) - Unobtrusive, honest */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="font-mono text-xs uppercase tracking-wider text-cosmicmuted mb-5 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-accent-blue" />
              <span>Languages</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {SPOKEN_LANGUAGES.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-space-900 border border-white/5"
                >
                  <span className="font-display font-semibold text-sm text-starlight block">
                    {lang.language}
                  </span>
                  <span className="font-mono text-xs text-cosmicmuted block mt-0.5">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-cosmicmuted">
              Effective communication across bilingual & multicultural teams
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
