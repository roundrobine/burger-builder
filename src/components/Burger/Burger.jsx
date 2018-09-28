import React from "react";
import classes from "./Burger.css";
import BurgerIngrediant from "./BurgerIngredient/BurgerIngredient";

const burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngrediant type="bread-top" />
      <BurgerIngrediant type="chesse" />
      <BurgerIngrediant type="meat" />
      <BurgerIngrediant type="bread-bottom" />
    </div>
  );
};

export default burger;
