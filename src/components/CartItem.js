import React from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeFromCart(id));
  };
  const addHandler = () => {
    dispatch(
      addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
