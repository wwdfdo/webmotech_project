import React from 'react';

const InputWithLabel = ({ field, label, ...props }) => {
  return (
    <div className="flex flex-col mb-2">
      <label className="mb-1">{label}</label>
      <input
        {...field}
        {...props}
        className="border-[1px] border-slate-300 rounded-md py-2 px-3"
      />
    </div>
  );
};

export default InputWithLabel;
