import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { certificationsData } from '../../data/certifications';
import { soundEngine } from '../../utils/sound';
import { ShieldCheck, Clock, Award, CheckCircle, Search } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'COMPLETED' | 'IN PROGRESS'>('ALL');

  const filteredCerts = certificationsData.filter((c) => {
    if (filter === 'ALL') return true;
    return c.status === filter;
  });

  return (
    <section id="certifications" className="gta-section-alt py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 07"
          badge="ACCREDITATION"
          title="COMPLETED MISSIONS"
          subtitle="Selected cybersecurity and systems learning completed through Cisco and Linux-focused training."
        />

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {(['ALL', 'COMPLETED', 'IN PROGRESS'] as const).map((opt) => (
            <button
              key={opt}
              onClick={() => {
                soundEngine.playWhoosh();
                setFilter(opt);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 ${
                filter === opt
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-[#11130f] text-[#f0dfbd] border border-[#d3ac51]/50 hover:border-[#d3ac51]'
              }`}
            >
              {opt} ({opt === 'ALL' ? certificationsData.length : certificationsData.filter(c => c.status === opt).length})
            </button>
          ))}
        </div>

        {/* Collectible Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => {
            const isCompleted = cert.status === 'COMPLETED';
            return (
              <div
                key={cert.id}
                className="group relative p-5 rounded-sm bg-[#252820] border border-[#d3ac51]/60 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono text-[#c8c0a5] uppercase font-semibold">
                      {cert.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                        isCompleted
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/40'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <CheckCircle className="w-3 h-3" />
                          <span>COMPLETED</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3" />
                          <span>IN PROGRESS</span>
                        </>
                      )}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#fff1cf] group-hover:text-[#d3ac51] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-600 dark:text-neutral-400">
                  <span className="font-medium text-[#c8c0a5]">{cert.issuer}</span>
                  <Award className="w-4 h-4 text-[#d3ac51] shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
