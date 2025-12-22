import React from "react";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMessage";
export const Input = ({ placeholderName, type, Labelname, hidden = false }) => {
  return (
    <div className="flex flex-col grow pb-2">
      <Label val={Labelname} />
      <input
        hidden={hidden}
        className="border rounded-md p-2 h-11"
        placeholder={placeholderName}
        type={type}
      />
    </div>
  );
};
