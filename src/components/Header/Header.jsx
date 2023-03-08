import React from "react";

import { useSelector } from "react-redux";

import UserPanel from "@components/UserPanel";
import NavButtons from "@components/NavButtons";
import Navigation from "@components/Navigation";
import Logo from "@components/Logo";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <header
      className={`fixed flex justify-between items-center bg-white z-[1000] w-full  min-h-[80px] shadow-[inset_0_-2px_0px_0px_rgba(0,0,0,0.2)] ${
        user ? " px-10 " : "px-20"
      }`}
    >
      <Logo />
      <Navigation />
      {user?.token ? <UserPanel /> : <NavButtons />}
    </header>
  );
};

export default Header;
