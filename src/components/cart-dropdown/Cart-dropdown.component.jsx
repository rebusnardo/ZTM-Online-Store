import "./cart-dropdown.styles.scss";
import Button from "../button/Button.component";
import React from "react";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
