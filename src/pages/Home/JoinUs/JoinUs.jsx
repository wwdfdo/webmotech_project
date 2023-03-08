import React from "react";

import joinusImg from "@images/joinusImg.png";

import Container from "@components/Container";

const JoinUs = () => {
  return (
    <div className="w-full bg-[#F2F7FB] py-28">
      <Container>
        <div className="w-5/6 mx-auto flex items-center gap-20">
          <div className="flex flex-col gap-8 pl-5 pr-20 w-2/3">
            <h3 className="text-[2.6rem] leading-[3rem] font-bold">
              Join with Us, as a <br /> company or cleaner
            </h3>
            <p className="text-[1.3rem] text-primary">
              Lorem ipsum dolor sit amet consectetur. Nunc <br /> id lacus
              cursus nibh morbi dictum.{" "}
            </p>
            <p className="text-[#8A888D]">
              Lorem ipsum dolor sit amet consectetur. Nunc id lacus cursus nibh
              morbi dictum. Nunc magna ante auctor ornare volutpat. Lectus
              pharetra volutpat ullamcorper faucibus at volutpat tempor rutrum.
              In feugiat lectus lectus augue sem quis aenean vitae malesuada.
            </p>
            <div className=" mt-5">
              <button className=" rounded-md bg-primary text-white py-2 px-10">
                Apply Online
              </button>
            </div>
          </div>
          <div>
            <img src={joinusImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JoinUs;
