import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCard = ({ icon: Icon, proficiency, title }) => {
  return (
    <div className='flex flex-col items-center space-y-2'>
      <div className='flex items-center space-x-2'>
        <Icon className='md:text-4xl text-2xl text-gray-800' />
        <span className='md:text-sm text-[12px] md:font-semibold font-bold text-gray-800'>
          {title}
        </span>
      </div>
      <div style={{ width: 80, height: 100 }}>
        <CircularProgressbar
          value={proficiency}
          text={`${proficiency}%`}
          styles={buildStyles({
            textColor: '#333',
            pathColor: '#3b82f6',
            trailColor: '#d1d5db',
          })}
        />
      </div>
    </div>
  );
};

export default ProgressCard;
