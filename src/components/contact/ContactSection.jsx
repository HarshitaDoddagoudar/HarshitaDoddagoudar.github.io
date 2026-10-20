import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10 text-center">
        {/* Subtitle */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-900 border border-white/10 text-accent-blue font-mono text-xs uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>

        {/* Heading */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-starlight max-w-4xl mx-auto leading-tight mb-6">
          Have an idea? Let's build something.
        </h2>

        {/* Description */}
        <p className="text-base sm:text-xl text-lunardust max-w-2xl mx-auto font-light leading-relaxed mb-12">
          I'm always excited to learn, collaborate, and explore interesting ideas. If you're working on something cool or would like to connect, I'd love to hear from you.
        </p>

        {/* Quick Email Interaction Box */}
        <div className="max-w-xl mx-auto glass-card rounded-3xl p-5 sm:p-6 border border-white/15 shadow-subtle mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left w-full sm:w-auto">
            <div className="p-3 rounded-2xl bg-space-850 border border-white/10 text-accent-blue">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-cosmicmuted uppercase block">
                Direct Email
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-sm sm:text-base font-bold text-starlight hover:text-accent-blue transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 ${
                copied
                  ? 'bg-emerald-500 text-white'
                  : 'bg-space-850 hover:bg-space-800 text-starlight border border-white/10'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-5 py-2.5 rounded-xl bg-accent-blue hover:bg-accent-blue-dark text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Mail Me</span>
            </a>
          </div>
        </div>

        {/* Authentic Social Links: GitHub & LinkedIn (No fabricated URLs) */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg mx-auto">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-space-900 hover:bg-space-850 text-starlight border border-white/10 hover:border-white/20 font-mono text-xs tracking-wider uppercase transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-space-900 hover:bg-space-850 text-starlight border border-white/10 hover:border-accent-blue/40 font-mono text-xs tracking-wider uppercase transition-colors text-accent-blue"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}
