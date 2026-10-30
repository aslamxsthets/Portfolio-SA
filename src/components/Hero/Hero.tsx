import React from 'react';
import { profileData } from '../../data/profile';
import { ArrowDown, Compass, FolderGit2, Github, Linkedin, UsersRound } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  reducedMotion?: boolean;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero-los-santos film-grain relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden select-none"
    >
      <div className="gta-hero-content relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="gta-display text-5xl sm:text-7xl md:text-9xl font-black tracking-tight text-white mb-1">
          ASLAM JAVEED M
        </h1>

        <p className="mb-2 gta-interface text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] uppercase text-white">
          CYBERSECURITY STUDENT
        </p>

        <div className="mb-8 space-y-2">
          <p className="gta-call-sign gta-interface text-sm sm:text-base font-bold tracking-[0.16em] uppercase">
            @CALL SIGN: EREBUS . D . AKUMA
          </p>
          <p className="text-base sm:text-lg md:text-xl font-mono font-bold text-[#fff1cf] tracking-wide uppercase">
            DIGITAL FORENSICS & INCIDENT RESPONSE | DFIR ENTHUSIAST | "WILL OF D" COMMUNITY FOUNDER
          </p>
          <p className="mx-auto text-center text-sm sm:text-base font-semibold text-[#fff1cf] max-w-2xl">
            Investigating incidents. Analyzing evidence. Building defenses. Turning curiosity into cybersecurity solutions.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-2xl">
          <button
            id="btn-hero-explore"
            onClick={() => handleScrollTo('contact')}
            className="flex items-center gap-2 px-6 py-3 rounded-sm bg-[#171817] hover:bg-[#2f3d2c] text-[#fff1cf] font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
          >
            <Compass className="w-4 h-4 text-red-500" />
            <span>CONTACT ME</span>
          </button>

          <button
            id="btn-hero-projects"
            onClick={() => handleScrollTo('projects')}
            className="flex items-center gap-2 px-6 py-3 rounded-sm bg-[#f0dfbd] hover:bg-white border-2 border-[#171817] text-[#171817] font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
          >
            <FolderGit2 className="w-4 h-4 text-red-600" />
            <span>VIEW PROJECTS</span>
          </button>
        </div>

        <div className="hero-socials flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 max-w-full">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aslam Javeed on GitHub"
            className="hero-social-link"
          >
            <Github className="w-4 h-4" />
            <span>GITHUB</span>
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Aslam Javeed on LinkedIn"
            className="hero-social-link"
          >
            <Linkedin className="w-4 h-4" />
            <span>LINKEDIN</span>
          </a>
          <a
            href="https://aslamxsthets.github.io/Will-Of-D/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the Will of D community"
            className="hero-social-link"
          >
            <UsersRound className="w-4 h-4" />
            <span>COMMUNITY</span>
          </a>
          <a
            href="https://www.reddit.com/user/Aslamxsthets/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aslam Javeed on Reddit"
            className="hero-social-link"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3.25c-4.9 0-8.75 3.12-8.75 7.1 0 2.26 1.25 4.3 3.28 5.57-.14.83-.48 1.7-1.08 2.55 1.16-.07 2.28-.48 3.23-1.2 1.02.29 2.13.44 3.32.44 4.9 0 8.75-3.12 8.75-7.1S16.9 3.25 12 3.25Zm-3.35 6.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Zm6.7 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Zm-5.67 4.02c.7.55 1.5.82 2.32.82.83 0 1.62-.27 2.33-.82a.45.45 0 1 1 .55.71A4.55 4.55 0 0 1 12 15.1c-1.1 0-2.1-.35-2.88-1.02a.45.45 0 1 1 .56-.71ZM8.1 4.1 6.8 2.55a.55.55 0 0 1 .84-.7l1.37 1.64A8.8 8.8 0 0 1 12 3c1.1 0 2.13.2 3.05.5l1.3-1.65a.55.55 0 1 1 .87.67L16 4.1c2.82 1.35 4.75 3.63 4.75 6.25 0 4.2-3.92 7.55-8.75 7.55-1.1 0-2.15-.17-3.1-.48a8.6 8.6 0 0 1-3.22 1.23c.62-.82.98-1.67 1.16-2.5C4.18 14.85 3.25 12.7 3.25 10.35c0-2.62 1.92-4.9 4.85-6.25Z" />
            </svg>
            <span>REDDIT</span>
          </a>
          <a
            href="https://x.com/leo_aslam_07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aslam Javeed on X"
            className="hero-social-link"
          >
            <span className="text-sm font-bold" aria-hidden="true">𝕏</span>
            <span>X</span>
          </a>
        </div>

        <button
          onClick={() => handleScrollTo('about')}
          className="mt-14 flex flex-col items-center gap-1 text-xs font-mono text-neutral-400 hover:text-red-600 transition-colors cursor-pointer group"
        >
          <span className="tracking-widest uppercase">DISCOVER THE LOGBOOK</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-red-600" />
        </button>
      </div>
    </section>
  );
};
