// filepath: /c:/Users/ahmad/Documents/portifolio/src/components/Location.jsx
import React from "react";
import { reachUs } from "../data/Contact";
import Map from "../ui/Map";

const Location = () => {
  return (
    <div className='shadow-lg p-5 w-full'>
      {reachUs.map((item) => (
        <div key={item.id} className='flex items-center space-x-2 py-5'>
          <span className='bg-slate-200 hover:bg-slate-500 p-2 rounded-full'>
            <item.icon className='text-blue-400 text-3xl' />
          </span>
          <div>
            <h1 className='font-bold text-gray-800 text-[1.125rem]'>
              {item.title}
            </h1>
            <p className='font-semibold text-sm text-wrap'>{item.info}</p>
          </div>
        </div>
      ))}

      <Map />
    </div>
  );
};

export default Location;