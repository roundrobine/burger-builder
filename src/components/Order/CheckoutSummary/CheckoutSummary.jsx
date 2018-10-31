import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css";

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>I hope it tastes well!!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.onCheckoutCancelled} buttonType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.onCheckoutContinued} buttonType="Success">
        COUNTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
