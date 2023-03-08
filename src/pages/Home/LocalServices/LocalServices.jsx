import React from 'react';
import { LocalServicesData } from '@data/LocalServicesData';

import Container from '@components/Container';

const LocalServices = () => {
  return (
    <div className="flex flex-col items-center mx-auto py-20  w-4/5">
      <div className="flex flex-col items-center mb-24 gap-3">
        <h2 className="text-5xl font-extrabold">
          Our local house cleaning services
        </h2>
        <p className="text-xl font-bold">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      <div className="flex justify-around gap-10 w-5/6">
        {LocalServicesData.map(({ title, caption, icon, id }) => (
          <div
            key={id}
            className="flex flex-col items-center shadow-[inset_0_-3px_3px_rgba(0,0,0,0.2)] shadow-neutral-300 gap-6 py-12 px-12 rounded-lg"
          >
            <div className="w-[60px] h-[60px] rounded-full bg-primary flex justify-center items-center text-3xl text-white">
              {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-center">{caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalServices;
