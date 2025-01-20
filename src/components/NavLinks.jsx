// filepath: /c:/Users/ahmad/Documents/portifolio/src/components/NavLinks.jsx
import React, { useState } from "react";
import { navLinks } from "../layouts/NavData";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className=''>
      {navLinks.map((navLink, id) => (
        <HashLink
          key={id}
          className={`flex items-center font-bold space-x-5 mt-8 cursor-pointer transition-colors duration-300 ${
            location.hash === `#${navLink.path}` ? "bg-gray-800 text-blue-500" : "hover:text-blue-500"
          }`}
          smooth to={`#${navLink.path}`}
          
        >
          <navLink.icon className='text-3xl' />
          <p>{navLink.name}</p>
        </HashLink>
      ))}
    </div>
  );
};

export default NavLinks;