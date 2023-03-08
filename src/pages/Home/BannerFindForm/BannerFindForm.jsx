import React from "react";
import { IoIosSearch } from "react-icons/io";
import Button from "@components/Button";
import "./BannerFindForm.css";

const BannerFindForm = () => {
  return (
    <div className="bg-white mt-10 rounded-lg flex justify-around gap-2 py-4 px-3 w-[92%] ">
      <div className="flex items-center gap-2 rounded-md shadow-[inset_0_-1px_2px_rgba(0,0,0,0.3)]  ">
        <IoIosSearch className="ml-3 opacity-50 cursor-pointer" size={22} />
        <form>
          <input
            type="text"
            className=" outline-none opacity-50"
            placeholder="Enter your postalcode"
          />
          <button type="submit"></button>
        </form>
      </div>
      <div className=" shadow-[inset_0_-1px_2px_rgba(0,0,0,0.3)] rounded-md flex items-center p-1">
        <input
          type="date"
          id="date-input"
          name="date"
          className="outline-none opacity-70 "
        />
      </div>

      <Button fill>Find your cleaner</Button>
    </div>
  );
};

export default BannerFindForm;
