import React from "react";
import classes from "./BurgerIngredient.css";
import PropTypes from "prop-types";

const BurgerIngredient = props => {
  let ingredint = null;

  switch (props.type) {
    case "bread-bottom":
      ingredint = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredint = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case "meat":
      ingredint = <div className={classes.Meat} />;
      break;
    case "bacon":
      ingredint = <div className={classes.Bakon} />;
      break;
    case "chesse":
      ingredint = <div className={classes.Cheese} />;
      break;
    case "salad":
      ingredint = <div className={classes.Salad} />;
      break;
    default:
      ingredint = null;
  }
  return ingredint;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
