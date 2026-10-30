import React from 'react';

interface SectionHeadingProps {
  chapter?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  chapter,
  title,
  subtitle,
  badge,
  align = 'center'
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 ${isCenter ? 'text-center' : 'text-left'}`}>
      <h2 className="gta-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#fff1cf] relative inline-block">
        {title}
        <span className="block h-1 w-20 bg-[#d97732] mt-2 transition-all duration-300 group-hover:w-full mx-auto" />
      </h2>

      {subtitle && (
        <p className={`mt-3 text-[#4c4a3e] dark:text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
