import React from "react";
import classes from "./BurgerIngredient.css";
import PropTypes from "prop-types";

const BurgerIngredient = props => {
  let ingredint = null;

  switch (props.type) {
    case "bread-bottom":
      ingredint = <div className={classes.BreadBottom} />;
      break;
    case "bread-bottom":
      ingredint = (
        <div className={classes.Top}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
    case "meat":
      ingredint = <div className={classes.Meat} />;
      break;
    case "bacon":
      ingredint = <div className={classes.Meat} />;
      break;
    case "cheese":
      ingredint = <div className={classes.Meat} />;
      break;
    case "salad":
      ingredint = <div className={classes.Meat} />;
      break;
    default:
      ingredint = null;
  }
  return ingredint;
};

BurgerIngredient.PropTypes = {
    type: PropTypes.string.isRequired;
}

export default BurgerIngredient;
