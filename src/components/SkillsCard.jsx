import React from 'react';
import { tools, frameWorks, languages } from '../data/Skills';
import ProgressCard from './ProgressCard';

const SkillsCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      {/* Tools strength */}
      <div className='mt-10 shadow-xl p-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Tools</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-12 mt-5'>
          {tools.map((tool) => (
            <ProgressCard
              key={tool.index}
              icon={tool.icon}
              proficiency={tool.proficiency}
              
            />
          ))}
        </div>
      </div>

      {/* Languages strength */}
      <div className='mt-10 shadow-xl p-5'>
        <h2 className='text-2xl font-bold text-[#3b82f6]'>Languages</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-12 mt-5'>
          {languages.map((language) => (
            <ProgressCard
              key={language.index}
              icon={language.icon}
              proficiency={language.proficiency}
            />
          ))}
        </div>
      </div>

      {/* Frameworks strengths */}
      <div className='mt-10 shadow-xl p-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Frameworks</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-12 mt-5'>
          {frameWorks.map((framework) => (
            <ProgressCard
              key={framework.index}
              icon={framework.icon}
              proficiency={framework.proficiency}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
