import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

import React from "react";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default Cart;
