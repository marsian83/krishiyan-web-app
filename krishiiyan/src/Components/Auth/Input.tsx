import React from "react";
import { TextField } from "@mui/material";

const Input = (props: any) => {
  return (
    <div className="my-5">
      <label htmlFor={props?.labelFor} className="sr-only">
        {props?.labelText}
      </label>
      <TextField
        fullWidth
        onChange={props?.handleChange}
        value={props?.value}
        id={props?.id}
        name={props?.name}
        type={props?.type}
        required={props?.isRequired}
        className={props?.fixedInputClass + props?.customClass}
        placeholder={props?.placeholder}
      />
    </div>
  );
};

export default Input;
