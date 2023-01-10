import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { ShowCart } from "../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const quantity = totalQuantity;

  const handleClick = () => {
    dispatch(ShowCart());
  };
  return (
    <div className="cartIcon" onClick={handleClick}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
