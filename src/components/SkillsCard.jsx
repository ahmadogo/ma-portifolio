import React from "react";
import { expertise } from "../data/Skills";

const SkillsCard = () => {
  return (
    <div className='mt-5'>
      <div className='w-[60%] grid grid-cols-3'>
        {expertise.map((skill, index) => (
          <div
            key={index}
            className='flex  items-center rounded-sm mt-1 gap-2 px-2'
            style={{ backgroundColor: skill.bgColor }}
          >
            <p style={{ color: skill.iconColor }}>{skill.title}</p>
            <skill.icon style={{ color: skill.iconColor }} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default SkillsCard;
