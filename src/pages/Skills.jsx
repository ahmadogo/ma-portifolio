import React from "react";
import SkillsCard from "../components/SkillsCard";
import PageHeaders from "../ui/PageHeaders";

const Skills = () => {
  return (
    <div id='my-skills' className='scroll-smooth mt-10 p-5'>
      <PageHeaders title='Skills' />

      <p className='mt-5 text-lg font-semibold text-gray-800'>
        I have a diverse set of skills, ranging from design to development.
        <br />
        Below are some of the tools, frameworks, and programming languages I am
        proficient in
      </p>
      <SkillsCard/>
    </div>
  );
};

export default Skills;
