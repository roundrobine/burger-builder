import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBullder extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controles</div>
      </Aux>
    );
  }
}

export default BurgerBullder;
