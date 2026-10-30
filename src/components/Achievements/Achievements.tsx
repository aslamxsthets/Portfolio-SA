import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { achievementsData } from '../../data/achievements';
import { Award, Trophy } from 'lucide-react';

export const Achievements: React.FC = () => (
  <section id="achievements" className="gta-section py-16 sm:py-20 px-4 sm:px-6 relative">
    <div className="max-w-6xl mx-auto">
      <SectionHeading chapter="CHAPTER 06" badge="RECOGNITION" title="AWARDS & UNLOCKS" subtitle="Selected hackathon, research, innovation, and practical cybersecurity milestones." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
        {achievementsData.map((item, index) => (
          <article key={item.id} className="group relative rounded-sm p-6 sm:p-7 border border-[#d3ac51]/60 bg-[#252820] shadow-md transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 bg-manga-halftone opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-black tracking-widest text-[#d3ac51] uppercase">UNLOCKED / 0{index + 1}</span>
                <Trophy className="w-5 h-5 text-[#d3ac51]" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-black text-xl text-[#fff1cf] group-hover:text-[#d3ac51] transition-colors mb-1.5">{item.title}</h3>
              <p className="text-xs font-mono font-bold text-[#c8c0a5] mb-3">{item.subtitle}</p>
              <p className="text-xs sm:text-sm text-[#c8c0a5] leading-relaxed mb-6">{item.description}</p>
            </div>
            <div className="relative pt-3 border-t border-[#d3ac51]/20 flex items-center justify-between text-xs font-mono text-[#c8c0a5]"><span>{item.organization}</span><Award className="w-4 h-4 text-[#d3ac51] shrink-0" /></div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
