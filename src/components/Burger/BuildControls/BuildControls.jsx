import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bakon" }
];

const buildContols = props => {
  return (
    <div className={classes.BuildContols}>
      {controls.map(control => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            type={control.type}
          />
        );
      })}
    </div>
  );
};

export default buildContols;
