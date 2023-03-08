import React from "react";

const Button = ({ children, fill, disabled, className, ...props }) => {
  return (
    <button
      className={` py-2 px-4 rounded-lg ${
        disabled ? "ursor-not-allowed bg-slate-300" : "cursor-pointer"
      } ${fill ? "bg-primary text-white" : "border-2 border-primary"} ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
