import React from "react";
import TypedComponent from "../components/TypedComponent";

const Home = () => {
  return (
    <div
      id='home'
      className=" bg-[url('src/assets/images/code2-bg.jpg')] bg-cover bg-center h-screen scroll-smooth text-white pt-16 z-10" // added z-10 for layering
    >
      {/* Overlay */}
      <div className=' inset-0 bg-black opacity-50'></div>

      {/* Content */}
      <div className=' md:pt-[25%] pt-[70%] pl-5 text-white'>
        <h1 className='md:text-5xl text-3xl text-gray-200 font-extrabold'>
          Ahmad <br /> <span className='pl-5'>Abdulkareem</span>
        </h1>
        <div className='md:text-3xl text-2xl font-semibold pt-5'>
          <TypedComponent
            strings={[
              "I'm a Frontend Dev",
              "I'm a Backend Dev",
              "Call me a Fullstack Engnr 😎",
              "I'm a Statistician",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
