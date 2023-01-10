import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import notificationSlice from "./notificationSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    notify: notificationSlice,
  },
});
