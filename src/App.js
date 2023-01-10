import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notifcation from "./components/notifcation";
import { fetchCartData, sendCartDataToDB } from "./store/cartAction";

function App() {
  let fisrtRender = true;
  const loggedInState = useSelector((state) => state.auth.loggedIn);
  const cartItem = useSelector((state) => state.cart.cartItems);
  const showNotification = useSelector((state) => state.notify.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sendCartDataToDB(cartItem));
  }, [cartItem, dispatch]);

  return (
    <div className="App">
      {showNotification ? (
        <Notifcation
          message={showNotification.message}
          sign={showNotification.sign}
        />
      ) : null}
      {!loggedInState ? <Auth /> : <Layout />}
    </div>
  );
}

export default App;
