import React from 'react';
import BannerFindForm from '../BannerFindForm';
import Heading from '../Heading';

const Banner = () => {
  return (
    <div className=" bg-banner w-full h-[100vh] bg-cover">
      <div className="w-full h-[100vh] flex items-center backdrop-brightness-50">
        <div className="ml-20">
          <Heading />
          <BannerFindForm />
        </div>
      </div>
    </div>
  );
};

export default Banner;
