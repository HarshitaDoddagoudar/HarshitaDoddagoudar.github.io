import React, { useState } from 'react';
import Tech3DBackground from './components/common/Tech3DBackground';
import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/common/Navbar';
import HeroSection from './components/hero/HeroSection';
import ProjectsSection from './components/projects/ProjectsSection';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';
import JourneySection from './components/journey/JourneySection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/common/Footer';

export default function App() {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');

  return (
    <div className="relative min-h-screen bg-space-950 text-starlight selection:bg-accent-blue selection:text-white font-sans overflow-x-hidden">
      {/* 3D Parallax Tech Canvas Background */}
      <Tech3DBackground />

      {/* Dynamic Cursor Follower with Project Hover Arrow */}
      <CustomCursor cursorVariant={cursorVariant} cursorText={cursorText} />

      {/* Floating Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <ProjectsSection setCursorVariant={setCursorVariant} setCursorText={setCursorText} />
        <AboutSection />
        <SkillsSection />
        <JourneySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
