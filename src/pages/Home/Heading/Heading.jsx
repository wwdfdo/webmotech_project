import React from "react";

import { ReactComponent as Star } from "@images/goldstar.svg";

const Heading = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p className="text-white text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      <h1 className="text-6xl text-white font-extrabold tracking-wide">
        Your Cleaning Partner
      </h1>
      <p className="text-xl text-white font-normal">
        Lorem ipsum dolor sit amet consectetur.
        <br /> Libero urna elementum sed tincidunt elit phasellus eleifend.
      </p>
    </div>
  );
};

export default Heading;
