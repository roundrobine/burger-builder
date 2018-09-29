import React from "react";
import classes from "./Modal.css";

const modal = props => {
  return (
    <div
      style={{
        transform: props.show ? "translateY(-50px)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  );
};

export default modal;
