import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects", highlight: true },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Name */}
        <motion.a
          href="#hero"
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-2 rounded-full bg-space-900/90 backdrop-blur-md border border-white/10 hover:border-accent-blue/50 transition-colors group"
          whileHover={{ scale: 1.01 }}
        >
          <div className="w-7 h-7 rounded-full bg-space-800 border border-white/15 flex items-center justify-center">
            <Terminal className="w-3.5 h-3.5 text-accent-blue" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-sm tracking-wide text-starlight leading-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[10px] text-cosmicmuted tracking-wider">
              CSE Student • Aspiring SWE
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav Links */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-space-900/90 backdrop-blur-md border border-white/10 shadow-card">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all ${
                link.highlight
                  ? 'text-accent-blue hover:text-white hover:bg-accent-blue/15 font-bold'
                  : 'text-lunardust hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.resumeUrl}
            download
            className="flex items-center gap-1.5 ml-2 px-3.5 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-starlight hover:border-accent-blue/40 hover:text-accent-blue transition-colors"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Right Corner: Contact Link & Mobile Menu Trigger */}
        <div className="pointer-events-auto flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-space-850 border border-white/10 hover:border-accent-blue/40 text-starlight font-mono text-xs tracking-wider uppercase transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Get in Touch</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-space-900/90 border border-white/10 text-starlight hover:text-accent-blue"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="pointer-events-auto md:hidden mt-3 max-w-sm mx-auto p-4 rounded-2xl bg-space-900/95 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl font-mono text-sm tracking-wider uppercase text-lunardust hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-accent-blue font-mono text-xs uppercase"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
