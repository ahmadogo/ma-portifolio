import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { VscEyeClosed } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import SocialLinks from "../components/SocialLinks";
import NavLinks from "../components/NavLinks";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import profile from "../assets/images/p-img2.jpg";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className='z-50 '>
      {/* Sidebar container with transition for sliding in/out */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-40 md:hidden'
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-screen z-50 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0  md:w-1/4 lg:w-1/5`}
      >
        <div className='bg-gradient-to-b  from-gray-950 to-gray-900 text-white p-4 flex flex-col h-full'>
          {/* User profile section */}
          <div>
            <div>
              <img
                src={profile}
                alt='profile image'
                className='h-40  w-40 mx-auto rounded-full border-8 border-gray-800'
              />
            </div>
            <h1 className='mt-3 text-center mb-3 text-[20px] font-bold'>
              Ahmad Abdulkareem
            </h1>
            <SocialLinks />
          </div>

          {/* Navigation links section */}
          <div className='flex-grow overflow-y-auto'>
            <NavLinks />
          </div>
        </div>
      </div>

      {/* Toggle button for sidebar */}
      <div className='fixed top-4 right-4 z-50 md:hidden cursor-pointer text-4xl p-2 text-white bg-gray-800 rounded-full'>
        {isSidebarOpen ? (
          <VscEyeClosed onClick={() => setIsSidebarOpen(false)} />
        ) : (
          <BiMenuAltRight onClick={() => setIsSidebarOpen(true)} />
        )}
      </div>

      {/* Back to top Arrow */}
      {location.hash !== "#home" && (
        <div className='fixed bottom-4 right-4 z-20 cursor-pointer text-3xl p-1 text-white bg-gray-800 rounded-full'>
          <HashLink smooth to='#home'>
            <IoIosArrowUp />
          </HashLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
