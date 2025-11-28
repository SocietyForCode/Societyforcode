// components/Capability.jsx

import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Capability = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4 sm:p-6 md:p-8 bg-white rounded-xl transition duration-300 hover:shadow-lg">
      
      {/* Column 1: Icon and Title stacked vertically */}
      <div className="flex flex-col items-start gap-3 sm:min-w-[180px] md:min-w-[220px] flex-shrink-0">
        {/* Icon */}
        <div className="text-purple-600 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          {typeof icon === 'string' ? (
            <Image
              src={icon}
              alt={`${title} icon`}
              width={80}
              height={80}
              className="object-contain w-full h-full"
            />
          ) : (
            <div className="scale-125">{icon}</div>
          )}
        </div>

        {/* Title beneath icon */}
        <h3 className="text-xl md:text-2xl  font-syne font-[600] text-gray-900">
          {title}
        </h3>
      </div>
 
      {/* Column 2: Description in the middle */}
      <div className="flex-grow">
        <p className="text-gray-600 text-sm md:text-base font-[400] font-inter font-[1rem] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Column 3: Button on the right */}
      <div className="w-full sm:w-auto flex-shrink-0">
        <Button
          bgColor='white'
          border='2px border-2 border-yellow-500'
          textColor="text-green"
          fontSize='500'
        >
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default Capability;