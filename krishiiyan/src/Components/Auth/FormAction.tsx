import React from "react";
import Button from "@mui/material/Button";

const FormAction = (props: any) => {
  // console.log({props});
  
  return (
    <>
      {props?.type === "Button" ? (
        <Button
          sx={{mt:2}}
          type={props?.action}
          onSubmit={props?.handleSubmit}
          variant="contained"
        >
          {props?.text}
        </Button>
      ) : (
        <></>
      )}
    </>
  );
};

export default FormAction;
