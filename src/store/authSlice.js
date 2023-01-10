import { createSlice } from "@reduxjs/toolkit";

const initialState = { loggedIn: false };
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { loginUser, logout } = authSlice.actions;
export default authSlice.reducer;
