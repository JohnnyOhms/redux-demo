import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(
      addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={clickHandler}>Add to cart</button>
    </div>
  );
};

export default Product;
