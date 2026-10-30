import React from 'react';
import { profileData } from '../../data/profile';
import { soundEngine } from '../../utils/sound';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundEngine.playWhoosh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 sm:py-16 px-4 sm:px-6 bg-[#ffffff] dark:bg-[#0d0d0d] border-t-2 border-neutral-900 dark:border-neutral-800 overflow-hidden select-none">
      {/* Drifting Background Cloud SVG */}
      <div
        className="absolute -top-10 left-0 w-80 h-32 opacity-20 pointer-events-none"
        style={{ animation: 'cloud-drift 22s linear infinite' }}
      >
        <svg viewBox="0 0 200 80" fill="currentColor" className="text-neutral-400 dark:text-neutral-600">
          <path d="M 20 60 A 20 20 0 0 1 40 30 A 30 30 0 0 1 90 20 A 35 35 0 0 1 150 35 A 25 25 0 0 1 180 60 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 text-xs font-mono font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>THE CASE FILE CONTINUES</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-neutral-950 dark:text-white uppercase mb-4">
          THE ADVENTURE DOESN'T END HERE.
        </h2>

        <p className="max-w-xl text-neutral-600 dark:text-neutral-400 text-sm sm:text-base font-sans leading-relaxed mb-8">
          Detecting signals, investigating anomalies, and building practical defensive systems.
          Always ready for the next research inquiry and digital forensics expedition.
        </p>

        {/* Social Icons Links */}
        <div className="flex items-center gap-3 sm:gap-4 mb-10">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aslam Javeed on GitHub"
            className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-red-600 hover:scale-110 transition-all border border-neutral-200 dark:border-neutral-700 shadow-xs"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Aslam Javeed on LinkedIn"
            className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-red-600 hover:scale-110 transition-all border border-neutral-200 dark:border-neutral-700 shadow-xs"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/_.mi.amor.fio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore poetry on Instagram @_.mi.amor.fio"
            className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-red-600 hover:scale-110 transition-all border border-neutral-200 dark:border-neutral-700 shadow-xs"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Send an email to Aslam Javeed"
            className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-red-600 hover:scale-110 transition-all border border-neutral-200 dark:border-neutral-700 shadow-xs"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.reddit.com/user/Aslamxsthets/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aslam Javeed on Reddit"
            className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-red-600 hover:scale-110 transition-all border border-neutral-200 dark:border-neutral-700 shadow-xs"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3.25c-4.9 0-8.75 3.12-8.75 7.1 0 2.26 1.25 4.3 3.28 5.57-.14.83-.48 1.7-1.08 2.55 1.16-.07 2.28-.48 3.23-1.2 1.02.29 2.13.44 3.32.44 4.9 0 8.75-3.12 8.75-7.1S16.9 3.25 12 3.25Zm-3.35 6.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Zm6.7 0a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Zm-5.67 4.02c.7.55 1.5.82 2.32.82.83 0 1.62-.27 2.33-.82a.45.45 0 1 1 .55.71A4.55 4.55 0 0 1 12 15.1c-1.1 0-2.1-.35-2.88-1.02a.45.45 0 1 1 .56-.71ZM8.1 4.1 6.8 2.55a.55.55 0 0 1 .84-.7l1.37 1.64A8.8 8.8 0 0 1 12 3c1.1 0 2.13.2 3.05.5l1.3-1.65a.55.55 0 1 1 .87.67L16 4.1c2.82 1.35 4.75 3.63 4.75 6.25 0 4.2-3.92 7.55-8.75 7.55-1.1 0-2.15-.17-3.1-.48a8.6 8.6 0 0 1-3.22 1.23c.62-.82.98-1.67 1.16-2.5C4.18 14.85 3.25 12.7 3.25 10.35c0-2.62 1.92-4.9 4.85-6.25Z" />
            </svg>
          </a>
          <a
            href="https://x.com/leo_aslam_07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Aslam Javeed on X"
            className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:text-red-600 hover:scale-110 transition-all border border-neutral-200 dark:border-neutral-700 shadow-xs"
          >
            <span className="text-xl font-bold leading-none" aria-hidden="true">𝕏</span>
          </a>
        </div>

        {/* Back to Top button with satisfying animation */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-mono text-xs font-bold tracking-wider transition-all duration-200 shadow-md hover:scale-105 active:scale-95 mb-12 cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1 text-red-500" />
        </button>

        {/* Copyright Subtext */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <div>
            © 2026 ASLAM JAVEED. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>INSPIRED BY FREEDOM & INVESTIGATION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            <span className="text-red-600 dark:text-red-400 font-bold">LOS SANTOS // DFIR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
