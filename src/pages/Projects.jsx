import React from "react";
import ProjectCard from "../components/ProjectCard";
import { myProjects } from "../data/Project";
import PageHeaders from "../ui/PageHeaders";

const Projects = () => {
  return (
    <div id='my-projects' className='scroll-smooth mt-10 p-5'>
     <PageHeaders title='Projects'/>

      <div>
        <p className='mt-5 text-lg font-semibold text-gray-800'>
          The projects below highlight my skills and experience through
          real-world examples of my work.
          <br />
          Each project is accompanied by a brief description, along with links
          to the corresponding code repositories and live demos.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-5'>
        {myProjects.map((project, id) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            project1={project.img}
            repoLink={project.repoLink}
            hosted={project.hosted}
            hostedLink={project.hostedLink}
            repo={project.repo}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
