import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5 bg-space-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-lunardust">
        {/* Minimal Suggested Text */}
        <div className="text-center sm:text-left">
          <span>Designed and built with curiosity by </span>
          <span className="text-starlight font-bold">{PERSONAL_INFO.name}</span>.
        </div>

        {/* Links to Home, Projects, GitHub, Contact */}
        <div className="flex items-center gap-6 text-cosmicmuted">
          <a href="#hero" className="hover:text-starlight transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-starlight transition-colors">
            Projects
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-starlight transition-colors"
          >
            GitHub
          </a>
          <a href="#contact" className="hover:text-starlight transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
