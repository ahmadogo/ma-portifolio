import React from "react";
import { MdPerson } from "react-icons/md";
import { personalInfo } from "../data/About";
import { MdKeyboardArrowRight } from "react-icons/md";
// import ak from "../assets/images/profile-img.jpg"

const AboutCard = () => {
  return (
    <div className='mt-28 grid grid-cols-1 md:grid-cols-3 gap-4'>
      <div className='col-span-1  flex justify-center items-center bg-slate-100 rounded-lg'>
        <MdPerson className='text-[250px] text-gray-800' />
        {/* <img src={ak} alt="a.k image" className="w-[60%] h-[50%]" /> */}
      </div>

      <div className='col-span-2'>
        <h2 className='md:text-3xl text-[20px] mt-5 md:mt-0 font-bold text-gray-900'>
          Web Developer & Statistician
        </h2>
        <p className='mt-2 text-gray-800 font-semibold'>
          Below are my personal info and educational background:
        </p>

        <div className='mt-4'>
          {personalInfo.map((info) => (
            <div className='flex items-center mt-2 text-nowrap'>
              <MdKeyboardArrowRight className='text-gray-800 text-3xl ' />
              <ul className='md:space-y-2 '>
                <li className='text-gray-800 font-semibold'>
                  <strong> {info.title}:</strong> {info.value}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
