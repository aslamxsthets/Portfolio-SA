import React from 'react';
import { skillsData, skillCategories } from '../../data/skills';

export const Skills: React.FC = () => {
  const categoryCards = skillCategories.map((category) => ({
    name: category,
    skills: skillsData.filter((skill) => skill.category === category)
  }));

  return (
    <section id="skills" className="gta-section py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <div className="gta-script text-[#4f6841] text-lg mb-1">Player Statistics</div>
          <h3 className="gta-heading text-3xl sm:text-4xl font-black tracking-tight text-[#fff1cf]">
            SKILLS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {categoryCards.map((category) => (
            <div
              key={category.name}
              className="group relative p-5 rounded-sm bg-[#252820] text-[#f0dfbd] border border-[#d3ac51]/60 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#d3ac51]">
                  {category.skills.length} topics
                </span>
                <span className="h-2.5 w-2.5 bg-[#9ab45f]" />
              </div>

              <h3 className="font-heading font-black text-xl text-[#fff1cf] group-hover:text-[#d3ac51] transition-colors">
                {category.name}
              </h3>

              <ul className="mt-4 space-y-2.5">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-2 text-xs text-[#c8c0a5]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9ab45f]" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
