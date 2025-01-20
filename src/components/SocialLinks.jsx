import React from "react";
import { socialLinks } from "../layouts/NavData";

const SocialLinks = () => {
  return (
    <div className='flex space-x-2 text-[25px]'>
      {socialLinks.map((socialLink, id) => (
        <a
          key={id}
          href={socialLink.link}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-800 p-2 rounded-full hover:text-blue-500 transition-colors duration-300'
        >
          <socialLink.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
