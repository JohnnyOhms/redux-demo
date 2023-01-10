import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
const Layout = () => {
  const ShowCart = useSelector((state) => state.cart.ShowCart);
  const cartItems = useSelector((state) => state.cart.cartItems);
  let total = 0;
  cartItems.map((item) => {
    total += item.totalPrice;
  });

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
      {ShowCart && <CartItems />}
    </React.Fragment>
  );
};

export default Layout;
