import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="gta-section-alt py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 02"
          badge="EDUCATION"
          title="DEGREE PURSUING"
          subtitle="Focused academic training in Internet of Things, Cybersecurity and Blockchain Technology."
        />

        <div className="mt-10 rounded-sm bg-[#252820] border-2 border-[#d3ac51]/60 shadow-md p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-red-600/10 text-red-600 border border-red-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-mono text-red-600 dark:text-red-400 font-bold uppercase tracking-wider mb-2">B.Tech</p>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#fff1cf] leading-tight">
                B.Tech Computer Science and Engineering
              </h3>
              <p className="mt-3 text-base text-[#c8c0a5]">
                (IoT & Cybersecurity including Blockchain Technology)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
