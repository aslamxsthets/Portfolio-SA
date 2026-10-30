import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="gta-section py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 01"
          badge="IDENTITY"
          title="PROFILE"
          subtitle="Cybersecurity student who focused on Digital Forensics, investigation, incident response and network security."
        />

        <div className="relative mt-10 p-6 sm:p-8 rounded-sm bg-[#252820] text-[#f0dfbd] border border-[#d3ac51]/60 shadow-sm overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="relative shrink-0 group">
              <img src={`${import.meta.env.BASE_URL}Suit%20DP.jpeg`} alt="Aslam Javeed" className="w-36 h-44 sm:w-44 sm:h-52 rounded-sm object-cover object-center border-4 border-[#d3ac51] shadow-lg" />
              <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-sm bg-[#d3ac51] text-[#171817] font-mono text-[9px] font-bold uppercase shadow-sm">
                PROFILE CARD
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171817] border border-[#d3ac51]/50 text-[#d3ac51] font-mono text-xs font-bold uppercase mb-3">
                <Quote className="w-3.5 h-3.5 text-[#d3ac51]" />
                <span>ABOUT</span>
              </div>

              <p className="text-base sm:text-lg text-[#c8c0a5] leading-relaxed max-w-2xl">
                My focus is on Cybersecurity and Digital Forensics & Incident Response, with an interest in threat analysis, network security and incident response. I enjoy investigating digital evidence, exploring security vulnerabilities and building practical security solutions. I just love to question and investigate issues and problems just to solve the riddles and my curiousness. And also I am a Founder & President of a student-driven Cybersecurity Community called "Will Of D".
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
