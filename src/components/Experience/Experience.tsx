import React, { useEffect, useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { experienceData } from '../../data/experience';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + experienceData.length) % experienceData.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % experienceData.length);
  };

  useEffect(() => {
    const timer = window.setInterval(showNext, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="experience" className="gta-section py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 05"
          badge="HANDS-ON PRACTICE"
          title="CAREER HISTORY"
          subtitle="Internship certificates"
        />

        <div className="gta-coverflow mt-8" aria-label="Career certificates">
          <button
            type="button"
            className="gta-coverflow-control gta-coverflow-control-left"
            onClick={showPrevious}
            aria-label="Show previous certificate"
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <div className="gta-coverflow-track">
            {experienceData.map((exp, index) => {
              const offset = index - activeIndex;
              const normalizedOffset =
                offset > experienceData.length / 2
                  ? offset - experienceData.length
                  : offset < -experienceData.length / 2
                    ? offset + experienceData.length
                    : offset;

              return (
                <button
                  type="button"
                  key={exp.id}
                  className="gta-coverflow-card"
                  data-position={normalizedOffset}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${exp.organization} certificate`}
                  aria-current={normalizedOffset === 0 ? 'true' : undefined}
                >
                  <img
                    src={exp.certificateUrl}
                    alt={`${exp.organization} certificate`}
                    loading="eager"
                    decoding="async"
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="gta-coverflow-control gta-coverflow-control-right"
            onClick={showNext}
            aria-label="Show next certificate"
          >
            <ChevronRight aria-hidden="true" />
          </button>

          <div className="gta-coverflow-dots" aria-hidden="true">
            {experienceData.map((exp, index) => (
              <span key={exp.id} className={index === activeIndex ? 'is-active' : ''} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
