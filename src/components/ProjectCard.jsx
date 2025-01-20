import React from "react";
import { RiGitRepositoryFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";

const ProjectCard = ({
  title,
  project1,
  repoLink,
  hostedLink,
  description,
  tags,
}) => {
  return (
    <div className='mt-14 shadow-lg rounded-lg group'>
      <div className='w-full'>
        <div className='shadow-lg'>
          <img src={project1} alt='project-img' className='w-full' />
        </div>

        <div className='flex mt-5 justify-between items-center'>
          <h3 className='mt-2 p-2 font-extrabold text-md text-gray-800'>
            {title}
          </h3>
          <div className='flex gap-3 items-center'>
            <a
              href={hostedLink}
              target='_blank'
              rel='noopener noreferrer'
              title='View Project'
              className='text-gray-800 mx-2 flex flex-col items-center'
            >
              <FaEye className='text-3xl' />
              {/* <p className='text-sm font-bold'>View</p> */}

            </a>
            <a
              href={repoLink}
              target='_blank'
              rel='noopener noreferrer'
              title="View Project's Repo"
              className='text-gray-800 mx-2 flex flex-col items-center'
            >
              <RiGitRepositoryFill className='text-3xl' />
              {/* <p className='text-sm font-bold'>Repo</p> */}
            </a>
          </div>
        </div>

        <p className='p-2 font-semibold text-gray-800'>{description}</p>
        <div className='flex flex-wrap mt-2 p-2'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='px-2 py-1 font-extrabold text-orange-600 mr-2'
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
