import React from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/authSlice";

const Auth = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" onClick={() => dispatch(loginUser())}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
