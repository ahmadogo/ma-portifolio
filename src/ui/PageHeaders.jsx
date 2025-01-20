import React from "react";

const PageHeaders = ({ title }) => {
  return (
    <div>
      <h1 className='md:text-4xl text-2xl text-gray-800 font-extrabold  inline-block'>
        {title}
        <span className='block h-1 bg-gray-800 md:mt-3 mt-1 w-20 rounded-sm ' />
      </h1>
    </div>
  );
};

export default PageHeaders;
