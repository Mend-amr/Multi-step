import React from "react";
export const Label = ({ val }) => {
  return (
    <div className="pb-2 font-semibold">
      {val}
      <div>{val}</div>
      <div className="text-red-500">*</div>
    </div>
  );
};
