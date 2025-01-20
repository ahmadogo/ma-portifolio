import React from "react";
import AboutCard from "../components/AboutCard";
import PageHeaders from "../ui/PageHeaders";

const About = () => {
  return (
    <div id='about-me' className='scroll-smooth mt-10 p-5'>
     <PageHeaders title='About Me'/>
      <p className='text-[1.125rem] mt-5 font-semibold text-gray-900'>
        Hi, I'm Ahmad Abdulkareem!
        <br />I am a passionate and dedicated web developer with a strong
        background in both frontend and backend technologies.
        <br /> My goal is to create dynamic and responsive web applications that
        provide excellent user experiences.
      </p>

      <AboutCard/>
    </div>
  );
};

export default About;
