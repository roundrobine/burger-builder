import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBullder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 1,
      cheese: 2,
      meat: 1
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controles</div>
      </Aux>
    );
  }
}

export default BurgerBullder;
