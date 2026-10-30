import React, { useState } from 'react';
import { useReducedMotion } from './hooks/useReducedMotion';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Achievements } from './components/Achievements/Achievements';
import { Certifications } from './components/Certifications/Certifications';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ResumeModal } from './components/Resume/ResumeModal';
import { AwakeningLoader } from './components/Loading/AwakeningLoader';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const reducedMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen bg-[#181b15] text-[#f0dfbd] font-sans selection:bg-[#d3ac51] selection:text-[#171817] transition-colors duration-300">
      {isLoading && <AwakeningLoader onLoaded={() => setIsLoading(false)} />}
      <Navbar />

      <main id="main-content" className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} reducedMotion={reducedMotion} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
